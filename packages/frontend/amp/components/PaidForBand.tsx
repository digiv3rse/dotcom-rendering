import React from 'react';
import { css, cx } from 'emotion';

import { palette } from '@guardian/pasteup/palette';
import { textSans } from '@guardian/pasteup/typography';
import { mobileLandscape } from '@guardian/pasteup/breakpoints';
import LabsLogo from '@guardian/pasteup/logos/the-guardian-labs.svg';
import ArrowRightIcon from '@guardian/pasteup/icons/arrow-right.svg';

const headerStyle = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 -10px;
    padding: 0 10px;
    height: 58px;
    background-color: ${palette.labs.main};

    ${mobileLandscape} {
        padding: 0 20px;
    }
`;

const focusColor = css`
    outline-color: ${palette.highlight.main};
`;

const metaStyle = css`
    height: 100%;
    ${textSans(4)};
    font-weight: 700;
`;

const aboutStyle = css`
    display: inline-flex;
    height: 100%;
`;

const aboutButtonStyle = css`
    display: block;
    width: 100%;
    font: inherit;
    font-weight: 400;
    margin-left: 10px;
    padding: 10px;
    border: 0;
    border-left: solid 1px ${palette.labs.dark};
    border-right: solid 1px ${palette.labs.dark};
    background: transparent;
    color: inherit;
    cursor: pointer;
}`;

const aboutButtonIcon = css`
    :after {
        content: ' ';
        display: inline-block;
        width: 5px;
        height: 5px;
        transform: translateY(-2px) rotate(45deg);
        border: 1px solid currentColor;
        border-left: transparent;
        border-top: transparent;
        margin-left: 6px;
        vertical-align: middle;
    }
`;

const popUpStyle = css`
    position: absolute;
    transform: translate(-15%, 30%);
    width: 266px;
    padding: 16px;
    background-color: ${palette.neutral[7]};
    color: ${palette.neutral[100]};
    font-weight: normal;
    border-radius: 4px;
    z-index: 100;
`;

const logoStyle = css`
    margin: 5px 0;
`;

const aStyle = css`
    display: inline-block;
    color: ${palette.labs.main};
    text-decoration: none;
    margin-top: 10px;
    &:hover {
        text-decoration: underline;
    }
`;

const iconStyle = css`
    fill: ${palette.labs.main};
    margin: 0 0;
    padding-right: 3px;
    vertical-align: middle;
    width: 20px;
    height: 20px;
`;

export const PaidForBand: React.FC<{}> = () => (
    <header className={headerStyle}>
        <div className={metaStyle}>
            <span>Paid content</span>
            <div className={aboutStyle}>
                <button
                    className={cx(
                        aboutButtonStyle,
                        aboutButtonIcon,
                        focusColor,
                    )}
                    on="tap:popup.toggleVisibility"
                >
                    About
                </button>
                <div id="popup" className={popUpStyle} hidden={true}>
                    <div>
                        Paid content is paid for and controlled by an advertiser
                        and produced by the Guardian Labs team.
                    </div>
                    <a
                        className={cx(aStyle, focusColor)}
                        href="https://www.theguardian.com/content-funding"
                    >
                        Learn more about Guardian Labs content{' '}
                        <ArrowRightIcon
                            className={iconStyle}
                            role="presentation"
                        />
                    </a>
                </div>
            </div>
        </div>
        <LabsLogo className={logoStyle} />
    </header>
);
