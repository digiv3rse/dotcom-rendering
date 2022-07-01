const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const GuStatsReportPlugin = require('./plugins/gu-stats-report-plugin');

const DEV = process.env.NODE_ENV === 'development';

const outputFilename = DEV ? `[name].js` : `[name].[chunkhash].js`;

/**
 * @param {{ sessionId: string }} options
 * @returns {import('webpack').Configuration}
 */
module.exports = ({ sessionId }) => ({
	entry: {
		sentryLoader: './src/web/browser/sentryLoader/init.ts',
		bootCmp: './src/web/browser/bootCmp/init.ts',
		ga: './src/web/browser/ga/init.ts',
		ophan: './src/web/browser/ophan/init.ts',
		islands: './src/web/browser/islands/init.ts',
		dynamicImport: './src/web/browser/dynamicImport/init.ts',
		atomIframe: './src/web/browser/atomIframe/init.ts',
		embedIframe: './src/web/browser/embedIframe/init.ts',
		newsletterEmbedIframe:
			'./src/web/browser/newsletterEmbedIframe/init.ts',
		relativeTime: './src/web/browser/relativeTime/init.ts',
		initDiscussion: './src/web/browser/initDiscussion/init.ts',
	},
	output: {
		filename: outputFilename,
		chunkFilename: outputFilename,
		publicPath: '',
	},
	// fix for known issue with webpack dynamic imports
	optimization: {
		splitChunks: { cacheGroups: { default: false } },
	},
	plugins: [
		new WebpackManifestPlugin({
			fileName: 'manifest.json',
		}),
		...(DEV
			? [
					new GuStatsReportPlugin({
						buildName: 'client',
						project: 'dotcom-rendering',
						team: 'dotcom',
						sessionId,
					}),
			  ]
			: []),
	],
	module: {
		rules: [
			{
				test: /\.[jt]sx?|mjs$/,
				exclude: module.exports.babelExclude,

				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: [
								'@babel/preset-react',
								[
									'@babel/preset-env',
									{
										bugfixes: true,
										targets: {
											esmodules: true,
										},
									},
								],
							],
							compact: true,
						},
					},
					{
						loader: 'ts-loader',
						options: {
							configFile: 'tsconfig.build.json',
							transpileOnly: true,
						},
					},
				],
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
