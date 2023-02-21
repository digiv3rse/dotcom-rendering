import { parseURL } from './get-content-from-url';

describe('URL parser', () => {
	test('parse DEV URL when one query is present', () => {
		const req = {
			path: '/Article/https%3A%2F%2Fwww.theguardian.com%2Fpolitics%2Flive%2F2022%2Fapr%2F13%2Fboris-johnson-uk-politics-live-rishi-sunak-partygate-lockdown?filterKeyEvents=true',
		};
		const parsedURL =
			'https://www.theguardian.com/politics/live/2022/apr/13/boris-johnson-uk-politics-live-rishi-sunak-partygate-lockdown?filterKeyEvents=true';

		const url = parseURL(req.path);

		expect(url).toEqual(parsedURL);
	});

	test('parse DEV URL when multiple queries are present', () => {
		const req = {
			path: '/Article/https%3A%2F%2Fwww.theguardian.com%2Fpolitics%2Flive%2F2022%2Fapr%2F13%2Fboris-johnson-uk-politics-live-rishi-sunak-partygate-lockdown?filterKeyEvents=true&dcr=true&live=true',
		};
		const parsedURL =
			'https://www.theguardian.com/politics/live/2022/apr/13/boris-johnson-uk-politics-live-rishi-sunak-partygate-lockdown?filterKeyEvents=true&dcr=true&live=true';

		const url = parseURL(req.path);

		expect(url).toEqual(parsedURL);
	});

	test('parse URL when there are no queries', () => {
		const req = {
			path: '/Article/https%3A%2F%2Fwww.theguardian.com%2Fpolitics%2Flive%2F2022%2Fapr%2F13%2Fboris-johnson-uk-politics-live-rishi-sunak-partygate-lockdown',
		};
		const parsedURL =
			'https://www.theguardian.com/politics/live/2022/apr/13/boris-johnson-uk-politics-live-rishi-sunak-partygate-lockdown';

		const url = parseURL(req.path);

		expect(url).toEqual(parsedURL);
	});
});
