import { css } from '@emotion/react';
import { ArticleDesign, ArticleDisplay, ArticlePillar } from '@guardian/libs';
import {
	brandBackground,
	brandBorder,
	brandLine,
	neutral,
	news,
} from '@guardian/source-foundations';
import { StraightLines } from '@guardian/source-react-components-development-kitchen';
import { Fragment } from 'react';
import { AdSlot } from '../components/AdSlot';
import { DecideContainerByTrails } from '../components/DecideContainerByTrails';
import { Footer } from '../components/Footer';
import { FrontSection } from '../components/FrontSection';
import { Header } from '../components/Header';
import { HeaderAdSlot } from '../components/HeaderAdSlot';
import { Island } from '../components/Island';
import { Nav } from '../components/Nav/Nav';
import { Section } from '../components/Section';
import { SubNav } from '../components/SubNav.importable';
import { TagFrontFastMpu } from '../components/TagFrontFastMpu';
import { TagFrontHeader } from '../components/TagFrontHeader';
import { TagFrontSlowMpu } from '../components/TagFrontSlowMpu';
import { TrendingTopics } from '../components/TrendingTopics';
import { canRenderAds } from '../lib/canRenderAds';
import { decidePalette } from '../lib/decidePalette';
import { getEditionFromId } from '../lib/edition';
import {
	getMerchHighPosition,
	getTagFrontMobileAdPositions,
} from '../lib/getAdPositions';
import type { NavType } from '../model/extract-nav';
import type { DCRTagFrontType } from '../types/tagFront';
import { decideAdSlot } from './FrontLayout';
import { Stuck } from './lib/stickiness';

interface Props {
	tagFront: DCRTagFrontType;
	NAV: NavType;
}

const getContainerId = (date: Date, locale: string, hasDay: boolean) => {
	if (hasDay) {
		return `${date.toLocaleDateString(locale, {
			day: 'numeric',
		})}-${date
			.toLocaleDateString(locale, {
				month: 'long',
			})
			.toLowerCase()}-${date.toLocaleDateString(locale, {
			year: 'numeric',
		})}`;
	} else {
		return `${date
			.toLocaleDateString(locale, {
				month: 'long',
			})
			.toLowerCase()}-${date.toLocaleDateString(locale, {
			year: 'numeric',
		})}`;
	}
};

export const TagFrontLayout = ({ tagFront, NAV }: Props) => {
	const isInEuropeTest =
		tagFront.config.abTests.europeNetworkFrontVariant === 'variant';

	const format = {
		display: ArticleDisplay.Standard,
		design: ArticleDesign.Standard,
		theme: ArticlePillar.News,
	};

	const palette = decidePalette(format);

	const merchHighPosition = getMerchHighPosition(
		tagFront.groupedTrails.length,
		false,
	);

	/**
	 * This property currently only applies to the header and merchandising slots
	 */
	const renderAds = canRenderAds(tagFront);

	const mobileAdPositions = renderAds
		? getTagFrontMobileAdPositions(
				tagFront.groupedTrails,
				merchHighPosition,
		  )
		: [];

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

					<Section
						fullWidth={true}
						shouldCenter={false}
						showTopBorder={false}
						showSideBorders={false}
						padSides={false}
						backgroundColour={brandBackground.primary}
						element="header"
					>
						<Header
							editionId={tagFront.editionId}
							idUrl={tagFront.config.idUrl}
							mmaUrl={tagFront.config.mmaUrl}
							discussionApiUrl={tagFront.config.discussionApiUrl}
							urls={tagFront.nav.readerRevenueLinks.header}
							remoteHeader={
								!!tagFront.config.switches.remoteHeader
							}
							contributionsServiceUrl="https://contributions.guardianapis.com" // TODO: Pass this in
							idApiUrl="https://idapi.theguardian.com/" // TODO: read this from somewhere as in other layouts
							isInEuropeTest={isInEuropeTest}
							headerTopBarSearchCapiSwitch={
								!!tagFront.config.switches
									.headerTopBarSearchCapi
							}
						/>
					</Section>
					<Section
						fullWidth={true}
						borderColour={brandLine.primary}
						showTopBorder={false}
						padSides={false}
						backgroundColour={brandBackground.primary}
						element="nav"
					>
						<Nav
							nav={NAV}
							format={format}
							subscribeUrl={
								tagFront.nav.readerRevenueLinks.header.subscribe
							}
							editionId={tagFront.editionId}
							headerTopBarSwitch={
								!!tagFront.config.switches.headerTopNav
							}
							isInEuropeTest={isInEuropeTest}
						/>
					</Section>
					{NAV.subNavSections && (
						<>
							<Section
								fullWidth={true}
								showTopBorder={false}
								backgroundColour={palette.background.article}
								padSides={false}
								element="aside"
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
								backgroundColour={palette.background.article}
								padSides={false}
								showTopBorder={false}
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
				</>
			</div>

			<main data-layout="FrontLayout" id="maincontent">
				<TagFrontHeader
					title={tagFront.header.title}
					description={tagFront.header.description}
					image={tagFront.header.image}
				/>
				{tagFront.groupedTrails.map((groupedTrails, index) => {
					const locale = getEditionFromId(tagFront.editionId).locale;
					const date = new Date(
						groupedTrails.year,
						groupedTrails.month,
						groupedTrails.day ?? 1,
					);
					const containedId = getContainerId(
						date,
						locale,
						groupedTrails.day !== undefined,
					);

					const ContainerComponent = () => {
						if (
							'injected' in groupedTrails &&
							'speed' in groupedTrails
						) {
							if (groupedTrails.speed === 'fast') {
								return (
									<TagFrontFastMpu
										{...groupedTrails}
										adIndex={1} // There is only ever 1 inline ad in a tag front
									/>
								);
							} else {
								return (
									<TagFrontSlowMpu
										{...groupedTrails}
										adIndex={1} // There is only ever 1 inline ad in a tag front
									/>
								);
							}
						}
						return (
							<DecideContainerByTrails
								trails={groupedTrails.trails}
								speed={tagFront.speed}
							/>
						);
					};

					const url =
						groupedTrails.day !== undefined
							? `/${tagFront.pageId}/${groupedTrails.year}/${date
									.toLocaleDateString(locale, {
										month: 'long',
									})
									.slice(0, 3)
									.toLowerCase()}/${date.toLocaleDateString(
									locale,
									{
										day: '2-digit',
									},
							  )}/all`
							: undefined;

					return (
						<Fragment key={containedId}>
							<FrontSection
								title={date.toLocaleDateString(locale, {
									day:
										groupedTrails.day !== undefined
											? 'numeric'
											: undefined,
									month: 'long',
									year: 'numeric',
								})}
								url={url}
								showTopBorder={true}
								ophanComponentLink={`container-${index} | ${containedId}`}
								ophanComponentName={containedId}
								sectionId={containedId}
								toggleable={false}
								pageId={tagFront.pageId}
								editionId={tagFront.editionId}
								canShowMore={false}
								ajaxUrl={tagFront.config.ajaxUrl}
								pagination={
									index === tagFront.groupedTrails.length - 1
										? tagFront.pagination
										: undefined
								}
							>
								<ContainerComponent />
							</FrontSection>
							{decideAdSlot(
								renderAds,
								index,
								false,
								tagFront.groupedTrails.length,
								tagFront.config.isPaidContent,
								mobileAdPositions,
								tagFront.config.hasPageSkin,
							)}
						</Fragment>
					);
				})}
			</main>
			<Section
				fullWidth={true}
				showTopBorder={false}
				data-component="trending-topics"
			>
				<TrendingTopics trendingTopics={tagFront.trendingTopics} />
			</Section>
			<Section
				fullWidth={true}
				data-print-layout="hide"
				padSides={false}
				showTopBorder={false}
				showSideBorders={false}
				backgroundColour={neutral[93]}
				element="aside"
			>
				<AdSlot position="merchandising" display={format.display} />
			</Section>

			{NAV.subNavSections && (
				<Section
					fullWidth={true}
					showTopBorder={false}
					data-print-layout="hide"
					padSides={false}
					element="aside"
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
					pageFooter={tagFront.pageFooter}
					pillar={format.theme}
					pillars={NAV.pillars}
					urls={tagFront.nav.readerRevenueLinks.header}
					editionId={tagFront.editionId}
					contributionsServiceUrl="https://contributions.guardianapis.com" // TODO: Pass this in
				/>
			</Section>
		</>
	);
};
