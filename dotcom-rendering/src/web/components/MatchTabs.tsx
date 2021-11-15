import { css } from '@emotion/react';
import { space } from '@guardian/src-foundations';
import { headline } from '@guardian/src-foundations/typography';
import { decidePalette } from '@root/src/web/lib/decidePalette';

type Props = {
	minByMinUrl?: string;
	reportUrl?: string;
	format: ArticleFormat;
};

const thinGreySolid = (palette: Palette) =>
	`1px solid ${palette.border.secondary}`;

const GreyBorder = ({ palette }: { palette: Palette }) => (
	<div
		css={css`
			/* stylelint-disable-next-line color-no-hex */
			border-left: ${thinGreySolid(palette)};
			margin-left: ${space[1]}px;
			width: ${space[2]}px;
		`}
	/>
);

const tabsContainer = (palette: Palette) => css`
	display: flex;
	position: relative;
	border-bottom: ${thinGreySolid(palette)};
`;

const tab = (palette: Palette) => css`
	flex-basis: 50%;
	height: 40px;
	border-top: 3px solid ${palette.border.secondary};

	:nth-child(1) {
		border-top: 3px solid ${palette.border.sportBorderTop};
	}
`;

const tabLink = (palette: Palette) => css`
	color: ${palette.border.sportBorderTop};
	display: block;
	text-decoration: none;
	&:hover {
		background-color: ${palette.background.article};
	}
`;

const tabLabel = css`
	${headline.xxxsmall()};
	background: transparent;
	padding: 6px 8px 0;
	text-align: left;
	font-weight: 600;
	min-height: 36px;
	display: block;
	width: 100%;
`;

export const MatchTabs = ({ minByMinUrl, reportUrl, format }: Props) => {
	const palette = decidePalette(format);

	return (
		<div>
			<ul css={tabsContainer(palette)}>
				<li css={tab(palette)}>
					<a
						href={reportUrl}
						data-link-name="report"
						css={tabLink(palette)}
					>
						<span css={tabLabel}>Report</span>
					</a>
				</li>
				<GreyBorder palette={palette} />
				<li css={tab(palette)}>
					<a
						href={minByMinUrl}
						data-link-name="Min-by-min"
						css={tabLink(palette)}
					>
						<span css={tabLabel}>Min-by-min</span>
					</a>
				</li>
			</ul>
		</div>
	);
};
