import type { ABTest } from '@guardian/ab-core';

export const shadyPieClickThrough: ABTest = {
	id: 'ShadyPieClickThrough',
	start: '2022-09-26',
	expiry: '2022-10-25',
	author: 'Emma Imber',
	description:
		'Test the click through rate of the new labs shady pie component',
	audience: 2 / 100,
	audienceOffset: 0,
	audienceCriteria: 'All pageviews',
	successMeasure:
		'Getting a statistically significant measure of the click through rate',
	canRun: () => true,
	variants: [
		{
			id: 'variant',
			test: (): void => {},
		},
	],
};
