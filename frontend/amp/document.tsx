import { extractCritical } from 'emotion-server';
import { renderToString } from 'react-dom/server';
import resetCSS from /* preval */ '../lib/reset-css';
import fontsCss from '../lib/fonts-css';

interface RenderToStringResult {
    html: string;
    css: string;
}

export default ({ body }: { body: React.ReactElement<any> }) => {
    const { html, css }: RenderToStringResult = extractCritical(
        renderToString(body),
    );

    return `<!doctype html>
<html ⚡>
    <head>
    <meta charset="utf-8">
    <link rel="canonical" href="self.html" />
    <meta name="viewport" content="width=device-width,minimum-scale=1">
    <style>${fontsCss}${resetCSS}${css}</style>
    <style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style><noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>
    <script async src="https://cdn.ampproject.org/v0.js"></script>
    <style amp-custom>${resetCSS}${css}</style>
    </head>
    <body>
    ${html}
    </body>
</html>`;
};
