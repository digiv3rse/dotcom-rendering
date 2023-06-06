/* eslint-disable @typescript-eslint/unbound-method */

/* eslint-disable @typescript-eslint/no-floating-promises */

const fs = require('fs');
const { resolve } = require('path');
const execa = require('execa');
const fetch = require('node-fetch');
const { config } = require('../../fixtures/config');
const { configOverrides } = require('../../fixtures/config-overrides');
const { switchOverrides } = require('../../fixtures/switch-overrides');

const root = resolve(__dirname, '..', '..');

/**
 * gen-fixtures.ts
 *
 * A script to automatically download the latest json data for a production article and
 * insert it into a fixture file to use for testing. In particular, we use these fixtures
 * for our layout stories
 *
 * Edit the articles array below to add or amend the urls that we use. The script will fetch
 * ${article.url}.json?dcr and save the response in ${article.name}.ts in the fixtures folder
 *
 * You need to be running the dev server for this script to complete
 *
 * Usage
 * $ node scripts/test-data/gen-fixtures.js
 */

const articles = [
	{
		name: 'Standard',
		url: 'https://www.theguardian.com/world/2013/jun/06/nsa-phone-records-verizon-court-order',
	},
	{
		name: 'Gallery',
		url: 'https://www.theguardian.com/world/2013/jun/06/nsa-phone-records-verizon-court-order',
	},
	{
		name: 'Audio',
		url: 'https://www.theguardian.com/world/2013/jun/06/nsa-phone-records-verizon-court-order',
	},
	{
		name: 'Video',
		url: 'https://www.theguardian.com/world/2013/jun/06/nsa-phone-records-verizon-court-order',
	},
	{
		name: 'Analysis',
		url: 'https://www.theguardian.com/world/2020/feb/10/irish-general-election-everything-you-need-to-know',
	},
	{
		name: 'Comment',
		url: 'https://www.theguardian.com/commentisfree/2020/feb/10/austerity-level-up-newcastle-budget-cuts',
	},
	{
		name: 'Feature',
		url: 'https://www.theguardian.com/film/2020/feb/10/quotes-of-the-oscars-2020',
	},
	{
		name: 'Live',
		url: 'https://www.theguardian.com/science/live/2021/feb/19/mars-landing-nasa-perseverance-rover-briefing-latest-live-news-updates',
	},
	{
		name: 'Dead',
		url: 'https://www.theguardian.com/science/live/2021/feb/19/mars-landing-nasa-perseverance-rover-briefing-latest-live-news-updates',
	},
	{
		name: 'Editorial',
		url: 'https://www.theguardian.com/commentisfree/2021/feb/03/the-guardian-view-on-quarantine-an-old-method-and-a-vital-one',
	},
	{
		name: 'Letter',
		url: 'https://www.theguardian.com/world/2021/apr/05/why-is-a-womans-work-never-done',
	},
	{
		name: 'SpecialReport',
		url: 'https://www.theguardian.com/environment/2019/oct/14/how-rein-in-fossil-fuel-industry-eight-ideas',
	},
	{
		name: 'Interview',
		url: 'https://www.theguardian.com/global/2020/feb/09/halima-aden-model-activist-hijab-refugee-fashion-we-all-deserve-representation',
	},
	{
		name: 'MatchReport',
		url: 'https://www.theguardian.com/football/2021/feb/05/andre-ayew-sparks-swansea-victory-over-norwich-to-close-gap-at-top',
	},
	{
		name: 'PhotoEssay',
		url: 'https://www.theguardian.com/travel/2020/dec/09/my-year-of-roaming-free-in-cornwall-photo-essay-cat-vinton',
	},
	{
		name: 'PrintShop',
		url: 'https://www.theguardian.com/artanddesign/2020/dec/17/buy-a-classic-sport-photograph-the-immortal-bobby-moore',
	},
	{
		name: 'Recipe',
		url: 'https://www.theguardian.com/food/2021/feb/06/meera-sodhas-vegan-recipe-for-spring-onion-pancakes',
	},
	{
		name: 'Review',
		url: 'https://www.theguardian.com/tv-and-radio/2020/jan/17/sex-education-season-two-review-netflix',
	},
	{
		name: 'Quiz',
		url: 'https://www.theguardian.com/football/that-1980s-sports-blog/2020/jun/12/sports-quiz-football-in-the-1980s',
	},
	{
		name: 'Labs',
		url: 'https://www.theguardian.com/whats-in-your-blood-/2018/oct/11/royal-ancestry-genetics-things-to-consider',
	},
	{
		name: 'NumberedList',
		url: 'https://www.theguardian.com/technology/2019/dec/17/best-smartphone-2019-iphone-oneplus-samsung-and-huawei-compared-and-ranked',
	},
	{
		name: 'NewsletterSignup',
		url: 'https://www.theguardian.com/football/2022/mar/22/sign-up-for-our-new-womens-football-newsletter-moving-the-goalposts',
	},
	{
		name: 'Explainer',
		url: 'https://www.theguardian.com/australia-news/2022/aug/21/what-is-an-indigenous-treaty-and-how-would-it-work-in-australia',
	},
];

const HEADER = `/**
* DO NOT EDIT THIS FILE!
*
* This file was automatically generated using the gen-fixtures.ts script. Any edits
* you make here will be lost.
*
* If the data in these fixtures is not what you expect then
*
* 1. Refresh the data using '$ node scrips/test-data/gen-fixtures.ts' or
* 2. if the latest live data is not what you need, then consider editing
*    gen-fixtures.ts directly.
*/

`;

try {
	// Article fixtures
	const requests = articles.map((article) => {
		return fetch(`http://localhost:3030/ArticleJson/${article.url}`)
			.then((res) => res.json())
			.then((json) => {
				const articleData = json.data.CAPIArticle;

				// Override config
				articleData.config = { ...config, ...configOverrides };
				// Override switches
				articleData.config.switches = {
					...articleData.config.switches,
					...switchOverrides,
				};

				// Override frontendData config
				articleData.frontendData.config = {
					...config,
					...configOverrides,
				};
				// Override frontendData switches
				articleData.frontendData.config.switches = {
					...articleData.frontendData.config.switches,
					...switchOverrides,
				};

				// Write the new fixture data
				const contents = `${HEADER}

				import type { DCRArticleType } from '../../../src/types/article';

				export const ${article.name}: DCRArticleType = ${JSON.stringify(
					articleData,
					null,
					4,
				)}`;
				fs.writeFileSync(
					`${root}/fixtures/generated/articles/${article.name}.ts`,
					contents,
					'utf8',
				);
				console.log(`Created ${article.name}.ts`);
			});
	});
	// Images fixture
	requests.push(
		fetch(
			'https://www.theguardian.com/travel/2020/dec/09/my-year-of-roaming-free-in-cornwall-photo-essay-cat-vinton.json?dcr',
		)
			.then((res) => res.json())
			.then((json) => {
				const images = json.blocks[0].elements.filter(
					(element) =>
						element._type ===
						'model.dotcomrendering.pageElements.ImageBlockElement',
				);

				const type = Array.isArray(images)
					? '[' +
					  images.map(() => 'ImageBlockElement').join(',') +
					  ']'
					: 'unknown';

				// Write the new fixture data
				const contents = `${HEADER}
				import type { ImageBlockElement } from '../../src/types/content';

				export const images: ${type} = ${JSON.stringify(images, null, 4)}`;
				fs.writeFileSync(
					`${root}/fixtures/generated/images.ts`,
					contents,
					'utf8',
				);
				console.log(`Created Images.ts`);
			}),
	);

	// MatchReport fixtures
	requests.push(
		fetch(
			'https://api.nextgen.guardianapps.co.uk/football/api/match-nav/2022/07/11/8184/7514.json?dcr=true&page=football%2F2022%2Fjul%2F11%2Fengland-norway-womens-euro-2022-group-a-match-report',
		)
			.then((res) => res.json())
			.then((json) => {
				// Write the new fixture data
				const contents = `${HEADER}export const matchReport: MatchReportType = ${JSON.stringify(
					json,
					null,
					4,
				)}`;
				fs.writeFileSync(
					`${root}/fixtures/generated/match-report.ts`,
					contents,
					'utf8',
				);
				console.log(`Created match-report.ts`);
			}),
	);

	// Series
	requests.push(
		fetch(
			'https://api.nextgen.guardianapps.co.uk/series/tv-and-radio/series/tv-review.json?dcr',
		)
			.then((res) => res.json())
			.then((json) => {
				// Write the new fixture data
				const contents = `${HEADER}export const series = ${JSON.stringify(
					json,
					null,
					4,
				)}`;
				fs.writeFileSync(
					`${root}/fixtures/generated/series.ts`,
					contents,
					'utf8',
				);
				console.log(`Created series.ts`);
			}),
	);

	// Story package
	requests.push(
		fetch(
			'https://api.nextgen.guardianapps.co.uk/story-package/science/2021/feb/18/life-on-mars-nasa-keeps-looking-with-perseverance-rover-mission.json?dcr=true',
		)
			.then((res) => res.json())
			.then((json) => {
				// Write the new fixture data
				const contents = `${HEADER}export const storyPackage = ${JSON.stringify(
					json,
					null,
					4,
				)}`;
				fs.writeFileSync(
					`${root}/fixtures/generated/story-package.ts`,
					contents,
					'utf8',
				);
				console.log(`Created story-package.ts`);
			}),
	);

	Promise.all(requests).finally(() => {
		console.log('\nFormatting files...');
		execa('prettier', [
			'./fixtures/**/*',
			'--write',
			'--loglevel',
			'error',
		]).then(() => {
			console.log(
				`\nDone ✅ Successfully created ${requests.length} fixtures\n`,
			);
		});
	});
} catch (e) {
	console.log(e);
}
