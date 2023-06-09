/**
 * Find ad slots
 *
 * Returns a list of indexes *after* which ads should be directly
 * placed.
 *
 * Ads are placed:
 *
 * * sufficiently far from other ads (isReadyForAd)
 * * sufficiently far from non-text elements (NONTEXT_BUFFER_[FWD|BWD])
 * * non adjacent to small (SMALL_PARA_CHARS) paragraphs
 *
 * These tests apply forwards and backwards, though in the case of
 * non-text buffers, the values differ.
 *
 * Where the above tests are met, we say there is adequate 'buffer'
 * around the ad and it can be placed.
 */

import type { FEElement } from '../../types/content';

interface ElementWithLength {
	element: FEElement;
	length: number;
}

export const AD_LIMIT = 8;
export const SMALL_PARA_CHARS = 50;
const NONTEXT_BUFFER_FORWARD = 300;
const NONTEXT_BUFFER_BACKWARD = 200;

const isTextElement = (e: FEElement): boolean => {
	return e._type === 'model.dotcomrendering.pageElements.TextBlockElement';
};

export const getElementLength = (element: FEElement): number => {
	switch (element._type) {
		case 'model.dotcomrendering.pageElements.TextBlockElement':
			// we don't want to count html characters
			const htmlRegex = /(<([^>]+)>)/gi;
			return element.html.replace(htmlRegex, '').length;
		default:
			return 0; // for the purposes of ads we don't care how long other elements are
	}
};

const getElementsWithLength = (elements: FEElement[]): ElementWithLength[] => {
	return elements.map((e) => {
		return {
			element: e,
			length: getElementLength(e),
		};
	});
};

const getLengthOfFollowingTextElements = (
	elements: ElementWithLength[],
): number => {
	const firstNonTextIndex = elements.findIndex(
		(e) => !isTextElement(e.element),
	);

	return elements
		.slice(0, firstNonTextIndex)
		.map((e) => e.length)
		.reduce((a, b) => a + b, 0);
};

const suitableAdNeighbour = (e: ElementWithLength): boolean => {
	return isTextElement(e.element) && e.length > SMALL_PARA_CHARS;
};

const hasForwardBuffer = (
	elements: ElementWithLength[],
	index: number,
): boolean => {
	const forwardElements = elements.slice(index + 1, elements.length);
	const meetsThreshold =
		getLengthOfFollowingTextElements(forwardElements) >=
		NONTEXT_BUFFER_FORWARD;
	const noForwardsEmbeds =
		forwardElements.filter((e) => isTextElement(e.element)).length ===
		forwardElements.length;

	const enoughCharsForward = meetsThreshold || noForwardsEmbeds;

	const neighbour = elements[index];

	const neighbourSuitable = neighbour
		? suitableAdNeighbour(neighbour)
		: false;
	return enoughCharsForward && neighbourSuitable;
};

const hasBackwardBuffer = (
	elements: ElementWithLength[],
	index: number,
): boolean => {
	const backwardsElements = elements.slice(0, index).reverse();
	const meetsThreshold =
		getLengthOfFollowingTextElements(backwardsElements) >=
		NONTEXT_BUFFER_BACKWARD;
	const noBackwardsEmbeds =
		backwardsElements.filter((e) => isTextElement(e.element)).length ===
		backwardsElements.length;

	const enoughCharsBackward = meetsThreshold || noBackwardsEmbeds;

	const neighbour = elements[index];

	return !!neighbour && suitableAdNeighbour(neighbour) && enoughCharsBackward;
};

/**
 * There are some magic numbers here - obtained by eyeballing content. Feel free
 * to update them if you notice issues.
 */
const sufficientSpaceSinceLastAd = (
	charsSinceLastAd: number,
	paragraphsSinceLastAd: number,
): boolean => {
	return (
		(charsSinceLastAd > 700 && paragraphsSinceLastAd > 1) ||
		charsSinceLastAd > 900
	);
};

const hasSpaceForAd = (
	elements: ElementWithLength[],
	index: number,
	charsSinceLastAd: number,
	paragraphsSinceLastAd: number,
): boolean => {
	return (
		sufficientSpaceSinceLastAd(charsSinceLastAd, paragraphsSinceLastAd) &&
		hasBackwardBuffer(elements, index) &&
		hasForwardBuffer(elements, index)
	);
};

// Returns index of items to place ads *after*
export const findAdSlots = (elements: FEElement[]): number[] => {
	let charsSinceLastAd = 0;
	let paragraphsSinceLastAd = 0;
	let adCount = 0;
	const adSlots = [];

	const elementsWithLength = getElementsWithLength(elements);

	for (let i = 0; i < elementsWithLength.length; i += 1) {
		const currentElement = elements[i];
		const currentElementWithLength = elementsWithLength[i];

		if (
			currentElement &&
			currentElementWithLength &&
			adCount < AD_LIMIT &&
			isTextElement(currentElement)
		) {
			charsSinceLastAd += currentElementWithLength.length;

			if (
				hasSpaceForAd(
					elementsWithLength,
					i,
					charsSinceLastAd,
					paragraphsSinceLastAd,
				)
			) {
				adSlots.push(i - 1);
				charsSinceLastAd = 0;
				paragraphsSinceLastAd = 0;
				adCount += 1;
			} else {
				paragraphsSinceLastAd += 1;
			}
		}
	}
	return adSlots;
};

// Returns index of items to place ads *after*
export const findBlockAdSlots = (blocks: any[]): number[] => {
	const maxAds = 8;

	// Place slots every five elements, but not at the beginning. Limit to
	// maxAds.
	return blocks
		.map((_, i) => i)
		.filter((i) => i !== 0 && i % 5 === 0)
		.map((i) => i - 1)
		.slice(0, maxAds);
};
