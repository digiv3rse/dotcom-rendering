import { ArticleDesign, ArticleDisplay, ArticlePillar } from '@guardian/libs';
import fetchMock from 'fetch-mock';
import {
	calloutCampaign,
	calloutCampaignOnlyTwoRadio,
} from '../../../fixtures/manual/calloutCampaign';
import { CalloutBlockComponent } from './CalloutBlockComponent.importable';

const mockFormat = {
	display: ArticleDisplay.Standard,
	design: ArticleDesign.Standard,
	theme: ArticlePillar.Opinion,
};

export const Collapsible = () => {
	fetchMock
		.restore()
		.post(
			'https://callouts.code.dev-guardianapis.com/formstack-campaign/submit',
			{
				status: 201,
				body: null,
			},
		);
	return (
		<CalloutBlockComponent
			isNonCollapsible={false}
			callout={calloutCampaign}
			format={mockFormat}
		/>
	);
};

Collapsible.story = { name: 'Collapsible' };

export const NonCollapsible = () => {
	fetchMock
		.restore()
		.post(
			'https://callouts.code.dev-guardianapis.com/formstack-campaign/submit',
			{
				status: 201,
				body: null,
			},
		);
	return (
		<CalloutBlockComponent
			isNonCollapsible={true}
			callout={calloutCampaign}
			format={mockFormat}
		/>
	);
};

NonCollapsible.story = { name: 'NonCollapsible' };

export default {
	component: CalloutBlockComponent,
	title: 'Components/CalloutBlockComponent',
};

export const Radio = () => {
	fetchMock
		.restore()
		.post(
			'https://callouts.code.dev-guardianapis.com/formstack-campaign/submit',
			{
				status: 201,
				body: null,
			},
		);
	return (
		<CalloutBlockComponent
			isNonCollapsible={true}
			callout={calloutCampaignOnlyTwoRadio}
			format={mockFormat}
		/>
	);
};

Radio.story = { name: 'Radio and multi select' };
