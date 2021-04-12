import React from 'react';
import { css, cx } from 'emotion';

import { headline } from '@guardian/src-foundations/typography';
import { between } from '@guardian/src-foundations/mq';
import { ArticleRenderer } from '@root/src/web/lib/ArticleRenderer';
import { LiveBlogRenderer } from '@root/src/web/lib/LiveBlogRenderer';
import { Design, Display } from '@guardian/types';
import type { Format } from '@guardian/types';

type Props = {
	format: Format;
	palette: Palette;
	blocks: Block[];
	adTargeting: AdTargeting;
	host?: string;
	abTests: CAPIType['config']['abTests'];
	pageId: string;
	webTitle: string;
	isPreview: boolean;
};

const globalH2Styles = (display: Display) => css`
	h2 {
		${display === Display.Immersive
			? headline.medium({ fontWeight: 'light' })
			: headline.xxsmall({ fontWeight: 'bold' })};
	}
`;

const globalStrongStyles = css`
	strong {
		font-weight: bold;
	}
`;

const globalImgStyles = css`
	img {
		width: 100%;
		height: auto;
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
	abTests,
	pageId,
	webTitle,
	isPreview,
}: Props) => {
	if (
		format.design === Design.LiveBlog ||
		format.design === Design.DeadBlog
	) {
		return (
			<div
				className={cx(
					globalStrongStyles,
					globalImgStyles,
					globalLinkStyles(palette),
				)}
			>
				<LiveBlogRenderer
					format={format}
					blocks={blocks}
					adTargeting={adTargeting}
					host={host}
					abTests={abTests}
					pageId={pageId}
					webTitle={webTitle}
					isPreview={isPreview}
				/>
			</div>
		);
	}
	return (
		<div
			className={cx(
				bodyPadding,
				globalH2Styles(format.display),
				globalStrongStyles,
				globalImgStyles,
				globalLinkStyles(palette),
			)}
		>
			<ArticleRenderer
				format={format}
				palette={palette}
				elements={blocks[0] ? blocks[0].elements : []}
				adTargeting={adTargeting}
				host={host}
				abTests={abTests}
				isPreview={isPreview}
			/>
		</div>
	);
};
