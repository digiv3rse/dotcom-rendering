import resetCSS from /* preval */ '@root/src/lib/reset-css';
import { getFontsCss } from '@root/src/lib/fonts-css';
import { getStatic, CDN } from '@root/src/lib/assets';
import { prepareCmpString } from '@root/src/web/browser/prepareCmp';

import { brandBackground } from '@guardian/src-foundations/palette';

export const htmlTemplate = ({
    title = 'The Guardian',
    description,
    linkedData,
    priorityScripts,
    priorityLegacyScripts,
    priorityNonLegacyScripts,
    lowPriorityScripts,
    lowPriorityLegacyScripts,
    lowPriorityNonLegacyScripts,
    css,
    html,
    windowGuardian,
    fontFiles = [],
    ampLink,
    openGraphData,
    twitterData,
    keywords,
}: {
    title?: string;
    description: string;
    linkedData: object;
    priorityScripts: string[];
    priorityLegacyScripts: string[];
    priorityNonLegacyScripts: string[];
    lowPriorityScripts: string[];
    lowPriorityLegacyScripts: string[];
    lowPriorityNonLegacyScripts: string[];
    css: string;
    html: string;
    fontFiles?: string[];
    windowGuardian: string;
    ampLink?: string;
    openGraphData: { [key: string]: string };
    twitterData: { [key: string]: string };
    keywords: string;
}) => {
    const favicon =
        process.env.NODE_ENV === 'production'
            ? 'favicon-32x32.ico'
            : 'favicon-32x32-dev-yellow.ico';

    // ********************************
    // ****** high priority script ****
    // ********************************
    const priorityScriptTags = priorityScripts.map(
        src => `<script defer src="${src}"></script>`,
    );
    // transpiled with preset-env
    const priorityLegacyScriptTags = priorityLegacyScripts.map(
        src => `<script defer nomodule src="${src}"></script>`,
    );
    // transpiled with preset-modules
    const priorityNonLegacyScriptTags = priorityNonLegacyScripts.map(
        src => `<script defer type="module" src="${src}"></script>`,
    );

    // ********************************
    // **** low priority scripts ******
    // ********************************
    const lowPriorityScriptTags = lowPriorityScripts.map(
        src => `<script async src="${src}"></script>`,
    );
    // transpiled with preset-env
    const lowPriorityLegacyScriptTags = lowPriorityLegacyScripts.map(
        src => `<script async nomodule src="${src}"></script>`,
    );
    // transpiled with preset-modules
    const lowPriorityNonLegacyScriptTags = lowPriorityNonLegacyScripts.map(
        src => `<script async type="module" src="${src}"></script>`,
    );

    const fontPreloadTags = fontFiles.map(
        fontFile =>
            `<link rel="preload" href="${getStatic(
                fontFile,
            )}" as="font" crossorigin>`,
    );

    const generateMetaTags = (
        dataObject: { [key: string]: string },
        attributeName: 'name' | 'property',
    ) => {
        if (dataObject) {
            return Object.entries(dataObject)
                .map(
                    ([id, value]) =>
                        `<meta ${attributeName}="${id}" content="${value}"/>`,
                )
                .join('\n');
        }
        return '';
    };

    const openGraphMetaTags = generateMetaTags(openGraphData, 'property');

    const twitterMetaTags = generateMetaTags(twitterData, 'name');

    // Duplicated prefetch and preconnect tags from DCP:
    // Documented here: https://github.com/guardian/frontend/pull/12935

    // Information on preconnecting:
    // https://css-tricks.com/using-relpreconnect-to-establish-network-connections-early-and-increase-performance/
    const staticPreconnectUrls = [
        `${CDN}`,
        `https://i.guim.co.uk`,
        `https://interactive.guim.co.uk`,
        `https://www.google-analytics.com`,
    ];

    // Information on prefetching:
    // https://developer.mozilla.org/en-US/docs/Web/Performance/dns-prefetch
    const staticPrefetchUrls = [
        `${CDN}`,
        `https://i.guim.co.uk`,
        `https://api.nextgen.guardianapps.co.uk`,
        `https://hits-secure.theguardian.com`,
        `https://j.ophan.co.uk`,
        `https://ophan.theguardian.com`,
        `https://phar.gu-web.net`,
        `https://www.google-analytics.com`,
        `https://sb.scorecardresearch.com`,
    ];

    const prefetchTags = staticPrefetchUrls.map(
        src => `<link rel="dns-prefetch" href="${src}">`,
    );

    const preconnectTags = staticPreconnectUrls.map(
        src => `<link rel="preconnect" href="${src}">`,
    );

    return `<!doctype html>
        <html lang="en">
            <head>
                <title>${title}</title>
                <meta name="description" content="${escape(description)}" />
                <meta charset="utf-8">

                <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1">
                <meta name="theme-color" content="${brandBackground.primary}" />
                <link rel="icon" href="https://static.guim.co.uk/images/${favicon}">

                ${preconnectTags.join('\n')}
                ${prefetchTags.join('\n')}

                <script type="application/ld+json">
                    ${JSON.stringify(linkedData)}
                </script>

                <!-- TODO make this conditional when we support more content types -->
                ${ampLink ? `<link rel="amphtml" href="${ampLink}">` : ''}

                ${fontPreloadTags.join('\n')}

                ${openGraphMetaTags}

                ${twitterMetaTags}

                <script>
                    window.guardian = ${windowGuardian};
                    window.guardian.queue = []; // Queue for functions to be fired by polyfill.io callback
                </script>

                <script type="module">
                    window.guardian.mustardCut = true;
                </script>

                <script nomodule>
                    // Browser fails mustard check
                    window.guardian.mustardCut = false;
                </script>

                <script>
                    // this is a global that's called at the bottom of the pf.io response,
                    // once the polyfills have run. This may be useful for debugging.
                    // mainly to support browsers that don't support async=false or defer
                    function guardianPolyfilled() {
                        window.guardian.polyfilled = true;
                        if (window.guardian.mustardCut === false) {
                            window.guardian.queue.forEach(function(startup) { startup() })
                        }
                    }

                    // We've got contracts to abide by with the Ophan tracker
                    // Setting pageViewId here ensures we're not getting race-conditions at all
                    window.guardian.config.ophan = {
                        // This is duplicated from
                        // https://github.com/guardian/ophan/blob/master/tracker-js/assets/coffee/ophan/transmit.coffee
                        // Please do not change this without talking to the Ophan project first.
                        pageViewId:
                            new Date().getTime().toString(36) +
                            'xxxxxxxxxxxx'.replace(/x/g, function() {
                                return Math.floor(Math.random() * 36).toString(36);
                            }),
                    };
                </script>

                <script>${prepareCmpString}</script>

                <noscript>
                    <img src="https://sb.scorecardresearch.com/p?c1=2&c2=6035250&cv=2.0&cj=1&cs_ucfr=0&comscorekw=${keywords}" />
                </noscript>
                ${[
                    ...priorityScriptTags,
                    ...priorityLegacyScriptTags,
                    ...priorityNonLegacyScriptTags,
                ].join('\n')}
                <style>${getFontsCss()}${resetCSS}${css}</style>

            </head>

            <body>
                <div id="react-root"></div>
                ${html}
                ${[
                    ...lowPriorityScriptTags,
                    ...lowPriorityLegacyScriptTags,
                    ...lowPriorityNonLegacyScriptTags,
                ].join('\n')}
            </body>
        </html>`;
};
