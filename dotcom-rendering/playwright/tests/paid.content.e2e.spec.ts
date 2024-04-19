import type { Page } from '@playwright/test';
import { expect, test } from '@playwright/test';
import { cmpAcceptAll } from '../lib/cmp';
import { waitForIsland } from '../lib/islands';
import { loadPage } from '../lib/load-page';
import { expectToBeVisible } from '../lib/locators';
import { ADDITIONAL_REQUEST_PATH, interceptOphanRequest } from '../lib/ophan';

const paidContentPage =
	'https://www.theguardian.com/the-future-of-sustainable-entrepreneurship/2023/jun/01/take-your-sustainable-business-to-the-next-level-win-your-own-retail-space-at-one-of-londons-westfield-centres';

/**
 * There are mutiple requests to Google Analytics made on the page.
 * We want to wait for the one that is made when the user clicks
 * on the sponsor logo so we use a predicate form of waitForRequest.
 */
const waitForGARequest = (page: Page) => {
	return page.waitForRequest((request) => {
		const matchUrl = request
			.url()
			.includes('https://www.google-analytics.com/collect?v=1');
		const searchParams = new URLSearchParams(request.url());
		const hasClick = searchParams.get('ec') === 'click';
		const hasSponsor = searchParams.get('ea') === 'sponsor logo';
		const hasWestfield = searchParams.get('el') === 'westfield';
		return matchUrl && hasClick && hasSponsor && hasWestfield;
	});
};

/**
 * This test relies on labs campaigns, where the content is often taken down one the campaign is complete.
 * If this happens you'll need to find a new labs article with a brand badge, you can often find these here:
 * https://www.theguardian.com/tone/advertisement-features
 * You need to edit the link as well as the expected requestURL to include the new brand in the code below, where it states `expect(requestURL).to.include('el=<logo goes here>');`.
 * You can grab the required info in the dev tools network tab on the page itself.
 */
test.describe('Paid content tests', () => {
	test('should send Google Analytics message on click of sponsor logo in metadata', async ({
		page,
	}) => {
		await loadPage(page, `/Article/${paidContentPage}`);
		await cmpAcceptAll(page);

		const hasGA = await page.evaluate(() => {
			// eslint-disable-next-line @typescript-eslint/strict-boolean-expressions -- test
			return !!window.ga;
		});
		expect(hasGA).toBeTruthy();

		// Wait for a request to Google Analytics to be made with the correct params
		const gaRquestPromise = waitForGARequest(page);

		await waitForIsland(page, 'Branding');

		await expectToBeVisible(page, '[data-testid=branding-logo]');
		await page.locator('[data-testid=branding-logo]').click();

		// Make sure the request to Google Analytics is made
		await gaRquestPromise;
	});

	test('should send Google Analytics message on click of sponsor logo in onwards section', async ({
		page,
	}) => {
		await loadPage(page, `/Article/${paidContentPage}`);
		await cmpAcceptAll(page);

		const hasGA = await page.evaluate(() => {
			// eslint-disable-next-line @typescript-eslint/strict-boolean-expressions -- test
			return !!window.ga;
		});
		expect(hasGA).toBeTruthy();

		// Wait for a request to Google Analytics to be made with the correct params
		const gaRquestPromise = waitForGARequest(page);

		await waitForIsland(page, 'OnwardsUpper');

		await expectToBeVisible(page, '[data-testid=card-branding-logo]');
		await page.locator('[data-testid=card-branding-logo]').first().click();

		// Make sure the request to Google Analytics is made
		await gaRquestPromise;
	});

	test('should send Ophan component event on click of sponsor logo in article meta', async ({
		page,
	}) => {
		await loadPage(page, `/Article/${paidContentPage}`);
		await cmpAcceptAll(page);

		const clickEventRequest = interceptOphanRequest({
			page,
			path: ADDITIONAL_REQUEST_PATH,
			searchParamMatcher: (searchParams) => {
				const clickComponent = searchParams.get('clickComponent');
				const clickLinkNames = searchParams.get('clickLinkNames');
				return (
					clickComponent === 'labs-logo | article-meta-westfield' &&
					clickLinkNames === '["labs-logo-article-meta-westfield"]'
				);
			},
		});

		await waitForIsland(page, 'Branding');

		await expectToBeVisible(page, '[data-testid=branding-logo]');
		await page.locator('[data-testid=branding-logo]').click();

		await clickEventRequest;
	});

	test('should send Ophan component event on click of sponsor logo in onwards section', async ({
		page,
	}) => {
		await loadPage(page, `/Article/${paidContentPage}`);
		await cmpAcceptAll(page);

		const clickEventRequest = interceptOphanRequest({
			page,
			path: ADDITIONAL_REQUEST_PATH,
			searchParamMatcher: (searchParams) => {
				const clickComponent = searchParams.get('clickComponent');
				const clickLinkNames = searchParams.get('clickLinkNames');
				return (
					clickComponent ===
						'labs-logo | article-related-content-westfield' &&
					clickLinkNames ===
						'["labs-logo-article-related-content-westfield","related-content"]'
				);
			},
		});

		await waitForIsland(page, 'OnwardsUpper');

		await expectToBeVisible(page, '[data-testid=card-branding-logo]');
		await page.locator('[data-testid=card-branding-logo]').first().click();

		// Make sure the request to Ophan is made
		await clickEventRequest;
	});
});
