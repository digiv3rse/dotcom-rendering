import { css } from '@emotion/react';
import {
	brand,
	brandAlt,
	breakpoints,
	neutral,
} from '@guardian/source-foundations';
import { LI } from './Card/components/LI';
import { FrontSection } from './FrontSection';

export default {
	component: FrontSection,
	title: 'Components/FrontSection',
	parameters: {
		viewport: {
			// This has the effect of turning off the viewports addon by default
			defaultViewport: 'doesNotExist',
		},
		chromatic: {
			viewports: [
				breakpoints.mobile,
				breakpoints.tablet,
				breakpoints.desktop,
				breakpoints.leftCol,
				breakpoints.wide,
			],
		},
	},
};

const Placeholder = ({
	heightInPixels = 400,
	text = 'Placeholder Content',
}: {
	heightInPixels?: number;
	text?: string;
}) => (
	<LI padSides={true}>
		<div
			css={css`
				background-color: lightgrey;
				width: 100%;
				height: ${heightInPixels}px;
				display: flex;
				align-items: center;
				justify-content: center;
				font-size: 2em;
				font-weight: 200;
			`}
		>
			{text}
		</div>
	</LI>
);

const LeftColPlaceholder = ({
	heightInPixels = 400,
	text = 'Placeholder Content',
}: {
	heightInPixels?: number;
	text?: string;
}) => (
	<div
		css={css`
			background-color: lightgrey;
			width: 100%;
			height: ${heightInPixels}px;
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 2em;
			font-weight: 200;
		`}
	>
		{text}
	</div>
);

export const ContainerStory = () => {
	return (
		<FrontSection
			title="Default Container"
			showTopBorder={false}
			showSideBorders={false}
		>
			<Placeholder />
		</FrontSection>
	);
};
ContainerStory.storyName = 'default container';

export const NoTitleStory = () => {
	return (
		<FrontSection showTopBorder={false} showSideBorders={false}>
			<Placeholder />
		</FrontSection>
	);
};
NoTitleStory.storyName = 'with no title';

export const BordersStory = () => {
	return (
		<FrontSection title="Borders" centralBorder="full">
			<Placeholder />
		</FrontSection>
	);
};
BordersStory.storyName = 'with all borders';

export const LeftContentStory = () => {
	return (
		<FrontSection
			title="Borders"
			centralBorder="full"
			leftContent={
				<LeftColPlaceholder text="LeftCol" heightInPixels={200} />
			}
		>
			<Placeholder />
		</FrontSection>
	);
};
LeftContentStory.storyName =
	'with an element passed into the left column';

export const BackgroundStory = () => {
	return (
		<FrontSection
			title="Background Colour"
			description="About this content"
			fontColour={neutral[100]}
			centralBorder="full"
			backgroundColour={brand[400]}
			borderColour={brand[600]}
		>
			<Placeholder />
		</FrontSection>
	);
};
BackgroundStory.storyName = 'with a blue background';

export const InnerBackgroundStory = () => {
	return (
		<FrontSection
			title="Inner Background"
			description="About this content"
			fontColour={neutral[100]}
			centralBorder="full"
			innerBackgroundColour={brand[400]}
			borderColour={brand[300]}
		>
			<Placeholder />
		</FrontSection>
	);
};
InnerBackgroundStory.storyName =
	'with a blue inner background';

export const DifferentBackgrounds = () => {
	return (
		<FrontSection
			title="Tip us off"
			centralBorder="full"
			backgroundColour="#FFF280"
			borderColour={brand[300]}
			innerBackgroundColour="#FFE501"
		>
			<h1>
				👀 Share stories with the Guardian securely and confidentially
			</h1>
		</FrontSection>
	);
};
DifferentBackgrounds.storyName =
	'with inner background different to main background';

export const StretchRightStory = () => {
	return (
		<FrontSection
			title="Stretched Right"
			description="About this content"
			centralBorder="full"
			stretchRight={true}
		>
			<Placeholder />
		</FrontSection>
	);
};
StretchRightStory.storyName =
	'with content stretched to the right (no margin)';

export const PartialStory = () => {
	return (
		<FrontSection
			title="Borders"
			showTopBorder={false}
			centralBorder="partial"
		>
			<Placeholder />
		</FrontSection>
	);
};
PartialStory.storyName = 'with a partial border divider';

export const SidesStory = () => {
	return (
		<FrontSection
			title="NoSides"
			showTopBorder={false}
			centralBorder="full"
		>
			<Placeholder />
		</FrontSection>
	);
};
SidesStory.storyName = 'with a full border divider';

export const ToggleableStory = () => {
	return (
		<FrontSection
			title="Toggleable Container"
			toggleable={true}
			sectionId="section-id"
			showTopBorder={false}
			showSideBorders={false}
		>
			<Placeholder />
		</FrontSection>
	);
};
ToggleableStory.storyName = 'toggleable container';

export const MarginsStory = () => {
	return (
		<>
			<FrontSection
				title="No Vertical Margins"
				centralBorder="full"
				verticalMargins={false}
			>
				<Placeholder />
			</FrontSection>
			<FrontSection
				title="No Vertical Margins"
				centralBorder="full"
				verticalMargins={false}
			>
				<Placeholder />
			</FrontSection>
			<FrontSection
				title="No Vertical Margins"
				centralBorder="full"
				verticalMargins={false}
			>
				<Placeholder />
			</FrontSection>
		</>
	);
};
MarginsStory.storyName = 'with no vertical margins';

export const MultipleStory = () => {
	return (
		<>
			<FrontSection title="Page Title" showTopBorder={false} />
			<FrontSection title="Headlines" centralBorder="partial">
				<Placeholder />
			</FrontSection>
			<FrontSection title="Useful links" centralBorder="partial" />
			<FrontSection
				title="Around the World - I'm a link"
				url="https://www.theguardian.com/world"
				centralBorder="partial"
			>
				<Placeholder />
			</FrontSection>
			<FrontSection
				showTopBorder={false}
				showSideBorders={false}
				backgroundColour={brandAlt[400]}
			>
				<h2>Insert call to action here</h2>
			</FrontSection>
			<FrontSection
				title="Videos"
				fontColour="white"
				showTopBorder={false}
				backgroundColour="black"
				showSideBorders={false}
			>
				<Placeholder />
			</FrontSection>
			<FrontSection
				title="Coronavirus"
				description="A collection of stories about Coronavirus"
				centralBorder="partial"
			>
				<Placeholder />
			</FrontSection>
		</>
	);
};
MultipleStory.story = {
	name: 'with multiple FrontGrids',
	parameters: {
		chromatic: {
			viewports: [
				breakpoints.mobile,
				breakpoints.leftCol,
				breakpoints.wide,
			],
		},
	},
};

export const TreatsStory = () => {
	return (
		<FrontSection
			title="Treats and Date Header"
			treats={[
				{
					links: [
						{
							text: 'The treat text',
							linkTo: '',
						},
					],
					editionId: 'UK',
				},
				{
					links: [
						{
							text: 'Another piece of text',
							linkTo: '',
						},
					],
					editionId: 'UK',
				},
			]}
			showTopBorder={false}
			showSideBorders={false}
			showDateHeader={true}
			editionId="UK"
		>
			<Placeholder />
		</FrontSection>
	);
};
TreatsStory.storyName =
	'with treats and date header';
