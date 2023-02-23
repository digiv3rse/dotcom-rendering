import { RequestHandler } from 'express';
import { enhanceArticleType } from '../../web/server';
import { articleToHtml } from './articleToHtml';

const getStack = (e: unknown): string =>
	e instanceof Error ? e.stack ?? 'No error stack' : 'Unknown error';

/**
 * Formats script paths as a Link header
 * @see https://datatracker.ietf.org/doc/html/rfc5988#section-5.5
 * @param scriptPaths - the script paths to include in the Link header
 */
const makePrefetchHeader = (scriptPaths: string[]): string =>
	scriptPaths.reduce(
		(acc, scriptPath) => acc + `<${scriptPath}>; rel=prefetch,`,
		'',
	);

export const handleAppsArticle: RequestHandler = ({ body }, res) => {
	try {
		const article = enhanceArticleType(body);
		const { html, clientScripts } = articleToHtml(article);

		// The Android app will cache these assets, enable offline reading
		res.set('Link', makePrefetchHeader(clientScripts)).send(html);
	} catch (e) {
		res.status(500).send(`<pre>${getStack(e)}`);
	}
};
