// ----- Imports ----- //

import type { Image as CardImage } from '@guardian/apps-rendering-api-models/image';
import type { BlockElement } from '@guardian/content-api-models/v1/blockElement';
import type { Image as ImageData } from '@guardian/image-rendering';
import { Dpr, src, srcsets } from '@guardian/image-rendering';
import type { ArticleFormat } from '@guardian/libs';
import { ArticleElementRole } from '@guardian/libs';
import type { Option } from '@guardian/types';
import { andThen, fromNullable, map, none, some } from '@guardian/types';
import { pipe } from 'lib';
import type { Context } from 'parserContext';
import type { ReactNode } from 'react';

// ----- Types ----- //

interface Image extends ImageData {
	caption: Option<DocumentFragment>;
	credit: Option<string>;
	nativeCaption: Option<string>;
}

interface BodyImageProps {
	image: Image;
	children?: ReactNode;
	format: ArticleFormat;
}

// ----- Functions ----- //

const parseCredit = (
	displayCredit: boolean | undefined,
	credit: string | undefined,
): Option<string> =>
	pipe(
		displayCredit,
		fromNullable,
		andThen((display) => (display ? fromNullable(credit) : none)),
	);

const parseRole = (role: string | undefined): ArticleElementRole => {
	switch (role) {
		case 'thumbnail':
			return ArticleElementRole.Thumbnail;
		case 'halfWidth':
			return ArticleElementRole.HalfWidth;
		default:
			return ArticleElementRole.Standard;
	}
};

const parseImage =
	({ docParser, salt }: Context) =>
	(element: BlockElement): Option<Image> => {
		const masterAsset = element.assets.find(
			(asset) => asset.typeData?.isMaster,
		);
		const data = element.imageTypeData;

		return pipe(
			masterAsset,
			fromNullable,
			andThen((asset) => {
				if (
					asset.file === undefined ||
					asset.file === '' ||
					asset.typeData?.width === undefined ||
					asset.typeData.height === undefined
				) {
					return none;
				}

				return some({
					src: src(
						salt,
						asset.typeData.secureFile ?? asset.file,
						500,
						Dpr.One,
					),
					...srcsets(asset.typeData.secureFile ?? asset.file, salt),
					alt: fromNullable(data?.alt),
					width: asset.typeData.width,
					height: asset.typeData.height,
					caption: pipe(data?.caption, fromNullable, map(docParser)),
					credit: parseCredit(data?.displayCredit, data?.credit),
					nativeCaption: fromNullable(data?.caption),
					role: parseRole(data?.role),
				});
			}),
		);
	};

const parseCardImage = (
	image: CardImage | undefined,
	salt: string,
): Option<Image> => {
	if (image === undefined) {
		return none;
	}

	return some({
		src: src(salt, image.url, 500, Dpr.One),
		...srcsets(image.url, salt),
		alt: fromNullable(image.altText),
		width: image.width,
		height: image.height,
		caption: none,
		credit: none,
		nativeCaption: none,
		role: ArticleElementRole.Standard,
	});
};

// ----- Exports ----- //

export { Image, parseImage, parseCardImage, BodyImageProps };
