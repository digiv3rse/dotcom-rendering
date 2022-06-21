import type { ABTest } from '@guardian/ab-core';
import { abTestTest } from './tests/ab-test-test';
import { commercialEndOfQuarter2Test } from './tests/commercial-end-of-quarter-2-test';
import { commercialLazyLoadMarginReloaded } from './tests/commercial-lazy-load-margin-reloaded';
import {
	newsletterMerchUnitLighthouseControl,
	newsletterMerchUnitLighthouseVariants,
} from './tests/newsletter-merch-unit-test';
import { scrollDepth } from './tests/scroll-depth';
import { signInGateMainControl } from './tests/sign-in-gate-main-control';
import { signInGateMainVariant } from './tests/sign-in-gate-main-variant';

// keep in sync with ab-tests in frontend
// https://github.com/guardian/frontend/tree/main/static/src/javascripts/projects/common/modules/experiments/ab-tests.ts
export const tests: ABTest[] = [
	abTestTest,
	signInGateMainVariant,
	signInGateMainControl,
	newsletterMerchUnitLighthouseControl,
	newsletterMerchUnitLighthouseVariants,
	commercialEndOfQuarter2Test,
	commercialLazyLoadMarginReloaded,
	scrollDepth,
];
