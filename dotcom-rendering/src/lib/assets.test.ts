import {
	APPS_SCRIPT,
	decideAssetOrigin,
	WEB,
	WEB_LEGACY_SCRIPT,
	WEB_VARIANT_SCRIPT,
} from './assets';

describe('decideAssetOrigin for stage', () => {
	it('PROD', () => {
		expect(decideAssetOrigin('PROD', false)).toEqual(
			'https://assets.guim.co.uk/',
		);
		expect(decideAssetOrigin('PROD', true)).toEqual(
			'https://assets.guim.co.uk/',
		);
		expect(decideAssetOrigin('prod', true)).toEqual(
			'https://assets.guim.co.uk/',
		);
	});
	it('CODE', () => {
		expect(decideAssetOrigin('CODE', false)).toEqual(
			'https://assets-code.guim.co.uk/',
		);
		expect(decideAssetOrigin('CODE', true)).toEqual(
			'https://assets-code.guim.co.uk/',
		);
		expect(decideAssetOrigin('code', true)).toEqual(
			'https://assets-code.guim.co.uk/',
		);
	});
	it('DEV', () => {
		expect(decideAssetOrigin('DEV', false)).toEqual('/');
		expect(decideAssetOrigin(undefined, false)).toEqual('/');
		expect(decideAssetOrigin('DEV', true)).toEqual(
			'http://localhost:3030/',
		);
		expect(decideAssetOrigin('dev', true)).toEqual(
			'http://localhost:3030/',
		);
		expect(decideAssetOrigin(undefined, true)).toEqual(
			'http://localhost:3030/',
		);
	});
});

describe('regular expression to match files', () => {
	it('should handle CI environment', () => {
		expect('/assets/ophan.web.eb74205c979f58659ed7.js').toMatch(WEB);
	});

	it('should handle DEV environment', () => {
		expect('/assets/ophan.web.variant.js').toMatch(WEB_VARIANT_SCRIPT);
	});

	it('should handle PROD environment', () => {
		expect(
			'https://assets.guim.co.uk/assets/ophan.web.abcdefghijklmnopqrst.js',
		).toMatch(WEB);
		expect(
			'https://assets.guim.co.uk/assets/ophan.web.variant.abcdefghijklmnopqrst.js',
		).toMatch(WEB_VARIANT_SCRIPT);
		expect(
			'https://assets.guim.co.uk/assets/ophan.web.legacy.eb74205c979f58659ed7.js',
		).toMatch(WEB_LEGACY_SCRIPT);
		expect(
			'https://assets.guim.co.uk/assets/ophan.apps.eb74205c979f58659ed7.js',
		).toMatch(APPS_SCRIPT);
	});

	it('should handle http3 query param', () => {
		expect(
			'https://assets.guim.co.uk/assets/ophan.web.eb74205c979f58659ed7.js?http3=true',
		).toMatch(WEB);
	});
});
