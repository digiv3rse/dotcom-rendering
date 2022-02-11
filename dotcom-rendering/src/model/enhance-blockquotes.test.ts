import { Article } from '../../fixtures/generated/articles/Article';
import { enhanceBlockquotes } from './enhance-blockquotes';

const example: CAPIType = Article;

const metaData = {
	id: '123',
	primaryDateLine: 'Wed 9 Dec 2020 06.30 GMT',
	secondaryDateLine: 'Last modified on Wed 9 Dec 2020 13.40 GMT',
};

const formatIsPhotoEssay: CAPIFormat = {
	...example.format,
	design: 'PhotoEssayDesign',
};

describe('Enhancing blockquotes', () => {
	it('creates an identical but new object when no changes are needed', () => {
		expect(enhanceBlockquotes(example.blocks, example.format)).not.toBe(
			example.blocks,
		); // We created a new object
		expect(enhanceBlockquotes(example.blocks, example.format)).toEqual(
			example.blocks,
		); // The new object is what we expect
	});

	it('adds the quoted prop when the quoted class was found', () => {
		const input: Block[] = [
			{
				...metaData,
				elements: [
					{
						_type: 'model.dotcomrendering.pageElements.BlockquoteBlockElement',
						elementId: 'mockId',
						html: '<blockquote class="quoted">This is a quote</blockquote>',
					},
				],
			},
		];

		const expectedOutput = [
			{
				...metaData,
				elements: [
					{
						_type: 'model.dotcomrendering.pageElements.BlockquoteBlockElement',
						elementId: 'mockId',
						html: '<blockquote class="quoted">This is a quote</blockquote>',
						quoted: true,
					},
				],
			},
		];

		expect(enhanceBlockquotes(input, Article.format)).toEqual(
			expectedOutput,
		);
	});

	it('transforms simple blockquotes to highlight elements for photo essays', () => {
		const input: Block[] = [
			{
				...metaData,
				elements: [
					{
						_type: 'model.dotcomrendering.pageElements.BlockquoteBlockElement',
						elementId: 'mockId',
						html: '<blockquote>This is not a quote</blockquote>',
					},
				],
			},
		];

		const expectedOutput = [
			{
				...metaData,
				elements: [
					{
						_type: 'model.dotcomrendering.pageElements.HighlightBlockElement',
						elementId: 'mockId',
						html: '<blockquote>This is not a quote</blockquote>',
					},
				],
			},
		];

		expect(enhanceBlockquotes(input, formatIsPhotoEssay)).toEqual(
			expectedOutput,
		);
	});

	it("doesn't transform quoted blockquotes to highlight elements for photo essays", () => {
		const input: Block[] = [
			{
				...metaData,
				elements: [
					{
						_type: 'model.dotcomrendering.pageElements.BlockquoteBlockElement',
						elementId: 'mockId',
						html: '<blockquote class="quoted">This is a quoted blockquote</blockquote>',
					},
				],
			},
		];

		const expectedOutput = [
			{
				...metaData,
				elements: [
					{
						_type: 'model.dotcomrendering.pageElements.BlockquoteBlockElement',
						elementId: 'mockId',
						html: '<blockquote class="quoted">This is a quoted blockquote</blockquote>',
						quoted: true,
					},
				],
			},
		];

		expect(enhanceBlockquotes(input, formatIsPhotoEssay)).toEqual(
			expectedOutput,
		);
	});

	it('passes through simple blockquotes', () => {
		const input: Block[] = [
			{
				...metaData,
				elements: [
					{
						_type: 'model.dotcomrendering.pageElements.BlockquoteBlockElement',
						elementId: 'mockId',
						html: '<blockquote>This is a quote</blockquote>',
					},
				],
			},
		];

		const expectedOutput = [
			{
				...metaData,
				elements: [
					{
						_type: 'model.dotcomrendering.pageElements.BlockquoteBlockElement',
						elementId: 'mockId',
						html: '<blockquote>This is a quote</blockquote>',
					},
				],
			},
		];

		expect(enhanceBlockquotes(input, Article.format)).toEqual(
			expectedOutput,
		);
	});

	it('ignores blockquotes with other classnames', () => {
		const input: Block[] = [
			{
				...metaData,
				elements: [
					{
						_type: 'model.dotcomrendering.pageElements.BlockquoteBlockElement',
						elementId: 'mockId',
						html: '<blockquote class="somethingelse">This is a simple blockquote</blockquote>',
					},
				],
			},
		];

		const expectedOutput = [
			{
				...metaData,
				elements: [
					{
						_type: 'model.dotcomrendering.pageElements.BlockquoteBlockElement',
						elementId: 'mockId',
						html: '<blockquote class="somethingelse">This is a simple blockquote</blockquote>',
					},
				],
			},
		];

		expect(enhanceBlockquotes(input, Article.format)).toEqual(
			expectedOutput,
		);
	});

	it('handles both quoted and simple blockquotes in the same array', () => {
		const input: Block[] = [
			{
				...metaData,
				elements: [
					{
						_type: 'model.dotcomrendering.pageElements.BlockquoteBlockElement',
						elementId: 'mockId',
						html: '<blockquote class="quoted">This is a quoted quote</blockquote>',
					},
					{
						_type: 'model.dotcomrendering.pageElements.BlockquoteBlockElement',
						elementId: 'mockId',
						html: '<blockquote>This is a simple quote</blockquote>',
					},
				],
			},
		];

		const expectedOutput = [
			{
				...metaData,
				elements: [
					{
						_type: 'model.dotcomrendering.pageElements.BlockquoteBlockElement',
						elementId: 'mockId',
						html: '<blockquote class="quoted">This is a quoted quote</blockquote>',
						quoted: true,
					},
					{
						_type: 'model.dotcomrendering.pageElements.BlockquoteBlockElement',
						elementId: 'mockId',
						html: '<blockquote>This is a simple quote</blockquote>',
					},
				],
			},
		];

		expect(enhanceBlockquotes(input, Article.format)).toEqual(
			expectedOutput,
		);
	});
});
