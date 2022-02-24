import { css } from '@emotion/react';

import { ArticleDesign, ArticleSpecial } from '@guardian/libs';
import {
	headline,
	textSans,
	neutral,
	until,
	space,
} from '@guardian/source-foundations';

import { QuoteIcon } from './QuoteIcon';
import { Kicker } from './Kicker';
import { Byline } from './Byline';
import { decidePalette } from '../lib/decidePalette';

type Props = {
	headlineText: string; // The text shown
	format: ArticleFormat; // Used to decide when to add type specific styles
	kickerText?: string;
	showPulsingDot?: boolean;
	showSlash?: boolean;
	showQuotes?: boolean; // Even with design !== Comment, a piece can be opinion
	size?: SmallHeadlineSize;
	byline?: string;
	showByline?: boolean;
	isFullCardImage?: boolean; // Used for carousel AB test
};

const fontStyles = (size: SmallHeadlineSize) => {
	switch (size) {
		case 'large':
			return css`
				${headline.xsmall()};
				${until.desktop} {
					${headline.xxsmall()};
				}
			`;
		case 'medium':
			return css`
				${headline.xxsmall()};
				${until.desktop} {
					${headline.xxxsmall()};
				}
			`;
		case 'small':
			return css`
				${headline.xxxsmall()};
			`;
		case 'tiny':
			return css`
				${headline.xxxsmall()};
				font-size: 14px;
			`;
	}
};

const labTextStyles = (size: SmallHeadlineSize) => {
	switch (size) {
		case 'large':
			return css`
				${textSans.large()};
				${until.desktop} {
					${textSans.medium()};
				}
			`;
		case 'medium':
			return css`
				${textSans.large({ lineHeight: 'tight' })};
				${until.desktop} {
					${textSans.medium({ lineHeight: 'tight' })};
				}
				padding-bottom: ${space[1]}px;
			`;
		case 'small':
			return css`
				${textSans.small()};
			`;
		case 'tiny':
			return css`
				${textSans.xxsmall()};
				font-size: 14px;
			`;
	}
};

const underlinedStyles = (size: SmallHeadlineSize) => {
	function generateUnderlinedCss(baseSize: number) {
		return css`
			background-image: linear-gradient(
				to bottom,
				transparent,
				transparent ${baseSize - 1}px,
				rgba(199, 0, 0, 0.5)
			);
			line-height: ${baseSize - 1}px;
			background-size: 1px ${baseSize}px;
			background-origin: content-box;
			background-clip: content-box;
			margin-right: -5px;
		`;
	}
	switch (size) {
		case 'small':
			return generateUnderlinedCss(21);
		case 'medium':
			return generateUnderlinedCss(24);
		case 'large':
			return generateUnderlinedCss(28);
		default:
			return generateUnderlinedCss(23);
	}
};

const fullCardImageTextStyles = css`
	${headline.xxsmall()};
	color: ${neutral[100]};
	background-color: rgba(0, 0, 0, 0.75);
	box-shadow: -${space[1]}px 0 0 rgba(0, 0, 0, 0.75);
	/* Box decoration is required to push the box shadow out on Firefox */
	box-decoration-break: clone;
	line-height: 1.25;
	/* white-space: pre-wrap; */
	padding-right: ${space[1]}px;
	${until.desktop} {
		${headline.xxxsmall()};
	}
`;

export const CardHeadline = ({
	headlineText,
	format,
	showQuotes,
	kickerText,
	showPulsingDot,
	showSlash,
	size = 'medium',
	byline,
	showByline,
	isFullCardImage,
}: Props) => {
	const palette = decidePalette(format);
	return (
		<>
			<h4
				css={[
					format.theme === ArticleSpecial.Labs
						? labTextStyles(size)
						: fontStyles(size),
					format.design === ArticleDesign.Analysis &&
						underlinedStyles(size),
					isFullCardImage &&
						css`
							line-height: 1; /* Reset line height in full image carousel */
						`,
				]}
			>
				<span css={isFullCardImage && fullCardImageTextStyles}>
					{kickerText && (
						<Kicker
							text={kickerText}
							palette={palette}
							showPulsingDot={showPulsingDot}
							showSlash={showSlash}
							inCard={true}
						/>
					)}
					{showQuotes && (
						<QuoteIcon colour={palette.text.cardKicker} />
					)}

					<span
						css={css`
							color: ${palette.text.cardHeadline};
						`}
					>
						{headlineText}
					</span>
				</span>
			</h4>
			{byline && showByline && (
				<Byline
					text={byline}
					format={format}
					size={size}
					isCard={true}
				/>
			)}
		</>
	);
};
