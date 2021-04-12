import React from 'react';
import { css } from 'emotion';

import {
	neutral,
	brandAltBackground,
	brandBackground,
	brandLine,
	brandBorder,
} from '@guardian/src-foundations/palette';
import { from, until } from '@guardian/src-foundations/mq';
import type { Format } from '@guardian/types';

import { GuardianLines } from '@root/src/web/components/GuardianLines';
import { StarRating } from '@root/src/web/components/StarRating/StarRating';
import { ArticleBody } from '@root/src/web/components/ArticleBody';
import { RightColumn } from '@root/src/web/components/RightColumn';
import { ArticleTitle } from '@root/src/web/components/ArticleTitle';
import { ArticleContainer } from '@root/src/web/components/ArticleContainer';
import { ArticleMeta } from '@root/src/web/components/ArticleMeta';
import { SubMeta } from '@root/src/web/components/SubMeta';
import { MainMedia } from '@root/src/web/components/MainMedia';
import { ArticleHeadline } from '@root/src/web/components/ArticleHeadline';
import { ArticleHeadlinePadding } from '@root/src/web/components/ArticleHeadlinePadding';
import { Standfirst } from '@root/src/web/components/Standfirst';
import { Header } from '@root/src/web/components/Header';
import { Footer } from '@root/src/web/components/Footer';
import { SubNav } from '@root/src/web/components/SubNav/SubNav';
import { Section } from '@root/src/web/components/Section';
import { Nav } from '@root/src/web/components/Nav/Nav';
import { HeaderAdSlot } from '@root/src/web/components/HeaderAdSlot';
import { MobileStickyContainer, AdSlot } from '@root/src/web/components/AdSlot';
import { GridItem } from '@root/src/web/components/GridItem';
import { AgeWarning } from '@root/src/web/components/AgeWarning';
import { Discussion } from '@frontend/web/components/Discussion';

import { buildAdTargeting } from '@root/src/lib/ad-targeting';
import { parse } from '@frontend/lib/slot-machine-flags';
import { getAgeWarning } from '@root/src/lib/age-warning';
import {
	decideLineCount,
	decideLineEffect,
	getCurrentPillar,
} from '@root/src/web/lib/layoutHelpers';
import {
	Stuck,
	SendToBack,
	BannerWrapper,
} from '@root/src/web/layouts/lib/stickiness';
import { space } from '@guardian/src-foundations';
import { ContainerLayout } from '../components/ContainerLayout';

const LiveGrid = ({ children }: { children: React.ReactNode }) => (
	<div
		className={css`
			/* IE Fallback */
			display: flex;
			flex-direction: column;
			${until.desktop} {
				margin-left: 0px;
			}
			${from.desktop} {
				margin-left: 320px;
			}

			@supports (display: grid) {
				display: grid;
				width: 100%;
				margin-left: 0;

				grid-column-gap: 10px;

				${from.desktop} {
					grid-template-columns:
						309px /* Left Column (220 - 1px border) */
						1px /* Empty border for spacing */
						1fr /* Main content */;
					grid-template-areas:
						'lines border media'
						'meta  border media'
						'meta  border body'
						'.     border .';
				}

				${from.wide} {
					grid-template-columns:
						309px
						1px
						1fr
						340px;
					grid-template-areas:
						'lines border media right-column'
						'meta  border media right-column'
						'meta  border body  right-column'
						'.     border .     right-column';
				}

				${until.desktop} {
					grid-template-columns: 1fr; /* Main content */
					grid-template-areas:
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
	format: Format;
	palette: Palette;
}

export const LiveLayout = ({ CAPI, NAV, format, palette }: Props) => {
	const {
		config: { isPaidContent, host },
	} = CAPI;

	const adTargeting: AdTargeting = buildAdTargeting(CAPI.config);

	const showBodyEndSlot =
		parse(CAPI.slotMachineFlags || '').showBodyEnd ||
		CAPI.config.switches.slotBodyEnd;

	// TODO:
	// 1) Read 'forceEpic' value from URL parameter and use it to force the slot to render
	// 2) Otherwise, ensure slot only renders if `CAPI.config.shouldHideReaderRevenue` equals false.

	const seriesTag = CAPI.tags.find(
		(tag) => tag.type === 'Series' || tag.type === 'Blog',
	);

	const showOnwardsLower = seriesTag && CAPI.hasStoryPackage;

	const showComments = CAPI.isCommentable;

	const age = getAgeWarning(CAPI.tags, CAPI.webPublicationDate);

	const { branding } = CAPI.commercialProperties[CAPI.editionId];
	return (
		<>
			<div data-print-layout="hide">
				<Stuck>
					<Section
						showTopBorder={false}
						showSideBorders={false}
						padded={false}
						shouldCenter={false}
					>
						<HeaderAdSlot
							isAdFreeUser={CAPI.isAdFreeUser}
							shouldHideAds={CAPI.shouldHideAds}
							display={format.display}
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
						<Header
							edition={CAPI.editionId}
							idUrl={CAPI.config.idUrl}
							mmaUrl={CAPI.config.mmaUrl}
						/>
					</Section>

					<Section
						showSideBorders={true}
						borderColour={brandLine.primary}
						showTopBorder={false}
						padded={false}
						backgroundColour={brandBackground.primary}
					>
						<Nav
							nav={NAV}
							format={{
								...format,
								theme: getCurrentPillar(CAPI),
							}}
							subscribeUrl={
								CAPI.nav.readerRevenueLinks.header.subscribe
							}
							edition={CAPI.editionId}
						/>
					</Section>

					{NAV.subNavSections && (
						<Section
							backgroundColour={palette.background.article}
							padded={false}
							sectionId="sub-nav-root"
							borderColour={palette.border.article}
						>
							<SubNav
								subNavSections={NAV.subNavSections}
								currentNavLink={NAV.currentNavLink}
								palette={palette}
							/>
						</Section>
					)}

					<Section
						backgroundColour={palette.background.article}
						padded={false}
						showTopBorder={false}
						borderColour={palette.border.article}
					>
						<GuardianLines count={4} palette={palette} />
					</Section>
				</SendToBack>
			</div>
			<ContainerLayout
				showTopBorder={false}
				backgroundColour={palette.background.header}
				borderColour={palette.border.headline}
				sideBorders={true}
				leftColSize="wide"
				leftContent={
					// eslint-disable-next-line react/jsx-wrap-multilines
					<ArticleTitle
						format={format}
						palette={palette}
						tags={CAPI.tags}
						sectionLabel={CAPI.sectionLabel}
						sectionUrl={CAPI.sectionUrl}
						guardianBaseURL={CAPI.guardianBaseURL}
						badge={CAPI.badge}
					/>
				}
			>
				<div className={maxWidth}>
					<ArticleHeadlinePadding design={format.design}>
						{age && (
							<div className={ageWarningMargins}>
								<AgeWarning age={age} />
							</div>
						)}
						<ArticleHeadline
							format={format}
							headlineString={CAPI.headline}
							tags={CAPI.tags}
							byline={CAPI.author.byline}
							palette={palette}
						/>
						{age && <AgeWarning age={age} isScreenReader={true} />}
					</ArticleHeadlinePadding>
				</div>
				{CAPI.starRating || CAPI.starRating === 0 ? (
					<div className={starWrapper}>
						<StarRating rating={CAPI.starRating} size="large" />
					</div>
				) : (
					<></>
				)}
			</ContainerLayout>
			<ContainerLayout
				showTopBorder={false}
				backgroundColour={palette.background.standfirst}
				borderColour={palette.border.standfirst}
				sideBorders={true}
				leftColSize="wide"
				verticalMargins={false}
			>
				<Standfirst format={format} standfirst={CAPI.standfirst} />
			</ContainerLayout>

			<Section
				showTopBorder={false}
				borderColour={palette.border.article}
				backgroundColour={palette.background.article}
			>
				<div
					className={css`
						height: ${space[4]}px;
					`}
				/>
			</Section>

			<Section
				showTopBorder={false}
				backgroundColour={palette.background.article}
				borderColour={palette.border.article}
			>
				<LiveGrid>
					<GridItem area="media">
						<div className={maxWidth}>
							<MainMedia
								format={format}
								palette={palette}
								elements={CAPI.mainMediaElements}
								adTargeting={adTargeting}
								host={host}
								abTests={CAPI.config.abTests}
								isPreview={CAPI.pageType.isPreview}
							/>
						</div>
					</GridItem>
					<GridItem area="border">
						<></>
					</GridItem>
					<GridItem area="lines">
						<div className={maxWidth}>
							<div className={stretchLines}>
								<GuardianLines
									count={decideLineCount(format.design)}
									palette={palette}
									effect={decideLineEffect(
										format.design,
										format.theme,
									)}
								/>
							</div>
						</div>
					</GridItem>
					<GridItem area="meta">
						<div className={maxWidth}>
							<ArticleMeta
								branding={branding}
								format={format}
								palette={palette}
								pageId={CAPI.pageId}
								webTitle={CAPI.webTitle}
								author={CAPI.author}
								tags={CAPI.tags}
								primaryDateline={CAPI.webPublicationDateDisplay}
								secondaryDateline={
									CAPI.webPublicationSecondaryDateDisplay
								}
							/>
						</div>
					</GridItem>
					<GridItem area="body">
						<ArticleContainer>
							<main className={articleWidth}>
								<ArticleBody
									format={format}
									palette={palette}
									blocks={CAPI.blocks}
									adTargeting={adTargeting}
									host={host}
									abTests={CAPI.config.abTests}
									pageId={CAPI.pageId}
									webTitle={CAPI.webTitle}
									isPreview={CAPI.pageType.isPreview}
								/>
								{showBodyEndSlot && <div id="slot-body-end" />}
								<GuardianLines
									data-print-layout="hide"
									count={4}
									palette={palette}
								/>
								<SubMeta
									palette={palette}
									format={format}
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
						<div
							className={css`
								padding-top: 6px;
								height: 100%;
								${from.desktop} {
									/* above 980 */
									margin-left: 20px;
									margin-right: -20px;
								}
								${from.leftCol} {
									/* above 1140 */
									margin-left: 0px;
									margin-right: 0px;
								}
							`}
						>
							<RightColumn>
								<AdSlot
									position="right"
									display={format.display}
								/>
							</RightColumn>
						</div>
					</GridItem>
				</LiveGrid>
			</Section>

			<Section
				data-print-layout="hide"
				padded={false}
				showTopBorder={false}
				showSideBorders={false}
				backgroundColour={neutral[93]}
			>
				<AdSlot
					data-print-layout="hide"
					position="merchandising-high"
					display={format.display}
				/>
			</Section>

			{/* Onwards (when signed OUT) */}
			<div data-print-layout="hide" id="onwards-upper-whensignedout" />
			{showOnwardsLower && (
				<Section
					data-print-layout="hide"
					sectionId="onwards-lower-whensignedout"
				/>
			)}

			{!isPaidContent && showComments && (
				<Section data-print-layout="hide" sectionId="comments">
					<Discussion
						discussionApiUrl={CAPI.config.discussionApiUrl}
						shortUrlId={CAPI.config.shortUrlId}
						isCommentable={CAPI.isCommentable}
						pillar={format.theme}
						palette={palette}
						discussionD2Uid={CAPI.config.discussionD2Uid}
						discussionApiClientHeader={
							CAPI.config.discussionApiClientHeader
						}
						enableDiscussionSwitch={false}
						isAdFreeUser={CAPI.isAdFreeUser}
						shouldHideAds={CAPI.shouldHideAds}
						beingHydrated={false}
						display={format.display}
					/>
				</Section>
			)}

			{/* Onwards (when signed IN) */}
			<div data-print-layout="hide" id="onwards-upper-whensignedin" />
			{showOnwardsLower && (
				<Section
					data-print-layout="hide"
					sectionId="onwards-lower-whensignedin"
				/>
			)}

			{!isPaidContent && (
				<Section
					data-print-layout="hide"
					sectionId="most-viewed-footer"
				/>
			)}

			<Section
				data-print-layout="hide"
				padded={false}
				showTopBorder={false}
				showSideBorders={false}
				backgroundColour={neutral[93]}
			>
				<AdSlot position="merchandising" display={format.display} />
			</Section>

			{NAV.subNavSections && (
				<Section
					data-print-layout="hide"
					padded={false}
					sectionId="sub-nav-root"
				>
					<SubNav
						subNavSections={NAV.subNavSections}
						currentNavLink={NAV.currentNavLink}
						palette={palette}
					/>
					<GuardianLines count={4} palette={palette} />
				</Section>
			)}

			<Section
				data-print-layout="hide"
				padded={false}
				backgroundColour={brandBackground.primary}
				borderColour={brandBorder.primary}
				showSideBorders={false}
			>
				<Footer
					pageFooter={CAPI.pageFooter}
					pillar={format.theme}
					pillars={NAV.pillars}
				/>
			</Section>

			<BannerWrapper data-print-layout="hide" />
			<MobileStickyContainer data-print-layout="hide" />
		</>
	);
};
