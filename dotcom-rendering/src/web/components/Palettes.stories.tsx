import { breakpoints } from '@guardian/source-foundations';
import { trails } from '../../../fixtures/manual/trails';
import { DynamicFast } from './DynamicFast';
import { FrontSection } from './FrontSection';

export default {
	title: 'Layouts/Palettes',
};

const groupedTrails = {
	snap: [],
	huge: [],
	veryBig: [{ isBoosted: true, ...trails[0] }, trails[1]],
	big: [trails[2], trails[3]],
	standard: [
		trails[4],
		trails[5],
		trails[6],
		trails[7],
		trails[8],
		trails[9],
	],
};

export const EventPalette = () => (
	<FrontSection
		title="Event Palette"
		centralBorder="partial"
		containerPalette="EventPalette"
		showDateHeader={true}
		editionId={'UK'}
	>
		<DynamicFast
			groupedTrails={groupedTrails}
			containerPalette="EventPalette"
			showAge={true}
		/>
	</FrontSection>
);
EventPalette.story = {
	parameters: {
		chromatic: {
			viewports: [
				breakpoints.mobile,
				breakpoints.tablet,
				breakpoints.wide,
			],
		},
	},
};

export const EventAltPalette = () => (
	<FrontSection
		title="Event Alt Palette"
		centralBorder="partial"
		containerPalette="EventAltPalette"
		showDateHeader={true}
		editionId={'UK'}
	>
		<DynamicFast
			groupedTrails={groupedTrails}
			containerPalette="EventAltPalette"
			showAge={true}
		/>
	</FrontSection>
);

export const SombrePalette = () => (
	<FrontSection
		title="Sombre Palette"
		centralBorder="partial"
		containerPalette="SombrePalette"
		showDateHeader={true}
		editionId={'UK'}
	>
		<DynamicFast
			groupedTrails={groupedTrails}
			containerPalette="SombrePalette"
			showAge={true}
		/>
	</FrontSection>
);

export const SombreAltPalette = () => (
	<FrontSection
		title="Sombre Alt Palette"
		centralBorder="partial"
		containerPalette="SombreAltPalette"
		showDateHeader={true}
		editionId={'UK'}
	>
		<DynamicFast
			groupedTrails={groupedTrails}
			containerPalette="SombreAltPalette"
			showAge={true}
		/>
	</FrontSection>
);

export const BreakingPalette = () => (
	<FrontSection
		title="Breaking Palette"
		centralBorder="partial"
		containerPalette="BreakingPalette"
		showDateHeader={true}
		editionId={'UK'}
	>
		<DynamicFast
			groupedTrails={groupedTrails}
			containerPalette="BreakingPalette"
			showAge={true}
		/>
	</FrontSection>
);

export const LongRunningPalette = () => (
	<FrontSection
		title="Long Running Palette"
		centralBorder="partial"
		containerPalette="LongRunningPalette"
		showDateHeader={true}
		editionId={'UK'}
	>
		<DynamicFast
			groupedTrails={groupedTrails}
			containerPalette="LongRunningPalette"
			showAge={true}
		/>
	</FrontSection>
);

export const LongRunningAltPalette = () => (
	<FrontSection
		title="Long Running Alt Palette"
		padContent={false}
		centralBorder="partial"
		containerPalette="LongRunningAltPalette"
		showDateHeader={true}
		editionId={'UK'}
	>
		<DynamicFast
			groupedTrails={groupedTrails}
			containerPalette="LongRunningAltPalette"
			showAge={true}
		/>
	</FrontSection>
);

export const InvestigationPalette = () => (
	<FrontSection
		title="Investigation Palette"
		centralBorder="partial"
		containerPalette="InvestigationPalette"
		showDateHeader={true}
		editionId={'UK'}
	>
		<DynamicFast
			groupedTrails={groupedTrails}
			containerPalette="InvestigationPalette"
			showAge={true}
		/>
	</FrontSection>
);

export const SpecialReportAltPalette = () => (
	<FrontSection
		title="Special Report Alt Palette"
		centralBorder="partial"
		containerPalette="SpecialReportAltPalette"
		showDateHeader={true}
		editionId={'UK'}
	>
		<DynamicFast
			groupedTrails={groupedTrails}
			containerPalette="SpecialReportAltPalette"
			showAge={true}
		/>
	</FrontSection>
);
