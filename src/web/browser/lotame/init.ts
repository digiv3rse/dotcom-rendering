import '../webpackPublicPath';
import { startup } from '@root/src/web/browser/startup';
import {getCountryCode} from '@root/src/web/lib/getCountryCode';

const shouldServeLotame = () => {
	const geo: string | null  = getCountryCode();
	if (!geo) {
		return false;
	}
	return !['US', 'CA', 'AU', 'NZ'].includes(geo);
};

// Loads user tracking (ad segment) data, which is then used to
// drive personalised ads for our 'Ozone' ads.
const init = (): Promise<void> => {
	try {
		((document) => {
			if (shouldServeLotame()) {
				const script = document.createElement('script');
				script.src = 'https://tags.crwdcntrl.net/c/12666/cc.js';
				document.body.appendChild(script);
			}
		})(document);
	} catch (e) {
		if (window.guardian.config.stage === 'DEV') {
			throw e;
		}
	}
	return Promise.resolve();
};

startup('lotame', null, init);
