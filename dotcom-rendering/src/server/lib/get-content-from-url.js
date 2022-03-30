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
	try {
		if (!_url) {
			throw new Error('The url query parameter is mandatory');
		}

		const url = new URL(_url);

		// searchParams will only work for the first set of query params because 'url' is already a query param itself
		const searchparams = url.searchParams?.toString();

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
		const { html, ...config } = await fetch(jsonUrl, { headers }).then(
			(response) => response.json(),
		);

		return config;
	} catch (error) {
		console.error(error);
	}
}

exports.default = getContentFromURL;

/** @type {import('webpack-dev-server').ExpressRequestHandler} */
exports.getContentFromURLMiddleware = async (req, res, next) => {
	if (req.query.url) {
		/**
		 * We use string manipulation on the raw value of req.url
		 * here instead of the url property of the req.query object
		 * because we want to capture any *other* query params that
		 * might be being used. Eg.
		 *
		 * If my original url is:
		 *
		 * http://localhost:3030/Article?url=https://www.theguardian.com/my/article?filterKeyEvents=true
		 *
		 * then req.query.url is:
		 *
		 * https://www.theguardian.com/my/article
		 *
		 * and req.query.filterKeyEvents is:
		 *
		 * true
		 *
		 * This happens because the url query param isn't serialised. But we actually want everything
		 * after 'url=' including '?filterKeyEvents=true' and we'd rather not serialise so we just
		 * split the string instead
		 */
		let url = req.url.split('url=')[1];
		if (req.path.startsWith('/AMP')) {
			url = url.replace('www', 'amp');
		}
		req.body = await getContentFromURL(url, req.headers);
	}
	next();
};
