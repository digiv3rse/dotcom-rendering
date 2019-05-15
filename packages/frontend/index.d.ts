interface ArticleProps {
    CAPI: CAPIType;
    NAV: NavType;
    config: ConfigType;
}

// 'labs' is a fake pillar used to identify paid content (Guardian Labs) for rendering styling.
type Pillar = 'news' | 'opinion' | 'sport' | 'culture' | 'lifestyle' | 'labs';

type Edition = 'UK' | 'US' | 'INT' | 'AU';

type SharePlatform =
    | 'facebook'
    | 'twitter'
    | 'email'
    | 'whatsApp'
    | 'pinterest'
    | 'linkedIn'
    | 'messenger';

// shared type declarations
interface SimpleLinkType {
    url: string;
    title: string;
}

interface AdTargetParam {
    name: string;
    value: string | string[];
}

interface EditionCommercialProperties {
    adTargeting: AdTargetParam[];
    branding?: Branding;
}

type CommercialProperties = { [E in Edition]: EditionCommercialProperties };

interface Branding {
    type: 'paid-content';
    sponsorName: string;
    logo: {
        src: string;
        link: string;
        label: string;
        dimensions: { width: number; height: number };
    };
    aboutThisLink: string;
}

interface LinkType extends SimpleLinkType {
    longTitle: string;
    children?: LinkType[];
    mobileOnly?: boolean;
    pillar?: Pillar;
    more?: boolean;
}

interface PillarType extends LinkType {
    pillar: Pillar;
    more: false;
}

interface MoreType extends LinkType {
    more: true;
}

interface ReaderRevenueCategories {
    contribute: string;
    subscribe: string;
    support: string;
}

type ReaderRevenueCategory = 'contribute' | 'subscribe' | 'support';
interface ReaderRevenuePositions {
    header: ReaderRevenueCategories;
    footer: ReaderRevenueCategories;
    sideMenu: ReaderRevenueCategories;
    ampHeader: ReaderRevenueCategories;
    ampFooter: ReaderRevenueCategories;
}

type ReaderRevenuePosition =
    | 'header'
    | 'footer'
    | 'sideMenu'
    | 'ampHeader'
    | 'ampFooter';

interface NavType {
    pillars: PillarType[];
    otherLinks: MoreType;
    brandExtensions: LinkType[];
    currentNavLink: string;
    subNavSections?: {
        parent?: LinkType;
        links: LinkType[];
    };
    readerRevenueLinks: ReaderRevenuePositions;
}

interface AuthorType {
    byline: string;
    twitterHandle?: string;
    email?: string;
}

interface Block {
    id: string;
    elements: CAPIElement[];
    createdOnDisplay?: string;
    lastUpdatedDisplay?: string;
    title?: string;
}

interface Pagination {
    currentPage: number;
    totalPages: number;
    newest?: string;
    newer?: string;
    oldest?: string;
    older?: string;
}

interface CAPIType {
    headline: string;
    standfirst: string;
    mainMediaElements: CAPIElement[];
    main: string;
    body: string;
    keyEvents: Block[];
    blocks: Block[];
    pagination?: Pagination;
    author: AuthorType;
    webPublicationDate: Date;
    webPublicationDateDisplay: string;
    editionLongForm: string;
    editionId: Edition;
    pageId: string;
    ageWarning?: string;
    sharingUrls: {
        [K in SharePlatform]?: {
            url: string;
            userMessage: string;
        }
    };
    tags: TagType[];
    pillar: Pillar;
    isImmersive: boolean;
    sectionLabel: string;
    sectionUrl: string;
    sectionName?: string;
    subMetaSectionLinks: SimpleLinkType[];
    subMetaKeywordLinks: SimpleLinkType[];
    shouldHideAds: boolean;
    webURL: string;

    // AMP specific (for now)
    guardianBaseURL: string;
    contentType: string;
    hasRelated: boolean;
    hasStoryPackage: boolean;
    beaconURL: string;
    isCommentable: boolean;
    commercialProperties: CommercialProperties;
    starRating?: number;
    trailText: string;
}

interface TagType {
    id: string;
    type: string;
    title: string;
    twitterHandle?: string;
    paidContentType?: string;
    bylineImageUrl?: string;
}

/**
 * the config model will contain useful app/site
 * level data. Although currently derived from the config model
 * constructed in frontend and passed to dotcom-rendering
 * this data could eventually be defined in dotcom-rendering
 */
interface ConfigType {
    ajaxUrl: string;
    sentryPublicApiKey: string;
    sentryHost: string;
    subscribeWithGoogleApiUrl: string;
    isDev: boolean;
    switches: { [key: string]: boolean };
    dfpAccountId: string;
    commercialUrl: string;
}

// 3rd party type declarations
declare module 'emotion-server' {
    export const extractCritical: any;
}
declare module 'dompurify' {
    const createDOMPurify: any;
    export default createDOMPurify;
}
declare module 'compose-function' {
    const compose: any;
    export default compose;
}
declare module 'minify-css-string' {
    const minifyCSSString: any;
    export default minifyCSSString;
}

/* AMP types */
// tslint:disable-next-line no-namespace
declare namespace JSX {
    interface IntrinsicElements {
        'amp-sidebar': any;
        'amp-accordion': any;
        'amp-img': any;
        'amp-twitter': any;
        'amp-list': any;
        'amp-vimeo': any;
        'amp-facebook': any;
        'amp-video': any;
        'amp-instagram': any;
        'amp-soundcloud': any;
        'amp-iframe': any;
        'amp-analytics': any;
        'amp-pixel': any;
        'amp-ad': any;
        'amp-youtube': any;
        'amp-geo': any;
        'amp-consent': any;
        template: any;
    }
}
