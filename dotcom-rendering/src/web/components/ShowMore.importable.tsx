import { css } from '@emotion/react';
import {
	error as errorColor,
	fontWeights,
	from,
	space,
} from '@guardian/source-foundations';
import { Button, SvgMinus, SvgPlus } from '@guardian/source-react-components';
import { useState } from 'react';
import { useApi } from '../lib/useApi';

function decideButtonText({
	showMore,
	loading,
	displayName,
}: {
	showMore: boolean;
	loading: boolean;
	displayName: string;
}) {
	if (showMore && loading) return 'Loading';
	if (showMore) return 'Less';
	return `More ${displayName}`;
}

function insertHtml(html: string, collectionId: string) {
	try {
		const placeholder = document.querySelector<HTMLElement>(
			`[data-show-more-placeholder="${collectionId}"]`,
		);
		/**
		 * it is expected that the value of `html` will be a server-rendered
		 * instance of the ExtraCardsContainer component
		 */
		// @ts-expect-error -- We want to catch this error if the element is missing
		placeholder.innerHTML = html;
	} catch (e) {
		window.guardian.modules.sentry.reportError(
			// @ts-expect-error -- We're happy to pass this to Sentry
			e,
			'show-more-insert',
		);
	}
}

function removeHtml(collectionId: string) {
	try {
		const placeholder = document.querySelector<HTMLElement>(
			`[data-show-more-placeholder="${collectionId}"]`,
		);
		// @ts-expect-error -- We want to catch this error if the element is missing
		placeholder.innerHTML = '';
	} catch (e) {
		window.guardian.modules.sentry.reportError(
			// @ts-expect-error -- We're happy to pass this to Sentry
			e,
			'show-more-remove',
		);
	}
}

const errorMessageMarkup = `
	<div style="color: ${errorColor[400]}; font-weight: ${fontWeights.bold}; padding: 10px;">
		Sorry, failed to load more stories. Please try again.
	</div>
`;

export const ShowMore = ({
	pageId,
	collectionId,
	displayName,
}: {
	pageId: string;
	collectionId: string;
	displayName: string;
}) => {
	const [showMore, setShow] = useState(false);
	// We only pass an actual URL to SWR when 'showMore' is true.
	// Toggling 'showMore' will trigger a re-render
	//   see: https://swr.vercel.app/docs/conditional-fetching#conditional
	const url = showMore
		? `https://code.api.nextgen.guardianapps.co.uk/${pageId}/show-more/${collectionId}.json?dcr=true`
		: undefined;
	const { data, error, loading } = useApi<{ html: string }>(url, {
		errorRetryCount: 1,
	});

	if (!showMore) {
		removeHtml(collectionId);
	} else {
		if (error) {
			// Inserting hard-coded markup here allows us to have a simple state
			// space in this component, but it does limit styling. If styling is
			// revisited, this may be a good reason to add extra state to handle
			// the error message.
			insertHtml(errorMessageMarkup, collectionId);
		}
		if (data) {
			insertHtml(data.html, collectionId);
		}
	}

	return (
		<Button
			priority="tertiary"
			size="xsmall"
			icon={showMore && !loading ? <SvgMinus /> : <SvgPlus />}
			iconSide="left"
			onClick={() => setShow(!showMore)}
			cssOverrides={css`
				margin-top: ${space[3]}px;
				${from.tablet} {
					margin-left: 10px;
				}
			`}
			disabled={loading}
			data-cy={`show-more-button-${collectionId}`}
		>
			{decideButtonText({ showMore, loading, displayName })}
		</Button>
	);
};
