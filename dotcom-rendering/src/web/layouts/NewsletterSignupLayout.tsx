import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { ArticleFormat } from '@guardian/libs';
import {
	brandAlt,
	brandBackground,
	brandBorder,
	brandLine,
	from,
	space,
	textSans,
	until,
} from '@guardian/source-foundations';
import {
	Column,
	Columns,
	Hide,
	Link,
	LinkButton,
	SvgEye,
	SvgGuardianLogo,
} from '@guardian/source-react-components';
import { StraightLines } from '@guardian/source-react-components-development-kitchen';
import { buildAdTargeting } from '../../lib/ad-targeting';
import { AdSlot, MobileStickyContainer } from '../components/AdSlot';
import { ArticleHeadline } from '../components/ArticleHeadline';
import { Carousel } from '../components/Carousel.importable';
import { ContainerLayout } from '../components/ContainerLayout';
import { DecideOnwards } from '../components/DecideOnwards';
import { ElementContainer } from '../components/ElementContainer';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { HeaderAdSlot } from '../components/HeaderAdSlot';
import { Island } from '../components/Island';
import { MainMedia } from '../components/MainMedia';
import { Nav } from '../components/Nav/Nav';
import { NewsletterBadge } from '../components/Newsletters/NewsletterBadge';
import { NewsletterDetail } from '../components/Newsletters/NewsletterDetail';
import { NewsletterFrequency } from '../components/Newsletters/NewsletterFrequency';
import { NewsletterPrivacyMessage } from '../components/Newsletters/NewsletterPrivacyMessage';
import { SecondaryPromotedNewsletter } from '../components/Newsletters/SecondaryPromotedNewsletter';
import { OnwardsUpper } from '../components/OnwardsUpper.importable';
import { SecureSignup } from '../components/SecureSignup';
import { ShareIcons } from '../components/ShareIcons';
import { Standfirst } from '../components/Standfirst';
import { SubNav } from '../components/SubNav.importable';
import { getContributionsServiceUrl } from '../lib/contributions';
import { decidePalette } from '../lib/decidePalette';
import { decideTrail } from '../lib/decideTrail';
import { isValidUrl } from '../lib/isValidUrl';
import { getCurrentPillar } from '../lib/layoutHelpers';
import { BannerWrapper, Stuck } from './lib/stickiness';

// This Layout is not currently in use.
// It is an outline of a design for articles with the ArticleDesign.NewsletterSignup
// which are currently rendered using the standard layout.
// The full version of the design is to be implemented by the newsletters team.

// to use this layout, edit ./dotcom-rendering/src/web/layouts/DecideLayout.tsx
// to return is on articles with  ArticleDisplay.Standard && ArticleDesign.NewsletterSignup

type Props = {
	CAPIArticle: CAPIArticleType;
	NAV: NavType;
	format: ArticleFormat;
};

const mainColWrapperStyle = css`
	display: flex;
	height: 100%;
	flex-direction: column;
	justify-content: flex-end;
	max-width: 200px;

	${until.wide} {
		max-width: 160px;
	}

	${until.leftCol} {
		justify-content: flex-start;
		max-width: 200px;
	}

	${until.desktop} {
		max-width: 170px;
	}
`;

// the negative bottom values at the two column layout are to
// align the baseline of the text in the newsletters badge svg
// with the Guardian logo in the leftCol, rather than aligning
// the bottom of the SVG frame (design requirement)
const mainColNewsLettersBadgeContainerStyle = css`
	svg {
		width: 100%;
		position: relative;
		bottom: -10px;

		${until.wide} {
			bottom: -9px;
		}

		${until.leftCol} {
			padding-top: ${space[1]}px;
			bottom: 0;
		}
	}
`;

const leftColWrapperStyle = css`
	display: flex;
	justify-content: flex-end;
	margin-top: ${space[2]}px;
	margin-bottom: ${space[9]}px;
`;

const previewButtonWrapperStyle = css`
	padding: ${space[2]}px 0;
	${from.desktop} {
		display: none;
	}
`;

const mainGraphicWrapperStyle = css`
	border-radius: ${space[2]}px;
	overflow: hidden;
	margin: ${space[4]}px 0;
`;

const previewCaptionStyle = css`
	display: flex;
	align-items: center;
	background-color: ${brandAlt[400]};
	padding: ${space[1]}px ${space[3]}px;
	${textSans.medium({ fontWeight: 'bold' })};

	:hover {
		text-decoration: initial;
	}

	svg {
		margin-right: ${space[1]}px;
		flex-shrink: 0;
	}
`;

const guardianLogoContainerStyle = css`
	svg {
		max-width: 100%;
		display: flex;

		${until.leftCol} {
			width: 65%;
			display: block;
		}
	}
`;

const topMarginStyle = (marginTop: number = space[2]): SerializedStyles => css`
	margin-top: ${marginTop}px;
`;

const shareSpanStyle = css`
	${textSans.medium({ fontWeight: 'bold' })};
	margin-right: ${space[4]}px;
`;

const shareDivStyle = css`
	display: flex;
	align-items: center;
	margin-top: ${space[3]}px;
`;

const getMainMediaCaptions = (
	CAPIArticle: CAPIArticleType,
): (string | undefined)[] =>
	CAPIArticle.mainMediaElements.map((el) =>
		el._type === 'model.dotcomrendering.pageElements.ImageBlockElement'
			? el.data.caption
			: undefined,
	);

const altPromotedNewsletter = {
	name: 'Pushing Buttons',
	description:
		'Start the day one step ahead. Our email breaks down the key stories of the day and why they matter.',
	frequency: 'Weekly',
	mainMedia:
		'https://i.guim.co.uk/img/uploads/2022/01/11/pushing_buttons_thrasher_hi.png?width=700&quality=50&s=f4be90f0ca470076df70cf895aeecda1',
	signupPage: 'https://www.google.com',
	listId: 1234,
	identityName: 'Pushing buttons',
	successDescription: 'nice 1',
	theme: 'culture',
	group: 'culture',
};

export const NewsletterSignupLayout: React.FC<Props> = ({
	CAPIArticle,
	NAV,
	format,
}) => {
	const {
		config: { host },
	} = CAPIArticle;

	const adTargeting: AdTargeting = buildAdTargeting({
		isAdFreeUser: CAPIArticle.isAdFreeUser,
		isSensitive: CAPIArticle.config.isSensitive,
		videoDuration: CAPIArticle.config.videoDuration,
		edition: CAPIArticle.config.edition,
		section: CAPIArticle.config.section,
		sharedAdTargeting: CAPIArticle.config.sharedAdTargeting,
		adUnit: CAPIArticle.config.adUnit,
	});
	const contributionsServiceUrl = getContributionsServiceUrl(CAPIArticle);

	const palette = decidePalette(format);

	/**	Newsletter preview will be linked if the caption of the main media is a URL */
	const newsletterPreviewUrl = getMainMediaCaptions(CAPIArticle)
		.filter(Boolean)
		.find((caption) => caption && isValidUrl(caption));
	const showNewsletterPreview = Boolean(newsletterPreviewUrl);

	/** TODO: this data needs to come from the newsletters API */
	const newsletterRegionFocus = 'UK Focused';

	return (
		<>
			<div data-print-layout="hide" id="bannerandheader">
				<Stuck>
					<ElementContainer
						showTopBorder={false}
						showSideBorders={false}
						padded={false}
						shouldCenter={false}
					>
						<HeaderAdSlot
							isAdFreeUser={CAPIArticle.isAdFreeUser}
							shouldHideAds={CAPIArticle.shouldHideAds}
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
						editionId={CAPIArticle.editionId}
						idUrl={CAPIArticle.config.idUrl}
						mmaUrl={CAPIArticle.config.mmaUrl}
						supporterCTA={
							CAPIArticle.nav.readerRevenueLinks.header.supporter
						}
						discussionApiUrl={CAPIArticle.config.discussionApiUrl}
						urls={CAPIArticle.nav.readerRevenueLinks.header}
						remoteHeader={CAPIArticle.config.switches.remoteHeader}
						contributionsServiceUrl={contributionsServiceUrl}
						idApiUrl={CAPIArticle.config.idApiUrl}
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
						format={{
							...format,
							theme: getCurrentPillar(CAPIArticle),
						}}
						subscribeUrl={
							CAPIArticle.nav.readerRevenueLinks.header.subscribe
						}
						editionId={CAPIArticle.editionId}
					/>
				</ElementContainer>

				{!!NAV.subNavSections && (
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
								count={4}
								cssOverrides={css`
									display: block;
								`}
							/>
						</ElementContainer>
					</>
				)}
			</div>

			{!!CAPIArticle.config.switches.surveys && (
				<AdSlot position="survey" display={format.display} />
			)}

			<main data-layout="NewsletterSignupLayout">
				<ContainerLayout
					innerBackgroundColour={brandBackground.primary}
					leftContent={
						<div css={leftColWrapperStyle}>
							<Hide until="leftCol">
								<span css={guardianLogoContainerStyle}>
									<SvgGuardianLogo
										textColor={palette.fill.guardianLogo}
										width={200}
									/>
								</span>
							</Hide>
						</div>
					}
				>
					<div css={mainColWrapperStyle}>
						<Hide from="leftCol">
							<span css={guardianLogoContainerStyle}>
								<SvgGuardianLogo
									textColor={palette.fill.guardianLogo}
									width={200}
								/>
							</span>
						</Hide>

						<span css={mainColNewsLettersBadgeContainerStyle}>
							<NewsletterBadge />
						</span>
					</div>
				</ContainerLayout>

				<ContainerLayout
					centralBorder="full"
					sideBorders={true}
					stretchRight={true}
					leftContent={
						<div css={topMarginStyle(space[4])}>
							<NewsletterDetail text={newsletterRegionFocus} />
						</div>
					}
				>
					<Columns collapseUntil="desktop">
						<Column width={[1, 1, 5 / 8, 1 / 2, 1 / 2]}>
							<Hide from="leftCol">
								<NewsletterDetail
									text={newsletterRegionFocus}
								/>
							</Hide>
							<ArticleHeadline
								format={format}
								headlineString={CAPIArticle.headline}
								tags={CAPIArticle.tags}
								byline={CAPIArticle.byline}
								webPublicationDateDeprecated={
									CAPIArticle.webPublicationDateDeprecated
								}
							/>

							<Standfirst
								format={format}
								standfirst={CAPIArticle.standfirst}
							/>

							{showNewsletterPreview && (
								<div css={previewButtonWrapperStyle}>
									<LinkButton
										icon={<SvgEye />}
										iconSide="left"
										href={newsletterPreviewUrl}
										target="_blank"
										priority="tertiary"
										size="xsmall"
									>
										Preview this newsletter
									</LinkButton>
								</div>
							)}

							<SecureSignup
								newsletterId="1234"
								successDescription="nice"
								hidePrivacyMessage={true}
							/>

							<NewsletterFrequency frequency="Weekly" />

							<div css={shareDivStyle}>
								<span css={shareSpanStyle}>
									Tell your friends
								</span>
								<ShareIcons
									pageId={CAPIArticle.pageId}
									webTitle={CAPIArticle.webTitle}
									format={format}
									displayIcons={[
										'facebook',
										'twitter',
										'email',
									]}
									size="medium"
									context="ArticleMeta"
								/>
							</div>
						</Column>

						<Column width={[1, 1, 3 / 8, 1 / 2, 1 / 2]}>
							<div css={mainGraphicWrapperStyle}>
								{showNewsletterPreview && (
									<Hide until="desktop">
										<Link
											cssOverrides={previewCaptionStyle}
											href={newsletterPreviewUrl}
											target="_blank"
											icon={<SvgEye size="medium" />}
											priority="secondary"
											subdued={true}
										>
											Click here to see the latest version
											of this newsletter
										</Link>
									</Hide>
								)}

								<MainMedia
									format={format}
									elements={CAPIArticle.mainMediaElements}
									adTargeting={adTargeting}
									host={host}
									pageId={CAPIArticle.pageId}
									webTitle={CAPIArticle.webTitle}
									ajaxUrl={CAPIArticle.config.ajaxUrl}
									switches={CAPIArticle.config.switches}
									isAdFreeUser={CAPIArticle.isAdFreeUser}
									isSensitive={CAPIArticle.config.isSensitive}
									hideCaption={true}
								/>
							</div>
						</Column>
					</Columns>

					<div css={topMarginStyle()}>
						<NewsletterPrivacyMessage legacy={false} />
					</div>
				</ContainerLayout>

				<SecondaryPromotedNewsletter
					newsletter={altPromotedNewsletter}
				/>

				{CAPIArticle.onwards ? (
					<DecideOnwards
						onwards={CAPIArticle.onwards}
						format={format}
					/>
				) : (
					<>
						{CAPIArticle.storyPackage && (
							<ElementContainer>
								<Island deferUntil="visible">
									<Carousel
										heading={
											CAPIArticle.storyPackage.heading
										}
										trails={CAPIArticle.storyPackage.trails.map(
											decideTrail,
										)}
										onwardsType="more-on-this-story"
										format={format}
									/>
								</Island>
							</ElementContainer>
						)}

						<Island
							clientOnly={true}
							deferUntil="visible"
							placeholderHeight={600}
						>
							<OnwardsUpper
								ajaxUrl={CAPIArticle.config.ajaxUrl}
								hasRelated={CAPIArticle.hasRelated}
								hasStoryPackage={CAPIArticle.hasStoryPackage}
								isAdFreeUser={CAPIArticle.isAdFreeUser}
								pageId={CAPIArticle.pageId}
								isPaidContent={
									CAPIArticle.config.isPaidContent || false
								}
								showRelatedContent={
									CAPIArticle.config.showRelatedContent
								}
								keywordIds={CAPIArticle.config.keywordIds}
								contentType={CAPIArticle.contentType}
								tags={CAPIArticle.tags}
								format={format}
								pillar={format.theme}
								editionId={CAPIArticle.editionId}
								shortUrlId={CAPIArticle.config.shortUrlId}
							/>
						</Island>
					</>
				)}
			</main>

			<ElementContainer
				data-print-layout="hide"
				padded={false}
				backgroundColour={brandBackground.primary}
				borderColour={brandBorder.primary}
				showSideBorders={false}
				element="footer"
			>
				<Footer
					pageFooter={CAPIArticle.pageFooter}
					pillar={format.theme}
					pillars={NAV.pillars}
					urls={CAPIArticle.nav.readerRevenueLinks.header}
					editionId={CAPIArticle.editionId}
					contributionsServiceUrl={
						CAPIArticle.contributionsServiceUrl
					}
				/>
			</ElementContainer>

			<BannerWrapper data-print-layout="hide" />
			<MobileStickyContainer data-print-layout="hide" />
		</>
	);
};
