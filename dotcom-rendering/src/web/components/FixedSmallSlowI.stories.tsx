import { breakpoints } from '@guardian/source-foundations';
import { trails } from '../../../fixtures/manual/trails';
import { FixedSmallSlowI } from './FixedSmallSlowI';
import { Section } from './Section';

export default {
	component: FixedSmallSlowI,
	title: 'Components/FixedSmallSlowI',
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

export const Default = () => (
	<Section title="FixedSmallSlowI" padContent={true} centralBorder="partial">
		<FixedSmallSlowI trails={trails} showAge={true} />
	</Section>
);
Default.story = { name: 'FixedSmallSlowI' };
