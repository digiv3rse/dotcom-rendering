import { css } from '@emotion/react';
import { ArticleDesign, ArticleDisplay, Pillar } from '@guardian/libs';
import { headline } from '@guardian/source-foundations';
import type { Decorator, StoryObj } from '@storybook/react';
import { splitTheme } from '../../.storybook/decorators/splitThemeDecorator';
import { SubheadingBlockComponent } from './SubheadingBlockComponent';

const standardFormat = {
	design: ArticleDesign.Standard,
	display: ArticleDisplay.Standard,
	theme: Pillar.News,
};

const immersiveFormat = {
	...standardFormat,
	display: ArticleDisplay.Immersive,
};

/** Mocking the styles normally inherited via ArticleBody component */
const GlobalStylesDecorator =
	(format: ArticleFormat): Decorator =>
	(Story) => (
		<div
			css={css`
				h2:not([data-ignore='global-h2-styling']) {
					${format.display === ArticleDisplay.Immersive
						? headline.medium({ fontWeight: 'light' })
						: headline.xxsmall({ fontWeight: 'bold' })};
				}
			`}
		>
			{Story()}
		</div>
	);

const StoryWrapper = ({ children }: { children: React.ReactNode }) => (
	<div
		css={css`
			hr {
				border: 0.5px dashed;
			}

			margin: 10px;

			* {
				margin-bottom: 10px;
			}
		`}
	>
		{children}
	</div>
);

const meta = {
	component: SubheadingBlockComponent,
	title: 'Components/SubheadingBlockComponent',
	render: (args: React.ComponentProps<typeof SubheadingBlockComponent>) => {
		return (
			<StoryWrapper>
				<SubheadingBlockComponent
					format={args.format}
					html="<h2>Basic subheading</h2>"
				/>
				<SubheadingBlockComponent
					format={args.format}
					html="<h2>Subheading <a href='/'>with anchor</a></h2>"
				/>
				<SubheadingBlockComponent
					format={args.format}
					html="<h2>Subheading with HTML comment<!-- HTML comment--></h2>"
				/>
				<SubheadingBlockComponent
					format={args.format}
					html="Subheading text only (no HTML)"
				/>

				<hr />
			</StoryWrapper>
		);
	},
	args: {
		html: '<h2>Subheading</h2>',
		format: standardFormat,
	},
};

type Story = StoryObj<typeof meta>;
export default meta;

export const StandardDisplay = {
	decorators: [
		GlobalStylesDecorator(standardFormat),

		splitTheme([
			standardFormat,
			// "Authoritative clear" styles
			{
				design: ArticleDesign.Obituary,
				display: ArticleDisplay.Standard,
				theme: Pillar.News,
			},
			// "Authoritative stand-out" styles
			{
				design: ArticleDesign.Comment,
				display: ArticleDisplay.Standard,
				theme: Pillar.Opinion,
			},
		]),
	],
} satisfies Story;

export const ImmersiveDisplay = {
	decorators: [
		GlobalStylesDecorator(immersiveFormat),
		splitTheme([
			immersiveFormat,
			// "Authoritative clear" styles
			{
				design: ArticleDesign.Obituary,
				display: ArticleDisplay.Immersive,
				theme: Pillar.News,
			},
			// "Authoritative stand-out" styles
			{
				design: ArticleDesign.Comment,
				display: ArticleDisplay.Immersive,
				theme: Pillar.Opinion,
			},
		]),
	],
} satisfies Story;
