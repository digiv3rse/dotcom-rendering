import { StarRatingBlockComponent } from './StarRatingBlockComponent';

export default {
	component: StarRatingBlockComponent,
	title: 'Components/StarRatingBlockComponent',
};

export const AllSizes = () => (
	<>
		<h1>Small</h1>
		<br />
		<StarRatingBlockComponent rating={3} size="small" />
		<br />
		<br />
		<h1>Medium</h1>
		<br />
		<StarRatingBlockComponent rating={3} size="medium" />
		<br />
		<br />
		<h1>Large</h1>
		<br />
		<StarRatingBlockComponent rating={3} size="large" />
	</>
);
AllSizes.storyName = 'All stars sizes';
