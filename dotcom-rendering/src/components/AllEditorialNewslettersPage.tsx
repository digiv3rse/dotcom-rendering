import { css, Global } from '@emotion/react';
import { brandAlt, focusHalo, neutral } from '@guardian/source-foundations';
import { StrictMode } from 'react';
import { AllEditorialNewslettersPageLayout } from '../layouts/AllEditorialNewslettersPageLayout.tsx';
import type { NavType } from '../model/extract-nav.ts';
import type { DCRNewslettersPageType } from '../types/newslettersPage.ts';
import { AlreadyVisited } from './AlreadyVisited.importable.tsx';
import { FocusStyles } from './FocusStyles.importable.tsx';
import { Island } from './Island.tsx';
import { Metrics } from './Metrics.importable.tsx';
import { SkipTo } from './SkipTo.tsx';

type Props = {
	newslettersPage: DCRNewslettersPageType;
	NAV: NavType;
};

/**
 * @description
 * AllEditorialNewslettersPage is a high level wrapper for the
 * editorial newsletters page on Dotcom. Sets strict mode and some globals
 *
 * @param {Props} props
 * @param {DCRNewslettersPageType} props.newslettersPage - The newsletters JSON data
 * @param {NAVType} props.NAV - The nav JSON data
 * */
export const AllEditorialNewslettersPage = ({
	newslettersPage,
	NAV,
}: Props) => {
	return (
		<StrictMode>
			<Global
				styles={css`
					/* Crude but effective mechanism. Specific components may need to improve on this behaviour. */
					/* The not(.src...) selector is to work with Source's FocusStyleManager. */
					*:focus {
						${focusHalo}
					}
					::selection {
						background: ${brandAlt[400]};
						color: ${neutral[7]};
					}
				`}
			/>
			<SkipTo id="maincontent" label="Skip to main content" />
			<SkipTo id="navigation" label="Skip to navigation" />
			<Island clientOnly={true} deferUntil="idle">
				<AlreadyVisited />
			</Island>
			<Island clientOnly={true} deferUntil="idle">
				<FocusStyles />
			</Island>
			<Island clientOnly={true} deferUntil="idle">
				<Metrics
					commercialMetricsEnabled={
						!!newslettersPage.config.switches.commercialMetrics
					}
				/>
			</Island>
			<AllEditorialNewslettersPageLayout
				newslettersPage={newslettersPage}
				NAV={NAV}
			/>
		</StrictMode>
	);
};
