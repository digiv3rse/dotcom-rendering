import { css } from '@emotion/react';
import { ArticleDesign, ArticleSpecial } from '@guardian/libs';
import {
	from,
	headline,
	neutral,
	textSans,
	until,
} from '@guardian/source-foundations';
import { getSoleContributor } from '../../lib/byline';
import TwitterIcon from '../../static/icons/twitter.svg';
import type { Palette } from '../../types/palette';
import { interactiveLegacyClasses } from '../layouts/lib/interactiveLegacyStyling';
import { decidePalette } from '../lib/decidePalette';
import { BylineLink } from './BylineLink';

const twitterHandleColour = (palette: Palette) => css`
	color: ${palette.text.twitterHandleBelowDesktop};

	svg {
		fill: ${palette.fill.twitterHandleBelowDesktop};
	}

	a {
		color: ${palette.text.twitterHandleBelowDesktop};
	}

	${from.desktop} {
		color: ${palette.text.twitterHandle};

		svg {
			fill: ${neutral[46]};
		}

		a {
			color: ${palette.text.twitterHandle};
		}
	}
`;

const twitterHandleStyles = css`
	${textSans.xxsmall()};
	font-weight: bold;

	svg {
		height: 10px;
		max-width: 12px;
		margin-right: 0px;
	}

	a {
		text-decoration: none;
	}

	padding-right: 10px;
	display: inline-block;
`;

// for liveblog smaller breakpoints article meta is located in the same
// container as standfirst and needs the same styling as standfirst
const bylineColorStyles = (palette: Palette, format: ArticleFormat) => {
	switch (format.design) {
		case ArticleDesign.LiveBlog: {
			return css`
				color: ${palette.text.byline};
				${until.desktop} {
					color: ${palette.text.standfirst};
				}
				a {
					color: ${palette.text.byline};
					${until.desktop} {
						color: ${palette.text.standfirst};
					}
				}
			`;
		}
		default: {
			return css`
				color: ${palette.text.byline};
				a {
					color: ${palette.text.byline};
				}
			`;
		}
	}
};

const bylineStyles = (format: ArticleFormat) => css`
	${format.theme === ArticleSpecial.Labs
		? textSans.medium()
		: headline.xxxsmall()};
	${format.theme === ArticleSpecial.Labs && 'line-height: 20px;'};

	padding-bottom: 8px;
	font-style: italic;

	a {
		font-weight: 700;
		text-decoration: none;
		font-style: normal;
		:hover {
			text-decoration: underline;
		}
	}
`;

type Props = {
	byline: string;
	tags: TagType[];
	format: ArticleFormat;
};

export const Contributor = ({ byline, tags, format }: Props) => {
	const palette = decidePalette(format);

	const { twitterHandle } = getSoleContributor(tags, byline) ?? {};

	return (
		<address
			aria-label="Contributor info"
			data-component="meta-byline"
			data-link-name="byline"
		>
			{format.design !== ArticleDesign.Interview && (
				<div
					className={
						format.design === ArticleDesign.Interactive
							? interactiveLegacyClasses.byline
							: ''
					}
					css={[
						bylineStyles(format),
						bylineColorStyles(palette, format),
					]}
				>
					<BylineLink byline={byline} tags={tags} />
				</div>
			)}
			{!!twitterHandle && (
				<div css={[twitterHandleStyles, twitterHandleColour(palette)]}>
					<TwitterIcon />
					<a
						href={`https://www.twitter.com/${twitterHandle}`}
						aria-label={`@${twitterHandle} on Twitter`}
					>
						@{twitterHandle}
					</a>
				</div>
			)}
		</address>
	);
};
