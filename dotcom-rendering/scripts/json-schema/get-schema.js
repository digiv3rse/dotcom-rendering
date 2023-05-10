const path = require('path');
const TJS = require('typescript-json-schema');

const root = path.resolve(__dirname, '..', '..');

const program = TJS.getProgramFromFiles(
	[
		path.resolve(`${root}/index.d.ts`),
		path.resolve(`${root}/src/types/frontend.ts`),
		path.resolve(`${root}/src/types/newslettersPage.ts`),
	],
	{
		skipLibCheck: true,
	},
);

const settings = { rejectDateType: true, required: true };

module.exports = {
	getArticleSchema: () => {
		return JSON.stringify(
			TJS.generateSchema(program, 'FEArticleType', settings),
			null,
			4,
		);
	},
	getFrontSchema: () => {
		return JSON.stringify(
			TJS.generateSchema(program, 'FEFrontType', settings),
			null,
			4,
		);
	},
	getNewsletterPageSchema: () => {
		return JSON.stringify(
			TJS.generateSchema(program, 'FENewslettersPageType', settings),
			null,
			4,
		);
	},

	getBlockSchema: () => {
		return JSON.stringify(
			TJS.generateSchema(program, 'Block', settings),
			null,
			4,
		);
	},
};
