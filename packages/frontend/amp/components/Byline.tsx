import React from 'react';
import { bylineTokens } from '@frontend/amp/lib/byline-tokens';

export const Byline: React.FC<{
    byline: string;
    tags: TagType[];
    pillar: Pillar;
    guardianBaseURL: string;
    className?: string;
}> = ({ byline, tags, guardianBaseURL, className }) => {
    const contributorTags = tags.filter(tag => tag.type === 'Contributor');
    const tokens = bylineTokens(byline, contributorTags);

    const linkedByline = tokens.map(token => {
        const matchedTag = contributorTags.find(tag => tag.title === token);

        if (matchedTag) {
            return (
                <a
                    key={matchedTag.id}
                    href={`${guardianBaseURL}/${matchedTag.id}`}
                >
                    {matchedTag.title}
                </a>
            );
        }

        return token;
    });

    return <div className={className}>{linkedByline}</div>;
};
