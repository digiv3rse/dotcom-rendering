// -------------------------------------
// Elements
// -------------------------------------
interface InteractiveAtomBlockElementBase {
    url: string;
    placeholderUrl?: string;
    id?: string;
    html?: string;
    css?: string;
    js?: string;
}

interface AudioAtomBlockElement {
    _type: 'model.dotcomrendering.pageElements.AudioAtomBlockElement';
    id: string;
    kicker: string;
    title?: string;
    trackUrl: string;
    duration: number;
    coverUrl: string;
    audioIndex?: number;
}

interface AudioBlockElement {
    _type: 'model.dotcomrendering.pageElements.AudioBlockElement';
}

interface BlockquoteBlockElement {
    _type: 'model.dotcomrendering.pageElements.BlockquoteBlockElement';
    html: string;
    quoted?: boolean;
}

interface CaptionBlockElement {
    _type: 'model.dotcomrendering.pageElements.CaptionBlockElement';
    display: Display;
    designType: DesignType;
    captionText?: string;
    pillar: Pillar;
    padCaption?: boolean;
    credit?: string;
    displayCredit?: boolean;
    shouldLimitWidth?: boolean;
    isOverlayed?: boolean;
}

interface CalloutBlockElement {
    _type: 'model.dotcomrendering.pageElements.CalloutBlockElement';
    id: string;
    calloutsUrl: string;
    activeFrom: number;
    displayOnSensitive: boolean;
    formId: number;
    title: string;
    description: string;
    tagName: string;
    formFields: CampaignFieldType[];
    calloutIndex?: number;
}

interface ChartAtomBlockElement extends InteractiveAtomBlockElementBase {
    _type: 'model.dotcomrendering.pageElements.ChartAtomBlockElement';
    chartIndex?: number;
    id: string;
    html: string;
}

interface CodeBlockElement {
    _type: 'model.dotcomrendering.pageElements.CodeBlockElement';
    isMandatory: boolean;
}

interface CommentBlockElement {
    _type: 'model.dotcomrendering.pageElements.CommentBlockElement';
    body: string;
    avatarURL: string;
    profileURL: string;
    profileName: string;
    permalink: string;
    dateTime: string;
}

interface ContentAtomBlockElement {
    _type: 'model.dotcomrendering.pageElements.ContentAtomBlockElement';
    atomId: string;
}

interface DisclaimerBlockElement {
    _type: 'model.dotcomrendering.pageElements.DisclaimerBlockElement';
    html: string;
}

interface DividerBlockElement {
    _type: 'model.dotcomrendering.pageElements.DividerBlockElement';
}

interface DocumentBlockElement {
    _type: 'model.dotcomrendering.pageElements.DocumentBlockElement';
    embedUrl: string;
    height: number;
    width: number;
    title?: string;
}

interface EmbedBlockElement {
    _type: 'model.dotcomrendering.pageElements.EmbedBlockElement';
    safe?: boolean;
    role?: RoleType;
    alt?: string;
    html: string;
    isMandatory: boolean;
}

interface ExplainerAtomBlockElement {
    _type: 'model.dotcomrendering.pageElements.ExplainerAtomBlockElement';
    id: string;
    title: string;
    body: string;
}

interface GenericAtomBlockElement extends InteractiveAtomBlockElementBase {
    _type: 'model.dotcomrendering.pageElements.GenericAtomBlockElement';
}

interface GuideAtomBlockElement {
    _type: 'model.dotcomrendering.pageElements.GuideAtomBlockElement';
    id: string;
    label: string;
    title: string;
    img?: string;
    html: string;
    credit: string;
    guideIndex?: number;
}

interface GuVideoBlockElement {
    _type: 'model.dotcomrendering.pageElements.GuVideoBlockElement';
    assets: VideoAssets[];
    caption: string;
    html: string;
    source: string;
}

interface HighlightBlockElement {
    _type: 'model.dotcomrendering.pageElements.HighlightBlockElement';
    html: string;
}

interface ImageBlockElement {
    _type: 'model.dotcomrendering.pageElements.ImageBlockElement';
    media: { allImages: Image[] };
    data: {
        alt?: string;
        credit?: string;
        caption?: string;
        copyright?: string;
    };
    imageSources: ImageSource[];
    displayCredit?: boolean;
    role: RoleType;
    title?: string;
}

interface InstagramBlockElement {
    _type: 'model.dotcomrendering.pageElements.InstagramBlockElement';
    html: string;
    url: string;
    hasCaption: boolean;
}

interface InteractiveAtomBlockElement extends InteractiveAtomBlockElementBase {
    _type: 'model.dotcomrendering.pageElements.InteractiveAtomBlockElement';
    id: string;
    js: string;
    html?: string;
    css?: string;
}

interface InteractiveBlockElement extends InteractiveAtomBlockElementBase {
    _type: 'model.dotcomrendering.pageElements.InteractiveBlockElement';
}

interface MapBlockElement {
    _type: 'model.dotcomrendering.pageElements.MapBlockElement';
    embedUrl: string;
    originalUrl: string;
    source: string;
    title: string;
    height: number;
    width: number;
    caption?: string;
}

interface MediaAtomBlockElement {
    _type: 'model.dotcomrendering.pageElements.MediaAtomBlockElement';
    id: string;
    assets: VideoAssets[];
    posterImage?: {
        url: string;
        width: number;
    }[];
    title?: string;
    duration?: number;
}

interface MultiImageBlockElement {
    _type: 'model.dotcomrendering.pageElements.MultiImageBlockElement';
    images: ImageBlockElement[];
    caption?: string;
}

interface ProfileAtomBlockElement {
    _type: 'model.dotcomrendering.pageElements.ProfileAtomBlockElement';
    id: string;
    label: string;
    title: string;
    img?: string;
    html: string;
    credit: string;
    profileIndex?: number;
}

interface PullquoteBlockElement {
    _type: 'model.dotcomrendering.pageElements.PullquoteBlockElement';
    html: string;
    role: string;
    attribution?: string;
}

interface QABlockElement {
    _type: 'model.dotcomrendering.pageElements.QABlockElement';
    id: string;
    title: string;
    img?: string;
    html: string;
    credit: string;
    qandaIndex?: number;
}

interface RichLinkBlockElement {
    _type: 'model.dotcomrendering.pageElements.RichLinkBlockElement';
    url: string;
    text: string;
    prefix: string;
    role?: Weighting;
    richLinkIndex?: number;
}

interface SoundcloudBlockElement {
    _type: 'model.dotcomrendering.pageElements.SoundcloudBlockElement';
    html: string;
    id: string;
    isTrack: boolean;
    isMandatory: boolean;
}

interface SpotifyBlockElement {
    _type: 'model.dotcomrendering.pageElements.SpotifyBlockElement';
    embedUrl?: string;
    title?: string;
    height?: number;
    width?: number;
    caption?: string;
}

interface SubheadingBlockElement {
    _type: 'model.dotcomrendering.pageElements.SubheadingBlockElement';
    html: string;
}

interface TableBlockElement {
    _type: 'model.dotcomrendering.pageElements.TableBlockElement';
    isMandatory: boolean;
    html: string;
}

interface TextBlockElement {
    _type: 'model.dotcomrendering.pageElements.TextBlockElement';
    dropCap?: boolean;
    html: string;
}

interface TimelineBlockElement {
    _type: 'model.dotcomrendering.pageElements.TimelineBlockElement';
    id: string;
    title: string;
    description?: string;
    events: TimelineEvent[];
    timelineIndex?: number;
}

interface TweetBlockElement {
    _type: 'model.dotcomrendering.pageElements.TweetBlockElement';
    html: string;
    url: string;
    id: string;
    hasMedia: boolean;
}

interface VideoBlockElement {
    _type: 'model.dotcomrendering.pageElements.VideoBlockElement';
}

interface VideoFacebookBlockElement {
    _type: 'model.dotcomrendering.pageElements.VideoFacebookBlockElement';
    url: string;
    height: number;
    width: number;
    caption?: string;
    embedUrl?: string;
}

interface VideoVimeoBlockElement {
    _type: 'model.dotcomrendering.pageElements.VideoVimeoBlockElement';
    embedUrl?: string;
    url: string;
    height: number;
    width: number;
    caption?: string;
    credit?: string;
    title?: string;
}

interface VideoYoutubeBlockElement {
    _type: 'model.dotcomrendering.pageElements.VideoYoutubeBlockElement';
    embedUrl?: string;
    url: string;
    originalUrl: string;
    height: number;
    width: number;
    caption?: string;
    credit?: string;
    title?: string;
}

interface YoutubeBlockElement {
    _type: 'model.dotcomrendering.pageElements.YoutubeBlockElement';
    assetId: string;
    mediaTitle: string;
    id?: string;
    channelId?: string;
    duration?: number;
    posterSrc?: string;
    expired: boolean;
    overrideImage?: string;
    youtubeIndex?: number;
}

type CAPIElement =
    | AudioAtomBlockElement
    | AudioBlockElement
    | BlockquoteBlockElement
    | CaptionBlockElement
    | CalloutBlockElement
    | ChartAtomBlockElement
    | CodeBlockElement
    | CommentBlockElement
    | ContentAtomBlockElement
    | DisclaimerBlockElement
    | DividerBlockElement
    | DocumentBlockElement
    | EmbedBlockElement
    | ExplainerAtomBlockElement
    | GenericAtomBlockElement
    | GuideAtomBlockElement
    | GuVideoBlockElement
    | HighlightBlockElement
    | ImageBlockElement
    | InstagramBlockElement
    | InteractiveAtomBlockElement
    | InteractiveBlockElement
    | MapBlockElement
    | MediaAtomBlockElement
    | MultiImageBlockElement
    | ProfileAtomBlockElement
    | PullquoteBlockElement
    | QABlockElement
    | RichLinkBlockElement
    | SoundcloudBlockElement
    | SpotifyBlockElement
    | SubheadingBlockElement
    | TableBlockElement
    | TextBlockElement
    | TimelineBlockElement
    | TweetBlockElement
    | VideoBlockElement
    | VideoFacebookBlockElement
    | VideoVimeoBlockElement
    | VideoYoutubeBlockElement
    | YoutubeBlockElement;

// -------------------------------------
// Misc
// -------------------------------------

type Weighting =
    | 'inline'
    | 'thumbnail'
    | 'supporting'
    | 'showcase'
    | 'halfwidth'
    | 'immersive';

// aka weighting. RoleType affects how an image is placed. It is called weighting
// in Composer but role in CAPI. We respect CAPI so we maintain this nomenclature
// in DCR
type RoleType =
    | 'immersive'
    | 'supporting'
    | 'showcase'
    | 'inline'
    | 'thumbnail'
    | 'halfWidth';

interface ImageSource {
    weighting: Weighting;
    srcSet: SrcSetItem[];
}

interface SrcSetItem {
    src: string;
    width: number;
}

interface Image {
    index: number;
    fields: {
        height: string;
        width: string;
        isMaster?: string;
    };
    mediaType: string;
    mimeType: string;
    url: string;
}

interface VideoAssets {
    url: string;
    mimeType: string;
}

interface TimelineEvent {
    title: string;
    date: string;
    body?: string;
    toDate?: string;
}

interface Switches {
    [key: string]: boolean;
}

// -------------------------------------
// Callout Campaign
// -------------------------------------

type CampaignFieldType =
    | CampaignFieldText
    | CampaignFieldTextArea
    | CampaignFieldFile
    | CampaignFieldRadio
    | CampaignFieldCheckbox
    | CampaignFieldSelect;

interface CampaignField {
    id: string;
    name: string;
    description?: string;
    required: boolean;
    textSize?: number;
    hideLabel: boolean;
    label: string;
}

interface CampaignFieldText extends CampaignField {
    type: 'text';
}

interface CampaignFieldTextArea extends CampaignField {
    type: 'textarea';
}

interface CampaignFieldFile extends CampaignField {
    type: 'file';
}

interface CampaignFieldRadio extends CampaignField {
    type: 'radio';
    options: {
        label: string;
        value: string;
    }[];
}

interface CampaignFieldCheckbox extends CampaignField {
    type: 'checkbox';
    options: {
        label: string;
        value: string;
    }[];
}

interface CampaignFieldSelect extends CampaignField {
    type: 'select';
    options: {
        label: string;
        value: string;
    }[];
}
