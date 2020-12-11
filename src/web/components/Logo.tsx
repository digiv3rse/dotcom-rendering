import React from 'react';
import { css, cx } from 'emotion';

import { brandText } from '@guardian/src-foundations/palette';
import { from } from '@guardian/src-foundations/mq';
import { visuallyHidden } from '@guardian/src-foundations/accessibility';

import TheGuardianLogoSVG from '@frontend/static/logos/the-guardian.svg';
import { getZIndex } from '@frontend/web/lib/getZIndex';

const link = css`
    float: right;
    margin-top: 10px;
    margin-right: 54px;
    margin-bottom: 21px;

    ${from.mobileMedium} {
        margin-right: 10px;
    }
    ${from.mobileLandscape} {
        margin-right: 20px;
    }
    ${from.desktop} {
        margin-top: 5px;
        margin-bottom: 15px;
        position: relative;
    }
    ${from.wide} {
        margin-right: 96px;
    }

    ${getZIndex('TheGuardian')}
`;

const style = css`
    height: 44px;
    width: 135px;
    ${from.mobileMedium} {
        height: 56px;
        width: 175px;
    }
    ${from.tablet} {
        height: 72px;
        width: 224px;
    }
    ${from.desktop} {
        height: 95px;
        width: 295px;
    }

    path {
        fill: ${brandText.primary};
    }
`;
const blackLogo = css`
    @media print{
        colour: #000000 !important;
    }
`;
const SVG = () => <TheGuardianLogoSVG className={cx(blackLogo, style)} />;

export const Logo: React.FC = () => (
    <a className={link} href="/" data-link-name="nav2 : logo">
        <span
            className={css`
                ${visuallyHidden};
            `}
        >
            The Guardian - Back to home
        </span>
        <SVG />
    </a>
);
