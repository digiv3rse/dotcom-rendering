import type { ABTest } from '@guardian/ab-core';

export const signInGateCopyTest: ABTest = {
	id: 'SignInGateCopyTest',
	start: '2023-01-23',
	expiry: '2025-12-01',
	author: 'Lindsey Dew',
	description: 'TODO',
	audience: 0.1,
	audienceOffset: 0.0,
	successMeasure: 'Users sign in or create a Guardian account',
	audienceCriteria: 'TODO',
	dataLinkNames: 'SignInGateCopyTest',
	idealOutcome:
		'Increase the number of users signed in whilst running at a reasonable scale',
	showForSensitive: false,
	canRun: () => true,
	// take out sign-in-gate-copy
	variants: [
		{
			id: 'sign-in-gate-copy-quick-and-easy',
			test: (): void => {},
		},
		{
			id: 'sign-in-gate-copy-take-a-moment',
			test: (): void => {},
		}
	],
};
