import { isNonNullable } from '@guardian/libs';
import type { FECollectionType, FEFrontCard } from '../types/front';
import type { FETagType } from '../types/tag';

/**
 * Extracts sectionId from a given tag if its a section tag
 * @param tag
 * @returns a section ID or undefined
 */
const extractTagSectionId = (tag: FETagType): string | undefined => {
	if (tag.properties.id === 'uk/uk') {
		return 'uk-news';
	}

	const split = tag.properties.id.split('/');

	return split[0] === split[1] ? split[0] : undefined;
};

/**
 * Checks if a given tag is a section ID tag
 * @param tag
 * @returns a section ID or undefined
 */
const isNotSectionTag = (tag: FETagType): boolean => {
	const sectionId = extractTagSectionId(tag);

	return !(
		sectionId !== undefined &&
		tag.properties.sectionId !== undefined &&
		sectionId.includes(tag.properties.sectionId)
	);
};

/**
 * Gets all relevant tags filtered by properties
 * @param tags - The deduplicated trails
 * @returns An array of relevant tags
 */
const getTags = (trails: FEFrontCard[], pageId: string): FETagType[] =>
	trails
		.flatMap((trail) => trail.properties.maybeContent?.tags.tags)
		.filter(isNonNullable)
		.filter(isNotSectionTag)
		.filter((tag) => tag.properties.id !== pageId)
		.filter((tag) => {
			return (
				!!tag.properties.paidContentType?.includes('Keyword') ||
				!!tag.properties.paidContentType?.includes('Topic') ||
				tag.properties.tagType === 'Keyword'
			);
		});

/**
 * Sort tags by frequency
 * @param tags - Tags which you want to have filtered
 * @returns An array of tags which has been sorted by frequency
 */
const sortTags = (tag: FETagType[]): FETagType[] => {
	const counter: { [key: string]: [FETagType, number] } = {};

	tag.forEach((x) => {
		const id = x.properties.id;
		const count = counter[id]?.[1] ?? 0;

		counter[id] = [x, count + 1];
	});

	const sortedTags = Object.entries(counter).sort(
		(a, b) => b[1][1] - a[1][1],
	);

	return sortedTags.map((x) => x[1][0]);
};


export const extractTrendingTopicsFomFront = (
	collections: FECollectionType[],
	pageId: string,
): FETagType[] => {
	// Get a single array of all trails in the collections
	const trails = new Map<string, FEFrontCard>();

	collections
		.flatMap((collection) => [
			...collection.curated,
			...collection.backfill,
		])
		.forEach((card) =>
			trails.set(card.properties.maybeContentId ?? card.card.id, card),
		);

	return extractTrendingTopics([...trails.values()], pageId);
};

export const extractTrendingTopics = (trails: FEFrontCard[], pageId: string): FETagType[] => {
	const allTags = getTags(trails, pageId);
	const tags = sortTags(allTags).slice(0, 20);

	return tags;
};
