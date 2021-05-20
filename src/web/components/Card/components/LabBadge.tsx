import React from 'react';
import { css } from 'emotion';
import { space } from '@guardian/src-foundations';
import { textSans } from '@guardian/src-foundations/typography';
import { visuallyHidden } from '@guardian/src-foundations/accessibility';

type Props = {
	badgeForLab: string;
	brandName?: string;
	palette: Palette;
};

const badgeImageStyle = css`
	max-height: 60px;
	margin-left: ${space[3]}px;
	vertical-align: middle;
`;

const badgeWrapperStyle = css`
	padding-right: ${space[3]}px;
	padding-bottom: ${space[3]}px;
	text-align: right;
	flex: auto;
`;

const paidForStyle = (palette: Palette) => {
	return css`
		${textSans.xsmall({ fontWeight: 'bold' })}
		color: ${palette.text.cardFooter};
	`;
};

export const LabBadge = ({ badgeForLab, brandName, palette }: Props) => (
	<div className={badgeWrapperStyle}>
		<div className={paidForStyle(palette)}>Paid for by</div>
		<span
			className={css`
				${visuallyHidden};
			`}
		>
			{brandName
				? `This content was paid for by ${brandName} as part of Guardian labs`
				: 'This content has been paid for by a sponsor as part of Guardian Labs.'}
		</span>
		{/* eslint-disable-next-line jsx-a11y/alt-text */}
		<img className={badgeImageStyle} alt="" src={badgeForLab} />
	</div>
);
