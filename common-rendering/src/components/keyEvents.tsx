// ----- Imports ----- //

import { css } from "@emotion/react";
import type { SerializedStyles } from "@emotion/react";
import { textSans, headline, sport, culture, lifestyle, opinion, news } from "@guardian/source-foundations";
import { remSpace } from "@guardian/source-foundations";
import {
	neutral,
} from "@guardian/source-foundations";
import { Link } from "@guardian/source-react-components";
import { ArticleFormat, ArticlePillar, ArticleTheme, timeAgo } from "@guardian/libs";
import { from } from "@guardian/source-foundations";
import { darkModeCss } from "../lib";
import Accordion from "./accordion";
import { text } from "../editorialPalette";

// ----- Component ----- //
type paletteId = 300 | 400 | 500;
interface KeyEvent {
	date: Date;
	text: string;
	url: string;
}

interface KeyEventsProps {
	keyEvents: KeyEvent[];
	format: ArticleFormat;
	supportsDarkMode: boolean;
}

interface ListItemProps {
	keyEvent: KeyEvent;
	format: ArticleFormat;
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
		border-top: #cdcdcd 1px solid;
		padding-top: ${remSpace[2]};
	}

	${darkModeCss(supportsDarkMode)`
		background-color: ${neutral[10]};
	`}
`;

const listStyles = (supportsDarkMode: boolean): SerializedStyles => css`
	${from.desktop} {
		width: 13.75rem;
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
	format: ArticleFormat,
	supportsDarkMode: boolean
): SerializedStyles => css`
	${headline.xxxsmall({ fontWeight: "regular", lineHeight: "regular" })};
	color: ${text.keyEventsInline(format)};

	text-decoration: none;

	&:hover {
		color: ${text.keyEventsInline(format)};
		text-decoration: underline;
	}

	${from.desktop} {
		color: ${text.keyEventsLeftColumn(format)};

		&:hover {
			color: ${text.keyEventsLeftColumn(format)};
			text-decoration: underline;
		}
	}

	${darkModeCss(supportsDarkMode)`
		color: ${getColor(format.theme, 500)};
		&:hover {
			color: ${getColor(format.theme, 500)};
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

const ListItem = ({ keyEvent, format, supportsDarkMode }: ListItemProps) => {
	return (
		<li css={listItemStyles(supportsDarkMode)}>
			<div css={timeTextWrapperStyles}>
				<time
					dateTime={keyEvent.date.toISOString()}
					data-relativeformat="med"
					title={keyEvent.date.toLocaleTimeString()}
					css={timeStyles(supportsDarkMode)}
				>
					{timeAgo(keyEvent.date.getTime(), { verbose: true })}
				</time>
				<Link
					priority="secondary"
					css={textStyles(format, supportsDarkMode)}
					href={keyEvent.url}
				>
					{keyEvent.text}
				</Link>
			</div>
		</li>
	);
};

const KeyEvents = ({ keyEvents, format, supportsDarkMode }: KeyEventsProps) => {
	return (
		<nav
			// eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
			tabIndex={0}
			id="keyevents"
			css={keyEventWrapperStyles(supportsDarkMode)}
			aria-label="Key Events"
		>
			<Accordion
				supportsDarkMode={supportsDarkMode}
				accordionTitle="Key events"
				context="keyEvents"
			>
				<ul css={listStyles(supportsDarkMode)}>
					{keyEvents.slice(0, 7).map((event, index) => (
						<ListItem
							key={`${event.url}${index}`}
							keyEvent={event}
							format={format}
							supportsDarkMode={supportsDarkMode}
						/>
					))}
				</ul>
			</Accordion>
		</nav>
	);
};

// ----- Exports ----- //

export default KeyEvents;
export type { KeyEvent };
