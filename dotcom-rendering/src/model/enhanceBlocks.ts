import { enhanceBlockquotes } from './enhance-blockquotes';
import { enhanceDividers } from './enhance-dividers';
import { enhanceDots } from './enhance-dots';
import { enhanceEmbeds } from './enhance-embeds';
import { enhanceH2s } from './enhance-H2s';
import { enhanceH3s } from './enhance-H3s';
import { enhanceImages } from './enhance-images';
import { enhanceInteractiveContentsElements } from './enhance-interactive-contents-elements';
import { enhanceNumberedLists } from './enhance-numbered-lists';
import { enhanceText } from './enhance-text';
import { enhanceTweets } from './enhance-tweets';
import { insertPromotedNewsletter } from './insertPromotedNewsletter';

class BlockEnhancer {
	blocks: Block[];

	format: CAPIFormat;

	promotedNewsletter?: Newsletter;

	constructor(
		blocks: Block[],
		format: CAPIFormat,
		promotedNewsletter?: Newsletter,
	) {
		this.blocks = blocks;
		this.format = format;
		this.promotedNewsletter = promotedNewsletter;
	}

	enhanceNewsletterSignup() {
		this.blocks = insertPromotedNewsletter(
			this.blocks,
			this.format,
			this.promotedNewsletter,
		);
		return this;
	}

	enhanceDividers() {
		this.blocks = enhanceDividers(this.blocks);
		return this;
	}

	enhanceDots() {
		this.blocks = enhanceDots(this.blocks);
		return this;
	}

	enhanceH2s() {
		this.blocks = enhanceH2s(this.blocks);
		return this;
	}

	enhanceH3s() {
		this.blocks = enhanceH3s(this.blocks, this.format);
		return this;
	}

	enhanceInteractiveContentsElements() {
		this.blocks = enhanceInteractiveContentsElements(this.blocks);
		return this;
	}

	enhanceImages() {
		this.blocks = enhanceImages(this.blocks, this.format);
		return this;
	}

	enhanceNumberedLists() {
		this.blocks = enhanceNumberedLists(this.blocks, this.format);
		return this;
	}

	enhanceBlockquotes() {
		this.blocks = enhanceBlockquotes(this.blocks, this.format);
		return this;
	}

	enhanceEmbeds() {
		this.blocks = enhanceEmbeds(this.blocks);
		return this;
	}

	enhanceTweets() {
		this.blocks = enhanceTweets(this.blocks);
		return this;
	}

	enhanceText() {
		this.blocks = enhanceText(this.blocks);
		return this;
	}
}

// IMPORTANT: the ordering of the enhancer is IMPORTANT to keep in mind
// example: enhanceInteractiveContentElements needs to be before enhanceNumberedLists
// as they both effect SubheadingBlockElement
export const enhanceBlocks = (
	blocks: Block[],
	format: CAPIFormat,
	promotedNewsletter?: Newsletter,
): Block[] => {
	return new BlockEnhancer(blocks, format, promotedNewsletter)
		.enhanceDividers()
		.enhanceH3s()
		.enhanceH2s()
		.enhanceInteractiveContentsElements()
		.enhanceBlockquotes()
		.enhanceDots()
		.enhanceImages()
		.enhanceNumberedLists()
		.enhanceEmbeds()
		.enhanceTweets()
		.enhanceText()
		.enhanceNewsletterSignup().blocks;
};
