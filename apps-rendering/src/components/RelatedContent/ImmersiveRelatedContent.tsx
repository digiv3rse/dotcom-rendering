// ----- Imports ----- //

import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import { background } from '@guardian/common-rendering/src/editorialPalette';
import type { ArticleFormat } from '@guardian/libs';
import { from, neutral, until } from '@guardian/source-foundations';
import { grid } from 'grid/grid';
import LeftCentreBorder from 'grid/LeftCentreBorder';
import { Optional } from 'optional';
import type { FC } from 'react';
import type { OnwardsContent } from 'onwardsContent';
import { darkModeCss } from 'styles';
import DefaultRelatedContent, {
	defaultStyles,
} from './RelatedContent.defaults';

// ----- Component ----- //

const styles = (format: ArticleFormat): SerializedStyles => css`
	${grid.container}
	background-color: ${background.onwardContent(format)};

	${darkModeCss`
		background-color: ${background.onwardContentDark(format)};
	`}
`;

const hrStyles = css`
	${grid.column.all}
	grid-row: 1;
	width: 100%;
	border: 0;
	border-top: 1px solid ${neutral[46]};
	margin: 0;
`;

const relatedContentStyles = css`
	${grid.column.centre}
	grid-row: 2;
	border: 0;

	${until.wide} {
		padding-left: 0;
		padding-right: 0;
	}

	${from.desktop} {
		${grid.between('centre-column-start', 'right-column-end')}
	}
`;

type Props = {
	content: Optional<OnwardsContent>;
	format: ArticleFormat;
};

const ImmersiveRelatedContent: FC<Props> = ({ content, format }) => (
	<aside css={styles(format)}>
		<hr css={hrStyles} />
		<DefaultRelatedContent
			content={content}
			css={css(defaultStyles, relatedContentStyles)}
		/>
		<LeftCentreBorder rows={[1, 3]} />
	</aside>
);

// ----- Exports ----- //

export default ImmersiveRelatedContent;
