import { ArticleDesign, ArticlePillar, ArticleSpecial } from '@guardian/libs';
import { getSoleContributor } from '../lib/byline';
import { decideFormat } from '../lib/decideFormat';
import type { EditionId } from '../lib/edition';
import type { Group } from '../lib/getDataLinkName';
import { getDataLinkNameCard } from '../lib/getDataLinkName';
import type {
	DCRContainerPalette,
	DCRFrontCard,
	DCRSlideshowImage,
	DCRSupportingContent,
	FEFrontCard,
	FESupportingContent,
} from '../types/front';
import type { FETagType, TagType } from '../types/tag';
import { enhanceSnaps } from './enhanceSnaps';

/**
 *
 * This function makes the decision about when we use the parent's (the
 * container's) format property to override the styling of a sublink, and
 * when we allow the sublink to express its own styling.
 *
 * Eg. If you had a sublink to a lifestyle article, when should it use pink for
 * the kicker and when would that not look right
 *
 * @returns the format property that we will use to style the sublink
 */
const decidePresentationFormat = ({
	linkFormat,
	containerFormat,
	containerPalette,
}: {
	linkFormat?: ArticleFormat;
	containerFormat: ArticleFormat;
	containerPalette?: DCRContainerPalette;
}): ArticleFormat => {
	// Some sublinks are to fronts and so don't have a `format` property
	if (!linkFormat) return containerFormat;
	// If the container has a special palette, use the container format
	if (containerPalette) return containerFormat;
	// These types of article styles have background styles that sublinks
	// need to respect so we use the container format here
	if (
		containerFormat.design === ArticleDesign.LiveBlog ||
		containerFormat.design === ArticleDesign.Gallery ||
		containerFormat.design === ArticleDesign.Audio ||
		containerFormat.design === ArticleDesign.Video ||
		containerFormat.theme === ArticleSpecial.SpecialReport ||
		containerFormat.design === ArticleDesign.Analysis
	)
		return containerFormat;

	// These types of link format designs mean the headline could render
	// poorly (e.g.: white) so we use the container format
	if (
		linkFormat.design === ArticleDesign.LiveBlog ||
		linkFormat.design === ArticleDesign.Gallery ||
		linkFormat.design === ArticleDesign.Audio ||
		linkFormat.theme === ArticleSpecial.SpecialReport ||
		linkFormat.design === ArticleDesign.Video
	)
		return { ...containerFormat, theme: ArticlePillar.News };

	// Otherwise, we can allow the sublink to express its own styling
	return linkFormat;
};

const enhanceSupportingContent = (
	supportingContent: FESupportingContent[],
	format: ArticleFormat,
	containerPalette?: DCRContainerPalette,
): DCRSupportingContent[] => {
	return supportingContent.map((subLink) => {
		// This is the actual DCR format for this sublink
		const linkFormat = subLink.format
			? decideFormat(subLink.format)
			: undefined;
		// This is the format used to decide how the sublink looks (we vary this based
		// on the container background colour)
		const presentationFormat = decidePresentationFormat({
			linkFormat,
			containerFormat: format,
			containerPalette,
		});

		const supportingContentIsLive =
			subLink.format?.design === 'LiveBlogDesign';

		return {
			format: presentationFormat,
			headline: subLink.header?.headline ?? '',
			url: subLink.properties.href ?? subLink.header?.url,
			kickerText: supportingContentIsLive
				? 'Live'
				: subLink.header?.kicker?.item?.properties.kickerText,
		};
	});
};

const decideAvatarUrl = (
	tags: TagType[] = [],
	byline?: string,
): string | undefined => {
	const soleContributor = getSoleContributor(tags, byline);
	return soleContributor?.bylineLargeImageUrl ?? undefined;
};

const decideImage = (trail: FEFrontCard) => {
	if (
		trail.type === 'LinkSnap' ||
		trail.properties.image?.type === 'Replace'
	) {
		return trail.properties.image?.item.imageSrc;
	}

	if (trail.display.imageHide) return undefined;

	if (trail.properties.isCrossword && trail.properties.maybeContentId) {
		return `https://api.nextgen.guardianapps.co.uk/${trail.properties.maybeContentId}.svg`;
	}

	return trail.properties.maybeContent?.trail.trailPicture?.allImages[0]?.url;
};

const decideMediaType = (format: ArticleFormat): MediaType | undefined => {
	switch (format.design) {
		case ArticleDesign.Gallery:
			return 'Gallery';
		case ArticleDesign.Video:
			return 'Video';
		case ArticleDesign.Audio:
			return 'Audio';
		default:
			return undefined;
	}
};

const decideKicker = (trail: FEFrontCard) => {
	return trail.properties.isBreaking
		? 'Breaking news'
		: trail.header.kicker?.item?.properties.kickerText;
};

const decideSlideshowImages = (
	trail: FEFrontCard,
): DCRSlideshowImage[] | undefined => {
	const assets = trail.properties.image?.item.assets;
	const shouldShowSlideshow =
		trail.properties.image?.type === 'ImageSlideshow' &&
		trail.properties.imageSlideshowReplace;
	if (shouldShowSlideshow && assets && assets.length > 0) {
		return assets;
	}
	return undefined;
};

const enhanceTags = (tags: FETagType[]): TagType[] => {
	return tags.map(({ properties }) => {
		const {
			id,
			tagType,
			webTitle,
			twitterHandle,
			bylineImageUrl,
			contributorLargeImagePath,
		} = properties;

		return {
			id,
			type: tagType,
			title: webTitle,
			twitterHandle,
			bylineImageUrl,
			bylineLargeImageUrl: contributorLargeImagePath,
		};
	});
};

export const enhanceCards = (
	collections: FEFrontCard[],
	{
		offset = 0,
		editionId,
		containerPalette,
	}: {
		offset?: number;
		editionId?: EditionId;
		containerPalette?: DCRContainerPalette;
	},
): DCRFrontCard[] =>
	collections.map((faciaCard, index) => {
		// Snap cards may not have a format, default to a standard format if that's the case.
		const format = decideFormat(
			faciaCard.format ?? {
				design: 'ArticleDesign',
				theme: 'NewsPillar',
				display: 'StandardDisplay',
			},
		);
		const group: Group = `${Number(faciaCard.card.group)}${
			faciaCard.display.isBoosted ? '+' : ''
		}`;
		const dataLinkName = getDataLinkNameCard(format, group, offset + index);

		const tags = faciaCard.properties.maybeContent?.tags.tags
			? enhanceTags(faciaCard.properties.maybeContent.tags.tags)
			: [];

		/**
		 * The URL parameter on a Snap header will be a link to the Snap itself, there is a second href
		 * property which contains what the snap is actually linking to. This is commonly used in the
		 * NavList container for linking to non-article pages.
		 * @see NavList
		 */
		const url =
			faciaCard.type === 'LinkSnap' && faciaCard.properties.href
				? faciaCard.properties.href
				: faciaCard.header.url;

		const branding = faciaCard.properties.editionBrandings.find(
			(editionBranding) => editionBranding.edition.id === editionId,
		)?.branding;

		return {
			format,
			dataLinkName,
			url,
			headline: faciaCard.header.headline,
			trailText: faciaCard.card.trailText,
			starRating: faciaCard.card.starRating,
			webPublicationDate:
				faciaCard.card.webPublicationDateOption !== undefined
					? new Date(
							faciaCard.card.webPublicationDateOption,
					  ).toISOString()
					: undefined,
			image: decideImage(faciaCard),
			kickerText: decideKicker(faciaCard),
			supportingContent: faciaCard.supportingContent
				? enhanceSupportingContent(
						faciaCard.supportingContent,
						format,
						containerPalette,
				  )
				: undefined,
			discussionId: faciaCard.discussion.isCommentable
				? faciaCard.discussion.discussionId
				: undefined,
			// nb. there is a distinct 'byline' property on FEFrontCard, at
			// card.properties.byline
			byline:
				faciaCard.properties.maybeContent?.trail.byline ?? undefined,
			showByline: faciaCard.properties.showByline,
			snapData: enhanceSnaps(faciaCard.enriched),
			isBoosted: faciaCard.display.isBoosted,
			isCrossword: faciaCard.properties.isCrossword,
			showQuotedHeadline: faciaCard.display.showQuotedHeadline,
			avatarUrl:
				faciaCard.properties.maybeContent?.tags.tags &&
				faciaCard.properties.image?.type === 'Cutout'
					? decideAvatarUrl(
							tags,
							faciaCard.properties.maybeContent.trail.byline,
					  )
					: undefined,
			mediaType: decideMediaType(format),
			mediaDuration:
				faciaCard.properties.maybeContent?.elements.mediaAtoms[0]
					?.duration,
			showMainVideo: faciaCard.properties.showMainVideo,
			isExternalLink: faciaCard.card.cardStyle.type === 'ExternalLink',
			embedUri: faciaCard.properties.embedUri ?? undefined,
			branding,
			slideshowImages: decideSlideshowImages(faciaCard),
		};
	});
