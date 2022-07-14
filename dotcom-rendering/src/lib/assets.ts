interface AssetHash {
	[key: string]: string;
}

let manifest: AssetHash = {};
let legacyManifest: AssetHash = {};

try {
	// path is relative to the server bundle

	// eslint-disable-next-line global-require -- this may fail
	manifest = require('./manifest.json');
	// eslint-disable-next-line global-require -- this may fail
	legacyManifest = require('./manifest.legacy.json');
} catch (e) {
	// do nothing
}

/**
 * Decides the url to use for fetching assets
 *
 * @param {'PROD' | 'CODE' | undefined} stage the environment code is executing in
 * @returns {string}
 */
export const decideAssetOrigin = (
	stage: string | undefined,
	isDev: boolean,
): string => {
	switch (stage?.toUpperCase()) {
		case 'PROD':
			return 'https://assets.guim.co.uk/';
		case 'CODE':
			return 'https://assets-code.guim.co.uk/';
		default: {
			if (isDev) {
				// Use absolute asset paths in development mode
				// This is so paths are correct when treated as relative to Frontend
				return 'http://localhost:3030/';
			} else {
				return '/';
			}
		}
	}
};

const isDev = process.env.NODE_ENV === 'development';

export const ASSET_ORIGIN = decideAssetOrigin(process.env.GU_STAGE, isDev);

export const getScriptArrayFromFile = (
	file: `${string}.js`,
	offerHttp3: boolean,
): { src: string; legacy?: boolean }[] => {
	if (!file.endsWith('.js'))
		throw new Error('Invalid filename: extension must be .js');

	const filename = isDev ? file : manifest[file];
	const legacyFilename = isDev
		? file.replace('.js', '.legacy.js')
		: legacyManifest[file];

	const scripts = [];
	const http3Suffix = offerHttp3 ? '?http3' : '';

	if (filename) {
		scripts.push({
			src: `${ASSET_ORIGIN}assets/${filename}${http3Suffix}`,
			legacy: false,
		});
	}
	if (legacyFilename) {
		scripts.push({
			src: `${ASSET_ORIGIN}assets/${legacyFilename}${http3Suffix}`,
			legacy: true,
		});
	}

	return scripts;
};
