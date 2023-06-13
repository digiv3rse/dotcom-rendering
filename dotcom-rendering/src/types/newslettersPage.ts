import type { EditionId } from '../lib/edition';
import type { ServerSideTests, Switches } from './config';
import type { Newsletter } from './content';
import type { FooterType } from './footer';

// commented out properties are included in the JSON data from
// frontend, but not actually used on the AllEditorialNewsletters
// page.
// TO DO - update frontend to exclude the unused properites?
type FENewslettersConfigType = {
	ajaxUrl: string;
	sentryPublicApiKey: string;
	sentryHost: string;
	dcrSentryDsn: string; // used in dotcom-rendering/src/client/sentryLoader/sentry.ts
	switches: Switches;
	abTests: ServerSideTests;
	dfpAccountId: string;
	commercialBundleUrl: string;
	revisionNumber: string;
	isDev?: boolean;
	googletagUrl: string;
	stage: StageType;
	frontendAssetsFullURL: string;
	adUnit: string;
	// isSensitive: boolean;
	// videoDuration?: number;
	edition: EditionId;
	// section: string;
	// sharedAdTargeting: { [key: string]: any };
	idApiUrl: string;
	discussionApiUrl: string;
	// discussionD2Uid: string;
	// discussionApiClientHeader: string;
	// isPhotoEssay?: boolean;
	// references?: { [key: string]: string }[];
	host?: string;
	idUrl?: string;
	mmaUrl?: string;
	brazeApiKey?: string;
	ipsosTag?: string; // only relevant for AMP
	// isLiveBlog?: boolean;
	// isLive?: boolean;
	// isPreview?: boolean;
};

export interface FENewslettersPageType {
	id: string;
	newsletters: Newsletter[];
	editionId: EditionId;
	subscribeUrl: string;
	contributionsServiceUrl: string;
	beaconURL: string;
	webTitle: string;
	description: string;
	config: FENewslettersConfigType;
	twitterData?: {
		[key: string]: string;
	};
	openGraphData?: {
		[key: string]: string;
	};
	nav: FENavType;
	pageFooter: FooterType;
	canonicalUrl: string;
	isAdFreeUser: boolean;
}

// Types are currently equivalent, but will need to
// add properties to DCRNewslettersPageType created in
// the enhanceAllEditorialNewslettersPage function
export type DCRNewslettersPageType = FENewslettersPageType;
