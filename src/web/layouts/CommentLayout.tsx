import React from 'react';
import { css, cx } from 'emotion';

import {
    neutral,
    brandBorder,
    brandBackground,
    opinion,
} from '@guardian/src-foundations/palette';
import { from, until } from '@guardian/src-foundations/mq';

import { namedAdSlotParameters } from '@root/src/model/advertisement';
import { StickyAd } from '@root/src/web/components/StickyAd';
import { ArticleBody } from '@root/src/web/components/ArticleBody';
import { RightColumn } from '@root/src/web/components/RightColumn';
import { ArticleTitle } from '@root/src/web/components/ArticleTitle';
import { ArticleContainer } from '@root/src/web/components/ArticleContainer';
import { ArticleMeta } from '@root/src/web/components/ArticleMeta';
import { GuardianLines } from '@root/src/web/components/GuardianLines';
import { MostViewedRightIsland } from '@root/src/web/components/MostViewedRightIsland';
import { SubMeta } from '@root/src/web/components/SubMeta';
import { MainMedia } from '@root/src/web/components/MainMedia';
import { ArticleHeadline } from '@root/src/web/components/ArticleHeadline';
import { ContributorAvatar } from '@root/src/web/components/ContributorAvatar';
import { ArticleStandfirst } from '@root/src/web/components/ArticleStandfirst';
import { Header } from '@root/src/web/components/Header';
import { Footer } from '@root/src/web/components/Footer';
import { SubNav } from '@root/src/web/components/SubNav/SubNav';
import { OutbrainContainer } from '@root/src/web/components/Outbrain';
import { Section } from '@root/src/web/components/Section';
import { Nav } from '@root/src/web/components/Nav/Nav';
import { HeaderAdSlot } from '@root/src/web/components/HeaderAdSlot';
import { MobileStickyContainer, AdSlot } from '@root/src/web/components/AdSlot';
import { Border } from '@root/src/web/components/Border';
import { GridItem } from '@root/src/web/components/GridItem';
import { Flex } from '@root/src/web/components/Flex';
import { AgeWarning } from '@root/src/web/components/AgeWarning';

import { buildAdTargeting } from '@root/src/lib/ad-targeting';
import { parse } from '@frontend/lib/slot-machine-flags';
import { getAgeWarning } from '@root/src/lib/age-warning';
import { getCurrentPillar } from '@root/src/web/lib/layoutHelpers';

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
                        'title      border  headline    right-column'
                        'lines      border  headline    right-column'
                        'meta       border  standfirst  right-column'
                        'meta       border  media       right-column'
                        '.          border  body        right-column'
                        '.          border  .           right-column';
                }

                ${until.wide} {
                    grid-template-columns:
                        140px /* Left Column (220 - 1px border) */
                        1px /* Vertical grey border */
                        1fr /* Main content */
                        300px; /* Right Column */
                    grid-template-areas:
                        'title      border  headline    right-column'
                        'lines      border  headline    right-column'
                        'meta       border  standfirst  right-column'
                        'meta       border  media       right-column'
                        '.          border  body        right-column'
                        '.          border  .           right-column';
                }

                ${until.leftCol} {
                    grid-template-columns:
                        1fr /* Main content */
                        300px; /* Right Column */
                    grid-template-areas:
                        'title      right-column'
                        'headline   right-column'
                        'standfirst right-column'
                        'meta       right-column'
                        'media      right-column'
                        'body       right-column'
                        '.          right-column';
                }

                ${until.desktop} {
                    grid-template-columns: 1fr; /* Main content */
                    grid-template-areas:
                        'title'
                        'headline'
                        'standfirst'
                        'meta'
                        'media'
                        'body';
                }

                ${until.tablet} {
                    grid-column-gap: 0px;

                    grid-template-columns: 1fr; /* Main content */
                    grid-template-areas:
                        'title'
                        'headline'
                        'standfirst'
                        'meta'
                        'media'
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

const avatarHeadlineWrapper = css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const minHeightWithAvatar = css`
    min-height: 259px;
`;

const avatarPositionStyles = css`
    display: flex;
    justify-content: flex-end;
    margin-right: -1.25rem;
    margin-top: -36px;
    margin-bottom: -29px;
`;

const pushToBottom = css`
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: flex-end;
`;

const headlinePadding = css`
    padding-bottom: 43px;
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

export const CommentLayout = ({
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

    const contributorTag = CAPI.tags.find(tag => tag.type === 'Contributor');
    const avatarUrl = contributorTag && contributorTag.bylineImageUrl;
    const onlyOneContributor: boolean =
        CAPI.tags.filter(tag => tag.type === 'Contributor').length === 1;

    const showAvatar = avatarUrl && onlyOneContributor;

    const age = getAgeWarning(CAPI.tags, CAPI.webPublicationDate);

    return (
        <>
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
            <Section
                showTopBorder={false}
                showSideBorders={false}
                padded={false}
                backgroundColour={brandBackground.primary}
            >
                <Header edition={CAPI.editionId} />
            </Section>

            <Section
                sectionId="nav-root"
                showSideBorders={true}
                borderColour={brandBorder.primary}
                showTopBorder={false}
                padded={false}
                backgroundColour={brandBackground.primary}
            >
                <Nav pillar={getCurrentPillar(CAPI)} nav={NAV} />
            </Section>

            {NAV.subNavSections && (
                <Section
                    backgroundColour={opinion[800]}
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
                backgroundColour={opinion[800]}
                padded={false}
                showTopBorder={false}
            >
                <GuardianLines pillar={pillar} />
            </Section>

            <Section showTopBorder={false} backgroundColour={opinion[800]}>
                <StandardGrid>
                    <GridItem area="title">
                        <ArticleTitle
                            display={display}
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
                            <div
                                className={cx(
                                    avatarHeadlineWrapper,
                                    showAvatar && minHeightWithAvatar,
                                )}
                            >
                                {/* TOP - we use divs here to position content in groups using flex */}
                                <div
                                    className={cx(
                                        !showAvatar && headlinePadding,
                                    )}
                                >
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
                                </div>
                                {/* BOTTOM */}
                                <div>
                                    {showAvatar && avatarUrl && (
                                        <div className={avatarPositionStyles}>
                                            <ContributorAvatar
                                                imageSrc={avatarUrl}
                                                imageAlt={
                                                    CAPI.author.byline || ''
                                                }
                                            />
                                        </div>
                                    )}
                                    <GuardianLines count={8} pillar={pillar} />
                                </div>
                            </div>
                        </div>
                    </GridItem>
                    <GridItem area="lines">
                        <div className={pushToBottom}>
                            <GuardianLines count={8} pillar={pillar} />
                        </div>
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
                                elements={CAPI.mainMediaElements}
                                pillar={pillar}
                                adTargeting={adTargeting}
                            />
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
                                    pillar={pillar}
                                    blocks={CAPI.blocks}
                                    display={display}
                                    designType={designType}
                                    adTargeting={adTargeting}
                                />
                                {showBodyEndSlot && <div id="slot-body-end" />}
                                <GuardianLines pillar={pillar} />
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
                            <StickyAd />
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
                    <GuardianLines pillar={pillar} />
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
