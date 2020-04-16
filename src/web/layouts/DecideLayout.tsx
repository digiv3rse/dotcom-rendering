import React from 'react';

import { StandardLayout } from './StandardLayout';
import { ShowcaseLayout } from './ShowcaseLayout';
import { CommentLayout } from './CommentLayout';

type Props = {
    CAPI: CAPIType;
    NAV: NavType;
};

const decideDisplay = (CAPI: CAPIType): Display => {
    if (CAPI.isImmersive) return 'immersive';
    if (CAPI.pageType.hasShowcaseMainElement) return 'showcase';
    return 'standard';
};

const decidePillar = (CAPI: CAPIType): Pillar => {
    // We override the pillar to be opinion on Comment news pieces
    if (CAPI.designType === 'Comment' && CAPI.pillar === 'news')
        return 'opinion';
    return CAPI.pillar;
};

export const DecideLayout = ({ CAPI, NAV }: Props) => {
    const display: Display = decideDisplay(CAPI);
    const pillar: Pillar = decidePillar(CAPI);
    const { designType } = CAPI;

    switch (display) {
        case 'immersive': {
            switch (designType) {
                case 'Comment':
                case 'GuardianView':
                    return (
                        <CommentLayout
                            CAPI={CAPI}
                            NAV={NAV}
                            display="immersive"
                            designType={designType}
                            pillar={pillar}
                        />
                    );
                case 'Feature':
                case 'Review':
                case 'Interview':
                case 'Live':
                case 'Media':
                case 'Analysis':
                case 'Article':
                case 'SpecialReport':
                case 'Recipe':
                case 'MatchReport':
                case 'GuardianLabs':
                case 'Quiz':
                case 'AdvertisementFeature':
                case 'Immersive':
                    return (
                        <ShowcaseLayout
                            CAPI={CAPI}
                            NAV={NAV}
                            display="immersive"
                            designType={designType}
                            pillar={pillar}
                        />
                    );
            }
            break;
        }
        case 'showcase': {
            switch (designType) {
                case 'Comment':
                case 'GuardianView':
                    return (
                        <CommentLayout
                            CAPI={CAPI}
                            NAV={NAV}
                            display="showcase"
                            designType={designType}
                            pillar={pillar}
                        />
                    );
                case 'Feature':
                case 'Review':
                case 'Interview':
                case 'Live':
                case 'Media':
                case 'Analysis':
                case 'Article':
                case 'SpecialReport':
                case 'Recipe':
                case 'MatchReport':
                case 'GuardianLabs':
                case 'Quiz':
                case 'AdvertisementFeature':
                case 'Immersive':
                    return (
                        <ShowcaseLayout
                            CAPI={CAPI}
                            NAV={NAV}
                            display="showcase"
                            designType={designType}
                            pillar={pillar}
                        />
                    );
            }
            break;
        }
        case 'standard': {
            switch (designType) {
                case 'Comment':
                case 'GuardianView':
                    return (
                        <CommentLayout
                            CAPI={CAPI}
                            NAV={NAV}
                            display="standard"
                            designType={designType}
                            pillar={pillar}
                        />
                    );
                case 'Feature':
                case 'Review':
                case 'Interview':
                case 'Live':
                case 'Media':
                case 'Analysis':
                case 'Article':
                case 'SpecialReport':
                case 'Recipe':
                case 'MatchReport':
                case 'GuardianLabs':
                case 'Quiz':
                case 'AdvertisementFeature':
                case 'Immersive':
                    return (
                        <StandardLayout
                            CAPI={CAPI}
                            NAV={NAV}
                            display="standard"
                            designType={designType}
                            pillar={pillar}
                        />
                    );
            }
            break;
        }
    }
};
