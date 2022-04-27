import { css } from '@emotion/react';

import { space, from } from '@guardian/source-foundations';
import { ArticleFormat, ArticleDesign } from '@guardian/libs';
import { ElementContainer } from './ElementContainer';
import { LeftColumn } from './LeftColumn';
import { ContainerTitle } from './ContainerTitle';
import { Hide } from './Hide';
import { Flex } from './Flex';

type Props = {
	title?: string;
	fontColour?: string;
	description?: string;
	url?: string;
	sectionId?: string;
	sideBorders?: boolean;
	centralBorder?: 'partial' | 'full';
	showTopBorder?: boolean;
	padSides?: boolean;
	padContent?: boolean;
	verticalMargins?: boolean;
	backgroundColour?: string;
	borderColour?: string;
	leftContent?: React.ReactNode;
	children?: React.ReactNode;
	stretchRight?: boolean;
	leftColSize?: LeftColSize;
	format?: ArticleFormat;
	ophanComponentName?: string;
	ophanComponentLink?: string;
};

const containerStyles = css`
	display: flex;
	flex-grow: 1;
	flex-direction: column;
	width: 100%;
`;

const margins = css`
	margin-top: ${space[2]}px;
	/*
   Keep spacing at the bottom of the container consistent at 36px, regardless of
   breakpoint, based on chat with Harry Fisher
*/
	margin-bottom: ${space[9]}px;
`;

const rightMargin = css`
	${from.wide} {
		margin-right: 68px;
	}
`;

const padding = (format?: ArticleFormat) => {
	switch (format?.design) {
		case ArticleDesign.LiveBlog:
		case ArticleDesign.DeadBlog:
			return css`
				padding: 0;

				${from.desktop} {
					padding: 0 10px;
				}
			`;
		default:
			return css`
				padding: 0 10px;
			`;
	}
};

const Container = ({
	children,
	padded,
	verticalMargins,
	stretchRight,
	format,
}: {
	children: React.ReactNode;
	padded: boolean;
	verticalMargins: boolean;
	stretchRight: boolean;
	format?: ArticleFormat;
}) => (
	<div
		css={[
			containerStyles,
			padded && padding(format),
			verticalMargins && margins,
			!stretchRight && rightMargin,
		]}
	>
		{children}
	</div>
);

export const ContainerLayout = ({
	title,
	fontColour,
	description,
	url,
	sectionId,
	sideBorders = false,
	centralBorder,
	showTopBorder = false,
	padSides = true,
	padContent = true,
	verticalMargins = true,
	borderColour,
	backgroundColour,
	children,
	leftContent,
	stretchRight = false,
	leftColSize,
	format,
	ophanComponentLink,
	ophanComponentName,
}: Props) => (
	<ElementContainer
		sectionId={sectionId}
		showSideBorders={sideBorders}
		showTopBorder={showTopBorder}
		padded={padSides}
		borderColour={borderColour}
		backgroundColour={backgroundColour}
		element="section"
		ophanComponentLink={ophanComponentLink}
		ophanComponentName={ophanComponentName}
	>
		<Flex>
			<LeftColumn
				borderType={centralBorder}
				borderColour={borderColour}
				size={leftColSize}
			>
				<>
					<ContainerTitle
						title={title}
						fontColour={fontColour}
						description={description}
						url={url}
					/>
					{leftContent}
				</>
			</LeftColumn>
			<Container
				padded={padContent}
				verticalMargins={verticalMargins}
				stretchRight={stretchRight}
				format={format}
			>
				<Hide when="above" breakpoint="leftCol">
					<ContainerTitle
						title={title}
						fontColour={fontColour}
						description={description}
						url={url}
					/>
				</Hide>
				{children}
			</Container>
		</Flex>
	</ElementContainer>
);
