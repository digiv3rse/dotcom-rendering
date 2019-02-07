import React from 'react';
import { css, cx } from 'emotion';
import { palette } from '@guardian/pasteup/palette';
import { headline, textSans } from '@guardian/pasteup/typography';

import { pillarMap, pillarPalette } from '@frontend/lib/pillars';

const pillarColours = pillarMap(
    pillar =>
        css`
            color: ${pillarPalette[pillar].main};
        `,
);

const subMetaLinksList = css`
    list-style: none;
`;

const subMetaSectionLinksList = css`
    line-height: 24px;
`;

const subMetaKeywordLinksList = css`
    line-height: 24px;
    padding-bottom: 12px;
    margin-bottom: 6px;
    border-bottom: 1px solid ${palette.neutral[86]};
`;

const subMetaLinksListItem = css`
    margin-right: 5px;
    display: inline-block;
    a {
        position: relative;
        display: block;
        padding-right: 5px;
        text-decoration: none;
    }
    a::after {
        content: '/';
        position: absolute;
        pointer-events: none;
        top: 0;
        right: -3px;
        color: ${palette.neutral[86]};
    }
    a:hover {
        text-decoration: underline;
    }
`;

const subMetaLink = css`
    text-decoration: none;
    :hover {
        text-decoration: underline;
    }
`;

const subMetaSectionLink = css`
    ${headline(2)};
`;

const subMetaKeywordLink = css`
    ${textSans(4)};
`;

const hideSlash = css`
    a::after {
        content: '';
    }
`;

export const SubMetaLinksList: React.FC<{
    links: SimpleLinkType[];
    isSectionLinkList: boolean;
    pillar: Pillar;
}> = ({ links, isSectionLinkList, pillar }) => (
    <ul
        className={cx(subMetaLinksList, [
            isSectionLinkList
                ? subMetaSectionLinksList
                : subMetaKeywordLinksList,
        ])}
    >
        {links.map((link, i) => (
            <li
                className={cx(
                    subMetaLinksListItem,
                    [
                        isSectionLinkList
                            ? subMetaSectionLink
                            : subMetaKeywordLink,
                    ],
                    {
                        [hideSlash]: i === links.length - 1,
                    },
                )}
                key={link.url}
            >
                <a
                    className={cx(subMetaLink, pillarColours[pillar])}
                    href={link.url}
                >
                    {link.title}
                </a>
            </li>
        ))}
    </ul>
);
