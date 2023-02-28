import { getScriptsFromManifest } from '../../lib/assets';
import { escapeData } from '../../lib/escapeData';
import { makeWindowGuardian } from '../../model/window-guardian';
import type { FEArticleType } from '../../types/frontend';
import { renderToStringWithEmotion } from '../../web/lib/emotion';
import { pageTemplate } from './pageTemplate';

export const articleToHtml = (
	article: FEArticleType,
): {
	clientScripts: string[];
	html: string;
} => {
	const { html, extractedCss } = renderToStringWithEmotion(<></>);

	const getScriptArrayFromFile = getScriptsFromManifest({
		platform: 'apps',
	});

	const clientScripts = getScriptArrayFromFile('index.js');

	/**
	 * We escape windowGuardian here to prevent errors when the data
	 * is placed in a script tag on the page
	 */
	const windowGuardian = escapeData(
		JSON.stringify(
			makeWindowGuardian({
				editionId: article.editionId,
				stage: article.config.stage,
				frontendAssetsFullURL: article.config.frontendAssetsFullURL,
				revisionNumber: article.config.revisionNumber,
				sentryPublicApiKey: article.config.sentryPublicApiKey,
				sentryHost: article.config.sentryHost,
				keywordIds: article.config.keywordIds,
				dfpAccountId: article.config.dfpAccountId,
				adUnit: article.config.adUnit,
				ajaxUrl: article.config.ajaxUrl,
				googletagUrl: article.config.googletagUrl,
				switches: article.config.switches,
				abTests: article.config.abTests,
				isPaidContent: article.pageType.isPaidContent,
				contentType: article.contentType,
				unknownConfig: article.config,
			}),
		),
	);
	const renderedPage = pageTemplate({
		css: extractedCss,
		html,
		title: article.webTitle,
		clientScripts,
		windowGuardian,
	});
	return {
		clientScripts,
		html: renderedPage,
	};
};
