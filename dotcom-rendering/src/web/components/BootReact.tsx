import ReactDOM from 'react-dom';

import { App } from '@root/src/web/components/App';
import { ABProvider } from '@guardian/ab-react';
import { tests } from '@frontend/web/experiments/ab-tests';
import { getForcedParticipationsFromUrl } from '@frontend/web/lib/getAbUrlHash';
import { getCypressSwitches } from '@frontend/web/experiments/cypress-switches';
import { loadableReady } from '@loadable/component';
import { getOphanRecordFunction } from '@root/src/web/browser/ophan/ophan';
import { getCookie } from '@guardian/libs';

type Props = {
	CAPI: CAPIBrowserType;
};

export const BootReact = ({ CAPI }: Props) => {
	const mvtId = Number(
		(CAPI.config.isDev &&
			getCookie({ name: 'GU_mvt_id_local', shouldMemoize: true })) || // Simplify localhost testing by creating a different mvt id
			getCookie({ name: 'GU_mvt_id', shouldMemoize: true }),
	);
	if (!mvtId) {
		// 0 is default and falsy here
		// eslint-disable-next-line no-console
		console.log('There is no MVT ID set, see BootReact.tsx');
	}

	const ophanRecord = getOphanRecordFunction();

	const windowHash = window && window.location && window.location.hash;

	// Get the forced switches to use for when running within cypress
	// Is empty object if not in cypress
	const cypressAbSwitches = getCypressSwitches();

	loadableReady(() => {
		ReactDOM.render(
			<ABProvider
				arrayOfTestObjects={tests}
				abTestSwitches={{
					...CAPI.config.switches,
					...cypressAbSwitches, // by adding cypress switches below CAPI, we can override any production switch in Cypress
				}}
				pageIsSensitive={CAPI.config.isSensitive}
				mvtMaxValue={1000000}
				mvtId={mvtId}
				ophanRecord={ophanRecord}
				forcedTestVariants={getForcedParticipationsFromUrl(windowHash)}
			>
				<App CAPI={CAPI} ophanRecord={ophanRecord} />
			</ABProvider>,

			document.getElementById('react-root'),
		);
	}).catch((e) =>
		console.error(`BootReact @loadable/component - error: ${e}`),
	);
};
