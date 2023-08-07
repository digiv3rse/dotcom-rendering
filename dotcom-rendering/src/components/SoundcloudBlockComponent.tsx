import { css } from '@emotion/react';
import { unescapeData } from '../lib/escapeData.tsx';
import type { SoundcloudBlockElement } from '../types/content.ts';

const widthOverride = css`
	iframe {
		/* The  embed js hijacks the iframe and calculated an incorrect width, which pushed the body out */
		width: 100%;
	}
`;

type Props = {
	element: SoundcloudBlockElement;
};

export const SoundcloudBlockComponent = ({ element }: Props) => {
	return (
		<div css={widthOverride}>
			<div
				data-cy="soundcloud-embed"
				dangerouslySetInnerHTML={{ __html: unescapeData(element.html) }}
			/>
		</div>
	);
};
