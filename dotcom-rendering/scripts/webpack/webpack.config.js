/* eslint-disable global-require -- we merge configs in the export */
// @ts-check
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const webpack = require('webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const FilterWarningsPlugin = require('webpack-filter-warnings-plugin');
const { merge } = require('webpack-merge');
const WebpackMessages = require('webpack-messages');
const { BUILD_VARIANT: BUILD_VARIANT_SWITCH } = require('./bundles');

const dist = path.resolve(__dirname, '..', '..', 'dist');
const PROD = process.env.NODE_ENV === 'production';
const DEV = process.env.NODE_ENV === 'development';

const BUILD_LEGACY = process.env.BUILD_LEGACY === 'true';
const BUILD_VARIANT = process.env.BUILD_VARIANT === 'true';

const sessionId = uuidv4();

let builds = 0;

/**
 * @param {{ platform: 'server' | 'client.legacy' | 'client.modern' | 'client.variant' | 'client.apps'}} options
 * @returns {import('webpack').Configuration}
 */
const commonConfigs = ({ platform }) => ({
	name: platform,
	mode: DEV ? 'development' : 'production',
	output: {
		path: dist,
	},
	stats: DEV ? 'errors-only' : 'normal',
	devtool:
		process.env.NODE_ENV === 'production'
			? 'source-map'
			: 'eval-cheap-module-source-map',
	resolve: {
		alias: {
			react: 'preact/compat',
			'react-dom/test-utils': 'preact/test-utils',
			'react-dom': 'preact/compat',
		},
		extensions: ['.js', '.ts', '.tsx', '.jsx'],
		symlinks: false,
	},
	ignoreWarnings: [
		/**
		 * Express uses dynamic imports to load template engines. As we're not currently using a template engine in DCR
		 * we can ignore this error.
		 */
		{
			module: /..\/node_modules\/express\/lib\/view.js/,
			message:
				/Critical dependency: the request of a dependency is an expression/,
		},
		/**
		 * Log4js uses dynamic imports to load non-core appenders. We're only using 'console' and 'file' appenders in DCR
		 * which are specifically imported by log4js without using dynamic imports.
		 */
		{
			module: /..\/node_modules\/log4js\/lib\/appenders\/index.js/,
			message:
				/Critical dependency: the request of a dependency is an expression/,
		},
	],
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
			'process.env.HOSTNAME': JSON.stringify(process.env.HOSTNAME),
		}),
		// @ts-expect-error -- somehow the type declaration isn’t playing nice
		new FilterWarningsPlugin({
			exclude: /export .* was not found in/,
		}),
		// Matching modules specified in this regex will not be imported during the webpack build
		// We use this if there are optional dependencies (e.g in jsdom, ws) to remove uneccesary warnings in our builds / console outpouts.
		new webpack.IgnorePlugin({
			resourceRegExp: /^(canvas|bufferutil|utf-8-validate)$/,
		}),
		...(DEV
			? // DEV plugins
			  [
					// @ts-expect-error -- somehow the type declaration isn’t playing nice
					new WebpackMessages({
						name: platform,
						/** @type {(message: string) => void} */
						logger: (message) => {
							// distinguish between initial and subsequent (re)builds in console output
							if (builds < module.exports.length * 2) {
								message = message
									.replace('Building', 'Building initial')
									.replace('Completed', 'Completed initial');
							} else {
								message = message.replace(
									'Building',
									'Rebuilding',
								);
							}
							console.log(message);
							builds += 1;
						},
					}),
			  ]
			: // PROD plugins
			  [
					new BundleAnalyzerPlugin({
						reportFilename: path.join(
							dist,
							'stats',
							`${platform}-bundles.html`,
						),
						analyzerMode: 'static',
						openAnalyzer: false,
						logLevel: 'warn',
					}),
					new BundleAnalyzerPlugin({
						reportFilename: path.join(
							dist,
							'stats',
							`${platform}-bundles.json`,
						),
						analyzerMode: 'json',
						openAnalyzer: false,
						logLevel: 'warn',
					}),
			  ]),
	],
	infrastructureLogging: {
		level: PROD ? 'info' : 'warn',
	},
});

module.exports = [
	merge(
		commonConfigs({
			platform: 'server',
		}),
		require(`./webpack.config.server`)({ sessionId }),
		DEV ? require(`./webpack.config.dev-server`) : {},
	),
	merge(
		commonConfigs({
			platform: 'client.modern',
		}),
		require(`./webpack.config.client`)({
			bundle: 'modern',
			sessionId,
		}),
	),
	merge(
		commonConfigs({
			platform: 'client.apps',
		}),
		require(`./webpack.config.client`)({
			bundle: 'apps',
			sessionId,
		}),
	),
	...((PROD && BUILD_VARIANT_SWITCH) || BUILD_VARIANT
		? [
				merge(
					commonConfigs({
						platform: 'client.variant',
					}),
					require(`./webpack.config.client`)({
						bundle: 'variant',
						sessionId,
					}),
				),
		  ]
		: []),
	// TODO: ignore static files for legacy compilation
	...(PROD || BUILD_LEGACY
		? [
				merge(
					commonConfigs({
						platform: 'client.legacy',
					}),
					require(`./webpack.config.client`)({
						bundle: 'legacy',
						sessionId,
					}),
				),
		  ]
		: []),
];
