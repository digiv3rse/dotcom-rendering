import {
	ArticleDesign,
	ArticleDisplay,
	ArticleSpecial,
	Pillar,
} from '@guardian/libs';
import { breakpoints, specialReport } from '@guardian/source-foundations';
import type { StoryObj } from '@storybook/react';
import { splitTheme } from '../../.storybook/decorators/splitThemeDecorator';
import type { DCRContainerPalette } from '../types/front';
import { CardHeadline } from './CardHeadline';
import { Section } from './Section';

export default {
	component: CardHeadline,
	title: 'Components/CardHeadline',
};

const smallHeadlineSizes: SmallHeadlineSize[] = [
	'ginormous',
	'huge',
	'large',
	'medium',
	'small',
	'tiny',
];

export const Article = () => (
	<Section fullWidth={true} showTopBorder={false} showSideBorders={false}>
		<CardHeadline
			headlineText="This is how an Article card headline looks"
			format={{
				display: ArticleDisplay.Standard,
				design: ArticleDesign.Standard,
				theme: Pillar.News,
			}}
		/>
	</Section>
);
Article.storyName = 'Article';

export const Analysis = () => (
	<>
		{smallHeadlineSizes.map((size) => (
			<div key={size}>
				<Section
					fullWidth={true}
					showTopBorder={false}
					showSideBorders={false}
				>
					<CardHeadline
						headlineText={`This is how a ${size} Analysis card headline looks`}
						format={{
							display: ArticleDisplay.Standard,
							design: ArticleDesign.Analysis,
							theme: Pillar.News,
						}}
						size={size}
					/>
				</Section>
				<br />
			</div>
		))}
		<br />
		<Section fullWidth={true} showTopBorder={false} showSideBorders={false}>
			<CardHeadline
				headlineText="This is how an Sport Analysis card headline looks"
				format={{
					display: ArticleDisplay.Standard,
					design: ArticleDesign.Analysis,
					theme: Pillar.Sport,
				}}
			/>
		</Section>
		<br />
		<Section fullWidth={true} showTopBorder={false} showSideBorders={false}>
			<CardHeadline
				headlineText="This is how an Culture Analysis card headline looks"
				format={{
					display: ArticleDisplay.Standard,
					design: ArticleDesign.Analysis,
					theme: Pillar.Culture,
				}}
			/>
		</Section>
		<br />
		<Section fullWidth={true} showTopBorder={false} showSideBorders={false}>
			<CardHeadline
				headlineText="This is how an Opinion Analysis card headline looks"
				format={{
					display: ArticleDisplay.Standard,
					design: ArticleDesign.Analysis,
					theme: Pillar.Opinion,
				}}
			/>
		</Section>
		<br />
		<Section fullWidth={true} showTopBorder={false} showSideBorders={false}>
			<CardHeadline
				headlineText="This is how an Lifestyle Analysis card headline looks"
				format={{
					display: ArticleDisplay.Standard,
					design: ArticleDesign.Analysis,
					theme: Pillar.Lifestyle,
				}}
			/>
		</Section>
		<br />
		<Section
			fullWidth={true}
			showTopBorder={false}
			showSideBorders={false}
			backgroundColour={specialReport[300]}
		>
			<CardHeadline
				headlineText="This is how an Special Report Analysis card headline looks"
				format={{
					display: ArticleDisplay.Standard,
					design: ArticleDesign.Analysis,
					theme: ArticleSpecial.SpecialReport,
				}}
			/>
		</Section>
	</>
);
Analysis.storyName = 'Analysis';

export const Feature = () => (
	<Section fullWidth={true} showTopBorder={false} showSideBorders={false}>
		<CardHeadline
			headlineText="This is how a Feature card headline looks"
			format={{
				display: ArticleDisplay.Standard,
				design: ArticleDesign.Feature,
				theme: Pillar.News,
			}}
		/>
	</Section>
);
Feature.storyName = 'Feature';

export const Size = () => (
	<>
		{smallHeadlineSizes.map((size) => (
			<div key={size}>
				<Section
					fullWidth={true}
					showTopBorder={false}
					showSideBorders={false}
				>
					<CardHeadline
						headlineText={`This is how a ${size} card headline looks`}
						format={{
							display: ArticleDisplay.Standard,
							design: ArticleDesign.Standard,
							theme: Pillar.News,
						}}
						size={size}
					/>
				</Section>
				<br />
			</div>
		))}
	</>
);
Size.storyName = 'Size';

export const MobileSize = () => (
	<>
		{smallHeadlineSizes.map((size) => (
			<div key={size}>
				<Section
					fullWidth={true}
					showTopBorder={false}
					showSideBorders={false}
				>
					<CardHeadline
						headlineText={`This is how a mobile ${size} card headline looks`}
						format={{
							display: ArticleDisplay.Standard,
							design: ArticleDesign.Standard,
							theme: Pillar.News,
						}}
						size="medium"
						sizeOnMobile={size}
					/>
				</Section>
				<br />
			</div>
		))}
	</>
);
MobileSize.storyName = 'MobileSize';
MobileSize.story = {
	parameters: {
		chromatic: {
			viewports: [breakpoints.mobile],
		},
	},
};

export const liveStory = () => (
	<Section fullWidth={true} showTopBorder={false} showSideBorders={false}>
		<CardHeadline
			headlineText="This is how a card headline with a live kicker looks"
			format={{
				display: ArticleDisplay.Standard,
				design: ArticleDesign.Standard,
				theme: Pillar.News,
			}}
			kickerText="Live"
		/>
	</Section>
);
liveStory.storyName = 'With Live kicker';

export const noLineBreak = () => (
	<Section fullWidth={true} showTopBorder={false} showSideBorders={false}>
		<CardHeadline
			headlineText="This is how a card headline with no kicker linebreak looks"
			format={{
				display: ArticleDisplay.Standard,
				design: ArticleDesign.Standard,
				theme: Pillar.News,
			}}
			kickerText="Live"
			hideLineBreak={true}
		/>
	</Section>
);
noLineBreak.storyName = 'With Live kicker but no line break';

export const pulsingDot = () => (
	<Section fullWidth={true} showTopBorder={false} showSideBorders={false}>
		<CardHeadline
			headlineText="This is how a card headline with a pulsing dot looks"
			format={{
				display: ArticleDisplay.Standard,
				design: ArticleDesign.Standard,
				theme: Pillar.News,
			}}
			kickerText="Live"
			showPulsingDot={true}
		/>
	</Section>
);
pulsingDot.storyName = 'With pulsing dot';

export const cultureVariant = () => (
	<Section fullWidth={true} showTopBorder={false} showSideBorders={false}>
		<CardHeadline
			headlineText="This is how a Feature card headline with the culture pillar looks"
			format={{
				display: ArticleDisplay.Standard,
				design: ArticleDesign.Feature,
				theme: Pillar.Culture,
			}}
			kickerText="Art and stuff"
		/>
	</Section>
);
cultureVariant.storyName = 'With a culture kicker';

export const Opinion = () => (
	<Section fullWidth={true} showTopBorder={false} showSideBorders={false}>
		<CardHeadline
			headlineText="This is how small card headline for opinion articles look"
			format={{
				display: ArticleDisplay.Standard,
				design: ArticleDesign.Comment,
				theme: Pillar.Opinion,
			}}
			showQuotes={true}
			size="small"
		/>
	</Section>
);
Opinion.storyName = 'Opinion (Quotes)';

export const OpinionKicker = () => (
	<>
		{smallHeadlineSizes.map((size) => (
			<div key={size}>
				<Section
					fullWidth={true}
					showTopBorder={false}
					showSideBorders={false}
				>
					<CardHeadline
						headlineText={`This is how a ${size} opinion card headline with a kicker and quotes looks`}
						format={{
							display: ArticleDisplay.Standard,
							design: ArticleDesign.Standard,
							theme: Pillar.Opinion,
						}}
						showQuotes={true}
						kickerText="George Monbiot"
						size={size}
					/>
				</Section>
				<br />
			</div>
		))}
	</>
);
OpinionKicker.storyName = 'With an opinion kicker';

export const SpecialReport = () => (
	<Section
		fullWidth={true}
		showTopBorder={false}
		showSideBorders={false}
		backgroundColour="grey"
	>
		<CardHeadline
			headlineText="This is how a Special Report card headline with kicker and quotes looks"
			format={{
				display: ArticleDisplay.Standard,
				design: ArticleDesign.Standard,
				theme: ArticleSpecial.SpecialReport,
			}}
			showQuotes={true}
			kickerText="Special Report"
		/>
	</Section>
);
SpecialReport.storyName = 'With theme SpecialReport';

export const Busy = () => (
	<Section fullWidth={true} showTopBorder={false} showSideBorders={false}>
		<CardHeadline
			headlineText="I look life a buffoon. I feel incredible. And then I vomit"
			format={{
				display: ArticleDisplay.Standard,
				design: ArticleDesign.Feature,
				theme: Pillar.Lifestyle,
			}}
			showQuotes={true}
			kickerText="Aerial Yoga"
		/>
	</Section>
);
Busy.storyName = 'Lifestyle opinion';

export const Byline = () => (
	<>
		<Section fullWidth={true} showSideBorders={false}>
			<CardHeadline
				headlineText="I look life a buffoon. I feel incredible. And then I vomit"
				format={{
					display: ArticleDisplay.Standard,
					design: ArticleDesign.Feature,
					theme: ArticleSpecial.Labs,
				}}
				byline="Labs byline"
				showByline={true}
			/>
		</Section>
		<br />
		<Section fullWidth={true} showSideBorders={false}>
			<CardHeadline
				headlineText="I look life a buffoon. I feel incredible. And then I vomit"
				format={{
					display: ArticleDisplay.Standard,
					design: ArticleDesign.Feature,
					theme: Pillar.News,
				}}
				byline="News byline"
				showByline={true}
			/>
		</Section>
		<br />
		<Section fullWidth={true} showSideBorders={false}>
			<CardHeadline
				headlineText="I look life a buffoon. I feel incredible. And then I vomit"
				format={{
					display: ArticleDisplay.Standard,
					design: ArticleDesign.Feature,
					theme: Pillar.Sport,
				}}
				byline="Sport byline"
				showByline={true}
			/>
		</Section>
		<br />
		<Section fullWidth={true} showSideBorders={false}>
			<CardHeadline
				headlineText="I look life a buffoon. I feel incredible. And then I vomit"
				format={{
					display: ArticleDisplay.Standard,
					design: ArticleDesign.Feature,
					theme: Pillar.Culture,
				}}
				byline="Culture byline"
				showByline={true}
			/>
		</Section>
		<br />
		<Section fullWidth={true} showSideBorders={false}>
			<CardHeadline
				headlineText="I look life a buffoon. I feel incredible. And then I vomit"
				format={{
					display: ArticleDisplay.Standard,
					design: ArticleDesign.Feature,
					theme: Pillar.Lifestyle,
				}}
				byline="Lifestyle byline"
				showByline={true}
			/>
		</Section>
		<br />
		<Section fullWidth={true} showSideBorders={false}>
			<CardHeadline
				headlineText="I look life a buffoon. I feel incredible. And then I vomit"
				format={{
					display: ArticleDisplay.Standard,
					design: ArticleDesign.Feature,
					theme: Pillar.Opinion,
				}}
				byline="Opinion byline"
				showByline={true}
			/>
		</Section>
		<br />
		<Section
			fullWidth={true}
			showSideBorders={false}
			backgroundColour={specialReport[300]}
		>
			<CardHeadline
				headlineText="I look life a buffoon. I feel incredible. And then I vomit"
				format={{
					display: ArticleDisplay.Standard,
					design: ArticleDesign.Feature,
					theme: ArticleSpecial.SpecialReport,
				}}
				byline="SpecialReport byline"
				showByline={true}
			/>
		</Section>
	</>
);
Byline.storyName = 'With byline';

const containerPalettes = [
	'EventPalette',
	'SombreAltPalette',
	'EventAltPalette',
	'InvestigationPalette',
	'LongRunningAltPalette',
	'LongRunningPalette',
	'SombrePalette',
	'BreakingPalette',
	'SpecialReportAltPalette',
	'Branded',
	'MediaPalette',
	'PodcastPalette',
] as const satisfies readonly DCRContainerPalette[];
export const WithContainerOverrides: StoryObj = ({
	format,
}: {
	format: ArticleFormat;
}) => (
	<>
		{containerPalettes.map((containerPalette) => (
			<Section
				key={containerPalette}
				fullWidth={true}
				showSideBorders={false}
				containerPalette={containerPalette}
			>
				<CardHeadline
					headlineText={`This is a ${
						Pillar[format.theme] ??
						ArticleSpecial[format.theme] ??
						'Unknown'
					} headline`}
					containerPalette={containerPalette}
					format={format}
					byline={`inside a ${containerPalette} container`}
					showByline={true}
				/>
			</Section>
		))}
	</>
);
WithContainerOverrides.decorators = [splitTheme()];
