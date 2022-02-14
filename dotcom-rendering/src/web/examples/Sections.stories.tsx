/* eslint-disable react/jsx-props-no-spreading */

import { css } from '@emotion/react';

import { Lines } from '@guardian/source-react-components-development-kitchen';
import { ArticleDisplay, ArticlePillar, ArticleDesign } from '@guardian/libs';
import {
	brandBorder,
	brandBackground,
	brandLine,
	background,
	brandAltBackground,
	neutral,
} from '@guardian/source-foundations';
import { ContainerLayout } from '../components/ContainerLayout';
import { ElementContainer } from '../components/ElementContainer';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Nav } from '../components/Nav/Nav';

import { NAV, pageFooter } from './Example.mocks';

const Grey = ({
	heightInPixels = 400,
	padded = true,
}: {
	heightInPixels?: number;
	padded?: boolean;
}) => (
	<div
		css={css`
			background-color: ${neutral[93]};
			width: 100%;
			height: ${heightInPixels}px;
			margin: ${padded && '10px'};
		`}
	/>
);

export default {
	title: 'Examples/Sections',
	parameters: {
		viewport: {
			// This has the effect of turning off the viewports addon by default
			defaultViewport: 'doesNotExist',
		},
	},
};

export const Sections = (): React.ReactNode => (
	<>
		<ElementContainer
			showTopBorder={false}
			showSideBorders={true}
			borderColour={brandLine.primary}
			padded={false}
			backgroundColour={brandBackground.primary}
		>
			<Header edition="UK" supporterCTA="" discussionApiUrl="" />
		</ElementContainer>
		<ElementContainer
			showSideBorders={true}
			borderColour={brandLine.primary}
			showTopBorder={false}
			padded={false}
			backgroundColour={brandBackground.primary}
		>
			<Nav
				format={{
					theme: ArticlePillar.News,
					display: ArticleDisplay.Standard,
					design: ArticleDesign.Standard,
				}}
				nav={NAV}
				subscribeUrl=""
				edition="UK"
			/>
		</ElementContainer>
		<ElementContainer
			backgroundColour={background.primary}
			padded={false}
			showTopBorder={false}
			showSideBorders={true}
		>
			<Lines count={4} effect="straight" />
		</ElementContainer>
		<ContainerLayout
			showTopBorder={false}
			title="Page Title"
			sideBorders={true}
		/>
		<ContainerLayout
			title="Section Title"
			description="Description"
			centralBorder="full"
			sideBorders={true}
			showTopBorder={true}
		>
			<Grey />
		</ContainerLayout>
		<ContainerLayout
			title="World"
			description="Decription"
			centralBorder="full"
			sideBorders={true}
			showTopBorder={true}
		>
			<Grey />
		</ContainerLayout>
		<ContainerLayout
			title="Video"
			fontColour="white"
			backgroundColour={brandAltBackground.ctaPrimary}
			sideBorders={false}
			showTopBorder={false}
		>
			<Grey />
		</ContainerLayout>
		<ContainerLayout
			centralBorder="full"
			title="Title"
			description="Decription"
			sideBorders={true}
		>
			<Grey />
		</ContainerLayout>
		<ElementContainer
			backgroundColour={background.primary}
			padded={false}
			showTopBorder={false}
		>
			<Lines count={4} effect="straight" />
		</ElementContainer>
		<ElementContainer
			padded={false}
			backgroundColour={brandBackground.primary}
			borderColour={brandBorder.primary}
			showSideBorders={false}
		>
			<Footer
				pageFooter={pageFooter}
				pillar={ArticlePillar.News}
				pillars={NAV.pillars}
			/>
		</ElementContainer>
	</>
);
Sections.story = { name: 'Example using different sections' };
