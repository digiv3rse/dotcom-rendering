/* eslint-disable react/no-danger */
import React from 'react';
import { Container } from '@guardian/guui';
import { css } from 'react-emotion';
import palette from '@guardian/pasteup/palette';
import { desktop } from '@guardian/pasteup/breakpoints';

import MostViewed from '../components/MostViewed';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ArticleBody from '../components/ArticleBody';
import { Data } from '../App';

const articleWrapper = css`
    background-color: rgba(18, 18, 18, 0.05);

    :before {
        background-image: repeating-linear-gradient(
            to bottom,
            ${palette.neutral[5]},
            ${palette.neutral[5]} 1px,
            transparent 1px,
            transparent 4px
        );
        background-repeat: repeat-x;
        background-position: bottom;
        background-size: 1px 13px;
        background-color: ${palette.neutral[8]};
        content: '';
        display: block;
        height: 13px;
    }
`;

const secondaryColumn = css`
    position: absolute;
    top: 0;
    right: 0;
    margin-right: 20px;
    width: 300px;
    margin-left: 20px;
    margin-top: 6px;

    background-color: ${palette.neutral[6]};
    min-height: 300px;
    display: none;

    ${desktop} {
        display: block;
    }
`;

const articleContainer = css`
    position: relative;
    background-color: ${palette.neutral[8]};
    padding: 0 20px;
`;

const Article: React.SFC<{
    data: Data;
}> = ({ data }) => (
    <div>
        <Header nav={data.NAV} />
        <main className={articleWrapper}>
            <Container className={articleContainer}>
                <article>
                    <ArticleBody CAPI={data.CAPI} />
                    <div className={secondaryColumn} />

                    <MostViewed />
                </article>
            </Container>
        </main>
        <Footer />
    </div>
);

export default Article;
