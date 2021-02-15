/* eslint-disable react/jsx-props-no-spreading */

import { css } from '@emotion/react';
import { Caption } from '@root/src/amp/components/Caption';

const noCaptionStyle = css`
	margin-bottom: 8px;
`;

export const MapBlockComponent: React.SFC<{
	element: MapBlockElement;
	pillar: Theme;
}> = ({ element, pillar }) => {
	const attributes = {
		src: `${element.embedUrl}`,
		title: `${element.source}: ${element.title}`,
		layout: 'responsive',
		sandbox: 'allow-scripts allow-same-origin',
		height: '1',
		width: '1',
		frameborder: '0',
		'data-canonical-url': `${element.originalUrl}`,
	};

	return element.caption ? (
		<Caption
			captionText={element.caption}
			pillar={pillar}
			padCaption={true}
		>
			<amp-iframe {...attributes} />
		</Caption>
	) : (
		<figure css={noCaptionStyle}>
			<amp-iframe {...attributes} />
		</figure>
	);
};
