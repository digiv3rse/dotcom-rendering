import React from 'react';

import { Section } from './Section';

import { GuardianLines } from './GuardianLines';
import { Flex } from './Flex';
import { LeftColumn } from './LeftColumn';
import { ArticleContainer } from './ArticleContainer';
import { ArticleHeadline } from './ArticleHeadline';
import { Contributor } from './Contributor';

export default {
    component: GuardianLines,
    title: 'Components/GuardianLines',
};

export const defaultStory = () => {
    return (
        <>
            <Section
                showSideBorders={true}
                showTopBorder={false}
                padded={false}
            >
                <GuardianLines pillar="news" />
            </Section>
            <Section showTopBorder={false}>
                <Flex>
                    <LeftColumn>
                        <></>
                    </LeftColumn>
                    <ArticleContainer>
                        <ArticleHeadline
                            display="standard"
                            headlineString="Headline text"
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
                <GuardianLines pillar="news" count={8} />
            </Section>
            <Section showTopBorder={false}>
                <Flex>
                    <LeftColumn>
                        <></>
                    </LeftColumn>
                    <ArticleContainer>
                        <ArticleHeadline
                            display="standard"
                            headlineString="Headline text"
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
                <GuardianLines pillar="news" />
            </Section>
            <Section showTopBorder={false}>
                <Flex>
                    <LeftColumn>
                        <div style={{ marginTop: '30px' }} />
                        <GuardianLines pillar="news" />
                        <Contributor
                            designType="Article"
                            author={{ byline: 'Jane doe' }}
                            tags={[]}
                            pillar="news"
                        />
                    </LeftColumn>
                    <ArticleContainer>
                        <ArticleHeadline
                            display="standard"
                            headlineString="Headline text"
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
                <GuardianLines pillar="news" />
            </Section>
            <Section showTopBorder={false}>
                <Flex>
                    <LeftColumn>
                        <div style={{ marginTop: '30px' }} />
                        <GuardianLines pillar="news" effect="squiggly" />
                        <Contributor
                            designType="Article"
                            author={{ byline: 'Jane doe' }}
                            tags={[]}
                            pillar="news"
                        />
                    </LeftColumn>
                    <ArticleContainer>
                        <ArticleHeadline
                            display="standard"
                            headlineString="Headline text"
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

export const dottedLines = () => {
    return (
        <>
            <Section
                showSideBorders={true}
                showTopBorder={false}
                padded={false}
            >
                <GuardianLines pillar="news" />
            </Section>
            <Section showTopBorder={false}>
                <Flex>
                    <LeftColumn>
                        <div style={{ marginTop: '30px' }} />
                        <GuardianLines pillar="sport" effect="dotted" />
                        <Contributor
                            designType="Article"
                            author={{ byline: 'Jane doe' }}
                            tags={[]}
                            pillar="news"
                        />
                    </LeftColumn>
                    <ArticleContainer>
                        <ArticleHeadline
                            display="standard"
                            headlineString="Headline text"
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
dottedLines.story = { name: 'with dotted lines' };
