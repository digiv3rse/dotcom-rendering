import type { Image } from '@guardian/apps-rendering-api-models/image';
import type { NewRelatedContent } from '@guardian/apps-rendering-api-models/newRelatedContent';
import { RelatedItemType } from '@guardian/apps-rendering-api-models/relatedItemType';
import type { Content } from '@guardian/content-api-models/v1/content';
import { ArticleDesign, ArticleSpecial } from '@guardian/libs';
import type { Option } from '@guardian/types';
import { fromNullable, none, OptionKind, some } from '@guardian/types';
import {
	articleContributors,
	articleMainImage,
	isAnalysis,
	isFeature,
	maybeCapiDate,
} from 'capi';
import type { Contributor } from 'contributor';
import { parseContributors } from 'contributor';
import {
	isAudio,
	isComment,
	isGallery,
	isLabs,
	isLetter,
	isLive,
	isReview,
	isVideo,
} from 'item';
import { compose, index, pipe } from 'lib';
import { Optional } from 'optional';

interface RelatedItemFields {
	headline: string;
	publishDate: Option<Date>;
	mainMedia: Option<Image>;
	webUrl: string;
	contributor: Option<Contributor>;
	design: ArticleDesign;
}

interface FeatureRelatedItem extends RelatedItemFields {
	design: ArticleDesign.Feature;
}

interface LiveBlogRelatedItem extends RelatedItemFields {
	design: ArticleDesign.LiveBlog;
}

interface DeadBlogRelatedItem extends RelatedItemFields {
	design: ArticleDesign.DeadBlog;
}

interface ReviewRelatedItem extends RelatedItemFields {
	design: ArticleDesign.Review;
	starRating: string;
}

interface AnalysisRelatedItem extends RelatedItemFields {
	design: ArticleDesign.Analysis;
}

interface CommentRelatedItem extends RelatedItemFields {
	design: ArticleDesign.Comment;
}

interface AudioRelatedItem extends RelatedItemFields {
	design: ArticleDesign.Audio;
}

interface VideoRelatedItem extends RelatedItemFields {
	design: ArticleDesign.Video;
}

interface GalleryRelatedItem extends RelatedItemFields {
	design: ArticleDesign.Gallery;
}

interface LabsRelatedItem extends RelatedItemFields {
	design: ArticleDesign.Standard;
	theme: ArticleSpecial.Labs;
}

interface StandardRelatedItem extends RelatedItemFields {
	design: Exclude<
		ArticleDesign,
		| ArticleDesign.Feature
		| ArticleDesign.LiveBlog
		| ArticleDesign.DeadBlog
		| ArticleDesign.Review
		| ArticleDesign.Analysis
		| ArticleDesign.Comment
		| ArticleDesign.Audio
		| ArticleDesign.Video
		| ArticleDesign.Gallery
	>;
}

type RelatedItem =
	| FeatureRelatedItem
	| LiveBlogRelatedItem
	| DeadBlogRelatedItem
	| ReviewRelatedItem
	| AnalysisRelatedItem
	| CommentRelatedItem
	| AudioRelatedItem
	| VideoRelatedItem
	| GalleryRelatedItem
	| StandardRelatedItem;

const parseRelatedItemType = (content: Content): RelatedItemType => {
	const { tags } = content;
	if (isFeature(content)) {
		return RelatedItemType.FEATURE;
	} else if (isLive(tags) && content.fields?.liveBloggingNow) {
		return RelatedItemType.LIVE;
	} else if (isReview(tags)) {
		return RelatedItemType.REVIEW;
	} else if (isAnalysis(content)) {
		return RelatedItemType.ANALYSIS;
	} else if (isComment(tags) || isLetter(tags)) {
		return RelatedItemType.COMMENT;
	} else if (isAudio(tags)) {
		return RelatedItemType.AUDIO;
	} else if (isVideo(tags)) {
		return RelatedItemType.VIDEO;
	} else if (isGallery(tags)) {
		return RelatedItemType.GALLERY;
	} else if (isLabs(tags)) {
		return RelatedItemType.ADVERTISEMENT_FEATURE;
	} else {
		return RelatedItemType.ARTICLE;
	}
};

const parseHeaderImage = (content: Content): Image | undefined => {
	const optionalImage = articleMainImage(content).flatMap((element) => {
		const masterAsset = element.assets.find(
			(asset) => asset.typeData?.isMaster,
		);

		return Optional.fromNullable(masterAsset).map((asset) => ({
			url: asset.file ?? '',
			height: asset.typeData?.height ?? 360,
			width: asset.typeData?.width ?? 600,
			altText: element.imageTypeData?.alt,
		}));
	});

	if (optionalImage.isSome()) {
		return optionalImage.value;
	} else {
		return undefined;
	}
};

const getContributor = compose(index(0), articleContributors);

type Foo = {
	title: string;
	relatedItems: RelatedItem[];
};

type RelatedItemFieldsNoDesign = Omit<RelatedItemFields, 'design'>;

const relatedContentFields = (content: Content): RelatedItemFieldsNoDesign => ({
	headline: content.fields?.headline ?? content.webTitle,
	publishDate: maybeCapiDate(content.webPublicationDate),
	mainMedia: pipe(parseHeaderImage(content), fromNullable),
	webUrl: content.id,
	contributor: index(0)(parseContributors('', content)),
});

const parseMapiRelatedContent = (
	maybeRelatedContent: Option<NewRelatedContent>,
): Option<Foo> => {
	if (maybeRelatedContent.kind === OptionKind.None) {
		return none;
	}

	const relatedContent = maybeRelatedContent.value;

	return some({
		title: relatedContent.title,
		relatedItems: relatedContent.relatedItems.map((content) => {
			const { tags } = content;
			if (isFeature(content)) {
				return {
					...relatedContentFields(content),
					design: ArticleDesign.Feature,
				};
			} else if (isLive(tags) && content.fields?.liveBloggingNow) {
				return {
					...relatedContentFields(content),
					design: ArticleDesign.LiveBlog,
				};
			} else if (isReview(tags)) {
				return {
					...relatedContentFields(content),
					design: ArticleDesign.Review,
					starRating: content.fields?.starRating?.toString() ?? '',
				};
			} else if (isAnalysis(content)) {
				return {
					...relatedContentFields(content),
					design: ArticleDesign.Analysis,
				};
			} else if (isComment(tags) || isLetter(tags)) {
				return {
					...relatedContentFields(content),
					design: ArticleDesign.Comment,
				};
			} else if (isAudio(tags)) {
				return {
					...relatedContentFields(content),
					design: ArticleDesign.Audio,
				};
			} else if (isVideo(tags)) {
				return {
					...relatedContentFields(content),
					design: ArticleDesign.Video,
				};
			} else if (isGallery(tags)) {
				return {
					...relatedContentFields(content),
					design: ArticleDesign.Gallery,
				};
			} else if (isLabs(tags)) {
				return {
					...relatedContentFields(content),
					design: ArticleDesign.Standard,
					theme: ArticleSpecial.Labs,
				};
			} else {
				return {
					...relatedContentFields(content),
					design: ArticleDesign.Standard,
				};
			}
		}),
	});
};

const parseRelatedContent = (relatedContent: Content[]): NewRelatedContent => {
	return {
		title: 'Related stories',
		relatedItems: relatedContent.slice(0, 4),
	};
};

export { parseRelatedContent, parseHeaderImage, parseMapiRelatedContent };
export type { Foo };
