import { isSentryEnabled } from './init';

// Stubbed to prevent parsing of __webpack_public_path__
jest.mock('./loadSentry', () => ({ loadSentry: jest.fn() }));

describe('Load Sentry when it passes loading conditions', () => {
	it('does NOT load Sentry when enableSentryReporting switch is false', () => {
		expect(
			isSentryEnabled({
				isDev: false,
				enableSentryReporting: false,
				isInBrowserVariantTest: true,
				randomCentile: 99,
			}),
		).toEqual(false);
	});
	it('does NOT load Sentry when in development environment', () => {
		expect(
			isSentryEnabled({
				isDev: true,
				enableSentryReporting: true,
				isInBrowserVariantTest: true,
				randomCentile: 1,
			}),
		).toEqual(false);
	});
	it('does load Sentry when the user is in the browser bundle variant test', () => {
		expect(
			isSentryEnabled({
				isDev: false,
				enableSentryReporting: true,
				isInBrowserVariantTest: true,
				randomCentile: 1,
			}),
		).toEqual(true);
	});
	it('does load Sentry for 1% of users', () => {
		expect(
			isSentryEnabled({
				isDev: false,
				enableSentryReporting: true,
				isInBrowserVariantTest: false,
				randomCentile: 1,
			}),
		).toEqual(false);
		expect(
			isSentryEnabled({
				isDev: false,
				enableSentryReporting: true,
				isInBrowserVariantTest: false,
				randomCentile: 99,
			}),
		).toEqual(false);
		expect(
			isSentryEnabled({
				isDev: false,
				enableSentryReporting: true,
				isInBrowserVariantTest: false,
				randomCentile: 100,
			}),
		).toEqual(true);
	});
});
