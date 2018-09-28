import compose from 'compose-function';
import { string as curly } from 'curlyquotes';
import get from 'lodash.get';

import clean from './clean';
import bigBullets from './big-bullets';
import { pillarNames } from '../../pillars';
import { getSharingUrls } from './sharing-urls';

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

const defaultArgs = { config: {}, contentFields: {} };

// tslint:disable:prefer-array-literal
const apply = (input: string, ...fns: Array<(_: string) => string>): string => {
    return fns.reduce((acc, fn) => fn(acc), input);
};

const getString = (
    obj: object,
    selector: string,
    fallbackValue?: string,
): string => {
    const found = get(obj, selector);
    if (typeof found === 'string') {
        return found;
    }
    if (fallbackValue !== undefined) {
        return fallbackValue;
    }

    throw new Error(
        `expected string at '${selector}', got '${found}', in '${JSON.stringify(
            obj,
        )}'`,
    );
};

const getNumber = (obj: object, selector: string): number => {
    const found = get(obj, selector);
    if (typeof found === 'number') {
        return found;
    }

    throw new Error(
        `expected number at '${selector}', got '${found}', in '${JSON.stringify(
            obj,
        )}'`,
    );
};

// TODO temporary export we should move all validation functions into their own module
export const getNonEmptyString = (obj: object, selector: string): string => {
    const found = get(obj, selector);
    if (typeof found === 'string' && found.length > 0) {
        return found;
    }

    throw new Error(
        `expected non-empty string at '${selector}', got '${found}', in '${JSON.stringify(
            obj,
        )}'`,
    );
};

const getArray = <T>(
    obj: object,
    selector: string,
    fallbackValue?: T[],
): T[] => {
    const found = get(obj, selector);
    if (Array.isArray(found)) {
        return found;
    }
    if (fallbackValue !== undefined) {
        return fallbackValue;
    }

    throw new Error(
        `expected array at '${selector}', got '${found}', in '${JSON.stringify(
            obj,
        )}'`,
    );
};

const findPillar: (name: string) => Pillar | undefined = name => {
    const pillar: string = name.toLowerCase();
    return pillarNames.find(_ => _ === pillar);
};

const getLink = (data: {}, { isPillar }: { isPillar: boolean }): LinkType => ({
    title: getString(data, 'title'),
    longTitle: getString(data, 'longTitle'),
    url: getString(data, 'url'),
    pillar: isPillar ? findPillar(getString(data, 'title')) : undefined,
    children: getArray<object>(data, 'children', []).map(
        l => getLink(l, { isPillar: false }), // children are never pillars
    ),
    mobileOnly: false,
});

const getAgeWarning = (webPublicationDate: Date): string | undefined => {
    const warnLimitDays = 30;
    const currentDate = new Date();
    const dateThreshold = new Date();

    dateThreshold.setDate(currentDate.getDate() - warnLimitDays);

    const publicationDate = new Date(webPublicationDate);

    // if the publication date is before the date threshold generate message
    if (publicationDate < dateThreshold) {
        // Unary + coerces dates to numbers for TypeScript
        const diffMilliseconds = +currentDate - +publicationDate;
        const diffSeconds = Math.floor(diffMilliseconds / 1000);
        const diffMinutes = diffSeconds / 60;
        const diffHours = diffMinutes / 60;
        const diffDays = diffHours / 24;
        const diffMonths = diffDays / 31;
        const diffYears = diffDays / 365;

        const message = 'This article is over';

        if (diffYears >= 2) {
            return `${message} ${Math.floor(diffYears)} years old`;
        }

        if (diffYears > 1) {
            return `${message} 1 year old`;
        }

        if (diffMonths >= 2) {
            return `${message} ${Math.floor(diffMonths)} months old`;
        }

        if (diffMonths > 1) {
            return `${message} 1 month old`;
        }
    }
    return undefined;
};

// TODO really it would be nice if we passed just the data we needed and
// didn't have to do the transforms/lookups below. (While preserving the
// validation on types.)
export const extractArticleMeta = (data: {}): CAPIType => {
    const webPublicationDate = new Date(
        getNumber(data, 'config.page.webPublicationDate'),
    );

    const tags = getArray<TagType>(data, 'tags.tags');
    const leadContributor: TagType = tags.filter(
        tag => tag.properties.tagType === 'Contributor',
    )[0];

    return {
        webPublicationDate,
        tags,
        headline: apply(
            getNonEmptyString(data, 'config.page.headline'),
            clean,
            curly,
        ),
        standfirst: apply(
            getString(data, 'contentFields.fields.standfirst', ''),
            clean,
            bigBullets,
        ),
        main: apply(getString(data, 'contentFields.fields.main', ''), clean),
        body: getArray<any>(data, 'contentFields.fields.blocks.body')
            .map(block => block.bodyHtml)
            .filter(Boolean)
            .join(''),
        author: {
            byline: getString(data, 'config.page.byline', ''),
            twitterHandle: leadContributor
                ? leadContributor.properties.twitterHandle
                : undefined,
            email: leadContributor
                ? leadContributor.properties.emailAddress
                : undefined,
        },

        sectionName: getNonEmptyString(data, 'config.page.section'),
        pageId: getNonEmptyString(data, 'config.page.pageId'),
        sharingUrls: getSharingUrls(data),
        pillar:
            findPillar(getNonEmptyString(data, 'config.page.pillar')) || 'news',
        ageWarning: getAgeWarning(webPublicationDate),
    };
};

export const extractNavMeta = (data: {}): NavType => {
    let pillars = getArray<any>(data, 'config.nav.pillars');

    pillars = pillars.map(link => getLink(link, { isPillar: true }));

    const subnav = get(data, 'config.nav.subNavSections');

    return {
        pillars,
        otherLinks: {
            url: '', // unused
            title: 'More',
            longTitle: 'More',
            more: true,
            children: getArray<object>(data, 'config.nav.otherLinks', []).map(
                l => getLink(l, { isPillar: false }),
            ),
        },
        brandExtensions: getArray<object>(
            data,
            'config.nav.brandExtensions',
            [],
        ).map(l => getLink(l, { isPillar: false })),
        subNavSections: subnav
            ? {
                  parent: subnav.parent
                      ? getLink(subnav.parent, { isPillar: false })
                      : undefined,
                  links: getArray<object>(subnav, 'links').map(l =>
                      getLink(l, { isPillar: false }),
                  ),
              }
            : undefined,
    };
};

export const extractConfigMeta = (data: {}): ConfigType => {
    return {
        ajaxUrl: getNonEmptyString(data, 'config.page.ajaxUrl'),
    };
};
