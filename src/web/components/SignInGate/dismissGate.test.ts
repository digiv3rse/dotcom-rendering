import { hasUserDismissedGate, setUserDismissedGate } from './dismissGate';

describe('SignInGate - dismissGate methods', () => {
    beforeEach(() => {
        localStorage.clear();
    });

    describe('hasUserDismissedGate', () => {
        test('user has dismissed gate', () => {
            localStorage.setItem(
                'gu.prefs.sign-in-gate',
                JSON.stringify({
                    'SignInGateName-variant-name': new Date().toISOString(),
                }),
            );

            const output = hasUserDismissedGate(
                'variant-name',
                'SignInGateName',
            );

            expect(output).toBe(true);
        });

        test('user has not dismissed gate', () => {
            const output = hasUserDismissedGate(
                'variant-name',
                'SignInGateName',
            );

            expect(output).toBe(false);
        });

        test('user has not dismissed gate for specific variant', () => {
            localStorage.setItem(
                'gu.prefs.sign-in-gate',
                JSON.stringify({
                    'SignInGateName-variant-other': new Date().toISOString(),
                }),
            );

            const output = hasUserDismissedGate(
                'variant-current',
                'SignInGateName',
            );

            expect(output).toBe(false);
        });

        test('user has not dismissed gate for specific test name', () => {
            localStorage.setItem(
                'gu.prefs.sign-in-gate',
                JSON.stringify({
                    'SignInGateOther-variant-name': new Date().toISOString(),
                }),
            );

            const output = hasUserDismissedGate(
                'variant-name',
                'SignInGateCurrent',
            );

            expect(output).toBe(false);
        });
    });

    describe('setUserDismissedGate', () => {
        test('set user dismissed a sign in gate', () => {
            setUserDismissedGate('variant-name', 'SignInGateTest');

            const output = hasUserDismissedGate(
                'variant-name',
                'SignInGateTest',
            );

            expect(output).toBe(true);
        });

        test('set multiple dismissed sign in gates', () => {
            setUserDismissedGate('variant-1', 'test-1');
            setUserDismissedGate('variant-2', 'test-2');

            const output1 = hasUserDismissedGate('variant-1', 'test-1');
            const output2 = hasUserDismissedGate('variant-2', 'test-2');

            expect(output1).toBe(true);
            expect(output2).toBe(true);
        });
    });
});
