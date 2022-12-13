// ----- Imports ----- //
import { Edition } from '@guardian/apps-rendering-api-models/edition';
import type { ArticleFormat } from '@guardian/libs';
import { ArticleDisplay } from '@guardian/libs';
import { breakpoints } from '@guardian/source-foundations';
import type { Option } from '@guardian/types';
import { none, some, withDefault } from '@guardian/types';
import { formatToString } from 'articleFormat';
import AnalysisLayout from 'components/Layout/AnalysisLayout';
import Comment from 'components/Layout/CommentLayout';
import Standard from 'components/Layout/StandardLayout';
import {
	analysis,
	article,
	comment,
	editorial,
	explainer,
	feature,
	gallery,
	immersive,
	interview,
	letter,
	matchReport,
	newsletterSignUp,
	photoEssay,
	printShop,
	quiz,
	recipe,
	review,
} from 'fixtures/item';
import { deadBlog, live } from 'fixtures/live';
import type { Item } from 'item';
import type { ReactElement } from 'react';
import { renderAll } from 'renderer';
import { Result } from 'result';
import GalleryLayout from './GalleryLayout';
import ImmersiveLayout from './ImmersiveLayout';
import LetterLayout from './LetterLayout';
import Live from './LiveLayout';
import NewsletterSignUpLayout from './NewsletterSignUpLayout';

// ----- Functions ----- //

const formatFromItem = (
	item: Item,
	forceDisplay: Option<ArticleDisplay>,
): ArticleFormat => ({
	theme: item.theme,
	design: item.design,
	display: withDefault(item.display)(forceDisplay),
});

// ----- Stories ----- //

export const Article = (): React.ReactNode => {
	return (
		<Standard item={article}>
			{renderAll(
				formatFromItem(article, some(ArticleDisplay.Standard)),
				Result.partition(article.body).oks,
			)}
		</Standard>
	);
};
Article.story = { name: formatToString(article) };

export const Review = (): React.ReactNode => {
	return (
		<Standard item={review}>
			{renderAll(
				formatFromItem(review, some(ArticleDisplay.Standard)),
				Result.partition(review.body).oks,
			)}
		</Standard>
	);
};
Review.story = { name: formatToString(review) };

export const MatchReport = (): React.ReactNode => {
	return (
		<Standard item={matchReport}>
			{renderAll(
				formatFromItem(matchReport, some(ArticleDisplay.Standard)),
				Result.partition(matchReport.body).oks,
			)}
		</Standard>
	);
};
MatchReport.story = { name: formatToString(matchReport) };

export const PrintShop = (): React.ReactNode => {
	return (
		<Standard item={printShop}>
			{renderAll(
				formatFromItem(printShop, some(ArticleDisplay.Standard)),
				Result.partition(printShop.body).oks,
			)}
		</Standard>
	);
};
PrintShop.story = { name: formatToString(printShop) };

export const PhotoEssay = (): React.ReactNode => {
	return (
		<Standard item={photoEssay}>
			{renderAll(
				formatFromItem(photoEssay, some(ArticleDisplay.Standard)),
				Result.partition(photoEssay.body).oks,
			)}
		</Standard>
	);
};
PhotoEssay.story = { name: formatToString(photoEssay) };

export const Feature = (): React.ReactNode => {
	return (
		<Standard item={feature}>
			{renderAll(
				formatFromItem(feature, some(ArticleDisplay.Standard)),
				Result.partition(feature.body).oks,
			)}
		</Standard>
	);
};
Feature.story = { name: formatToString(feature) };

export const Interview = (): React.ReactNode => {
	return (
		<Standard item={interview}>
			{renderAll(
				formatFromItem(interview, some(ArticleDisplay.Standard)),
				Result.partition(interview.body).oks,
			)}
		</Standard>
	);
};
Interview.story = { name: formatToString(interview) };

export const Quiz = (): React.ReactNode => {
	return (
		<Standard item={quiz}>
			{renderAll(
				formatFromItem(quiz, some(ArticleDisplay.Standard)),
				Result.partition(quiz.body).oks,
			)}
		</Standard>
	);
};
Quiz.story = { name: formatToString(quiz) };

export const Recipe = (): React.ReactNode => {
	return (
		<Standard item={recipe}>
			{renderAll(
				formatFromItem(recipe, some(ArticleDisplay.Standard)),
				Result.partition(recipe.body).oks,
			)}
		</Standard>
	);
};
Recipe.story = { name: formatToString(recipe) };

export const CommentItem = (): React.ReactNode => {
	return (
		<Comment item={comment}>
			{renderAll(
				formatFromItem(comment, some(ArticleDisplay.Standard)),
				Result.partition(comment.body).oks,
			)}
		</Comment>
	);
};
CommentItem.story = { name: formatToString(comment) };

export const Letter = (): React.ReactNode => {
	return (
		<LetterLayout item={letter}>
			{renderAll(
				formatFromItem(letter, some(ArticleDisplay.Standard)),
				Result.partition(letter.body).oks,
			)}
		</LetterLayout>
	);
};
Letter.story = { name: formatToString(letter) };

export const Editorial = (): React.ReactNode => {
	return (
		<Comment item={editorial}>
			{renderAll(
				formatFromItem(editorial, some(ArticleDisplay.Standard)),
				Result.partition(editorial.body).oks,
			)}
		</Comment>
	);
};
Editorial.story = { name: formatToString(editorial) };

export const Analysis = (): React.ReactNode => {
	return (
		<AnalysisLayout item={analysis}>
			{renderAll(
				formatFromItem(analysis, some(ArticleDisplay.Standard)),
				Result.partition(analysis.body).oks,
			)}
		</AnalysisLayout>
	);
};
Analysis.story = { name: formatToString(analysis) };

export const Explainer = (): React.ReactNode => {
	return (
		<Standard item={explainer}>
			{renderAll(
				formatFromItem(explainer, some(ArticleDisplay.Standard)),
				Result.partition(explainer.body).oks,
			)}
		</Standard>
	);
};
Explainer.story = { name: formatToString(explainer) };

export const LiveBlog = (): ReactElement => (
	<Live
		item={{
			...live,
			edition: Edition.US,
		}}
	/>
);
LiveBlog.story = { name: formatToString(live) };

export const DeadBlog = (): ReactElement => (
	<Live
		item={{
			...deadBlog,
			display: ArticleDisplay.Standard,
			edition: Edition.AU,
		}}
	/>
);
DeadBlog.story = { name: formatToString(deadBlog) };

export const NewsletterSignup = (): ReactElement => (
	<>
		<style>
			{`.js-signup-form-container {
			display:block !important;
		}`}
		</style>
		<NewsletterSignUpLayout item={newsletterSignUp}>
			{renderAll(
				formatFromItem(newsletterSignUp, some(ArticleDisplay.Standard)),
				Result.partition(newsletterSignUp.body).oks,
			)}
		</NewsletterSignUpLayout>
	</>
);
NewsletterSignup.story = { name: formatToString(newsletterSignUp) };

export const NewsletterSignupFallback = (): ReactElement => (
	<>
		<style>
			{`.js-signup-form-fallback-container {
			display:block !important;
		}`}
		</style>
		<NewsletterSignUpLayout item={newsletterSignUp}>
			{renderAll(
				formatFromItem(newsletterSignUp, some(ArticleDisplay.Standard)),
				Result.partition(newsletterSignUp.body).oks,
			)}
		</NewsletterSignUpLayout>
	</>
);
NewsletterSignupFallback.story = {
	name: `${formatToString(newsletterSignUp)} (form component not supported)`,
};

export const Gallery = (): ReactElement => (
	<GalleryLayout
		item={{
			...gallery,
			edition: Edition.UK,
		}}
	>
		{renderAll(
			formatFromItem(gallery, none),
			Result.partition(gallery.body).oks,
		)}
	</GalleryLayout>
);
Gallery.story = { name: formatToString(gallery) };

export const Immersive = (): ReactElement => (
	<ImmersiveLayout
		item={{
			...immersive,
			edition: Edition.UK,
		}}
	>
		{renderAll(
			formatFromItem(immersive, none),
			Result.partition(immersive.body).oks,
		)}
	</ImmersiveLayout>
);
Immersive.story = { name: formatToString(immersive) };

export default {
	title: 'AR/Layout',
	parameters: {
		layout: 'fullscreen',
		chromatic: {
			diffThreshold: 0.4,
			viewports: [
				breakpoints.mobile,
				breakpoints.tablet,
				breakpoints.wide,
			],
		},
	},
};
