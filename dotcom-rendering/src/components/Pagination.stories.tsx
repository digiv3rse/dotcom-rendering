import { ArticleDesign, ArticleDisplay } from '@guardian/libs';
import { breakpoints } from '@guardian/source-foundations';
import { getAllThemes } from '../lib/format.ts';
import { Pagination } from './Pagination.tsx';

export default {
	component: Pagination,
	title: 'Components/Pagination',
	parameters: {
		layout: 'padded',
		chromatic: { viewports: [breakpoints.mobile, breakpoints.wide] },
	},
};

const formats = getAllThemes({
	display: ArticleDisplay.Standard,
	design: ArticleDesign.Standard,
});

export const notFirstPage = () => (
	<>
		{formats.map((format) => (
			<Pagination
				key={JSON.stringify(format)}
				currentPage={2}
				totalPages={6}
				format={format}
				oldest="oldest"
				older="older"
				newer="newer"
				newest="newest"
			/>
		))}
	</>
);

notFirstPage.storyName = 'Not first page';

export const firstPageStory = () => (
	<>
		{formats.map((format) => (
			<Pagination
				key={JSON.stringify(format)}
				currentPage={1}
				totalPages={4}
				format={format}
				oldest="oldest"
				older="older"
				newer="newer"
				newest="newest"
			/>
		))}
	</>
);

firstPageStory.storyName = 'First page';

export const lastPage = () => (
	<>
		{formats.map((format) => (
			<Pagination
				key={JSON.stringify(format)}
				currentPage={9}
				totalPages={9}
				format={format}
				oldest="oldest"
				older="older"
				newer="newer"
				newest="newest"
			/>
		))}
	</>
);
