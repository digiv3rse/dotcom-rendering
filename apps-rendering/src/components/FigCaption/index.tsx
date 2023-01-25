// ----- Imports ----- //

import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import { text } from '@guardian/common-rendering/src/editorialPalette';
import type { ArticleFormat } from '@guardian/libs';
import { ArticleDesign } from '@guardian/libs';
import { neutral, remSpace, textSans } from '@guardian/source-foundations';
import type { Option } from '@guardian/types';
import { OptionKind } from '@guardian/types';
import CaptionIcon from 'components/CaptionIcon';
import type { CaptionIconVariant } from 'components/CaptionIcon';
import type { Styleable } from 'lib';
import type { FC, ReactNode } from 'react';
import { darkModeCss } from 'styles';

// ----- Component ----- //

type Props = Styleable<{
	format: ArticleFormat;
	children: Option<ReactNode>;
	variant: CaptionIconVariant;
}>;

const styles = (format: ArticleFormat): SerializedStyles => css`
	${textSans.xsmall({ lineHeight: 'regular' })}
	padding-top: ${remSpace[1]};
	color: ${text.figCaption(format)};

	${darkModeCss`
    	color: ${text.figCaptionDark(format)};
  	`}
`;

const mediaStyles = css`
	color: ${neutral[86]};

	${darkModeCss`
    color: ${neutral[86]};
  `}
`;

const getStyles = (format: ArticleFormat): SerializedStyles => {
	switch (format.design) {
		case ArticleDesign.Gallery:
		case ArticleDesign.Audio:
		case ArticleDesign.Video:
			return css(styles(format), mediaStyles);
		default:
			return styles(format);
	}
};

const FigCaption: FC<Props> = ({ format, children, className, variant }) => {
	switch (children.kind) {
		case OptionKind.Some:
			return (
				<figcaption className={className} css={getStyles(format)}>
					<CaptionIcon format={format} variant={variant} />
					{children.value}
				</figcaption>
			);

		default:
			return null;
	}
};

// ----- Exports ----- //

export default FigCaption;
