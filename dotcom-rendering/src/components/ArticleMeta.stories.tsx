import { css } from '@emotion/react';
import {
	ArticleDesign,
	ArticleDisplay,
	ArticlePillar,
	ArticleSpecial,
} from '@guardian/libs';
import { getAllThemes, getThemeNameAsString } from '../lib/format';
import { ArticleMeta } from './ArticleMeta';

const Wrapper = ({ children }: { children: React.ReactNode }) => (
	<div
		css={css`
			width: 220px;
			padding: 20px;
		`}
	>
		{children}
	</div>
);

const tagsWithLargeBylineImage = [
	{
		id: 'profile/lanre-bakare',
		type: 'Contributor',
		title: 'Lanre Bakare',
		twitterHandle: 'lanre_bakare',
		bylineImageUrl:
			'https://uploads.guim.co.uk/2017/10/06/Lanre-Bakare,-L.png',
		bylineLargeImageUrl:
			'https://uploads.guim.co.uk/2017/10/06/Lanre-Bakare,-L.png',
	},
];

const tagsWithSmallBylineImage = [
	{
		id: 'profile/nicola-slawson',
		type: 'Contributor',
		title: 'Nicola Slawson',
		bylineImageUrl:
			'https://uploads.guim.co.uk/2016/11/01/Nicola_Slawson.jpg',
	},
];

const tagsWithByTwoContributors = [
	{
		id: 'profile/lanre-bakare',
		type: 'Contributor',
		title: 'Lanre Bakare',
		twitterHandle: 'lanre_bakare',
		bylineImageUrl:
			'https://uploads.guim.co.uk/2017/10/06/Lanre-Bakare,-L.png',
		bylineLargeImageUrl:
			'https://uploads.guim.co.uk/2017/10/06/Lanre-Bakare,-L.png',
	},
	{
		id: 'profile/another-author',
		type: 'Contributor',
		title: 'Another Author',
	},
];

export default {
	component: ArticleMeta,
	title: 'Components/ArticleMeta',
};

export const ArticleStory = () => {
	return (
		<Wrapper>
			<ArticleMeta
				format={{
					display: ArticleDisplay.Standard,
					design: ArticleDesign.Standard,
					theme: ArticlePillar.News,
				}}
				pageId=""
				webTitle=""
				byline="Lanre Bakare"
				tags={tagsWithLargeBylineImage}
				primaryDateline="Sun 12 Jan 2020 18.00 GMT"
				secondaryDateline="Last modified on Sun 12 Jan 2020 21.00 GMT"
				isCommentable={false}
				discussionApiUrl=""
				shortUrlId=""
				ajaxUrl=""
				showShareCount={true}
			/>
		</Wrapper>
	);
};

export const BrandingStory = () => {
	return (
		<Wrapper>
			<ArticleMeta
				branding={{
					sponsorName: 'Humanity United',
					logo: {
						src: 'https://static.theguardian.com/commercial/sponsor/14/May/2018/533d381b-ac99-4e10-83be-8b64a1da9710-hu.png',
						dimensions: { width: 140, height: 90 },
						link: 'http://www.humanityunited.org/ ',
						label: 'Supported by',
					},
					logoForDarkBackground: {
						src: 'https://static.theguardian.com/commercial/sponsor/14/May/2018/4192d462-d794-4f07-a43c-6b546f4dcd93-hu-white.png',
						dimensions: { width: 140, height: 39 },
						link: 'http://www.humanityunited.org/ ',
						label: 'Supported by',
					},
					aboutThisLink:
						'https://www.theguardian.com/info/2016/jan/25/content-funding',
				}}
				format={{
					display: ArticleDisplay.Standard,
					design: ArticleDesign.Standard,
					theme: ArticlePillar.News,
				}}
				pageId=""
				webTitle=""
				byline="Lanre Bakare"
				tags={tagsWithLargeBylineImage}
				primaryDateline="Sun 12 Jan 2020 18.00 GMT"
				secondaryDateline="Last modified on Sun 12 Jan 2020 21.00 GMT"
				isCommentable={false}
				discussionApiUrl=""
				shortUrlId=""
				ajaxUrl=""
				showShareCount={true}
			/>
		</Wrapper>
	);
};

ArticleStory.storyName = 'Article';

export const FeatureStory = () => {
	return (
		<Wrapper>
			<ArticleMeta
				format={{
					display: ArticleDisplay.Standard,
					design: ArticleDesign.Feature,
					theme: ArticlePillar.Culture,
				}}
				pageId=""
				webTitle=""
				byline="Lanre Bakare"
				tags={tagsWithLargeBylineImage}
				primaryDateline="Sun 12 Jan 2020 18.00 GMT"
				secondaryDateline="Last modified on Sun 12 Jan 2020 21.00 GMT"
				isCommentable={false}
				discussionApiUrl=""
				shortUrlId=""
				ajaxUrl=""
				showShareCount={true}
			/>
		</Wrapper>
	);
};
FeatureStory.storyName = 'Feature';

export const FeatureWithMismatchedContributor = () => {
	return (
		<Wrapper>
			<ArticleMeta
				format={{
					display: ArticleDisplay.Standard,
					design: ArticleDesign.Feature,
					theme: ArticlePillar.Culture,
				}}
				pageId=""
				webTitle=""
				byline="Gabriel Smith"
				tags={tagsWithLargeBylineImage}
				primaryDateline="Sun 12 Jan 2020 18.00 GMT"
				secondaryDateline="Last modified on Sun 12 Jan 2020 21.00 GMT"
				isCommentable={false}
				discussionApiUrl=""
				shortUrlId=""
				ajaxUrl=""
				showShareCount={true}
			/>
		</Wrapper>
	);
};
FeatureWithMismatchedContributor.storyName =
	'Feature with a byline mismatching the contributor tag';

export const FeatureStoryWithSmallBylineImage = () => {
	return (
		<Wrapper>
			<ArticleMeta
				format={{
					display: ArticleDisplay.Standard,
					design: ArticleDesign.Feature,
					theme: ArticlePillar.Culture,
				}}
				pageId=""
				webTitle=""
				byline="Nicola Slawson"
				tags={tagsWithSmallBylineImage}
				primaryDateline="Sun 12 Jan 2020 18.00 GMT"
				secondaryDateline="Last modified on Sun 12 Jan 2020 21.00 GMT"
				isCommentable={false}
				discussionApiUrl=""
				shortUrlId=""
				ajaxUrl=""
				showShareCount={true}
			/>
		</Wrapper>
	);
};
FeatureStoryWithSmallBylineImage.storyName = 'Feature with Small Byline Image';

export const SpecialReportStory = () => {
	return (
		<Wrapper>
			<ArticleMeta
				format={{
					display: ArticleDisplay.Standard,
					design: ArticleDesign.Feature,
					theme: ArticleSpecial.SpecialReport,
				}}
				pageId=""
				webTitle=""
				byline="Lanre Bakare"
				tags={tagsWithLargeBylineImage}
				primaryDateline="Sun 12 Jan 2020 18.00 GMT"
				secondaryDateline="Last modified on Sun 12 Jan 2020 21.00 GMT"
				isCommentable={false}
				discussionApiUrl=""
				shortUrlId=""
				ajaxUrl=""
				showShareCount={true}
			/>
		</Wrapper>
	);
};
SpecialReportStory.storyName = 'SpecialReport';

export const SpecialReportAlt = () => {
	return (
		<Wrapper>
			<ArticleMeta
				format={{
					display: ArticleDisplay.Standard,
					design: ArticleDesign.Feature,
					theme: ArticleSpecial.SpecialReportAlt,
				}}
				pageId=""
				webTitle=""
				byline="Lanre Bakare"
				tags={tagsWithLargeBylineImage}
				primaryDateline="Sun 12 Jan 2020 18.00 GMT"
				secondaryDateline="Last modified on Sun 12 Jan 2020 21.00 GMT"
				isCommentable={false}
				discussionApiUrl=""
				shortUrlId=""
				ajaxUrl=""
				showShareCount={true}
			/>
		</Wrapper>
	);
};
SpecialReportAlt.storyName = 'SpecialReportAlt';

export const CommentStory = () => {
	return (
		<Wrapper>
			<ArticleMeta
				format={{
					display: ArticleDisplay.Standard,
					design: ArticleDesign.Comment,
					theme: ArticlePillar.Opinion,
				}}
				pageId=""
				webTitle=""
				byline="Lanre Bakare"
				tags={tagsWithLargeBylineImage}
				primaryDateline="Sun 12 Jan 2020 18.00 GMT"
				secondaryDateline="Last modified on Sun 12 Jan 2020 21.00 GMT"
				isCommentable={false}
				discussionApiUrl=""
				shortUrlId=""
				ajaxUrl=""
				showShareCount={true}
			/>
		</Wrapper>
	);
};
CommentStory.storyName = 'Comment';

export const InterviewStory = () => {
	return (
		<Wrapper>
			<ArticleMeta
				format={{
					display: ArticleDisplay.Standard,
					design: ArticleDesign.Interview,
					theme: ArticlePillar.Lifestyle,
				}}
				pageId=""
				webTitle=""
				byline="Lanre Bakare"
				tags={tagsWithLargeBylineImage}
				primaryDateline="Sun 12 Jan 2020 18.00 GMT"
				secondaryDateline="Last modified on Sun 12 Jan 2020 21.00 GMT"
				isCommentable={false}
				discussionApiUrl=""
				shortUrlId=""
				ajaxUrl=""
				showShareCount={true}
			/>
		</Wrapper>
	);
};
InterviewStory.storyName = 'Interview';

export const ImmersiveStory = () => {
	return (
		<Wrapper>
			<ArticleMeta
				format={{
					display: ArticleDisplay.Immersive,
					design: ArticleDesign.Standard,
					theme: ArticlePillar.News,
				}}
				pageId=""
				webTitle=""
				byline="Lanre Bakare"
				tags={tagsWithLargeBylineImage}
				primaryDateline="Sun 12 Jan 2020 18.00 GMT"
				secondaryDateline="Last modified on Sun 12 Jan 2020 21.00 GMT"
				isCommentable={false}
				discussionApiUrl=""
				shortUrlId=""
				ajaxUrl=""
				showShareCount={true}
			/>
		</Wrapper>
	);
};
ImmersiveStory.storyName = 'Immersive';

export const TwoContributorsStory = () => {
	return (
		<Wrapper>
			<ArticleMeta
				format={{
					display: ArticleDisplay.Standard,
					design: ArticleDesign.Feature,
					theme: ArticlePillar.Sport,
				}}
				pageId=""
				webTitle=""
				byline="Lanre Bakare"
				tags={tagsWithByTwoContributors}
				primaryDateline="Sun 12 Jan 2020 18.00 GMT"
				secondaryDateline="Last modified on Sun 12 Jan 2020 21.00 GMT"
				isCommentable={false}
				discussionApiUrl=""
				shortUrlId=""
				ajaxUrl=""
				showShareCount={true}
			/>
		</Wrapper>
	);
};
TwoContributorsStory.storyName = 'Feature, with two contributors';

export const DeadBlogStory = () => {
	return (
		<>
			{getAllThemes({
				display: ArticleDisplay.Standard,
				design: ArticleDesign.DeadBlog,
			}).map((format) => (
				<Wrapper key={JSON.stringify(format)}>
					<p>{getThemeNameAsString(format)}</p>
					<ArticleMeta
						format={format}
						pageId=""
						webTitle=""
						byline="Lanre Bakare"
						tags={tagsWithByTwoContributors}
						primaryDateline="Sun 12 Jan 2020 18.00 GMT"
						secondaryDateline="Last modified on Sun 12 Jan 2020 21.00 GMT"
						isCommentable={false}
						discussionApiUrl=""
						shortUrlId=""
						ajaxUrl=""
						showShareCount={true}
					/>
				</Wrapper>
			))}
		</>
	);
};
DeadBlogStory.storyName = 'Deadblog - All pillars';

export const Dateline = () => {
	return (
		<Wrapper>
			<ArticleMeta
				format={{
					display: ArticleDisplay.Standard,
					design: ArticleDesign.Standard,
					theme: ArticlePillar.News,
				}}
				pageId=""
				webTitle=""
				byline="Lanre Bakare"
				tags={tagsWithLargeBylineImage}
				primaryDateline="Sun 12 Jan 2020 18.00 GMT"
				secondaryDateline=""
				isCommentable={false}
				discussionApiUrl=""
				shortUrlId=""
				ajaxUrl=""
				showShareCount={true}
			/>
		</Wrapper>
	);
};
Dateline.storyName = 'With no secondary dateline';
