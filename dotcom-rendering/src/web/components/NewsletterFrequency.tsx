import { css } from '@emotion/react';
import {
	brandAltBackground,
	space,
	textSans,
} from '@guardian/source-foundations';
import { SvgNewsletter } from './SvgNewsletter';
// TO DO replace SvgNewsletter import when this project is updated to use @guardian/eslint-plugin-source-react-components 6.0.0

export const NewsletterFrequency = ({ frequency }: { frequency: string }) => {
	return (
		<div
			css={css`
				display: flex;
				align-items: center;
			`}
		>
			<div
				css={css`
					height: 28px;
					svg {
						background: ${brandAltBackground.primary};
						border-radius: 50%;
						height: 100%;
						padding: 2px;
						margin-right: ${space[1]}px;
					}
				`}
			>
				<SvgNewsletter />
			</div>
			<div
				css={css`
					${textSans.xsmall({
						fontWeight: 'bold',
						lineHeight: 'tight',
					})}
				`}
			>
				{frequency}
			</div>
		</div>
	);
};
