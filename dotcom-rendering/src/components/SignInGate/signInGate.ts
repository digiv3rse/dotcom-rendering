import type { ABTest } from '@guardian/ab-core';
// Sign in Gate A/B Tests
import { signInGateCopyTestRepeatSept2023 } from '../../experiments/tests/sign-in-gate-copy-test-variants';
import { signInGateMainControl } from '../../experiments/tests/sign-in-gate-main-control';
import { signInGateMainVariant } from '../../experiments/tests/sign-in-gate-main-variant';
// Sign in Gate Types
import { signInGateComponent as gateMainControl } from './gates/main-control';
import { signInGateComponent as gateMainVariant } from './gates/main-variant';
import { signInGateCopyTestRepeatSept2023Component } from './gates/sign-in-gate-copy-test-repeat-sept2023';
import type { SignInGateTestMap } from './types';

/* When adding a new test, you need to add the test name to the tests array below,
   and add a entry for each variant that maps it to a SignInGateComponent in
   signInGateTestVariantToGateMapping, and in turn match each test id to an component
   id in signInGateTestIdToComponentId
*/
export const signInGateTests: ReadonlyArray<ABTest> = [
	signInGateMainVariant,
	signInGateMainControl,
	signInGateCopyTestRepeatSept2023,
];

export const signInGateTestVariantToGateMapping: SignInGateTestMap = {
	'main-control-4': gateMainControl,
	'main-variant-4': gateMainVariant,
	'quick-and-easy': signInGateCopyTestRepeatSept2023Component,
	'take-a-moment': signInGateCopyTestRepeatSept2023Component,
};

// Component Id does not need to match gate test name, as ab test info passed separately to ophan
// Consider Id name relevant to the gate component or design. Use snake_case
export const signInGateTestIdToComponentId: { [key: string]: string } = {
	SignInGateMainVariant: 'main_variant_4',
	SignInGateMainControl: 'main_control_4',
	SignInGateCopyTestRepeatSept2023: 'sign_in_gate_copy_test_repeat_sept2023',
};
