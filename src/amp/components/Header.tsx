import React from 'react';
import { css, cx } from 'emotion';
import Logo from '@frontend/static/logos/the-guardian.svg';
import { pillarPalette } from '@root/src/lib/pillars';
import { palette } from '@guardian/src-foundations';
import { headline } from '@guardian/src-foundations/typography';
import { from, until } from '@guardian/src-foundations/mq';
import { visuallyHidden } from '@guardian/src-foundations/accessibility';
import { ReaderRevenueButton } from '@root/src/amp/components/ReaderRevenueButton';

const headerStyles = css`
    background-color: ${palette.brand.main};
`;

const row = css`
    display: flex;
    justify-content: space-between;
    position: relative;
`;

const logoStyles = css`
    align-self: flex-start;
    height: 57px;
    width: 175px;
    margin-top: 3px;
    margin-right: 20px;
    margin-bottom: 35px;

    path {
        fill: ${palette.neutral[100]};
    }

    ${until.mobileMedium} {
        height: 44px;
        width: 135px;
        margin-bottom: 24px;
        margin-right: 52px;
        margin-top: 9px;
    }
`;

const pillarListStyles = css`
    list-style: none;
    /* Design System: This override is needed because the line height changes the layout*/
    line-height: 0;
`;

const pillarListItemStyle = css`
    display: inline-block;

    :first-of-type {
        a {
            padding-left: 20px;

            :before {
                display: none;
            }
        }

        ${until.mobileLandscape} {
            a {
                padding-left: 10px;
            }
        }
    }
`;

const pillarLinkStyle = (pillar: Pillar) => css`
    text-decoration: none;
    cursor: pointer;
    display: block;
    ${headline.xxxsmall()};
    height: 36px;
    padding: 9px 4px;
    color: ${palette.neutral[100]};
    position: relative;
    overflow: hidden;

    font-weight: 900;
    font-size: 15.4px;

    ${from.mobileLandscape} {
        font-size: 18px;
        padding: 7px 4px 0;
    }

    :hover {
        text-decoration: underline;
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
        top: 0;
        left: 0;
        right: 0;
        position: absolute;
        border-top: 4px solid ${pillarPalette[pillar].bright};
        transition: transform 0.3s ease-in-out;
    }
`;

const veggieStyles = css`
    background-color: ${palette.brandYellow.main};
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

    ${until.mobileMedium} {
        bottom: 50px;
    }

    ${until.mobileLandscape} {
        right: 5px;
    }
`;

const lineStyles = css`
    height: 2px;
    position: absolute;
    width: 20px;
    background-color: ${palette.neutral[7]};
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

const pillarLinks = (pillars: PillarType[], guardianBaseURL: string) => (
    <nav>
        <ul className={pillarListStyles}>
            {pillars.map(p => (
                <li className={pillarListItemStyle} key={p.title}>
                    <a
                        className={pillarLinkStyle(p.pillar)}
                        href={`${guardianBaseURL}${p.url}`}
                    >
                        {p.title}
                    </a>
                </li>
            ))}
        </ul>
    </nav>
);

export const Header: React.FC<{
    nav: NavType;
    guardianBaseURL: string;
}> = ({ nav, guardianBaseURL }) => (
    <header className={`test-header ${headerStyles}`}>
        <div className={row}>
            <ReaderRevenueButton
                nav={nav}
                rrLink="ampHeader"
                rrCategory="subscribe"
                linkLabel="Subscribe"
            />

            <a className={logoStyles} href={guardianBaseURL}>
                <span
                    className={css`
                        ${visuallyHidden};
                    `}
                >
                    The Guardian - Back to home
                </span>
                <Logo />
            </a>
        </div>

        <div className={cx(row, navRow)}>
            {pillarLinks(nav.pillars, guardianBaseURL)}

            {/* Note, the actual sidebar lives directly in the body as AMP requires this :( */}
            <button
                className={veggieStyles}
                aria-label="Toggle main menu"
                on="tap:sidebar1.toggle"
            >
                <span className={pattyStyles} />
            </button>
        </div>
    </header>
);
