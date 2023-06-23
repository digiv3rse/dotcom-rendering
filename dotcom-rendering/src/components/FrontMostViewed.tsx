import type { EditionId } from '../lib/edition';
import type { DCRFrontCard } from '../types/front';
import type { TrailTabType, TrailType } from '../types/trails';
import { Island } from './Island';
import { localisedTitle } from './Localisation';
import { MostPopularFooterGrid } from './MostPopularFooterGrid';
import { MostViewedFooter } from './MostViewedFooter.importable';
import { MostViewedFooterLayout } from './MostViewedFooterLayout';

type Props = {
	trails: DCRFrontCard[];
	mostViewed: TrailType[];
	mostCommented?: TrailType;
	mostShared?: TrailType;
	displayName: string;
	isNetworkFront: boolean;
	deeplyRead?: TrailType[];
	editionId?: EditionId;
	hasPageSkin?: boolean;
};

export const FrontMostViewed = ({
	trails,
	mostViewed,
	mostCommented,
	mostShared,
	displayName,
	isNetworkFront,
	deeplyRead,
	editionId,
	hasPageSkin,
}: Props) => {
	const showMostViewedTab = !isNetworkFront && !!mostViewed.length;
	const sectionName = displayName.replace('Most viewed ', '');

	const tabs: TrailTabType[] = [
		{
			heading: localisedTitle(sectionName, editionId),
			trails: trails.slice(0, 10),
		},
	];

	if (showMostViewedTab) {
		tabs.push({
			heading: 'Across the guardian',
			trails: mostViewed,
		});
	}

	// Only render most popular if it's a network front
	// and if deeply read trail list is not empty
	const deeplyReadType: TrailTabType | undefined =
		isNetworkFront && deeplyRead && deeplyRead.length > 0
			? {
					heading: 'Deeply read',
					trails: deeplyRead,
			  }
			: undefined;

	const mostViewedItems = tabs.length > 0 ? tabs[0] : undefined;
	const showMostPopular = !!deeplyReadType && !!mostViewedItems;

	return (
		<MostViewedFooterLayout hasPageSkin={hasPageSkin}>
			{/* We only need hydration if there are multiple tabs */}
			{showMostViewedTab ? (
				<Island deferUntil="visible">
					<MostViewedFooter
						tabs={tabs}
						sectionName="Most viewed"
						mostCommented={mostCommented}
						mostShared={mostShared}
						hasPageSkin={hasPageSkin}
					/>
				</Island>
			) : showMostPopular ? (
				<MostPopularFooterGrid
					mostViewed={mostViewedItems}
					deeplyRead={deeplyReadType}
					sectionName="Most popular"
					hasPageSkin={hasPageSkin}
				/>
			) : (
				<MostViewedFooter
					tabs={tabs}
					sectionName="Most viewed"
					mostCommented={mostCommented}
					mostShared={mostShared}
					hasPageSkin={hasPageSkin}
				/>
			)}
		</MostViewedFooterLayout>
	);
};
