import React, { Component } from 'react';
import { css, cx } from 'emotion';
import { desktop, leftCol } from '@guardian/pasteup/breakpoints';
import { screenReaderOnly } from '@guardian/pasteup/mixins';
import { headline } from '@guardian/pasteup/typography';
import { VeggieBurger } from './VeggieBurger';
import { palette } from '@guardian/pasteup/palette';

const screenReadable = css`
    ${screenReaderOnly};
`;
const navPrimaryColour = palette.neutral[7];
const navSecondaryColour = palette.neutral[20];
const openMainMenu = css`
    ${headline(3)};
    display: none;
    font-weight: 500;
    text-decoration: none;
    color: ${navSecondaryColour};
    cursor: pointer;
    position: relative;
    overflow: hidden;
    border: 0;
    background-color: transparent;
    height: 48px;
    padding-bottom: 0;
    padding-right: 20px;
    padding-left: 5px;
    padding-top: 9px;
    margin-top: -6px;
    ${desktop} {
        display: block;
    }
    ${leftCol} {
        margin-top: -5px;
        ${headline(4)};
    }
    :hover {
        color: ${navPrimaryColour};
    }
    :focus {
        color: ${navPrimaryColour};
    }
    :before {
        content: '';
        display: block;
        position: absolute;
        left: 0;
        top: 4px;
        bottom: 0;
        width: 1px;
        background-color: ${palette.neutral[86]};
    }
`;
const checkbox = css`
    :checked {
        + div {
            display: block;
        }
    }
`;
const text = ({ showMainMenu }: { showMainMenu: boolean }) => css`
    display: block;
    height: 100%;
    :after {
        content: '';
        border: 2px solid currentColor;
        border-left: transparent;
        border-top: transparent;
        display: inline-block;
        height: 8px;
        margin-left: 6px;
        transform: ${showMainMenu
            ? 'translateY(1px) rotate(-135deg)'
            : 'translateY(-3px) rotate(45deg)'};
        transition: transform 250ms ease-out;
        vertical-align: middle;
        width: 8px;
    }
    :hover:after {
        transform: ${showMainMenu
            ? 'translateY(-2px) rotate(-135deg)'
            : 'translateY(0) rotate(45deg)'};
    }
`;

interface Props {
    toggleMainMenu: () => void;
    showMainMenu: boolean;
    ariaControls: string;
}

class MainMenuToggle extends Component<Props, { enhanceCheckbox: boolean }> {
    constructor(props: Props) {
        super(props);

        this.state = {
            enhanceCheckbox: false,
        };
    }

    public componentDidMount() {
        /*
            componentDidMount is only executed in the browser therefore if
            enhanceCheckbox is set to true it indicates that JS is running
            in the browser and we should re-render without the NO JS fallback.
            https://reactjs.org/docs/react-component.html#componentdidmount

         */
        this.setState({
            enhanceCheckbox: true,
        });
    }

    public render() {
        const { toggleMainMenu, ariaControls, showMainMenu } = this.props;
        const { enhanceCheckbox } = this.state;
        const CHECKBOX_ID = 'main-menu-toggle';

        if (enhanceCheckbox) {
            return [
                <VeggieBurger
                    showMainMenu={showMainMenu}
                    toggleMainMenu={toggleMainMenu}
                    enhanceCheckbox={enhanceCheckbox}
                    htmlFor={CHECKBOX_ID}
                    ariaControls={ariaControls}
                    key="VeggieBurger"
                />,
                <button
                    className={openMainMenu}
                    onClick={() => toggleMainMenu()}
                    aria-controls={ariaControls}
                    key="OpenMainMenuButton"
                >
                    <span className={screenReadable}>Show</span>
                    <span className={text({ showMainMenu })}>More</span>
                </button>,
            ];
        }

        return [
            <VeggieBurger
                showMainMenu={showMainMenu}
                toggleMainMenu={toggleMainMenu}
                enhanceCheckbox={enhanceCheckbox}
                htmlFor={CHECKBOX_ID}
                ariaControls={ariaControls}
                key="VeggieBurger"
            />,
            // We can't nest the input inside the label because the structure is important for CSS reasons
            <label
                className={openMainMenu}
                htmlFor={CHECKBOX_ID}
                tabIndex={0}
                key="OpenMainMenuLabel"
            >
                <span className={screenReadable}>Show</span>
                <span className={text({ showMainMenu })}>More</span>
            </label>,
            <input
                type="checkbox"
                className={cx(screenReadable, checkbox)}
                id={CHECKBOX_ID}
                aria-controls={ariaControls}
                tabIndex={-1}
                key="OpenMainMenuCheckbox"
                role="menuitemcheckbox"
                aria-checked="false"
            />,
        ];
    }
}

export default MainMenuToggle;
