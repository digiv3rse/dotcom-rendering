/* eslint-disable react/jsx-props-no-spreading */

import { ArticleDesign } from '@guardian/libs';

import { Card } from './Card/Card';
import { UL } from './Card/components/UL';
import { LI } from './Card/components/LI';

type Props = {
	content: TrailType[];
	containerPalette?: DCRContainerPalette;
};

export const ExactlyFive = ({ content, containerPalette }: Props) => (
	<>
		<UL direction="row" padBottom={true}>
			<LI padSides={true} percentage="34%">
				<Card
					containerPalette={containerPalette}
					linkTo={content[0].url}
					format={content[0].format}
					headlineText={content[0].headline}
					headlineSize="medium"
					byline={content[0].byline}
					showByline={content[0].showByline}
					showQuotes={
						content[0].format.design === ArticleDesign.Comment ||
						content[0].format.design === ArticleDesign.Letter
					}
					webPublicationDate={content[0].webPublicationDate}
					kickerText={content[0].kickerText}
					showPulsingDot={
						content[0].format.design === ArticleDesign.LiveBlog
					}
					showSlash={true}
					showClock={false}
					imageUrl={content[0].image}
					mediaType={content[0].mediaType}
					mediaDuration={content[0].mediaDuration}
					commentCount={content[0].commentCount}
					starRating={content[0].starRating}
					branding={content[0].branding}
				/>
			</LI>
			<LI
				padSides={true}
				showDivider={true}
				showTopMarginWhenStacked={true}
				percentage="34%"
			>
				<Card
					containerPalette={containerPalette}
					linkTo={content[1].url}
					format={content[1].format}
					headlineText={content[1].headline}
					headlineSize="medium"
					byline={content[1].byline}
					showByline={content[1].showByline}
					showQuotes={
						content[1].format.design === ArticleDesign.Comment ||
						content[1].format.design === ArticleDesign.Letter
					}
					webPublicationDate={content[1].webPublicationDate}
					kickerText={content[1].kickerText}
					showPulsingDot={
						content[1].format.design === ArticleDesign.LiveBlog
					}
					showSlash={true}
					showClock={false}
					imageUrl={content[1].image}
					mediaType={content[1].mediaType}
					mediaDuration={content[1].mediaDuration}
					commentCount={content[1].commentCount}
					starRating={content[1].starRating}
					branding={content[1].branding}
				/>
			</LI>
			<LI
				padSides={true}
				showDivider={true}
				showTopMarginWhenStacked={true}
				percentage="34%"
			>
				<UL direction="column">
					<LI padBottom={true} stretch={true}>
						<Card
							containerPalette={containerPalette}
							linkTo={content[2].url}
							format={content[2].format}
							headlineText={content[2].headline}
							headlineSize="medium"
							byline={content[2].byline}
							showByline={content[2].showByline}
							showQuotes={
								content[2].format.design ===
									ArticleDesign.Comment ||
								content[2].format.design ===
									ArticleDesign.Letter
							}
							webPublicationDate={content[2].webPublicationDate}
							kickerText={content[2].kickerText}
							showPulsingDot={
								content[2].format.design ===
								ArticleDesign.LiveBlog
							}
							showSlash={true}
							showClock={false}
							mediaType={content[2].mediaType}
							mediaDuration={content[2].mediaDuration}
							commentCount={content[2].commentCount}
							starRating={content[2].starRating}
							branding={content[2].branding}
						/>
					</LI>
					<LI padBottom={true} stretch={true}>
						<Card
							containerPalette={containerPalette}
							linkTo={content[3].url}
							format={content[3].format}
							headlineText={content[3].headline}
							headlineSize="medium"
							byline={content[3].byline}
							showByline={content[3].showByline}
							showQuotes={
								content[3].format.design ===
									ArticleDesign.Comment ||
								content[3].format.design ===
									ArticleDesign.Letter
							}
							webPublicationDate={content[3].webPublicationDate}
							kickerText={content[3].kickerText}
							showPulsingDot={
								content[3].format.design ===
								ArticleDesign.LiveBlog
							}
							showSlash={true}
							showClock={false}
							mediaType={content[3].mediaType}
							mediaDuration={content[3].mediaDuration}
							commentCount={content[3].commentCount}
							starRating={content[3].starRating}
							branding={content[3].branding}
						/>
					</LI>
					<LI padBottom={false} stretch={true}>
						<Card
							containerPalette={containerPalette}
							linkTo={content[4].url}
							format={content[4].format}
							headlineText={content[4].headline}
							headlineSize="medium"
							byline={content[4].byline}
							showByline={content[4].showByline}
							showQuotes={
								content[4].format.design ===
									ArticleDesign.Comment ||
								content[4].format.design ===
									ArticleDesign.Letter
							}
							webPublicationDate={content[4].webPublicationDate}
							kickerText={content[4].kickerText}
							showPulsingDot={
								content[4].format.design ===
								ArticleDesign.LiveBlog
							}
							showSlash={true}
							showClock={false}
							mediaType={content[4].mediaType}
							mediaDuration={content[4].mediaDuration}
							commentCount={content[4].commentCount}
							starRating={content[4].starRating}
							branding={content[4].branding}
						/>
					</LI>
				</UL>
			</LI>
		</UL>
	</>
);
