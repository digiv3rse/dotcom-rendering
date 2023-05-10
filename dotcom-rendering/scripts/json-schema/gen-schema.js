const path = require('path');

const root = path.resolve(__dirname, '..', '..');
const fs = require('fs');
const {
	getArticleSchema,
	getFrontSchema,
	getNewsletterPageSchema,
	getBlockSchema,
} = require('./get-schema');

const articleSchema = getArticleSchema();
const frontSchema = getFrontSchema();
const newsletterPageSchema = getNewsletterPageSchema();
const blockSchema = getBlockSchema();

fs.writeFile(
	`${root}/src/model/article-schema.json`,
	articleSchema,
	'utf8',
	(err) => {
		if (err) {
			// eslint-disable-next-line @typescript-eslint/tslint/config
			console.log(err);
		}
	},
);

fs.writeFile(
	`${root}/src/model/front-schema.json`,
	frontSchema,
	'utf8',
	(err) => {
		if (err) {
			// eslint-disable-next-line @typescript-eslint/tslint/config
			console.log(err);
		}
	},
);

fs.writeFile(
	`${root}/src/model/newsletter-page-schema.json`,
	newsletterPageSchema,
	'utf8',
	(err) => {
		if (err) {
			// eslint-disable-next-line @typescript-eslint/tslint/config
			console.log(err);
		}
	},
);

fs.writeFile(
	`${root}/src/model/block-schema.json`,
	blockSchema,
	'utf8',
	(err) => {
		if (err) {
			// eslint-disable-next-line @typescript-eslint/tslint/config
			console.log(err);
		}
	},
);
