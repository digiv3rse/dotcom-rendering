// @flow
/* eslint-disable global-require */

import path from 'path';
import express from 'express';
import defaultDocument from '@guardian/guui/document';

import type { $Request, $Response } from 'express';

import { dist, getPagesForSite, root } from '../../config';

const render = async ({ params, body }: $Request, res: $Response) => {
    try {
        const { page } = params;
        const data = {
            page,
            body,
        };

        const [{ default: Page }, document] = await Promise.all([
            import(`../../frontend/pages/${page}.js`),
            import(`../../frontend/document.js`)
                .then(module => module.default)
                .catch(() => defaultDocument),
        ]);

        const pageSrc = await document({ Page, data });
        res.status(200).send(pageSrc);
    } catch (e) {
        res.status(500).send(`<pre>${e.stack}</pre>`);
    }
};

// this export is the function used by webpackHotServerMiddleware in /dev-server.js
export default () => render;

// this is the actual production server
if (process.env.NODE_ENV === 'production') {
    const app = express();

    app.use(express.json({ limit: '50mb' }));

    app.get('/_healthcheck', (req, res) => {
        res.status(200).send('OKAY');
    });

    // if running prod server locally, serve local assets
    if (!process.env.GU_PUBLIC) {
        app.use(
            '/static',
            express.static(
                path.relative(
                    __dirname,
                    path.resolve(root, 'frontend', 'static'),
                ),
            ),
        );

        app.use('/assets', express.static(path.relative(__dirname, dist)));
    }

    app.use('/:page', render);

    app.get('/', async (req, res) => {
        try {
            const pages = await getPagesForSite('frontend');
            res.send(`
                <!DOCTYPE html>
                <html>
                <body>
                    <ul>
                    ${pages
                        .map(page => `<li><a href="/${page}">${page}</a></li>`)
                        .join('')}
                    </ul>
                </body>
                </html>
            `);
        } catch (e) {
            res.status(500).send(`<pre>${e.stack}</pre>`);
        }
    });

    // express requires all 4 args here:
    // eslint-disable-next-line no-unused-vars
    app.use((err, req, res, next) => {
        res.status(500).send(`<pre>${err.stack}</pre>`);
    });
    app.listen(9000);
}
