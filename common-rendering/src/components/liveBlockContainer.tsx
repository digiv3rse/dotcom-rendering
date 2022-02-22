import { css } from "@emotion/react";
import { neutral, from, space, headline } from "@guardian/source-foundations";
import { FirstPublished } from "./FirstPublished";

const LEFT_MARGIN_DESKTOP = 60;
const SIDE_MARGIN = space[5];
const SIDE_MARGIN_MOBILE = 10;

const Header = ({ children }: { children: React.ReactNode }) => {
	return (
		<header
			css={css`
				padding-right: ${space[3]}px;
				display: flex;
				flex-direction: column;
			`}
		>
			{children}
		</header>
	);
};

const BlockTitle = ({ title }: { title: string }) => {
	return (
		<h2
			css={css`
				${headline.xxsmall({ fontWeight: "bold" })}
				margin-bottom: ${space[2]}px;
			`}
		>
			{title}
		</h2>
	);
};

const LiveBlockContainer = ({
	id,
	children,
	borderColour,
	blockTitle,
	blockFirstPublished,
	blockLink,
	isLiveUpdate,
}: {
	id: string;
	children: React.ReactNode;
	borderColour: string;
	blockTitle?: string;
	blockFirstPublished?: number;
	blockLink: string;
	isLiveUpdate?: boolean;
}) => {
	return (
		<article
			id={`block-${id}`}
			key={id}
			/**
			 *   Classnames
			 *   ----------
			 * - 'block' is used by Spacefinder as a possible candidate before which it can insert an inline ad
			 * - 'pending' is used to mark blocks that have been inserted as part of a live update. We use this
			 *    to animate the reveal as well as for enhancing twitter embeds
			 */
			className={`block ${isLiveUpdate && "pending"}`}
			css={css`
				padding: ${space[2]}px ${SIDE_MARGIN_MOBILE}px;
				margin-bottom: ${space[3]}px;
				background: ${neutral[100]};
				border-top: 1px solid ${borderColour};
				${from.tablet} {
					padding: ${space[2]}px ${SIDE_MARGIN}px;
					padding-left: ${LEFT_MARGIN_DESKTOP}px;
				}
				border-bottom: 1px solid ${neutral[86]};
			`}
		>
			<Header>
				{blockFirstPublished && (
					<FirstPublished
						firstPublished={blockFirstPublished}
						blockLink={blockLink}
					/>
				)}
				{blockTitle ? <BlockTitle title={blockTitle} /> : null}
			</Header>
			{children}
		</article>
	);
};

export default LiveBlockContainer;
