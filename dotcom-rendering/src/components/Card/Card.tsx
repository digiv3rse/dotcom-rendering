import { css } from '@emotion/react';
import { ArticleDesign } from '@guardian/libs';
import { brandAltBackground, from, space } from '@guardian/source-foundations';
import { Link } from '@guardian/source-react-components';
import { StraightLines } from '@guardian/source-react-components-development-kitchen';
import { decidePalette } from '../../lib/decidePalette';
import { getZIndex } from '../../lib/getZIndex';
import type { Branding } from '../../types/branding';
import type {
	DCRContainerPalette,
	DCRContainerType,
	DCRSlideshowImage,
	DCRSnapType,
	DCRSupportingContent,
} from '../../types/front';
import type { MainMedia } from '../../types/mainMedia';
import type { Palette } from '../../types/palette';
import { Avatar } from '../Avatar';
import { CardHeadline } from '../CardHeadline';
import { CardPicture } from '../CardPicture';
import { Hide } from '../Hide';
import { Island } from '../Island';
import { LatestLinks } from '../LatestLinks.importable';
import { MediaDuration } from '../MediaDuration';
import { MediaMeta } from '../MediaMeta';
import { Slideshow } from '../Slideshow';
import { Snap } from '../Snap';
import { SnapCssSandbox } from '../SnapCssSandbox';
import { StarRating } from '../StarRating/StarRating';
import type { Alignment } from '../SupportingContent';
import { SupportingContent } from '../SupportingContent';
import { YoutubeBlockComponent } from '../YoutubeBlockComponent.importable';
import { AvatarContainer } from './components/AvatarContainer';
import { CardAge } from './components/CardAge';
import { CardBranding } from './components/CardBranding';
import { CardFooter } from './components/CardFooter';
import { CardLayout } from './components/CardLayout';
import { CardLink } from './components/CardLink';
import { CardWrapper } from './components/CardWrapper';
import { ContentWrapper } from './components/ContentWrapper';
import { HeadlineWrapper } from './components/HeadlineWrapper';
import type {
	ImagePositionType,
	ImageSizeType,
} from './components/ImageWrapper';
import { ImageWrapper } from './components/ImageWrapper';
import { TrailTextWrapper } from './components/TrailTextWrapper';

/** Note YouTube recommends a minimum width of 480px @see https://developers.google.com/youtube/terms/required-minimum-functionality#embedded-youtube-player-size */
export type VideoSize =
	| 'large enough to play: at least 480px'
	| 'too small to play: 479px or less';

export type Props = {
	linkTo: string;
	format: ArticleFormat;
	headlineText: string;
	headlineSize?: SmallHeadlineSize;
	headlineSizeOnMobile?: SmallHeadlineSize;
	showQuotedHeadline?: boolean;
	byline?: string;
	showByline?: boolean;
	webPublicationDate?: string;
	imageUrl?: string;
	imageAltText?: string;
	imagePosition?: ImagePositionType;
	imagePositionOnMobile?: ImagePositionType;
	/** Size is ignored when position = 'top' because in that case the image flows based on width */
	imageSize?: ImageSizeType;
	isCrossword?: boolean;
	trailText?: string;
	avatarUrl?: string;
	showClock?: boolean;
	mainMedia?: MainMedia;
	videoSize: VideoSize;
	kickerText?: string;
	showPulsingDot?: boolean;
	starRating?: number;
	minWidthInPixels?: number;
	/** Used for Ophan tracking */
	dataLinkName?: string;
	/** Only used on Labs cards */
	branding?: Branding;
	supportingContent?: DCRSupportingContent[];
	supportingContentAlignment?: Alignment;
	snapData?: DCRSnapType;
	containerPalette?: DCRContainerPalette;
	containerType?: DCRContainerType;
	showAge?: boolean;
	discussionId?: string;
	/** The first card in a dynamic package is ”Dynamo” and gets special styling */
	isDynamo?: true;
	isExternalLink: boolean;
	slideshowImages?: DCRSlideshowImage[];
	showLivePlayable?: boolean;
	onwardsSource?: string;
};

const StarRatingComponent = ({
	rating,
	cardHasImage,
}: {
	rating: number;
	cardHasImage: boolean;
}) => (
	<div
		css={css`
			background-color: ${brandAltBackground.primary};
			margin-top: ${cardHasImage ? '2' : space[1]}px;
			display: inline-block;

			${from.tablet} {
				margin-top: ${space[1]}px;
			}
		`}
	>
		<Hide when="above" breakpoint="desktop">
			<StarRating rating={rating} size="small" breakpoint="mobile" />
		</Hide>
		<Hide when="below" breakpoint="desktop">
			<StarRating
				rating={rating}
				size={cardHasImage ? 'medium' : 'small'}
				breakpoint="wide"
			/>
		</Hide>
	</div>
);

/**
 * This functions contains the business logic that decides when the card age should be
 * shown. It uses the format of the article the card links to as well as information
 * about the container where the card sits.
 *
 */

type RenderFooter = ({
	displayLines,
}: {
	displayLines: boolean;
}) => JSX.Element;

const DecideFooter = ({
	isOpinion,
	hasSublinks,

	renderFooter,
}: {
	isOpinion: boolean;
	hasSublinks?: boolean;

	renderFooter: RenderFooter;
}) => {
	if (isOpinion && !hasSublinks) {
		// Opinion cards without sublinks render the entire footer, including lines,
		// outside, sitting along the very bottom of the card
		return null;
	}
	// For all other cases (including opinion cards that *do* have sublinks) we
	// render a version of the footer without lines here
	return renderFooter({
		displayLines: false,
	});
	// Note. Opinion cards always show the lines at the bottom of the card (in CommentFooter)
};

const CommentFooter = ({
	hasSublinks,
	palette,

	renderFooter,
}: {
	hasSublinks?: boolean;
	palette: Palette;

	renderFooter: RenderFooter;
}) => {
	return hasSublinks ? (
		// For opinion cards with sublinks there is already a footer rendered inside that
		// shows the metadata. We only want to render the lines here
		<StraightLines color={palette.border.lines} count={4} />
	) : (
		// When an opinion card has no sublinks we show the entire footer, including lines
		// outside, along the entire bottom of the card
		renderFooter({
			displayLines: true,
		})
	);
};

const getMedia = ({
	imageUrl,
	imageAltText,
	avatarUrl,
	isCrossword,
	slideshowImages,
	mainMedia,
	videoSize,
}: {
	imageUrl?: string;
	imageAltText?: string;
	avatarUrl?: string;
	isCrossword?: boolean;
	slideshowImages?: DCRSlideshowImage[];
	mainMedia?: MainMedia;
	videoSize: VideoSize;
}) => {
	if (
		mainMedia &&
		mainMedia.type === 'Video' &&
		videoSize === 'large enough to play: at least 480px'
	) {
		return { type: 'video', mainMedia } as const;
	}
	if (slideshowImages) return { type: 'slideshow', slideshowImages } as const;
	if (avatarUrl) return { type: 'avatar', avatarUrl } as const;
	if (imageUrl) {
		const type = isCrossword ? 'crossword' : 'picture';
		return { type, imageUrl, imageAltText } as const;
	}
	return undefined;
};

const decideSublinkPosition = (
	supportingContent?: DCRSupportingContent[],
	imagePosition?: ImagePositionType,
	alignment?: Alignment,
): 'inner' | 'outer' | 'none' => {
	if (!supportingContent || supportingContent.length === 0) {
		return 'none';
	}
	if (imagePosition === 'top' || imagePosition === 'bottom') {
		return 'outer';
	}
	return alignment === 'vertical' ? 'inner' : 'outer';
};

const isWithinTwelveHours = (webPublicationDate: string): boolean => {
	const timeDiffMs = Math.abs(
		new Date().getTime() - new Date(webPublicationDate).getTime(),
	);
	const timeDiffHours = timeDiffMs / (1000 * 60 * 60);
	return timeDiffHours <= 12;
};

export const Card = ({
	linkTo,
	format,
	headlineText,
	headlineSize,
	headlineSizeOnMobile,
	showQuotedHeadline,
	byline,
	showByline,
	webPublicationDate,
	imageUrl,
	imageAltText,
	imagePosition = 'top',
	imagePositionOnMobile = 'left',
	imageSize = 'small',
	trailText,
	avatarUrl,
	showClock,
	mainMedia,
	videoSize,
	kickerText,
	showPulsingDot,
	starRating,
	minWidthInPixels,
	dataLinkName,
	branding,
	supportingContent,
	supportingContentAlignment = 'vertical',
	snapData,
	containerPalette,
	containerType,
	showAge = true,
	discussionId,
	isDynamo,
	isCrossword,
	isExternalLink,
	slideshowImages,
	showLivePlayable = false,
	onwardsSource,
}: Props) => {
	const palette = decidePalette(format, containerPalette);

	const hasSublinks = supportingContent && supportingContent.length > 0;
	const sublinkPosition = decideSublinkPosition(
		supportingContent,
		imagePosition,
		supportingContentAlignment,
	);

	const showQuotes = !!showQuotedHeadline;

	const isOpinion =
		format.design === ArticleDesign.Comment ||
		format.design === ArticleDesign.Editorial ||
		format.design === ArticleDesign.Letter;

	const renderFooter = ({ displayLines }: { displayLines?: boolean }) => {
		if (showLivePlayable) return <></>;
		return (
			<CardFooter
				format={format}
				containerPalette={containerPalette}
				displayLines={displayLines}
				age={
					(!!onwardsSource && webPublicationDate) ||
					(showAge &&
						webPublicationDate &&
						isWithinTwelveHours(webPublicationDate)) ? (
						<CardAge
							format={format}
							containerPalette={containerPalette}
							webPublicationDate={webPublicationDate}
							showClock={showClock}
							isDynamo={isDynamo}
						/>
					) : undefined
				}
				commentCount={
					discussionId ? (
						<Link
							// This a tag is initially rendered empty. It gets populated later
							// after a fetch call is made to get all the counts for each Card
							// on the page with a discussion (see FetchCommentCounts.tsx)
							data-discussion-id={discussionId}
							data-format={JSON.stringify(format)}
							data-is-dynamo={isDynamo ? 'true' : undefined}
							data-container-palette={containerPalette}
							data-ignore="global-link-styling"
							data-link-name="Comment count"
							href={`${linkTo}#comments`}
							cssOverrides={css`
								/* See: https://css-tricks.com/nested-links/ */
								${getZIndex('card-nested-link')}
								/* The following styles turn off those provided by Link */
								color: inherit;
								/* stylelint-disable-next-line property-disallowed-list */
								font-family: inherit;
								font-size: inherit;
								line-height: inherit;
								text-decoration: none;
								min-height: 10px;
							`}
						/>
					) : undefined
				}
				cardBranding={
					branding ? (
						<CardBranding branding={branding} format={format} />
					) : undefined
				}
			/>
		);
	};

	if (snapData?.embedHtml) {
		return (
			<SnapCssSandbox snapData={snapData}>
				<Snap snapData={snapData} dataLinkName={dataLinkName} />
			</SnapCssSandbox>
		);
	}

	const showPlayIcon =
		mainMedia?.type === 'Video' &&
		videoSize === 'too small to play: 479px or less';

	const media = getMedia({
		imageUrl,
		imageAltText,
		avatarUrl,
		isCrossword,
		slideshowImages,
		mainMedia,
		videoSize,
	});
	return (
		<CardWrapper
			format={format}
			containerPalette={containerPalette}
			containerType={containerType}
			isDynamo={isDynamo}
		>
			<CardLink
				linkTo={linkTo}
				headlineText={headlineText}
				dataLinkName={dataLinkName}
				isExternalLink={isExternalLink}
			/>
			<CardLayout
				imagePosition={imagePosition}
				imagePositionOnMobile={imagePositionOnMobile}
				minWidthInPixels={minWidthInPixels}
				imageType={media?.type}
			>
				{media && (
					<ImageWrapper
						imageSize={imageSize}
						imageType={media.type}
						imagePosition={imagePosition}
						imagePositionOnMobile={imagePositionOnMobile}
						showPlayIcon={showPlayIcon}
					>
						{media.type === 'slideshow' && (
							<Slideshow
								images={media.slideshowImages}
								imageSize={imageSize}
							/>
						)}
						{media.type === 'avatar' && (
							<AvatarContainer
								imageSize={imageSize}
								imagePosition={imagePosition}
							>
								<Avatar
									src={media.avatarUrl}
									alt={byline ?? ''}
									containerPalette={containerPalette}
									format={format}
								/>
							</AvatarContainer>
						)}
						{media.type === 'video' && (
							<div
								data-chromatic="ignore"
								data-component="youtube-atom"
								css={css`
									display: block;
									position: relative;
									${getZIndex('card-nested-link')}
								`}
							>
								<Island>
									<YoutubeBlockComponent
										id={media.mainMedia.elementId}
										elementId={media.mainMedia.elementId}
										assetId={media.mainMedia.videoId}
										duration={media.mainMedia.duration}
										posterImage={media.mainMedia.images}
										width={media.mainMedia.width}
										height={media.mainMedia.height}
										origin={media.mainMedia.origin}
										mediaTitle={media.mainMedia.title}
										expired={media.mainMedia.expired}
										format={format}
										isMainMedia={true}
										hideCaption={true}
										role="inline"
										stickyVideos={false}
									/>
								</Island>
							</div>
						)}
						{media.type === 'picture' && (
							<>
								<CardPicture
									master={media.imageUrl}
									imageSize={imageSize}
									alt={media.imageAltText}
								/>
								{showPlayIcon && (
									<MediaDuration
										mediaDuration={mainMedia.duration}
										imagePosition={imagePosition}
										imagePositionOnMobile={
											imagePositionOnMobile
										}
									/>
								)}
							</>
						)}
						{media.type === 'crossword' && (
							<img src={media.imageUrl} alt="" />
						)}
					</ImageWrapper>
				)}
				<ContentWrapper
					imageType={media?.type}
					imageSize={imageSize}
					imagePosition={imagePosition}
				>
					<HeadlineWrapper
						imagePositionOnMobile={imagePositionOnMobile}
						imagePosition={imagePosition}
						imageUrl={imageUrl}
						hasStarRating={starRating !== undefined}
					>
						<CardHeadline
							headlineText={headlineText}
							format={format}
							containerPalette={containerPalette}
							size={headlineSize}
							sizeOnMobile={headlineSizeOnMobile}
							showQuotes={showQuotes}
							kickerText={
								format.design === ArticleDesign.LiveBlog &&
								!kickerText
									? 'Live'
									: kickerText
							}
							showPulsingDot={
								format.design === ArticleDesign.LiveBlog ||
								showPulsingDot
							}
							byline={byline}
							showByline={showByline}
							isDynamo={isDynamo}
							isExternalLink={isExternalLink}
						/>
						{starRating !== undefined ? (
							<StarRatingComponent
								rating={starRating}
								cardHasImage={imageUrl !== undefined}
							/>
						) : null}
						{!!mainMedia && mainMedia.type !== 'Video' && (
							<MediaMeta
								containerPalette={containerPalette}
								format={format}
								mediaType={mainMedia.type}
								mediaDuration={
									mainMedia.type === 'Audio'
										? mainMedia.duration
										: undefined
								}
								hasKicker={!!kickerText}
							/>
						)}
					</HeadlineWrapper>
					{/* This div is needed to push this content to the bottom of the card */}
					<div>
						{!!trailText && (
							<TrailTextWrapper
								containerPalette={containerPalette}
								format={format}
								imagePosition={imagePosition}
								imageSize={imageSize}
								imageType={media?.type}
							>
								<div
									dangerouslySetInnerHTML={{
										__html: trailText,
									}}
								/>
							</TrailTextWrapper>
						)}
						{showLivePlayable && (
							<Island>
								<LatestLinks
									id={linkTo}
									format={format}
									isDynamo={isDynamo}
									direction={supportingContentAlignment}
									containerPalette={containerPalette}
								></LatestLinks>
							</Island>
						)}
						<DecideFooter
							isOpinion={isOpinion}
							hasSublinks={hasSublinks}
							renderFooter={renderFooter}
						/>
						{hasSublinks && sublinkPosition === 'inner' ? (
							<SupportingContent
								supportingContent={supportingContent}
								alignment="vertical"
								containerPalette={containerPalette}
								isDynamo={isDynamo}
								parentFormat={format}
							/>
						) : (
							<></>
						)}
					</div>
				</ContentWrapper>
			</CardLayout>

			{hasSublinks && sublinkPosition === 'outer' ? (
				<SupportingContent
					supportingContent={supportingContent}
					parentFormat={format}
					containerPalette={containerPalette}
					isDynamo={isDynamo}
					alignment={supportingContentAlignment}
				/>
			) : (
				<></>
			)}
			{isOpinion && !isDynamo && (
				<CommentFooter
					hasSublinks={hasSublinks}
					palette={palette}
					renderFooter={renderFooter}
				/>
			)}
		</CardWrapper>
	);
};
