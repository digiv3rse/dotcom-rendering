import React from 'react';
import { css, cx } from 'emotion';

import {
	text,
	brandAltBackground,
	neutral,
} from '@guardian/src-foundations/palette';
import { headline, textSans } from '@guardian/src-foundations/typography';
import { from } from '@guardian/src-foundations/mq';
import { Format, Special } from '@guardian/types';

import ArrowInCircle from '@frontend/static/icons/arrow-in-circle.svg';

import { decidePalette } from '@root/src/web/lib/decidePalette';
import { StarRating } from '@root/src/web/components/StarRating/StarRating';
import { QuoteIcon } from '@root/src/web/components/QuoteIcon';
import { Hide } from '@root/src/web/components/Hide';
import { Avatar } from '@frontend/web/components/Avatar';

type ColourType = string;

interface Props {
	richLinkIndex: number;
	cardStyle: RichLinkCardType;
	thumbnailUrl: string;
	headlineText: string;
	contentType: ContentType;
	url: string;
	starRating?: number;
	format: Format;
	tags: TagType[];
	sponsorName: string;
	contributorImage?: string;
	isPlaceholder?: boolean; // use 'true' for server-side default prior to client-side enrichment
}

const neutralBackground = css`
	background-color: ${neutral[97]};
	a {
		color: inherit;
	}
	:hover {
		background-color: ${neutral[93]};
	}
`;

const pillarBackground: (palette: Palette) => ColourType = (palette) => {
	return css`
		background-color: ${palette.background.richLink};
	`;
};

const textColour: (palette: Palette) => ColourType = (palette) => {
	return css`
		color: ${palette.text.richLink};
	`;
};

const richLinkTopBorder: (palette: Palette) => ColourType = (palette) => {
	return css`
		border-top: 1px;
		border-top-style: solid;
		border-top-color: ${palette.border.richLink};
	`;
};

const richLinkLink = css`
	text-decoration: none;
`;

const richLinkElements = css`
	padding-top: 2px;
	padding-right: 5px;
	padding-left: 5px;
	padding-bottom: 5px;
`;

const richLinkHeader = css`
	padding-bottom: 10px;
	color: ${neutral[0]};
`;

const richLinkTitle = css`
	${headline.xxxsmall()};
	font-size: 14px;
	padding-top: 1px;
	padding-bottom: 1px;
	font-weight: 400;
	${from.wide} {
		${headline.xxsmall()};
		padding-bottom: 5px;
	}
`;

const labsRichLinkTitle = css`
	${from.wide} {
		${textSans.medium({ fontWeight: 'bold' })}
	}
	${textSans.small({ fontWeight: 'bold' })}
`;

const richLinkReadMore: (palette: Palette) => ColourType = (palette) => {
	return css`
		fill: ${palette.fill.richLink};
		color: ${palette.text.richLink};
		padding-top: 2px;
	`;
};

const readMoreTextStyle = css`
	${headline.xxxsmall()};
	font-size: 14px;
	${from.wide} {
		${headline.xxxsmall()}
		line-height: 25px;
	}
	display: inline-block;
	height: 30px;
	line-height: 25px;
	padding-left: 4px;
	vertical-align: top;
	font-weight: 500;
	text-decoration: none;
`;

const labsReadMoreTextStyle = css`
	${textSans.medium({ fontWeight: 'regular' })}
	display: inline-block;
	height: 30px;
	line-height: 25px;
	padding-left: 4px;
	vertical-align: top;
	text-decoration: none;
	color: ${neutral[7]};
`;

const byline = css`
	${headline.xxxsmall()};
	font-size: 14px;
	font-style: italic;
	${from.wide} {
		${headline.xxsmall()};
	}
`;

const contributorImageWrapper = css`
	width: 5rem;
	height: 5rem;
	margin-left: auto;
	margin-right: 0.3rem;
	${from.wide} {
		width: 8.5rem;
		height: 8.5rem;
	}

	/* TODO remove the default img styling in ArticleBody.tsx - do we need direct element styling? */
	img {
		width: 100%;
		height: 100%;
	}
`;

const paidForBranding = css`
	${textSans.xsmall()};
	font-weight: bold;
	color: ${text.supporting};
`;

const starWrapper = css`
	background-color: ${brandAltBackground.primary};
	display: inline-block;
`;

const readMoreText: (contentType: string) => string = (contentType) => {
	switch (contentType) {
		case 'audio':
			return 'Listen';
		case 'gallery':
			return 'View Gallery';
		case 'video':
			return 'Watch';
		default:
			return 'Read more';
	}
};

const getMainContributor: (tags: TagType[]) => string = (tags) => {
	const contributorTags = tags.filter((t) => t.type === 'Contributor');
	return contributorTags.length > 0 ? contributorTags[0].title : '';
};

const imageStyles = css`
	width: 100%;
	height: auto;
`;

export const RichLink = ({
	richLinkIndex,
	cardStyle,
	thumbnailUrl,
	headlineText,
	contentType,
	url,
	starRating,
	format,
	tags,
	sponsorName,
	contributorImage,
	isPlaceholder,
}: Props) => {
	const palette = decidePalette(format);
	const linkText =
		cardStyle === 'letters' ? `${headlineText} | Letters ` : headlineText;

	const imageCardStyles = ['news', 'letters', 'media', 'feature'];
	const showImage = thumbnailUrl && imageCardStyles.includes(cardStyle);
	const isPaidContent = tags
		? tags.filter((t) => t.id === 'tone/advertisement-features').length > 0
		: false;
	const isOpinion = cardStyle === 'comment';
	const mainContributor = getMainContributor(tags);
	const isLabs = format.theme === Special.Labs;

	return (
		<div
			data-print-layout="hide"
			data-link-name={`rich-link-${richLinkIndex} | ${richLinkIndex}`}
			data-component="rich-link"
			className={pillarBackground(palette)}
			data-name={(isPlaceholder && 'placeholder') || ''}
		>
			<div className={neutralBackground}>
				<a className={richLinkLink} href={url}>
					<div className={richLinkTopBorder(palette)} />
					{showImage && (
						<div>
							<img
								className={imageStyles}
								src={thumbnailUrl}
								alt=""
							/>
						</div>
					)}
					<div className={richLinkElements}>
						<div className={richLinkHeader}>
							<div
								className={cx(
									isLabs ? labsRichLinkTitle : richLinkTitle,
								)}
							>
								{isOpinion && (
									<>
										<Hide when="above" breakpoint="wide">
											<QuoteIcon
												colour={palette.fill.quoteIcon}
												size="small"
											/>
										</Hide>
										<Hide when="below" breakpoint="wide">
											<QuoteIcon
												colour={palette.fill.quoteIcon}
												size="medium"
											/>
										</Hide>
									</>
								)}
								{linkText}
							</div>
							{isOpinion && (
								<div
									className={cx(byline, textColour(palette))}
								>
									{mainContributor}
								</div>
							)}
							{starRating && starRating > 0 && (
								<div className={starWrapper}>
									<StarRating
										rating={starRating}
										size="medium"
									/>
								</div>
							)}
							{isPaidContent && sponsorName && (
								<div className={paidForBranding}>
									Paid for by {sponsorName}
								</div>
							)}
						</div>
						{isOpinion && contributorImage && (
							<div className={contributorImageWrapper}>
								<Avatar
									imageSrc={contributorImage}
									imageAlt={mainContributor}
									palette={decidePalette(format)}
								/>
							</div>
						)}
						<div className={richLinkReadMore(palette)}>
							<ArrowInCircle />
							<div
								className={cx(
									isLabs
										? labsReadMoreTextStyle
										: readMoreTextStyle,
								)}
							>
								{readMoreText(contentType)}
							</div>
						</div>
					</div>
				</a>
			</div>
		</div>
	);
};
