import { AB } from '@guardian/ab-core';
import type { CoreAPIConfig } from '@guardian/ab-core';
import { getCookie, log } from '@guardian/libs';
import type { ABTestSwitches } from '../model/enhance-switches';
import { getOphanRecordFunction } from '../client/ophan/ophan';
import { tests } from '../experiments/ab-tests';
import { getCypressSwitches } from '../experiments/cypress-switches';
import { runnableTestsToParticipations } from '../experiments/lib/ab-participations';
import { getForcedParticipationsFromUrl } from '../lib/getAbUrlHash';
import { setABTests } from '../lib/useAB';

type Props = {
	abTestSwitches: ABTestSwitches;
	forcedTestVariants?: CoreAPIConfig['forcedTestVariants'];
	isDev: boolean;
	pageIsSensitive: CoreAPIConfig['pageIsSensitive'];
};

export const SetABTests = ({
	isDev,
	pageIsSensitive,
	abTestSwitches,
	forcedTestVariants,
}: Props) => {
	const mvtId = Number(
		(isDev &&
			getCookie({ name: 'GU_mvt_id_local', shouldMemoize: true })) || // Simplify localhost testing by creating a different mvt id
			getCookie({ name: 'GU_mvt_id', shouldMemoize: true }),
	);
	if (!mvtId) {
		// 0 is default and falsy here
		console.log('There is no MVT ID set, see SetABTests.importable.tsx');
	}

	const ophanRecord = getOphanRecordFunction();

	// Get the forced switches to use for when running within cypress
	// Is empty object if not in cypress
	const cypressAbSwitches = getCypressSwitches();

	const allForcedTestVariants = {
		...forcedTestVariants,
		...getForcedParticipationsFromUrl(window.location.hash),
	};

	const ab = new AB({
		mvtId,
		pageIsSensitive,
		abTestSwitches: {
			...abTestSwitches,
			...cypressAbSwitches, // by adding cypress switches below CAPI, we can override any production switch in Cypress
		},
		arrayOfTestObjects: tests,
		ophanRecord,
		forcedTestVariants: allForcedTestVariants,
	});

	const allRunnableTests = ab.allRunnableTests(tests);
	const participations = runnableTestsToParticipations(allRunnableTests);

	setABTests({
		api: ab,
		participations,
	});

	ab.trackABTests(allRunnableTests);
	ab.registerImpressionEvents(allRunnableTests);
	ab.registerCompleteEvents(allRunnableTests);
	log('dotcom', 'AB tests initialised');

	// we don’t render anything
	return null;
};
