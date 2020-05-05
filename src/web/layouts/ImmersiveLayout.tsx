import React from 'react';
import { css } from 'emotion';

import {
    neutral,
    brandBackground,
    brandBorder,
} from '@guardian/src-foundations/palette';
import { from, until } from '@guardian/src-foundations/mq';
import { space } from '@guardian/src-foundations';

import { namedAdSlotParameters } from '@root/src/model/advertisement';
import { ArticleBody } from '@root/src/web/components/ArticleBody';
import { RightColumn } from '@root/src/web/components/RightColumn';
import { ArticleContainer } from '@root/src/web/components/ArticleContainer';
import { ArticleMeta } from '@root/src/web/components/ArticleMeta';
import { GuardianLines } from '@root/src/web/components/GuardianLines';
import { SubMeta } from '@root/src/web/components/SubMeta';
import { MainMedia } from '@root/src/web/components/MainMedia';
import { ArticleStandfirst } from '@root/src/web/components/ArticleStandfirst';
import { Footer } from '@root/src/web/components/Footer';
import { SubNav } from '@root/src/web/components/SubNav/SubNav';
import { OutbrainContainer } from '@root/src/web/components/Outbrain';
import { Section } from '@root/src/web/components/Section';
import { Nav } from '@root/src/web/components/Nav/Nav';
import { MobileStickyContainer, AdSlot } from '@root/src/web/components/AdSlot';
import { Border } from '@root/src/web/components/Border';
import { GridItem } from '@root/src/web/components/GridItem';
import { Flex } from '@root/src/web/components/Flex';
import { Caption } from '@root/src/web/components/Caption';
import { HeadlineByline } from '@root/src/web/components/HeadlineByline';
import { ImmersiveHeadline } from '@root/src/web/components/ImmersiveHeadline';

import { buildAdTargeting } from '@root/src/lib/ad-targeting';
import { parse } from '@frontend/lib/slot-machine-flags';

import {
    decideLineCount,
    decideLineEffect,
    getCurrentPillar,
} from '@root/src/web/lib/layoutHelpers';
import { Hide } from '../components/Hide';

const ImmersiveGrid = ({
    children,
}: {
    children: JSX.Element | JSX.Element[];
}) => (
    <div
        className={css`
            /* IE Fallback */
            display: flex;
            flex-direction: column;
            ${until.leftCol} {
                margin-left: 0px;
            }
            ${from.leftCol} {
                margin-left: 151px;
            }
            ${from.wide} {
                margin-left: 230px;
            }

            @supports (display: grid) {
                display: grid;
                width: 100%;
                margin-left: 0;

                ${from.wide} {
                    grid-column-gap: 10px;
                    grid-template-columns:
                        219px /* Left Column (220 - 1px border) */
                        1px /* Vertical grey border */
                        1fr /* Main content */
                        300px; /* Right Column */
                    grid-template-areas:
                        'caption    border      standfirst  right-column'
                        '.          border      byline      right-column'
                        'lines      border      body        right-column'
                        'meta       border      body        right-column'
                        'meta       border      body        right-column'
                        '.          border      body        right-column'
                        '.          border      .           right-column';
                }

                ${until.wide} {
                    grid-column-gap: 10px;
                    grid-template-columns:
                        140px /* Left Column (220 - 1px border) */
                        1px /* Vertical grey border */
                        1fr /* Main content */
                        300px; /* Right Column */
                    grid-template-areas:
                        '.          border      standfirst  right-column'
                        '.          border      byline      right-column'
                        'lines      border      body        right-column'
                        'meta       border      body        right-column'
                        'meta       border      body        right-column'
                        '.          border      body        right-column'
                        '.          border      .           right-column';
                }

                ${until.leftCol} {
                    grid-column-gap: 20px;
                    grid-template-columns:
                        1fr /* Main content */
                        300px; /* Right Column */
                    grid-template-areas:
                        'standfirst  right-column'
                        'byline      right-column'
                        'caption     right-column'
                        'lines       right-column'
                        'meta        right-column'
                        'body        right-column';
                }

                ${until.desktop} {
                    grid-column-gap: 0px;
                    grid-template-columns: 1fr; /* Main content */
                    grid-template-areas:
                        'standfirst'
                        'byline'
                        'caption'
                        'lines'
                        'meta'
                        'body';
                }
            }
        `}
    >
        {children}
    </div>
);

const maxWidth = css`
    ${from.desktop} {
        max-width: 620px;
    }
`;

const stretchLines = css`
    ${until.phablet} {
        margin-left: -20px;
        margin-right: -20px;
    }
`;

interface Props {
    CAPI: CAPIType;
    NAV: NavType;
    display: Display;
    designType: DesignType;
    pillar: Pillar;
}

export const ImmersiveLayout = ({
    CAPI,
    NAV,
    display,
    designType,
    pillar,
}: Props) => {
    const {
        config: { isPaidContent },
        pageType: { isSensitive },
    } = CAPI;

    const adTargeting: AdTargeting = buildAdTargeting(CAPI.config);

    // Render the slot if one is true:
    // 1) The flag for this slot exists in the URL (i.e. ?slot-machine-flags=showBodyEnd)
    // 2) The global switch for the Frontend/DCR Epic test is true
    const showBodyEndSlot =
        parse(CAPI.slotMachineFlags || '').showBodyEnd ||
        CAPI.config.switches.abFrontendDotcomRenderingEpic;

    // TODO:
    // 1) Read 'forceEpic' value from URL parameter and use it to force the slot to render
    // 2) Otherwise, ensure slot only renders if `CAPI.config.shouldHideReaderRevenue` equals false.

    const seriesTag = CAPI.tags.find(
        tag => tag.type === 'Series' || tag.type === 'Blog',
    );
    const showOnwardsLower = seriesTag && CAPI.hasStoryPackage;

    const showComments = CAPI.isCommentable;

    const mainMedia = CAPI.mainMediaElements[0] as ImageBlockElement;
    const captionText = mainMedia && mainMedia.data && mainMedia.data.caption;

    return (
        <>
            <div
                className={css`
                    display: flex;
                    flex-direction: column;
                    min-height: 100vh;
                `}
            >
                <Section
                    sectionId="nav-root"
                    showSideBorders={false}
                    showTopBorder={false}
                    padded={false}
                    backgroundColour={brandBackground.primary}
                >
                    <Nav
                        pillar={getCurrentPillar(CAPI)}
                        nav={NAV}
                        display={display}
                        subscribeUrl={
                            CAPI.nav.readerRevenueLinks.header.subscribe
                        }
                        edition={CAPI.editionId}
                    />
                </Section>
                <div
                    className={css`
                        flex: 1;
                        min-height: 31.25rem;
                        position: relative;
                    `}
                >
                    <MainMedia
                        display={display}
                        elements={CAPI.mainMediaElements}
                        pillar={pillar}
                        adTargeting={adTargeting}
                        starRating={
                            CAPI.designType === 'Review' && CAPI.starRating
                                ? CAPI.starRating
                                : undefined
                        }
                        hideCaption={true}
                    />
                </div>
            </div>

            <ImmersiveHeadline
                display={display}
                designType={designType}
                tags={CAPI.tags}
                author={CAPI.author}
                headline={CAPI.headline}
                sectionLabel={CAPI.sectionLabel}
                sectionUrl={CAPI.sectionUrl}
                guardianBaseURL={CAPI.guardianBaseURL}
                pillar={CAPI.pillar}
                captionText={captionText}
                badge={CAPI.badge}
            />

            <Section showTopBorder={false} showSideBorders={false}>
                <ImmersiveGrid>
                    {/* Above leftCol, the Caption is controled by ImmersiveHeadline because the
                    headline stretches all the way right it can't be inside a Section so that
                    top area of the page is rendered outside the grid */}
                    <GridItem area="caption">
                        <Hide when="above" breakpoint="leftCol">
                            <Caption
                                display={display}
                                captionText={captionText}
                                pillar={pillar}
                                shouldLimitWidth={false}
                            />
                        </Hide>
                    </GridItem>
                    <GridItem area="border">
                        <Border />
                    </GridItem>
                    <GridItem area="standfirst">
                        <ArticleStandfirst
                            display={display}
                            designType={designType}
                            pillar={pillar}
                            standfirst={CAPI.standfirst}
                        />
                    </GridItem>
                    <GridItem area="byline">
                        <HeadlineByline
                            display={display}
                            designType={designType}
                            pillar={pillar}
                            tags={CAPI.tags}
                            byline={
                                CAPI.author.byline ? CAPI.author.byline : ''
                            }
                        />
                    </GridItem>
                    <GridItem area="lines">
                        <div className={maxWidth}>
                            <div className={stretchLines}>
                                <GuardianLines
                                    pillar={pillar}
                                    effect={decideLineEffect(
                                        'Immersive',
                                        pillar,
                                    )}
                                    count={decideLineCount('Immersive')}
                                />
                            </div>
                        </div>
                    </GridItem>
                    <GridItem area="meta">
                        <div className={maxWidth}>
                            <ArticleMeta
                                display={display}
                                designType={designType}
                                pillar={pillar}
                                pageId={CAPI.pageId}
                                webTitle={CAPI.webTitle}
                                author={CAPI.author}
                                tags={CAPI.tags}
                                webPublicationDateDisplay={
                                    CAPI.webPublicationDateDisplay
                                }
                            />
                        </div>
                    </GridItem>
                    <GridItem area="body">
                        <ArticleContainer>
                            <main className={maxWidth}>
                                <ArticleBody
                                    display={display}
                                    pillar={pillar}
                                    blocks={CAPI.blocks}
                                    designType={designType}
                                    adTargeting={adTargeting}
                                />
                                {showBodyEndSlot && <div id="slot-body-end" />}
                                <GuardianLines count={4} pillar={pillar} />
                                <SubMeta
                                    pillar={pillar}
                                    subMetaKeywordLinks={
                                        CAPI.subMetaKeywordLinks
                                    }
                                    subMetaSectionLinks={
                                        CAPI.subMetaSectionLinks
                                    }
                                    pageId={CAPI.pageId}
                                    webUrl={CAPI.webURL}
                                    webTitle={CAPI.webTitle}
                                    showBottomSocialButtons={
                                        CAPI.showBottomSocialButtons
                                    }
                                    badge={CAPI.badge}
                                />
                            </main>
                        </ArticleContainer>
                    </GridItem>
                    <GridItem area="right-column">
                        <RightColumn>
                            <div
                                className={css`
                                    margin-top: ${space[4]}px;
                                `}
                            >
                                <AdSlot asps={namedAdSlotParameters('right')} />
                            </div>
                        </RightColumn>
                    </GridItem>
                </ImmersiveGrid>
            </Section>

            <Section
                padded={false}
                showTopBorder={false}
                showSideBorders={false}
                backgroundColour={neutral[93]}
            >
                <AdSlot asps={namedAdSlotParameters('merchandising-high')} />
            </Section>

            <Section sectionId="onwards-upper" />

            {!isPaidContent && (
                <>
                    {!isSensitive && (
                        <Section
                            showTopBorder={false}
                            backgroundColour={neutral[97]}
                        >
                            <OutbrainContainer />
                        </Section>
                    )}

                    {showOnwardsLower && <Section sectionId="onwards-lower" />}

                    {showComments && (
                        <Section sectionId="comments">
                            <Flex>
                                <div id="comments-root" />
                                <RightColumn>
                                    <AdSlot
                                        asps={namedAdSlotParameters('comments')}
                                    />
                                </RightColumn>
                            </Flex>
                        </Section>
                    )}

                    <Section sectionId="most-viewed-footer" />
                </>
            )}

            <Section
                padded={false}
                showTopBorder={false}
                showSideBorders={false}
                backgroundColour={neutral[93]}
            >
                <AdSlot asps={namedAdSlotParameters('merchandising')} />
            </Section>

            {NAV.subNavSections && (
                <Section padded={false} sectionId="sub-nav-root">
                    <SubNav
                        subNavSections={NAV.subNavSections}
                        currentNavLink={NAV.currentNavLink}
                        pillar={pillar}
                    />
                    <GuardianLines count={4} pillar={pillar} />
                </Section>
            )}

            <Section
                padded={false}
                backgroundColour={brandBackground.primary}
                borderColour={brandBorder.primary}
            >
                <Footer
                    pageFooter={CAPI.pageFooter}
                    pillar={pillar}
                    pillars={NAV.pillars}
                />
            </Section>

            <div id="cmp" />
            <MobileStickyContainer />
        </>
    );
};
