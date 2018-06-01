// @flow
import { styled } from '@guardian/guui';

import { desktop } from '@guardian/pasteup/breakpoints';
import { screenReaderOnly } from '@guardian/pasteup/mixins';
import { headline } from '@guardian/pasteup/fonts';

const ScreenReadable = styled('span')(screenReaderOnly);

const navPrimaryColour = '#121212';
const navSecondaryColour = '#5d5f5f';

const SubNavLink = styled('div')({
    display: 'none',
    fontFamily: headline,
    fontWeight: 400,
    textDecoration: 'none',
    color: navSecondaryColour,
    cursor: 'pointer',
    lineHeight: 1,
    position: 'relative',
    overflow: 'hidden',
    borderLeft: '1px solid #abc2c9',
    fontSize: 22,
    height: 48,
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 20,
    paddingLeft: 5,
    [desktop]: {
        display: 'block',
    },
    ':hover': {
        color: navPrimaryColour,
    },
    ':focus': {
        color: navPrimaryColour,
    },
    ':after': {
        content: '""',
        border: '2px solid currentColor',
        borderLeft: 'transparent',
        borderTop: 'transparent',
        display: 'inline-block',
        height: 8,
        marginLeft: 6,
        transform: 'translateY(-3px) rotate(45deg)',
        transition: 'transform 250ms ease-out',
        verticalAlign: 'middle',
        width: 8,
    },
    ':hover:after': {
        transform: 'translateY(0) rotate(45deg)',
    },
});
SubNavLink.displayName = 'SubNavLink';

type Props = {
    toggleSubNav: Function,
};

export default ({ toggleSubNav }: Props) => (
    <SubNavLink onClick={() => toggleSubNav()}>
        <ScreenReadable>Show</ScreenReadable>
        More
    </SubNavLink>
);
