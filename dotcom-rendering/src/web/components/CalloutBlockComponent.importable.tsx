import { css } from '@emotion/react';
import { palette } from '@guardian/source-foundations';
import { ExpandingWrapper } from '@guardian/source-react-components-development-kitchen';
import type { CalloutBlockElementV2 } from '../../types/content';
import { CalloutBlock } from './Callout/Callout';
import { CalloutExpired } from './Callout/CalloutComponents';
import { Deadline } from './Callout/Deadline';

const collapsibleCalloutStyle = css`
	background-color: ${palette.neutral[97]};
`;

export const CalloutBlockComponent = ({
	callout,
	pageId,
	format,
}: {
	callout: CalloutBlockElementV2;
	pageId: string;
	format: ArticleFormat;
}) => {
	const {
		prompt,
		title,
		description,
		formFields,
		activeUntil,
		calloutsUrl,
		formId,
		isNonCollapsible,
		contacts,
	} = callout;

	const isExpired = (date: number | undefined): boolean => {
		if (date !== undefined) {
			return Math.floor(new Date().getTime() / 1000) > date;
		}
		return false;
	};

	if (!isNonCollapsible && isExpired(activeUntil)) {
		return null;
	}

	if (isNonCollapsible && isExpired(activeUntil)) {
		return <CalloutExpired />;
	}

	const id = formId.toString();

	return (
		<>
			{!isNonCollapsible ? (
				<aside>
					<ExpandingWrapper
						name={`${callout.formId} form`}
						renderExtra={() => <Deadline until={activeUntil} />}
						collapsedHeight={'160px'}
					>
						<div css={collapsibleCalloutStyle}>
							<CalloutBlock
								formId={id}
								prompt={prompt}
								heading={title}
								description={description}
								formFields={formFields}
								submissionURL={calloutsUrl}
								isExpired={isExpired(activeUntil)}
								isNonCollapsible={isNonCollapsible}
								contacts={contacts}
								pageId={pageId}
								format={format}
							/>
						</div>
					</ExpandingWrapper>
				</aside>
			) : (
				<CalloutBlock
					formId={id}
					prompt={prompt}
					heading={title}
					description={description}
					formFields={formFields}
					submissionURL={calloutsUrl}
					isExpired={isExpired(activeUntil)}
					isNonCollapsible={isNonCollapsible}
					contacts={contacts}
					pageId={pageId}
					format={format}
				/>
			)}
		</>
	);
};
