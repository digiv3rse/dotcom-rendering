import { css } from "@emotion/react";
import { timeAgo } from "@guardian/libs";
import { neutral, space, textSans } from "@guardian/source-foundations";
import { darkModeCss } from "../lib";

// TODO: update this code to use shared version when it is available
const padString = (time: number) => (time < 10 ? `0${time}` : time);

const FirstPublished = ({
	firstPublished,
	blockLink,
	supportsDarkMode,
}: {
	firstPublished: number;
	blockLink: string;
	supportsDarkMode: boolean;
}) => {
	const publishedDate = new Date(firstPublished);
	return (
		<a
			href={blockLink}
			data-ignore="global-link-styling"
			css={css`
				${textSans.xxsmall({ fontWeight: "bold" })}
				margin-bottom: ${space[1]}px;
				padding-top: ${space[1]}px;
				display: flex;
				width: fit-content;
				flex-direction: row;
				text-decoration: none;
				:hover {
					filter: brightness(30%);
				}
			`}
		>
			<time
				dateTime={publishedDate.toISOString()}
				data-relativeformat="med"
				css={css`
					color: ${neutral[46]};
					font-weight: bold;
					margin-right: ${space[2]}px;

					${darkModeCss(supportsDarkMode)`
						color: ${neutral[60]};
					`}
				`}
			>
				{timeAgo(firstPublished)}
			</time>
			<span
				css={css`
					${textSans.xxsmall()};
					color: ${neutral[46]};

					${darkModeCss(supportsDarkMode)`
						color: ${neutral[60]};
					`}
				`}
			>
				{`${padString(publishedDate.getHours())}:${padString(
					publishedDate.getMinutes()
				)}`}
			</span>
		</a>
	);
};

export { FirstPublished };
