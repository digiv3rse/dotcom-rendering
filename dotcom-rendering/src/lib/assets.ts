interface AssetHash {
	[key: string]: { [key: string]: [] };
}

let loadableManifest: AssetHash = {};
let loadableManifestLegacy: AssetHash = {};

try {
	// path is relative to the server bundle
	// eslint-disable-next-line import/no-unresolved
	loadableManifest = require('./loadable-manifest-browser.json');
	// eslint-disable-next-line import/no-unresolved
	loadableManifestLegacy = require('./loadable-manifest-browser.legacy.json');
} catch (e) {
	// do nothing
}

/**
 * Decides the url to use for fetching assets
 *
 * @param stage {'PROD' | 'CODE' | undefined} the environment code is executing in
 * @returns
 */
const decideAssetOrigin = (stage: string | undefined): string => {
	switch (stage?.toUpperCase()) {
		case 'PROD':
			return 'https://assets.guim.co.uk/';
		case 'CODE':
			return 'https://assets-code.guim.co.uk/';
		default:
			return '/';
	}
};
export const ASSET_ORIGIN = decideAssetOrigin(process.env.GU_STAGE);

export const loadableManifestJson = loadableManifest;

export const getScriptArrayFromFilename = (
	filename: string,
): { src: string; legacy: boolean }[] => {
	// Get legacy file name if one's available
	// 'ophan.87b473fc83e9ca6250fc.js' -> 'ophan'
	const chunkName = filename.split('.')[0];
	const chunks: string[] | undefined =
		loadableManifestLegacy.assetsByChunkName?.[chunkName];
	const legacyFilename = chunks && chunks.length > 0 && chunks[0];

	const scripts = [
		{ src: `${ASSET_ORIGIN}assets/${filename}`, legacy: false },
	];

	if (legacyFilename)
		scripts.push({
			src: `${ASSET_ORIGIN}assets/${legacyFilename}`,
			legacy: true,
		});

	return scripts;
};

export const getScriptArrayFromChunkName = (
	chunkName: string,
): { src: string; legacy?: boolean }[] => {
	const chunks: string[] | undefined =
		loadableManifestJson.assetsByChunkName[chunkName];
	const filename = chunks && chunks.length > 0 && chunks[0];
	if (!filename) {
		return [];
	}
	return getScriptArrayFromFilename(filename);
};
