import { css, jsx } from '@emotion/react';
import { from, palette, space } from '@guardian/source-foundations';
import { pageSkinContainer } from '../layouts/lib/pageSkin.ts';
import { center } from '../lib/center.ts';

const sidePadding = css`
	padding-left: 10px;
	padding-right: 10px;

	${from.mobileLandscape} {
		padding-left: 20px;
		padding-right: 20px;
	}
`;

const bottomPadding = css`
	padding-bottom: ${space[9]}px;
`;

const sideBorderStyles = (colour: string) => css`
	${from.tablet} {
		border-left: 1px solid ${colour};
		border-right: 1px solid ${colour};
	}
`;

const topBorderStyles = (colour: string) => css`
	border-top: 1px solid ${colour};
`;

const setBackgroundColour = (colour: string) => css`
	background-color: ${colour};
`;

type Props = {
	sectionId?: string;
	showSideBorders?: boolean;
	showTopBorder?: boolean;
	padSides?: boolean;
	padBottom?: boolean;
	backgroundColour?: string;
	innerBackgroundColour?: string;
	borderColour?: string;
	children?: React.ReactNode;
	shouldCenter?: boolean;
	element?:
		| 'div'
		| 'article'
		| 'aside'
		| 'nav'
		| 'main'
		| 'header'
		| 'section'
		| 'footer'; // ElementContainer is generally a top-level wrapper
	className?: string;
	ophanComponentName?: string;
	ophanComponentLink?: string;
	containerName?: string;
	hasPageSkin?: boolean;
	hasPageSkinContentSelfConstrain?: boolean;
};

/**
 * Create a react element from the tagName passed in OR
 * default to <div>
 *
 * @deprecated please use Section fullWidth={true}  instead
 */
export const ElementContainer = ({
	sectionId,
	showSideBorders = true,
	showTopBorder = true,
	padSides = true,
	padBottom = false,
	borderColour = palette.neutral[86],
	backgroundColour,
	innerBackgroundColour,
	shouldCenter = true,
	children,
	element = 'div',
	className,
	ophanComponentName,
	ophanComponentLink,
	containerName,
	hasPageSkin = false,
	hasPageSkinContentSelfConstrain = false,
}: Props) =>
	jsx(element, {
		id: ophanComponentName,
		'data-link-name': ophanComponentLink,
		'data-component': ophanComponentName,
		'data-container-name': containerName,
		css: [
			backgroundColour && setBackgroundColour(backgroundColour),
			hasPageSkin &&
				!hasPageSkinContentSelfConstrain &&
				pageSkinContainer,
		],
		className,
		children: (
			<div
				/**
				 * id is being used to set the containerId in @see {ShowMore.importable.tsx}
				 * this id pre-existed showMore so is probably also being used for something else.
				 */
				id={sectionId}
				css={[
					shouldCenter && center,
					showSideBorders && sideBorderStyles(borderColour),
					showTopBorder && topBorderStyles(borderColour),
					innerBackgroundColour &&
						setBackgroundColour(innerBackgroundColour),
					padSides && sidePadding,
					padBottom && bottomPadding,
					hasPageSkin && pageSkinContainer,
				]}
			>
				{children}
			</div>
		),
	});
