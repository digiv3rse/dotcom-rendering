// @ts-check
const nodeExternals = require('webpack-node-externals');
const swcConfig = require('./.swcrc.json');
const GuStatsReportPlugin = require('./plugins/gu-stats-report-plugin');

const DEV = process.env.NODE_ENV === 'development';
const nodeVersion = process.versions.node;

// temporary switch in case we need to revert quickly
const USE_SWC = true;

const babelLoader = [
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
];

const swcLoader = [
	{
		loader: 'swc-loader',
		options: {
			...swcConfig,
			minify: DEV ? false : true,
			env: {
				// debug: true,
				targets: {
					node: nodeVersion,
				},
				// fix for @guardian/libs storage.ts class properties
				include: ['transform-class-properties'],
			},
		},
	},
];

/** @type {(options: { sessionId: string } ) => import('webpack').Configuration} */
module.exports = ({ sessionId }) => ({
	entry: {
		'frontend.server': './src/server/index.ts',
	},
	output: {
		filename: `[name].js`,
		chunkFilename: `[name].js`,
		libraryTarget: 'commonjs2',
		pathinfo: true,
	},
	target: 'node',
	externalsPresets: { node: true },
	optimization: {
		minimize: false,
		runtimeChunk: false,
	},
	externals: [
		nodeExternals({
			allowlist: [/^@guardian/],
			additionalModuleDirs: [
				// Since we use yarn-workspaces for the monorepo, node_modules will be co-located
				// both in the '(project-root)/dotcom-rendering/node_modules' directory (default for webpack-node-externals)
				// but also in project root, and any workspaces we link to.
				// We want to make sure all of these are removed from the server build.
				'../node_modules',
			],
		}),
		// @aws-sdk modules are only used in CODE/PROD, so we don't need to
		// include them in the development bundle
		({ request }, callback) => {
			return process.env.NODE_ENV === 'development' &&
				request?.startsWith('@aws-sdk')
				? callback(undefined, `commonjs ${request}`)
				: callback();
		},
		({ request }, callback) => {
			return request?.endsWith('manifest.json')
				? callback(undefined, `commonjs ${request}`)
				: callback();
		},
		({ request }, callback) => {
			return request?.endsWith('manifest.legacy.json')
				? callback(undefined, `commonjs ${request}`)
				: callback();
		},
	],
	plugins: DEV
		? [
				new GuStatsReportPlugin({
					displayDisclaimer: true,
					buildName: 'server',
					project: 'dotcom-rendering',
					team: 'dotcom',
					sessionId,
				}),
		  ]
		: undefined,
	module: {
		rules: [
			{
				test: /(\.tsx|\.js|\.ts)$/,
				exclude: {
					and: [/node_modules/],
					not: [/@guardian/, /dynamic-import-polyfill/],
				},
				// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- temporary switch
				use: USE_SWC ? swcLoader : babelLoader,
			},
			// TODO: find a way to remove
			{
				test: /\.svg$/,
				use: ['desvg-loader/react', 'svg-loader'],
			},
		],
	},
});
