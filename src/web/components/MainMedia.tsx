import React from 'react';
import { css, cx } from 'emotion';

import { until } from '@guardian/src-foundations/mq';

import { ImageComponent } from '@root/src/web/components/elements/ImageComponent';
import { YoutubeBlockComponent } from '@root/src/web/components/elements/YoutubeBlockComponent';

const mainMedia = css`
    min-height: 1px;
    /*
    Thank you IE11, broken in stasis for all eternity.

    https://github.com/philipwalton/flexbugs/issues/75#issuecomment-161800607
    */

    ${until.tablet} {
        margin: 0;
        order: -1;
    }

    img {
        flex: 0 0 auto; /* IE */
        width: 100%;
        height: 100%;
    }
`;

const noGutters = css`
    ${until.phablet} {
        margin-left: -20px;
        margin-right: -20px;
    }

    ${until.mobileLandscape} {
        margin-left: -10px;
        margin-right: -11px;
    }
`;

function renderElement(
    display: Display,
    designType: DesignType,
    element: CAPIElement,
    pillar: Pillar,
    i: number,
    hideCaption?: boolean,
    adTargeting?: AdTargeting,
    starRating?: number,
) {
    switch (element._type) {
        case 'model.dotcomrendering.pageElements.ImageBlockElement':
            return (
                <ImageComponent
                    display={display}
                    designType={designType}
                    key={i}
                    element={element}
                    pillar={pillar}
                    hideCaption={hideCaption}
                    isMainMedia={true}
                    role={element.role}
                    starRating={starRating}
                />
            );
        case 'model.dotcomrendering.pageElements.YoutubeBlockElement':
            return (
                <YoutubeBlockComponent
                    display={display}
                    key={i}
                    element={element}
                    pillar={pillar}
                    hideCaption={hideCaption}
                    // eslint-disable-next-line jsx-a11y/aria-role
                    role="inline"
                    adTargeting={adTargeting}
                    isMainMedia={true}
                />
            );
        default:
            // eslint-disable-next-line no-console
            console.warn(
                `The following main media element is not supported by DCR ${element._type}`,
            );
            return null;
    }
}

export const MainMedia: React.FC<{
    display: Display;
    designType: DesignType;
    elements: CAPIElement[];
    pillar: Pillar;
    hideCaption?: boolean;
    adTargeting?: AdTargeting;
    starRating?: number;
}> = ({
    display,
    designType,
    elements,
    pillar,
    hideCaption,
    adTargeting,
    starRating,
}) => (
    <div className={cx(mainMedia, display !== 'immersive' && noGutters)}>
        {elements.map((element, i) =>
            renderElement(
                display,
                designType,
                element,
                pillar,
                i,
                hideCaption,
                adTargeting,
                starRating,
            ),
        )}
    </div>
);
