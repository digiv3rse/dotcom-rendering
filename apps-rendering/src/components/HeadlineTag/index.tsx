import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import { background } from '@guardian/common-rendering/src/editorialPalette/background';
import { text } from '@guardian/common-rendering/src/editorialPalette/text';
import type { ArticleFormat } from '@guardian/libs';
import { ArticleDesign } from '@guardian/libs';
import { from, headline } from '@guardian/source-foundations';
import type { FC } from 'react';
import { articleWidthStyles, darkModeCss } from '../../styles';

const headlineTagWrapper = css`
	${articleWidthStyles}
`;

const headlineTagStyles = (format: ArticleFormat): SerializedStyles => css`
	background-color: ${background.headlineTag(format)};
	${headline.xxxsmall({ fontWeight: 'bold', lineHeight: 'loose' })}
	color: ${text.headlineTag(format)};
	display: inline-block;
	box-decoration-break: clone;
	padding: 0 0.375rem 0.125rem;
	margin-bottom: 0.25rem;
	${from.tablet} {
		${headline.xxsmall({ fontWeight: 'bold', lineHeight: 'loose' })}
	}
	${darkModeCss`
		background-color: ${background.headlineTagDark(format)};
		color: ${text.headlineTagDark(format)};
	`}
`;

type Props = {
	tagText: string;
	format: ArticleFormat;
};

const HeadlineTag: FC<Props> = ({ tagText, format }) => {
	switch (format.design) {
		case ArticleDesign.Analysis:
		case ArticleDesign.Explainer:
			return (
				<div css={headlineTagWrapper}>
					<span css={headlineTagStyles(format)}>{tagText}</span>
				</div>
			);
		default:
			return <span css={headlineTagStyles(format)}>{tagText}</span>;
	}
};

// ----- Exports ----- //

export default HeadlineTag;
