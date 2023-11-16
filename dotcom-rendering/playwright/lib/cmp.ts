import type { BrowserContext, Page } from '@playwright/test';
import { waitForIsland } from './islands';

const SP_LAYER1_IFRAME = '[id*="sp_message_iframe"]';
const SP_LAYER1_ACCEPT_ALL_BUTTON = 'button.sp_choice_type_11';
const SP_LAYER2_MANAGE_MY_COOKIES_BUTTON = 'button.sp_choice_type_12';

const SP_LAYER2_IFRAME = 'iframe[title="SP Consent Message"]';
const SP_LAYER2_ACCEPT_ALL_BUTTON = 'button.sp_choice_type_ACCEPT_ALL';
const SP_LAYER2_REJECT_ALL_BUTTON = 'button.sp_choice_type_REJECT_ALL';

/**
 * Accept all on the Sourcepoint CMP banner
 * @param page
 */
const cmpAcceptAll = async (page: Page): Promise<void> => {
	const acceptAllButton = page
		.frameLocator(SP_LAYER1_IFRAME)
		.locator(SP_LAYER1_ACCEPT_ALL_BUTTON);
	await acceptAllButton.click();
	// wait for consent settings to apply
	await new Promise((r) => setTimeout(r, 2000));
};

/**
 * Reject all on the Sourcepoint CMP banner
 * @param page
 */
const cmpRejectAll = async (page: Page): Promise<void> => {
	const manageMyCookiesButton = page
		.frameLocator(SP_LAYER1_IFRAME)
		.locator(SP_LAYER2_MANAGE_MY_COOKIES_BUTTON);
	await manageMyCookiesButton.click();
	const rejectAllButton = page
		.frameLocator(SP_LAYER2_IFRAME)
		.locator(SP_LAYER2_REJECT_ALL_BUTTON);
	await rejectAllButton.click();
	await new Promise((r) => setTimeout(r, 2000));
};

/**
 * Reconsent on the Sourcepoint CMP banner
 *
 * Clicks the Privacy Settings link in the footer then the Accept All button
 * @param page
 */
const cmpReconsent = async (page: Page): Promise<void> => {
	await waitForIsland(page, 'PrivacySettingsLink');
	const privacySettingsSelector = '[data-link-name="privacy-settings"]';
	await page.locator(privacySettingsSelector).scrollIntoViewIfNeeded();
	await page.locator(privacySettingsSelector).click();
	const acceptAllButton = page
		.frameLocator(SP_LAYER2_IFRAME)
		.locator(SP_LAYER2_ACCEPT_ALL_BUTTON);
	await acceptAllButton.click();
	await new Promise((r) => setTimeout(r, 2000));
};

/**
 * Disable CMP
 * @param page
 */
const disableCMP = async (context: BrowserContext): Promise<void> => {
	await context.addCookies([
		{
			name: 'gu-cmp-disabled',
			value: 'true',
			domain: 'localhost',
			path: '/',
		},
	]);
};

export { cmpAcceptAll, cmpReconsent, cmpRejectAll, disableCMP };
