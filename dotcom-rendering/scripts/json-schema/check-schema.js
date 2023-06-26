/* eslint-disable no-console -- logs are useful in scripts */
const fs = require('fs');
const path = require('path');
const {
	getArticleSchema,
	getFrontSchema,
	getNewsletterPageSchema,
	getTagFrontSchema,
	getBlockSchema,
} = require('./get-schema');

const root = path.resolve(__dirname, '..', '..');

const existingArticleSchema = fs.readFileSync(
	`${root}/src/model/article-schema.json`,
	{ encoding: 'utf-8' },
);
const existingFrontSchema = fs.readFileSync(
	`${root}/src/model/front-schema.json`,
	{ encoding: 'utf-8' },
);
const existingTagFrontSchema = fs.readFileSync(
	`${root}/src/model/tag-front-schema.json`,
	{ encoding: 'utf-8' },
);
const existingNewsletterSchema = fs.readFileSync(
	`${root}/src/model/newsletter-page-schema.json`,
	{ encoding: 'utf-8' },
);
const existingBlockSchema = fs.readFileSync(
	`${root}/src/model/block-schema.json`,
	{ encoding: 'utf-8' },
);

const articleSchema = getArticleSchema();
const frontSchema = getFrontSchema();
const tagFrontSchema = getTagFrontSchema();
const newsletterSchema = getNewsletterPageSchema();
const blockSchema = getBlockSchema();

if (
	existingArticleSchema !== articleSchema ||
	existingFrontSchema !== frontSchema ||
	existingTagFrontSchema !== tagFrontSchema ||
	existingNewsletterSchema !== newsletterSchema ||
	existingBlockSchema !== blockSchema
) {
	throw new Error('Schemas do not match ... please run "make gen-schema"');
} else {
	console.log('Schemas match!');
}
