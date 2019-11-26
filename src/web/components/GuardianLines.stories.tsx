import React from 'react';

import { Section } from './Section';

import { GuardianLines } from './GuardianLines';
import { Flex } from './Flex';
import { ArticleLeft } from './ArticleLeft';
import { ArticleContainer } from './ArticleContainer';
import { TheArticleHeadlineThingy } from './TheArticleHeadlineThingy';
import { Byline } from './Byline';

/* tslint:disable */
export default {
    component: GuardianLines,
    title: 'Components/GuardianLines',
};
/* tslint:enable */

export const defaultStory = () => {
    return (
        <>
            <Section
                showSideBorders={true}
                showTopBorder={false}
                padded={false}
            >
                <GuardianLines />
            </Section>
            <Section showTopBorder={false}>
                <Flex>
                    <ArticleLeft>
                        <></>
                    </ArticleLeft>
                    <ArticleContainer>
                        <TheArticleHeadlineThingy
                            headlineString="Headline text"
                            webPublicationDate=""
                            tags={[]}
                            designType="Article"
                            pillar="news"
                        />
                    </ArticleContainer>
                </Flex>
            </Section>
        </>
    );
};
defaultStory.story = { name: 'default' };

export const eightLines = () => {
    return (
        <>
            <Section
                showSideBorders={true}
                showTopBorder={false}
                padded={false}
            >
                <GuardianLines count={8} />
            </Section>
            <Section showTopBorder={false}>
                <Flex>
                    <ArticleLeft>
                        <></>
                    </ArticleLeft>
                    <ArticleContainer>
                        <TheArticleHeadlineThingy
                            headlineString="Headline text"
                            webPublicationDate=""
                            tags={[]}
                            designType="Article"
                            pillar="news"
                        />
                    </ArticleContainer>
                </Flex>
            </Section>
        </>
    );
};
eightLines.story = { name: 'with eight lines' };

export const paddedLines = () => {
    return (
        <>
            <Section
                showSideBorders={true}
                showTopBorder={false}
                padded={false}
            >
                <GuardianLines />
            </Section>
            <Section showTopBorder={false}>
                <Flex>
                    <ArticleLeft>
                        <div style={{ marginTop: '30px' }} />
                        <GuardianLines />
                        <Byline
                            author={{ byline: 'Jane doe' }}
                            tags={[]}
                            pillar="news"
                        />
                    </ArticleLeft>
                    <ArticleContainer>
                        <TheArticleHeadlineThingy
                            headlineString="Headline text"
                            webPublicationDate=""
                            tags={[]}
                            designType="Article"
                            pillar="news"
                        />
                    </ArticleContainer>
                </Flex>
            </Section>
        </>
    );
};
paddedLines.story = { name: 'when in left column' };

export const squigglyLines = () => {
    return (
        <>
            <Section
                showSideBorders={true}
                showTopBorder={false}
                padded={false}
            >
                <GuardianLines />
            </Section>
            <Section showTopBorder={false}>
                <Flex>
                    <ArticleLeft>
                        <div style={{ marginTop: '30px' }} />
                        <GuardianLines squiggly={true} />
                        <Byline
                            author={{ byline: 'Jane doe' }}
                            tags={[]}
                            pillar="news"
                        />
                    </ArticleLeft>
                    <ArticleContainer>
                        <TheArticleHeadlineThingy
                            headlineString="Headline text"
                            webPublicationDate=""
                            tags={[]}
                            designType="Article"
                            pillar="news"
                        />
                    </ArticleContainer>
                </Flex>
            </Section>
        </>
    );
};
squigglyLines.story = { name: 'with squiggly lines' };
