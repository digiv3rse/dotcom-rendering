import React from 'react';

import { text } from '@guardian/src-foundations/palette';
import { from } from '@guardian/src-foundations/mq';
import { textSans } from '@guardian/src-foundations/typography';
import { css, cx } from 'emotion';
import { pillarPalette } from '@root/src/lib/pillars';
import TriangleIcon from '@frontend/static/icons/triangle.svg';

type Props = {
    captionText?: string;
    pillar: Pillar;
    children: React.ReactNode;
    padCaption?: boolean;
    credit?: string;
    displayCredit?: boolean;
    shouldLimitWidth?: boolean;
};

const figureStyle = css`
    margin-bottom: 6px;
`;
const captionStyle = css`
    padding-top: 6px;
    ${textSans.xsmall()};
    word-wrap: break-word;
    color: ${text.supporting};
`;

const limitedWidth = css`
    ${from.leftCol} {
        width: 140px;
    }
    ${from.wide} {
        width: 220px;
    }
`;

const captionPadding = css`
    padding-left: 8px;
    padding-right: 8px;
`;

export const Caption = ({
    captionText,
    pillar,
    padCaption = false,
    credit,
    displayCredit = true,
    children,
    shouldLimitWidth = false,
}: Props) => {
    const iconStyle = css`
        fill: ${pillarPalette[pillar].main};
        padding-right: 3px;
    `;

    const captionLink = css`
        a {
            color: ${pillarPalette[pillar].main};
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
        strong {
            font-weight: bold;
        }
    `;

    const getCaptionHtml = () => {
        return (
            <span
                className={captionLink}
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{
                    __html: captionText || '',
                }}
                key="caption"
            />
        );
    };

    return (
        <figure className={figureStyle}>
            {children}
            {captionText && (
                <>
                    <figcaption
                        className={cx(
                            captionStyle,
                            shouldLimitWidth && limitedWidth,
                            { [captionPadding]: padCaption },
                        )}
                    >
                        <span className={iconStyle}>
                            <TriangleIcon />
                        </span>
                        {getCaptionHtml()} {displayCredit && credit}
                    </figcaption>
                </>
            )}
        </figure>
    );
};
