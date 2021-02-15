import { Display, Design } from '@guardian/types';
import type { Format } from '@guardian/types';

import { decideTheme } from '@root/src/web/lib/decideTheme';
import { decideDisplay } from '@root/src/web/lib/decideDisplay';
import { decidePalette } from '@root/src/web/lib/decidePalette';
import { decideDesign } from '@root/src/web/lib/decideDesign';

import { StandardLayout } from './StandardLayout';
import { ShowcaseLayout } from './ShowcaseLayout';
import { CommentLayout } from './CommentLayout';
import { ImmersiveLayout } from './ImmersiveLayout';

type Props = {
	CAPI: CAPIType;
	NAV: NavType;
};

export const DecideLayout = ({ CAPI, NAV }: Props): JSX.Element => {
	const display: Display = decideDisplay(CAPI);
	const design: Design = decideDesign(CAPI.designType, CAPI.tags);
	const pillar: Pillar = decideTheme({
		pillar: CAPI.pillar,
		design,
		isSpecialReport: CAPI.isSpecialReport,
	});
	const format: Format = {
		display,
		design,
		theme: pillar,
	};
	const palette = decidePalette(format);

	switch (display) {
		case Display.Immersive: {
			switch (design) {
				case Design.Comment:
				case Design.GuardianView:
					return (
						<ImmersiveLayout
							CAPI={CAPI}
							NAV={NAV}
							palette={palette}
							format={format}
						/>
					);
				default:
					return (
						<ImmersiveLayout
							CAPI={CAPI}
							NAV={NAV}
							palette={palette}
							format={format}
						/>
					);
			}
		}
		case Display.Showcase: {
			switch (design) {
				case Design.Comment:
				case Design.GuardianView:
					return (
						<CommentLayout
							CAPI={CAPI}
							NAV={NAV}
							format={format}
							palette={palette}
						/>
					);
				default:
					return (
						<ShowcaseLayout
							CAPI={CAPI}
							NAV={NAV}
							format={format}
							palette={palette}
						/>
					);
			}
		}
		case Display.Standard:
		default: {
			switch (design) {
				case Design.Comment:
				case Design.GuardianView:
					return (
						<CommentLayout
							CAPI={CAPI}
							NAV={NAV}
							format={format}
							palette={palette}
						/>
					);
				default:
					return (
						<StandardLayout
							CAPI={CAPI}
							NAV={NAV}
							format={format}
							palette={palette}
						/>
					);
			}
		}
	}
};
