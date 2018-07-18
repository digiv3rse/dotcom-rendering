// @flow

/* eslint-disable react/no-danger */

import { styled } from '@guardian/guui';
import { Row, Cols } from '@guardian/guui/grid';
import { textEgyptian, headline } from '@guardian/pasteup/fonts';
import palette from '@guardian/pasteup/palette';
import { clearFix } from '@guardian/pasteup/mixins';

import Page from '../components/Page';
import Main from '../components/Main';
import MostViewed from '../components/MostViewed';
import Header from '../components/Header';
import Epic from '../components/Epic';
import { CapiComponent } from '../components/CapiComponent';

const HeadlineStyled = styled('h1')({
    fontFamily: headline,
    fontSize: 34,
    lineHeight: 1.1,
    fontWeight: 700,
    color: palette.red.dark,
    paddingBottom: 36,
    paddingTop: 3,
});
const Headline = CapiComponent(HeadlineStyled, 'headline');

const BodyStyled = styled('section')({
    p: {
        fontFamily: textEgyptian,
        lineHeight: 1.4,
        marginBottom: '1rem',
        color: palette.neutral[1],
    },
    h2: {
        fontFamily: headline,
        color: palette.neutral[1],
        fontSize: 20,
        lineHeight: 1.2,
        fontWeight: 900,
        marginTop: 27,
        marginBottom: 1,
    },
    '.gu-video': {
        maxWidth: '100%',
    },
});
const Body = CapiComponent(BodyStyled, 'body');

const StandfirstStyled = styled('p')({
    color: palette.neutral[1],
    fontFamily: textEgyptian,
    fontSize: 20,
    fontWeight: 100,
    lineHeight: 1.2,
    marginBottom: 12,
    maxWidth: 540,
    paddingTop: 2,

    a: {
        color: palette.red.dark,
        textDecoration: 'none',
        borderBottomWidth: 1,
        borderBottomStyle: 'solid',
        borderBottomColor: palette.neutral[5],
    },

    '.bullet': {
        color: 'transparent',
        height: '0.75em',
        width: '0.75em',
        borderRadius: '50%',
        marginRight: 2,
        backgroundColor: palette.red.dark,
        display: 'inline-block',
        lineHeight: 0.8,
    },
});
const Standfirst = CapiComponent(StandfirstStyled, 'standfirst');

const Labels = styled('div')({ ...clearFix, paddingTop: 6 });

const SectionLabel = styled('div')({
    color: palette.red.dark,
    fontFamily: textEgyptian,
    fontWeight: 900,
    paddingRight: 6,
    float: 'left',
});

const SeriesLabel = styled(SectionLabel)({
    fontSize: 15,
    fontWeight: 500,
});

export default () => (
    <Page>
        <Header />
        <Main>
            <article>
                <Row>
                    <Cols wide={3} leftCol={2}>
                        <Labels>
                            <SectionLabel>The NSA files</SectionLabel>
                            <SeriesLabel>
                                Glenn Greenwald on security and liberty
                            </SeriesLabel>
                        </Labels>
                    </Cols>
                    <Cols wide={13} leftCol={12}>
                        <Headline />
                        <Standfirst />
                    </Cols>
                </Row>
                <Body />
                <MostViewed />
                <Epic>
                    <strong>
                        Unlike many news organisations, we haven’t put up a
                        paywall – we want to keep our journalism as open as we
                        can.
                    </strong>{' '}
                    The Guardian’s independent, investigative journalism takes a
                    lot of time, money and hard work to produce. But the revenue
                    we get from advertising is falling, so we increasingly need
                    our readers to fund us. If everyone who reads our reporting,
                    who likes it, helps fund it, our future would be much more
                    secure.{' '}
                    <strong>
                        Support The Guardian for just 17p a day or £5 a month.
                    </strong>
                </Epic>
            </article>
        </Main>
    </Page>
);
