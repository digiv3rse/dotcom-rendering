import { cmp, onConsentChange } from '@guardian/consent-management-platform';
import type { ConsentState } from '@guardian/consent-management-platform/dist/types';
import type { OphanAction, OphanComponentType } from '@guardian/libs';
import { getCookie, log } from '@guardian/libs';
import { getLocaleCode } from '../lib/getCountryCode';
import { injectPrivacySettingsLinkWhenReady } from '../lib/injectPrivacySettingsLink';
import { submitComponentEvent } from './ophan/ophan';

export const bootCmp = async (): Promise<void> => {
	/**
	 * Keep this file in sync with CONSENT_TIMING in static/src/javascripts/boot.js in frontend
	 * mark: CONSENT_TIMING
	 */
	if (!window.guardian.config.switches.consentManagement) return; // CMP turned off!
	const browserId = getCookie({ name: 'bwid', shouldMemoize: true });
	const { pageViewId } = window.guardian.config.ophan;

	onConsentChange((consentState: ConsentState) => {
		// eslint-disable-next-line @typescript-eslint/strict-boolean-expressions, @typescript-eslint/no-unnecessary-condition -- Review if this check is needed
		if (!consentState) return;
		// Register changes in consent state with Ophan

		/*
			(Date: February 2022. Author: Pascal. This is a work in progress...)

			### General Context

			We are sending consent data from the client side to the datalake through Ophan, using Ophan Component Events.

			We are using Ophan Component Events because consent events do not have a first class type in the Ophan pipeline
			(this may change in the future)

			At the moment we are using MANAGE_CONSENT as the default action while we develop this code.

			### Encoding Conventions

			https://github.com/guardian/transparency-consent-docs/blob/main/docs/capturing-consent-from-client-side.md#era-2-encoding-conventions
		*/

		const decideConsentCarrierLabels = () => {
			if (consentState.tcfv2) {
				const consentUUID = getCookie({ name: 'consentUUID' }) ?? '';
				const consentString = consentState.tcfv2.tcString;
				return [
					'01:TCF.v2',
					`02:${consentUUID}`,
					`03:${consentString}`,
				];
			}
			if (consentState.ccpa) {
				const ccpaUUID = getCookie({ name: 'ccpaUUID' }) ?? '';
				const flag = consentState.ccpa.doNotSell ? 'true' : 'false';
				return ['01:CCPA', `04:${ccpaUUID}`, `05:${flag}`];
			}
			if (consentState.aus) {
				const ccpaUUID = getCookie({ name: 'ccpaUUID' }) ?? '';
				const consentStatus =
					getCookie({ name: 'consentStatus' }) ?? '';
				const personalisedAdvertising = consentState.aus
					.personalisedAdvertising
					? 'true'
					: 'false';
				return [
					'01:AUS',
					`06:${ccpaUUID}`,
					`07:${consentStatus}`,
					`08:${personalisedAdvertising}`,
				];
			}
			return [];
		};

		const componentType: OphanComponentType = 'CONSENT';

		const action: OphanAction = 'MANAGE_CONSENT';
		const event = {
			component: {
				componentType,
				products: [],
				labels: decideConsentCarrierLabels(),
			},
			action,
		};

		submitComponentEvent(event);
	});

	await Promise.all([
		// Manually updates the footer DOM because it's not hydrated
		injectPrivacySettingsLinkWhenReady(),
		getLocaleCode().then((code) => {
			const country = code ?? undefined;
			cmp.init({
				pubData: {
					platform: 'next-gen',
					// If `undefined`, the resulting consent signal cannot be joined to a page view.
					browserId: browserId ?? undefined,
					pageViewId,
				},
				country,
			});
			log('dotcom', 'CMP initialised');
		}),
	]);
};
