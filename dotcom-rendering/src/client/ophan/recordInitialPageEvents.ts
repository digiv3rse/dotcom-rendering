import type { RenderingTarget } from '../../types/renderingTarget';
import { getOphan, recordExperiences, recordPerformance } from './ophan';

export const recordInitialPageEvents = async (
	renderingTarget: RenderingTarget,
): Promise<void> => {
	const { record } = await getOphan(renderingTarget);

	void recordExperiences(renderingTarget, ['dotcom-rendering']);
	record({
		// @ts-expect-error -- Type 'EditionId' is not assignable to type 'TEdition | undefined'.
		// Type '"INT"' is not assignable to type 'TEdition | undefined'.
		edition: window.guardian.config.page.edition,
	});

	// We wait for the load event so that we can be sure our assetPerformance is reported as expected.
	window.addEventListener('load', function load() {
		void recordPerformance(renderingTarget);
		window.removeEventListener('load', load, false);
	});
};
