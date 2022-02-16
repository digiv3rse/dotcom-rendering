import { css } from '@emotion/react';

import {
	brandBackground,
	labs,
	border,
	from,
} from '@guardian/source-foundations';
import { ArticleDesign, ArticleSpecial } from '@guardian/libs';
import type { ArticleFormat } from '@guardian/libs';

import { MainMedia } from '../../components/MainMedia';
import { ArticleTitle } from '../../components/ArticleTitle';
import { ArticleHeadline } from '../../components/ArticleHeadline';
import { ElementContainer } from '../../components/ElementContainer';
import { Nav } from '../../components/Nav/Nav';
import { Caption } from '../../components/Caption';
import { ContainerLayout } from '../../components/ContainerLayout';
import { LabsHeader } from '../../components/LabsHeader.importable';

import { buildAdTargeting } from '../../../lib/ad-targeting';
import { getZIndex } from '../../lib/getZIndex';

import { Stuck } from '../lib/stickiness';
import { getCurrentPillar } from '../../lib/layoutHelpers';
import { Island } from '../../components/Island';

const hasMainMediaStyles = css`
	height: 100vh;
	/**
    100vw is normally enough but don't let the content shrink vertically too
    much just in case
    */
	min-height: 25rem;
	${from.desktop} {
		min-height: 31.25rem;
	}
	${from.wide} {
		min-height: 50rem;
	}
`;

interface Props {
	CAPI: CAPIType;
	NAV: NavType;
	format: ArticleFormat;
	palette: Palette;
}

const decideCaption = (mainMedia: ImageBlockElement): string => {
	const caption = [];
	if (mainMedia && mainMedia.data && mainMedia.data.caption)
		caption.push(mainMedia.data.caption);
	if (
		mainMedia &&
		mainMedia.displayCredit &&
		mainMedia.data &&
		mainMedia.data.credit
	)
		caption.push(mainMedia.data.credit);
	return caption.join(' ');
};

const Box = ({
	palette,
	children,
}: {
	palette: Palette;
	children: React.ReactNode;
}) => (
	<div
		css={css`
			/*
				This pseudo css shows a black box to the right of the headline
				so that the black background of the inverted text stretches
				all the way right. But only from mobileLandscape because below
				that we want to show a gap. To work properly it needs to wrap
				the healine so it inherits the correct height based on the length
				of the headline text
			*/
			${from.mobileLandscape} {
				position: relative;
				:after {
					content: '';
					display: block;
					position: absolute;
					width: 50%;
					right: 0;
					background-color: ${palette.background.headline};
					${getZIndex('immersiveBlackBox')}
					top: 0;
					bottom: 0;
				}
			}
		`}
	>
		{children}
	</div>
);

export const ImmersiveHeader = ({
	CAPI,
	NAV,
	format,
	palette,
}: Props): JSX.Element => {
	const {
		config: { host },
	} = CAPI;

	const adTargeting: AdTargeting = buildAdTargeting({
		isAdFreeUser: CAPI.isAdFreeUser,
		isSensitive: CAPI.config.isSensitive,
		videoDuration: CAPI.config.videoDuration,
		edition: CAPI.config.edition,
		section: CAPI.config.section,
		sharedAdTargeting: CAPI.config.sharedAdTargeting,
		adUnit: CAPI.config.adUnit,
	});

	// TODO:
	// 1) Read 'forceEpic' value from URL parameter and use it to force the slot to render
	// 2) Otherwise, ensure slot only renders if `CAPI.config.shouldHideReaderRevenue` equals false.

	const mainMedia = CAPI.mainMediaElements[0] as ImageBlockElement;
	const captionText = decideCaption(mainMedia);

	const HEADLINE_OFFSET = mainMedia ? 120 : 0;

	const LeftColCaption = () => (
		<div
			css={css`
				margin-top: ${HEADLINE_OFFSET}px;
				position: absolute;
				margin-left: 20px;
			`}
		>
			<Caption
				palette={palette}
				captionText={captionText}
				format={format}
				shouldLimitWidth={true}
				isLeftCol={true}
			/>
		</div>
	);

	return (
		<>
			<header
				css={css`
					background-color: ${palette.background.article};
				`}
			>
				<div
					css={[
						mainMedia && hasMainMediaStyles,
						css`
							display: flex;
							flex-direction: column;
						`,
					]}
				>
					<div
						css={css`
							${getZIndex('headerWrapper')}
							order: 0;
						`}
					>
						<ElementContainer
							showSideBorders={false}
							showTopBorder={false}
							padded={false}
							backgroundColour={brandBackground.primary}
							element="nav"
						>
							<Nav
								format={{
									...format,
									theme: getCurrentPillar(CAPI),
								}}
								nav={NAV}
								subscribeUrl={
									CAPI.nav.readerRevenueLinks.header.subscribe
								}
								edition={CAPI.editionId}
							/>
						</ElementContainer>
					</div>

					{format.theme === ArticleSpecial.Labs && (
						<Stuck>
							<ElementContainer
								showSideBorders={true}
								showTopBorder={false}
								backgroundColour={labs[400]}
								borderColour={border.primary}
								sectionId="labs-header"
							>
								<Island deferUntil="idle">
									<LabsHeader />
								</Island>
							</ElementContainer>
						</Stuck>
					)}

					<MainMedia
						format={format}
						palette={palette}
						elements={CAPI.mainMediaElements}
						adTargeting={adTargeting}
						starRating={
							format.design === ArticleDesign.Review &&
							CAPI.starRating
								? CAPI.starRating
								: undefined
						}
						host={host}
						hideCaption={true}
						pageId={CAPI.pageId}
						webTitle={CAPI.webTitle}
						ajaxUrl={CAPI.config.ajaxUrl}
					/>
				</div>
				{mainMedia && (
					<>
						<div
							css={css`
								margin-top: -${HEADLINE_OFFSET}px;
								/*
                        This z-index is what ensures the headline title text shows above main media. For
                        the actual headline we set the z-index deeper in ArticleHeadline itself so that
                        the text appears above the pseudo Box element
                    */
								position: relative;
								${getZIndex('articleHeadline')};
							`}
						>
							<ContainerLayout
								verticalMargins={false}
								padContent={false}
								padSides={false}
								leftContent={<LeftColCaption />}
							>
								<ArticleTitle
									format={format}
									palette={palette}
									tags={CAPI.tags}
									sectionLabel={CAPI.sectionLabel}
									sectionUrl={CAPI.sectionUrl}
									guardianBaseURL={CAPI.guardianBaseURL}
									badge={CAPI.badge}
								/>
							</ContainerLayout>
							<Box palette={palette}>
								<ContainerLayout
									verticalMargins={false}
									padContent={false}
									padSides={false}
								>
									<ArticleHeadline
										format={format}
										headlineString={CAPI.headline}
										palette={palette}
										tags={CAPI.tags}
										byline={CAPI.author.byline}
									/>
								</ContainerLayout>
							</Box>
						</div>
					</>
				)}
			</header>
		</>
	);
};
