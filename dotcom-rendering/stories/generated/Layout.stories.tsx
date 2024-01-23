
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

		export const WebStandardStandardNewsPillarLight = () => {
			return (
				<HydratedLayoutWrapper
					displayName="Standard"
					designName="Standard"
					theme="NewsPillar"
					renderingTarget="Web"
				/>
			);
		};
		WebStandardStandardNewsPillarLight.storyName = 'Web: Display: Standard, Design: Standard, Theme: NewsPillar, Mode: Light';
		WebStandardStandardNewsPillarLight.parameters = { config: {"renderingTarget":"Web","darkModeAvailable":false} };
		WebStandardStandardNewsPillarLight.decorators = [lightDecorator(
				[{
					display:  ArticleDisplay.Standard,
					design: ArticleDesign.Standard,
					theme: {...ArticleSpecial, ...Pillar}.News,
				}]
			),
		];

		

		export const WebStandardNewsletterSignupSportPillarLight = () => {
			return (
				<HydratedLayoutWrapper
					displayName="Standard"
					designName="NewsletterSignup"
					theme="SportPillar"
					renderingTarget="Web"
				/>
			);
		};
		WebStandardNewsletterSignupSportPillarLight.storyName = 'Web: Display: Standard, Design: NewsletterSignup, Theme: SportPillar, Mode: Light';
		WebStandardNewsletterSignupSportPillarLight.parameters = { config: {"renderingTarget":"Web","darkModeAvailable":false} };
		WebStandardNewsletterSignupSportPillarLight.decorators = [lightDecorator(
				[{
					display:  ArticleDisplay.Standard,
					design: ArticleDesign.NewsletterSignup,
					theme: {...ArticleSpecial, ...Pillar}.Sport,
				}]
			),
		];

		

		export const WebShowcasePictureOpinionPillarLight = () => {
			return (
				<HydratedLayoutWrapper
					displayName="Showcase"
					designName="Picture"
					theme="OpinionPillar"
					renderingTarget="Web"
				/>
			);
		};
		WebShowcasePictureOpinionPillarLight.storyName = 'Web: Display: Showcase, Design: Picture, Theme: OpinionPillar, Mode: Light';
		WebShowcasePictureOpinionPillarLight.parameters = { config: {"renderingTarget":"Web","darkModeAvailable":false} };
		WebShowcasePictureOpinionPillarLight.decorators = [lightDecorator(
				[{
					display:  ArticleDisplay.Showcase,
					design: ArticleDesign.Picture,
					theme: {...ArticleSpecial, ...Pillar}.Opinion,
				}]
			),
		];

		

		export const WebImmersivePhotoEssayLabsLight = () => {
			return (
				<HydratedLayoutWrapper
					displayName="Immersive"
					designName="PhotoEssay"
					theme="Labs"
					renderingTarget="Web"
				/>
			);
		};
		WebImmersivePhotoEssayLabsLight.storyName = 'Web: Display: Immersive, Design: PhotoEssay, Theme: Labs, Mode: Light';
		WebImmersivePhotoEssayLabsLight.parameters = { config: {"renderingTarget":"Web","darkModeAvailable":false} };
		WebImmersivePhotoEssayLabsLight.decorators = [lightDecorator(
				[{
					display:  ArticleDisplay.Immersive,
					design: ArticleDesign.PhotoEssay,
					theme: {...ArticleSpecial, ...Pillar}.Labs,
				}]
			),
		];

		

		export const WebStandardStandardLabsLight = () => {
			return (
				<HydratedLayoutWrapper
					displayName="Standard"
					designName="Standard"
					theme="Labs"
					renderingTarget="Web"
				/>
			);
		};
		WebStandardStandardLabsLight.storyName = 'Web: Display: Standard, Design: Standard, Theme: Labs, Mode: Light';
		WebStandardStandardLabsLight.parameters = { config: {"renderingTarget":"Web","darkModeAvailable":false} };
		WebStandardStandardLabsLight.decorators = [lightDecorator(
				[{
					display:  ArticleDisplay.Standard,
					design: ArticleDesign.Standard,
					theme: {...ArticleSpecial, ...Pillar}.Labs,
				}]
			),
		];

		

		export const WebStandardFeatureLabsLight = () => {
			return (
				<HydratedLayoutWrapper
					displayName="Standard"
					designName="Feature"
					theme="Labs"
					renderingTarget="Web"
				/>
			);
		};
		WebStandardFeatureLabsLight.storyName = 'Web: Display: Standard, Design: Feature, Theme: Labs, Mode: Light';
		WebStandardFeatureLabsLight.parameters = { config: {"renderingTarget":"Web","darkModeAvailable":false} };
		WebStandardFeatureLabsLight.decorators = [lightDecorator(
				[{
					display:  ArticleDisplay.Standard,
					design: ArticleDesign.Feature,
					theme: {...ArticleSpecial, ...Pillar}.Labs,
				}]
			),
		];

		

		export const WebStandardRecipeLabsLight = () => {
			return (
				<HydratedLayoutWrapper
					displayName="Standard"
					designName="Recipe"
					theme="Labs"
					renderingTarget="Web"
				/>
			);
		};
		WebStandardRecipeLabsLight.storyName = 'Web: Display: Standard, Design: Recipe, Theme: Labs, Mode: Light';
		WebStandardRecipeLabsLight.parameters = { config: {"renderingTarget":"Web","darkModeAvailable":false} };
		WebStandardRecipeLabsLight.decorators = [lightDecorator(
				[{
					display:  ArticleDisplay.Standard,
					design: ArticleDesign.Recipe,
					theme: {...ArticleSpecial, ...Pillar}.Labs,
				}]
			),
		];

		

		export const WebStandardLiveBlogNewsPillarLight = () => {
			return (
				<HydratedLayoutWrapper
					displayName="Standard"
					designName="LiveBlog"
					theme="NewsPillar"
					renderingTarget="Web"
				/>
			);
		};
		WebStandardLiveBlogNewsPillarLight.storyName = 'Web: Display: Standard, Design: LiveBlog, Theme: NewsPillar, Mode: Light';
		WebStandardLiveBlogNewsPillarLight.parameters = { config: {"renderingTarget":"Web","darkModeAvailable":false} };
		WebStandardLiveBlogNewsPillarLight.decorators = [lightDecorator(
				[{
					display:  ArticleDisplay.Standard,
					design: ArticleDesign.LiveBlog,
					theme: {...ArticleSpecial, ...Pillar}.News,
				}]
			),
		];

		
