import { Hide } from '@guardian/source-react-components';
import { Card33Media33, Card50Media50, CardDefault } from '../lib/cardWrappers';
import { isTuple, type Tuple } from '../lib/tuple';
import type { DCRFrontCard } from '../types/front';
import type { GroupedTrailsSlowMpu } from '../types/tagFront';
import { AdSlot } from './AdSlot';
import { LI } from './Card/components/LI';
import { UL } from './Card/components/UL';

type Props = GroupedTrailsSlowMpu & {
	adIndex: number;
};

export const TwoCard = ({
	trails,
	adIndex,
}: {
	trails: Tuple<DCRFrontCard, 2>;
	adIndex: number;
}) => {
	return (
		<UL direction="row">
			<LI percentage="33.333%" padSides={true}>
				<Card33Media33 trail={trails[0]} showAge={true} />
			</LI>
			<LI percentage="33.333%" padSides={true} showDivider={true}>
				<Card33Media33 trail={trails[1]} showAge={true} />
			</LI>
			<LI percentage="33.333%" padSides={true} showDivider={true}>
				<Hide until="tablet">
					<AdSlot position="inline" index={adIndex} />
				</Hide>
			</LI>
		</UL>
	);
};

export const FourCard = ({
	trails,
	adIndex,
}: {
	trails: Tuple<DCRFrontCard, 4>;
	adIndex: number;
}) => {
	return (
		<UL direction="row">
			<LI percentage="33.333%" padSides={true}>
				<Card33Media33 trail={trails[0]} showAge={true} />
			</LI>
			<LI percentage="33.333%">
				<UL direction="column" showDivider={true}>
					<LI padSides={true}>
						<CardDefault trail={trails[1]} showAge={true} />
					</LI>
					<LI padSides={true}>
						<CardDefault trail={trails[2]} showAge={true} />
					</LI>
					<LI padSides={true}>
						<CardDefault trail={trails[3]} showAge={true} />
					</LI>
				</UL>
			</LI>
			<LI percentage="33.333%" padSides={true} showDivider={true}>
				<Hide until="tablet">
					<AdSlot position="inline" index={adIndex} />
				</Hide>
			</LI>
		</UL>
	);
};

export const FiveCard = ({
	trails,
	adIndex,
}: {
	trails: Tuple<DCRFrontCard, 5>;
	adIndex: number;
}) => {
	return (
		<>
			<UL direction="row" padBottom={true}>
				<LI percentage="33.333%" padSides={true}>
					<Card33Media33 trail={trails[0]} showAge={true} />
				</LI>
				<LI percentage="33.333%" padSides={true} showDivider={true}>
					<Card33Media33 trail={trails[1]} showAge={true} />
				</LI>
				<LI percentage="33.333%" padSides={true} showDivider={true}>
					<Card33Media33 trail={trails[2]} showAge={true} />
				</LI>
			</UL>
			<UL direction="row">
				<LI percentage="33.333%" padSides={true}>
					<Card33Media33 trail={trails[3]} showAge={true} />
				</LI>
				<LI percentage="33.333%" padSides={true} showDivider={true}>
					<Card33Media33 trail={trails[4]} showAge={true} />
				</LI>
				<LI percentage="33.333%" padSides={true} showDivider={true}>
					<Hide until="tablet">
						<AdSlot position="inline" index={adIndex} />
					</Hide>
				</LI>
			</UL>
		</>
	);
};

export const SevenCards = ({
	trails,
	adIndex,
}: {
	trails: [...Tuple<DCRFrontCard, 7>, ...DCRFrontCard[]];
	adIndex: number;
}) => {
	return (
		<>
			<UL direction="row" padBottom={true}>
				<LI percentage="50%" padSides={true}>
					<Card50Media50 trail={trails[0]} showAge={true} />
				</LI>
				<LI percentage="50%" padSides={true} showDivider={true}>
					<Card50Media50 trail={trails[1]} showAge={true} />
				</LI>
			</UL>
			<UL direction="row" padBottom={true}>
				<LI percentage="33.333%" padSides={true}>
					<Card33Media33 trail={trails[2]} showAge={true} />
				</LI>
				<LI percentage="33.333%" padSides={true} showDivider={true}>
					<Card33Media33 trail={trails[3]} showAge={true} />
				</LI>
				<LI percentage="33.333%" padSides={true} showDivider={true}>
					<Card33Media33 trail={trails[4]} showAge={true} />
				</LI>
			</UL>
			<UL direction="row">
				<LI percentage="33.333%" padSides={true}>
					<Card33Media33 trail={trails[5]} showAge={true} />
				</LI>
				<LI percentage="33.333%" padSides={true} showDivider={true}>
					<Card33Media33 trail={trails[6]} showAge={true} />
				</LI>
				<LI percentage="33.333%" padSides={true} showDivider={true}>
					<Hide until="tablet">
						<AdSlot position="inline" index={adIndex} />
					</Hide>
				</LI>
			</UL>
		</>
	);
};

export const TagFrontSlowMpu = ({ trails, adIndex }: Props) => {
	switch (trails.length) {
		case 2:
			return <TwoCard trails={trails} adIndex={adIndex} />;
		case 4:
			return <FourCard trails={trails} adIndex={adIndex} />;
		case 5:
			return <FiveCard trails={trails} adIndex={adIndex} />;
		case 7:
			return <SevenCards trails={trails} adIndex={adIndex} />;
	}
};
