// @flow

import resetCSS from './__reset-css';

export default ({
    title = 'The Guardian',
    css = '',
    cssIDs = '',
    html = '',
    jsApp = '/assets/javascript/app.browser.js',
    jsVendor = '/assets/javascript/vendor.browser.js',
    state = {},
    jsNonBlocking = '',
}: {
    title?: string,
    css: string,
    html: string,
    jsApp?: string,
    state?: {},
    jsNonBlocking?: string,
}) => `
    <!doctype html>
    <html>
        <head>
            <title>${title}</title>
            <style>${resetCSS}${css}</style>
        </head>
        <body>
            <div id='app'>${html}</div>
            <script>
            window.gu = {
                app: {
                    state: ${JSON.stringify(state)},
                    cssIDs: ${JSON.stringify(cssIDs)},
                }
            };
            </script>
            <script src="${jsVendor}"></script>
            <script src="${jsApp}"></script>
            <script>${jsNonBlocking}</script>
        </body>
    </html>
`;
