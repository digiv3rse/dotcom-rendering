import { Display, Design, Special, Pillar } from '@guardian/types';
import type { Format } from '@guardian/types';
import {
	neutral,
	text,
	specialReport,
	opinion,
	news,
	sport,
	brandAltBackground,
	border,
	brandAlt,
} from '@guardian/src-foundations';

import { pillarPalette } from '@root/src/lib/pillars';

const WHITE = neutral[100];
const BLACK = text.primary;

const textHeadline = (format: Format): string => {
	switch (format.display) {
		case Display.Immersive:
			if (format.theme === Special.SpecialReport) return WHITE;
			switch (format.design) {
				case Design.PrintShop:
					return BLACK;
				default:
					return WHITE;
			}
		case Display.Showcase:
		case Display.Standard: {
			if (format.theme === Special.SpecialReport)
				return specialReport[100];
			switch (format.design) {
				case Design.Review:
				case Design.Recipe:
				case Design.Feature:
					return pillarPalette[format.theme].dark;
				case Design.Interview:
					return WHITE;
				default:
					return BLACK;
			}
		}
		default:
			return BLACK;
	}
};

const textSeriesTitle = (format: Format): string => {
	if (format.theme === Special.SpecialReport) return specialReport[300];
	switch (format.display) {
		case Display.Immersive:
			return WHITE;
		case Display.Showcase:
		case Display.Standard:
			switch (format.design) {
				case Design.MatchReport:
					return BLACK;
				default:
					return pillarPalette[format.theme].main;
			}
		default:
			return BLACK;
	}
};

const textSectionTitle = textSeriesTitle;

const textByline = (format: Format): string => {
	if (format.theme === Special.SpecialReport) return specialReport[300];
	switch (format.display) {
		case Display.Immersive:
			return WHITE;
		case Display.Showcase:
		case Display.Standard:
			switch (format.design) {
				case Design.Interview:
					return BLACK;
				default:
					return pillarPalette[format.theme].main;
			}
		default:
			return pillarPalette[format.theme].main;
	}
};

const textTwitterHandle = (format: Format): string => {
	if (format.theme === Special.SpecialReport) return specialReport[300];
	return text.supporting;
};

const textCaption = (format: Format): string => {
	if (format.theme === Special.SpecialReport) return specialReport[100];
	switch (format.design) {
		case Design.PhotoEssay:
			return pillarPalette[format.theme].dark;
		default:
			return text.supporting;
	}
};

const textCaptionLink = (format: Format): string => {
	if (format.theme === Special.SpecialReport) return specialReport[300];
	return pillarPalette[format.theme].main;
};

const textSubMeta = (format: Format): string => {
	if (format.theme === Special.SpecialReport) return specialReport[100];
	return pillarPalette[format.theme].main;
};

const textSubMetaLabel = (format: Format): string => {
	if (format.theme === Special.SpecialReport) return specialReport[300];
	return text.supporting;
};

const textSubMetaLink = (format: Format): string => {
	if (format.theme === Special.SpecialReport) return specialReport[300];
	return text.supporting;
};

const textSyndicationButton = (format: Format): string => {
	if (format.theme === Special.SpecialReport) return specialReport[100];
	return text.supporting;
};

const textArticleLink = (format: Format): string => {
	if (format.theme === Special.SpecialReport) return specialReport[400];
	switch (format.theme) {
		case Pillar.Opinion:
		case Pillar.Culture:
			return pillarPalette[format.theme].dark;
		default:
			return pillarPalette[format.theme].main;
	}
};

const textArticleLinkHover = (format: Format): string => {
	if (format.theme === Special.SpecialReport) return specialReport[100];
	switch (format.theme) {
		case Pillar.Opinion:
		case Pillar.Culture:
			return pillarPalette[format.theme].dark;
		default:
			return pillarPalette[format.theme].main;
	}
};

const textCardHeadline = (format: Format): string => {
	if (format.display === Display.Immersive) return WHITE;
	if (format.theme === Special.SpecialReport) return WHITE;
	switch (format.design) {
		case Design.Feature:
		case Design.Interview:
			return pillarPalette[format.theme].dark;
		case Design.Media:
		case Design.Live:
			return neutral[97];
		default:
			return BLACK;
	}
};

const textCardStandfirst = textCardHeadline;

const textCardKicker = (format: Format): string => {
	if (
		format.theme === Special.SpecialReport &&
		format.design === Design.Comment
	)
		// TODO: Pull this in from source as opinion[550]
		// https://theguardian.design/2a1e5182b/p/492a30-light-palette
		return '#ff9941';
	if (format.theme === Special.SpecialReport) return brandAlt[400];
	if (format.display === Display.Immersive)
		return pillarPalette[format.theme].bright;
	switch (format.design) {
		case Design.Live:
			switch (format.theme) {
				case Pillar.News:
					return news[600];
				case Pillar.Sport:
					return sport[600];
				default:
					return pillarPalette[format.theme].main;
			}
		case Design.Media:
			switch (format.theme) {
				case Pillar.News:
					return news[600];
				case Pillar.Sport:
					return sport[600];
				case Pillar.Opinion:
					// TODO: Pull this in from source as opinion[550]
					// https://theguardian.design/2a1e5182b/p/492a30-light-palette
					return '#ff9941';
				case Pillar.Lifestyle:
				case Pillar.Culture:
				default:
					return pillarPalette[format.theme][500];
			}
		default:
			return pillarPalette[format.theme].main;
	}
};

const textCardFooter = (format: Format): string => {
	switch (format.design) {
		case Design.Comment:
			switch (format.theme) {
				case Special.SpecialReport:
					// TODO: Pull this in from souce once we see it here:
					// https://theguardian.design/2a1e5182b/p/492a30-light-palette
					return '#ff9941';
				default:
					return neutral[60];
			}
		case Design.Live:
			switch (format.theme) {
				case Pillar.News:
					return '#ffbac8';
				case Pillar.Sport:
					return '#90dcff';
				case Special.SpecialReport:
					return brandAltBackground.primary;
				default:
					return pillarPalette[format.theme].main;
			}
		case Design.Media:
			switch (format.theme) {
				case Special.SpecialReport:
					return brandAlt[400];
				case Pillar.News:
					return news[600];
				case Pillar.Sport:
					return sport[600];
				case Pillar.Opinion:
					// TODO: Pull this in from source as opinion[550]
					// https://theguardian.design/2a1e5182b/p/492a30-light-palette
					return '#ff9941';
				case Pillar.Lifestyle:
				case Pillar.Culture:
				default:
					return pillarPalette[format.theme][500];
			}
		default:
			switch (format.theme) {
				case Special.SpecialReport:
					return brandAltBackground.primary;
				default:
					return neutral[60];
			}
	}
};

const textLinkKicker = (format: Format): string => {
	return pillarPalette[format.theme].main;
};

const backgroundArticle = (format: Format): string => {
	// Order matters. We want comment special report pieces to have the opinion background
	if (format.design === Design.Comment) return opinion[800];
	if (format.design === Design.GuardianView) return opinion[800];
	if (format.theme === Special.SpecialReport) return specialReport[800]; // Note, check theme rather than design here
	return 'transparent';
};

const backgroundSeriesTitle = (format: Format): string => {
	if (format.theme === Special.SpecialReport)
		return brandAltBackground.primary;
	switch (format.display) {
		case Display.Immersive:
			return pillarPalette[format.theme].main;
		case Display.Showcase:
		case Display.Standard:
		default:
			return 'transparent';
	}
};

const backgroundSectionTitle = (format: Format): string => {
	switch (format.display) {
		case Display.Immersive:
			return pillarPalette[format.theme].main;
		case Display.Showcase:
		case Display.Standard:
		default:
			return 'transparent';
	}
};

const backgroundAvatar = (format: Format): string => {
	switch (format.theme) {
		case Special.SpecialReport:
			return specialReport[800];
		case Pillar.Opinion:
			return pillarPalette[Pillar.Opinion].main;
		default:
			return pillarPalette[format.theme].bright;
	}
};

const backgroundCard = (format: Format): string => {
	if (format.theme === Special.SpecialReport) return specialReport[300];
	switch (format.design) {
		case Design.GuardianView:
		case Design.Comment:
			return opinion[800];
		case Design.Media:
			return neutral[20];
		case Design.Live:
			return pillarPalette[format.theme].dark;
		default:
			return neutral[97];
	}
};

const backgroundHeadline = (format: Format): string => {
	switch (format.display) {
		case Display.Immersive:
			if (format.theme === Special.SpecialReport)
				return specialReport[300];
			return BLACK;
		case Display.Showcase:
		case Display.Standard:
			if (format.design === Design.Interview) return BLACK;
			return 'transparent';
		default:
			return 'transparent';
	}
};

const fillCommentCount = (format: Format): string => {
	if (format.theme === Special.SpecialReport) return specialReport[300];
	return pillarPalette[format.theme].main;
};

const fillShareIcon = (format: Format): string => {
	if (format.theme === Special.SpecialReport) return specialReport[300];
	return pillarPalette[format.theme].main;
};

const fillCaptionTriangle = (format: Format): string => {
	if (format.theme === Special.SpecialReport) return specialReport[300];
	return pillarPalette[format.theme].main;
};

const fillCardIcon = (format: Format): string => {
	switch (format.design) {
		case Design.Comment:
			switch (format.theme) {
				case Special.SpecialReport:
					// TODO: Pull this in from souce once we see it here:
					// https://theguardian.design/2a1e5182b/p/492a30-light-palette
					return '#ff9941';
				default:
					return neutral[46];
			}
		case Design.Live:
			switch (format.theme) {
				case Pillar.News:
					return '#ffbac8';
				case Pillar.Sport:
					return '#90dcff';
				case Special.SpecialReport:
					return brandAltBackground.primary;
				default:
					return pillarPalette[format.theme].main;
			}
		case Design.Media:
			switch (format.theme) {
				case Special.SpecialReport:
					return brandAlt[400];
				case Pillar.News:
					return news[600];
				case Pillar.Sport:
					return sport[600];
				case Pillar.Opinion:
					// TODO: Pull this in from source as opinion[550]
					// https://theguardian.design/2a1e5182b/p/492a30-light-palette
					return '#ff9941';
				case Pillar.Lifestyle:
				case Pillar.Culture:
				default:
					return pillarPalette[format.theme][500];
			}
		default:
			switch (format.theme) {
				case Special.SpecialReport:
					return brandAltBackground.primary;
				default:
					return neutral[46];
			}
	}
};

const borderSyndicationButton = (): string => {
	return border.secondary;
};

const borderSubNav = (format: Format): string => {
	return pillarPalette[format.theme].main;
};

const borderArticleLink = (format: Format): string => {
	if (format.theme === Special.SpecialReport) return specialReport[400];
	return border.secondary;
};

const borderArticleLinkHover = (format: Format): string => {
	if (format.theme === Special.SpecialReport) return specialReport[100];
	return pillarPalette[format.theme].main;
};

const topBarCard = (format: Format): string => {
	if (format.theme === Special.SpecialReport)
		return brandAltBackground.primary;
	return pillarPalette[format.theme].main;
};

export const decidePalette = (format: Format): Palette => {
	return {
		text: {
			headline: textHeadline(format),
			seriesTitle: textSeriesTitle(format),
			sectionTitle: textSectionTitle(format),
			byline: textByline(format),
			twitterHandle: textTwitterHandle(format),
			caption: textCaption(format),
			captionLink: textCaptionLink(format),
			subMeta: textSubMeta(format),
			subMetaLabel: textSubMetaLabel(format),
			subMetaLink: textSubMetaLink(format),
			syndicationButton: textSyndicationButton(format),
			articleLink: textArticleLink(format),
			articleLinkHover: textArticleLinkHover(format),
			cardHeadline: textCardHeadline(format),
			cardKicker: textCardKicker(format),
			linkKicker: textLinkKicker(format),
			cardStandfirst: textCardStandfirst(format),
			cardFooter: textCardFooter(format),
		},
		background: {
			article: backgroundArticle(format),
			seriesTitle: backgroundSeriesTitle(format),
			sectionTitle: backgroundSectionTitle(format),
			avatar: backgroundAvatar(format),
			card: backgroundCard(format),
			headline: backgroundHeadline(format),
		},
		fill: {
			commentCount: fillCommentCount(format),
			shareIcon: fillShareIcon(format),
			captionTriangle: fillCaptionTriangle(format),
			cardIcon: fillCardIcon(format),
		},
		border: {
			syndicationButton: borderSyndicationButton(),
			subNav: borderSubNav(format),
			articleLink: borderArticleLink(format),
			articleLinkHover: borderArticleLinkHover(format),
		},
		topBar: {
			card: topBarCard(format),
		},
	};
};
