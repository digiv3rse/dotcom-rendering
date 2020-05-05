import React from 'react';
import { css } from 'emotion';

import { TextBlockComponent } from '@root/src/web/components/elements/TextBlockComponent';
import { SubheadingBlockComponent } from '@root/src/web/components/elements/SubheadingBlockComponent';
import { ImageBlockComponent } from '@root/src/web/components/elements/ImageBlockComponent';
import { TweetBlockComponent } from '@root/src/web/components/elements/TweetBlockComponent';
import { PullQuoteComponent } from '@root/src/web/components/elements/PullQuoteComponent';
import { BlockquoteComponent } from '@root/src/web/components/elements/BlockquoteComponent';
import { YouTubeComponent } from '@root/src/web/components/elements/YouTubeComponent';
import { InstagramBlockComponent } from '@root/src/web/components/elements/InstagramBlockComponent';
import { SoundcloudBlockComponent } from '@root/src/web/components/elements/SouncloudBlockComponent';
import { EmbedBlockComponent } from '@root/src/web/components/elements/EmbedBlockComponent';

// This is required for spacefinder to work!
const commercialPosition = css`
    position: relative;
`;

export const ArticleRenderer: React.FC<{
    display: Display;
    elements: CAPIElement[];
    pillar: Pillar;
    designType: DesignType;
    adTargeting?: AdTargeting;
}> = ({ display, elements, pillar, designType, adTargeting }) => {
    // const cleanedElements = elements.map(element =>
    //     'html' in element ? { ...element, html: clean(element.html) } : element,
    // );
    // ^^ Until we decide where to do the "isomorphism split" in this this code is not safe here.
    //    But should be soon.

    const output = elements
        .map((element, i) => {
            switch (element._type) {
                case 'model.dotcomrendering.pageElements.TextBlockElement':
                    return (
                        <TextBlockComponent
                            key={i}
                            html={element.html}
                            pillar={pillar}
                            designType={designType}
                            dropCap={false} // TODO: Plug in the api response here when we have it
                        />
                    );
                case 'model.dotcomrendering.pageElements.SubheadingBlockElement':
                    return (
                        <SubheadingBlockComponent key={i} html={element.html} />
                    );
                case 'model.dotcomrendering.pageElements.ImageBlockElement':
                    return (
                        <ImageBlockComponent
                            display={display}
                            key={i}
                            element={element}
                            pillar={pillar}
                        />
                    );
                case 'model.dotcomrendering.pageElements.TweetBlockElement':
                    return <TweetBlockComponent key={i} element={element} />;
                case 'model.dotcomrendering.pageElements.InstagramBlockElement':
                    return (
                        <InstagramBlockComponent key={i} element={element} />
                    );
                case 'model.dotcomrendering.pageElements.SoundcloudBlockElement':
                    return (
                        <SoundcloudBlockComponent key={i} element={element} />
                    );
                case 'model.dotcomrendering.pageElements.EmbedBlockElement':
                    return (
                        <EmbedBlockComponent
                            key={i}
                            html={element.html}
                            alt={element.alt}
                        />
                    );
                case 'model.dotcomrendering.pageElements.PullquoteBlockElement':
                    return (
                        <PullQuoteComponent
                            key={i}
                            html={element.html}
                            pillar={pillar}
                            designType={designType}
                            attribution={element.attribution}
                            role={element.role}
                        />
                    );
                case 'model.dotcomrendering.pageElements.BlockquoteBlockElement':
                    return (
                        <BlockquoteComponent
                            key={i}
                            html={element.html}
                            pillar={pillar}
                        />
                    );
                case 'model.dotcomrendering.pageElements.YoutubeBlockElement':
                    return (
                        <YouTubeComponent
                            display={display}
                            key={i}
                            element={element}
                            pillar={pillar}
                            hideCaption={false}
                            // eslint-disable-next-line jsx-a11y/aria-role
                            role="inline"
                            adTargeting={adTargeting}
                            isMainMedia={false}
                        />
                    );
                case 'model.dotcomrendering.pageElements.RichLinkBlockElement':
                    return <div key={i} id={`rich-link-${i}`} />;
                default:
                    return null;
            }
        })
        .filter(_ => _ != null);

    return (
        <div
            className={`article-body-commercial-selector ${commercialPosition}`}
        >
            {output}
        </div>
    ); // classname that space finder is going to target for in-body ads in DCR
};
