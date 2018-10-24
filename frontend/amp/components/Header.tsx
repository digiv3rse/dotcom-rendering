import React from 'react';
import { css, cx } from 'react-emotion';
import Logo from '@guardian/pasteup/logos/the-guardian.svg';
import { screenReaderOnly } from '@guardian/pasteup/mixins';
import { serif } from '@guardian/pasteup/fonts';
import { pillarMap, pillarPalette } from '../../lib/pillars';
import Sidebar from './Sidebar';
import ArrowRight from '@guardian/pasteup/icons/arrow-right.svg';
import { palette } from '@guardian/pasteup/palette';

const headerStyles = css`
    border-bottom: 1px solid #dcdcdc;
    background-color: #052962;
`;

const row = css`
    display: flex;
    justify-content: space-between;
    position: relative;
`;

const supportStyles = css`
    align-self: flex-start;
    position: relative;
    margin-left: 20px;
    margin-top: 20px;
    background-color: ${palette.highlight.main};
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 15px;
    min-height: 30px;
`;

const supportLinkStyles = css`
    position: relative;
    color: ${palette.neutral[7]};
    font-size: 16px;
    font-weight: 700;
    display: block;
    text-decoration: none;
    font-family: ${serif.body};
    padding-right: 20px;

    svg {
        position: absolute;
        top: -6px;
    }
`;

const logoStyles = css`
    align-self: flex-start;
    height: 57px;
    width: 175px;
    margin-top: 3px;
    margin-right: 20px;
    margin-bottom: 35px;

    path {
        fill: white;
    }
`;

const pillarUnderline = pillarMap(
    pillar => css`
        :after {
            transform: translateY(4px);
        }
    `,
);

const pillarListStyles = css`
    list-style: none;
    line-height: 0;
`;

const pillarListItemStyle = css`
    display: inline-block;

    :first-child {
        margin-left: 20px;

        a {
            padding-left: 0;

            :before {
                display: none;
            }
        }
    }
`;

const pillarLinkStyle = (pillar: Pillar) => css`
    font-family: ${serif.headline};
    font-weight: 700;
    text-decoration: none;
    cursor: pointer;
    display: block;
    font-size: 20px;
    height: 36px;
    line-height: 1;
    padding: 4px 4px;
    color: white;
    position: relative;
    overflow: hidden;

    :hover {
        ${pillarUnderline[pillar]};
    }

    :before {
        border-left: 1px solid rgba(255, 255, 255, 0.3);
        top: 0;
        z-index: 1;
        content: '';
        display: block;
        left: 0;
        position: absolute;
        bottom: 0;
    }

    :after {
        content: '';
        display: block;
        top: -4px;
        left: 0;
        right: 0;
        position: absolute;
        border-top: 4px solid ${pillarPalette[pillar].dark};
        transition: transform 0.3s ease-in-out;
    }
`;

const veggieStyles = css`
    background-color: ${palette.highlight.main};
    color: ${palette.neutral[97]};
    height: 42px;
    min-width: 42px;
    border: 0;
    border-radius: 50%;
    outline: none;
    z-index: 1;
    bottom: -3px;
    right: 20px;
    position: absolute;
`;

const lineStyles = css`
    height: 2px;
    position: absolute;
    width: 20px;
    background-color: black;
`;

const pattyStyles = css`
    left: 11px;

    ${lineStyles};

    :before {
        content: '';
        top: -6px;
        left: 0;
        ${lineStyles};
    }

    :after {
        content: '';
        top: 6px;
        left: 0;
        ${lineStyles};
    }
`;

const navRow = css`
    border-top: 1px solid rgba(255, 255, 255, 0.3);
`;

const pillarLinks = (pillars: PillarType[], activePillar: Pillar) => (
    <nav>
        <ul className={pillarListStyles}>
            {pillars.map((p, i) => (
                <li className={pillarListItemStyle} key={p.title}>
                    <a
                        className={cx(pillarLinkStyle(p.pillar), {
                            [pillarUnderline[p.pillar]]:
                                p.pillar === activePillar,
                        })}
                        href={p.url}
                    >
                        {p.title}
                    </a>
                </li>
            ))}
        </ul>
    </nav>
);

const supportLink =
    'https://support.theguardian.com/?INTCMP=header_support&acquisitionData=%7B%22source%22:%22GUARDIAN_WEB%22,%22componentType%22:%22ACQUISITIONS_HEADER%22,%22componentId%22:%22header_support%22%7D';

const Header: React.SFC<{ nav: NavType; activePillar: Pillar }> = ({
    nav,
    activePillar,
}) => (
    <header className={headerStyles}>
        <div className={row}>
            <div className={supportStyles}>
                <a className={supportLinkStyles} href={supportLink}>
                    Support us
                    <ArrowRight />
                </a>
            </div>

            <a className={logoStyles} href="/">
                <span
                    className={css`
                        ${screenReaderOnly};
                    `}
                >
                    The Guardian - Back to home
                </span>
                <Logo className={logoStyles} />
            </a>
        </div>

        <div className={cx(row, navRow)}>
            {pillarLinks(nav.pillars, activePillar)}

            <button className={veggieStyles} on="tap:sidebar1.toggle">
                <span className={pattyStyles} />
            </button>
        </div>

        <Sidebar nav={nav} />
    </header>
);

export default Header;
