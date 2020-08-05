import { ABTest } from '@guardian/ab-core';

export const signInGateMainControl: ABTest = {
    id: 'SignInGateMainControl',
    start: '2020-05-20',
    expiry: '2020-12-01',
    author: 'Mahesh Makani',
    description:
        'Show sign in gate to 100% of users on 3rd article view of simple article templates, with higher priority over banners and epic. Control Audience.',
    audience: 0.09,
    audienceOffset: 0.9,
    successMeasure: 'N/A - User does not see gate, only to compare to variant.',
    audienceCriteria:
        '3rd article of the day, lower priority than consent banner, simple articles (not gallery, live etc.), not signed in, not shown after dismiss, not on help, info sections etc. Exclude iOS 9 and guardian-live-australia. Suppresses other banners, and appears over epics',
    dataLinkNames: 'SignInGateMain',
    idealOutcome:
        'Increase the number of users signed in whilst running at a reasonable scale',
    showForSensitive: false,
    canRun: () => true,
    variants: [
        {
            id: 'main-control-1',
            test: (): void => {},
        },
    ],
};
