import { css, ThemeProvider } from '@emotion/react';
import {
	border,
	from,
	headline,
	neutral,
	until,
} from '@guardian/source-foundations';
import {
	Button,
	buttonThemeBrandAlt,
	SvgMinus,
	SvgPlus,
} from '@guardian/source-react-components';
import { useState } from 'react';
import type { Palette } from 'src/types/palette';
import type { TrailTabType } from 'src/types/trails';
import { MostViewedFooterItem } from './MostViewedFooterItem';

type Props = {
	data: TrailTabType[];
	palette: Palette;
};

const ColumnHeading = ({ heading }: { heading: string }) => {
	switch (heading.toLowerCase()) {
		case 'most popular':
			return <span>Most popular</span>;
		case `across the&nbsp;guardian`:
			return <span>Across The Guardian</span>;
		default:
			return <span>Deeply Read</span>;
	}
};

const thinGreySolid = `1px solid ${border.secondary}`;

const columnHeading = (index: number) => {
	return css`
		${headline.xxxsmall()};
		background: transparent;
		border-bottom: ${thinGreySolid};
		border-left: ${index === 0 ? thinGreySolid : 'none'};
		border-right: ${thinGreySolid};
		color: ${neutral[7]};
		display: block;
		font-weight: 600;
		margin: 0;
		min-height: 36px;
		padding-right: 6px;
		padding-left: 6px;
		padding-top: 6px;
		text-align: left;
		text-decoration: none;
		width: 100%;

		${until.leftCol} {
			border-top: ${thinGreySolid};
			border-bottom: 0;
		}
	`;
};

const gridContainer = css`
	position: relative;

	display: grid;
	grid-template-columns: repeat(1, 1fr);
	grid-auto-flow: row dense;
	gap: 0.25rem;

	list-style-type: none;
	grid-template-areas:
		'most'
		'deeply';

	${from.tablet} {
		grid-template-columns: repeat(2, 1fr);
		grid-template-areas: 'most deeply';
	}
`;

const gridColumn = (name: 'most' | 'deeply') => css`
	grid-column: ${name};
`;

const item = (
	column: 'most' | 'deeply',
	bothExpanded: boolean,
	mostExpanded: boolean,
	deeplyExpanded: boolean,
) => {
	const styles = [
		// By default, make sure display is none for both mobile & desktop views
		css`
			display: none;
			${from.tablet} {
				display: none;
			}
		`,
	];

	if (bothExpanded) {
		styles.push(css`
			${from.tablet} {
				display: list-item;
			}
		`);
	}
	if (mostExpanded && deeplyExpanded) {
		styles.push(css`
			display: list-item;
		`);
	}
	if (
		(mostExpanded && column === 'most') ||
		(deeplyExpanded && column === 'deeply')
	) {
		styles.push(
			css`
				display: list-item;
			`,
		);
	}

	return styles;
};

export const MostViewedFooterGridExpandable = ({ data }: Props) => {
	const [bothExpanded, setBothExpanded] = useState<boolean>(false);
	const [mostExpanded, setMostExpanded] = useState<boolean>(false);
	const [deeplyExpanded, setDeeplyExpanded] = useState<boolean>(false);

	return (
		<ol css={gridContainer}>
			{data.map((column, columnIndex) => {
				// const numberShown = bothExpanded ? 10 : 5;
				const columnName = columnIndex === 0 ? 'most' : 'deeply';
				const expanded =
					columnIndex === 0 ? mostExpanded : deeplyExpanded;
				const setExpanded =
					columnIndex === 0 ? setMostExpanded : setDeeplyExpanded;
				return (
					<>
						<li
							css={[
								gridColumn(columnName),
								columnHeading(columnIndex),
							]}
						>
							<ColumnHeading heading={column.heading} />
						</li>
						{column.trails.map((trail, trailIndex) => {
							return (
								<li
									css={[
										gridColumn(columnName),
										trailIndex >= 5 &&
											item(
												columnName,
												bothExpanded,
												mostExpanded,
												deeplyExpanded,
											),
									]}
								>
									<MostViewedFooterItem
										trail={trail}
										position={trailIndex + 1}
									/>
								</li>
							);
						})}
						<li css={gridColumn(columnName)}>
							<ThemeProvider theme={buttonThemeBrandAlt}>
								<Button
									cssOverrides={css`
										${from.tablet} {
											display: none;
										}
									`}
									priority="primary"
									icon={expanded ? <SvgMinus /> : <SvgPlus />}
									iconSide="right"
									onClick={() => setExpanded(!expanded)}
								>
									{!expanded ? 'Show All' : 'Show Fewer'}
								</Button>
							</ThemeProvider>
						</li>
					</>
				);
			})}
			<li
				css={css`
					grid-column-start: most;
					grid-column-end: deeply;
				`}
			>
				<ThemeProvider theme={buttonThemeBrandAlt}>
					<Button
						cssOverrides={css`
							${until.tablet} {
								display: none;
							}
						`}
						priority="primary"
						icon={bothExpanded ? <SvgMinus /> : <SvgPlus />}
						iconSide="right"
						onClick={() => setBothExpanded(!bothExpanded)}
					>
						{!bothExpanded ? 'Show All' : 'Show Fewer'}
					</Button>
				</ThemeProvider>
			</li>
		</ol>
	);
};
