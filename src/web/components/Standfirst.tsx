import React from 'react';
import { css, cx } from 'emotion';
import { neutral } from '@guardian/src-foundations/palette';
import { headline, textSans } from '@guardian/src-foundations/typography';

const nestedStyles = css`
    li {
        ${textSans.medium()};
        margin-bottom: 6px;
        padding-left: 20px;

        p {
            display: inline;
        }
    }

    li:before {
        display: inline-block;
        content: '';
        border-radius: 6px;
        height: 12px;
        width: 12px;
        margin-right: 8px;
        background-color: ${neutral[86]};
        margin-left: -20px;
    }

    p {
        margin-bottom: 8px;
    }

    li {
        ${headline.xxxsmall({
            fontWeight: 'bold',
        })};
    }

    strong {
        font-weight: bold;
    }
`;

const standfirstStyles = (designType: DesignType, display: Display) => {
    if (display === 'immersive') {
        return css`
            ${headline.xsmall({
                fontWeight: 'light',
            })};
        `;
    }

    switch (designType) {
        case 'Comment':
        case 'GuardianView':
        case 'Feature':
        case 'Recipe':
        case 'Review':
            return css`
                ${headline.xxsmall({
                    fontWeight: 'light',
                })};
            `;
        case 'Immersive':
        case 'Media':
        case 'SpecialReport':
        case 'MatchReport':
        case 'AdvertisementFeature':
        case 'GuardianLabs':
        case 'Quiz':
        case 'Article':
        case 'Live':
        case 'Analysis':
        case 'Interview':
        default:
            return css`
                ${headline.xxxsmall({
                    fontWeight: 'bold',
                })};
                line-height: 20px;
            `;
    }
};

type Props = {
    display: Display;
    designType: DesignType;
    standfirst: string;
};

export const Standfirst = ({ display, designType, standfirst }: Props) => {
    return (
        <div
            className={cx(nestedStyles, standfirstStyles(designType, display))}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
                __html: standfirst,
            }}
        />
    );
};
