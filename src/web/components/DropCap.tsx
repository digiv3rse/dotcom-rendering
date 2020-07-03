import React from 'react';
import { css } from 'emotion';
import { headline } from '@guardian/src-foundations/typography';
import { opinion } from '@guardian/src-foundations/palette';
import { pillarPalette } from '@frontend/lib/pillars';

type Props = {
    letter: string;
    pillar: Pillar;
    designType: DesignType;
};

const outerStyles = (pillar: Pillar, designType: DesignType) => {
    const baseStyles = css`
        ${headline.large({
            fontWeight: 'light',
        })}
        float: left;
        text-transform: uppercase;
        box-sizing: border-box;
        margin-right: 4px;
    `;

    /*
        The reason pillar type 'opinion' is forced to opinion[400] is that
        opinion.dark is much darker so it is forced to keep with similar colour
        tones (that's my understanding anyway!)
    */
    switch (designType) {
        case 'GuardianView':
        case 'Comment':
        case 'PhotoEssay':
        case 'Analysis':
        case 'Feature':
        case 'Interview':
        case 'Article':
        case 'Media':
        case 'Review':
        case 'Live':
        case 'SpecialReport':
        case 'Recipe':
        case 'MatchReport':
        case 'GuardianLabs':
        case 'Quiz':
        case 'AdvertisementFeature':
        case 'Immersive':
        default:
            return css`
                ${baseStyles};
                color: ${pillar === 'opinion'
                    ? opinion[400]
                    : pillarPalette[pillar].dark};
            `;
    }
};

const innerStyles = (designType: DesignType) => {
    const baseStyles = css`
        font-size: 109px;
        line-height: 90px;

        display: inline-block;
        vertical-align: text-top;
        pointer-events: none;
    `;

    switch (designType) {
        case 'GuardianView':
        case 'Comment':
            return css`
                ${baseStyles};
                font-weight: 200;
            `;
        case 'Analysis':
        case 'Feature':
        case 'Interview':
        case 'Article':
        case 'Media':
        case 'PhotoEssay':
        case 'Review':
        case 'Live':
        case 'SpecialReport':
        case 'Recipe':
        case 'MatchReport':
        case 'GuardianLabs':
        case 'Quiz':
        case 'AdvertisementFeature':
        case 'Immersive':
        default:
            return css`
                ${baseStyles};
                font-weight: 700;
            `;
    }
};

export const DropCap = ({ letter, pillar, designType }: Props) => (
    <span className={outerStyles(pillar, designType)}>
        <span className={innerStyles(designType)}>{letter}</span>
    </span>
);
