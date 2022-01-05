import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { Branding } from '@guardian/apps-rendering-api-models/branding';
import { text as textPalette } from '@guardian/common-rendering/src/editorialPalette';
import type { ArticleFormat } from '@guardian/libs';
import {
	neutral,
	remSpace,
	text,
	textSans,
} from '@guardian/source-foundations';
import { map, withDefault } from '@guardian/types';
import Anchor from 'components/anchor';
import { getFormat } from 'item';
import type { Item } from 'item';
import { pipe } from 'lib';
import type { FC } from 'react';
import { darkModeCss } from 'styles';

interface Props {
	branding: Branding;
	format: ArticleFormat;
}

const styles = (
	format: ArticleFormat,
	lightModeImage: string,
	darkModeImage?: string,
): SerializedStyles => {
	const kicker = textPalette.kicker(format);
	const inverted = textPalette.inverted(format);
	return css`
		margin: ${remSpace[9]} 0;
		${textSans.small()}

		img {
			content: url('${lightModeImage}');
			display: block;
			margin: ${remSpace[3]} 0;
			max-height: 60px;
		}

		label {
			color: ${text.supporting};
		}

		a {
			color: ${kicker};
		}

		${darkModeCss`
            img {
                content: url("${darkModeImage ?? lightModeImage}");
            }

            label {
                color: ${neutral[86]};
            }

            a {
                color: ${inverted};
            }
        `}
	`;
};

const OptionalLogo = (item: Item): JSX.Element =>
	pipe(
		item.branding,
		map((branding) => (
			<Logo branding={branding} format={getFormat(item)} />
		)),
		withDefault(<></>),
	);

export const cleanImageUrl = (url: string): string =>
	encodeURI(url).replace(/\(/g, '%28').replace(/\)/g, '%29');

const Logo: FC<Props> = ({ branding, format }: Props) => {
	const lightLogo = cleanImageUrl(branding.logo);
	const darkLogo = cleanImageUrl(branding.altLogo ?? branding.logo);

	return (
		<section css={styles(format, lightLogo, darkLogo)}>
			<label>{branding.label}</label>
			<a href={branding.sponsorUri}>
				<img alt={branding.sponsorName} />
			</a>
			<Anchor href={branding.aboutUri} format={format}>
				About this content
			</Anchor>
		</section>
	);
};

export default OptionalLogo;
