import type { ABTest } from '@guardian/ab-core';
import { abTestTest } from './tests/ab-test-test';
import { confiantSDKUpdateTest } from './tests/confiant-sdk-update';
import { consentlessAds } from './tests/consentless-ads';
import { integrateIMA } from './tests/integrate-ima';
import {
	newsletterMerchUnitLighthouseControl,
	newsletterMerchUnitLighthouseVariants,
} from './tests/newsletter-merch-unit-test';
import { shadyPieClickThrough } from './tests/shady-pie-click-through';
import { signInGateMainControl } from './tests/sign-in-gate-main-control';
import { signInGateMainVariant } from './tests/sign-in-gate-main-variant';
import {
	signInGateMandatoryLongTestRunAunz,
	signInGateMandatoryLongTestRunEu,
	signInGateMandatoryLongTestRunNa,
	signInGateMandatoryLongTestRunUk,
} from './tests/sign-in-gate-mandatory-long-testrun';

// keep in sync with ab-tests in frontend
// https://github.com/guardian/frontend/tree/main/static/src/javascripts/projects/common/modules/experiments/ab-tests.ts
export const tests: ABTest[] = [
	abTestTest,
	signInGateMainVariant,
	signInGateMainControl,
	newsletterMerchUnitLighthouseControl,
	newsletterMerchUnitLighthouseVariants,
	consentlessAds,
	integrateIMA,
	signInGateMandatoryLongTestRunUk,
	signInGateMandatoryLongTestRunAunz,
	signInGateMandatoryLongTestRunEu,
	signInGateMandatoryLongTestRunNa,
	shadyPieClickThrough,
	confiantSDKUpdateTest,
];
