const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const chalk = require('chalk');
const GuStatsReportPlugin = require('./gu-stats-report-plugin');

const DEV = process.env.NODE_ENV === 'development';

const friendlyErrorsWebpackPlugin = () =>
	new FriendlyErrorsWebpackPlugin({
		compilationSuccessInfo: {
			messages: [
				`Server build complete: ${chalk.blue.underline(
					'http://localhost:3030',
				)}`,
			],
		},
	});

module.exports = ({ sessionId }) => ({
	entry: {
		'frontend.server': './src/app/server.ts',
	},
	output: {
		filename: `[name].js`,
		chunkFilename: `[name].js`,
		libraryTarget: 'commonjs2',
		pathinfo: true,
	},
	target: 'node',
	optimization: {
		minimize: false,
		runtimeChunk: false,
	},
	externals: [
		'@loadable/component',
		'express',
		'log4js',
		require('webpack-node-externals')({
			allowlist: [/^@guardian/],
		}),
		// @aws-sdk modules are only used in CODE/PROD, so we don't need to
		// include them in the development bundle
		({ request }, callback) => {
			return process.env.NODE_ENV === 'development' &&
				request.startsWith('@aws-sdk')
				? callback(null, `commonjs ${request}`)
				: callback();
		},
		({ request }, callback) => {
			return request.endsWith('loadable-manifest-browser.json')
				? callback(null, `commonjs ${request}`)
				: callback();
		},
		({ request }, callback) => {
			return request.endsWith('loadable-manifest-browser.legacy.json')
				? callback(null, `commonjs ${request}`)
				: callback();
		},
	],
	plugins: [
		DEV && friendlyErrorsWebpackPlugin(),
		DEV &&
			new GuStatsReportPlugin({
				displayDisclaimer: true,
				buildName: 'server',
				project: 'dotcom-rendering',
				team: 'dotcom',
				sessionId,
			}),
	].filter(Boolean),
	module: {
		rules: [
			{
				test: /(\.tsx|\.js|\.ts)$/,
				exclude: {
					and: [/node_modules/],
					not: [/@guardian/, /dynamic-import-polyfill/],
				},
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: [
								// TODO: remove @babel/preset-react once we stop using JSX in server folder
								'@babel/preset-react',
								[
									'@babel/preset-env',
									{
										targets: {
											node: 'current',
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
			// TODO: find a way to remove
			{
				test: /\.svg$/,
				use: ['desvg-loader/react', 'svg-loader'],
			},
		],
	},
});
