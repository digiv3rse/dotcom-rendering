import React from 'react';
import { headline } from '@guardian/src-foundations/typography';
import { css } from '@emotion/react';
import { pillarPalette } from '@root/src/lib/pillars';

const seriesStyle = (pillar: Theme) => css`
	color: ${pillarPalette[pillar].main};
	${headline.xxxsmall()};
	font-weight: 900;
	text-decoration: none;
	margin-top: 10px;
	display: block;
`;

// Returns a series link if possible, and attempt to return a section link as a fallback if provided
export const SeriesLink: React.SFC<{
	baseURL: string;
	tags: TagType[];
	fallbackToSection: boolean;
	sectionLabel?: string; // required for fallback only
	sectionUrl?: string; // required for fallback only
	pillar: Theme;
}> = ({
	baseURL,
	tags,
	fallbackToSection,
	sectionLabel,
	sectionUrl,
	pillar,
}) => {
	const tag = tags.find((t) => t.type === 'Blog' || t.type === 'Series');

	if (!tag && !fallbackToSection) {
		return null;
	}

	if (!tag && sectionLabel && sectionUrl) {
		return (
			<a
				css={seriesStyle(pillar)}
				href={`https://www.theguardian.com/${sectionUrl}`}
				data-link-name="article section"
			>
				{sectionLabel}
			</a>
		);
	}

	if (tag) {
		return (
			<a href={`${baseURL}/${tag.id}`} css={seriesStyle(pillar)}>
				{tag.title}
			</a>
		);
	}

	return null;
};
