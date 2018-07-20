// @flow
import styled from 'react-emotion';
import { connect } from 'unistore/react';

import SupportTheGuardian from './SupportTheGuardian';
import Link from './Link';
import Search from './Search';

import links from './__config__';

const Links = styled('div')({
    left: 0,
    top: 0,
    position: 'absolute',
});

export default connect('header')(({ isPayingMember, isRecentContributor }) => (
    <Links>
        {isPayingMember ||
            isRecentContributor || (
                <SupportTheGuardian href="/">
                    Support The Guardian
                </SupportTheGuardian>
            )}
        {links.map(({ href, text }, i) => (
            <Link href={href} key={text} showAtTablet={i < 2}>
                {text}
            </Link>
        ))}
        <Search href="/">Search</Search>
    </Links>
));
