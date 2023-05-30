import { isString } from '@guardian/libs';
import { generateScriptTags, getScriptsFromManifest } from '../../lib/assets';
import { escapeData } from '../../lib/escapeData';
import { makeWindowGuardian } from '../../model/window-guardian';
import type { FEArticleType } from '../../types/frontend';
import { ArticlePage } from '../../web/components/ArticlePage';
import { decideFormat } from '../../web/lib/decideFormat';
import { renderToStringWithEmotion } from '../../web/lib/emotion';
import { htmlPageTemplate } from '../../web/server/htmlPageTemplate';

export const renderArticle = (
	article: FEArticleType,
): {
	clientScripts: string[];
	html: string;
} => {
	const format: ArticleFormat = decideFormat(article.format);

	const { html, extractedCss } = renderToStringWithEmotion(
		<ArticlePage
			format={format}
			article={article}
			renderingTarget="Apps"
		/>,
	);

	const getScriptArrayFromFile = getScriptsFromManifest({
		platform: 'apps',
	});

	const clientScripts = getScriptArrayFromFile('index.js');
	const scriptTags = generateScriptTags([...clientScripts].filter(isString));

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
	const renderedPage = htmlPageTemplate({
		css: extractedCss,
		html,
		title: article.webTitle,
		scriptTags,
		windowGuardian,
		renderingTarget: 'Apps',
		offerHttp3: false,
		borkFCP: false,
		borkFID: false,
	});

	return {
		clientScripts,
		html: renderedPage,
	};
};
