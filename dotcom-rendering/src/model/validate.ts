import { isObject, isString } from '@guardian/libs';
import type { Options } from 'ajv';
import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import type { FEFrontType } from '../../src/types/front';
import type { FEArticleType } from '../types/frontend';
import type { FENewslettersPageType } from '../types/newslettersPage';
import articleSchema from './article-schema.json';
import frontSchema from './front-schema.json';
import newslettersPageSchema from './newsletter-page-schema.json';

const options: Options = {
	verbose: false,
	allErrors: false,
	logger: false,
	useDefaults: 'empty',
};

const ajv = new Ajv(options);
addFormats(ajv);

const validateArticle = ajv.compile<FEArticleType>(articleSchema);
const validateFront = ajv.compile<FEFrontType>(frontSchema);
const validateNewslettersPage = ajv.compile<FENewslettersPageType>(
	newslettersPageSchema,
);

export const validateAsCAPIType = (data: unknown): FEArticleType => {
	if (validateArticle(data)) return data;

	const url =
		isObject(data) && isString(data.webURL) ? data.webURL : 'unknown url';

	throw new TypeError(
		`Unable to validate request body for url ${url}.\n
            ${JSON.stringify(validateArticle.errors, null, 2)}`,
	);
};

export const validateAsFrontType = (data: unknown): FEFrontType => {
	if (validateFront(data)) return data;

	const url =
		isObject(data) && isString(data.webURL) ? data.webURL : 'unknown url';

	throw new TypeError(
		`Unable to validate request body for url ${url}.\n
            ${JSON.stringify(validateFront.errors, null, 2)}`,
	);
};

export const validateAsNewslettersPageType = (
	data: unknown,
): FENewslettersPageType => {
	if (validateNewslettersPage(data)) return data;
	console.log(
		'validateNewslettersPage.errors',
		validateNewslettersPage.errors,
	);
	throw new TypeError(
		`Unable to validate request body for newsletters page.\n
		${JSON.stringify(validateNewslettersPage.errors, null, 2)}`,
	);
};
