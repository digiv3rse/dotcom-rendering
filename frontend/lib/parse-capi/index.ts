import compose from 'compose-function';
import { string as curly } from 'curlyquotes';
import get from 'lodash.get';

import clean from './clean';
import bigBullets from './big-bullets';

const headline = compose(
    clean,
    curly,
);
const standfirst = compose(
    clean,
    bigBullets,
);
const main = clean;
const body = clean;

type props = {
    contentFields?: {};
    config?: {};
};

const defaultArgs = { config: {}, contentFields: {} };

// TODO: we shouldn't do any cleaning or data transformation here, but
// instead pass through the required data exactly. Dotcom Rendering
// should be just that - a rendering layer only.
//
// We *should* however validate the data we receive at this point.
const parse: (p: props) => { CAPI: CAPIType; NAV: NavType } = ({
    contentFields,
    config,
}: props = defaultArgs) => {
    const nav = get(config, 'nav', []);
    const pillars = nav.pillars
        ? nav.pillars.map((link: LinkType) => {
              const l = link;
              l.isPillar = true;
              return l;
          })
        : [];

    pillars.push({
        url: '', // unused
        title: 'More',
        longTitle: 'More',
        isPillar: false,
        children: nav.otherLinks,
    });

    nav.pillars = pillars;

    const webPublicationDate = get(config, 'page.webPublicationDate', '');

    return {
        // here we create our own object of CAPI content on the 'CAPI' key
        CAPI: {
            headline: headline(get(config, 'page.headline', '')),
            standfirst: standfirst(get(contentFields, 'fields.standfirst', '')),
            main: main(get(contentFields, 'fields.main', '')),
            author: get(config, 'page.author', ''),
            webPublicationDate: webPublicationDate
                ? new Date(webPublicationDate)
                : webPublicationDate,
            sectionName: get(config, 'page.sectionName', ''),
            body: body(
                get(contentFields, 'fields.blocks.body', [])
                    .map((block: { bodyHtml: string }) => block.bodyHtml)
                    .filter(Boolean)
                    .join(''),
            ),
        },
        NAV: nav,
    };
};

export default parse;
