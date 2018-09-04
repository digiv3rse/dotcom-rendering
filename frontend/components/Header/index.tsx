import React from 'react';
import { css } from 'react-emotion';

import { tablet } from '@guardian/pasteup/breakpoints';

import Nav from './Nav';

const header = css`
    margin-bottom: 0;
    background-color: #e9eff1;
    position: relative;
    ${tablet} {
        display: block;
    }
`;

const Header: React.SFC<{
    nav: NavType;
}> = ({ nav }) => (
    <header className={header}>
        <Nav nav={nav} />
    </header>
);

export default Header;
