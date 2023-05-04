import type { ABTest } from '@guardian/ab-core';

export const integrateIma: ABTest = {
	id: 'IntegrateIma',
	start: '2022-07-14',
	expiry: '2023-07-03',
	author: 'Zeke Hunter-Green',
	description:
		'Test the commercial impact of replacing YouTube ads with Interactive Media Ads on first-party videos',
	audience: 0,
	audienceOffset: 0,
	audienceCriteria: 'Opt in',
	successMeasure:
		'IMA integration works as expected without adversely affecting pages with videos',
	canRun: () => true,
	variants: [
		{ id: 'control', test: (): void => {} },
		{ id: 'variant', test: (): void => {} },
	],
};
