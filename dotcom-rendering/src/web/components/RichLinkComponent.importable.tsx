import { RichLink, RichLinkImageData } from './RichLink';
import { DefaultRichLink } from './DefaultRichLink';

import { useApi } from '../lib/useApi';
import { decideFormat } from '../lib/decideFormat';

type Props = {
	element: RichLinkBlockElement;
	ajaxUrl: string;
	richLinkIndex: number;
	format: ArticleFormat;
};

interface CAPIRichLinkType {
	cardStyle: RichLinkCardType;
	thumbnailUrl: string;
	headline: string;
	contentType: ContentType;
	url: string;
	tags: TagType[];
	sponsorName: string;
	format: CAPIFormat;
	starRating?: number;
	contributorImage?: string;
	imageAsset: ImageAsset;
}
interface ImageAsset {
	index: number;
	fields: ImageAssetFields;
	mediaType: string;
	url: string;
}
interface ImageAssetFields {
	displayCredit: string;
	source: string;
	photographer: string;
	isMaster: string;
	altText: string;
	height: string;
	credit: string;
	mediaId: string;
	width: string;
}

const buildUrl: (element: RichLinkBlockElement, ajaxUrl: string) => string = (
	element,
	ajaxUrl,
) => {
	const path = new URL(element.url).pathname;
	return `${ajaxUrl}/embed/card${path}.json?dcr=true`;
};

export const RichLinkComponent = ({
	element,
	ajaxUrl,
	richLinkIndex,
	format,
}: Props) => {
	const url = buildUrl(element, ajaxUrl);
	const { data, error } = useApi<CAPIRichLinkType>(url);

	if (error) {
		// Send the error to Sentry
		window?.guardian?.modules?.sentry?.reportError(error, 'rich-link');
	}

	if (!data) {
		return (
			<DefaultRichLink
				index={richLinkIndex}
				headlineText={element.text}
				url={element.url}
			/>
		);
	}

	const richLinkImageData: RichLinkImageData = {
		thumbnailUrl: data.thumbnailUrl,
		altText: data.imageAsset?.fields.altText,
		width: data.imageAsset?.fields.width,
		height: data.imageAsset?.fields.height,
	};

	return (
		<RichLink
			richLinkIndex={richLinkIndex}
			cardStyle={data.cardStyle}
			imageData={richLinkImageData}
			headlineText={data.headline}
			contentType={data.contentType}
			url={data.url}
			starRating={data.starRating}
			linkFormat={decideFormat(data.format)}
			format={format}
			tags={data.tags}
			sponsorName={data.sponsorName}
			contributorImage={data.contributorImage}
		/>
	);
};
