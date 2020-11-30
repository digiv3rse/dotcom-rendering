import React from 'react';
import { css } from 'emotion';

import { TextBlockComponent } from '@frontend/web/components/elements/TextBlockComponent';
import { Display } from '@root/src/lib/display';

const html =
    '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesquepharetra libero nec varius feugiat. Nulla commodo sagittis erat amalesuada. Ut iaculis interdum eros, et tristique ex. In veldignissim arcu. Nulla nisi urna, laoreet a aliquam at, viverra eueros. Proin imperdiet pellentesque turpis sed luctus. Donecdignissim lacus in risus fermentum maximus eu vel justo. Duis nontortor ac elit dapibus imperdiet ut at risus. Etiam pretium, odioeget accumsan venenatis, tortor mi aliquet nisl, vel ullamcorperneque nulla vel elit. Etiam porta mauris nec sagittis luctus.</p>';
const quotedHtml =
    '<p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesquepharetra libero nec varius feugiat. Nulla commodo sagittis erat amalesuada. Ut iaculis interdum eros, et tristique ex. In veldignissim arcu. Nulla nisi urna, laoreet a aliquam at, viverra eueros. Proin imperdiet pellentesque turpis sed luctus. Donecdignissim lacus in risus fermentum maximus eu vel justo. Duis nontortor ac elit dapibus imperdiet ut at risus. Etiam pretium, odioeget accumsan venenatis, tortor mi aliquet nisl, vel ullamcorperneque nulla vel elit. Etiam porta mauris nec sagittis luctus.</p>';
const shortHtml =
    'Since its arrival on Netflix last month, The Queen’s Gambit has attracted a staggering <a href="https://www.theguardian.com/tv-and-radio/2020/nov/26/the-queens-gambit-netflix-most-watched-series-hit-chess">62 million</a> viewers – making it the streaming service’s most-watched scripted limited series.';
const differentWrapperTags =
    '<span><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesquepharetra libero nec varius feugiat. Nulla commodo sagittis erat amalesuada. Ut iaculis interdum eros, et tristique ex. In veldignissim arcu. Nulla nisi urna, laoreet a aliquam at, viverra eueros. Proin imperdiet pellentesque turpis sed luctus. Donecdignissim lacus in risus fermentum maximus eu vel justo. Duis nontortor ac elit dapibus imperdiet ut at risus. Etiam pretium, odioeget accumsan venenatis, tortor mi aliquet nisl, vel ullamcorperneque nulla vel elit. Etiam porta mauris nec sagittis luctus.</p></span>';
const aListHtml =
    '<ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesquepharetra libero nec varius feugiat.</li><li>Nulla commodo sagittis erat amalesuada. Ut iaculis interdum eros, et tristique ex. In veldignissim arcu. Nulla nisi urna, laoreet a aliquam at, viverra eueros. Proin imperdiet pellentesque turpis sed luctus. Donecdignissim lacus in risus fermentum maximus eu vel justo. Duis nontortor ac elit dapibus imperdiet ut at risus. Etiam pretium, odioeget accumsan venenatis, tortor mi aliquet nisl, vel ullamcorperneque nulla vel elit. Etiam porta mauris nec sagittis luctus.</li></ul>';
const badMarkup =
    '<html>\n <head></head>\n <body>\n  <p>In its <a href="https://www.admiral.com/magazine/guides/home/the-jargon-free-guide-to-bicycle-insurance" title="">guide to protecting your bike</a>, the insurer Admiral cites the Kryptonite New York M18 U-lock as being good quality. It costs <a href="http://go.theguardian.com/?id=114047X1572903&amp;url=https%3A%2F%2Fwww.wiggle.co.uk%2Fkryptonite-new-york-m18-u-lock&amp;sref=https://www.theguardian.com/money/2020/jul/18/bike-theft-uk-cycle-sales-best-locks-insurance-bicycle.json?dcr" title="">£82.99 at Wiggle.co.uk</a>. Add a <a href="http://go.theguardian.com/?id=114047X1572903&amp;url=https%3A%2F%2Fwww.wiggle.co.uk%2Fkryptonite-kryptoflex-7-foot-cable-bike-lock%2F&amp;sref=https://www.theguardian.com/money/2020/jul/18/bike-theft-uk-cycle-sales-best-locks-insurance-bicycle.json?dcr" title="">cable</a> for another tenner, so you can loop it through the wheels and secure them, too.</p>\n </body>\n</html>';

const containerStyles = css`
    max-width: 620px;
    margin: 20px;
`;

export default {
    component: TextBlockComponent,
    title: 'Components/TextBlockComponent',
};

export const defaultStory = () => {
    return (
        <div className={containerStyles}>
            <TextBlockComponent
                html={html}
                pillar="news"
                designType="Article"
                display={Display.Standard}
                isFirstParagraph={false}
            />
        </div>
    );
};
defaultStory.story = { name: 'default' };

export const DropCap = () => {
    return (
        <div className={containerStyles}>
            <TextBlockComponent
                html={html}
                pillar="culture"
                forceDropCap={true}
                designType="Article"
                display={Display.Immersive}
                isFirstParagraph={false}
            />
        </div>
    );
};
DropCap.story = { name: 'with drop cap' };

export const QuotedDropCap = () => {
    return (
        <div className={containerStyles}>
            <TextBlockComponent
                html={quotedHtml}
                pillar="opinion"
                forceDropCap={false}
                designType="Comment"
                display={Display.Standard}
                isFirstParagraph={true}
            />
        </div>
    );
};
QuotedDropCap.story = { name: 'with quoted drop cap' };

export const ShortText = () => {
    return (
        <div className={containerStyles}>
            <TextBlockComponent
                html={shortHtml}
                pillar="news"
                forceDropCap={true}
                designType="Article"
                display={Display.Standard}
                isFirstParagraph={false}
            />
        </div>
    );
};
ShortText.story = { name: 'with text less than 200 characters' };

export const NoTags = () => {
    return (
        <div className={containerStyles}>
            <TextBlockComponent
                html={differentWrapperTags}
                pillar="news"
                forceDropCap={true}
                designType="Article"
                display={Display.Standard}
                isFirstParagraph={false}
            />
        </div>
    );
};
NoTags.story = { name: 'with no p tags' };

export const FeatureDropCap = () => {
    return (
        <div className={containerStyles}>
            <TextBlockComponent
                html={html}
                pillar="culture"
                forceDropCap={false}
                designType="Feature"
                display={Display.Standard}
                isFirstParagraph={true}
            />
        </div>
    );
};
FeatureDropCap.story = { name: 'with designType of Feature' };

export const AList = () => {
    return (
        <div className={containerStyles}>
            <TextBlockComponent
                html={aListHtml}
                pillar="news"
                forceDropCap={true}
                designType="Article"
                display={Display.Standard}
                isFirstParagraph={false}
            />
        </div>
    );
};
AList.story = { name: 'with a list' };

export const BadMarkup = () => {
    return (
        <div className={containerStyles}>
            <TextBlockComponent
                html={badMarkup}
                pillar="news"
                forceDropCap={false}
                designType="Article"
                display={Display.Standard}
                isFirstParagraph={false}
            />
        </div>
    );
};
BadMarkup.story = { name: 'with a bad markup' };

export const SubSupscript = () => {
    return (
        <div className={containerStyles}>
            <TextBlockComponent
                html={
                    '<p><strong>P<sub>kj</sub> = (1-r<sub>j</sub>)C<sup>kj</sup> + r<sub>j</sub>(C<sub>kj</sub> + q<sub>kj</sub> - p<sub>kj</sub>)</strong></p><p><var>a<sup>2</sup></var> + <var>b<sup>2</sup></var> = <var>c<sup>2</sup></var></p>'
                }
                pillar="news"
                forceDropCap={false}
                designType="Article"
                display={Display.Standard}
                isFirstParagraph={false}
            />
        </div>
    );
};
SubSupscript.story = { name: 'with a sub and sup' };
