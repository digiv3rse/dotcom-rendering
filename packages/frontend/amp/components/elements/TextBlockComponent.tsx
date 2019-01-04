import React from 'react';
import { css } from 'emotion';
import { palette } from '@guardian/pasteup/palette';
import { pillarPalette } from '@frontend/lib/pillars';
import { fs } from '@guardian/pasteup/typography';

// tslint:disable:react-no-dangerous-html
const style = (pillar: Pillar) => css`
    strong {
        font-weight: 700;
    }
    h2 {
        margin-top: 24px;
        ${fs('textSans', 6)};
    }
    p {
        padding: 0 0 12px;
        ${fs('textSans', 5)};
        font-weight: 300;
        word-wrap: break-word;
        color: ${palette.neutral[7]};
    }
    a {
        color: ${pillarPalette[pillar].main};
        text-decoration: none;
        border-bottom: 1px solid #dcdcdc;
        :hover {
            border-bottom: 1px solid ${pillarPalette[pillar].main};
        }
    }
    ${fs('textSans', 5)};
`;
export const TextBlockComponent: React.SFC<{
    html: string;
    pillar: Pillar;
}> = ({ html, pillar }) => (
    <span
        className={style(pillar)}
        dangerouslySetInnerHTML={{
            __html: html,
        }}
    />
);
