import { css } from '@emotion/react';
import { PulsingDot } from './PulsingDot.importable';

// Defines a prefix to be used with a headline (e.g. 'Live /')
type Props = {
	text: string;
	color: string;
	showPulsingDot?: boolean;
	hideLineBreak?: boolean;
};

const kickerStyles = (colour: string) => css`
	color: ${colour};
	font-weight: 700;
	margin-right: 4px;
	display: inline-block;
`;

export const Kicker = ({
	text,
	color,
	showPulsingDot,
	hideLineBreak,
}: Props) => {
	return (
		<>
			<span css={kickerStyles(color)}>
				{showPulsingDot && <PulsingDot colour={color} />}
				{text}
			</span>
			{!hideLineBreak && <br />}
		</>
	);
};
