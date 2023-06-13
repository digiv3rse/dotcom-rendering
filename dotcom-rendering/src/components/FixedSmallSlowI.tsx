import type { DCRContainerPalette, DCRFrontCard } from '../types/front';
import { Card100Media75 } from '../lib/cardWrappers';
import { LI } from './Card/components/LI';
import { UL } from './Card/components/UL';

type Props = {
	trails: DCRFrontCard[];
	containerPalette?: DCRContainerPalette;
	showAge?: boolean;
};

export const FixedSmallSlowI = ({
	trails,
	containerPalette,
	showAge,
}: Props) => {
	const firstSlice100 = trails.slice(0, 1);

	return (
		<UL>
			{firstSlice100.map((card) => (
				<LI padSides={true} key={card.url}>
					<Card100Media75
						trail={card}
						containerPalette={containerPalette}
						showAge={showAge}
					/>
				</LI>
			))}
		</UL>
	);
};
