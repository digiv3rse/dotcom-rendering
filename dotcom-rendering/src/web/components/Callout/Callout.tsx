import { css } from '@emotion/react';
import { brand, headline, neutral, space } from '@guardian/source-foundations';
import { Tabs } from '@guardian/source-react-components-development-kitchen';
import { useState } from 'react';
import type {
	CalloutContactType,
	CampaignFieldType,
} from '../../../types/content';
import { CalloutDescription, CalloutShare } from './CalloutComponents';
import { Form } from './Form';
import { conditionallyRenderContactIcon, MessageUs } from './MessageUs';

const summaryContentWrapper = (isNonCollapsible: boolean) => css`
	visibility: visible;
	padding-top: 2px;
	padding-bottom: ${space[6]}px;
	padding-left: ${isNonCollapsible ? 0 : space[2]}px;
	padding-right: ${isNonCollapsible ? 0 : space[2]}px;
`;

const promptStyles = (isNonCollapsible: boolean) => css`
	${headline.xxsmall({ fontWeight: 'bold' })};
	color: ${isNonCollapsible ? neutral[7] : brand[500]};
`;

const subtitleTextHeaderStyles = css`
	${headline.xxsmall()}
	padding-bottom: ${space[3]}px;
`;

const tabTitle = css`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
`;

const tabIcons = css`
	padding-left: ${space[1]}px;
	display: flex;
	align-items: center;
`;

export interface CalloutBlockProps {
	prompt: string;
	heading: string;
	description: string;
	formFields: CampaignFieldType[];
	formId: string;
	submissionURL: string;
	isExpired: boolean;
	isNonCollapsible: boolean;
	contacts?: CalloutContactType[];
	pageId: string;
	format: ArticleFormat;
}

export const CalloutBlock = ({
	prompt,
	heading,
	description,
	formFields,
	formId,
	submissionURL,
	isNonCollapsible,
	contacts,
	pageId,
	format,
}: CalloutBlockProps) => {
	const [selectedTab, setSelectedTab] = useState('form');
	const shouldShowContacts = contacts && contacts.length > 0;
	const shouldShowHeading = !!heading && !isNonCollapsible;
	const tabsContent = [
		{
			id: 'form',
			text: <div>Tell us here</div>,
			content: (
				<Form
					formFields={formFields}
					submissionURL={submissionURL}
					formID={formId}
					pageId={pageId}
				/>
			),
		},
	];

	if (shouldShowContacts) {
		const tabsText = (
			<div css={tabTitle}>
				<div>Message us</div>
				<div css={tabIcons}>
					{contacts.map((c) =>
						conditionallyRenderContactIcon(c.name),
					)}
				</div>
			</div>
		);
		tabsContent.push({
			id: 'contact',
			text: tabsText,
			content: <MessageUs contacts={contacts} />,
		});
	}

	return (
		<div id={formId}>
			<div css={summaryContentWrapper(isNonCollapsible)}>
				{!!prompt && (
					<div css={promptStyles(isNonCollapsible)}>{prompt}</div>
				)}
				{shouldShowHeading && (
					<h4 css={subtitleTextHeaderStyles}>{heading}</h4>
				)}
				{!!description && (
					<CalloutDescription
						description={description}
						useBrandColour={isNonCollapsible}
					/>
				)}
				<CalloutShare
					title={heading}
					urlAnchor={formId}
					useBrandColour={isNonCollapsible}
					format={format}
				/>
			</div>
			<Tabs
				tabsLabel="Tell us via online form or message us using your phone"
				tabElement="button"
				tabs={tabsContent}
				selectedTab={selectedTab}
				onTabChange={(tabName: string): void => {
					setSelectedTab(tabName);
				}}
			/>
		</div>
	);
};
