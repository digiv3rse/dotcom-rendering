import React from 'react';
import { css } from 'emotion';

import { ArticleTitle } from './ArticleTitle';

const Container = ({ children }: { children: JSX.Element | JSX.Element[] }) => (
    <div
        className={css`
            width: 620px;
            padding: 20px;
        `}
    >
        {children}
    </div>
);
const CAPI = {
    tags: [],
    guardianBaseURL: 'https://theguardian.com',
    inLeftCol: true,
    fallbackToSection: true,
    sectionLabel: 'Section label',
    sectionUrl: '/section_url',
};
const brexitCAPI = {
    ...CAPI,
    ...{
        sectionLabel: 'Brexit',
        sectionUrl: '/brexit',
        badge: {
            seriesTag: 'politics/series/brexit-how-it-came-to-this',
            imageUrl:
                'https://assets.guim.co.uk/images/badges/05c6ace4e60dd0209a3f80eb03e16524/EUReferendumBadge.svg',
        },
    },
};

const beyondTheBladeCAPI = {
    ...CAPI,
    ...{
        sectionLabel: 'Beyond the blade',
        sectionUrl: '/beyond-the-blade',
        badge: {
            seriesTag: 'membership/series/beyond-the-blade',
            imageUrl:
                'https://assets.guim.co.uk/images/badges/bfc00bc58eb966845ccf1200fd8c54e0/beyondthebladebadge.svg',
        },
    },
};

export default {
    component: ArticleTitle,
    title: 'Components/ArticleTitle',
};

export const defaultStory = () => {
    return (
        <Container>
            <ArticleTitle
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...brexitCAPI}
                display="standard"
                pillar="sport"
                designType="Article"
            />
        </Container>
    );
};
defaultStory.story = { name: 'Brexit badge' };

export const beyondTheBlade = () => {
    return (
        <Container>
            <ArticleTitle
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...beyondTheBladeCAPI}
                display="standard"
                pillar="news"
                designType="Article"
            />
        </Container>
    );
};
beyondTheBlade.story = { name: 'Beyond the blade badge' };

export const immersiveComment = () => {
    return (
        <div
            className={css`
                background-color: lightgray;
                padding: 20px;
            `}
        >
            <ArticleTitle
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...brexitCAPI}
                display="immersive"
                pillar="sport"
                designType="Comment"
            />
        </div>
    );
};
immersiveComment.story = { name: 'Immersive comment piece' };

export const immersiveCommentTag = () => {
    return (
        <div
            className={css`
                background-color: lightgray;
                padding: 20px;
            `}
        >
            <ArticleTitle
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...CAPI}
                display="immersive"
                pillar="sport"
                designType="Comment"
                tags={[
                    {
                        id: '',
                        title: 'Tag title',
                        type: 'Blog',
                    },
                ]}
            />
        </div>
    );
};
immersiveCommentTag.story = { name: 'Immersive comment piece with Blog tag' };

export const ImmersiveSeriesTag = () => {
    return (
        <Container>
            <ArticleTitle
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...CAPI}
                display="immersive"
                pillar="sport"
                designType="Review"
                tags={[
                    {
                        id: '',
                        title: 'Series title',
                        type: 'Series',
                    },
                ]}
            />
        </Container>
    );
};
ImmersiveSeriesTag.story = { name: 'Immersive with a Series tag' };

export const ArticleBlogTag = () => {
    return (
        <Container>
            <ArticleTitle
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...CAPI}
                display="standard"
                pillar="sport"
                designType="Article"
                tags={[
                    {
                        id: '',
                        title: 'Blog title',
                        type: 'Blog',
                    },
                ]}
            />
        </Container>
    );
};
ArticleBlogTag.story = { name: 'Article with a Blog tag' };

export const ArticleOpinionTag = () => {
    return (
        <Container>
            <ArticleTitle
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...CAPI}
                display="standard"
                pillar="sport"
                designType="Article"
                tags={[
                    {
                        id: '',
                        title: 'Opinion title',
                        type: 'Opinion',
                    },
                ]}
            />
        </Container>
    );
};
ArticleOpinionTag.story = { name: 'Article with a Opinion tag' };

export const ArticleSeriesTag = () => {
    return (
        <Container>
            <ArticleTitle
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...CAPI}
                display="standard"
                pillar="sport"
                designType="Article"
                tags={[
                    {
                        id: '',
                        title: 'Series title',
                        type: 'Series',
                    },
                ]}
            />
        </Container>
    );
};
ArticleSeriesTag.story = { name: 'Article with a Series tag' };

export const ArticleNoTags = () => {
    return (
        <Container>
            <ArticleTitle
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...CAPI}
                display="standard"
                pillar="culture"
                designType="Article"
            />
        </Container>
    );
};
ArticleNoTags.story = { name: 'Article with no tags' };
