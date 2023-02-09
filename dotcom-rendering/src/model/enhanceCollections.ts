import type { DCRCollectionType, FECollectionType } from '../types/front';
import type { EditionId } from '../web/lib/edition';
import { decideContainerPalette } from './decideContainerPalette';
import { enhanceCards } from './enhanceCards';
import { enhanceTreats } from './enhanceTreats';
import { groupCards } from './groupCards';

const FORBIDDEN_CONTAINERS = [
	'Palette styles new do not delete',
	'culture-treat',
	'newsletter treat',
];
const isSupported = (collection: FECollectionType): boolean =>
	!FORBIDDEN_CONTAINERS.includes(collection.displayName);

export const enhanceCollections = (
	collections: FECollectionType[],
	editionId: EditionId,
	pageId: string,
	onPageDescription?: string,
): DCRCollectionType[] => {
	return collections.filter(isSupported).map((collection, index) => {
		const { id, displayName, collectionType, hasMore, href, description } =
			collection;
		const containerPalette = decideContainerPalette(
			collection.config.metadata?.map((meta) => meta.type),
		);
		return {
			id,
			displayName,
			description:
				onPageDescription && index === 0
					? onPageDescription
					: description,
			collectionType,
			href,
			containerPalette,
			grouped: groupCards(
				collectionType,
				collection.curated,
				collection.backfill,
				containerPalette,
			),
			curated: enhanceCards(collection.curated, containerPalette),
			backfill: enhanceCards(collection.backfill, containerPalette),
			treats: enhanceTreats(
				collection.treats,
				displayName,
				editionId,
				pageId,
			),
			config: {
				showDateHeader: collection.config.showDateHeader,
			},
			canShowMore: hasMore && !collection.config.hideShowMore,
		};
	});
};
