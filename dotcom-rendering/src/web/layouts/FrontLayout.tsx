import { css } from '@emotion/react';
import { ArticleDesign, ArticleDisplay, ArticlePillar } from '@guardian/libs';
import {
	brandBackground,
	brandBorder,
	brandLine,
	neutral,
} from '@guardian/source-foundations';
import { StraightLines } from '@guardian/source-react-components-development-kitchen';
import type { DCRFrontType } from '../../types/front';
import { AdSlot } from '../components/AdSlot';
import { ContainerLayout } from '../components/ContainerLayout';
import { ElementContainer } from '../components/ElementContainer';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { HeaderAdSlot } from '../components/HeaderAdSlot';
import { Island } from '../components/Island';
import { MostViewedFooterLayout } from '../components/MostViewedFooterLayout';
import { Nav } from '../components/Nav/Nav';
import { Snap } from '../components/Snap';
import { SubNav } from '../components/SubNav.importable';
import { DecideContainer } from '../lib/DecideContainer';
import { decidePalette } from '../lib/decidePalette';
import { Stuck } from './lib/stickiness';

interface Props {
	front: DCRFrontType;
	NAV: NavType;
}

const spaces = / /g;
/** TODO: Confirm with is a valid way to generate component IDs. */
const ophanComponentId = (name: string) =>
	name.toLowerCase().replace(spaces, '-');

export const FrontLayout = ({ front, NAV }: Props) => {
	const {
		config: { isPaidContent },
	} = front;

	const format = {
		display: ArticleDisplay.Standard,
		design: ArticleDesign.Standard,
		theme: ArticlePillar.News,
	};

	const palette = decidePalette(format);

	// const contributionsServiceUrl = getContributionsServiceUrl(front);

	return (
		<>
			<div data-print-layout="hide" id="bannerandheader">
				<>
					<Stuck>
						<ElementContainer
							showTopBorder={false}
							showSideBorders={false}
							padded={false}
							shouldCenter={false}
						>
							<HeaderAdSlot
								isAdFreeUser={front.isAdFreeUser}
								shouldHideAds={false}
								display={format.display}
							/>
						</ElementContainer>
					</Stuck>

					<ElementContainer
						showTopBorder={false}
						showSideBorders={false}
						padded={false}
						backgroundColour={brandBackground.primary}
						element="header"
					>
						<Header
							editionId={front.editionId}
							idUrl={front.config.idUrl}
							mmaUrl={front.config.mmaUrl}
							supporterCTA={
								front.nav.readerRevenueLinks.header.supporter
							}
							discussionApiUrl={front.config.discussionApiUrl}
							urls={front.nav.readerRevenueLinks.header}
							remoteHeader={front.config.switches.remoteHeader}
							contributionsServiceUrl="https://contributions.guardianapis.com" // TODO: Pass this in
							idApiUrl="https://idapi.theguardian.com/" // TODO: read this from somewhere as in other layouts
						/>
					</ElementContainer>
					<ElementContainer
						showSideBorders={true}
						borderColour={brandLine.primary}
						showTopBorder={false}
						padded={false}
						backgroundColour={brandBackground.primary}
						element="nav"
					>
						<Nav
							nav={NAV}
							format={format}
							subscribeUrl={
								front.nav.readerRevenueLinks.header.subscribe
							}
							editionId={front.editionId}
						/>
					</ElementContainer>
					{NAV.subNavSections && (
						<>
							<ElementContainer
								backgroundColour={palette.background.article}
								padded={false}
								element="aside"
							>
								<Island deferUntil="idle">
									<SubNav
										subNavSections={NAV.subNavSections}
										currentNavLink={NAV.currentNavLink}
										format={format}
									/>
								</Island>
							</ElementContainer>
							<ElementContainer
								backgroundColour={palette.background.article}
								padded={false}
								showTopBorder={false}
							>
								<StraightLines
									cssOverrides={css`
										display: block;
									`}
									count={4}
								/>
							</ElementContainer>
						</>
					)}
				</>
			</div>

			<main data-layout="FrontLayout">
				{front.pressedPage.collections.map((collection, index) => {
					// Backfills should be added to the end of any curated content
					const trails = collection.curated.concat(
						collection.backfill,
					);
					// There are some containers that have zero trails. We don't want to render these
					if (trails.length === 0) return null;

					const ophanName = ophanComponentId(collection.displayName);
					const ophanComponentLink = `container-${
						index + 1
					} | ${ophanName}`;

					if (collection.collectionType === 'fixed/thrasher') {
						switch (collection.displayName) {
							case 'Palette styles new do not delete':
								return null;
							case 'culture-treat':
								/**
								 * The legacy culture-treat works by cloning itself and inserting
								 * that clone in the section above. But on DCR this approach is
								 * leading to the original content also showing. We still need to
								 * 'render' the component in DCR so that the javascript gets executed
								 * but we don't want to render two version so to get around this
								 * we wrap the original Snap component in a section and hide
								 * it.
								 */
								return (
									// This *needs* to be a section because the culture-treat
									// code is epxecting that
									<section
										css={css`
											display: none;
										`}
									>
										<Snap snapData={trails[0].snapData} />
									</section>
								);
							default:
								return (
									<ElementContainer
										padded={false}
										showTopBorder={false}
										showSideBorders={false}
										ophanComponentLink={ophanComponentLink}
										ophanComponentName={ophanName}
										containerName={
											collection.collectionType
										}
										element="section"
									>
										<Snap snapData={trails[0].snapData} />
									</ElementContainer>
								);
						}
					}

					return (
						<ContainerLayout
							key={collection.id}
							title={collection.displayName}
							// TODO: This logic should be updated, as this relies
							// on the first container being 'palette styles do not delete'
							showTopBorder={index > 1}
							sideBorders={true}
							padContent={false}
							centralBorder="partial"
							url={collection.href}
							// same as above re 'palette styles' for index increment
							ophanComponentLink={ophanComponentLink}
							ophanComponentName={ophanName}
							containerName={collection.collectionType}
							containerPalette={collection.containerPalette}
							toggleable={true}
							sectionId={collection.id}
							showDateHeader={collection.config.showDateHeader}
							editionId={front.editionId}
							treats={collection.treats}
						>
							<DecideContainer
								trails={trails}
								index={index}
								groupedTrails={collection.grouped}
								containerType={collection.collectionType}
								containerPalette={collection.containerPalette}
								showAge={collection.displayName === 'Headlines'}
							/>
						</ContainerLayout>
					);
				})}

				{!isPaidContent && (
					<ElementContainer data-print-layout="hide" element="aside">
						<MostViewedFooterLayout
							format={format}
							sectionName="" // {front.sectionName}
							ajaxUrl={front.config.ajaxUrl}
						/>
					</ElementContainer>
				)}
			</main>

			<ElementContainer
				data-print-layout="hide"
				padded={false}
				showTopBorder={false}
				showSideBorders={false}
				backgroundColour={neutral[93]}
				element="aside"
			>
				<AdSlot position="merchandising" display={format.display} />
			</ElementContainer>

			{NAV.subNavSections && (
				<ElementContainer
					data-print-layout="hide"
					padded={false}
					element="aside"
				>
					<Island deferUntil="visible">
						<SubNav
							subNavSections={NAV.subNavSections}
							currentNavLink={NAV.currentNavLink}
							format={format}
						/>
					</Island>
				</ElementContainer>
			)}

			<ElementContainer
				data-print-layout="hide"
				padded={false}
				backgroundColour={brandBackground.primary}
				borderColour={brandBorder.primary}
				showSideBorders={false}
				element="footer"
			>
				<Footer
					pageFooter={front.pageFooter}
					pillar={format.theme}
					pillars={NAV.pillars}
					urls={front.nav.readerRevenueLinks.header}
					editionId={front.editionId}
					contributionsServiceUrl="https://contributions.guardianapis.com" // TODO: Pass this in
				/>
			</ElementContainer>
		</>
	);
};
