import { storage } from '@guardian/libs';
import { setLocalBaseUrl } from '../../lib/setLocalBaseUrl.js';

const idapiIdentifiersResponse = `{ "id": "000000000", "brazeUuid": "aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa", "puzzleUuid": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", "googleTagId": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" }`;

const handleGuCookieError = () => {
	cy.on('uncaught:exception', (err, runnable) => {
		// When we set the `GU_U` cookie this is causing the commercial bundle to try and do
		// something with the url which is failing in Cypress with a malformed URI error
		if (err.message.includes('URI malformed')) {
			// This error is unrelated to the test in question so return  false to prevent
			// this commercial error from failing this test
			return false;
		}
	});
};

const cmpIframe = () => {
	return cy
		.get('iframe[id^="sp_message_iframe"]')
		.its('0.contentDocument.body')
		.should('not.be.empty')
		.then(cy.wrap);
};

describe('Braze messaging', function () {
	beforeEach(function () {
		cy.clearLocalStorage();
		handleGuCookieError();
		setLocalBaseUrl();
	});

	it('records in local storage that the Braze SDK was loaded', function () {
		// Become logged in
		cy.setCookie('GU_U', 'true', {
			log: true,
		});
		cy.setCookie('gu_hide_support_messaging', 'true', {
			log: true,
		});
		cy.intercept('GET', '**/user/me/identifiers', idapiIdentifiersResponse);

		// Set browser id
		cy.setCookie('bwid', 'myBrowserId');

		storage.local.set('gu.geo.override', 'GB');

		cy.visit(
			'/Article?url=https://theguardian.com/games/2018/aug/23/nier-automata-yoko-taro-interview',
		);
		cy.intercept('GET', '**/tcfv2/**').as('tcfRequest');
		// Open the Privacy setting dialogue
		cmpIframe().contains("It's your choice");
		cmpIframe().find(`[title="Yes, I’m happy"]`).click();
		// eslint-disable-next-line cypress/no-unnecessary-waiting
		cy.wait('@tcfRequest');
		cy.visit(
			'/Article?url=https://theguardian.com/games/2018/aug/23/nier-automata-yoko-taro-interview',
		);
		cy.waitUntil(() => localStorage.getItem('gu.brazeUserSet') === 'true', {
			errorMsg: 'Error waiting for gu.brazeUserSet to be "true"',
		});
	});

	it('clears Braze data when a user logs out', function () {
		// Become logged in
		cy.setCookie('GU_U', 'true', {
			log: true,
		});
		cy.setCookie('gu_hide_support_messaging', 'true', {
			log: true,
		});
		cy.intercept('GET', '**/user/me/identifiers', idapiIdentifiersResponse);

		// Set browser id
		cy.setCookie('bwid', 'myBrowserId');

		storage.local.set('gu.geo.override', 'GB');
		cy.visit(
			'/Article?url=https://theguardian.com/games/2018/aug/23/nier-automata-yoko-taro-interview',
		);

		cy.intercept('GET', '**/tcfv2/**').as('tcfRequest');
		// Open the Privacy setting dialogue
		cmpIframe().contains("It's your choice");
		cmpIframe().find(`[title="Yes, I’m happy"]`).click();
		cy.wait('@tcfRequest');

		// Make second page load with consent
		cy.reload();

		cy.waitUntil(() => localStorage.getItem('gu.brazeUserSet') === 'true', {
			errorMsg: 'Error waiting for gu.brazeUserSet to be "true"',
		}).then(() => {
			// Set cache data in localStorage so we can check it's cleared below
			localStorage.setItem('gu.brazeMessageCache.EndOfArticle', '[]');
			localStorage.setItem('gu.brazeMessageCache.Banner', '[]');

			// User no longer logged in
			cy.clearCookie('GU_U');
			cy.intercept('GET', '**/user/me/identifiers', { statusCode: 403 });

			// Make a third call when logged out
			cy.reload();

			cy.waitUntil(
				() => localStorage.getItem('gu.brazeUserSet') !== 'true',
				{
					errorMsg:
						'Error waiting for gu.brazeUserSet to not be "true"',
				},
			).then(() => {
				expect(
					localStorage.getItem('gu.brazeMessageCache.EndOfArticle'),
				).to.be.equal(null);
				expect(
					localStorage.getItem('gu.brazeMessageCache.Banner'),
				).to.be.equal(null);
			});
		});
	});
});
