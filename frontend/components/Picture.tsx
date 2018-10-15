import React from 'react';
// tslint:disable:react-no-dangerous-html
// IE 9 needs this workaround as per https://scottjehl.github.io/picturefill/

export interface ImageSource {
    width: string;
    minWidth: string;
    srcset: string;
    hidpi: boolean;
}

const mq: (source: ImageSource) => string = source =>
    source.hidpi
        ? `(min-width: ${
              source.minWidth
          }px) and (-webkit-min-device-pixel-ratio: 1.25), (min-width: ${
              source.minWidth
          }px) and (min-resolution: 120dpi)"`
        : `(min-width: ${source.minWidth}px)"`;

const forSource: (source: ImageSource) => string = source =>
    ` <source media="${mq(source)}" sizes="${source.width}" srcset="${
        source.srcset
    }" />`;

export const Picture: React.SFC<{
    sources: ImageSource[];
    alt: string;
    src: string;
}> = ({ sources, alt, src }) => (
    <picture
        dangerouslySetInnerHTML={{
            __html: `<!--[if IE 9]><video style="display: none;"><![endif]-->${sources
                .map(forSource)
                .join(
                    '',
                )}<!--[if IE 9]></video><![endif]--><img itemprop="contentUrl" alt="@imageAltText" src="${src}" />`,
        }}
    />
);
