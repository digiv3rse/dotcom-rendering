// @flow
/* eslint-disable global-require,import/no-dynamic-require */

import { log } from 'util';
import renderToString from 'preact-render-to-string';
import { extractCritical } from 'emotion-server';
import createStore from 'unistore';
import { Provider } from 'unistore/preact';

import Page from 'components/Page';
import doc from '__lib__/html';
import parseCapi from '../__tools__/parse-capi';

// just while we're not getting a full state from play
import appConfig from '../__config__/app';

const renderPage = async (req, res) => {
    try {
        const { page } = req.params;
        const data = {
            page,
            ...appConfig,
            ...parseCapi(req.body),
        };

        const module = await import(`./pages/${page}`);
        const PageType = module.default;

        const { html, ids: cssIDs, css } = extractCritical(
            renderToString(
                <Provider store={createStore(data)}>
                    <Page>
                        <PageType />
                    </Page>
                </Provider>,
            ),
        );
        res.status(200).send(doc({ html, data, css, cssIDs }));
    } catch (e) {
        log(e);
        res.status(404).send(`<pre>¯\\_(ツ)_/¯

${e}</pre>`);
    }
};

export default () => renderPage;
