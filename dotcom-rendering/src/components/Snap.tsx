import { css } from '@emotion/react';
import type { DCRSnapType } from '../types/front.ts';

// Some thrashers don't have "width: 100%" applied to their first element which causes them to not correctly take up their space
const snapStyles = css`
	overflow: hidden;
	position: relative;
	display: flex;

	> * {
		width: 100%;
	}
`;

type Props = {
	snapData?: DCRSnapType;
	dataLinkName?: string;
};

export const Snap = ({ snapData, dataLinkName }: Props) => {
	if (snapData?.embedHtml === undefined) {
		return <></>;
	}

	return (
		<>
			<div
				css={[snapStyles]}
				dangerouslySetInnerHTML={{ __html: snapData.embedHtml }}
				data-link-name={dataLinkName}
			/>
			{snapData.embedJs ? (
				<div>
					<script
						dangerouslySetInnerHTML={{ __html: snapData.embedJs }}
					/>
				</div>
			) : undefined}
		</>
	);
};
