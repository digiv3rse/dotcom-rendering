/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import { Section } from '@frontend/web/components/Section';
import { Flex } from '@frontend/web/components/Flex';
import { LeftColumn } from '@frontend/web/components/LeftColumn';
import { ArticleContainer } from '@frontend/web/components/ArticleContainer';

import { Card } from './Card';
import { UL } from './components/UL';
import { LI } from './components/LI';
import { images, headlines, standfirsts, kickers } from './Card.mocks';

export default {
    component: Card,
    title: 'Components/Card',
    parameters: {
        viewport: {
            // This has the effect of turning off the viewports addon by default
            defaultViewport: 'doesNotExist',
        },
    },
};

export const News = () => (
    <Section>
        <Flex>
            <LeftColumn showRightBorder={false}>
                <></>
            </LeftColumn>
            <ArticleContainer>
                <UL direction="row" bottomMargin={true}>
                    <LI percentage="75%" showDivider={false} padSides={true}>
                        <Card
                            {...{
                                linkTo:
                                    '/society/2019/nov/14/witchcraft-and-black-magic-contribute-to-increase-in-child-abuse',
                                pillar: 'news',
                                designType: 'Article',
                                headlineText: headlines[0],
                                headlineSize: 'large',
                                kickerText: kickers[4],
                                imageUrl: images[0],
                                imagePosition: 'right',
                                imageSize: 'large',
                                standfirst: standfirsts[0],
                            }}
                        />
                    </LI>
                    <LI
                        percentage="25%"
                        showDivider={true}
                        showTopMarginWhenStacked={true}
                        padSides={true}
                    >
                        <Card
                            {...{
                                linkTo:
                                    '/society/2019/nov/14/witchcraft-and-black-magic-contribute-to-increase-in-child-abuse',
                                pillar: 'news',
                                designType: 'Article',
                                headlineText: headlines[1],
                                headlineSize: 'large',
                                kickerText: kickers[0],
                                imageUrl: images[5],
                                imagePosition: 'top',
                                standfirst: standfirsts[0],
                            }}
                        />
                    </LI>
                </UL>
                <UL direction="row">
                    <LI percentage="50%" padSides={true}>
                        <Card
                            {...{
                                linkTo:
                                    '/society/2019/nov/14/witchcraft-and-black-magic-contribute-to-increase-in-child-abuse',
                                pillar: 'culture',
                                designType: 'Article',
                                headlineText: headlines[2],
                                kickerText: kickers[1],
                                imageUrl: images[3],
                                imagePosition: 'top',
                                standfirst: standfirsts[0],
                            }}
                        />
                    </LI>
                    <LI
                        percentage="25%"
                        showDivider={true}
                        showTopMarginWhenStacked={true}
                        padSides={true}
                    >
                        <UL direction="column">
                            <LI bottomMargin={true} stretch={true}>
                                <Card
                                    {...{
                                        linkTo:
                                            '/society/2019/nov/14/witchcraft-and-black-magic-contribute-to-increase-in-child-abuse',
                                        pillar: 'opinion',
                                        designType: 'GuardianView',
                                        headlineText: headlines[3],
                                        kickerText: 'Editorial',
                                        imageUrl: images[6],
                                        imagePosition: 'top',
                                        commentCount: 82224,
                                    }}
                                />
                            </LI>
                            <LI bottomMargin={true} stretch={true}>
                                <Card
                                    {...{
                                        linkTo:
                                            '/society/2019/nov/14/witchcraft-and-black-magic-contribute-to-increase-in-child-abuse',
                                        pillar: 'news',
                                        designType: 'Article',
                                        headlineText: headlines[4],
                                        headlineSize: 'small',
                                    }}
                                />
                            </LI>
                            <LI bottomMargin={false} stretch={true}>
                                <Card
                                    {...{
                                        linkTo:
                                            '/society/2019/nov/14/witchcraft-and-black-magic-contribute-to-increase-in-child-abuse',
                                        pillar: 'news',
                                        designType: 'Article',
                                        headlineText: headlines[5],
                                        headlineSize: 'small',
                                        kickerText: kickers[3],
                                    }}
                                />
                            </LI>
                        </UL>
                    </LI>
                    <LI
                        percentage="25%"
                        showDivider={true}
                        showTopMarginWhenStacked={true}
                        padSides={true}
                    >
                        <UL direction="column">
                            <LI bottomMargin={true} stretch={true}>
                                <Card
                                    {...{
                                        linkTo:
                                            '/society/2019/nov/14/witchcraft-and-black-magic-contribute-to-increase-in-child-abuse',
                                        pillar: 'sport',
                                        designType: 'Article',
                                        headlineText: headlines[6],
                                        headlineSize: 'small',
                                        kickerText: kickers[3],
                                        commentCount: 26,
                                    }}
                                />
                            </LI>
                            <LI bottomMargin={true} stretch={true}>
                                <Card
                                    {...{
                                        linkTo:
                                            '/society/2019/nov/14/witchcraft-and-black-magic-contribute-to-increase-in-child-abuse',
                                        pillar: 'news',
                                        designType: 'Article',
                                        headlineText: headlines[7],
                                        headlineSize: 'small',
                                        kickerText: kickers[1],
                                    }}
                                />
                            </LI>
                            <LI bottomMargin={true} stretch={true}>
                                <Card
                                    {...{
                                        linkTo:
                                            '/society/2019/nov/14/witchcraft-and-black-magic-contribute-to-increase-in-child-abuse',
                                        pillar: 'news',
                                        designType: 'Article',
                                        headlineText: headlines[8],
                                        headlineSize: 'small',
                                        kickerText: kickers[0],
                                    }}
                                />
                            </LI>
                            <LI bottomMargin={true} stretch={true}>
                                <Card
                                    {...{
                                        linkTo:
                                            '/society/2019/nov/14/witchcraft-and-black-magic-contribute-to-increase-in-child-abuse',
                                        pillar: 'news',
                                        designType: 'Article',
                                        headlineText: headlines[9],
                                        headlineSize: 'small',
                                        kickerText: kickers[2],
                                    }}
                                />
                            </LI>
                            <LI bottomMargin={true} stretch={true}>
                                <Card
                                    {...{
                                        linkTo:
                                            '/society/2019/nov/14/witchcraft-and-black-magic-contribute-to-increase-in-child-abuse',
                                        pillar: 'lifestyle',
                                        designType: 'Article',
                                        headlineText: headlines[10],
                                        headlineSize: 'small',
                                        kickerText: kickers[0],
                                    }}
                                />
                            </LI>
                            <LI bottomMargin={false} stretch={true}>
                                <Card
                                    {...{
                                        linkTo:
                                            '/society/2019/nov/14/witchcraft-and-black-magic-contribute-to-increase-in-child-abuse',
                                        pillar: 'news',
                                        designType: 'Article',
                                        headlineText: headlines[11],
                                        headlineSize: 'small',
                                        kickerText: kickers[3],
                                        commentCount: 44,
                                    }}
                                />
                            </LI>
                        </UL>
                    </LI>
                </UL>
            </ArticleContainer>
        </Flex>
    </Section>
);
News.story = { name: 'News' };

export const InDepth = () => (
    <Section>
        <Flex>
            <LeftColumn showRightBorder={false}>
                <></>
            </LeftColumn>
            <ArticleContainer>
                <UL direction="row">
                    <LI percentage="50%" padSides={true}>
                        <UL direction="column">
                            <LI bottomMargin={true} stretch={true}>
                                <Card
                                    {...{
                                        linkTo:
                                            '/society/2019/nov/14/witchcraft-and-black-magic-contribute-to-increase-in-child-abuse',
                                        pillar: 'sport',
                                        designType: 'Article',
                                        headlineText: headlines[6],
                                        headlineSize: 'medium',
                                        kickerText: kickers[4],
                                        imageUrl: images[5],
                                        imagePosition: 'left',
                                        imageSize: 'small',
                                    }}
                                />
                            </LI>
                            <LI bottomMargin={true} stretch={true}>
                                <Card
                                    {...{
                                        linkTo:
                                            '/society/2019/nov/14/witchcraft-and-black-magic-contribute-to-increase-in-child-abuse',
                                        pillar: 'sport',
                                        designType: 'Article',
                                        headlineText: headlines[6],
                                        headlineSize: 'small',
                                        kickerText: kickers[3],
                                        imageUrl: images[6],
                                        imagePosition: 'left',
                                        imageSize: 'small',
                                        commentCount: 864,
                                    }}
                                />
                            </LI>
                            <LI bottomMargin={true} stretch={true}>
                                <Card
                                    {...{
                                        linkTo:
                                            '/society/2019/nov/14/witchcraft-and-black-magic-contribute-to-increase-in-child-abuse',
                                        pillar: 'sport',
                                        designType: 'Article',
                                        headlineText: headlines[6],
                                        headlineSize: 'small',
                                        kickerText: kickers[2],
                                        imageUrl: images[3],
                                        imagePosition: 'left',
                                        imageSize: 'small',
                                    }}
                                />
                            </LI>
                            <LI bottomMargin={true} stretch={true}>
                                <Card
                                    {...{
                                        linkTo:
                                            '/society/2019/nov/14/witchcraft-and-black-magic-contribute-to-increase-in-child-abuse',
                                        pillar: 'sport',
                                        designType: 'Article',
                                        headlineText: headlines[2],
                                        headlineSize: 'small',
                                        kickerText: kickers[1],
                                        imageUrl: images[2],
                                        imagePosition: 'left',
                                        imageSize: 'small',
                                    }}
                                />
                            </LI>
                            <LI bottomMargin={false} stretch={true}>
                                <Card
                                    {...{
                                        linkTo:
                                            '/society/2019/nov/14/witchcraft-and-black-magic-contribute-to-increase-in-child-abuse',
                                        pillar: 'sport',
                                        designType: 'Article',
                                        headlineText: headlines[7],
                                        headlineSize: 'small',
                                        kickerText: kickers[0],
                                        imageUrl: images[1],
                                        imagePosition: 'left',
                                        imageSize: 'small',
                                    }}
                                />
                            </LI>
                        </UL>
                    </LI>
                    <LI
                        percentage="50%"
                        showDivider={true}
                        showTopMarginWhenStacked={true}
                        padSides={true}
                    >
                        <Card
                            {...{
                                linkTo:
                                    '/society/2019/nov/14/witchcraft-and-black-magic-contribute-to-increase-in-child-abuse',
                                pillar: 'news',
                                designType: 'Comment',
                                headlineText: headlines[7],
                                headlineSize: 'large',
                                kickerText: kickers[0],
                                imageUrl: images[0],
                                imagePosition: 'top',
                                webPublicationDate: '2019-11-11T09:45:30.000Z',
                                commentCount: 3694,
                            }}
                        />
                    </LI>
                </UL>
            </ArticleContainer>
        </Flex>
    </Section>
);
InDepth.story = { name: 'In Depth' };

export const Related = () => (
    <Section>
        <Flex>
            <LeftColumn showRightBorder={false}>
                <></>
            </LeftColumn>
            <ArticleContainer>
                <UL direction="row" bottomMargin={true}>
                    <LI padSides={true}>
                        <Card
                            {...{
                                linkTo:
                                    '/society/2019/nov/14/witchcraft-and-black-magic-contribute-to-increase-in-child-abuse',
                                pillar: 'sport',
                                designType: 'Article',
                                headlineText: headlines[7],
                                headlineSize: 'medium',
                                kickerText: kickers[3],
                                webPublicationDate: '2019-11-11T09:45:30.000Z',
                                imageUrl: images[5],
                                imagePosition: 'top',
                            }}
                        />
                    </LI>
                    <LI
                        padSides={true}
                        showDivider={true}
                        showTopMarginWhenStacked={true}
                    >
                        <Card
                            {...{
                                linkTo:
                                    '/society/2019/nov/14/witchcraft-and-black-magic-contribute-to-increase-in-child-abuse',
                                pillar: 'sport',
                                designType: 'Live',
                                headlineText: headlines[8],
                                headlineSize: 'medium',
                                kickerText: kickers[0],
                                webPublicationDate: '2019-11-11T09:45:30.000Z',
                                imageUrl: images[6],
                                imagePosition: 'top',
                                commentCount: 222864,
                            }}
                        />
                    </LI>
                    <LI
                        padSides={true}
                        showDivider={true}
                        showTopMarginWhenStacked={true}
                    >
                        <Card
                            {...{
                                linkTo:
                                    '/society/2019/nov/14/witchcraft-and-black-magic-contribute-to-increase-in-child-abuse',
                                pillar: 'sport',
                                designType: 'Comment',
                                headlineText: headlines[8],
                                headlineSize: 'medium',
                                kickerText: kickers[1],
                                webPublicationDate: '2019-11-11T09:45:30.000Z',
                                imageUrl: images[4],
                                imagePosition: 'top',
                            }}
                        />
                    </LI>
                </UL>
                <UL direction="row">
                    <LI padSides={true}>
                        <Card
                            {...{
                                linkTo:
                                    '/society/2019/nov/14/witchcraft-and-black-magic-contribute-to-increase-in-child-abuse',
                                pillar: 'news',
                                designType: 'Article',
                                headlineText: headlines[9],
                                headlineSize: 'small',
                                kickerText: kickers[0],
                                webPublicationDate: '2019-11-11T09:45:30.000Z',
                            }}
                        />
                    </LI>
                    <LI
                        padSides={true}
                        showDivider={true}
                        showTopMarginWhenStacked={true}
                    >
                        <Card
                            {...{
                                linkTo:
                                    '/society/2019/nov/14/witchcraft-and-black-magic-contribute-to-increase-in-child-abuse',
                                pillar: 'sport',
                                designType: 'Article',
                                headlineText: headlines[10],
                                headlineSize: 'small',
                                kickerText: kickers[2],
                                webPublicationDate: '2019-11-11T09:45:30.000Z',
                            }}
                        />
                    </LI>
                    <LI
                        padSides={true}
                        showDivider={true}
                        showTopMarginWhenStacked={true}
                    >
                        <Card
                            {...{
                                linkTo:
                                    '/society/2019/nov/14/witchcraft-and-black-magic-contribute-to-increase-in-child-abuse',
                                pillar: 'culture',
                                designType: 'Interview',
                                headlineText: headlines[1],
                                headlineSize: 'small',
                                kickerText: kickers[1],
                                webPublicationDate: '2019-11-11T09:45:30.000Z',
                            }}
                        />
                    </LI>
                    <LI
                        padSides={true}
                        showDivider={true}
                        showTopMarginWhenStacked={true}
                    >
                        <Card
                            {...{
                                linkTo:
                                    '/society/2019/nov/14/witchcraft-and-black-magic-contribute-to-increase-in-child-abuse',
                                pillar: 'lifestyle',
                                designType: 'Feature',
                                headlineText: headlines[3],
                                headlineSize: 'small',
                                kickerText: kickers[0],
                                webPublicationDate: '2019-11-11T09:45:30.000Z',
                            }}
                        />
                    </LI>
                </UL>
            </ArticleContainer>
        </Flex>
    </Section>
);
Related.story = { name: 'Related Stories' };

export const Spotlight = () => (
    <Section>
        <Flex>
            <LeftColumn showRightBorder={false}>
                <></>
            </LeftColumn>
            <ArticleContainer>
                <Card
                    {...{
                        linkTo:
                            '/society/2019/nov/14/witchcraft-and-black-magic-contribute-to-increase-in-child-abuse',
                        pillar: 'sport',
                        designType: 'Feature',
                        headlineText: headlines[11],
                        headlineSize: 'large',
                        kickerText: kickers[1],
                        webPublicationDate: '2019-11-11T09:45:30.000Z',
                        imageUrl: images[0],
                        imagePosition: 'right',
                        imageSize: 'jumbo',
                    }}
                />
            </ArticleContainer>
        </Flex>
    </Section>
);
Spotlight.story = { name: 'Spotlight' };

export const Quad = () => (
    <Section>
        <Flex>
            <LeftColumn showRightBorder={false}>
                <></>
            </LeftColumn>
            <ArticleContainer>
                <UL direction="row">
                    <LI padSides={true}>
                        <Card
                            {...{
                                linkTo:
                                    '/society/2019/nov/14/witchcraft-and-black-magic-contribute-to-increase-in-child-abuse',
                                pillar: 'opinion',
                                designType: 'Comment',
                                headlineText: headlines[11],
                                headlineSize: 'medium',
                                showQuotes: true,
                                byline: 'George Monbiot',
                                kickerText: kickers[3],
                                webPublicationDate: '2019-11-11T09:45:30.000Z',
                                avatar: {
                                    src:
                                        'https://i.guim.co.uk/img/uploads/2017/10/06/George-Monbiot,-L.png?width=173&quality=85&auto=format&fit=max&s=be5b0d3f3aa55682e4930057fc3929a3',
                                    alt: 'Avatar alt text',
                                },
                                showClock: true,
                            }}
                        />
                    </LI>
                    <LI
                        padSides={true}
                        showDivider={true}
                        showTopMarginWhenStacked={true}
                    >
                        <Card
                            {...{
                                linkTo:
                                    '/society/2019/nov/14/witchcraft-and-black-magic-contribute-to-increase-in-child-abuse',
                                pillar: 'opinion',
                                designType: 'Article',
                                headlineText: headlines[11],
                                headlineSize: 'medium',
                                webPublicationDate: '2019-11-11T09:45:30.000Z',
                                imageUrl: images[0],
                                imagePosition: 'top',
                                showClock: true,
                                commentCount: 30989,
                            }}
                        />
                    </LI>
                    <LI
                        padSides={true}
                        showDivider={true}
                        showTopMarginWhenStacked={true}
                    >
                        <Card
                            {...{
                                linkTo:
                                    '/society/2019/nov/14/witchcraft-and-black-magic-contribute-to-increase-in-child-abuse',
                                pillar: 'news',
                                designType: 'Article',
                                headlineText: headlines[11],
                                headlineSize: 'medium',
                                kickerText: kickers[0],
                                webPublicationDate: '2019-11-11T09:45:30.000Z',
                                imageUrl: images[0],
                                imagePosition: 'top',
                                showClock: true,
                                commentCount: 0,
                            }}
                        />
                    </LI>
                    <LI
                        padSides={true}
                        showDivider={true}
                        showTopMarginWhenStacked={true}
                    >
                        <Card
                            {...{
                                linkTo:
                                    '/society/2019/nov/14/witchcraft-and-black-magic-contribute-to-increase-in-child-abuse',
                                designType: 'Article',
                                pillar: 'news',
                                headlineText: headlines[11],
                                headlineSize: 'medium',
                                kickerText: kickers[2],
                                webPublicationDate: '2019-11-11T09:45:30.000Z',
                                imageUrl: images[0],
                                imagePosition: 'top',
                                showClock: true,
                            }}
                        />
                    </LI>
                </UL>
            </ArticleContainer>
        </Flex>
    </Section>
);
Quad.story = { name: 'Four with image top' };

export const Media = () => (
    <Section>
        <Flex>
            <LeftColumn showRightBorder={false}>
                <></>
            </LeftColumn>
            <ArticleContainer>
                <UL direction="row">
                    <LI
                        padSides={true}
                        showDivider={true}
                        showTopMarginWhenStacked={true}
                    >
                        <Card
                            {...{
                                linkTo:
                                    '/society/2019/nov/14/witchcraft-and-black-magic-contribute-to-increase-in-child-abuse',
                                pillar: 'culture',
                                designType: 'Media',
                                headlineText: headlines[11],
                                headlineSize: 'medium',
                                webPublicationDate: '2019-11-11T09:45:30.000Z',
                                imageUrl: images[0],
                                imagePosition: 'top',
                                showClock: true,
                                mediaType: 'Gallery',
                                commentCount: 0,
                            }}
                        />
                    </LI>
                    <LI
                        padSides={true}
                        showDivider={true}
                        showTopMarginWhenStacked={true}
                    >
                        <Card
                            {...{
                                linkTo:
                                    '/society/2019/nov/14/witchcraft-and-black-magic-contribute-to-increase-in-child-abuse',
                                pillar: 'news',
                                designType: 'Media',
                                headlineText: headlines[11],
                                headlineSize: 'medium',
                                kickerText: kickers[0],
                                imageUrl: images[0],
                                imagePosition: 'top',
                                showClock: true,
                                mediaType: 'Audio',
                                mediaDuration: 35999,
                                commentCount: 864,
                            }}
                        />
                    </LI>
                    <LI
                        padSides={true}
                        showDivider={true}
                        showTopMarginWhenStacked={true}
                    >
                        <Card
                            {...{
                                linkTo:
                                    '/society/2019/nov/14/witchcraft-and-black-magic-contribute-to-increase-in-child-abuse',
                                pillar: 'sport',
                                designType: 'Media',
                                headlineText: headlines[11],
                                headlineSize: 'medium',
                                kickerText: kickers[1],
                                webPublicationDate: '2019-11-11T09:45:30.000Z',
                                imageUrl: images[0],
                                imagePosition: 'top',
                                showClock: true,
                                mediaType: 'Video',
                                mediaDuration: 59,
                            }}
                        />
                    </LI>
                </UL>
            </ArticleContainer>
        </Flex>
    </Section>
);
Media.story = { name: 'Media' };
