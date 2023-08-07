import { css } from '@emotion/react';
import { border, neutral, text, textSans } from '@guardian/source-foundations';
import { unescapeData } from '../lib/escapeData.tsx';
import type { TableBlockElement } from '../types/content.ts';

const tableEmbed = css`
	.table--football {
		width: 100%;
		background: ${neutral[97]};
		border-top: 0.0625rem solid ${border.focusHalo};
		border-collapse: inherit;
		tr:nth-child(odd) > td {
			background-color: ${neutral[93]};
		}
		th {
			padding: 0.5rem;
		}
		td {
			padding: 0.5rem;
		}
		tr {
			${textSans.xxsmall()};
		}
		thead {
			tr {
				font-weight: 800;
				text-align: left;
			}
		}
		tr > th:first-child,
		td:first-child {
			color: ${text.supporting};
		}
		.table-column--main {
			width: 100%;
		}
	}
	margin-bottom: 16px;
`;

type Props = {
	element: TableBlockElement;
};

export const TableBlockComponent = ({ element }: Props) => {
	return (
		<div
			css={tableEmbed}
			data-cy="football-table-embed"
			dangerouslySetInnerHTML={{ __html: unescapeData(element.html) }}
		/>
	);
};
