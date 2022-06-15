import { css } from '@emotion/react';
import { ArticleDesign, ArticleSpecial } from '@guardian/libs';
import { StraightLines } from '@guardian/source-react-components-development-kitchen';
import { decidePalette } from '../../../lib/decidePalette';

type Props = {
	format: ArticleFormat;
	containerPalette?: DCRContainerPalette;
	renderLines?: boolean;
	age?: JSX.Element;
	mediaMeta?: JSX.Element;
	commentCount?: JSX.Element;
	cardBranding?: JSX.Element;
	supportingContent?: JSX.Element;
};

const spaceBetween = css`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const marginBottom = css`
	margin-bottom: 3px;
`;

const flexEnd = css`
	display: flex;
	justify-content: flex-end;
`;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types -- because react
export const CardFooter = ({
	format,
	containerPalette,
	renderLines,
	age,
	mediaMeta,
	commentCount,
	cardBranding,
	supportingContent,
}: Props) => {
	const palette = decidePalette(format, containerPalette);

	if (format.theme === ArticleSpecial.Labs && cardBranding) {
		return <footer css={marginBottom}>{cardBranding}</footer>;
	}

	if (
		format.design === ArticleDesign.Comment ||
		format.design === ArticleDesign.Editorial ||
		format.design === ArticleDesign.Letter
	) {
		return (
			<footer css={marginBottom}>
				{supportingContent}
				<div css={spaceBetween}>
					{age}
					{renderLines && (
						<StraightLines
							cssOverrides={css`
								/* Fill the space */
								flex: 1;
								align-self: flex-end;
							`}
							color={palette.border.lines}
							count={4}
						/>
					)}
					{commentCount}
				</div>
			</footer>
		);
	}

	if (
		format.design === ArticleDesign.Gallery ||
		format.design === ArticleDesign.Audio ||
		format.design === ArticleDesign.Video
	) {
		return (
			<footer css={marginBottom}>
				{supportingContent}
				<div css={spaceBetween}>
					{mediaMeta}
					{/* Show age if we have it otherwise try for commentCount */}
					{age || commentCount}
				</div>
			</footer>
		);
	}

	if (age) {
		return (
			<footer css={marginBottom}>
				{supportingContent}
				<div css={spaceBetween}>
					{age}
					{commentCount}
				</div>
			</footer>
		);
	}

	return (
		<footer css={marginBottom}>
			{supportingContent}
			<div css={flexEnd}>
				<>{commentCount}</>
			</div>
		</footer>
	);
};
