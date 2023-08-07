import path from 'node:path';
import { fileURLToPath } from 'node:url';
import webpackPreprocessor from '@cypress/webpack-preprocessor';
import { defineConfig } from 'cypress';
import { babelExclude } from './scripts/webpack/webpack.config.client.js';

// https://docs.cypress.io/guides/references/configuration

// eslint-disable-next-line import/no-default-export -- it’s what Cypress wants
export default defineConfig({
	viewportWidth: 1500,
	viewportHeight: 860,
	video: false,
	chromeWebSecurity: false,
	numTestsKeptInMemory: 5,
	blockHosts: [
		'*ophan.theguardian.com',
		'pixel.adsafeprotected.com',
		'*permutive.com',
		'*adnxs.com',
		'*adsystem.com',
		'*casalemedia.com',
		'*pubmatic.com',
		'*360yield.com',
		'*omnitagjs.com',
		'*the-ozone-project.com',
		'*openx.net',
	],
	retries: {
		runMode: 5,
		openMode: 0,
	},
	e2e: {
		setupNodeEvents(on, config) {
			config.env = { ...config.env, ...process.env };

			const webpackConfig = webpackPreprocessor.defaultOptions;
			webpackConfig.webpackOptions.resolve = {
				extensions: ['.ts', '.js'],
			};
			const rules = webpackConfig.webpackOptions.module.rules;
			rules[0].exclude = babelExclude;

			// Adding this here so that we can import the fixture in the sign-in-gate.cy.js file
			rules.push({
				test: path.resolve(
					path.dirname(fileURLToPath(import.meta.url)),
					`fixtures/generated/articles/Standard.ts`,
				),
				exclude: ['/node_modules/'],
				loader: 'ts-loader',
				options: {
					compilerOptions: {
						noEmit: false,
					},
				},
			});
			on('file:preprocessor', webpackPreprocessor(webpackConfig));
			return config;
		},
		baseUrl: 'http://localhost:9000/',
	},
});
