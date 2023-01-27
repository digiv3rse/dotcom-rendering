import type { ABTest } from '@guardian/ab-core';
// Sign in Gate A/B Tests
import { signInGateCopyTest } from '../../experiments/tests/sign-in-gate-copy-test-variants';
import { signInGateMainControl } from '../../experiments/tests/sign-in-gate-main-control';
import { signInGateMainVariant } from '../../experiments/tests/sign-in-gate-main-variant';
// Sign in Gate Types
import { signInGateComponent as gateMainControl } from './gates/main-control';
import { signInGateComponent as gateMainVariant } from './gates/main-variant';
import { signInGateCopyTestJan2023Component } from './gates/sign-in-gate-copy-test-jan2023';
import type { SignInGateTestMap } from './types';


/* When adding a new test, you need to add the test name to the tests array below,
   and add a entry for each variant that maps it to a SignInGateComponent in
   signInGateTestVariantToGateMapping, and in turn match each test id to an component
   id in signInGateTestIdToComponentId
*/
export const signInGateTests: ReadonlyArray<ABTest> = [
	signInGateMainVariant,
	signInGateMainControl,
	signInGateCopyTest,
];

export const signInGateTestVariantToGateMapping: SignInGateTestMap = {
	'main-control-4': gateMainControl,
	'main-variant-4': gateMainVariant,
	'sign-in-gate-copy-quick-and-easy': signInGateCopyTestJan2023Component,
	'sign-in-gate-copy-take-a-moment': signInGateCopyTestJan2023Component,
};

// Component Id does not need to match gate test name, as ab test info passed separately to ophan
// Consider Id name relevant to the gate component or design. Use snake_case
export const signInGateTestIdToComponentId: { [key: string]: string } = {
	SignInGateMainVariant: 'main_variant_4',
	SignInGateMainControl: 'main_control_4',
	SignInGateCopyVariant: 'sign_in_gate_copy_test_variants',
};
