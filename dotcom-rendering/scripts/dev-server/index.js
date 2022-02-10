import path from 'path';
import express from 'express';
import fetch from 'node-fetch';

import webpack from 'webpack';
// @ts-expect-error -- it’s meant to work
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackHotServerMiddleware from 'webpack-hot-server-middleware';
import bodyParser from 'body-parser';
import { fileURLToPath } from 'url';

// eslint-disable-next-line import/no-unresolved -- it TS, but ts-node makes it work
import webpackConfig from '../webpack/webpack.config.js';

const dirname = fileURLToPath(import.meta.url);
function buildUrlFromQueryParam(req) {
	// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
	if (!req.query.url) {
		throw new Error('The url query parameter is mandatory');
	}

	// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
	const url = new URL(req.query.url);
	// searchParams will only work for the first set of query params because 'url' is already a query param itself
	const searchparams = url.searchParams && url.searchParams.toString();
	// Reconstruct the parsed url adding .json?dcr which we need to force dcr to return json
	return `${url.origin}${url.pathname}.json?dcr=true&${searchparams}`;
}

function ampifyUrl(url) {
	// Take a url and make it work for AMP
	return url.replace('www', 'amp');
}

const go = () => {
	const webpackConfig = require('../webpack/webpack.config');
	const compiler = webpack(webpackConfig);

	const app = express();
	app.use(bodyParser.json({ limit: '10mb' }));

	app.use(
		'/static/frontend',
		express.static(path.join(dirname, '../..', 'src', 'static')),
	);

	app.use(
		webpackDevMiddleware(compiler, {
			serverSideRender: true,
			publicPath: '/assets/',
			headers: (req, res) => {
				// Allow any localhost request from accessing the assets
				if (req.hostname === 'localhost' && req.headers.origin)
					res.setHeader(
						'Access-Control-Allow-Origin',
						req.headers.origin,
					);
			},
		}),
	);

	app.use(
		webpackHotMiddleware(
			compiler.compilers.find((config) => config.name === 'browser'),
			{
				// https://www.npmjs.com/package/friendly-errors-webpack-plugin#turn-off-errors
				log: () => {},
			},
		),
	);

	app.get(
		'/Article',
		async (req, res, next) => {
			try {
				const url = buildUrlFromQueryParam(req);
				const { html, ...config } = await fetch(url).then((article) =>
					article.json(),
				);

				req.body = config;
				next();
			} catch (error) {
				// eslint-disable-next-line no-console
				console.error(error);
			}
		},
		webpackHotServerMiddleware(compiler, {
			chunkName: 'frontend.server',
			serverRendererOptions: { path: '/Article' },
		}),
	);

	app.post(
		'/Article',
		webpackHotServerMiddleware(compiler, {
			chunkName: 'frontend.server',
			serverRendererOptions: { path: '/Article' },
		}),
	);

	app.get(
		'/ArticleJson',
		async (req, res, next) => {
			try {
				const url = buildUrlFromQueryParam(req);
				const { html, ...config } = await fetch(url).then((article) =>
					article.json(),
				);

				req.body = config;
				next();
			} catch (error) {
				// eslint-disable-next-line no-console
				console.error(error);
			}
		},
		webpackHotServerMiddleware(compiler, {
			chunkName: 'frontend.server',
			serverRendererOptions: { path: '/ArticleJson' },
		}),
	);

	app.get(
		'/AMPArticle',
		async (req, res, next) => {
			try {
				const url = buildUrlFromQueryParam(req);
				const { html, ...config } = await fetch(ampifyUrl(url)).then(
					(article) => article.json(),
				);
				req.body = config;
				next();
			} catch (error) {
				// eslint-disable-next-line no-console
				console.error(error);
			}
		},
		webpackHotServerMiddleware(compiler, {
			chunkName: 'frontend.server',
			serverRendererOptions: { path: '/AMPArticle' },
		}),
	);

	app.post(
		'/AMPArticle',
		webpackHotServerMiddleware(compiler, {
			chunkName: 'frontend.server',
			serverRendererOptions: { path: '/AMPArticle' },
		}),
	);

	app.get(
		'/Interactive',
		async (req, res, next) => {
			try {
				const url = buildUrlFromQueryParam(req);
				const { html, ...config } = await fetch(url).then(
					(interactive) => interactive.json(),
				);

				req.body = config;
				next();
			} catch (error) {
				// eslint-disable-next-line no-console
				console.error(error);
			}
		},
		webpackHotServerMiddleware(compiler, {
			chunkName: 'frontend.server',
			serverRendererOptions: { path: '/Interactive' },
		}),
	);

	app.post(
		'/Interactive',
		webpackHotServerMiddleware(compiler, {
			chunkName: 'frontend.server',
			serverRendererOptions: { path: '/Interactive' },
		}),
	);

	app.get(
		'/AMPInteractive',
		async (req, res, next) => {
			try {
				const url = buildUrlFromQueryParam(req);
				const { html, ...config } = await fetch(ampifyUrl(url)).then(
					(article) => article.json(),
				);
				req.body = config;
				next();
			} catch (error) {
				// eslint-disable-next-line no-console
				console.error(error);
			}
		},
		webpackHotServerMiddleware(compiler, {
			chunkName: 'frontend.server',
			serverRendererOptions: { path: '/AMPInteractive' },
		}),
	);

	app.post(
		'/AMPInteractive',
		webpackHotServerMiddleware(compiler, {
			chunkName: 'frontend.server',
			serverRendererOptions: { path: '/AMPInteractive' },
		}),
	);

	app.get('/', (req, res) => {
		res.sendFile(path.join(dirname, 'index.html'));
	});

	app.get('*', (req, res) => {
		res.redirect('/');
	});

	// express requires all 4 args here:
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	app.use((err, req, res, next) => {
		res.status(500).send(`<pre>${err.stack}</pre>`);
	});

	const port = process.env.PORT || 3030;
	app.listen(port);
};

go();
