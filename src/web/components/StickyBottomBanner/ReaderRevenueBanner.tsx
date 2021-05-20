import React, { useState } from 'react';
import { css } from '@emotion/react';

import { useHasBeenSeen } from '@root/src/web/lib/useHasBeenSeen';
import {
	getWeeklyArticleHistory,
	logView,
} from '@root/node_modules/@guardian/automat-client';
import {
	shouldHideSupportMessaging,
	getArticleCountConsent,
	withinLocalNoBannerCachePeriod,
	setLocalNoBannerCachePeriod,
	MODULES_VERSION,
} from '@root/src/web/lib/contributions';
import { getCookie } from '@root/src/web/browser/cookie';
import {
	sendOphanComponentEvent,
	submitComponentEvent,
} from '@root/src/web/browser/ophan/ophan';
import { getZIndex } from '@root/src/web/lib/getZIndex';
import { trackNonClickInteraction } from '@root/src/web/browser/ga/ga';
import { WeeklyArticleHistory } from '@root/node_modules/@guardian/automat-client/dist/types';
import { getForcedVariant } from '@root/src/web/lib/readerRevenueDevUtils';
import { CanShowResult } from '@root/src/web/lib/messagePicker';
import { setAutomat } from '@root/src/web/lib/setAutomat';
import { useOnce } from '@root/src/web/lib/useOnce';

type BaseProps = {
	isSignedIn: boolean;
	contentType: string;
	sectionName?: string;
	shouldHideReaderRevenue: boolean;
	isMinuteArticle: boolean;
	isPaidContent: boolean;
	isSensitive: boolean;
	tags: TagType[];
	contributionsServiceUrl: string;
	alreadyVisitedCount: number;
	engagementBannerLastClosedAt?: string;
	subscriptionBannerLastClosedAt?: string;
	weeklyArticleHistory?: WeeklyArticleHistory;
};

type BuildPayloadProps = BaseProps & {
	countryCode: string;
	hasConsentedToArticleCounts: boolean;
};

type CanShowProps = BaseProps & {
	asyncCountryCode: Promise<string>;
	remoteBannerConfig: boolean;
	section: string;
};

type ReaderRevenueComponentType =
	| 'ACQUISITIONS_SUBSCRIPTIONS_BANNER'
	| 'ACQUISITIONS_OTHER';

export type CanShowFunctionType = (
	props: CanShowProps,
) => Promise<CanShowResult>;

// TODO specify return type (need to update client to provide this first)
const buildPayload = ({
	isSignedIn,
	shouldHideReaderRevenue,
	isPaidContent,
	alreadyVisitedCount,
	engagementBannerLastClosedAt,
	subscriptionBannerLastClosedAt,
	countryCode,
	hasConsentedToArticleCounts,
}: BuildPayloadProps) => {
	return {
		tracking: {
			ophanPageId: window.guardian.config.ophan.pageViewId,
			platformId: 'GUARDIAN_WEB',
			clientName: 'dcr',
			referrerUrl: window.location.origin + window.location.pathname,
		},
		targeting: {
			alreadyVisitedCount,
			shouldHideReaderRevenue,
			isPaidContent,
			showSupportMessaging: !shouldHideSupportMessaging(isSignedIn),
			engagementBannerLastClosedAt,
			subscriptionBannerLastClosedAt,
			mvtId: Number(getCookie('GU_mvt_id')),
			countryCode,
			weeklyArticleHistory: getWeeklyArticleHistory(),
			hasOptedOutOfArticleCount: !hasConsentedToArticleCounts,
			modulesVersion: MODULES_VERSION,
		},
	};
};

// TODO replace this with an imported version from the client lib
const getBanner = (meta: { [key: string]: any }, url: string): Promise<any> => {
	const json = JSON.stringify(meta);
	return fetch(url, {
		method: 'post',
		headers: { 'Content-Type': 'application/json' },
		body: json,
	})
		.then((response: Response) => {
			if (!response.ok) {
				throw Error(
					response.statusText ||
						`SlotBanner | An api call returned HTTP status ${response.status}`,
				);
			}
			return response;
		})
		.then((response) => response.json());
};

export const canShowRRBanner: CanShowFunctionType = async ({
	remoteBannerConfig,
	isSignedIn,
	asyncCountryCode,
	contentType,
	sectionName,
	shouldHideReaderRevenue,
	isMinuteArticle,
	isPaidContent,
	isSensitive,
	tags,
	contributionsServiceUrl,
	alreadyVisitedCount,
	engagementBannerLastClosedAt,
	subscriptionBannerLastClosedAt,
}) => {
	if (!remoteBannerConfig) return { result: false };

	if (shouldHideReaderRevenue || isPaidContent) {
		// We never serve Reader Revenue banners in this case
		return { result: false };
	}

	if (
		engagementBannerLastClosedAt &&
		subscriptionBannerLastClosedAt &&
		withinLocalNoBannerCachePeriod()
	) {
		return { result: false };
	}

	const countryCode = await asyncCountryCode;
	const hasConsentedToArticleCounts = await getArticleCountConsent();
	const bannerPayload = buildPayload({
		isSignedIn,
		countryCode,
		contentType,
		sectionName,
		shouldHideReaderRevenue,
		isMinuteArticle,
		isPaidContent,
		tags,
		contributionsServiceUrl,
		isSensitive,
		alreadyVisitedCount,
		engagementBannerLastClosedAt,
		subscriptionBannerLastClosedAt,
		hasConsentedToArticleCounts,
	});
	const forcedVariant = getForcedVariant('banner');
	const queryString = forcedVariant ? `?force=${forcedVariant}` : '';

	return getBanner(
		bannerPayload,
		`${contributionsServiceUrl}/banner${queryString}`,
	).then((json: { data?: any }) => {
		if (!json.data) {
			if (
				engagementBannerLastClosedAt &&
				subscriptionBannerLastClosedAt
			) {
				setLocalNoBannerCachePeriod();
			}
			return { result: false };
		}

		const { module, meta } = json.data;

		return { result: true, meta: { module, meta } };
	});
};

export const canShowPuzzlesBanner: CanShowFunctionType = async ({
	remoteBannerConfig,
	isSignedIn,
	asyncCountryCode,
	contentType,
	sectionName,
	shouldHideReaderRevenue,
	isMinuteArticle,
	isPaidContent,
	isSensitive,
	tags,
	contributionsServiceUrl,
	alreadyVisitedCount,
	engagementBannerLastClosedAt,
	subscriptionBannerLastClosedAt,
	section,
}) => {
	const isPuzzlesPage =
		section === 'crosswords' ||
		tags.some((tag) => tag.type === 'Series' && tag.title === 'Sudoku');

	if (shouldHideReaderRevenue) {
		// We never serve Reader Revenue banners in this case
		return { result: false };
	}

	if (isPuzzlesPage && remoteBannerConfig) {
		const countryCode = await asyncCountryCode;
		const hasConsentedToArticleCounts = await getArticleCountConsent();
		const bannerPayload = buildPayload({
			isSignedIn,
			countryCode,
			contentType,
			sectionName,
			shouldHideReaderRevenue,
			isMinuteArticle,
			isPaidContent,
			tags,
			contributionsServiceUrl,
			isSensitive,
			alreadyVisitedCount,
			engagementBannerLastClosedAt,
			subscriptionBannerLastClosedAt,
			hasConsentedToArticleCounts,
		});
		return getBanner(
			bannerPayload,
			`${contributionsServiceUrl}/puzzles`,
		).then((json: { data?: any }) => {
			if (!json.data) {
				return { result: false };
			}

			const { module, meta } = json.data;

			return { result: true, meta: { module, meta } };
		});
	}

	return { result: false };
};

export type BannerProps = {
	meta: any;
	module: { url: string; name: string; props: any[] };
};

type RemoteBannerProps = BannerProps & {
	componentTypeName: ReaderRevenueComponentType;
	displayEvent: string;
};

const RemoteBanner = ({
	componentTypeName,
	displayEvent,
	meta,
	module,
}: RemoteBannerProps) => {
	const [Banner, setBanner] = useState<React.FC>();

	const [hasBeenSeen, setNode] = useHasBeenSeen({
		threshold: 0,
		debounce: true,
	});

	useOnce(() => {
		if (module === undefined || meta === undefined) {
			return;
		}

		setAutomat();

		window
			.guardianPolyfilledImport(module.url)
			.then((bannerModule: { [key: string]: JSX.Element }) => {
				setBanner(() => bannerModule[module.name]); // useState requires functions to be wrapped
				sendOphanComponentEvent('INSERT', meta);
			})
			.catch((error) => {
				const msg = `Error importing RR banner: ${error}`;
				// eslint-disable-next-line no-console
				console.log(msg);
				window.guardian.modules.sentry.reportError(
					new Error(msg),
					'rr-banner',
				);
			});
	}, []);

	useOnce(() => {
		const { abTestName, componentType } = meta;

		logView(abTestName);

		sendOphanComponentEvent('VIEW', meta);

		// track banner view event in Google Analytics for subscriptions banner
		if (componentType === componentTypeName) {
			trackNonClickInteraction(displayEvent);
		}
	}, [hasBeenSeen, meta]);

	if (Banner) {
		return (
			// The css here is necessary to put the container div in view, so that we can track the view
			<div
				ref={setNode}
				css={css`
					width: 100%;
					${getZIndex('banner')}
				`}
			>
				{/* eslint-disable react/jsx-props-no-spreading */}
				<Banner
					{...module.props}
					// @ts-ignore
					submitComponentEvent={submitComponentEvent}
				/>
				{/* eslint-enable react/jsx-props-no-spreading */}
			</div>
		);
	}

	return null;
};

export const ReaderRevenueBanner = ({ meta, module }: BannerProps) => (
	<RemoteBanner
		componentTypeName="ACQUISITIONS_SUBSCRIPTIONS_BANNER"
		displayEvent="subscription-banner : display"
		meta={meta}
		module={module}
	/>
);

export const PuzzlesBanner = ({ meta, module }: BannerProps) => (
	<RemoteBanner
		componentTypeName="ACQUISITIONS_OTHER"
		displayEvent="puzzles-banner : display"
		meta={meta}
		module={module}
	/>
);
