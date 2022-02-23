import { css } from '@emotion/react';

import {
	headline,
	textSans,
	from,
	until,
	space,
} from '@guardian/source-foundations';

import { ArticleDisplay, ArticleDesign, ArticleSpecial } from '@guardian/libs';
import { Hide } from './Hide';
import { Badge } from './Badge';
import { interactiveLegacyClasses } from '../layouts/lib/interactiveLegacyStyling';

type Props = {
	format: ArticleFormat;
	palette: Palette;
	tags: TagType[];
	sectionLabel: string;
	sectionUrl: string;
	guardianBaseURL: string;
	badge?: BadgeType;
};

const sectionLabelLink = css`
	text-decoration: none;
	:hover {
		text-decoration: underline;
	}
`;

const rowBelowLeftCol = (format: ArticleFormat) => {
	if (
		format.design === ArticleDesign.LiveBlog ||
		format.design === ArticleDesign.DeadBlog
	) {
		return css`
			display: inline-block;
			flex-direction: column;

			${from.tablet} {
				display: flex;
				flex-direction: row;
			}

			${from.desktop} {
				display: flex;
				flex-direction: column;
			}
		`;
	}

	return css`
		flex-direction: column;
		display: inline-block;

		${until.leftCol} {
			display: flex;
			flex-direction: row;
		}
	`;
};

const marginBottom = css`
	margin-bottom: 5px;
`;

const marginRight = css`
	${until.leftCol} {
		margin-right: ${space[2]}px;
	}
`;

const invertedStyle = css`
	/* Handle text wrapping onto a new line */
	white-space: pre-wrap;
	box-decoration-break: clone;
	line-height: 28px;
	${from.leftCol} {
		line-height: 28px;
	}

	padding-right: ${space[1]}px;
	padding-top: ${space[1]}px;
	padding-bottom: ${space[3]}px;
`;

const fontStyles = (format: ArticleFormat) => {
	switch (format.theme) {
		case ArticleSpecial.Labs:
			switch (format.display) {
				case ArticleDisplay.Immersive:
					return css`
						${textSans.large({ fontWeight: 'bold' })}
						line-height: 23px;
						${from.leftCol} {
							line-height: 20px;
						}
					`;
				default:
					return css`
						${textSans.large()}
						line-height: 23px;
						${from.leftCol} {
							line-height: 20px;
						}
					`;
			}
		default:
			return css`
				${headline.xxxsmall({ fontWeight: 'bold' })}
				${from.wide} {
					${headline.xxsmall({ fontWeight: 'bold' })}
				}
			`;
	}
};

const secondaryFontStyles = (format: ArticleFormat) => {
	if (format.theme === ArticleSpecial.Labs) {
		return css`
			${textSans.medium({ fontWeight: 'regular' })}
		`;
	}
	return css`
		${headline.xxxsmall({ fontWeight: 'regular' })}
		line-height: 20px;
	`;
};

const displayBlock = css`
	display: block;
`;

const breakWord = css`
	word-break: break-word;
`;

const titleBadgeWrapper = css`
	margin-bottom: ${space[1]}px;
	margin-top: ${space[1]}px;
	margin-right: ${space[2]}px;
`;

const sectionPadding = css`
	padding-left: 10px;
	${from.mobileLandscape} {
		padding-left: 18px;
	}
	${from.tablet} {
		padding-left: ${space[1]}px;
	}
`;

const immersiveTitleBadgeStyle = (palette: Palette) => css`
	display: flex;
	flex-direction: row;
	align-items: center;
	padding-bottom: 0px;
	max-width: max-content;
	line-height: 1.15;
	/* Offset parent container margins when Immersive */
	margin-bottom: -10px;
	background-color: ${palette.background.seriesTitle};
	box-shadow: -6px 0 0 0 ${palette.background.seriesTitle},
		6px 0 0 0 ${palette.background.seriesTitle};
`;

export const SeriesSectionLink = ({
	format,
	palette,
	tags,
	sectionLabel,
	sectionUrl,
	guardianBaseURL,
	badge,
}: Props) => {
	// If we have a tag, use it to show 2 section titles
	const tag = tags.find(
		(thisTag) =>
			thisTag.type === 'Blog' ||
			thisTag.type === 'Series' ||
			(thisTag.type === 'Publication' &&
				thisTag.title === 'The Observer'),
	);

	const hasSeriesTag = tag && tag.type === 'Series';

	const isLabs = format.theme === ArticleSpecial.Labs;

	switch (format.display) {
		case ArticleDisplay.Immersive: {
			switch (format.design) {
				case ArticleDesign.Comment:
				case ArticleDesign.Editorial:
				case ArticleDesign.Letter: {
					if (tag) {
						// We have a tag, we're not immersive, show both series and section titles
						return (
							// Sometimes the tags/titles are shown inline, sometimes stacked
							<div css={!badge && rowBelowLeftCol(format)}>
								<a
									href={`${guardianBaseURL}/${tag.id}`}
									css={[
										sectionLabelLink,
										marginRight,
										fontStyles(format),
										breakWord,
										css`
											color: ${palette.text.seriesTitle};
											background-color: ${palette
												.background.seriesTitle};
											box-shadow: -6px 0 0 0
													${palette.background
														.seriesTitle},
												6px 0 0 0
													${palette.background
														.seriesTitle};
										`,
									]}
									data-component="series"
									data-link-name="article series"
								>
									<span>{tag.title}</span>
								</a>

								<Hide when="below" breakpoint="tablet">
									<a
										href={`${guardianBaseURL}/${sectionUrl}`}
										css={[
											sectionLabelLink,
											fontStyles(format),
											displayBlock,
											breakWord,
											css`
												color: ${palette.text
													.sectionTitle};
												background-color: ${palette
													.background.sectionTitle};
												box-shadow: -6px 0 0 0
														${palette.background
															.seriesTitle},
													6px 0 0 0
														${palette.background
															.seriesTitle};
											`,
										]}
										data-component="section"
										data-link-name="article section"
									>
										<span>{sectionLabel}</span>
									</a>
								</Hide>
							</div>
						);
					}
					// There's no tag so fallback to section title
					return (
						<div css={marginBottom}>
							<a
								href={`${guardianBaseURL}/${sectionUrl}`}
								css={[
									sectionLabelLink,
									marginRight,
									fontStyles(format),
									breakWord,
									css`
										color: ${palette.text.sectionTitle};
										background-color: ${palette.background
											.sectionTitle};
										box-shadow: -6px 0 0 0
												${palette.background
													.seriesTitle},
											6px 0 0 0
												${palette.background
													.seriesTitle};
									`,
								]}
								data-component="section"
								data-link-name="article section"
							>
								<span>{sectionLabel}</span>
							</a>
						</div>
					);
				}
				default: {
					if (hasSeriesTag || isLabs) {
						const title = tag?.title ? tag.title : sectionLabel;
						const linkExt = tag?.id ? tag.id : sectionUrl;
						return (
							<div
								css={badge && immersiveTitleBadgeStyle(palette)}
							>
								{badge && (
									<div
										css={[
											titleBadgeWrapper,
											sectionPadding,
										]}
									>
										<Badge
											imageUrl={badge.imageUrl}
											seriesTag={badge.seriesTag}
										/>
									</div>
								)}

								<a
									css={[
										sectionLabelLink,
										fontStyles(format),
										invertedStyle,
										breakWord,
										!badge && sectionPadding,
										css`
											color: ${palette.text.seriesTitle};
											background-color: ${palette
												.background.seriesTitle};
											box-shadow: -6px 0 0 0
													${palette.background
														.seriesTitle},
												6px 0 0 0
													${palette.background
														.seriesTitle};
										`,
									]}
									href={`${guardianBaseURL}/${linkExt}`}
									data-component="series"
									data-link-name="article series"
								>
									<span>{title}</span>
								</a>
							</div>
						);
					}
					// Immersives show nothing at all if there's no series tag
					return null;
				}
			}
		}
		case ArticleDisplay.Showcase:
		case ArticleDisplay.NumberedList:
		case ArticleDisplay.Standard:
		default: {
			if (tag) {
				// We have a tag, we're not immersive, show both series and section titles
				return (
					// Sometimes the tags/titles are shown inline, sometimes stacked
					<div css={!badge && rowBelowLeftCol(format)}>
						<a
							href={`${guardianBaseURL}/${tag.id}`}
							css={[
								sectionLabelLink,
								css`
									color: ${palette.text.seriesTitle};
									background-color: ${palette.background
										.seriesTitle};
								`,
								marginRight,
								fontStyles(format),
								breakWord,
								css`
									box-shadow: -6px 0 0 0
											${palette.background.seriesTitle},
										6px 0 0 0
											${palette.background.seriesTitle};
								`,
							]}
							data-component="series"
							data-link-name="article series"
						>
							<span>{tag.title}</span>
						</a>

						<Hide when="below" breakpoint="tablet">
							<a
								href={`${guardianBaseURL}/${sectionUrl}`}
								css={[
									sectionLabelLink,
									secondaryFontStyles(format),
									displayBlock,
									breakWord,
									css`
										color: ${palette.text.sectionTitle};
										background-color: ${palette.background
											.sectionTitle};
									`,
								]}
								data-component="section"
								data-link-name="article section"
							>
								<span>{sectionLabel}</span>
							</a>
						</Hide>
					</div>
				);
			}
			// There's no tag so fallback to section title
			return (
				<a
					href={`${guardianBaseURL}/${sectionUrl}`}
					css={[
						sectionLabelLink,
						css`
							color: ${palette.text.sectionTitle};
							background-color: ${palette.background
								.sectionTitle};
						`,
						marginRight,
						fontStyles(format),
						breakWord,
					]}
					data-component="section"
					data-link-name="article section"
					className={interactiveLegacyClasses.labelLink}
				>
					<span>{sectionLabel}</span>
				</a>
			);
		}
	}
};
