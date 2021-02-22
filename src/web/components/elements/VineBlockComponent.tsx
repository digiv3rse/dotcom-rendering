import React from 'react';
import { MaintainAspectRatio } from '@frontend/web/components/MaintainAspectRatio';
import { css } from 'emotion';
import { textSans } from '@guardian/src-foundations/typography';

const titleStyle = css`
	p {
		${textSans.large()};
		font-weight: bold;
	}
`;

export const VineBlockComponent: React.FC<{
	element: VineBlockElement;
}> = ({ element }) => {
	console.log(element);
	return (
		<>
			{element.url && element.width && element.height && (
				<div>
					<div css={titleStyle}>
						<p>{element.title}</p>
					</div>

					<MaintainAspectRatio
						height={element.height}
						width={element.width}
					>
						<div className="element-vine">
							<iframe
								title="vine-embed"
								src={element.url}
								height={element.height}
								width={element.width}
							/>
							<script
								async={true}
								src="https://platform.vine.co/static/scripts/embed.js"
							/>
						</div>
					</MaintainAspectRatio>
				</div>
			)}
		</>
	);
};
