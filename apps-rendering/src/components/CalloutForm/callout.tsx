import { css } from '@emotion/react';
import type { SerializedStyles } from '@emotion/react';
import type { Campaign } from '@guardian/apps-rendering-api-models/campaign';
import { text } from '@guardian/common-rendering/src/editorialPalette';
import type { ArticleFormat } from '@guardian/libs';
import {
	body,
	headline,
	neutral,
	remSpace,
} from '@guardian/source-foundations';
import type { Option } from '@guardian/types';
import { maybeRender } from 'lib';
import type { FC } from 'react';
import { renderStandfirstText } from 'renderer';
import CalloutForm from './form';

export interface CalloutProps {
	campaign: Campaign;
	format: ArticleFormat;
	description: Option<DocumentFragment>;
}

const calloutDetailsStyles = css`
	border-top: 1px ${neutral[86]} solid;
	background-color: ${neutral[97]};
	position: relative;
	padding-bottom: ${remSpace[6]};

	/* IE does not support summary HTML elements, so we need to hide children ourself */
	:not([open]) > *:not(summary) {
		display: none;
	}
`;

const summaryStyles = css`
	/* Removing default styles from summery tag */
	::-webkit-details-marker {
		display: none;
	}
	outline: none;

	/* We don't want the summary to open when we click anything but the button, so we pointer-event: none the summary */
	/* 176da211-05aa-4280-859b-1e3157b3f19e */
	pointer-events: none;

	/*
        why hide visibility?
        because we want to prevent the user for tabbing to the summery HTML element
        without using tabIndex={-1} which would disable focus on all child DOM elements

        NOTE: requires "visibility: visible;" on child elements to display and enable focus
    */
	visibility: hidden;

	a {
		/* but we do want to allow click on links */
		pointer-events: all;
	}
`;

const summaryContentWrapper = css`
	padding-left: ${remSpace[2]};
	visibility: visible;
`;

const titleStyles = (format: ArticleFormat): SerializedStyles => css`
	${headline.xxsmall({ fontWeight: 'bold' })}
	color: ${text.interactiveAtomLink(format)};
`;

const headingTextHeaderStyles = css`
	${headline.xxsmall()}
`;

const descriptionStyles = css`
	${body.medium()}
	padding: ${remSpace[3]} 0;
`;

const Callout: FC<CalloutProps> = ({ campaign, format, description }) => {
	const { name, fields } = campaign;
	const { callout } = fields;

	return (
		<>
			<details css={calloutDetailsStyles} open={true}>
				<summary css={summaryStyles}>
					<div css={summaryContentWrapper}>
						<div css={titleStyles(format)}>{callout}</div>
						<h4 css={headingTextHeaderStyles}>{name}</h4>
						{maybeRender(description, (description) => (
							<div css={descriptionStyles}>
								{/* TODO: Check if we can use the standfirst renderer like this
								the plaintext renderer doesn't give us links etc
								(which were included in the eg data) */}
								{renderStandfirstText(description, format)}
							</div>
						))}
					</div>
				</summary>
				<CalloutForm campaign={campaign} format={format} />
			</details>
		</>
	);
};

export default Callout;
