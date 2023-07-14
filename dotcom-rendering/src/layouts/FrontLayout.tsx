import { css } from '@emotion/react';
import { ArticleDisplay } from '@guardian/libs';
import {
	background,
	border,
	brandBackground,
	brandBorder,
	brandLine,
	labs,
	neutral,
	news,
} from '@guardian/source-foundations';
import { Hide } from '@guardian/source-react-components';
import { StraightLines } from '@guardian/source-react-components-development-kitchen';
import { Fragment } from 'react';
import { AdSlot } from '../components/AdSlot';
import { Carousel } from '../components/Carousel.importable';
import { CPScottHeader } from '../components/CPScottHeader';
import { DecideContainer } from '../components/DecideContainer';
import { Footer } from '../components/Footer';
import { FrontMostViewed } from '../components/FrontMostViewed';
import { FrontSection } from '../components/FrontSection';
import { Header } from '../components/Header';
import { HeaderAdSlot } from '../components/HeaderAdSlot';
import { Island } from '../components/Island';
import { LabsHeader } from '../components/LabsHeader';
import { LabsSection } from '../components/LabsSection';
import { Nav } from '../components/Nav/Nav';
import { Section } from '../components/Section';
import { Snap } from '../components/Snap';
import { SnapCssSandbox } from '../components/SnapCssSandbox';
import { StickyBottomBanner } from '../components/StickyBottomBanner.importable';
import { SubNav } from '../components/SubNav.importable';
import { TrendingTopics } from '../components/TrendingTopics';
import { WeatherData } from '../components/WeatherData.importable';
import { canRenderAds } from '../lib/canRenderAds';
import { getContributionsServiceUrl } from '../lib/contributions';
import { decideContainerOverrides } from '../lib/decideContainerOverrides';
import {
	getDesktopAdPositions,
	getMerchHighPosition,
	getMobileAdPositions,
} from '../lib/getAdPositions';
import { hideAge } from '../lib/hideAge';
import type { NavType } from '../model/extract-nav';
import type { DCRCollectionType, DCRFrontType } from '../types/front';
import { pageSkinContainer } from './lib/pageSkin';
import { BannerWrapper, Stuck } from './lib/stickiness';

interface Props {
	front: DCRFrontType;
	NAV: NavType;
}

const spaces = / /g;
/** TODO: Confirm with is a valid way to generate component IDs. */
const ophanComponentId = (name: string) =>
	name.toLowerCase().replace(spaces, '-');

const isNavList = (collection: DCRCollectionType) => {
	return (
		collection.collectionType == 'nav/list' ||
		collection.collectionType == 'nav/media-list'
	);
};

const isToggleable = (
	index: number,
	collection: DCRCollectionType,
	isNetworkFront: boolean,
) => {
	if (isNetworkFront) {
		return (
			collection.displayName.toLowerCase() != 'headlines' &&
			!isNavList(collection)
		);
	} else return index != 0 && !isNavList(collection);
};

export const decideAdSlot = (
	renderAds: boolean,
	index: number,
	isNetworkFront: boolean | undefined,
	collectionCount: number,
	isPaidContent: boolean | undefined,
	mobileAdPositions: (number | undefined)[],
	hasPageSkin: boolean,
) => {
	if (!renderAds) return null;
	const minContainers = isPaidContent ? 1 : 2;
	if (
		collectionCount > minContainers &&
		index === getMerchHighPosition(collectionCount, isNetworkFront)
	) {
		return (
			<AdSlot
				data-print-layout="hide"
				position="merchandising-high"
				hasPageskin={hasPageSkin}
			/>
		);
	} else if (mobileAdPositions.includes(index)) {
		return (
			<Hide from="tablet">
				<AdSlot
					index={mobileAdPositions.indexOf(index)}
					data-print-layout="hide"
					position="mobile-front"
				/>
			</Hide>
		);
	}
	return null;
};

const decideLeftContent = (
	front: DCRFrontType,
	collection: DCRCollectionType,
	hasPageSkin: boolean,
) => {
	// show CPScott?
	if (
		['uk/commentisfree', 'au/commentisfree'].includes(
			front.config.pageId,
		) &&
		collection.displayName.toLowerCase() === 'opinion'
	) {
		return <CPScottHeader />;
	}

	// show weather?
	if (
		front.config.switches['weather'] &&
		['uk', 'us', 'au', 'international', 'europe'].includes(
			front.config.pageId,
		) &&
		// based on https://github.com/guardian/frontend/blob/473aafd168fec7f2a578a52c8e84982e3ec10fea/common/app/views/support/GetClasses.scala#L107
		collection.displayName.toLowerCase() === 'headlines' &&
		!hasPageSkin
	) {
		return (
			<Island clientOnly={true} deferUntil={'idle'}>
				<WeatherData
					ajaxUrl={front.config.ajaxUrl}
					edition={front.config.edition}
				/>
			</Island>
		);
	}

	// show nothing!
	return null;
};

export const FrontLayout = ({ front, NAV }: Props) => {
	const {
		config: { abTests, isPaidContent, hasPageSkin: hasPageSkinConfig },
	} = front;

	const isInEuropeTest = abTests.europeNetworkFrontVariant === 'variant';

	const merchHighPosition = getMerchHighPosition(
		front.pressedPage.collections.length,
		front.isNetworkFront,
	);

	const renderAds = canRenderAds(front);

	const hasPageSkin = hasPageSkinConfig && renderAds;

	const mobileAdPositions = renderAds
		? getMobileAdPositions(front.pressedPage.collections, merchHighPosition)
		: [];

	const desktopAdPositions = renderAds
		? getDesktopAdPositions(front.pressedPage.collections)
		: [];

	const showMostPopular =
		front.config.switches.deeplyReadSwitch &&
		front.isNetworkFront &&
		front.deeplyRead &&
		front.deeplyRead.length > 0;

	const contributionsServiceUrl = getContributionsServiceUrl(front);

	return (
		<>
			<div data-print-layout="hide" id="bannerandheader">
				<>
					{renderAds && (
						<Stuck>
							<Section
								fullWidth={true}
								showTopBorder={false}
								showSideBorders={false}
								padSides={false}
								shouldCenter={false}
							>
								<HeaderAdSlot />
							</Section>
						</Stuck>
					)}

					{hasPageSkin && (
						<AdSlot
							data-print-layout="hide"
							position="pageskin"
							display={ArticleDisplay.Standard}
							hasPageskin={hasPageSkin}
						/>
					)}

					{!isPaidContent && (
						<Section
							fullWidth={true}
							shouldCenter={false}
							showTopBorder={false}
							showSideBorders={false}
							padSides={false}
							backgroundColour={brandBackground.primary}
							element="header"
							hasPageSkin={hasPageSkin}
							hasPageSkinContentSelfConstrain={true}
						>
							<Header
								editionId={front.editionId}
								idUrl={front.config.idUrl}
								mmaUrl={front.config.mmaUrl}
								discussionApiUrl={front.config.discussionApiUrl}
								urls={front.nav.readerRevenueLinks.header}
								remoteHeader={
									!!front.config.switches.remoteHeader
								}
								contributionsServiceUrl={
									contributionsServiceUrl
								}
								idApiUrl={front.config.idApiUrl}
								isInEuropeTest={isInEuropeTest}
								headerTopBarSearchCapiSwitch={
									!!front.config.switches
										.headerTopBarSearchCapi
								}
								hasPageSkin={hasPageSkin}
							/>
						</Section>
					)}

					<Section
						fullWidth={true}
						borderColour={brandLine.primary}
						showTopBorder={false}
						padSides={false}
						backgroundColour={brandBackground.primary}
						element="nav"
						hasPageSkin={hasPageSkin}
					>
						<Nav
							nav={NAV}
							subscribeUrl={
								front.nav.readerRevenueLinks.header.subscribe
							}
							selectedPillar={NAV.selectedPillar}
							editionId={front.editionId}
							headerTopBarSwitch={
								!!front.config.switches.headerTopNav
							}
							isInEuropeTest={isInEuropeTest}
						/>
					</Section>
					{NAV.subNavSections && (
						<>
							<Section
								fullWidth={true}
								padSides={false}
								element="aside"
								hasPageSkin={hasPageSkin}
							>
								<Island deferUntil="idle">
									<SubNav
										subNavSections={NAV.subNavSections}
										currentNavLink={NAV.currentNavLink}
										linkHoverColour={news[400]}
										borderColour={neutral[46]}
									/>
								</Island>
							</Section>
							<Section
								fullWidth={true}
								padSides={false}
								showTopBorder={false}
								hasPageSkin={hasPageSkin}
							>
								<StraightLines
									cssOverrides={css`
										display: block;
									`}
									count={4}
								/>
							</Section>
						</>
					)}

					{isPaidContent && (
						<Section
							fullWidth={true}
							showTopBorder={false}
							backgroundColour={labs[400]}
							borderColour={border.primary}
							sectionId="labs-header"
						>
							<LabsHeader />
						</Section>
					)}
				</>
			</div>

			<main
				data-layout="FrontLayout"
				data-link-name={`Front | /${front.pressedPage.id}`}
				id="maincontent"
				css={hasPageSkin && pageSkinContainer}
			>
				{front.pressedPage.collections.map((collection, index) => {
					// Backfills should be added to the end of any curated content
					const trails = collection.curated.concat(
						collection.backfill,
					);
					const [trail] = trails;

					// There are some containers that have zero trails. We don't want to render these
					if (!trail) return null;

					const ophanName = ophanComponentId(collection.displayName);
					const ophanComponentLink = `container-${
						index + 1
					} | ${ophanName}`;
					const mostPopularTitle = 'Most popular';

					const trailsWithoutBranding = collection.badge
						? trails.map((labTrail) => {
								return {
									...labTrail,
									branding: undefined,
								};
						  })
						: trails;

					const editionBranding =
						front.pressedPage.frontProperties.commercial.editionBrandings.find(
							(eB) =>
								eB.edition.id === front.editionId &&
								!!eB.branding,
						);

					if (collection.collectionType === 'fixed/thrasher') {
						return (
							<Fragment key={ophanName}>
								<div css={[hasPageSkin && pageSkinContainer]}>
									{!!trail.embedUri && (
										<SnapCssSandbox
											snapData={trail.snapData}
										>
											<Section
												fullWidth={true}
												padSides={false}
												showTopBorder={false}
												showSideBorders={false}
												ophanComponentLink={
													ophanComponentLink
												}
												ophanComponentName={ophanName}
												containerName={
													collection.collectionType
												}
												hasPageSkin={hasPageSkin}
											>
												<Snap
													snapData={trail.snapData}
													dataLinkName={
														trail.dataLinkName
													}
												/>
											</Section>
										</SnapCssSandbox>
									)}
									{decideAdSlot(
										renderAds,
										index,
										front.isNetworkFront,
										front.pressedPage.collections.length,
										front.pressedPage.frontProperties
											.isPaidContent,
										mobileAdPositions,
										hasPageSkin,
									)}
								</div>
							</Fragment>
						);
					}

					if (
						collection.collectionType === 'news/most-popular' &&
						!isPaidContent &&
						front.config.switches.mostViewedFronts
					) {
						const deeplyReadData = showMostPopular
							? front.deeplyRead
							: undefined;
						return (
							<>
								<FrontSection
									toggleable={true}
									key={ophanName}
									title={
										showMostPopular
											? mostPopularTitle
											: 'Most viewed'
									}
									showTopBorder={index > 0}
									url={collection.href}
									ophanComponentLink={ophanComponentLink}
									ophanComponentName={
										showMostPopular
											? ophanComponentId(mostPopularTitle)
											: ophanName
									}
									containerName={collection.collectionType}
									containerPalette={
										collection.containerPalette
									}
									sectionId={ophanName}
									showDateHeader={
										collection.config.showDateHeader
									}
									editionId={front.editionId}
									treats={collection.treats}
									data-print-layout="hide"
									hasPageSkin={hasPageSkin}
								>
									<FrontMostViewed
										displayName={collection.displayName}
										trails={trails}
										mostViewed={front.mostViewed}
										mostCommented={front.mostCommented}
										mostShared={front.mostShared}
										isNetworkFront={front.isNetworkFront}
										deeplyRead={deeplyReadData}
										editionId={front.editionId}
										hasPageSkin={hasPageSkin}
										isFront={true}
										renderAds={renderAds}
									/>
								</FrontSection>
								{decideAdSlot(
									renderAds,
									index,
									front.isNetworkFront,
									front.pressedPage.collections.length,
									front.pressedPage.frontProperties
										.isPaidContent,
									mobileAdPositions,
									hasPageSkin,
								)}
							</>
						);
					}

					if (
						collection.containerPalette === 'Branded' &&
						renderAds
					) {
						return (
							<LabsSection
								key={ophanName}
								title={collection.displayName}
								collectionId={collection.id}
								pageId={front.pressedPage.id}
								ajaxUrl={front.config.ajaxUrl}
								sectionId={`container-${ophanName}`}
								ophanComponentName={ophanName}
								ophanComponentLink={ophanComponentLink}
								containerName={collection.collectionType}
								canShowMore={collection.canShowMore}
								url={collection.href}
								badge={collection.badge}
								data-print-layout="hide"
								hasPageSkin={hasPageSkin}
							>
								<DecideContainer
									trails={trailsWithoutBranding}
									groupedTrails={collection.grouped}
									containerType={collection.collectionType}
									containerPalette={
										collection.containerPalette
									}
									adIndex={desktopAdPositions.indexOf(index)}
									renderAds={false}
								/>
							</LabsSection>
						);
					}

					if (
						collection.collectionType === 'fixed/video' ||
						collection.containerPalette === 'PodcastPalette'
					) {
						const containerPalette =
							collection.containerPalette ?? 'MediaPalette';
						const containerOverrides =
							decideContainerOverrides(containerPalette);
						return (
							<Fragment key={ophanName}>
								<Section
									title={collection.displayName}
									sectionId={`container-${ophanName}`}
									ophanComponentName={ophanName}
									ophanComponentLink={ophanComponentLink}
									containerName={collection.collectionType}
									fullWidth={true}
									padBottom={true}
									showSideBorders={
										collection.collectionType !==
										'fixed/video'
									}
									showTopBorder={index > 0}
									padContent={false}
									url={collection.href}
									containerPalette={containerPalette}
									showDateHeader={
										collection.config.showDateHeader
									}
									editionId={front.editionId}
									backgroundColour={
										containerOverrides.background
											.containerOuter
									}
									innerBackgroundColour={
										containerOverrides.background.container
									}
									hasPageSkin={hasPageSkin}
								>
									<Island deferUntil={'visible'}>
										<Carousel
											heading={collection.displayName}
											trails={trails}
											onwardsSource={'unknown-source'}
											palette={containerPalette}
											leftColSize={'compact'}
											collectionType={
												collection.collectionType
											}
											hasPageSkin={hasPageSkin}
										/>
									</Island>
								</Section>
								{decideAdSlot(
									renderAds,
									index,
									front.isNetworkFront,
									front.pressedPage.collections.length,
									front.pressedPage.frontProperties
										.isPaidContent,
									mobileAdPositions,
									hasPageSkin,
								)}
							</Fragment>
						);
					}

					return (
						<Fragment key={ophanName}>
							<FrontSection
								title={collection.displayName}
								description={collection.description}
								showTopBorder={index > 0}
								url={
									collection.href
										? `https://www.theguardian.com/${collection.href}`
										: undefined
								}
								ophanComponentLink={ophanComponentLink}
								ophanComponentName={ophanName}
								containerName={collection.collectionType}
								containerPalette={collection.containerPalette}
								toggleable={isToggleable(
									index,
									collection,
									front.isNetworkFront,
								)}
								leftContent={decideLeftContent(
									front,
									collection,
									hasPageSkin,
								)}
								badge={collection.badge}
								sectionId={ophanName}
								collectionId={collection.id}
								pageId={front.pressedPage.id}
								showDateHeader={
									collection.config.showDateHeader
								}
								editionId={front.editionId}
								treats={collection.treats}
								canShowMore={collection.canShowMore}
								ajaxUrl={front.config.ajaxUrl}
								isOnPaidContentFront={isPaidContent}
								index={index}
								targetedTerritory={collection.targetedTerritory}
								hasPageSkin={hasPageSkin}
								editionBranding={editionBranding}
							>
								<DecideContainer
									trails={trailsWithoutBranding}
									groupedTrails={collection.grouped}
									containerType={collection.collectionType}
									containerPalette={
										collection.containerPalette
									}
									showAge={
										!hideAge.includes(
											collection.displayName,
										)
									}
									adIndex={desktopAdPositions.indexOf(index)}
									renderAds={renderAds}
								/>
							</FrontSection>
							{decideAdSlot(
								renderAds,
								index,
								front.isNetworkFront,
								front.pressedPage.collections.length,
								front.pressedPage.frontProperties.isPaidContent,
								mobileAdPositions,
								hasPageSkin,
							)}
						</Fragment>
					);
				})}
			</main>
			<Section
				fullWidth={true}
				showTopBorder={false}
				ophanComponentName="trending-topics"
				data-component="trending-topics"
				hasPageSkin={hasPageSkin}
			>
				<TrendingTopics trendingTopics={front.trendingTopics} />
			</Section>
			{renderAds && (
				<Section
					fullWidth={true}
					data-print-layout="hide"
					padSides={false}
					showTopBorder={false}
					showSideBorders={false}
					backgroundColour={neutral[93]}
					element="aside"
					hasPageSkin={hasPageSkin}
				>
					<AdSlot position="merchandising" />
				</Section>
			)}

			{NAV.subNavSections && (
				<Section
					fullWidth={true}
					showTopBorder={hasPageSkin}
					data-print-layout="hide"
					padSides={false}
					element="aside"
					backgroundColour={
						hasPageSkin ? background.primary : undefined
					}
				>
					<Island deferUntil="visible">
						<SubNav
							subNavSections={NAV.subNavSections}
							currentNavLink={NAV.currentNavLink}
							linkHoverColour={news[400]}
							borderColour={neutral[46]}
						/>
					</Island>
				</Section>
			)}

			<Section
				fullWidth={true}
				data-print-layout="hide"
				padSides={false}
				backgroundColour={brandBackground.primary}
				borderColour={brandBorder.primary}
				showSideBorders={false}
				showTopBorder={false}
				element="footer"
			>
				<Footer
					pageFooter={front.pageFooter}
					selectedPillar={NAV.selectedPillar}
					pillars={NAV.pillars}
					urls={front.nav.readerRevenueLinks.header}
					editionId={front.editionId}
					contributionsServiceUrl={contributionsServiceUrl}
				/>
			</Section>

			<BannerWrapper data-print-layout="hide">
				<Island deferUntil="idle" clientOnly={true}>
					<StickyBottomBanner
						contentType={front.config.contentType}
						contributionsServiceUrl={contributionsServiceUrl}
						idApiUrl={front.config.idApiUrl}
						isMinuteArticle={false}
						isPaidContent={!!front.config.isPaidContent}
						isPreview={front.config.isPreview}
						isSensitive={front.config.isSensitive}
						keywordIds={front.config.keywordIds} // a front doesn't really have tags, but frontend generates a keywordId
						pageId={front.pressedPage.id}
						sectionId={front.config.section}
						shouldHideReaderRevenue={false} // never defined for fronts
						remoteBannerSwitch={
							!!front.config.switches.remoteBanner
						}
						puzzleBannerSwitch={
							!!front.config.switches.puzzlesBanner
						}
						tags={[]} // a front doesn't have tags
					/>
				</Island>
			</BannerWrapper>
		</>
	);
};
