// @flow
import { styled } from '@guardian/guui';

import {
    mobileMedium,
    mobileLandscape,
    desktop,
    leftCol,
    from,
} from '@guardian/pasteup/breakpoints';
import { screenReaderOnly } from '@guardian/pasteup/mixins';

import TheGuardianLogoSVG from '@guardian/pasteup/logos/the-guardian.svg';

const Link = styled('a')({
    float: 'right',
    marginBottom: '15px',
    marginRight: '45px',
    marginTop: '5px',
    [mobileMedium]: {
        marginRight: '5px',
    },
    [mobileLandscape]: {
        marginRight: '17px',
    },
    [desktop]: {
        marginBottom: '-34px',
        marginTop: '5px',
        position: 'relative',
        zIndex: 1071,
    },
});

const ScreenReaderText = styled('span')(screenReaderOnly);

const SVG = styled(TheGuardianLogoSVG)({
    height: '51px',
    width: '159px',
    [from.mobileMedium.until.tablet]: {
        height: '56px',
        width: '175px',
    },
    [from.tablet.until.desktop]: {
        height: '72px',
        width: '224px',
    },
    [from.desktop.until.leftCol]: {
        height: '80px',
        width: '249px',
    },
    [leftCol]: {
        height: '95px',
        width: '295px',
    },
});

type Props = {
    href: string,
};

export default ({ href }: Props) => (
    <Link href={href}>
        <ScreenReaderText>The Guardian - Back to home</ScreenReaderText>
        <SVG />
    </Link>
);
