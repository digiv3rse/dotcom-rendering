import fetchMock from 'fetch-mock';

import { ArticleDisplay, ArticleDesign, ArticlePillar } from '@guardian/libs';
import { ABProvider } from '@guardian/ab-react';

import { ElementContainer } from '@frontend/web/components/ElementContainer';
import { breakpoints } from '@guardian/src-foundations';
import {
	responseWithTwoTabs,
	responseWithOneTab,
	responseWithMissingImage,
} from '../MostViewed.mocks';

import { MostViewedFooter } from './MostViewedFooter';

export default {
	component: MostViewedFooter,
	title: 'Components/MostViewedFooter',
	parameters: {
		chromatic: {
			diffThreshold: 0.2,
			viewports: [
				breakpoints.mobile,
				breakpoints.tablet,
				breakpoints.wide,
			],
		},
	},
};

const AbProvider: React.FC = ({ children }) => {
	return (
		<ABProvider
			mvtMaxValue={1000000}
			mvtId={1234}
			pageIsSensitive={false}
			abTestSwitches={{}}
			arrayOfTestObjects={[]}
		>
			{children}
		</ABProvider>
	);
};

export const withTwoTabs = () => {
	fetchMock.restore().getOnce('*', {
		status: 200,
		body: responseWithTwoTabs,
	});

	return (
		<AbProvider>
			<ElementContainer>
				<MostViewedFooter
					format={{
						display: ArticleDisplay.Standard,
						design: ArticleDesign.Standard,
						theme: ArticlePillar.News,
					}}
					sectionName="politics"
					ajaxUrl="https://api.nextgen.guardianapps.co.uk"
				/>
			</ElementContainer>
		</AbProvider>
	);
};
withTwoTabs.story = { name: 'with two tabs' };

export const withOneTabs = () => {
	fetchMock.restore().getOnce('*', {
		status: 200,
		body: responseWithOneTab,
	});

	return (
		<AbProvider>
			<ElementContainer>
				<MostViewedFooter
					format={{
						display: ArticleDisplay.Standard,
						design: ArticleDesign.Standard,
						theme: ArticlePillar.News,
					}}
					ajaxUrl="https://api.nextgen.guardianapps.co.uk"
				/>
			</ElementContainer>
		</AbProvider>
	);
};
withOneTabs.story = { name: 'with one tab' };

export const withNoMostSharedImage = () => {
	fetchMock.restore().getOnce('*', {
		status: 200,
		body: responseWithMissingImage,
	});

	return (
		<AbProvider>
			<ElementContainer>
				<MostViewedFooter
					format={{
						display: ArticleDisplay.Standard,
						design: ArticleDesign.Standard,
						theme: ArticlePillar.News,
					}}
					ajaxUrl="https://api.nextgen.guardianapps.co.uk"
				/>
			</ElementContainer>
		</AbProvider>
	);
};
withNoMostSharedImage.story = { name: 'with a missing image on most shared' };
