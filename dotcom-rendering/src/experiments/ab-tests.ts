import type { ABTest } from '@guardian/ab-core';
import { abTestTest } from './tests/ab-test-test';
import { blockSupporterRevenueMessagingSport } from './tests/block-supporter-revenue-messaging-sport';
import { consentlessAds } from './tests/consentless-ads';
import { integrateIma } from './tests/integrate-ima';
import { mastheadWithHighlights } from './tests/masthead-with-highlights';
import { mpuWhenNoEpic } from './tests/mpu-when-no-epic';
import { signInGateAlternativeWording } from './tests/sign-in-gate-alternative-wording';
import { signInGateMainControl } from './tests/sign-in-gate-main-control';
import { signInGateMainVariant } from './tests/sign-in-gate-main-variant';
import { updatedHeaderDesign } from './tests/updated-header-design';

// keep in sync with ab-tests in frontend
// https://github.com/guardian/frontend/tree/main/static/src/javascripts/projects/common/modules/experiments/ab-tests.ts
export const tests: ABTest[] = [
	abTestTest,
	signInGateMainVariant,
	signInGateMainControl,
	signInGateAlternativeWording,
	consentlessAds,
	integrateIma,
	mpuWhenNoEpic,
	blockSupporterRevenueMessagingSport,
	updatedHeaderDesign,
	mastheadWithHighlights,
];
