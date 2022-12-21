import type { CAPIElement } from '../../types/content';
import { calculateBlockSize, shouldDisplayAd } from './liveblogAdSlots';

describe('calculateBlockSize', () => {
	const textElementOneLine: CAPIElement[] = [
		{
			elementId: '1',
			_type: 'model.dotcomrendering.pageElements.TextBlockElement',
			html: `<p>${'a'.repeat(39)}</p>`,
		},
	];

	const textElementTwoLines: CAPIElement[] = [
		{
			elementId: '1',
			_type: 'model.dotcomrendering.pageElements.TextBlockElement',
			html: `<p>${'a'.repeat(40)}</p>`,
		},
	];

	const multipleTextElements: CAPIElement[] = [
		{
			elementId: '1',
			_type: 'model.dotcomrendering.pageElements.TextBlockElement',
			html: `<p>${'a'.repeat(70)}</p>`,
		},
		{
			elementId: '2',
			_type: 'model.dotcomrendering.pageElements.TextBlockElement',
			html: `<p>${'a'.repeat(70)}</p>`,
		},
	];

	const youtubeElement: CAPIElement[] = [
		{
			_type: 'model.dotcomrendering.pageElements.YoutubeBlockElement',
			id: '1',
			assetId: '',
			elementId: '1',
			expired: false,
			mediaTitle: '',
		},
	];

	const defaultBlockSpacing = 75;
	const defaultElementSpacing = 12;

	describe('zero elements', () => {
		it('should return zero when there are zero elements', () => {
			expect(calculateBlockSize([])).toEqual(0);
		});
	});

	describe('text block elements', () => {
		const textLineHeight = 25.5;

		it('should return the correct height for varying line length', () => {
			expect(calculateBlockSize(textElementOneLine)).toEqual(
				textLineHeight + defaultBlockSpacing + defaultElementSpacing,
			);
			expect(calculateBlockSize(textElementTwoLines)).toEqual(
				2 * textLineHeight +
					defaultBlockSpacing +
					defaultElementSpacing,
			);
		});

		it('should return the correct height when there are multiple elements', () => {
			expect(calculateBlockSize(multipleTextElements)).toEqual(201);
		});
	});

	describe('youtube block elements', () => {
		it('should return the correct height', () => {
			expect(calculateBlockSize(youtubeElement)).toEqual(
				239 + defaultBlockSpacing + defaultElementSpacing,
			);
		});
	});
});

describe('shouldDisplayAd', () => {
	it('should NOT display an ad if this is the final block', () => {
		const block = 5;
		const totalBlocks = 5;
		const numAdsInserted = 1;
		const numPixelsWithoutAdvert = 5000;

		const result = shouldDisplayAd(
			block,
			totalBlocks,
			numAdsInserted,
			numPixelsWithoutAdvert,
		);

		expect(result).toBeFalsy();
	});

	it('should NOT insert another ad slot if we have reached the limit.', () => {
		const block = 5;
		const totalBlocks = 10;
		const numAdsInserted = 8;
		const numPixelsWithoutAdvert = 5000;

		const result = shouldDisplayAd(
			block,
			totalBlocks,
			numAdsInserted,
			numPixelsWithoutAdvert,
		);

		expect(result).toBeFalsy();
	});

	describe('inserting the first ad slot', () => {
		it('should display ad if no ad slots have been inserted and the number of pixels without an ad is more than 500', () => {
			const block = 5;
			const totalBlocks = 10;
			const numAdsInserted = 0;
			const numPixelsWithoutAdvert = 550;

			const result = shouldDisplayAd(
				block,
				totalBlocks,
				numAdsInserted,
				numPixelsWithoutAdvert,
			);

			expect(result).toBeTruthy();
		});

		it('should NOT display ad if number of pixels without an ad is less than 500', () => {
			const block = 5;
			const totalBlocks = 10;
			const numAdsInserted = 0;
			const numPixelsWithoutAdvert = 450;

			const result = shouldDisplayAd(
				block,
				totalBlocks,
				numAdsInserted,
				numPixelsWithoutAdvert,
			);

			expect(result).toBeFalsy();
		});
	});

	describe('inserting further ad slots', () => {
		it('should display ad if number of pixels without an ad is more than 1800', () => {
			const block = 5;
			const totalBlocks = 10;
			const numAdsInserted = 1;
			const numPixelsWithoutAdvert = 1850;

			const result = shouldDisplayAd(
				block,
				totalBlocks,
				numAdsInserted,
				numPixelsWithoutAdvert,
			);

			expect(result).toBeTruthy();
		});

		it('should NOT display ad if number of pixels without an ad is less than 1800', () => {
			const block = 5;
			const totalBlocks = 10;
			const numAdsInserted = 1;
			const numPixelsWithoutAdvert = 1750;

			const result = shouldDisplayAd(
				block,
				totalBlocks,
				numAdsInserted,
				numPixelsWithoutAdvert,
			);

			expect(result).toBeFalsy();
		});
	});
});
