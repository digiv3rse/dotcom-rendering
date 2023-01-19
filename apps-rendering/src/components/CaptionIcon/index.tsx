import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import { fill } from '@guardian/common-rendering/src/editorialPalette';
import { darkModeCss } from '@guardian/common-rendering/src/lib';
import type { ArticleFormat } from '@guardian/libs';
import { ArticleDesign } from '@guardian/libs';
import { remSpace } from '@guardian/source-foundations';
import { SvgCamera, SvgVideo } from '@guardian/source-react-components';
import type { FC } from 'react';

enum CaptionIconVariant {
	Image,
	Video,
}

interface IconProps {
	format: ArticleFormat;
	supportsDarkMode: boolean;
	variant: CaptionIconVariant;
}

const iconStyles = (supportsDarkMode: boolean): SerializedStyles => css`
	display: inline-block;
	width: 1.2rem;
	margin-right: ${remSpace[1]};
	fill: ${fill.cameraCaptionIcon()};
	position: relative;

	::before {
		content: ' ';
		display: block;
		padding-top: 0.85rem;
	}

	svg {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
	}

	${darkModeCss(supportsDarkMode)`
        fill: ${fill.cameraCaptionIconDark()};
    `}
`;

const CaptionIcon: FC<IconProps> = ({ format, supportsDarkMode, variant }) => {
	switch (format.design) {
		case ArticleDesign.Gallery:
		case ArticleDesign.Audio:
		case ArticleDesign.Video:
			return null;
		default:
			return (
				<span css={iconStyles(supportsDarkMode)}>
					{variant === CaptionIconVariant.Image ? (
						<SvgCamera />
					) : (
						<SvgVideo />
					)}
				</span>
			);
	}
};

export default CaptionIcon;
export { CaptionIconVariant };
