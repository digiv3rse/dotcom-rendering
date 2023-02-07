import { breakpoints } from '@guardian/source-foundations';
import { trails } from '../../../fixtures/manual/trails';
import { FixedMediumSlowVI } from './FixedMediumSlowVI';
import { Section } from './Section';

export default {
	component: FixedMediumSlowVI,
	title: 'Components/FixedMediumSlowVI',
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
	<Section title="FixedSmallSlowVI" padContent={true} centralBorder="partial">
		<FixedMediumSlowVI trails={trails} showAge={true} />
	</Section>
);
Default.story = { name: 'FixedSmallSlowVI' };
