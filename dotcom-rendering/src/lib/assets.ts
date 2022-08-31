import { readFileSync } from 'fs';
import { resolve } from 'path';
import { isString } from '@guardian/libs';

interface AssetHash {
	[key: string]: string;
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

const getManifest = (path: string): AssetHash => {
	try {
		const assetHash: unknown = JSON.parse(
			readFileSync(resolve(__dirname, path), { encoding: 'utf-8' }),
		);
		if (typeof assetHash != 'object' || assetHash === null)
			throw new Error('Not a valid AssetHash type');

		/** @TODO validate the object */
		return assetHash as AssetHash;
	} catch (e) {
		console.error('Could not load manifest in: ', path);
		console.error('Some filename lookups will fail');
		return {};
	}
};

export type ManifestPath = `./manifest.${string}.json`;

const getScripts = (
	manifestPaths: Array<ManifestPath>,
	file: `${string}.js`,
): string[] => {
	if (!file.endsWith('.js'))
		throw new Error('Invalid filename: extension must be .js');

	if (isDev) {
		return [
			`${ASSET_ORIGIN}assets/${file.replace('.js', '.modern.js')}`,
			`${ASSET_ORIGIN}assets/${file.replace('.js', '.legacy.js')}`,
		];
	}

	return manifestPaths.map((manifestPath) => {
		const manifest = getManifest(manifestPath);
		const filename = manifest[file];

		return `${ASSET_ORIGIN}assets/${filename}`;
	});
};

export const getScriptsFromManifest =
	(manifestPaths: ManifestPath[]) =>
	(file: `${string}.js`): ReturnType<typeof getScripts> =>
		getScripts(manifestPaths, file);

export const generateScriptTags = (scripts: Array<string | false>): string[] =>
	scripts.filter(isString).map((script) => {
		if (script.includes('.legacy.')) {
			return `<script defer nomodule src="${script}"></script>`;
		}
		if (script.includes('.modern.')) {
			return `<script type="module" src="${script}"></script>`;
		}

		return [
			'<!-- The following script does not vary between modern & legacy browsers -->',
			`<script defer src="${script}"></script>`,
		].join('\n');
	});
