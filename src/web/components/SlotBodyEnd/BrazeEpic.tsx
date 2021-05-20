import React, { useEffect, useRef, useState } from 'react';
import { css } from 'emotion';

import {
	parseBrazeEpicParams,
	EpicDataFromBraze,
	Variant,
} from '@root/src/web/lib/braze/parseBrazeEpicParams';
import type { BrazeMessagesInterface } from '@guardian/braze-components/logic';
import { getBrazeMetaFromUrlFragment } from '@root/src/web/lib/braze/forceBrazeMessage';
import { CanShowResult } from '@root/src/web/lib/messagePicker';
import { useOnce } from '@root/src/web/lib/useOnce';
import { joinUrl } from '@root/src/lib/joinUrl';
import { useHasBeenSeen } from '@root/src/web/lib/useHasBeenSeen';
import { submitComponentEvent } from '@root/src/web/browser/ophan/ophan';
import { setAutomat } from '@root/src/web/lib/setAutomat';
import { either } from '@guardian/types';

const wrapperMargins = css`
	margin: 18px 0;
`;

const EPIC_COMPONENT_PATH = '/modules/v1/epics/ContributionsEpic.js';
const COMPONENT_TYPE = 'RETENTION_EPIC';

type Meta = {
	dataFromBraze?: EpicDataFromBraze;
	logImpressionWithBraze: () => void;
	// logButtonClickWithBraze: (id: number) => void; // TODO: Handle button click tracking
};

type EpicConfig = {
	meta: Meta;
	contributionsServiceUrl: string;
	countryCode: string;
};

type Tracking = {
	ophanPageId: string;
	platformId: string;
	clientName: string;
	referrerUrl: string;
};

type EpicProps = {
	variant: Variant;
	tracking: Tracking;
	numArticles: number;
	countryCode: string;
};

export const canShow = async (
	brazeMessagesPromise: Promise<BrazeMessagesInterface>,
): Promise<CanShowResult> => {
	const forcedBrazeMeta = getBrazeMetaFromUrlFragment();
	if (forcedBrazeMeta) {
		return {
			result: true,
			meta: forcedBrazeMeta,
		};
	}

	try {
		const brazeMessages = await brazeMessagesPromise;
		const message = await brazeMessages.getMessageForEndOfArticle();

		return {
			result: true,
			meta: {
				dataFromBraze: message.extras,
				logImpressionWithBraze: () => {
					message.logImpression();
				},
			},
		};
	} catch (e) {
		return { result: false };
	}
};

const buildEpicProps = (
	dataFromBraze: EpicDataFromBraze,
	countryCode: string,
): EpicProps | null => {
	const variantResult = parseBrazeEpicParams(dataFromBraze);

	return either<string, Variant, EpicProps | null>(
		(err) => {
			const msg = `Not rendering Braze epic - there are props missing: ${err}`;
			window.guardian.modules.sentry.reportError(
				new Error(msg),
				'braze-epic',
			);
			return null;
		},
		(variant) => {
			const pageTracking = {
				ophanPageId: window.guardian.config.ophan.pageViewId,
				platformId: 'GUARDIAN_WEB',
				clientName: 'dcr',
				referrerUrl: window.location.origin + window.location.pathname,
			};

			const tracking = {
				...pageTracking,
			};

			return { variant, tracking, numArticles: 0, countryCode };
		},
	)(variantResult);
};

const BrazeEpic = ({
	contributionsServiceUrl,
	meta,
	countryCode,
}: EpicConfig) => {
	const [Epic, setEpic] = useState<React.FC<EpicProps>>();

	const [hasBeenSeen, setNode] = useHasBeenSeen({
		rootMargin: '-18px',
		threshold: 0,
		debounce: true,
	});

	const epicRef = useRef(null);

	useOnce(() => {
		setAutomat();

		const componentUrl = joinUrl([
			contributionsServiceUrl,
			EPIC_COMPONENT_PATH,
		]);

		window
			.guardianPolyfilledImport(componentUrl)
			.then((epicModule: { ContributionsEpic: React.FC<EpicProps> }) => {
				setEpic(() => epicModule.ContributionsEpic); // useState requires functions to be wrapped
			})
			.catch((error) => {
				window.guardian.modules.sentry.reportError(error, 'braze-epic');
			});
	}, [contributionsServiceUrl, meta]);

	useOnce(() => {
		submitComponentEvent({
			component: {
				componentType: COMPONENT_TYPE,
				id: (meta.dataFromBraze as EpicDataFromBraze).ophanComponentId,
			},
			action: 'INSERT',
		});
	}, [meta?.dataFromBraze, epicRef.current]);

	useEffect(() => {
		if (hasBeenSeen && meta && meta.dataFromBraze) {
			meta.logImpressionWithBraze();

			// Log VIEW event with Ophan
			submitComponentEvent({
				component: {
					componentType: COMPONENT_TYPE,
					id: meta.dataFromBraze.ophanComponentId,
				},
				action: 'VIEW',
			});
		}
	}, [hasBeenSeen, meta]);

	if (Epic && meta.dataFromBraze) {
		// This will come from Braze via the meta from canShow
		const props = buildEpicProps(meta.dataFromBraze, countryCode);

		if (props) {
			return (
				<div ref={setNode} className={wrapperMargins}>
					<div ref={epicRef}>
						{/* eslint-disable-next-line react/jsx-props-no-spreading */}
						<Epic {...props} />
					</div>
				</div>
			);
		}
	}

	return null;
};

export const MaybeBrazeEpic = ({
	contributionsServiceUrl,
	meta,
	countryCode,
}: EpicConfig) => {
	const componentName = meta.dataFromBraze?.componentName;

	if (componentName === 'Epic') {
		return (
			<BrazeEpic
				contributionsServiceUrl={contributionsServiceUrl}
				meta={meta}
				countryCode={countryCode}
			/>
		);
	}

	return null;
};
