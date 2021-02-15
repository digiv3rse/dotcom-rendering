import React from 'react';
import { css } from '@emotion/react';
import Quote from '@frontend/static/icons/quote.svg';
import { pillarPalette } from '@root/src/lib/pillars';
import { palette } from '@guardian/src-foundations';
import { body } from '@guardian/src-foundations/typography';

const styles = (pillar: Theme) => css`
	background-color: ${palette.neutral[97]};
	padding: 0.375rem 0.625rem 0.75rem;
	margin-bottom: 0.75rem;
	display: block;
	color: ${pillarPalette[pillar].dark};
	${body.medium()};

	svg {
		fill: ${pillarPalette[pillar].dark};
	}
`;

export const PullquoteBlockComponent: React.FC<{
	html?: string;
	pillar: Theme;
}> = ({ html, pillar }) => {
	if (!html) return <></>;
	return (
		<aside css={styles(pillar)}>
			<Quote />{' '}
			<span
				dangerouslySetInnerHTML={{
					__html: html,
				}}
			/>
		</aside>
	);
};
