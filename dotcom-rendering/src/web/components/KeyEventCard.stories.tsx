import { css } from '@emotion/react';
import {
	ArticleDesign,
	ArticleDisplay,
	ArticlePillar,
	ArticleSpecial,
} from '@guardian/libs';
import { from, neutral } from '@guardian/source-foundations';
import { events } from '../../../fixtures/manual/key-events';
import type { KeyEvent as KeyEventType } from './KeyEventCard';
import { KeyEventCard } from './KeyEventCard';

const getFormat = (theme: ArticleTheme) => {
	return {
		design: ArticleDesign.Standard,
		display: ArticleDisplay.Standard,
		theme,
	};
};

const wrapperStyles = css`
	padding-left: 20px;
	display: inline-flex;
	background-color: ${neutral[97]};
	margin: 10px 0;

	${from.desktop} {
		background-color: ${neutral[93]};
	}

	ul {
		overflow-x: scroll;
		margin: 20px 0;

		&::-webkit-scrollbar {
			display: none;
		}
	}
`;

const SummaryCard = ({ theme }: { theme: ArticleTheme }) => (
	<ul css={wrapperStyles}>
		<KeyEventCard
			text={events[0].text}
			url={events[0].url}
			date={events[0].date}
			format={getFormat(theme)}
			isSummary={true}
		/>
	</ul>
);

const StandardCard = ({
	theme,
	count,
}: {
	theme: ArticleTheme;
	count: number;
}) => (
	<ul css={wrapperStyles}>
		{events.slice(0, count).map((event: KeyEventType) => (
			<KeyEventCard
				text={event.text}
				url={event.url}
				date={event.date}
				format={getFormat(theme)}
				isSummary={event.isSummary}
			/>
		))}
	</ul>
);

const Summary = () => (
	<>
		<SummaryCard theme={ArticlePillar.News} />
		<SummaryCard theme={ArticlePillar.Culture} />
		<SummaryCard theme={ArticlePillar.Lifestyle} />
		<SummaryCard theme={ArticlePillar.Sport} />
		<SummaryCard theme={ArticlePillar.Opinion} />
		<SummaryCard theme={ArticleSpecial.SpecialReport} />
	</>
);

const KeyEvent = () => (
	<>
		<StandardCard theme={ArticlePillar.News} count={1} />
		<StandardCard theme={ArticlePillar.Culture} count={1} />
		<StandardCard theme={ArticlePillar.Lifestyle} count={1} />
		<StandardCard theme={ArticlePillar.Sport} count={1} />
		<StandardCard theme={ArticlePillar.Opinion} count={1} />
		<StandardCard theme={ArticleSpecial.SpecialReport} count={1} />
	</>
);

const Multiple = () => (
	<>
		<StandardCard theme={ArticlePillar.News} count={7} />
		<StandardCard theme={ArticlePillar.Culture} count={7} />
		<StandardCard theme={ArticlePillar.Lifestyle} count={7} />
		<StandardCard theme={ArticlePillar.Sport} count={7} />
		<StandardCard theme={ArticlePillar.Culture} count={7} />
		<StandardCard theme={ArticlePillar.Opinion} count={7} />
		<StandardCard theme={ArticleSpecial.SpecialReport} count={7} />
	</>
);

export default {
	component: KeyEventCard,
	title: 'Components/KeyEventCard',
};

export { Summary, KeyEvent, Multiple };
