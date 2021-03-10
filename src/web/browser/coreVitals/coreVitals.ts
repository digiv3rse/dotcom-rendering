import { getCLS, getFID, getLCP, getFCP, getTTFB } from 'web-vitals';

type CoreWebVitalsPayload = {
	page_view_id: string | null;
	received_timestamp: string | null;
	browser_id: string | null;
	received_date: string;
	fid: null | number;
	cls: null | number;
	lcp: null | number;
	fcp: null | number; // Report as a DOMHighResTimeStamp
	ttfb: null | number;
};

const timestamp = new Date();
const date = new Date().toISOString().slice(0, 10);

const jsonData: CoreWebVitalsPayload = {
	browser_id: null,
	page_view_id: null,
	received_timestamp: timestamp.toISOString(),
	received_date: date,
	fid: null,
	cls: null,
	lcp: null,
	fcp: null,
	ttfb: null,
};

let hasBeenSent = false;

// Can be tested locally or on prod
const endpoint =
	window.location.hostname === 'm.code.dev-theguardian.com' ||
	window.location.hostname === 'localhost' ||
	window.location.hostname === 'preview.gutools.co.uk'
		? 'http://performance-events.code.dev-guardianapis.com/core-web-vitals'
		: 'https://performance-events.guardianapis.com/core-web-vitals';

export const coreVitals = (): void => {
	type CoreVitalsArgs = {
		name: string;
		value: number;
	};

	const addToJson = ({ name, value }: CoreVitalsArgs): void => {
		switch (name) {
			case 'FCP':
				// We do this calculation as Biq Query only allows 9 numbers
				jsonData.fcp = Math.round(value * 1000000) / 1000000;
				break;
			case 'CLS':
				jsonData.cls = Math.round(value * 1000000) / 1000000;
				break;
			case 'LCP':
				jsonData.lcp = Math.round(value * 1000000) / 1000000;
				break;
			case 'FID':
				jsonData.fid = Math.round(value * 1000000) / 1000000;
				break;
			case 'TTFB':
				jsonData.ttfb = Math.round(value * 1000000) / 1000000;
				break;
		}

		// Check if POST has been sent
		if (!hasBeenSent) {
			// If CLS has been calculated
			if (jsonData.cls !== null) {
				// Set page view and browser ID
				if (
					window.guardian.config.ophan.browserId &&
					window.guardian.ophan
				) {
					jsonData.page_view_id = window.guardian.ophan.pageViewId;
					jsonData.browser_id =
						window.guardian.config.ophan.browserId;
				}
				fetch(endpoint, {
					method: 'POST', // *GET, POST, PUT, DELETE, etc.
					mode: 'cors', // no-cors, *cors, same-origin
					cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
					credentials: 'same-origin', // include, *same-origin, omit
					headers: {
						'Content-Type': 'application/json',
					},
					redirect: 'follow',
					referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-w
					body: JSON.stringify(jsonData),
				}).catch(() => {});

				// Should stop duplicate events being sent
				hasBeenSent = true;
			}
		}
	};

	getCLS(addToJson, false);
	getFID(addToJson);
	getLCP(addToJson);
	getFCP(addToJson);
	getTTFB(addToJson);
};
