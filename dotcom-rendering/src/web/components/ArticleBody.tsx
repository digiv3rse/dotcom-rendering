import { css } from '@emotion/react';

import { headline, body, between, space } from '@guardian/source-foundations';
import { ArticleDesign, ArticleDisplay } from '@guardian/libs';
import type { ArticleFormat } from '@guardian/libs';
import { ArticleRenderer } from '../lib/ArticleRenderer';
import { LiveBlogRenderer } from '../lib/LiveBlogRenderer';

type Props = {
	format: ArticleFormat;
	palette: Palette;
	blocks: Block[];
	adTargeting: AdTargeting;
	host?: string;
	pageId: string;
	webTitle: string;
	ajaxUrl: string;
};

const globalH2Styles = (display: ArticleDisplay) => css`
	h2:not([data-ignore='global-h2-styling']) {
		${display === ArticleDisplay.Immersive
			? headline.medium({ fontWeight: 'light' })
			: headline.xxsmall({ fontWeight: 'bold' })};
	}
`;

const globalOlStyles = () => css`
	ol:not([data-ignore='global-ol-styling']) {
		counter-reset: li;
		li:before {
			${body.medium({ lineHeight: 'tight' })};
			content: counter(li);
			counter-increment: li;
			margin-right: ${space[1]}px;
		}
	}
`;

const globalH3Styles = (display: ArticleDisplay) => {
	if (display !== ArticleDisplay.NumberedList) return null;
	return css`
		h3 {
			${headline.xsmall({ fontWeight: 'bold' })};
			margin-bottom: ${space[2]}px;
		}
	`;
};

const globalStrongStyles = css`
	strong {
		font-weight: bold;
	}
`;

const bodyPadding = css`
	${between.tablet.and.desktop} {
		padding-right: 80px;
	}
`;

const globalLinkStyles = (palette: Palette) => css`
	a:not([data-ignore='global-link-styling']) {
		text-decoration: none;
		border-bottom: 1px solid ${palette.border.articleLink};
		color: ${palette.text.articleLink};

		:hover {
			color: ${palette.text.articleLinkHover};
			border-bottom: 1px solid ${palette.border.articleLinkHover};
		}
	}
`;

export const ArticleBody = ({
	format,
	palette,
	blocks,
	adTargeting,
	host,
	pageId,
	webTitle,
	ajaxUrl,
}: Props) => {
	const isInteractive = format.design === ArticleDesign.Interactive;

	if (
		format.design === ArticleDesign.LiveBlog ||
		format.design === ArticleDesign.DeadBlog
	) {
		return (
			<>
				{format.design === ArticleDesign.LiveBlog && (
					<span data-gu-marker="top-of-blog" />
				)}
				<div
					// eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
					tabIndex={0}
					id="maincontent"
					// This classname is used by Spacefinder as the container in which it'll attempt to insert inline ads
					className="js-liveblog-body"
					css={[globalStrongStyles, globalLinkStyles(palette)]}
				>
					<LiveBlogRenderer
						format={format}
						blocks={blocks}
						adTargeting={adTargeting}
						host={host}
						pageId={pageId}
						webTitle={webTitle}
						ajaxUrl={ajaxUrl}
					/>
				</div>
			</>
		);
	}
	return (
		<div
			// eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
			tabIndex={0}
			id="maincontent"
			css={[
				isInteractive ? null : bodyPadding,
				globalH2Styles(format.display),
				globalH3Styles(format.display),
				globalOlStyles(),
				globalStrongStyles,
				globalLinkStyles(palette),
			]}
		>
			<ArticleRenderer
				format={format}
				palette={palette}
				elements={blocks[0] ? blocks[0].elements : []}
				adTargeting={adTargeting}
				host={host}
				pageId={pageId}
				webTitle={webTitle}
				ajaxUrl={ajaxUrl}
			/>
		</div>
	);
};
