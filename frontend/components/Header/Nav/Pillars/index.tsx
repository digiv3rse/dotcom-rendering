import React from 'react';
import { css, cx } from 'react-emotion';

import {
    tablet,
    desktop,
    leftCol,
    mobileLandscape,
} from '@guardian/pasteup/breakpoints';

import { serif } from '@guardian/pasteup/fonts';
import { pillarMap, pillarPalette } from '../../../../pillars';
import { palette } from '@guardian/pasteup/palette';

const pillarColours = pillarMap(
    pillar =>
        css`
            color: ${pillarPalette[pillar].main};
        `,
);

const pillarsStyles = css`
    clear: right;
    margin: 0;
    list-style: none;
    list-style-image: none;
    padding-left: 10px;
    ${mobileLandscape} {
        padding-left: 20px;
    }
    li {
        float: left;
        ${desktop} {
            width: 118px;
            position: relative;
            :after {
                content: '';
                display: block;
                position: absolute;
                right: 0;
                top: 0;
                bottom: 0;
                width: 1px;
                background-color: ${palette.neutral[86]};
            }
        }
        ${leftCol} {
            width: 140px;
        }
    }
`;

const showMenuUnderline = css`
    :hover {
        text-decoration: underline;
    }
`;

const pillarStyle = css`
    & :first-child > a {
        padding-left: 0;
    }
`;

const linkStyle = css`
    font-family: ${serif.headline};
    font-weight: 700;
    text-decoration: none;
    cursor: pointer;
    display: block;
    font-size: 15.4px;
    height: 30px;
    line-height: 1;
    padding: 0 4px;
    position: relative;
    overflow: hidden;
    ${tablet} {
        font-size: 22px;
        height: 42px;
        padding-right: 20px;
        padding-left: 5px;
    }
    ${desktop} {
        height: 48px;
    }
    :after {
        content: '';
        display: block;
        left: 0;
        position: absolute;
        border-bottom: 4px solid currentColor;
        right: 0;
        bottom: -4px;
        transition: transform 150ms ease-out;
    }
    :focus:after {
        transform: translateY(-4px);
    }
    :hover {
        text-decoration: none;
    }
    :hover:after {
        transform: translateY(-4px);
    }
`;

const Pillars: React.SFC<{
    showMainMenu: boolean;
    pillars: PillarType[];
}> = ({ showMainMenu, pillars }) => (
    <ul className={pillarsStyles}>
        {pillars.map(pillar => (
            <li key={pillar.title} className={pillarStyle}>
                <a
                    className={cx(linkStyle, pillarColours[pillar.pillar], {
                        showMenuUnderline: showMainMenu,
                    })}
                    href={pillar.url}
                >
                    {pillar.title}
                </a>
            </li>
        ))}
    </ul>
);
export default Pillars;
