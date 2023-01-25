import { ArticleDesign, ArticlePillar } from '@guardian/libs';
import {
	BUILD_VARIANT,
	dcrJavascriptBundle,
} from '../../../scripts/webpack/bundles';
import { isAmpSupported } from '../../amp/components/Elements';
import {
	ASSET_ORIGIN,
	generateScriptTags,
	getScriptsFromManifest,
	LEGACY_SCRIPT,
	MODERN_SCRIPT,
	VARIANT_SCRIPT,
} from '../../lib/assets';
import { escapeData } from '../../lib/escapeData';
import { extractGA } from '../../model/extract-ga';
import { extractNAV } from '../../model/extract-nav';
import { makeWindowGuardian } from '../../model/window-guardian';
import type { DCRArticleType } from '../../types/article';
import type { CAPIElement } from '../../types/content';
import type { FEArticleType } from '../../types/frontend';
import type { TagType } from '../../types/tag';
import { ArticlePage } from '../components/ArticlePage';
import { decideFormat } from '../lib/decideFormat';
import { decideTheme } from '../lib/decideTheme';
import { renderToStringWithEmotion } from '../lib/emotion';
import { extractExpeditedIslands } from '../lib/extractIslands';
import { getHttp3Url } from '../lib/getHttp3Url';
import { pageTemplate } from './pageTemplate';
import { recipeSchema } from './temporaryRecipeStructuredData';

interface Props {
	article: DCRArticleType;
}

const decideTitle = (article: FEArticleType): string => {
	if (
		decideTheme(article.format) === ArticlePillar.Opinion &&
		article.byline
	) {
		return `${article.headline} | ${article.byline} | The Guardian`;
	}
	return `${article.headline} | ${article.sectionLabel} | The Guardian`;
};

export const articleToHtml = ({ article }: Props): string => {
	const NAV = extractNAV(article.frontendData.nav);
	const title = decideTitle(article.frontendData);
	const linkedData = article.linkedData;

	const format: ArticleFormat = decideFormat(article.frontendData.format);

	const { html, extractedCss } = renderToStringWithEmotion(
		<ArticlePage format={format} CAPIArticle={article} NAV={NAV} />,
	);

	// Expedited islands scripts are added to the document head as 'high priority'
	const expeditedIslands = extractExpeditedIslands(html);

	// We want to only insert script tags for the elements or main media elements on this page view
	// so we need to check what elements we have and use the mapping to the the chunk name
	const CAPIElements: CAPIElement[] = article.frontendData.blocks
		.map((block) => block.elements)
		.flat();

	// Evaluating the performance of HTTP3 over HTTP2
	// See: https://github.com/guardian/dotcom-rendering/pull/5394
	const { offerHttp3 = false } = article.frontendData.config.switches;

	const polyfillIO =
		'https://assets.guim.co.uk/polyfill.io/v3/polyfill.min.js?rum=0&features=es6,es7,es2017,es2018,es2019,default-3.6,HTMLPictureElement,IntersectionObserver,IntersectionObserverEntry,URLSearchParams,fetch,NodeList.prototype.forEach,navigator.sendBeacon,performance.now,Promise.allSettled&flags=gated&callback=guardianPolyfilled&unknown=polyfill&cacheClear=1';

	const pageHasNonBootInteractiveElements = CAPIElements.some(
		(element) =>
			element._type ===
				'model.dotcomrendering.pageElements.InteractiveBlockElement' &&
			element.scriptUrl !==
				'https://interactive.guim.co.uk/embed/iframe-wrapper/0.1/boot.js', // We have rewritten this standard behaviour into Dotcom Rendering
	);

	const pageHasTweetElements = CAPIElements.some(
		(element) =>
			element._type ===
			'model.dotcomrendering.pageElements.TweetBlockElement',
	);

	const shouldServeVariantBundle: boolean = [
		BUILD_VARIANT,
		article.frontendData.config.abTests[dcrJavascriptBundle('Variant')] ===
			'variant',
	].every(Boolean);

	/**
	 * This function returns an array of files found in the manifests
	 * defined by `manifestPaths`.
	 *
	 * @see getScriptsFromManifest
	 */
	const getScriptArrayFromFile = getScriptsFromManifest(
		shouldServeVariantBundle,
	);

	/**
	 * The highest priority scripts.
	 * These scripts have a considerable impact on site performance.
	 * Only scripts critical to application execution may go in here.
	 * Please talk to the dotcom platform team before adding more.
	 * Scripts will be executed in the order they appear in this array
	 */
	const priorityScriptTags = generateScriptTags(
		[
			polyfillIO,
			...getScriptArrayFromFile('bootCmp.js'),
			...getScriptArrayFromFile('ophan.js'),
			process.env.COMMERCIAL_BUNDLE_URL ??
				article.frontendData.config.commercialBundleUrl,
			...getScriptArrayFromFile('sentryLoader.js'),
			...getScriptArrayFromFile('dynamicImport.js'),
			pageHasNonBootInteractiveElements &&
				`${ASSET_ORIGIN}static/frontend/js/curl-with-js-and-domReady.js`,
			...getScriptArrayFromFile('islands.js'),
			...expeditedIslands.flatMap((name) =>
				getScriptArrayFromFile(`${name}.js`),
			),
		].map((script) =>
			offerHttp3 && script ? getHttp3Url(script) : script,
		),
	);

	/**
	 * Low priority scripts. These scripts will be requested
	 * asynchronously after the main HTML has been parsed. Execution
	 * order is not guaranteed. It is even possible that these execute
	 * *before* the high priority scripts, although this is very
	 * unlikely.
	 */
	const lowPriorityScriptTags = generateScriptTags(
		[
			...getScriptArrayFromFile('atomIframe.js'),
			...getScriptArrayFromFile('embedIframe.js'),
			...getScriptArrayFromFile('newsletterEmbedIframe.js'),
			...getScriptArrayFromFile('relativeTime.js'),
			...getScriptArrayFromFile('initDiscussion.js'),
		].map((script) => (offerHttp3 ? getHttp3Url(script) : script)),
	);

	const gaChunk = getScriptArrayFromFile('ga.js');
	const modernScript = gaChunk.find((script) => script.match(MODERN_SCRIPT));
	const legacyScript = gaChunk.find((script) => script.match(LEGACY_SCRIPT));
	const variantScript = gaChunk.find((script) =>
		script.match(VARIANT_SCRIPT),
	);
	const gaPath = {
		modern: (modernScript ?? variantScript) as string,
		legacy: legacyScript as string,
	};

	/**
	 * We escape windowGuardian here to prevent errors when the data
	 * is placed in a script tag on the page
	 */
	const windowGuardian = escapeData(
		JSON.stringify(
			makeWindowGuardian({
				editionId: article.frontendData.editionId,
				stage: article.frontendData.config.stage,
				frontendAssetsFullURL:
					article.frontendData.config.frontendAssetsFullURL,
				revisionNumber: article.frontendData.config.revisionNumber,
				sentryPublicApiKey:
					article.frontendData.config.sentryPublicApiKey,
				sentryHost: article.frontendData.config.sentryHost,
				keywordIds: article.frontendData.config.keywordIds,
				dfpAccountId: article.frontendData.config.dfpAccountId,
				adUnit: article.frontendData.config.adUnit,
				ajaxUrl: article.frontendData.config.ajaxUrl,
				googletagUrl: article.frontendData.config.googletagUrl,
				switches: article.frontendData.config.switches,
				abTests: article.frontendData.config.abTests,
				brazeApiKey: article.frontendData.config.brazeApiKey,
				isPaidContent: article.frontendData.pageType.isPaidContent,
				contentType: article.frontendData.contentType,
				shouldHideReaderRevenue:
					article.frontendData.shouldHideReaderRevenue,
				GAData: extractGA({
					webTitle: article.frontendData.webTitle,
					format: article.frontendData.format,
					sectionName: article.frontendData.sectionName,
					contentType: article.frontendData.contentType,
					tags: article.frontendData.tags,
					pageId: article.frontendData.pageId,
					editionId: article.frontendData.editionId,
					beaconURL: article.frontendData.beaconURL,
				}),
				unknownConfig: article.frontendData.config,
			}),
		),
	);

	const getAmpLink = (tags: TagType[]) => {
		if (
			!isAmpSupported({
				format: article.frontendData.format,
				tags,
				elements: article.frontendData.blocks.flatMap(
					(block) => block.elements,
				),
				switches: article.frontendData.config.switches,
				main: article.frontendData.main,
			})
		) {
			return undefined;
		}

		return `https://amp.theguardian.com/${article.frontendData.pageId}`;
	};

	// Only include AMP link for interactives which have the 'ampinteractive' tag
	const ampLink = getAmpLink(article.frontendData.tags);

	const { openGraphData } = article.frontendData;
	const { twitterData } = article.frontendData;
	const keywords =
		typeof article.frontendData.config.keywords === 'undefined' ||
		article.frontendData.config.keywords === 'Network Front'
			? ''
			: article.frontendData.config.keywords;

	const initTwitter = `
<script>
// https://developer.twitter.com/en/docs/twitter-for-websites/javascript-api/guides/set-up-twitter-for-websites
window.twttr = (function(d, s, id) {
	var js, fjs = d.getElementsByTagName(s)[0],
	t = window.twttr || {};
	if (d.getElementById(id)) return t;
	js = d.createElement(s);
	js.id = id;
	js.src = "https://platform.twitter.com/widgets.js";
	fjs.parentNode.insertBefore(js, fjs);

	t._e = [];
	t.ready = function(f) {
	t._e.push(f);
	};

	return t;
}(document, "script", "twitter-wjs"));
</script>`;

	const { webURL, canonicalUrl } = article.frontendData;

	const recipeMarkup =
		webURL in recipeSchema ? recipeSchema[webURL] : undefined;

	return pageTemplate({
		linkedData,
		priorityScriptTags,
		lowPriorityScriptTags,
		css: extractedCss,
		html,
		title,
		description: article.frontendData.trailText,
		windowGuardian,
		gaPath,
		ampLink,
		openGraphData,
		twitterData,
		keywords,
		initTwitter:
			pageHasTweetElements || format.design === ArticleDesign.LiveBlog
				? initTwitter
				: undefined,
		recipeMarkup,
		offerHttp3,
		canonicalUrl,
	});
};
