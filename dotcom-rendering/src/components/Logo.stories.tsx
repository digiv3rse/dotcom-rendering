import { css } from '@emotion/react';
import { brand, neutral, space, textSans } from '@guardian/source-foundations';
import { editionList } from '../lib/edition.ts';
import { Logo } from './Logo.tsx';

export const Logos = () => (
	<ul
		css={css`
			display: flex;
			flex-direction: column;
			list-style-type: none;
		`}
	>
		{editionList.map(({ editionId }) => (
			<li
				key={editionId}
				css={css`
					position: relative;
					margin: ${space[3]}px 0;
					background-color: ${brand[400]};
				`}
			>
				<h1
					css={css`
						position: absolute;
						top: 20px;
						left: 20px;
						color: ${neutral[100]};
						${textSans.xxxlarge()};
					`}
				>
					{editionId}
				</h1>

				<Logo editionId={editionId} />
			</li>
		))}
	</ul>
);
Logos.storyName = 'Logos for all editions';

export default {
	component: Logos,
	title: 'Components/Logos',
};
