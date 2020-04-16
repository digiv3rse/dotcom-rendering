import React from 'react';
import { css } from 'emotion';

import { ArticleMeta } from './ArticleMeta';

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

const tagsWithBylineImage = [
    {
        id: 'profile/lanre-bakare',
        type: 'Contributor',
        title: 'Lanre Bakare',
        twitterHandle: 'lanre_bakare',
        bylineImageUrl:
            'https://i.guim.co.uk/img/uploads/2017/10/06/Lanre-Bakare,-L.png?width=300&quality=85&auto=format&fit=max&s=afa36cd9b80bea5e98f10280aea4d0e4',
    },
];

const tagsWithByTwoContributors = [
    {
        id: 'profile/lanre-bakare',
        type: 'Contributor',
        title: 'Lanre Bakare',
        twitterHandle: 'lanre_bakare',
        bylineImageUrl:
            'https://i.guim.co.uk/img/uploads/2017/10/06/Lanre-Bakare,-L.png?width=300&quality=85&auto=format&fit=max&s=afa36cd9b80bea5e98f10280aea4d0e4',
    },
    {
        id: 'profile/another-author',
        type: 'Contributor',
        title: 'Another Author',
    },
];

export default {
    component: ArticleMeta,
    title: 'Components/ArticleMeta',
};

export const ArticleStory = () => {
    return (
        <Container>
            <ArticleMeta
                display="standard"
                designType="Article"
                pillar="news"
                pageId=""
                webTitle=""
                author={{
                    byline: 'Lanre Bakare',
                    twitterHandle: 'lanre_bakare',
                }}
                tags={tagsWithBylineImage}
                webPublicationDateDisplay="Sun 12 Jan 2020 18.00 GMT"
            />
        </Container>
    );
};
ArticleStory.story = { name: 'Article' };

export const FeatureStory = () => {
    return (
        <Container>
            <ArticleMeta
                display="standard"
                designType="Feature"
                pillar="culture"
                pageId=""
                webTitle=""
                author={{
                    byline: 'Lanre Bakare',
                    twitterHandle: 'lanre_bakare',
                }}
                tags={tagsWithBylineImage}
                webPublicationDateDisplay="Sun 12 Jan 2020 18.00 GMT"
            />
        </Container>
    );
};
FeatureStory.story = { name: 'Feature' };

export const CommentStory = () => {
    return (
        <Container>
            <ArticleMeta
                display="standard"
                designType="Comment"
                pillar="opinion"
                pageId=""
                webTitle=""
                author={{
                    byline: 'Lanre Bakare',
                    twitterHandle: 'lanre_bakare',
                }}
                tags={tagsWithBylineImage}
                webPublicationDateDisplay="Sun 12 Jan 2020 18.00 GMT"
            />
        </Container>
    );
};
CommentStory.story = { name: 'Comment' };

export const InterviewStory = () => {
    return (
        <Container>
            <ArticleMeta
                display="standard"
                designType="Interview"
                pillar="lifestyle"
                pageId=""
                webTitle=""
                author={{
                    byline: 'Lanre Bakare',
                    twitterHandle: 'lanre_bakare',
                }}
                tags={tagsWithBylineImage}
                webPublicationDateDisplay="Sun 12 Jan 2020 18.00 GMT"
            />
        </Container>
    );
};
InterviewStory.story = { name: 'Interview' };

export const ImmersiveStory = () => {
    return (
        <Container>
            <ArticleMeta
                display="immersive"
                designType="Immersive"
                pillar="news"
                pageId=""
                webTitle=""
                author={{
                    byline: 'Lanre Bakare',
                    twitterHandle: 'lanre_bakare',
                }}
                tags={tagsWithBylineImage}
                webPublicationDateDisplay="Sun 12 Jan 2020 18.00 GMT"
            />
        </Container>
    );
};
ImmersiveStory.story = { name: 'Immersive' };

export const TwoContributorsStory = () => {
    return (
        <Container>
            <ArticleMeta
                display="standard"
                designType="Feature"
                pillar="sport"
                pageId=""
                webTitle=""
                author={{
                    byline: 'Lanre Bakare',
                    twitterHandle: 'lanre_bakare',
                }}
                tags={tagsWithByTwoContributors}
                webPublicationDateDisplay="Sun 12 Jan 2020 18.00 GMT"
            />
        </Container>
    );
};
TwoContributorsStory.story = { name: 'Feature, with two contributors' };
