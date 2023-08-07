import { Hide } from '@guardian/source-react-components';
import { Card33Media33, CardDefault } from '../lib/cardWrappers.tsx';
import { type Tuple } from '../lib/tuple.ts';
import type { DCRFrontCard } from '../types/front.ts';
import type { GroupedTrailsFastMpu } from '../types/tagFront.ts';
import { AdSlot } from './AdSlot.tsx';
import { LI } from './Card/components/LI.tsx';
import { UL } from './Card/components/UL.tsx';

const TwoCard = ({
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

const FourCard = ({
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

const SixCard = ({
	trails,
	adIndex,
}: {
	trails: Tuple<DCRFrontCard, 6>;
	adIndex: number;
}) => {
	return (
		<UL direction="row">
			<LI percentage="33.333%">
				<UL direction="column">
					<LI padSides={true}>
						<CardDefault trail={trails[0]} showAge={true} />
					</LI>
					<LI padSides={true}>
						<CardDefault trail={trails[1]} showAge={true} />
					</LI>
					<LI padSides={true}>
						<CardDefault trail={trails[2]} showAge={true} />
					</LI>
				</UL>
			</LI>
			<LI percentage="33.333%">
				<UL direction="column" showDivider={true}>
					<LI padSides={true}>
						<CardDefault trail={trails[3]} showAge={true} />
					</LI>
					<LI padSides={true}>
						<CardDefault trail={trails[4]} showAge={true} />
					</LI>
					<LI padSides={true}>
						<CardDefault trail={trails[5]} showAge={true} />
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

const NineCard = ({
	trails,
	adIndex,
}: {
	trails: Tuple<DCRFrontCard, 9>;
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
				<LI percentage="33.333%">
					<UL direction="column">
						<LI padSides={true}>
							<CardDefault trail={trails[3]} showAge={true} />
						</LI>
						<LI padSides={true}>
							<CardDefault trail={trails[4]} showAge={true} />
						</LI>
						<LI padSides={true}>
							<CardDefault trail={trails[5]} showAge={true} />
						</LI>
					</UL>
				</LI>
				<LI percentage="33.333%">
					<UL direction="column" showDivider={true}>
						<LI padSides={true}>
							<CardDefault trail={trails[6]} showAge={true} />
						</LI>
						<LI padSides={true}>
							<CardDefault trail={trails[7]} showAge={true} />
						</LI>
						<LI padSides={true}>
							<CardDefault trail={trails[8]} showAge={true} />
						</LI>
					</UL>
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

type Props = GroupedTrailsFastMpu & {
	adIndex: number;
};

export const TagFrontFastMpu = ({ trails, adIndex }: Props) => {
	switch (trails.length) {
		case 2:
			return <TwoCard trails={trails} adIndex={adIndex} />;
		case 4:
			return <FourCard trails={trails} adIndex={adIndex} />;
		case 6:
			return <SixCard trails={trails} adIndex={adIndex} />;
		case 9:
			return <NineCard trails={trails} adIndex={adIndex} />;
	}
};
