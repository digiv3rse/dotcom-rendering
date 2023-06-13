import { css } from '@emotion/react';
import type { DCRSnapType } from '../types/front';

const snapStyles = css`
	overflow: hidden;
	position: relative;
	display: flex;
`;

type Props = {
	snapData?: DCRSnapType;
};

export const Snap = ({ snapData }: Props) => {
	if (snapData?.embedHtml === undefined) {
		return <></>;
	}

	return (
		<>
			<div
				css={[snapStyles]}
				dangerouslySetInnerHTML={{ __html: snapData.embedHtml }}
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
