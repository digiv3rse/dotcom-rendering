/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require('webpack');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const chalk = require('chalk');

const friendlyErrorsWebpackPlugin = () =>
	new FriendlyErrorsWebpackPlugin({
		compilationSuccessInfo: {
			messages: [
				`DEV server running at ${chalk.blue.underline(
					'http://localhost:3030',
				)}`,
			],
		},
	});

const PROD = process.env.NODE_ENV === 'production';
const DEV = process.env.NODE_ENV === 'development';
const GITHUB = process.env.CI_ENV === 'github';

// We need to distinguish files compiled by @babel/preset-env with the prefix "legacy"
const generateName = (isLegacyJS) => {
	const legacyString = isLegacyJS ? '.legacy' : '';
	const chunkhashString = PROD && !GITHUB ? '.[chunkhash]' : '';
	return `[name]${legacyString}${chunkhashString}.js`;
};

const scriptPath = (dcrPackage) =>
	[
		`./src/web/browser/${dcrPackage}/init.ts`,
		DEV &&
			'webpack-hot-middleware/client?name=browser&overlayWarnings=true',
	].filter(Boolean);

module.exports = ({ isLegacyJS }) => ({
	entry: {
		sentryLoader: scriptPath('sentryLoader'),
		bootCmp: scriptPath('bootCmp'),
		ga: scriptPath('ga'),
		ophan: scriptPath('ophan'),
		islands: scriptPath('islands'),
		react: scriptPath('react'),
		dynamicImport: scriptPath('dynamicImport'),
		atomIframe: scriptPath('atomIframe'),
		coreVitals: scriptPath('coreVitals'),
		embedIframe: scriptPath('embedIframe'),
		newsletterEmbedIframe: scriptPath('newsletterEmbedIframe'),
		relativeTime: scriptPath('relativeTime'),
	},
	output: {
		filename: generateName(isLegacyJS),
		chunkFilename: generateName(isLegacyJS),
		publicPath: '',
	},
	// fix for known issue with webpack dynamic imports
	optimization: {
		splitChunks: { cacheGroups: { default: false } },
	},
	plugins: [
		DEV && new webpack.HotModuleReplacementPlugin(),
		DEV && friendlyErrorsWebpackPlugin(),
		// https://www.freecodecamp.org/forum/t/algorithm-falsy-bouncer-help-with-how-filter-boolean-works/25089/7
		// [...].filter(Boolean) why it is used
	].filter(Boolean),
	module: {
		rules: [
			{
				test: /\.[jt]sx?|mjs$/,
				exclude: module.exports.babelExclude,
				loader: 'swc-loader',
			},
			{
				test: /\.css$/,
				use: ['to-string-loader', 'css-loader'],
			},
			{
				test: /\.svg$/,
				use: ['desvg-loader/react', 'svg-loader'],
			},
		],
	},
});

module.exports.babelExclude = {
	and: [/node_modules/],
	not: [
		// Include all @guardian modules, except automat-modules
		/@guardian\/(?!(automat-modules))/,

		// Include the dynamic-import-polyfill
		/dynamic-import-polyfill/,
	],
};
