import { JSDOM } from 'jsdom';
import type { FEElement } from '../types/content';

const isDinkus = (element: FEElement): boolean => {
	// Classic dinkus do not trigger dropcaps
	if (
		element._type !==
			'model.dotcomrendering.pageElements.SubheadingBlockElement' &&
		element._type !== 'model.dotcomrendering.pageElements.TextBlockElement'
	)
		return false;

	const frag = JSDOM.fragment(element.html);
	if (!frag.firstChild) return false;
	// A dinkus is can be spaced or unspaced
	return (
		frag.textContent === '***' ||
		frag.textContent === '* * *' ||
		frag.textContent === '•••' ||
		frag.textContent === '• • •'
	);
};

const checkForDividers = (elements: FEElement[]): FEElement[] => {
	// checkForDividers loops the array of article elements looking for star flags and
	// enhancing the data accordingly. In short, if a h2 tag is equal to * * * then we
	// insert a divider and any the text element immediately afterwards should have dropCap
	// set to true
	const enhanced: FEElement[] = [];
	elements.forEach((element, i) => {
		const previous = elements[i - 1];

		if (i === 0) {
			// Always pass first element through
			enhanced.push(element);
		} else if (isDinkus(element)) {
			// If this element is a dinkus, replace it with a divider
			enhanced.push({
				_type: 'model.dotcomrendering.pageElements.DividerBlockElement',
			});
		} else if (
			previous &&
			// If the previous element was a dinkus and this one is a text block, set it's dropCap flag
			isDinkus(previous) &&
			element._type ===
				'model.dotcomrendering.pageElements.TextBlockElement'
		) {
			enhanced.push({
				...element,
				dropCap: true,
			});
		} else {
			// Otherwise, do nothing
			enhanced.push(element);
		}
	});
	return enhanced;
};

export const enhanceDividers = (blocks: Block[]): Block[] =>
	blocks.map((block: Block) => {
		return {
			...block,
			elements: checkForDividers(block.elements),
		};
	});
