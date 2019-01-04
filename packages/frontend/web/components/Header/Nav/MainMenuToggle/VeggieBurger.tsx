import React from 'react';
import { css } from 'emotion';

import {
    desktop,
    mobileMedium,
    mobileLandscape,
    tablet,
} from '@guardian/pasteup/breakpoints';
import { palette } from '@guardian/pasteup/palette';

const veggieBurger = ({ showMainMenu }: { showMainMenu: boolean }) => css`
    background-color: ${palette.neutral[7]};
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.08);
    color: ${palette.neutral[97]};
    cursor: pointer;
    height: 40px;
    min-width: 40px;
    position: absolute;
    border: 0;
    border-radius: 50%;
    outline: none;
    z-index: ${showMainMenu ? 1071 : 0};
    top: 17px;
    right: 5px;
    ${mobileLandscape} {
        top: 24px;
    }
    ${mobileMedium} {
        bottom: -6px;
        height: 48px;
        min-width: 48px;
        top: auto;
    }
    ${mobileLandscape} {
        right: 46px;
    }
    ${tablet} {
        right: 58px;
        height: 56px;
        min-width: 56px;
    }
    ${desktop} {
        display: none;
    }
`;

const veggieBurgerIcon = ({ showMainMenu }: { showMainMenu: boolean }) => {
    const beforeAfterStyles = css`
        content: '';
        background-color: currentColor;
    `;
    const lineStyles = css`
        height: 2px;
        left: 0;
        position: absolute;
        width: 20px;
    `;

    return css`
        top: 50%;
        right: 0;
        margin-top: -1px;
        margin-left: auto;
        margin-right: auto;
        ${lineStyles};
        background-color: ${showMainMenu ? 'transparent' : 'currentColor'};
        :before {
            ${lineStyles};
            ${beforeAfterStyles};
            ${showMainMenu
                ? `top: 0;
            transform: rotate(-45deg);
            `
                : 'top: -6px;'};
        }
        :after {
            ${lineStyles};
            ${beforeAfterStyles};
            ${showMainMenu
                ? `bottom: 0;
            transform: rotate(45deg);
            `
                : 'bottom: -6px;'};
        }
    `;
};

export const VeggieBurger: React.SFC<{
    toggleMainMenu: () => void;
    showMainMenu: boolean;
    enhanceCheckbox: boolean;
    htmlFor: string;
    ariaControls: string;
}> = ({
    toggleMainMenu,
    showMainMenu,
    enhanceCheckbox,
    htmlFor,
    ariaControls,
}) => {
    if (enhanceCheckbox) {
        return (
            <button
                className={veggieBurger({ showMainMenu })}
                onClick={() => toggleMainMenu()}
                aria-controls={ariaControls}
            >
                <span className={veggieBurgerIcon({ showMainMenu })} />
            </button>
        );
    }

    return (
        <label
            className={veggieBurger({ showMainMenu })}
            onClick={() => toggleMainMenu()}
            htmlFor={htmlFor}
            tabIndex={0}
            role="button"
        >
            <span className={veggieBurgerIcon({ showMainMenu })} />
        </label>
    );
};
