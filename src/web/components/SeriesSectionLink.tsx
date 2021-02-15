import { css } from '@emotion/react';

import { headline } from '@guardian/src-foundations/typography';
import { from, until } from '@guardian/src-foundations/mq';
import { space } from '@guardian/src-foundations';

import { Hide } from '@frontend/web/components/Hide';
import { Display, Design } from '@guardian/types';

type Props = {
	format: Format;
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

const rowBelowLeftCol = css`
	flex-direction: column;
	display: inline-block;
	${until.leftCol} {
		display: flex;
		flex-direction: row;
	}
`;

const marginBottom = css`
	margin-bottom: 5px;
`;

const primaryStyle = css`
	font-weight: 700;
	${headline.xxxsmall({ fontWeight: 'bold' })};
	${from.leftCol} {
		${headline.xxsmall({ fontWeight: 'bold' })};
	}
	${until.leftCol} {
		margin-right: ${space[2]}px;
	}
`;

const invertedStyle = css`
	font-weight: 700;
	${headline.xxxsmall({ fontWeight: 'bold' })};
	${from.leftCol} {
		${headline.xxsmall({ fontWeight: 'bold' })};
	}

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
	padding-left: ${space[3]}px;
	${from.mobileLandscape} {
		padding-left: ${space[5]}px;
	}
	${from.tablet} {
		padding-left: ${space[1]}px;
	}
`;

const fontStyles = css`
	font-weight: 700;
	${headline.xxxsmall({ fontWeight: 'bold' })};
	${from.leftCol} {
		${headline.xxsmall({ fontWeight: 'bold' })};
	}
`;

const secondaryStyle = css`
	${headline.xxxsmall({ fontWeight: 'regular' })};
	display: block;
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
			thisTag.title === 'The Observer',
	);

	const hasSeriesTag = tag && tag.type === 'Series';

	switch (format.display) {
		case Display.Immersive: {
			switch (format.design) {
				case Design.Comment:
				case Design.GuardianView: {
					if (tag) {
						// We have a tag, we're not immersive, show both series and section titles
						return (
							// Sometimes the tags/titles are shown inline, sometimes stacked
							<div css={[!badge && rowBelowLeftCol]}>
								<a
									href={`${guardianBaseURL}/${tag.id}`}
									css={[
										sectionLabelLink,
										primaryStyle,
										fontStyles,
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
											secondaryStyle,
											fontStyles,
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
									primaryStyle,
									fontStyles,
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
					if (hasSeriesTag) {
						if (!tag) return null; // Just to keep ts happy
						return (
							<a
								href={`${guardianBaseURL}/${tag.id}`}
								css={[
									sectionLabelLink,
									css`
										color: ${palette.text.seriesTitle};
										background-color: ${palette.background
											.seriesTitle};
										box-shadow: -6px 0 0 0
												${palette.background
													.seriesTitle},
											6px 0 0 0
												${palette.background
													.seriesTitle};
									`,
									invertedStyle,
								]}
								data-component="series"
								data-link-name="article series"
							>
								<span>{tag.title}</span>
							</a>
						);
					}
					// Immersives show nothing at all if there's no series tag
					return null;
				}
			}
		}
		case Display.Showcase:
		case Display.Standard:
		default: {
			if (tag) {
				// We have a tag, we're not immersive, show both series and section titles
				return (
					// Sometimes the tags/titles are shown inline, sometimes stacked
					<div css={[!badge && rowBelowLeftCol]}>
						<a
							href={`${guardianBaseURL}/${tag.id}`}
							css={[
								sectionLabelLink,
								css`
									color: ${palette.text.seriesTitle};
									background-color: ${palette.background
										.seriesTitle};
								`,
								primaryStyle,
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
									css`
										color: ${palette.text.sectionTitle};
										background-color: ${palette.background
											.sectionTitle};
									`,
									secondaryStyle,
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
						primaryStyle,
					]}
					data-component="section"
					data-link-name="article section"
				>
					<span>{sectionLabel}</span>
				</a>
			);
		}
	}
};
