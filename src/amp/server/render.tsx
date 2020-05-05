import React from 'react';
import express from 'express';
import { document } from '@root/src/amp/server/document';
import { Article } from '@root/src/amp/pages/Article';
import { extractScripts } from '@root/src/amp/lib/scripts';
import { extract as extractNAV } from '@root/src/model/extract-nav';
import { AnalyticsModel } from '@root/src/amp/components/Analytics';
import { experimentFullConfig } from '@root/src/amp/experimentConfigs';
import { validateAsCAPIType as validateV2 } from '@root/src/model/validate';
import { findBySubsection } from '@root/src/model/article-sections';
import { bodyJSON } from '@root/src/model/exampleBodyJSON';
import { generatePermutivePayload } from '@root/src/amp/lib/permutive';
import { getAllActiveExperiments } from '@root/src/amp/lib/experiment';

export const render = ({ body }: express.Request, res: express.Response) => {
    try {
        // TODO remove when migrated to v2
        const CAPI = validateV2(body);
        const { linkedData } = CAPI;
        const { config } = CAPI;
        const blockElements = CAPI.blocks.map(block => block.elements);

        // This is simply to flatten the elements
        const elements = ([] as CAPIElement[]).concat(...blockElements);

        const scripts = [...extractScripts(elements, CAPI.mainMediaElements)];

        const sectionName = CAPI.sectionName || '';

        const analytics: AnalyticsModel = {
            gaTracker: 'UA-78705427-1',
            title: CAPI.headline,
            fbPixelaccount: '279880532344561',
            comscoreID: '6035250',
            section: sectionName,
            contentType: CAPI.contentType,
            id: CAPI.pageId,
            beacon: `${CAPI.beaconURL}/count/pv.gif`,
            neilsenAPIID: findBySubsection(sectionName).apiID,
            domain: 'amp.theguardian.com',
            permutive: {
                namespace: 'guardian',
                apiKey: '359ba275-5edd-4756-84f8-21a24369ce0b',
                payload: generatePermutivePayload(config),
            },
        };

        const activeExperiments = getAllActiveExperiments(
            experimentFullConfig,
            config.switches,
        );
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
                    articleData={CAPI}
                    nav={extractNAV(CAPI.nav)}
                    analytics={analytics}
                    experiments={activeExperiments}
                    config={config}
                />
            ),
        });

        res.status(200).send(resp);
    } catch (e) {
        // a validation error
        if (e instanceof TypeError) {
            res.status(400).send(`<pre>${e.message}</pre>`);
        } else {
            res.status(500).send(`<pre>${e.message}</pre>`);
        }
    }
};

export const renderPerfTest = (req: express.Request, res: express.Response) => {
    req.body = JSON.parse(bodyJSON);
    render(req, res);
};
