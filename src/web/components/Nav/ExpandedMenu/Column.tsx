import React from 'react';
import { css, cx } from 'emotion';

import { visuallyHidden } from '@guardian/src-foundations/accessibility';
import { brand, brandText, brandAlt } from '@guardian/src-foundations/palette';
import { textSans } from '@guardian/src-foundations/typography';
import { from, until } from '@guardian/src-foundations/mq';

import { CollapseColumnButton } from './CollapseColumnButton';

// CSS vars
const pillarHeight = 42;

// CSS
export const hideDesktop = css`
    ${from.desktop} {
        display: none;
    }
`;

const pillarDivider = css`
    ${from.desktop} {
        :before {
            content: '';
            display: block;
            position: absolute;
            right: 0;
            top: 0;
            bottom: 0;
            width: 1px;
            background-color: ${brand[600]};
            z-index: 1;
        }
    }
`;

const pillarDividerExtended = css`
    ${from.desktop} {
        :before {
            top: -${pillarHeight}px;
        }
    }
`;

const columnLinkTitle = css`
    ${textSans.medium({ lineHeight: 'tight' })};
    background-color: transparent;
    text-decoration: none;
    border: 0;
    box-sizing: border-box;
    color: ${brandText.primary};
    cursor: pointer;
    display: inline-block;
    font-weight: 500;
    outline: none;
    padding: 8px 34px 8px 50px;
    position: relative;
    text-align: left;
    width: 100%;

    ${from.tablet} {
        padding-left: 60px;
    }

    ${from.desktop} {
        font-size: 16px;
        padding: 6px 0;
    }

    :hover,
    :focus {
        color: ${brandAlt[400]};
        text-decoration: underline;
    }

    > * {
        pointer-events: none;
    }
`;

const mainMenuLinkStyle = css`
    box-sizing: border-box;
    overflow: hidden;
    position: relative;
    width: 100%;
    ${from.desktop} {
        display: list-item;
    }
`;

const ColumnLink: React.FC<{
    link: LinkType;
}> = ({ link }) => (
    <li
        className={cx(mainMenuLinkStyle, {
            [hideDesktop]: !!link.mobileOnly,
        })}
        role="none"
    >
        <a
            className={cx(columnLinkTitle)}
            href={link.url}
            role="menuitem"
            data-link-name={`nav2 : secondary : ${link.longTitle}`}
        >
            {link.longTitle}
        </a>
    </li>
);

const columnLinks = css`
    ${textSans.medium()};
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin: 0;
    padding: 0 0 12px;
    position: relative;
    ${from.desktop} {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        order: 1;
        height: 100%;
        width: 100%;
        padding: 0 9px;
    }
`;

const firstColumnLinks = css`
    ${from.desktop} {
        padding-left: 0;
    }
`;

const pillarColumnLinks = css`
    ${until.tablet} {
        background: ${brand[300]};
    }
`;

const hideStyles = (CHECKBOX_ID: string) => css`
    ${`#${CHECKBOX_ID}:not(:checked) ~ & {
        display: none;
    }`}
`;

const ColumnLinks: React.FC<{
    column: LinkType;
    CHECKBOX_ID?: string;
    id: string;
    index?: number;
}> = ({ column, CHECKBOX_ID, id, index }) => {
    return (
        <ul
            className={cx(
                columnLinks,
                { [firstColumnLinks]: index === 0 },
                { [pillarColumnLinks]: !!column.pillar },
                CHECKBOX_ID && hideStyles(CHECKBOX_ID),
            )}
            // aria-expanded={showColumnLinks}
            role="menu"
            id={id}
        >
            {(column.children || []).map(link => (
                <ColumnLink link={link} key={link.title.toLowerCase()} />
            ))}
        </ul>
    );
};

const columnStyle = css`
    ${textSans.medium()};
    list-style: none;
    margin: 0;
    padding-bottom: 10px;
    position: relative;

    :after {
        background-color: ${brand[600]};
        top: 0;
        content: '';
        display: block;
        height: 1px;
        left: 50px;
        position: absolute;
        right: 0;
    }

    /* Remove the border from the top item on mobile */
    :first-of-type:after {
        content: none;
    }

    ${from.desktop} {
        width: 134px;
        float: left;
        position: relative;

        :after {
            content: none;
        }

        :first-of-type {
            width: 123px;
        }
    }
    ${from.leftCol} {
        width: 160px;

        :first-of-type {
            width: 150px;
        }
    }
`;

export const ReaderRevenueLinks: React.FC<{
    readerRevenueLinks: ReaderRevenuePositions;
}> = ({ readerRevenueLinks }) => {
    const links: LinkType[] = [
        {
            longTitle: 'Make a contribution',
            title: 'Make a contribution',
            mobileOnly: true,
            url: readerRevenueLinks.sideMenu.contribute,
        },
        {
            longTitle: 'Subscribe',
            title: 'Subscribe',
            mobileOnly: true,
            url: readerRevenueLinks.sideMenu.subscribe,
        },
    ];

    return (
        <ul className={cx(hideDesktop)}>
            {links.map(link => (
                <ColumnLink link={link} key={link.title.toLowerCase()} />
            ))}
        </ul>
    );
};

export const More: React.FC<{
    column: LinkType;
    brandExtensions: LinkType[];
}> = ({ column, brandExtensions }) => {
    const subNavId = `${column.title.toLowerCase()}Links`;
    // Add the brand extensions to 'more' on mobile.
    const more = {
        ...column,
        children: [
            ...brandExtensions.map(brandExtension => ({
                ...brandExtension,
                mobileOnly: true,
            })),
            ...(column.children || []),
        ],
    };
    return (
        <li
            className={cx(columnStyle, pillarDivider, pillarDividerExtended)}
            role="none"
        >
            <ColumnLinks column={more} id={subNavId} />
        </li>
    );
};

export const Column = ({
    column,
    index,
}: {
    column: PillarType;
    index: number;
}) => {
    const CHECKBOX_ID = `${column.title}-input`;
    return (
        <li className={cx(columnStyle, pillarDivider)} role="none">
            {/*
                IMPORTANT NOTE:
                It is important to have the input as the 1st sibling for NoJS to work
                as we use ~ to apply certain styles on checkbox checked and ~ can only
                apply to styles with elements that are preceded
            */}
            <input
                type="checkbox"
                className={css`
                    ${visuallyHidden};
                `}
                id={CHECKBOX_ID}
                // aria-controls={ariaControls}
                tabIndex={-1}
                key="OpenExpandedMenuCheckbox"
                role="menuitemcheckbox"
                aria-checked="false"
            />
            <CollapseColumnButton
                title={column.title}
                CHECKBOX_ID={CHECKBOX_ID}
                ariaControls={`${column.title.toLowerCase()}Links`}
            />

            <ColumnLinks
                column={column}
                CHECKBOX_ID={CHECKBOX_ID}
                id={`${column.title.toLowerCase()}Links`}
                index={index}
            />
        </li>
    );
};
