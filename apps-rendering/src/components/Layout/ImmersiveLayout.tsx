// ----- Imports ----- //

import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import { Edition } from '@guardian/apps-rendering-api-models/edition';
import {
	background,
	fill,
} from '@guardian/common-rendering/src/editorialPalette';
import type { ArticleFormat } from '@guardian/libs';
import { between, from, remSpace } from '@guardian/source-foundations';
import { StraightLines } from '@guardian/source-react-components-development-kitchen';
import Footer from 'components/Footer';
import Headline from 'components/Headline';
import MainMedia, { ImmersiveCaption } from 'components/MainMedia';
import Metadata from 'components/Metadata';
import RelatedContent from 'components/RelatedContent';
import Series from 'components/Series';
import Standfirst from 'components/Standfirst';
import Tags from 'components/Tags';
import { grid } from 'grid/grid';
import LeftCentreBorder from 'grid/LeftCentreBorder';
import type { Item } from 'item';
import { getFormat } from 'item';
import type { FC } from 'react';
import { darkModeCss } from 'styles';

// ----- Component ----- //

const headerStyles = (format: ArticleFormat): SerializedStyles => css`
	${grid.container}

	${darkModeCss`
		background-color: ${background.articleContentDark(format)}
	`}
`;

const mainContentStyles = (format: ArticleFormat): SerializedStyles => css`
	${grid.container}

	${darkModeCss`
		background-color: ${background.articleContentDark(format)}
	`}
`;

const bodyStyles = css`
	${grid.column.centre}

	${between.tablet.and.desktop} {
		${grid.span('centre-column-start', 11)}
	}

	${from.leftCol} {
		grid-row: 1 / 4;
	}
`;

const linesStyles = (format: ArticleFormat): SerializedStyles => css`
	${grid.column.all}
	margin-top: ${remSpace[1]};

	${from.phablet} {
		${grid.column.centre}
	}

	${from.leftCol} {
		${grid.column.left}
		margin-top: 0;
	}

	${darkModeCss`
		stroke: ${fill.linesDark(format)};
	`}
`;

type Props = {
	item: Item;
	edition: Edition;
};

const ImmersiveLayout: FC<Props> = ({ item, children, edition }) => {
	const format = getFormat(item);

	return (
		<>
			<main>
				<article>
					<header css={headerStyles(format)}>
						<MainMedia mainMedia={item.mainMedia} format={format} />
						<Series item={item} />
						<Headline item={item} />
						<Standfirst item={item} />
						<ImmersiveCaption
							mainMedia={item.mainMedia}
							format={format}
						/>
						<LeftCentreBorder rows={[5, 5]} />
					</header>
					<div css={mainContentStyles(format)}>
						<LeftCentreBorder rows={[1, 5]} />
						<StraightLines cssOverrides={linesStyles(format)} />
						<Metadata item={item} edition={edition} />
						<div css={bodyStyles}>{children}</div>
						<Tags item={item} />
					</div>
				</article>
			</main>
			<RelatedContent item={item} />
			<Footer isCcpa={false} format={format} />
		</>
	);
};

// ----- Exports ----- //

export default ImmersiveLayout;
