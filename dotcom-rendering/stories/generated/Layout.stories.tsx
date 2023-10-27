
/*
 * DO NOT EDIT THIS FILE DIRECTLY
 * These stories were auto-generated by `dotcom-rendering/scripts/gen-stories/gen-stories.js`
 */
import { ArticleDesign, ArticleDisplay, ArticleSpecial, Pillar } from '@guardian/libs';
import { lightDecorator } from '../../.storybook/decorators/themeDecorator';
import { HydratedLayoutWrapper } from '../../src/layouts/Layout.stories';

// eslint-disable-next-line import/no-default-export -- we need a default here
export default {
	title: 'Components/Layout/Format Variations',
	component: HydratedLayoutWrapper,
	parameters: {
		chromatic: {
			diffThreshold: 0.2,
			pauseAnimationAtEnd: true,
			delay: 1200, // ensure that OnwardsUpper shows relevant data
		},
	},
};

export const WebStandardStandardNewsPillar = () => {
	return (
		<HydratedLayoutWrapper
			displayName="Standard"
			designName="Standard"
			theme="NewsPillar"
			renderingTarget="Web"
		/>
	);
};
WebStandardStandardNewsPillar.storyName = 'Web: Display: Standard, Design: Standard, Theme: NewsPillar';
WebStandardStandardNewsPillar.args = { config: {"renderingTarget":"Web","darkModeAvailable":false} };
WebStandardStandardNewsPillar.decorators = [lightDecorator({
	display: ArticleDisplay.Standard,
	design: ArticleDesign.Standard,
	theme: {...ArticleSpecial, ...Pillar}.News,
})];

export const AppsStandardStandardNewsPillar = () => {
	return (
		<HydratedLayoutWrapper
			displayName="Standard"
			designName="Standard"
			theme="NewsPillar"
			renderingTarget="Apps"
		/>
	);
};
AppsStandardStandardNewsPillar.storyName = 'Apps: Display: Standard, Design: Standard, Theme: NewsPillar';
AppsStandardStandardNewsPillar.args = { config: {"renderingTarget":"Apps","darkModeAvailable":false} };
AppsStandardStandardNewsPillar.decorators = [lightDecorator({
	display: ArticleDisplay.Standard,
	design: ArticleDesign.Standard,
	theme: {...ArticleSpecial, ...Pillar}.News,
})];

export const AppsShowcaseStandardNewsPillar = () => {
	return (
		<HydratedLayoutWrapper
			displayName="Showcase"
			designName="Standard"
			theme="NewsPillar"
			renderingTarget="Apps"
		/>
	);
};
AppsShowcaseStandardNewsPillar.storyName = 'Apps: Display: Showcase, Design: Standard, Theme: NewsPillar';
AppsShowcaseStandardNewsPillar.args = { config: {"renderingTarget":"Apps","darkModeAvailable":false} };
AppsShowcaseStandardNewsPillar.decorators = [lightDecorator({
	display: ArticleDisplay.Showcase,
	design: ArticleDesign.Standard,
	theme: {...ArticleSpecial, ...Pillar}.News,
})];

export const WebShowcasePictureOpinionPillar = () => {
	return (
		<HydratedLayoutWrapper
			displayName="Showcase"
			designName="Picture"
			theme="OpinionPillar"
			renderingTarget="Web"
		/>
	);
};
WebShowcasePictureOpinionPillar.storyName = 'Web: Display: Showcase, Design: Picture, Theme: OpinionPillar';
WebShowcasePictureOpinionPillar.args = { config: {"renderingTarget":"Web","darkModeAvailable":false} };
WebShowcasePictureOpinionPillar.decorators = [lightDecorator({
	display: ArticleDisplay.Showcase,
	design: ArticleDesign.Picture,
	theme: {...ArticleSpecial, ...Pillar}.Opinion,
})];

export const AppsShowcasePictureOpinionPillar = () => {
	return (
		<HydratedLayoutWrapper
			displayName="Showcase"
			designName="Picture"
			theme="OpinionPillar"
			renderingTarget="Apps"
		/>
	);
};
AppsShowcasePictureOpinionPillar.storyName = 'Apps: Display: Showcase, Design: Picture, Theme: OpinionPillar';
AppsShowcasePictureOpinionPillar.args = { config: {"renderingTarget":"Apps","darkModeAvailable":false} };
AppsShowcasePictureOpinionPillar.decorators = [lightDecorator({
	display: ArticleDisplay.Showcase,
	design: ArticleDesign.Picture,
	theme: {...ArticleSpecial, ...Pillar}.Opinion,
})];

export const AppsStandardCommentNewsPillar = () => {
	return (
		<HydratedLayoutWrapper
			displayName="Standard"
			designName="Comment"
			theme="NewsPillar"
			renderingTarget="Apps"
		/>
	);
};
AppsStandardCommentNewsPillar.storyName = 'Apps: Display: Standard, Design: Comment, Theme: NewsPillar';
AppsStandardCommentNewsPillar.args = { config: {"renderingTarget":"Apps","darkModeAvailable":false} };
AppsStandardCommentNewsPillar.decorators = [lightDecorator({
	display: ArticleDisplay.Standard,
	design: ArticleDesign.Comment,
	theme: {...ArticleSpecial, ...Pillar}.News,
})];

export const AppsStandardInteractiveNewsPillar = () => {
	return (
		<HydratedLayoutWrapper
			displayName="Standard"
			designName="Interactive"
			theme="NewsPillar"
			renderingTarget="Apps"
		/>
	);
};
AppsStandardInteractiveNewsPillar.storyName = 'Apps: Display: Standard, Design: Interactive, Theme: NewsPillar';
AppsStandardInteractiveNewsPillar.args = { config: {"renderingTarget":"Apps","darkModeAvailable":false} };
AppsStandardInteractiveNewsPillar.decorators = [lightDecorator({
	display: ArticleDisplay.Standard,
	design: ArticleDesign.Interactive,
	theme: {...ArticleSpecial, ...Pillar}.News,
})];

export const AppsImmersiveStandardNewsPillar = () => {
	return (
		<HydratedLayoutWrapper
			displayName="Immersive"
			designName="Standard"
			theme="NewsPillar"
			renderingTarget="Apps"
		/>
	);
};
AppsImmersiveStandardNewsPillar.storyName = 'Apps: Display: Immersive, Design: Standard, Theme: NewsPillar';
AppsImmersiveStandardNewsPillar.args = { config: {"renderingTarget":"Apps","darkModeAvailable":false} };
AppsImmersiveStandardNewsPillar.decorators = [lightDecorator({
	display: ArticleDisplay.Immersive,
	design: ArticleDesign.Standard,
	theme: {...ArticleSpecial, ...Pillar}.News,
})];
