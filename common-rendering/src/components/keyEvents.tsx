// ----- Imports ----- //

import { css } from "@emotion/react";
import type { SerializedStyles } from "@emotion/react";
import { textSans, headline } from "@guardian/source-foundations";
import { remSpace } from "@guardian/source-foundations";
import { focusHalo } from "@guardian/source-foundations";
import {
	culture,
	lifestyle,
	neutral,
	news,
	sport,
	opinion,
} from "@guardian/source-foundations";
import {
	SvgChevronUpSingle,
	SvgChevronDownSingle,
} from "@guardian/source-react-components";
import { Link } from "@guardian/source-react-components";
import { ArticlePillar, ArticleTheme } from "@guardian/libs";
import { from } from "@guardian/source-foundations";
import { darkModeCss } from "../lib";

// ----- Component ----- //
type paletteId = 300 | 400 | 500;

interface KeyEvent {
	time: string;
	text: string;
	url: string;
}

interface KeyEventsProps {
	keyEvents: KeyEvent[];
	theme: ArticleTheme;
	supportsDarkMode: boolean;
}

interface ListItemProps {
	keyEvent: KeyEvent;
	theme: ArticleTheme;
	supportsDarkMode: boolean;
}

const getColor = (theme: ArticleTheme, paletteId: paletteId) => {
	switch (theme) {
		case ArticlePillar.Sport:
			return sport[paletteId];
		case ArticlePillar.Culture:
			return culture[paletteId];
		case ArticlePillar.Lifestyle:
			return lifestyle[paletteId];
		case ArticlePillar.Opinion:
			return opinion[paletteId];
		default:
			return news[paletteId];
	}
};

const keyEventWrapperStyles = (
	supportsDarkMode: boolean
): SerializedStyles => css`
	width: 100%;

	${from.desktop} {
		width: 13.75rem;
	}

	${darkModeCss(supportsDarkMode)`
		background-color: ${neutral[10]};
	`}
`;

const detailsStyles: SerializedStyles = css`
	&:not([open]) .is-on,
	&[open] .is-off {
		display: none;
	}

	summary::-webkit-details-marker {
		display: none;
	}
`;

const titleRowStyles = (supportsDarkMode: boolean): SerializedStyles => css`
	position: relative;
	margin: 0 ${remSpace[1]} 0 ${remSpace[3]};
	display: flex;
	justify-content: space-between;
	align-items: center;

	&:focus {
		${focusHalo}
	}

	path {
		fill: ${neutral[46]};
	}

	svg {
		height: 2rem;
	}

	${darkModeCss(supportsDarkMode)`
		path {
			fill: ${neutral[60]};
		}
	`}

	${from.phablet} {
		margin: ${remSpace[1]} ${remSpace[4]} 0;
	}

	${from.desktop} {
		display: none;
	}
`;

const titleStyle = (supportsDarkMode: boolean): SerializedStyles => css`
	${headline.xxsmall({ fontWeight: "bold", lineHeight: "tight" })};
	color: ${neutral[7]};

	${darkModeCss(supportsDarkMode)`
		color: ${neutral[86]};
	`}
`;

const listStyles = (supportsDarkMode: boolean): SerializedStyles => css`
	margin: ${remSpace[3]};

	${from.phablet} {
		margin: ${remSpace[3]} ${remSpace[5]} 0;
	}

	${from.desktop} {
		margin: ${remSpace[1]} 0 0;
	}

	li::before {
		content: "";
		border-color: transparent ${neutral[7]};
		border-style: solid;
		border-width: 0.4rem 0 0.4rem 0.5rem;
		display: block;
		height: 0;
		width: 0;
		top: 0;
		position: absolute;
	}

	${darkModeCss(supportsDarkMode)`
		li::before {
			border-color: transparent ${neutral[60]};
		}
	`}
`;

const listItemStyles = (supportsDarkMode: boolean): SerializedStyles => css`
	padding-bottom: ${remSpace[3]};
	border-left: 1px solid ${neutral[7]};
	position: relative;
	${darkModeCss(supportsDarkMode)`
		border-left: 1px solid ${neutral[60]};
	`}
	&:last-child {
		border-left: none;
	}
`;

const timeTextWrapperStyles: SerializedStyles = css`
	margin-left: ${remSpace[4]};
`;

const textStyles = (
	theme: ArticleTheme,
	supportsDarkMode: boolean
): SerializedStyles => css`
	${headline.xxxsmall({ fontWeight: "regular", lineHeight: "regular" })};
	color: ${getColor(theme, 300)};
	text-decoration: none;

	&:hover {
		color: ${getColor(theme, 300)};
		text-decoration: underline;
	}

	${darkModeCss(supportsDarkMode)`
		color: ${getColor(theme, 500)};
		&:hover {
			color: ${getColor(theme, 500)};
		}
	`}
`;

const timeStyles = (supportsDarkMode: boolean): SerializedStyles => css`
	${textSans.xxsmall({ fontWeight: "bold", lineHeight: "tight" })};
	color: ${neutral[7]};
	display: block;

	${darkModeCss(supportsDarkMode)`
		color: ${neutral[60]};
	`}
`;

const ListItem = ({ keyEvent, theme, supportsDarkMode }: ListItemProps) => {
	return (
		<li css={listItemStyles(supportsDarkMode)}>
			<div css={timeTextWrapperStyles}>
				<time css={timeStyles(supportsDarkMode)}>{keyEvent.time}</time>
				<Link
					priority="secondary"
					css={textStyles(theme, supportsDarkMode)}
					href={keyEvent.url}
				>
					{keyEvent.text}
				</Link>
			</div>
		</li>
	);
};

const KeyEvents = ({ keyEvents, theme, supportsDarkMode }: KeyEventsProps) => {
	return (
		<div css={keyEventWrapperStyles(supportsDarkMode)}>
			<details open css={detailsStyles}>
				<summary css={titleRowStyles(supportsDarkMode)}>
					<h2 css={titleStyle(supportsDarkMode)}>Key Events</h2>
					<span className="is-off">
						<SvgChevronDownSingle />
					</span>
					<span className="is-on">
						<SvgChevronUpSingle />
					</span>
				</summary>
				<ul css={listStyles(supportsDarkMode)}>
					{keyEvents.slice(0, 7).map((event, index) => (
						<ListItem
							key={`${event.url}${index}`}
							keyEvent={event}
							theme={theme}
							supportsDarkMode={supportsDarkMode}
						/>
					))}
				</ul>
			</details>
		</div>
	);
};

// ----- Exports ----- //

export default KeyEvents;
export type { KeyEvent };
