import type { RequestHandler } from 'express';
import { Standard as ExampleArticle } from '../../../fixtures/generated/articles/Standard';
import { enhanceBlocks } from '../../model/enhanceBlocks';
import { enhanceCommercialProperties } from '../../model/enhanceCommercialProperties';
import { enhanceStandfirst } from '../../model/enhanceStandfirst';
import { enhanceTableOfContents } from '../../model/enhanceTableOfContents';
import { validateAsArticleType } from '../../model/validate';
import { recordTypeAndPlatform } from '../../server/lib/logging-store';
import type { FEArticleBadgeType } from '../../types/badge';
import type { FEArticleType } from '../../types/frontend';
import {
	renderBlocks,
	renderHtml,
	renderKeyEvents,
} from './render.article.web';

const enhancePinnedPost = (format: FEFormat, block?: Block) => {
	return block ? enhanceBlocks([block], format)[0] : block;
};

const enhanceBadge = (badge?: FEArticleBadgeType) =>
	badge
		? {
				...badge,
				enhanced: {
					href: `/${badge.seriesTag}`,
					imageSrc: badge.imageUrl,
				},
		  }
		: undefined;

export const enhanceArticleType = (body: unknown): FEArticleType => {
	const data = validateAsArticleType(body);

	const enhancedBlocks = enhanceBlocks(data.blocks, data.format, {
		promotedNewsletter: data.promotedNewsletter,
	});
	return {
		...data,
		blocks: enhancedBlocks,
		pinnedPost: enhancePinnedPost(data.format, data.pinnedPost),
		standfirst: enhanceStandfirst(data.standfirst),
		commercialProperties: enhanceCommercialProperties(
			data.commercialProperties,
		),
		tableOfContents: data.showTableOfContents
			? enhanceTableOfContents(data.format, enhancedBlocks)
			: undefined,
		badge: enhanceBadge(data.badge),
	};
};

export const handleArticle: RequestHandler = ({ body }, res) => {
	recordTypeAndPlatform('article', 'web');
	const article = enhanceArticleType(body);
	const resp = renderHtml({
		article,
	});

	res.status(200).send(resp);
};

export const handleArticleJson: RequestHandler = ({ body }, res) => {
	recordTypeAndPlatform('article', 'json');
	const article = enhanceArticleType(body);
	const resp = {
		data: {
			// TODO: We should rename this to 'article' or 'FEArticle', but first we need to investigate
			// where/if this is used.
			CAPIArticle: article,
		},
	};

	res.status(200).send(resp);
};

export const handleArticlePerfTest: RequestHandler = (req, res, next) => {
	req.body = ExampleArticle;
	handleArticle(req, res, next);
};

export const handleInteractive: RequestHandler = ({ body }, res) => {
	recordTypeAndPlatform('interactive', 'web');
	const article = enhanceArticleType(body);
	const resp = renderHtml({
		article,
	});

	res.status(200).send(resp);
};

export const handleBlocks: RequestHandler = ({ body }, res) => {
	recordTypeAndPlatform('blocks');
	const {
		blocks,
		format,
		host,
		pageId,
		webTitle,
		ajaxUrl,
		isAdFreeUser,
		isSensitive,
		videoDuration,
		edition,
		section,
		sharedAdTargeting,
		adUnit,
		switches,
		keywordIds,
	} =
		// The content if body is not checked
		body as FEBlocksRequest;

	const enhancedBlocks = enhanceBlocks(blocks, format);
	const html = renderBlocks({
		blocks: enhancedBlocks,
		format,
		host,
		pageId,
		webTitle,
		ajaxUrl,
		isAdFreeUser,
		isSensitive,
		videoDuration,
		edition,
		section,
		sharedAdTargeting,
		adUnit,
		switches,
		keywordIds,
	});

	res.status(200).send(html);
};

export const handleKeyEvents: RequestHandler = ({ body }, res) => {
	// TODO: This endpoint is unused - we should consider removing it, talk to Olly 24/05/2023

	recordTypeAndPlatform('keyEvents');
	const { keyEvents, format, filterKeyEvents } =
		// The content if body is not checked
		body as FEKeyEventsRequest;

	const html = renderKeyEvents({
		keyEvents,
		format,
		filterKeyEvents,
	});

	res.status(200).send(html);
};
