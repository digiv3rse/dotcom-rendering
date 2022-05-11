import { ABTest } from '@guardian/ab-core';
import { abTestTest } from './tests/ab-test-test';
import { signInGateMainVariant } from './tests/sign-in-gate-main-variant';
import { signInGateMainControl } from './tests/sign-in-gate-main-control';
import {
	newsletterMerchUnitLighthouseControl,
	newsletterMerchUnitLighthouseVariants,
} from './tests/newsletter-merch-unit-test';
import { commercialGptLazyLoad } from './tests/commercial-gpt-lazy-load';
import { commercialLazyLoadMargin } from './tests/commercial-lazy-load-margin';
import { prebidPriceGranularity } from './tests/prebid-price-granularity';
import { wellbeingGateTest } from './tests/wellbeing-gate';

// keep in sync with ab-tests in frontend
// https://github.com/guardian/frontend/tree/main/static/src/javascripts/projects/common/modules/experiments/ab-tests.ts
export const tests: ABTest[] = [
	abTestTest,
	wellbeingGateTest,
	signInGateMainVariant,
	signInGateMainControl,
	newsletterMerchUnitLighthouseControl,
	newsletterMerchUnitLighthouseVariants,
	commercialGptLazyLoad,
	commercialLazyLoadMargin,
	prebidPriceGranularity,
];
