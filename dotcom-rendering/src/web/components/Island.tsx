/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { Placeholder } from './Placeholder';

type When = 'idle' | 'visible';

interface HydrateProps {
	deferUntil?: When;
	clientOnly?: false;
	placeholderHeight?: never;
	children: JSX.Element;
}

interface ClientOnlyProps {
	deferUntil?: When;
	clientOnly: true;
	placeholderHeight?: number;
	children: JSX.Element;
}

/**
 * Props
 *
 * We use a union type here to support conditional typing. This means you
 * can only supply placeholderHeight if clientOnly is true.
 */
type Props = HydrateProps | ClientOnlyProps;

const decideChildren = (
	children: JSX.Element,
	clientOnly?: boolean,
	placeholderHeight?: number,
) => {
	if (!clientOnly) return children; // Server side rendering
	if (placeholderHeight)
		return (
			<Placeholder
				height={placeholderHeight}
				shouldShimmer={false}
				backgroundColor="transparent"
			/>
		); // Portal using placeholder
	return null; // Portal not using placeholder (this also includes placeholderHeight === 0 - this is intentional)
};

/**
 * Adds interactivity to the client by either hydrating or inserting content
 *
 * Note. The component passed as children must follow the [MyComponent].importable.tsx
 * namimg convention
 *
 * @param {HydrateProps | ClientOnlyProps} props - JSX Props
 * @param {When} props.deferUntil - Delay when client code should execute
 * 		- idle - Execute when browser idle
 * 		- visible - Execute when component appears in viewport
 * @param {boolean} props.clientOnly - Should the component be server side rendered
 * @param {number} props.placeholderHeight - The height for the placeholder element
 * @param {JSX.Element} props.children - The component being inserted. Must be a single JSX Element
 */
export const Island = ({
	deferUntil,
	clientOnly,
	placeholderHeight,
	children,
}: Props) => (
	<gu-island
		name={children.type.name}
		deferUntil={deferUntil}
		props={JSON.stringify(children.props)}
		clientOnly={clientOnly}
	>
		{decideChildren(children, clientOnly, placeholderHeight)}
	</gu-island>
);
