import { AB } from '@guardian/ab-core';
import type { CoreAPIConfig } from '@guardian/ab-core';
import { getCookie, log } from '@guardian/libs';
import { useEffect, useState } from 'react';
import { getOphan } from '../client/ophan/ophan';
import { tests } from '../experiments/ab-tests';
import { getCypressSwitches } from '../experiments/cypress-switches';
import { runnableTestsToParticipations } from '../experiments/lib/ab-participations';
import { getForcedParticipationsFromUrl } from '../lib/getAbUrlHash';
import { setABTests } from '../lib/useAB';
import type { ABTestSwitches } from '../model/enhance-switches';
import { useConfig } from './ConfigContext';

type Props = {
	abTestSwitches: ABTestSwitches;
	forcedTestVariants?: CoreAPIConfig['forcedTestVariants'];
	isDev: boolean;
	pageIsSensitive: CoreAPIConfig['pageIsSensitive'];
};

/**
 * Initialises the values of `useAB` and sends relevant Ophan events.
 *
 * ## Why does this need to be an Island?
 *
 * All this logic is client-side.
 *
 * ---
 *
 * Does not render **anything**.
 */
export const SetABTests = ({
	isDev,
	pageIsSensitive,
	abTestSwitches,
	forcedTestVariants,
}: Props) => {
	const { renderingTarget } = useConfig();
	const [ophan, setOphan] = useState<Awaited<ReturnType<typeof getOphan>>>();

	useEffect(() => {
		getOphan(renderingTarget)
			.then(setOphan)
			.catch((e) => {
				console.log(
					`There was an error retrieving the ophan window object`,
					e,
				);
			});
	}, [renderingTarget]);

	useEffect(() => {
		if (!ophan) return;

		const mvtId = Number(
			(isDev &&
				getCookie({
					name: 'GU_mvt_id_local',
					shouldMemoize: true,
				})) || // Simplify localhost testing by creating a different mvt id
				getCookie({ name: 'GU_mvt_id', shouldMemoize: true }),
		);
		if (!mvtId) {
			// 0 is default and falsy here
			console.log(
				'There is no MVT ID set, see SetABTests.importable.tsx',
			);
		}

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
			forcedTestVariants: allForcedTestVariants,
			ophanRecord: ophan.record,
			serverSideTests: {},
			errorReporter: () => void 0,
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
	}, [abTestSwitches, forcedTestVariants, isDev, pageIsSensitive, ophan]);

	// we don’t render anything
	return null;
};
