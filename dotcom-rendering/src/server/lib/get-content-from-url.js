const { URLSearchParams } = require('url');

// @ts-check
const fetch = require('node-fetch').default;

/** @type {(_: [string, unknown]) => _ is [string, string]} */
const isStringTuple = (_) => typeof _[1] === 'string';

/**
 * Get DCR content from a `theguardian.com` URL.
 * Takes in optional `X-Gu-*` headers to send.
 *
 * @param {string} _url
 * @param {import('http').IncomingHttpHeaders} _headers
 */
async function getContentFromURL(_url, _headers) {
	if (!_url) {
		throw new Error('The url query parameter is mandatory');
	}

	const url = new URL(_url);

	// searchParams will only work for the first set of query params because 'url' is already a query param itself
	const searchparams = url.searchParams.toString();

	// Reconstruct the parsed url adding .json?dcr which we need to force dcr to return json
	const jsonUrl = `${url.origin}${url.pathname}.json?dcr=true&${searchparams}`;

	// Explicitly pass through GU headers - this enables us to override properties such as region in CI
	/** @type {HeadersInit} */
	const headers = Object.fromEntries(
		Object.entries(_headers)
			.filter(([key]) => key.toLowerCase().startsWith('x-gu-'))
			.filter(isStringTuple),
	);

	// pick all the keys from the JSON except `html`
	const { html, ...config } = await fetch(jsonUrl, { headers })
		.then((response) => response.json())
		.catch((error) => {
			if (error?.type === 'invalid-json')
				throw new Error(
					'Did not receive JSON response - are you sure this URL supports .json?dcr requests?',
				);
			throw error;
		});

	return config;
}

exports.default = getContentFromURL;

/**
 * @param {string} requestUrl
 * @returns {string}
 */
const parseURL = (requestUrl) => {
	const url = decodeURIComponent(requestUrl.split('/').slice(2).join('/'));

	return requestUrl.startsWith('/AMP') ? url.replace('www', 'amp') : url;
};

exports.parseURL = parseURL;

/** @type {import('webpack-dev-server').ExpressRequestHandler} */
exports.getContentFromURLMiddleware = async (req, res, next) => {
	if (req.path.split('/').length > 2) {
		const sourceURL = parseURL(req.originalUrl);

		try {
			req.body = await getContentFromURL(sourceURL, req.headers);
		} catch (error) {
			console.error(error);
			next(error);
		}
	}
	next();
};
