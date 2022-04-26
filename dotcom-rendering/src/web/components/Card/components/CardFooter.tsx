import { css } from '@emotion/react';

import { ArticleDesign, ArticleSpecial } from '@guardian/libs';
import { StraightLines } from '@guardian/source-react-components-development-kitchen';

type Props = {
	format: ArticleFormat;
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

const flexEnd = css`
	display: flex;
	justify-content: flex-end;
`;

const linesWrapperStyles = css`
	/* Fill the container */
	flex: 1;
	align-self: flex-end;
`;

export const CardFooter = ({
	format,
	age,
	mediaMeta,
	commentCount,
	cardBranding,
	supportingContent,
}: Props) => {
	if (format.theme === ArticleSpecial.Labs && cardBranding) {
		return <footer>{cardBranding}</footer>;
	}

	if (
		format.design === ArticleDesign.Comment ||
		format.design === ArticleDesign.Editorial ||
		format.design === ArticleDesign.Letter
	) {
		return (
			<footer>
				<div>{supportingContent}</div>
				<div css={spaceBetween}>
					{age}
					<StraightLines
						cssOverrides={linesWrapperStyles}
						count={4}
					/>
					{commentCount}
				</div>
			</footer>
		);
	}

	if (format.design === ArticleDesign.Media) {
		return (
			<footer>
				<div>{supportingContent}</div>
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
			<footer>
				<div>{supportingContent}</div>
				<div css={spaceBetween}>
					{age}
					{commentCount}
				</div>
			</footer>
		);
	}

	return (
		<footer>
			<div>{supportingContent}</div>
			<div css={flexEnd}>
				<>{commentCount}</>
			</div>
		</footer>
	);
};
