import { getOphan } from './ophan';
import { abTestPayload, recordPerformance } from './ophan';

export const ophan = async (): Promise<void> => {
	const { record } = await getOphan();

	record({ experiences: 'dotcom-rendering' });
	record({ edition: window.guardian.config.page.edition });

	// Record server-side AB test variants (i.e. control or variant)
	record(abTestPayload(window.guardian.config.tests));

	// We wait for the load event so that we can be sure our assetPerformance is reported as expected.
	window.addEventListener('load', function load() {
		recordPerformance();
		window.removeEventListener('load', load, false);
	});
};
