// ----- Imports ----- //

import React, { ReactNode } from 'react';

import HeaderImage from 'components/shared/headerImage';
import ArticleSeries from 'components/shared/articleSeries';
import ArticleHeadline from 'components/standard/headline';
import ArticleStandfirst from 'components/standard/standfirst';
import ArticleByline from 'components/standard/byline';
import { CommentCount } from 'components/shared/commentCount'
import ArticleBody from 'components/shared/articleBody';
import Tags from 'components/shared/tags';
import { Content } from 'capiThriftModels';
import { darkModeCss, articleWidthStyles } from 'styles';
import { palette } from '@guardian/src-foundations';
import { from, breakpoints } from '@guardian/src-foundations/mq';
import { css } from '@emotion/core';
import { Keyline } from 'components/shared/keyline';
import { articleSeries, articleContributors, articleMainImage } from 'capi';
import { getPillarStyles } from 'pillar';
import { Layout, Article } from 'article';


// ----- Component ----- //

export interface ArticleProps {
    capi: Content;
    imageSalt: string;
    article: Article;
    children: ReactNode[];
}

const MainStyles = css`
    background: ${palette.neutral[97]};
`;

const MainDarkStyles = darkModeCss`
    background: ${palette.neutral.darkMode};
`;

const BorderStyles = css`
    background: ${palette.neutral[100]};
    ${darkModeCss`background: ${palette.neutral.darkMode};`}

    ${from.wide} {
        width: ${breakpoints.wide}px;
        margin: 0 auto;
    }
`;

const HeaderImageStyles = css`
    figure {
        margin: 0;

        ${from.wide} {
            margin: 0 auto;
        }
    }
`;

const Article = ({ capi, imageSalt, article, children }: ArticleProps): JSX.Element => {

    const { fields, tags, webPublicationDate } = capi;
    const series = articleSeries(capi);
    const feature = article.layout === Layout.Feature || article.layout === Layout.Review;
    const pillarStyles = getPillarStyles(article.pillar);
    const contributors = articleContributors(capi);
    const mainImage = articleMainImage(capi);

    return (
        <main css={[MainStyles, MainDarkStyles]}>
            <article css={BorderStyles}>
                <header>
                    <HeaderImage
                        image={mainImage}
                        imageSalt={imageSalt}
                        className={HeaderImageStyles}
                    />
                    <div css={articleWidthStyles}>
                        <ArticleSeries series={series} pillarStyles={pillarStyles}/>
                        <ArticleHeadline
                            headline={fields.headline}
                            article={article}
                            rating={String(fields.starRating)}
                        />
                        <ArticleStandfirst
                            standfirst={fields.standfirst}
                            feature={feature}
                            pillarStyles={pillarStyles}
                            className={articleWidthStyles}
                        />
                    </div>
                    <Keyline article={article}/>
                    <section css={articleWidthStyles}>
                        <ArticleByline
                            byline={fields.bylineHtml}
                            pillarStyles={pillarStyles}
                            publicationDate={webPublicationDate}
                            contributors={contributors}
                            imageSalt={imageSalt}
                        />
                        {fields.commentable
                                ? <CommentCount count={0} colour={pillarStyles.kicker}/>
                                : null}
                    </section>
                </header>
                <ArticleBody pillarStyles={pillarStyles} className={[articleWidthStyles]}>
                    {children}
                </ArticleBody>
                <footer css={articleWidthStyles}>
                    <Tags tags={tags}/>
                </footer>
            </article>
        </main>
    );
}


// ----- Exports ----- //

export default Article;
