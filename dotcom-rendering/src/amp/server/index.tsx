import type express from 'express';

import { document } from './document';
import { Article } from '../pages/Article';
import { extractScripts } from '../lib/scripts';
import { extractNAV } from '../../model/extract-nav';
import { AnalyticsModel } from '../components/Analytics';
import { validateAsCAPIType as validateV2 } from '../../model/validate';
import { findBySubsection } from '../../model/article-sections';
import { Article as ExampleArticle } from '../../../fixtures/generated/articles/Article';
import { generatePermutivePayload } from '../lib/permutive';
import { getAmpExperimentCache } from './ampExperimentCache';
import { NotRenderableInDCR } from '../../lib/errors/not-renderable-in-dcr';

export const render = ({ body }: express.Request, res: express.Response) => {
	try {
		// TODO remove when migrated to v2
		const CAPI = validateV2(body);
		const { linkedData } = CAPI;
		const { config } = CAPI;
		const blockElements = CAPI.blocks.map((block) => block.elements);

		// This is simply to flatten the elements
		const elements = ([] as CAPIElement[]).concat(...blockElements);

		const scripts = [...extractScripts(elements, CAPI.mainMediaElements)];

		const sectionName = CAPI.sectionName || '';
		const neilsenAPIID = findBySubsection(sectionName).apiID;

		const analytics: AnalyticsModel = {
			gaTracker: 'UA-78705427-1',
			title: CAPI.headline,
			fbPixelaccount: '279880532344561',
			comscoreID: '6035250',
			section: sectionName,
			contentType: CAPI.contentType,
			id: CAPI.pageId,
			neilsenAPIID,
			domain: 'amp.theguardian.com',
			permutive: {
				namespace: 'guardian',
				apiKey: '359ba275-5edd-4756-84f8-21a24369ce0b',
				payload: generatePermutivePayload(config),
			},
			ipsosSectionName: config.ipsosTag || 'guardian',
		};

		const metadata = {
			description: CAPI.trailText,
			canonicalURL: CAPI.webURL,
		};

		const resp = document({
			linkedData,
			scripts,
			metadata,
			title: `${CAPI.headline} | ${CAPI.sectionLabel} | The Guardian`,
			body: (
				<Article
					experimentsData={getAmpExperimentCache()}
					articleData={CAPI}
					nav={extractNAV(CAPI.nav)}
					analytics={analytics}
					config={config}
				/>
			),
		});

		res.status(200).send(resp);
	} catch (e) {
		// a validation error
		if (e instanceof TypeError) {
			res.status(400).send(`<pre>${e.message}</pre>`);
		} else if (e instanceof NotRenderableInDCR) {
			res.status(415).send(`<pre>${e.message}</pre>`);
		} else {
			// @ts-expect-error
			// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
			res.status(500).send(`<pre>${e.message}</pre>`);
		}
	}
};

export const renderPerfTest = (req: express.Request, res: express.Response) => {
	req.body = ExampleArticle;
	render(req, res);
};
