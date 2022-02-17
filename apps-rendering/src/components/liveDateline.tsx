// ----- Imports ----- //

import { css, keyframes } from '@emotion/react';
import { neutral, pxToRem, textSans } from '@guardian/source-foundations';
import type { FC } from 'react';
import { ArticleDesign, ArticleFormat } from '@guardian/libs';
import type { Option } from '@guardian/types';
import { maybeRender } from 'lib';
import { makeRelativeDate } from 'date';

// ----- Component ----- //

const livePulse = keyframes`
    0% {opacity: 1;}
    10% {opacity: .25;}
    40% {opacity: 1;}
    100% {opacity: 1;}
`;

const timestampStyles = (isDeadBlog: boolean = false) => css`
	color: ${isDeadBlog ? neutral[7] : neutral[100]};
	${textSans.xxsmall({ lineHeight: 'tight' })}
`;

const liveSpanStyles = css`
	font-weight: bold;

	&::before {
		content: '';
		display: inline-block;
		border-radius: 100%;
		background-color: ${neutral[100]};
		width: ${pxToRem(9)}rem;
		height: ${pxToRem(9)}rem;
		margin-right: ${pxToRem(2)}rem;
		animation: ${livePulse} 1s infinite;

		@media (prefers-reduced-motion) {
			animation: none;
		}
	}
`;

interface Props {
	date: Option<Date>;
	format: ArticleFormat;
}

const RelativeDateline: FC<Props> = ({ date, format }) =>
	maybeRender(date, (d) => (
		<time css={timestampStyles(format.design === ArticleDesign.DeadBlog)}>
			{format.design === ArticleDesign.LiveBlog && (
				<span css={liveSpanStyles}>LIVE </span>
			)}
			Updated {makeRelativeDate(d)}
		</time>
	));

// ----- Exports ----- //

export default RelativeDateline;
