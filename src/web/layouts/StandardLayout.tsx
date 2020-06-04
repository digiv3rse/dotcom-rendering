import React from 'react';
import { css } from 'emotion';

import {
    neutral,
    background,
    brandAltBackground,
    brandBackground,
    brandLine,
    brandBorder,
} from '@guardian/src-foundations/palette';
import { from, until } from '@guardian/src-foundations/mq';
import { GuardianLines } from '@root/src/web/components/GuardianLines';

import { namedAdSlotParameters } from '@root/src/model/advertisement';
import { StarRating } from '@root/src/web/components/StarRating/StarRating';
import { StickyAd } from '@root/src/web/components/StickyAd';
import { ArticleBody } from '@root/src/web/components/ArticleBody';
import { RightColumn } from '@root/src/web/components/RightColumn';
import { ArticleTitle } from '@root/src/web/components/ArticleTitle';
import { ArticleContainer } from '@root/src/web/components/ArticleContainer';
import { ArticleMeta } from '@root/src/web/components/ArticleMeta';
import { MostViewedRightIsland } from '@root/src/web/components/MostViewedRightIsland';
import { SubMeta } from '@root/src/web/components/SubMeta';
import { MainMedia } from '@root/src/web/components/MainMedia';
import { ArticleHeadline } from '@root/src/web/components/ArticleHeadline';
import { ArticleHeadlinePadding } from '@root/src/web/components/ArticleHeadlinePadding';
import { ArticleStandfirst } from '@root/src/web/components/ArticleStandfirst';
import { Header } from '@root/src/web/components/Header';
import { Footer } from '@root/src/web/components/Footer';
import { SubNav } from '@root/src/web/components/SubNav/SubNav';
import { Section } from '@root/src/web/components/Section';
import { Nav } from '@root/src/web/components/Nav/Nav';
import { HeaderAdSlot } from '@root/src/web/components/HeaderAdSlot';
import { MobileStickyContainer, AdSlot } from '@root/src/web/components/AdSlot';
import { Border } from '@root/src/web/components/Border';
import { GridItem } from '@root/src/web/components/GridItem';
import { AgeWarning } from '@root/src/web/components/AgeWarning';
import { CommentsLayout } from '@frontend/web/components/CommentsLayout';

import { buildAdTargeting } from '@root/src/lib/ad-targeting';
import { parse } from '@frontend/lib/slot-machine-flags';
import { getAgeWarning } from '@root/src/lib/age-warning';
import {
    decideLineCount,
    decideLineEffect,
    getCurrentPillar,
} from '@root/src/web/lib/layoutHelpers';
import { Stuck, SendToBack } from '@root/src/web/layouts/lib/stickiness';

const MOSTVIEWED_STICKY_HEIGHT = 1059;

const StandardGrid = ({
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

                grid-column-gap: 10px;

                ${from.wide} {
                    grid-template-columns:
                        219px /* Left Column (220 - 1px border) */
                        1px /* Vertical grey border */
                        1fr /* Main content */
                        300px; /* Right Column */
                    grid-template-areas:
                        'title  border  headline    right-column'
                        '.      border  standfirst  right-column'
                        'lines  border  media       right-column'
                        'meta   border  media       right-column'
                        'meta   border  body        right-column'
                        '.      border  .           right-column';
                }

                ${until.wide} {
                    grid-template-columns:
                        140px /* Left Column */
                        1px /* Vertical grey border */
                        1fr /* Main content */
                        300px; /* Right Column */
                    grid-template-areas:
                        'title  border  headline    right-column'
                        '.      border  standfirst  right-column'
                        'lines  border  media       right-column'
                        'meta   border  media       right-column'
                        'meta   border  body        right-column'
                        '.      border  .           right-column';
                }

                ${until.leftCol} {
                    grid-template-columns:
                        1fr /* Main content */
                        300px; /* Right Column */
                    grid-template-areas:
                        'title      right-column'
                        'headline   right-column'
                        'standfirst right-column'
                        'media      right-column'
                        'lines      right-column'
                        'meta       right-column'
                        'body       right-column'
                        '.          right-column';
                }

                ${until.desktop} {
                    grid-template-columns: 1fr; /* Main content */
                    grid-template-areas:
                        'title'
                        'headline'
                        'standfirst'
                        'media'
                        'lines'
                        'meta'
                        'body';
                }

                ${until.tablet} {
                    grid-column-gap: 0px;

                    grid-template-columns: 1fr; /* Main content */
                    grid-template-areas:
                        'media'
                        'title'
                        'headline'
                        'standfirst'
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

const articleWidth = css`
    ${from.desktop} {
        width: 620px;
    }
`;

const stretchLines = css`
    ${until.phablet} {
        margin-left: -20px;
        margin-right: -20px;
    }
    ${until.mobileLandscape} {
        margin-left: -10px;
        margin-right: -10px;
    }
`;

const starWrapper = css`
    margin-bottom: 18px;
    margin-top: 6px;
    background-color: ${brandAltBackground.primary};
    display: inline-block;

    ${until.phablet} {
        padding-left: 20px;
        margin-left: -20px;
    }
    ${until.leftCol} {
        padding-left: 0px;
        margin-left: -0px;
    }

    padding-left: 10px;
    margin-left: -10px;
`;

const ageWarningMargins = css`
    margin-top: 12px;
    margin-left: -10px;
    margin-bottom: 6px;

    ${from.tablet} {
        margin-left: -20px;
    }

    ${from.leftCol} {
        margin-left: -10px;
        margin-top: 0;
    }
`;

interface Props {
    CAPI: CAPIType;
    NAV: NavType;
    display: Display;
    designType: DesignType;
    pillar: Pillar;
}

export const StandardLayout = ({
    CAPI,
    NAV,
    display,
    designType,
    pillar,
}: Props) => {
    const {
        config: { isPaidContent },
    } = CAPI;

    const adTargeting: AdTargeting = buildAdTargeting(CAPI.config);

    const showBodyEndSlot =
        parse(CAPI.slotMachineFlags || '').showBodyEnd ||
        CAPI.config.switches.slotBodyEnd;

    // TODO:
    // 1) Read 'forceEpic' value from URL parameter and use it to force the slot to render
    // 2) Otherwise, ensure slot only renders if `CAPI.config.shouldHideReaderRevenue` equals false.

    const seriesTag = CAPI.tags.find(
        tag => tag.type === 'Series' || tag.type === 'Blog',
    );
    const showOnwardsLower = seriesTag && CAPI.hasStoryPackage;

    const showComments = CAPI.isCommentable;

    const age = getAgeWarning(CAPI.tags, CAPI.webPublicationDate);

    const { branding } = CAPI.commercialProperties[CAPI.editionId];

    return (
        <>
            <div>
                <Stuck>
                    <Section
                        showTopBorder={false}
                        showSideBorders={false}
                        padded={false}
                    >
                        <HeaderAdSlot
                            isAdFreeUser={CAPI.isAdFreeUser}
                            shouldHideAds={CAPI.shouldHideAds}
                        />
                    </Section>
                </Stuck>
                <SendToBack>
                    <Section
                        showTopBorder={false}
                        showSideBorders={false}
                        padded={false}
                        backgroundColour={brandBackground.primary}
                    >
                        <Header edition={CAPI.editionId} />
                    </Section>

                    <Section
                        showSideBorders={true}
                        borderColour={brandLine.primary}
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

                    {NAV.subNavSections && (
                        <Section
                            backgroundColour={background.primary}
                            padded={false}
                            sectionId="sub-nav-root"
                        >
                            <SubNav
                                subNavSections={NAV.subNavSections}
                                currentNavLink={NAV.currentNavLink}
                                pillar={pillar}
                            />
                        </Section>
                    )}

                    <Section
                        backgroundColour={background.primary}
                        padded={false}
                        showTopBorder={false}
                    >
                        <GuardianLines count={4} pillar={pillar} />
                    </Section>
                </SendToBack>
            </div>

            <Section showTopBorder={false}>
                <StandardGrid>
                    <GridItem area="title">
                        <ArticleTitle
                            display={display}
                            designType={designType}
                            tags={CAPI.tags}
                            sectionLabel={CAPI.sectionLabel}
                            sectionUrl={CAPI.sectionUrl}
                            guardianBaseURL={CAPI.guardianBaseURL}
                            pillar={pillar}
                            badge={CAPI.badge}
                        />
                    </GridItem>
                    <GridItem area="border">
                        <Border />
                    </GridItem>
                    <GridItem area="headline">
                        <div className={maxWidth}>
                            <ArticleHeadlinePadding designType={designType}>
                                {age && (
                                    <div className={ageWarningMargins}>
                                        <AgeWarning age={age} />
                                    </div>
                                )}
                                <ArticleHeadline
                                    display={display}
                                    headlineString={CAPI.headline}
                                    designType={designType}
                                    pillar={pillar}
                                    tags={CAPI.tags}
                                    byline={CAPI.author.byline}
                                />
                                {age && (
                                    <AgeWarning
                                        age={age}
                                        isScreenReader={true}
                                    />
                                )}
                            </ArticleHeadlinePadding>
                        </div>
                        {CAPI.starRating || CAPI.starRating === 0 ? (
                            <div className={starWrapper}>
                                <StarRating
                                    rating={CAPI.starRating}
                                    size="large"
                                />
                            </div>
                        ) : (
                            <></>
                        )}
                    </GridItem>
                    <GridItem area="standfirst">
                        <ArticleStandfirst
                            display={display}
                            designType={designType}
                            pillar={pillar}
                            standfirst={CAPI.standfirst}
                        />
                    </GridItem>
                    <GridItem area="media">
                        <div className={maxWidth}>
                            <MainMedia
                                display={display}
                                designType={designType}
                                elements={CAPI.mainMediaElements}
                                pillar={pillar}
                                adTargeting={adTargeting}
                            />
                        </div>
                    </GridItem>
                    <GridItem area="lines">
                        <div className={maxWidth}>
                            <div className={stretchLines}>
                                <GuardianLines
                                    count={decideLineCount(designType)}
                                    pillar={pillar}
                                    effect={decideLineEffect(
                                        designType,
                                        pillar,
                                    )}
                                />
                            </div>
                        </div>
                    </GridItem>
                    <GridItem area="meta">
                        <div className={maxWidth}>
                            <ArticleMeta
                                branding={branding}
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
                            <main className={articleWidth}>
                                <ArticleBody
                                    pillar={pillar}
                                    blocks={CAPI.blocks}
                                    display={display}
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
                            <StickyAd
                                name="right"
                                height={MOSTVIEWED_STICKY_HEIGHT}
                            />
                            {!isPaidContent ? <MostViewedRightIsland /> : <></>}
                        </RightColumn>
                    </GridItem>
                </StandardGrid>
            </Section>

            <Section
                padded={false}
                showTopBorder={false}
                showSideBorders={false}
                backgroundColour={neutral[93]}
            >
                <AdSlot asps={namedAdSlotParameters('merchandising-high')} />
            </Section>

            {!isPaidContent && (
                <>
                    {/* Onwards (when signed IN) */}
                    <Section sectionId="onwards-upper-whensignedin" />
                    {showOnwardsLower && (
                        <Section sectionId="onwards-lower-whensignedin" />
                    )}

                    {showComments && (
                        <Section sectionId="comments">
                            <CommentsLayout
                                pillar={pillar}
                                baseUrl={CAPI.config.discussionApiUrl}
                                shortUrl={CAPI.config.shortUrlId}
                                commentCount={0}
                                isClosedForComments={true}
                                discussionD2Uid={CAPI.config.discussionD2Uid}
                                discussionApiClientHeader={
                                    CAPI.config.discussionApiClientHeader
                                }
                                enableDiscussionSwitch={false}
                                expanded={false}
                                onPermalinkClick={() => {}}
                            />
                        </Section>
                    )}

                    {/* Onwards (when signed OUT) */}
                    <Section
                        sectionId="onwards-upper-whensignedout"
                        showTopBorder={false}
                    />
                    {showOnwardsLower && (
                        <Section sectionId="onwards-lower-whensignedout" />
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
