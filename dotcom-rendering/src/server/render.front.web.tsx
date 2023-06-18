import { ArticlePillar, isString } from '@guardian/libs';
import {
	BUILD_VARIANT,
	dcrJavascriptBundle,
} from '../../scripts/webpack/bundles';
import { FrontPage } from '../components/FrontPage';
import { generateScriptTags, getScriptsFromManifest } from '../lib/assets';
import { renderToStringWithEmotion } from '../lib/emotion';
import { escapeData } from '../lib/escapeData';
import { getHttp3Url } from '../lib/getHttp3Url';
import { themeToPillar } from '../lib/themeToPillar';
import { extractNAV, NavType } from '../model/extract-nav';
import { makeWindowGuardian } from '../model/window-guardian';
import type { DCRFrontType } from '../types/front';
import { htmlPageTemplate } from './htmlPageTemplate';

interface Props {
	front: DCRFrontType;
}

const extractFrontNav = (front: DCRFrontType): NavType => {
	const NAV = extractNAV(front.nav);
	const { currentNavLink } = NAV;

	// Is the `currentNavLink` a pillar?
	const pillarFromCurrentLink = (() => {
		switch (currentNavLink) {
			// The pillar name is "arts" in CAPI, but "culture" everywhere else
			case 'Arts':
			case 'Culture':
				return ArticlePillar.Culture;
			case 'Opinion':
				return ArticlePillar.Opinion;
			case 'News':
				return ArticlePillar.News;
			case 'Sport':
				return ArticlePillar.Sport;
			case 'Lifestyle':
				return ArticlePillar.Lifestyle;
			default:
				return undefined;
		}
	})();

	// Is the `currentNavLink` in one of the children of the pillar?
	const themeFromSubNav = NAV.pillars.find((pillar) => {
		// Annoyingly "Football" appears in "News" and "Sport" pillars, so we exclude this case in "News"
		// As "Football" is always "Sport". You can see the corresponding `frontend` code here:
		// https://github.com/guardian/frontend/blob/main/common/app/navigation/Navigation.scala#L141-L143
		if (
			pillar.pillar === ArticlePillar.News &&
			currentNavLink === 'Football'
		) {
			return false;
		}

		return pillar.children?.some((child) => {
			return child.title === currentNavLink;
		});
	})?.pillar;

	const pillarFromSubNav = themeToPillar(themeFromSubNav);

	const selectedPillar =
		pillarFromCurrentLink ?? pillarFromSubNav ?? ArticlePillar.News;

	return {
		...NAV,
		selectedPillar,
	};
};

export const renderFront = ({ front }: Props): string => {
	const title = front.webTitle;
	const NAV = extractFrontNav(front);

	const { html, extractedCss } = renderToStringWithEmotion(
		<FrontPage front={front} NAV={NAV} />,
	);

	// Evaluating the performance of HTTP3 over HTTP2
	// See: https://github.com/guardian/dotcom-rendering/pull/5394
	const { offerHttp3 = false } = front.config.switches;

	const polyfillIO =
		'https://assets.guim.co.uk/polyfill.io/v3/polyfill.min.js?rum=0&features=es6,es7,es2017,es2018,es2019,default-3.6,HTMLPictureElement,IntersectionObserver,IntersectionObserverEntry,URLSearchParams,fetch,NodeList.prototype.forEach,navigator.sendBeacon,performance.now,Promise.allSettled&flags=gated&callback=guardianPolyfilled&unknown=polyfill&cacheClear=1';

	const shouldServeVariantBundle: boolean = [
		BUILD_VARIANT,
		front.config.abTests[dcrJavascriptBundle('Variant')] === 'variant',
	].every(Boolean);

	/**
	 * This function returns an array of files found in the manifests
	 * defined by `manifestPaths`.
	 *
	 * @see getScriptsFromManifest
	 */
	const getScriptArrayFromFile = getScriptsFromManifest({
		platform: 'web',
		shouldServeVariantBundle,
	});

	/**
	 * The highest priority scripts.
	 * These scripts have a considerable impact on site performance.
	 * Only scripts critical to application execution may go in here.
	 * Please talk to the dotcom platform team before adding more.
	 * Scripts will be executed in the order they appear in this array
	 */
	const scriptTags = generateScriptTags(
		[
			polyfillIO,
			...getScriptArrayFromFile('frameworks.js'),
			...getScriptArrayFromFile('index.js'),
			process.env.COMMERCIAL_BUNDLE_URL ??
				front.config.commercialBundleUrl,
		]
			.filter(isString)
			.map((script) => (offerHttp3 ? getHttp3Url(script) : script)),
	);

	/**
	 * We escape windowGuardian here to prevent errors when the data
	 * is placed in a script tag on the page
	 */
	const windowGuardian = escapeData(
		JSON.stringify(
			makeWindowGuardian({
				editionId: front.editionId,
				stage: front.config.stage,
				frontendAssetsFullURL: front.config.frontendAssetsFullURL,
				revisionNumber: front.config.revisionNumber,
				sentryPublicApiKey: front.config.sentryPublicApiKey,
				sentryHost: front.config.sentryHost,
				keywordIds: front.config.keywordIds,
				dfpAccountId: front.config.dfpAccountId,
				adUnit: front.config.adUnit,
				ajaxUrl: front.config.ajaxUrl,
				googletagUrl: front.config.googletagUrl,
				switches: front.config.switches,
				abTests: front.config.abTests,
				brazeApiKey: front.config.brazeApiKey,
				// Until we understand exactly what config we need to make available client-side,
				// add everything we haven't explicitly typed as unknown config
				unknownConfig: front.config,
			}),
		),
	);

	const keywords = front.config.keywords;

	return htmlPageTemplate({
		scriptTags,
		css: extractedCss,
		html,
		title,
		description: front.pressedPage.seoData.description,
		windowGuardian,
		keywords,
		offerHttp3,
		renderingTarget: 'Web',
		borkFCP: front.config.abTests.borkFcpVariant === 'variant',
		borkFID: front.config.abTests.borkFidVariant === 'variant',
	});
};
