import type { ABTest } from '@guardian/ab-core';
import { abTestTest } from './tests/ab-test-test';
import { billboardsInMerch } from './tests/billboards-in-merch';
import { consentlessAds } from './tests/consentless-ads';
import { integrateIma } from './tests/integrate-ima';
import { liveblogDesktopOutstream } from './tests/liveblog-desktop-outstream';
import {
	newsletterMerchUnitLighthouseControl,
	newsletterMerchUnitLighthouseVariants,
} from './tests/newsletter-merch-unit-test';
import { noCarrotAdsNearNewsletterSignupBlocks } from './tests/no-carrot-ads-near-newsletter-signup-blocks';
import { signInGateMainControl } from './tests/sign-in-gate-main-control';
import { signInGateMainVariant } from './tests/sign-in-gate-main-variant';
import { teadsCookieless } from './tests/teads-cookieless';
import {signInGateCopyTestVariants} from "./tests/sign-in-gate-copy-test-variants";

// keep in sync with ab-tests in frontend
// https://github.com/guardian/frontend/tree/main/static/src/javascripts/projects/common/modules/experiments/ab-tests.ts
export const tests: ABTest[] = [
	abTestTest,
	signInGateMainVariant,
	signInGateMainControl,
	signInGateCopyTestVariants,
	newsletterMerchUnitLighthouseControl,
	newsletterMerchUnitLighthouseVariants,
	consentlessAds,
	integrateIma,
	liveblogDesktopOutstream,
	teadsCookieless,
	billboardsInMerch,
	noCarrotAdsNearNewsletterSignupBlocks,
];
