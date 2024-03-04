import { ArticleDesign } from '@guardian/libs';
import type { AdPlaceholderBlockElement, FEElement } from '../types/content';
import type { RenderingTarget } from '../types/renderingTarget';

/**
 * Positioning rules:
 *
 * - Is further than 3 paragraphs in
 * - Is every 6 paragraphs
 * - No more than 15 ads in an article
 * - Last paragraph should not be followed by an ad
 */
const isSuitablePosition = (
	paragraphCounter: number,
	numberOfAdsInserted: number,
	isLastElement: boolean,
	isParagraph: boolean,
): boolean => {
	// Rules for ad placement
	const adEveryNParagraphs = 6;
	const firstAdIndex = 3;
	const maxAds = 15;

	// Don't insert more than `maxAds` ads
	if (numberOfAdsInserted >= maxAds) {
		return false;
	}

	// Don't insert advert in final position
	if (isLastElement) {
		return false;
	}

	// Insert an ad placeholder every `adEveryNParagraphs` paragraphs,
	// starting from the paragraph at `firstAdIndex` and only after a paragraph
	return (
		isParagraph &&
		(paragraphCounter - firstAdIndex) % adEveryNParagraphs === 0
	);
};

const isParagraph = (element: FEElement) =>
	element._type === 'model.dotcomrendering.pageElements.TextBlockElement';

const insertPlaceholder = (elements: FEElement[]): FEElement[] => {
	const placeholder: AdPlaceholderBlockElement = {
		_type: 'model.dotcomrendering.pageElements.AdPlaceholderBlockElement',
	};
	return [...elements, placeholder];
};

type ReducerAccumulator = {
	elements: FEElement[];
	paragraphCounter: number;
	numberOfAdsInserted: number;
};

/**
 * Inserts advert placeholders
 */
const insertAdPlaceholders = (elements: FEElement[]): FEElement[] => {
	const elementsWithReducerContext = elements.reduce(
		(
			prev: ReducerAccumulator,
			currentElement: FEElement,
			idx: number,
		): ReducerAccumulator => {
			const paragraphCounter = isParagraph(currentElement)
				? prev.paragraphCounter + 1
				: prev.paragraphCounter;

			const shouldInsertAd = isSuitablePosition(
				paragraphCounter,
				prev.numberOfAdsInserted,
				elements.length === idx + 1,
				isParagraph(currentElement),
			);

			const currentElements = [...prev.elements, currentElement];

			return {
				elements: shouldInsertAd
					? insertPlaceholder(currentElements)
					: currentElements,
				paragraphCounter,
				numberOfAdsInserted: shouldInsertAd
					? prev.numberOfAdsInserted + 1
					: prev.numberOfAdsInserted,
			};
		},
		// Initial value for reducer function
		{
			elements: [],
			paragraphCounter: 0,
			numberOfAdsInserted: 0,
		},
	);

	return elementsWithReducerContext.elements;
};

export const enhanceAdPlaceholders =
	(format: ArticleFormat, renderingTarget: RenderingTarget) =>
	(blocks: Block[]): Block[] =>
		renderingTarget === 'Apps' &&
		format.design !== ArticleDesign.LiveBlog &&
		format.design !== ArticleDesign.DeadBlog
			? blocks.map((b) => ({
					...b,
					elements: insertAdPlaceholders(b.elements),
			  }))
			: blocks;
