/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { css } from 'emotion';

import { ContainerLayout } from '@frontend/web/components/ContainerLayout';
import { Section } from '@frontend/web/components/Section';
import { Header } from '@frontend/web/components/Header';
import { Footer } from '@frontend/web/components/Footer';
import { UL } from '@frontend/web/components/Card/components/UL';
import { LI } from '@frontend/web/components/Card/components/LI';
import { GuardianLines } from '@root/src/web/components/GuardianLines';
import { Nav } from '@root/src/web/components/Nav/Nav';

import { Display } from '@root/src/lib/display';

import {
    brandBorder,
    brandBackground,
    brandLine,
    background,
    neutral,
} from '@guardian/src-foundations/palette';
import { headline } from '@guardian/src-foundations/typography';

import { NAV, pageFooter } from './Example.mocks';

const Grey = ({
    heightInPixels = 400,
    padded = true,
}: {
    heightInPixels?: number;
    padded?: boolean;
}) => (
    <div
        className={css`
            background-color: ${neutral[93]};
            width: 100%;
            height: ${heightInPixels}px;
            margin: ${padded && '10px'};
        `}
    />
);

const Author = () => (
    <div
        className={css`
            padding-top: 0.25rem;
            padding-bottom: 0.75rem;
            border-top: 0.0625rem solid ${neutral[93]};
            ${headline.xxxsmall({ fontWeight: 'bold' })}
        `}
    >
        Jane Doe
    </div>
);

export default {
    title: 'Examples/Writers',
    parameters: {
        viewport: {
            // This has the effect of turning off the viewports addon by default
            defaultViewport: 'doesNotExist',
        },
        chromatic: {
            disable: true,
        },
    },
};

export const Writers = () => (
    <>
        <Section
            showTopBorder={false}
            showSideBorders={true}
            borderColour={brandLine.primary}
            padded={false}
            backgroundColour={brandBackground.primary}
        >
            <Header edition="UK" />
        </Section>
        <Section
            showSideBorders={true}
            borderColour={brandLine.primary}
            showTopBorder={false}
            padded={false}
            backgroundColour={brandBackground.primary}
        >
            <Nav
                pillar="news"
                nav={NAV}
                display={Display.Standard}
                subscribeUrl=""
                edition="UK"
            />
        </Section>
        <Section
            backgroundColour={background.primary}
            padded={false}
            showTopBorder={false}
            showSideBorders={true}
        >
            <GuardianLines count={4} pillar="news" />
        </Section>
        <ContainerLayout
            showTopBorder={false}
            title="Columnists"
            sideBorders={true}
            padContent={false}
        >
            <>
                <UL direction="row" bottomMargin={true}>
                    <LI padSides={true}>
                        <Grey padded={false} heightInPixels={230} />
                    </LI>
                    <LI padSides={true} showDivider={true}>
                        <Grey padded={false} heightInPixels={230} />
                    </LI>
                    <LI padSides={true} showDivider={true}>
                        <Grey padded={false} heightInPixels={230} />
                    </LI>
                    <LI padSides={true} showDivider={true}>
                        <Grey padded={false} heightInPixels={230} />
                    </LI>
                </UL>
                <UL direction="row">
                    <LI padSides={true}>
                        <Grey padded={false} heightInPixels={70} />
                    </LI>
                    <LI padSides={true} showDivider={true}>
                        <Grey padded={false} heightInPixels={70} />
                    </LI>
                    <LI padSides={true} showDivider={true}>
                        <Grey padded={false} heightInPixels={70} />
                    </LI>
                    <LI padSides={true} showDivider={true}>
                        <Grey padded={false} heightInPixels={70} />
                    </LI>
                </UL>
            </>
        </ContainerLayout>
        <ContainerLayout
            showTopBorder={true}
            title="News"
            sideBorders={true}
            centralBorder="partial"
            padContent={false}
        >
            <UL direction="row">
                <LI percentage="25%">
                    <UL direction="column">
                        <LI padSides={true}>
                            <Author />
                        </LI>
                        <LI padSides={true}>
                            <Author />
                        </LI>
                        <LI padSides={true}>
                            <Author />
                        </LI>
                        <LI padSides={true}>
                            <Author />
                        </LI>
                    </UL>
                </LI>
                <LI percentage="25%">
                    <UL direction="column" showDivider={true}>
                        <LI padSides={true}>
                            <Author />
                        </LI>
                        <LI padSides={true}>
                            <Author />
                        </LI>
                        <LI padSides={true}>
                            <Author />
                        </LI>
                        <LI padSides={true}>
                            <Author />
                        </LI>
                    </UL>
                </LI>
                <LI percentage="25%">
                    <UL direction="column" showDivider={true}>
                        <LI padSides={true}>
                            <Author />
                        </LI>
                        <LI padSides={true}>
                            <Author />
                        </LI>
                        <LI padSides={true}>
                            <Author />
                        </LI>
                        <LI padSides={true}>
                            <Author />
                        </LI>
                    </UL>
                </LI>
                <LI percentage="25%">
                    <UL direction="column" showDivider={true}>
                        <LI padSides={true}>
                            <Author />
                        </LI>
                        <LI padSides={true}>
                            <Author />
                        </LI>
                        <LI padSides={true}>
                            <Author />
                        </LI>
                        <LI padSides={true}>
                            <Author />
                        </LI>
                    </UL>
                </LI>
            </UL>
        </ContainerLayout>
        <ContainerLayout
            showTopBorder={true}
            title="Film"
            sideBorders={true}
            centralBorder="partial"
            padContent={false}
        >
            <UL direction="row">
                <LI percentage="25%">
                    <UL direction="column">
                        <LI padSides={true}>
                            <Author />
                        </LI>
                        <LI padSides={true}>
                            <Author />
                        </LI>
                    </UL>
                </LI>
                <LI percentage="25%">
                    <UL direction="column" showDivider={true}>
                        <LI padSides={true}>
                            <Author />
                        </LI>
                        <LI padSides={true}>
                            <Author />
                        </LI>
                    </UL>
                </LI>
                <LI percentage="25%">
                    <UL direction="column" showDivider={true}>
                        <LI padSides={true}>
                            <Author />
                        </LI>
                    </UL>
                </LI>
            </UL>
        </ContainerLayout>
        <Section
            backgroundColour={background.primary}
            padded={false}
            showTopBorder={false}
        >
            <GuardianLines count={4} pillar="news" />
        </Section>
        <Section
            padded={false}
            backgroundColour={brandBackground.primary}
            borderColour={brandBorder.primary}
            showSideBorders={false}
        >
            <Footer
                pageFooter={pageFooter}
                pillar="news"
                pillars={NAV.pillars}
            />
        </Section>
    </>
);
Writers.story = { name: 'Example writers page' };
