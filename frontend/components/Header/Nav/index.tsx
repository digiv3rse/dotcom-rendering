import React, { Component } from 'react';
import { css } from 'react-emotion';
import { clearFix } from '@guardian/pasteup/mixins';
import { tablet, desktop, leftCol, wide } from '@guardian/pasteup/breakpoints';
import { palette } from '@guardian/pasteup/palette';

import Logo from './Logo';
import EditionDropdown from './EditionDropdown';
import Links from './Links';
import Pillars from './Pillars';
import MainMenuToggle from './MainMenuToggle';
import { MainMenu } from './MainMenu';
import SubNav from './SubNav';
import { getCookie } from '../../../lib/cookie';

const centered = css`
    ${tablet} {
        max-width: 740px;
    }
    ${desktop} {
        max-width: 980px;
    }
    ${leftCol} {
        max-width: 1140px;
    }
    ${wide} {
        max-width: 1300px;
    }
    position: relative;
    margin: 0 auto;
    ${clearFix};
`;

const subnav = css`
    background-color: white;
    border-top: 0.0625rem solid ${palette.neutral[86]};
`;

interface Props {
    nav: NavType;
    selectedPillar: Pillar;
}

export default class Nav extends Component<
    Props,
    { showMainMenu: boolean; isSignedIn: boolean }
> {
    constructor(props: Props) {
        super(props);

        this.state = {
            showMainMenu: false,
            isSignedIn: false,
        };
    }

    public componentDidMount() {
        this.setState({
            isSignedIn: !!getCookie('GU_U'),
        });
    }

    public toggleMainMenu() {
        this.setState(state => ({
            showMainMenu: !state.showMainMenu,
        }));
    }

    public render() {
        const { nav, selectedPillar } = this.props;
        const toggleMainMenu = () => {
            this.toggleMainMenu();
        };
        const { showMainMenu, isSignedIn } = this.state;
        const mainMenuId = 'main-menu';

        // TODO push subnav into nav for now as really part of it
        // also separate PR to do centering stuff!
        return (
            <div>
                <nav
                    className={centered}
                    role="navigation"
                    aria-label="Guardian sections"
                >
                    <EditionDropdown />
                    <Logo />
                    {/*
                        TODO: The properties of the Links component
                        have been hardcoded to false. At some point
                        these need to be dynamic.
                    */}
                    <Links
                        isPayingMember={false}
                        isRecentContributor={false}
                        isSignedIn={isSignedIn}
                    />
                    <Pillars
                        showMainMenu={showMainMenu}
                        pillars={nav.pillars}
                        selectedPillar={selectedPillar}
                    />
                    <MainMenuToggle
                        showMainMenu={showMainMenu}
                        toggleMainMenu={toggleMainMenu}
                        ariaControls={mainMenuId}
                    />
                    <MainMenu
                        showMainMenu={showMainMenu}
                        id={mainMenuId}
                        nav={nav}
                    />
                </nav>
                {nav.subNavSections &&
                    nav.subNavSections.parent &&
                    nav.subNavSections.links && (
                        <div className={subnav}>
                            <div className={centered}>
                                <SubNav
                                    parent={nav.subNavSections.parent}
                                    links={nav.subNavSections.links}
                                />
                            </div>
                        </div>
                    )}
            </div>
        );
    }
}
