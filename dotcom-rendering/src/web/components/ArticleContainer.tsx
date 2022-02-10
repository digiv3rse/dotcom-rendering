import { css } from '@emotion/react';
import { ArticleDesign } from '@guardian/libs';
import { from, neutral, space, until } from '@guardian/source-foundations';

import { labelStyles, carrotAdStyles } from './AdSlot';

type Props = {
	format: ArticleFormat;
	children: React.ReactNode;
};

const articleWidth = (format: ArticleFormat) => {
	switch (format.design) {
		case ArticleDesign.Interactive: {
			// These articles use a special template which manages it's own width
			return null;
		}
		case ArticleDesign.LiveBlog:
		case ArticleDesign.DeadBlog: {
			return css`
				${from.desktop} {
					width: 700px;
				}
			`;
		}
		default: {
			return css`
				${from.desktop} {
					width: 620px;
				}
			`;
		}
	}
};

const articleWrapper = css`
	${until.leftCol} {
		/* below 1140 */
		padding-left: 0;
	}

	flex-grow: 1;

	/* Due to MainMedia using position: relative, this seems to effect the rendering order
    To mitigate we use z-index
    TODO: find a cleaner solution */
	z-index: 1;
`;

const articleAdStyles = css`
	.ad-slot {
		@media print {
			/* stylelint-disable-next-line declaration-no-important */
			display: none !important;
		}
		&.ad-slot--collapse {
			display: none;
		}
	}
	.ad-slot--mostpop {
		${from.desktop} {
			margin: 0;
			width: auto;
		}
	}
	.ad-slot--inline,
	.ad-slot-liveblog--inline {
		width: 300px;
		margin: 12px auto;
		min-width: 160px;
		min-height: 274px;
		text-align: center;

		${from.tablet} {
			margin-right: -100px;
			width: auto;
			float: right;
			margin-top: 4px;
			margin-left: 20px;
		}
		${from.desktop} {
			width: auto;
			float: right;
			margin: 0;
			margin-top: 4px;
			margin-left: 20px;
		}
	}
	.ad-slot--offset-right {
		${from.desktop} {
			float: right;
			width: auto;
			margin-right: -318px;
		}

		${from.wide} {
			margin-right: -398px;
		}
	}
	.ad-slot--outstream {
		${from.tablet} {
			margin-left: 0;
			width: 100%;
			.ad-slot__label {
				margin-left: 35px;
				margin-right: 35px;
			}
		}
	}
	.ad-slot--fluid {
		width: 100%;
	}
	.ad-slot--liveblog-inline {
		margin: 0 auto ${space[3]}px;

		.ad-slot__label {
			color: ${neutral[46]};
			border-top-color: ${neutral[86]};
		}

		&.ad-slot--outstream {
			${from.tablet} {
				width: 620px;
			}
		}

		&:not(.ad-slot--outstream) {
			width: 300px;
			background-color: ${neutral[93]};
			text-align: center;

			${from.tablet} {
				width: 100%;
				padding-bottom: ${space[6]}px;

				& > div:not(.ad-slot__label) {
					width: 300px;
					margin-left: auto;
					margin-right: auto;
				}
			}
		}

		&.ad-slot--fluid {
			background-color: green;
			width: 100%;
		}
	}
`;

export const ArticleContainer = ({ children, format }: Props) => {
	return (
		<div
			css={[
				articleWrapper,
				articleWidth(format),
				articleAdStyles,
				carrotAdStyles,
				labelStyles,
			]}
		>
			{children}
		</div>
	);
};
