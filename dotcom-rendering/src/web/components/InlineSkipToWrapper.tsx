/* eslint-disable jsx-a11y/no-noninteractive-tabindex -- need focus on element after skippable content */
import { css } from '@emotion/react';
import { border, neutral, textSans } from '@guardian/source-foundations';
import type { ReactNode } from 'react';

type Props = {
	id: string;
	blockDescription: string;
	children: ReactNode;
};

const skipLinkCss = css`
	${textSans.medium()}
	height: 40px;
	left: -100vw;
	line-height: 30px;
	overflow: hidden;
	padding: 0;
	position: absolute;
	background: ${neutral[100]};
	display: block;
	text-align: center;
	margin: 0;
	text-decoration: none;
	color: ${neutral[0]};
	&:focus,
	&:active {
		border: 5px solid ${border.focusHalo};
		position: static;
	}
	&:visited,
	&:active {
		color: ${neutral[0]};
	}
`;

// using single template literals for the labels instead of
// `after {blockDescription}` to prevent JSX rendering
// an empty comment in the HTML between the static text
// and the variable. That comment can make screen readers
// announce the text oddly.
// https://github.com/guardian/dotcom-rendering/pull/6950#pullrequestreview-1279406318

export const InlineSkipToWrapper = ({
	id,
	blockDescription,
	children,
}: Props) => {
	return (
		<>
			<a
				data-ignore="global-link-styling"
				href={`#${id}`}
				css={skipLinkCss}
			>
				{`skip past ${blockDescription}`}
			</a>
			{children}

			<span id={id} tabIndex={0} css={skipLinkCss}>
				{`after ${blockDescription}`}
			</span>
		</>
	);
};
