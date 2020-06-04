import React from 'react';
import { css, cx } from 'emotion';
import { neutral } from '@guardian/src-foundations/palette';
import { space } from '@guardian/src-foundations';
import { from } from '@guardian/src-foundations/mq';
import { headline, textSans } from '@guardian/src-foundations/typography';

type Props = {
    display: Display;
    designType: DesignType;
    standfirst: string;
};

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
        height: ${space[3]}px;
        width: ${space[3]}px;
        margin-right: ${space[2]}px;
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
    switch (display) {
        case 'immersive':
            return css`
                ${headline.xsmall({
                    fontWeight: 'light',
                })};
                padding-top: ${space[4]}px;

                max-width: 280px;
                ${from.tablet} {
                    max-width: 400px;
                }
                ${from.tablet} {
                    max-width: 460px;
                }
            `;

        case 'showcase':
        case 'standard': {
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
                        margin-bottom: ${space[3]}px;
                    `;
                case 'Immersive':
                case 'Media':
                case 'PhotoEssay':
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
                        margin-bottom: ${space[3]}px;
                    `;
            }
        }
    }
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
