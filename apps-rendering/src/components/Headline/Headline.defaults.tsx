import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { ArticleFormat } from '@guardian/libs';
import { ArticleDesign } from '@guardian/libs';
import { from, headline, remSpace } from '@guardian/source-foundations';
import DesignTag from 'components/DesignTag';
import type { Item } from 'item';
import { getFormat } from 'item';
import { background, text } from 'palette';
import { articleWidthStyles, darkModeCss } from 'styles';

const boldFontStyles: SerializedStyles = css`
	${headline.small({ fontWeight: 'bold' })}
	${from.tablet} {
		${headline.medium({ fontWeight: 'bold' })}
	}
`;

export const defaultStyles = (format: ArticleFormat): SerializedStyles => {
	const baseStyles = css`
		${headline.small()}
		color: ${text.headline(format)};
		margin: 0;

		${from.tablet} {
			${headline.medium()}
		}

		${darkModeCss`
			color: ${text.headlineDark(format)};
		`}
	`;

	switch (format.design) {
		case ArticleDesign.Interview:
			return css`
				${baseStyles}
				padding-bottom: ${remSpace[1]};
			`;
		case ArticleDesign.Analysis:
			return css`
				${baseStyles}
				${articleWidthStyles}
				background-color: ${background.headline(format)};
				${darkModeCss`
					background-color: ${background.headlineDark(format)};
				`}
			`;
		case ArticleDesign.Explainer:
		case ArticleDesign.Profile:
		case ArticleDesign.Timeline:
			return css`
				${baseStyles}
				${articleWidthStyles}
				background-color: ${background.headline(format)};
				${darkModeCss`
					background-color: ${background.headlineDark(format)};
				`}
				${boldFontStyles}
			`;
		case ArticleDesign.NewsletterSignup:
			return css`
				${baseStyles}
				${articleWidthStyles}
				background-color: ${background.headline(format)};
				${darkModeCss`
					background-color: ${background.headlineDark(format)};
				`}
				${boldFontStyles}
				padding: 0 0 ${remSpace[5]} 0;
				max-width: 100%;
			`;
		default:
			return css`
				${baseStyles}
				${articleWidthStyles}
				background-color: ${background.headline(format)};
				padding-bottom: ${remSpace[6]};

				${darkModeCss`
					background-color: ${background.headlineDark(format)};
				`}
			`;
	}
};
interface DefaultProps {
	item: Item;
	styles: SerializedStyles;
}

export const DefaultHeadline: React.FC<DefaultProps> = ({ item, styles }) => {
	const format = getFormat(item);
	return (
		<>
			<DesignTag format={format} />
			<h1 css={styles}>
				<span>{item.headline}</span>
			</h1>
		</>
	);
};
