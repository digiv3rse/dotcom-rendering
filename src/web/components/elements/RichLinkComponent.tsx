import React from 'react';

import { RichLink, DefaultRichLink } from '@root/src/web/components/RichLink';

import { useApi } from '@root/src/web/lib/api';

type CardStyle =
    | 'special-report'
    | 'live'
    | 'dead'
    | 'feature'
    | 'editorial'
    | 'comment'
    | 'podcast'
    | 'media'
    | 'analysis'
    | 'review'
    | 'letters'
    | 'external'
    | 'news';

interface RichLinkType {
    cardStyle: CardStyle;
    thumbnailUrl: string;
    headline: string;
    contentType: ContentType;
    url: string;
    starRating?: number;
    pillar: Pillar;
    tags: TagType[];
    sponsorName: string;
    contributorImage?: string;
}

const buildUrl: (element: RichLinkBlockElement, ajaxUrl: string) => string = (
    element,
    ajaxUrl,
) => {
    const path = new URL(element.url).pathname;
    return `${ajaxUrl}/embed/card${path}.json?dcr=true`;
};

export const RichLinkComponent: React.FC<{
    element: RichLinkBlockElement;
    pillar: Pillar;
    ajaxEndpoint: string;
    richLinkIndex: number;
}> = ({ element, ajaxEndpoint, richLinkIndex }) => {
    const url = buildUrl(element, ajaxEndpoint);
    const { data, loading, error } = useApi<RichLinkType>(url);

    if (error) {
        // Send the error to Sentry and then prevent the element from rendering
        window.guardian.modules.sentry.reportError(error, 'rich-link');

        return (
            <DefaultRichLink
                id={`rich-link-${richLinkIndex}`}
                index={richLinkIndex}
                headlineText={element.text}
                url={element.url}
            />
        );
    }

    if (loading || !data) {
        // Only render once data is available
        return null;
    }
    return (
        <RichLink
            richLinkIndex={richLinkIndex}
            cardStyle={data.cardStyle}
            thumbnailUrl={data.thumbnailUrl}
            headlineText={data.headline}
            contentType={data.contentType}
            url={data.url}
            starRating={data.starRating}
            pillar={data.pillar}
            tags={data.tags}
            sponsorName={data.sponsorName}
            contributorImage={data.contributorImage}
        />
    );
};
