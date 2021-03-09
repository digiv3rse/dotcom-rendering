import React, { useEffect, useState } from 'react';
import * as emotion from 'emotion-legacy';
import * as emotionCore from 'emotion-core-legacy';
import * as emotionTheming from 'emotion-theming-legacy';
import {
	parseBrazeEpicParams,
	EpicDataFromBraze,
	Variant,
} from '@root/src/web/lib/braze/parseBrazeEpicParams';
import { BrazeMessagesInterface } from '@root/src/web/lib/braze/BrazeMessages';
import { CanShowResult } from '@root/src/web/lib/messagePicker';
import { useOnce } from '@root/src/web/lib/useOnce';
import { joinUrl } from '@root/src/lib/joinUrl';
import { useHasBeenSeen } from '@root/src/web/lib/useHasBeenSeen';

const { css } = emotion;

const wrapperMargins = css`
	margin: 18px 0;
`;

const EPIC_COMPONENT_PATH = '/epic.js';

type NoEpicDataFromBraze = {
	componentName: 'NoEpic';
};

type DataFromBraze = EpicDataFromBraze | NoEpicDataFromBraze;

type Meta = {
	dataFromBraze?: DataFromBraze;
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
	const variant = parseBrazeEpicParams(dataFromBraze);
	if (variant === null) return null;

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

	useOnce(() => {
		window.guardian.automat = {
			react: React,
			preact: React,
			emotionCore,
			emotionTheming,
			emotion,
		};

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

	useEffect(() => {
		if (hasBeenSeen && meta) {
			meta.logImpressionWithBraze();
		}
	}, [hasBeenSeen, meta]);

	if (Epic && meta.dataFromBraze) {
		// This will come from Braze via the meta from canShow
		const props = buildEpicProps(
			meta.dataFromBraze as EpicDataFromBraze,
			countryCode,
		);

		if (props) {
			return (
				<div ref={setNode} className={wrapperMargins}>
					{/* eslint-disable-next-line react/jsx-props-no-spreading */}
					<Epic {...props} />
				</div>
			);
		}
	}

	return null;
};

const NoEpic = () => null;

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

	if (componentName === 'NoEpic') {
		return <NoEpic />;
	}

	return null;
};
