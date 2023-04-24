import { css } from '@emotion/react';
import {
	brandBackground,
	brandBorder,
	brandLine,
	palette,
} from '@guardian/source-foundations';
import { StraightLines } from '@guardian/source-react-components-development-kitchen';
import type { NavType } from '../../model/extract-nav';
import type { DCRNewslettersPageType } from '../../types/newslettersPage';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { HeaderAdSlot } from '../components/HeaderAdSlot';
import { Island } from '../components/Island';
import { Nav } from '../components/Nav/Nav';
import { NewslettersList } from '../components/NewsletterList';
import { NewslettersPageHeading } from '../components/NewsletterPageHeading';
import { Section } from '../components/Section';
import { SubNav } from '../components/SubNav.importable';
import { decideFormat } from '../lib/decideFormat';
import { Stuck } from './lib/stickiness';

type Props = {
	newslettersPage: DCRNewslettersPageType;
	NAV: NavType;
};

export const AllEditorialNewslettersPageLayout = ({
	newslettersPage,
	NAV,
}: Props) => {
	const {
		subscribeUrl,
		editionId,
		pageFooter,
		contributionsServiceUrl: pageContributionsServiceUrl,
		config,
		isAdFreeUser,
	} = newslettersPage;

	// TO DO - there should not be a format for this page - not an article
	const articleFormat: ArticleFormat = decideFormat({});

	const renderAds = !isAdFreeUser;

	const isInEuropeTest =
		config.abTests.europeNetworkFrontVariant === 'variant';

	const contributionsServiceUrl =
		process.env.SDC_URL ?? pageContributionsServiceUrl;

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
								<HeaderAdSlot display={articleFormat.display} />
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
							editionId={newslettersPage.editionId}
							idUrl={newslettersPage.config.idUrl}
							mmaUrl={newslettersPage.config.mmaUrl}
							discussionApiUrl={
								newslettersPage.config.discussionApiUrl
							}
							urls={newslettersPage.nav.readerRevenueLinks.header}
							remoteHeader={
								!!newslettersPage.config.switches.remoteHeader
							}
							contributionsServiceUrl={contributionsServiceUrl}
							idApiUrl={config.idApiUrl}
							isInEuropeTest={isInEuropeTest}
							headerTopBarSearchCapiSwitch={
								!!newslettersPage.config.switches
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
							headerTopBarSwitch={false}
							nav={NAV}
							format={articleFormat}
							subscribeUrl={subscribeUrl}
							editionId={editionId}
						/>
					</Section>
					{NAV.subNavSections && (
						<>
							<Section
								fullWidth={true}
								backgroundColour={palette.neutral[100]}
								padSides={false}
								element="aside"
							>
								<Island deferUntil="idle">
									<SubNav
										subNavSections={NAV.subNavSections}
										currentNavLink={NAV.currentNavLink}
										format={articleFormat}
									/>
								</Island>
							</Section>
							<Section
								fullWidth={true}
								backgroundColour={palette.neutral[100]}
								padSides={false}
								showTopBorder={false}
							>
								<StraightLines
									count={4}
									cssOverrides={css`
										display: block;
									`}
									color={palette.brand[400]}
								/>
							</Section>
						</>
					)}
				</>
			</div>

			<main data-layout="NewsletterPageLayout" id="maincontent">
				<NewslettersPageHeading
					mmaUrl={newslettersPage.config.mmaUrl}
					editionId={newslettersPage.editionId}
					headingText={newslettersPage.webTitle}
				/>
				<NewslettersList newsletters={newslettersPage.newsletters} />
			</main>

			<Section
				fullWidth={true}
				data-print-layout="hide"
				padSides={false}
				backgroundColour={brandBackground.primary}
				borderColour={brandBorder.primary}
				showSideBorders={false}
				element="footer"
			>
				<Footer
					pageFooter={pageFooter}
					pillar={articleFormat.theme}
					pillars={NAV.pillars}
					urls={NAV.readerRevenueLinks.header}
					editionId={editionId}
					contributionsServiceUrl={contributionsServiceUrl}
				/>
			</Section>
		</>
	);
};
