import type { RequestHandler } from 'express';
import { Standard as ExampleArticle } from '../../../fixtures/generated/articles/Standard';
import { NotRenderableInDCR } from '../../lib/errors/not-renderable-in-dcr';
import { findBySubsection } from '../../model/article-sections';
import { extractNAV } from '../../model/extract-nav';
import { validateAsArticleType } from '../../model/validate';
import { recordTypeAndPlatform } from '../../server/lib/logging-store';
import { AmpArticlePage } from '../components/AmpArticlePage';
import type { AnalyticsModel } from '../components/Analytics';
import { isAmpSupported } from '../components/Elements';
import type { PermutiveModel } from '../components/Permutive';
import { enhance } from '../lib/enhance';
import { generatePermutivePayload } from '../lib/permutive';
import { extractScripts } from '../lib/scripts';
import { getAmpExperimentCache } from './ampExperimentCache';
import { renderArticle } from './render.article';

export const handleAMPArticle: RequestHandler = ({ body }, res, next) => {
	(async () => {
		recordTypeAndPlatform('article', 'amp');
		const article = validateAsArticleType(body);
		const { linkedData } = article;
		const { config } = article;
		const elements = await enhance(
			article.blocks.flatMap((block) => block.elements),
		);

		if (
			!isAmpSupported({
				format: article.format,
				tags: article.tags,
				elements,
				switches: article.config.switches,
				main: article.main,
			})
		) {
			throw new NotRenderableInDCR();
		}

		const scripts = [
			...extractScripts(elements, article.mainMediaElements),
		];

		const sectionName = article.sectionName ?? '';
		const neilsenAPIID = findBySubsection(sectionName).apiID;

		const permutive: PermutiveModel = {
			projectId: 'd6691a17-6fdb-4d26-85d6-b3dd27f55f08',
			apiKey: '359ba275-5edd-4756-84f8-21a24369ce0b',
			payload: generatePermutivePayload(config),
		};

		const analytics: AnalyticsModel = {
			gaTracker: 'UA-78705427-1',
			title: article.headline,
			comscoreID: '6035250',
			section: sectionName,
			contentType: article.contentType,
			id: article.pageId,
			neilsenAPIID,
			domain: 'amp.theguardian.com',
			ipsosSectionName: config.ipsosTag ?? 'guardian',
		};

		const metadata = {
			description: article.trailText,
			canonicalURL: article.webURL,
		};

		const resp = renderArticle({
			linkedData,
			scripts,
			metadata,
			title: `${article.headline} | ${article.sectionLabel} | The Guardian`,
			body: (
				<AmpArticlePage
					experimentsData={getAmpExperimentCache()}
					articleData={article}
					nav={extractNAV(article.nav)}
					analytics={analytics}
					permutive={permutive}
					config={config}
				/>
			),
		});

		res.status(200).send(resp);
	})().catch(next);
};

export const handlePerfTest: RequestHandler = (req, res, next) => {
	req.body = ExampleArticle;
	handleAMPArticle(req, res, next);
};
