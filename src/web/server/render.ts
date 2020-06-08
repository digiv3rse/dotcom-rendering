import express from 'express';
import { extract as extractNAV } from '@root/src/model/extract-nav';

import { document } from '@root/src/web/server/document';
import { validateAsCAPIType } from '@root/src/model/validate';
import { addDropCaps } from '@root/src/model/add-dropcaps';
import { normalizeCallout } from '@root/src/model/normalizeCallout';
import { extract as extractGA } from '@root/src/model/extract-ga';
import { bodyJSON } from '@root/src/model/exampleBodyJSON';

export const render = ({ body }: express.Request, res: express.Response) => {
    try {
        const withCalloutNormalized: CAPIType = normalizeCallout(body);
        const withDropCaps: CAPIType = addDropCaps(withCalloutNormalized);
        const CAPI: CAPIType = validateAsCAPIType(withDropCaps);

        const resp = document({
            data: {
                CAPI: {
                    ...CAPI,
                    config: {
                        ...CAPI.config,
                        isDev: process.env.NODE_ENV !== 'production',
                    },
                },
                site: 'frontend',
                page: 'Article',
                NAV: extractNAV(CAPI.nav),
                GA: extractGA(CAPI),
                linkedData: CAPI.linkedData,
            },
        });

        res.status(200).send(resp);
    } catch (e) {
        res.status(500).send(`<pre>${e.stack}</pre>`);
    }
};

export const renderPerfTest = (req: express.Request, res: express.Response) => {
    req.body = JSON.parse(bodyJSON);
    render(req, res);
};
