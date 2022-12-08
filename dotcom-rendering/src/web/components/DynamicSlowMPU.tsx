import { Hide } from '@guardian/source-react-components';
import type { DCRContainerPalette, DCRGroupedTrails } from '../../types/front';
import type { TrailType } from '../../types/trails';
import {
	Card25Media25Tall,
	Card33Media33,
	Card50Media50,
	CardDefault,
	CardDefaultMediaMobile,
} from '../lib/cardWrappers';
import { Card50_Card50, Card75_Card25 } from '../lib/dynamicSlices';
import { AdSlot } from './AdSlot';
import { LI } from './Card/components/LI';
import { UL } from './Card/components/UL';

type Props = {
	groupedTrails: DCRGroupedTrails;
	containerPalette?: DCRContainerPalette;
	showAge?: boolean;
	index: number;
};

/* .___________.___________.___________.
 * |###########|___________|           |
 * |           |___________|    MPU    |
 * |___________|___________|___________|
 */
const Card33_ColumnOfThree33_Ad33 = ({
	cards,
	containerPalette,
	showAge,
	index,
}: {
	cards: TrailType[];
	containerPalette?: DCRContainerPalette;
	showAge?: boolean;
	index: number;
}) => {
	const card33 = cards.slice(0, 1);
	const cards33 = cards.slice(1, 4);

	return (
		<UL direction="row">
			{card33.map((card) => (
				<LI percentage="33.333%" padSides={true} key={card.url}>
					<Card33Media33
						trail={card}
						containerPalette={containerPalette}
						showAge={showAge}
					/>
				</LI>
			))}

			<LI
				percentage="33.333%"
				showDivider={true}
				containerPalette={containerPalette}
			>
				<UL direction="column">
					{cards33.map((card) => (
						<LI padSides={true} key={card.url}>
							<CardDefault
								trail={card}
								containerPalette={containerPalette}
								showAge={showAge}
							/>
						</LI>
					))}
				</UL>
			</LI>
			<LI percentage="33.333%">
				<Hide until="tablet">
					<AdSlot position="inline" index={index} />
				</Hide>
			</LI>
		</UL>
	);
};

/* ._________________._________________.
 * |_###_____________|                 |
 * |_###_____________|       MPU       |
 * |_###_____________|_________________|
 */
const ColumnOfThree50_Ad50 = ({
	cards,
	containerPalette,
	showAge,
	index,
}: {
	cards: TrailType[];
	containerPalette?: DCRContainerPalette;
	showAge?: boolean;
	index: number;
}) => {
	const cards50 = cards.slice(0, 3);

	return (
		<UL direction="row">
			<LI percentage="50%">
				<UL direction="column">
					{cards50.map((card) => (
						<LI padSides={true} key={card.url}>
							<CardDefaultMediaMobile
								trail={card}
								containerPalette={containerPalette}
								showAge={showAge}
							/>
						</LI>
					))}
				</UL>
			</LI>
			<LI percentage="50%">
				<Hide until="tablet">
					<AdSlot position="inline" index={index} />
				</Hide>
			</LI>
		</UL>
	);
};

/* ._________________.________.________.
 * |#################|########|########|
 * |                 |        |        |
 * |_________________|________|________|
 */
const Card50_Card25_Card25 = ({
	cards,
	containerPalette,
	showAge,
}: {
	cards: TrailType[];
	containerPalette?: DCRContainerPalette;
	showAge?: boolean;
}) => {
	const card50 = cards.slice(0, 1);
	const cards25 = cards.slice(1, 3);

	return (
		<UL direction="row" padBottom={true}>
			{card50.map((card) => (
				<LI percentage="50%" padSides={true} key={card.url}>
					<Card50Media50
						trail={card}
						containerPalette={containerPalette}
						showAge={showAge}
					/>
				</LI>
			))}
			{cards25.map((card) => (
				<LI
					percentage="25%"
					padSides={true}
					showDivider={true}
					containerPalette={containerPalette}
					key={card.url}
				>
					<Card25Media25Tall
						trail={card}
						containerPalette={containerPalette}
						showAge={showAge}
					/>
				</LI>
			))}
		</UL>
	);
};

/**
 * DynamicSlowMPU
 *
 * This container only allows big and standard cards (from groupedTrails)
 *
 * Layout is dynamic deopending on the number of big cards. You're only
 * allowed to have 2 or 3 big cards. If you pass 1 a standard card will
 * get promoted to make two bigs. If you pass more than 3 bigs then the
 * extras will get demoted to standard.
 *
 * If you pass no bigs at all the top slice will not render and a special
 * 3 column layout is used for the remaining slice.
 *
 */
export const DynamicSlowMPU = ({
	groupedTrails,
	containerPalette,
	showAge,
	index,
}: Props) => {
	let layout: 'noBigs' | 'twoBigs' | 'twoBigsBoosted' | 'threeBigs';
	let bigCards: TrailType[] = [];
	let standardCards: TrailType[] = [];
	switch (groupedTrails.big.length) {
		case 0: {
			standardCards = groupedTrails.standard;
			layout = 'noBigs';
			break;
		}
		case 1: {
			// If there is only one big item a standard item is promoted such that
			// there is always at least two
			const promoted = groupedTrails.standard.slice(0, 1);
			bigCards = [...groupedTrails.big, ...promoted];
			standardCards = groupedTrails.standard.slice(1);
			layout = 'twoBigs';
			break;
		}
		case 2: {
			bigCards = groupedTrails.big;
			standardCards = groupedTrails.standard;
			if (groupedTrails.big[0]?.isBoosted) {
				layout = 'twoBigsBoosted';
			} else {
				layout = 'twoBigs';
			}
			break;
		}
		case 3: {
			bigCards = groupedTrails.big;
			standardCards = groupedTrails.standard;
			layout = 'threeBigs';
			break;
		}
		default: {
			// If there are more than three big cards, these extra bigs are demoted to
			// standard.
			const demoted = groupedTrails.big.slice(3);
			standardCards = [...demoted, ...groupedTrails.standard];
			bigCards = groupedTrails.big.slice(0, 3);
			layout = 'threeBigs';
		}
	}

	switch (layout) {
		case 'noBigs': {
			return (
				<Card33_ColumnOfThree33_Ad33
					cards={standardCards}
					containerPalette={containerPalette}
					showAge={showAge}
					index={index}
				/>
			);
		}
		case 'twoBigs': {
			return (
				<>
					<Card50_Card50
						cards={bigCards}
						containerPalette={containerPalette}
						showAge={showAge}
					/>
					<ColumnOfThree50_Ad50
						cards={standardCards}
						containerPalette={containerPalette}
						showAge={showAge}
						index={index}
					/>
				</>
			);
		}
		case 'twoBigsBoosted': {
			return (
				<>
					<Card75_Card25
						cards={bigCards}
						containerPalette={containerPalette}
						showAge={showAge}
					/>
					<ColumnOfThree50_Ad50
						cards={standardCards}
						containerPalette={containerPalette}
						showAge={showAge}
						index={index}
					/>
				</>
			);
		}
		case 'threeBigs': {
			return (
				<>
					<Card50_Card25_Card25
						cards={bigCards}
						containerPalette={containerPalette}
						showAge={showAge}
					/>
					<ColumnOfThree50_Ad50
						cards={standardCards}
						containerPalette={containerPalette}
						showAge={showAge}
						index={index}
					/>
				</>
			);
		}
	}
};
