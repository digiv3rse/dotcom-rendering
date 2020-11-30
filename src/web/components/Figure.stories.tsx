/* eslint-disable jsx-a11y/aria-role */
import React from 'react';
import { css } from 'emotion';

import { Flex } from '@root/src/web/components/Flex';
import { RightColumn } from '@root/src/web/components/RightColumn';
import { ArticleContainer } from '@root/src/web/components/ArticleContainer';
import { Section } from '@frontend/web/components/Section';
import { LeftColumn } from '@frontend/web/components/LeftColumn';
import { TextBlockComponent } from '@frontend/web/components/elements/TextBlockComponent';
import { Display } from '@root/src/lib/display';

import { breakpoints } from '@guardian/src-foundations/mq';

import { Figure } from './Figure';

const textHtml =
    '<p>US and British intelligence agencies have successfully cracked much of the online encryption relied upon by hundreds of millions of people to protect the privacy of their personal data, online transactions and emails, according to top-secret documents revealed by former contractor Edward Snowden.</p>';

const SomeText = () => (
    <TextBlockComponent
        html={textHtml}
        pillar="news"
        designType="Article"
        display={Display.Standard}
        isFirstParagraph={false}
    />
);

const Grey = ({ heightInPixels = 400 }: { heightInPixels?: number }) => (
    <div
        className={css`
            background-color: grey;
            width: 100%;
            height: ${heightInPixels}px;
        `}
    />
);

export default {
    component: Figure,
    title: 'Components/Figure',
    parameters: {
        // Set the viewports in Chromatic at a component level.
        chromatic: {
            viewports: [
                breakpoints.mobile,
                breakpoints.mobileMedium,
                breakpoints.phablet,
                breakpoints.tablet,
                breakpoints.desktop,
                breakpoints.leftCol,
                breakpoints.wide,
            ],
        },
    },
};

export const InlineStory = () => {
    return (
        <Section showTopBorder={false}>
            <Flex>
                <LeftColumn showRightBorder={false}>
                    <></>
                </LeftColumn>
                <ArticleContainer>
                    <SomeText />
                    <Figure>
                        <Grey />
                    </Figure>
                    <SomeText />
                </ArticleContainer>
                <RightColumn>
                    <></>
                </RightColumn>
            </Flex>
        </Section>
    );
};
InlineStory.story = { name: 'Inline' };

export const SupportingStory = () => {
    return (
        <Section showTopBorder={false}>
            <Flex>
                <LeftColumn showRightBorder={false}>
                    <></>
                </LeftColumn>
                <ArticleContainer>
                    <SomeText />
                    <SomeText />
                    <Figure role="supporting">
                        <Grey heightInPixels={500} />
                    </Figure>
                    <SomeText />
                    <SomeText />
                    <SomeText />
                    <SomeText />
                    <SomeText />
                </ArticleContainer>
                <RightColumn>
                    <></>
                </RightColumn>
            </Flex>
        </Section>
    );
};
SupportingStory.story = { name: 'Supporting' };

export const ImmersiveStory = () => {
    return (
        <Section showTopBorder={false} showSideBorders={false}>
            <Flex>
                <LeftColumn showRightBorder={false}>
                    <></>
                </LeftColumn>
                <ArticleContainer>
                    <SomeText />
                    <Figure role="immersive">
                        <Grey heightInPixels={700} />
                    </Figure>
                    <SomeText />
                </ArticleContainer>
                <RightColumn>
                    <></>
                </RightColumn>
            </Flex>
        </Section>
    );
};
ImmersiveStory.story = { name: 'Immersive' };

export const ThumbnailStory = () => {
    return (
        <Section showTopBorder={false}>
            <Flex>
                <LeftColumn showRightBorder={false}>
                    <></>
                </LeftColumn>
                <ArticleContainer>
                    <SomeText />
                    <Figure role="thumbnail">
                        <Grey heightInPixels={200} />
                    </Figure>
                    <SomeText />
                    <SomeText />
                </ArticleContainer>
                <RightColumn>
                    <></>
                </RightColumn>
            </Flex>
        </Section>
    );
};
ThumbnailStory.story = { name: 'Thumbnail' };

export const ShowcaseStory = () => {
    return (
        <Section showTopBorder={false}>
            <Flex>
                <LeftColumn showRightBorder={false}>
                    <></>
                </LeftColumn>
                <ArticleContainer>
                    <SomeText />
                    <Figure role="showcase">
                        <Grey heightInPixels={500} />
                    </Figure>
                    <SomeText />
                </ArticleContainer>
                <RightColumn>
                    <></>
                </RightColumn>
            </Flex>
        </Section>
    );
};
ShowcaseStory.story = { name: 'Showcase' };

export const HalfWidthStory = () => {
    return (
        <Section showTopBorder={false}>
            <Flex>
                <LeftColumn showRightBorder={false}>
                    <></>
                </LeftColumn>
                <ArticleContainer>
                    <SomeText />
                    <Figure role="halfWidth">
                        <Grey />
                    </Figure>
                    <SomeText />
                </ArticleContainer>
                <RightColumn>
                    <></>
                </RightColumn>
            </Flex>
        </Section>
    );
};
HalfWidthStory.story = { name: 'HalfWidth' };
