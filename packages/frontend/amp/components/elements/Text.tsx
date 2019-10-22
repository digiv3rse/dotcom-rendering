import React from 'react';
import { css } from 'emotion';
import { palette, body, textSans } from '@guardian/src-foundations';
import { pillarPalette, neutralBorder } from '@frontend/lib/pillars';
import { sanitise } from '@frontend/amp/lib/sanitise-html';
import { composeLabsCSS } from '@frontend/amp/lib/compose-labs-css';

// Note, this should only apply basic text styling. It is a case where we want
// to re-use styling, but generally we should avoid this as it couples
// components.

// tslint:disable:react-no-dangerous-html

export const ListStyle = (iconColour: string) => css`
    li {
        margin-bottom: 6px;
        padding-left: 20px;
        p {
            display: inline;
        }
    }

    li:before {
        display: inline-block;
        content: '';
        border-radius: 6px;
        height: 12px;
        width: 12px;
        margin-right: 8px;
        background-color: ${iconColour};
        margin-left: -20px;
    }
`;

export const LinkStyle = (pillar: Pillar) => css`
    a {
        color: ${pillarPalette[pillar].dark};
        text-decoration: none;
        border-bottom: 1px solid ${neutralBorder(pillar)};
        :hover {
            border-bottom: 1px solid ${pillarPalette[pillar].dark};
        }
    }
`;

export const TextStyle = (pillar: Pillar) => css`
    strong {
        font-weight: 700;
    }
    p {
        padding: 0 0 12px;
        ${body({ level: 2 })};
        font-weight: 300;
        word-wrap: break-word;
        color: ${palette.neutral[7]};
    }

    blockquote {
        margin-left: 20px;
        font-style: italic;
    }

    ${body({ level: 2 })};

    ${LinkStyle(pillar)};
    ${ListStyle(neutralBorder(pillar))};
`;

// Labs paid content only
const textStyleLabs = css`
    p {
        ${textSans({ level: 4 })}
    }
`;

export const Text: React.FC<{
    html: string;
    pillar: Pillar;
}> = ({ html, pillar }) => (
    <span
        className={composeLabsCSS(pillar, TextStyle(pillar), textStyleLabs)}
        dangerouslySetInnerHTML={{
            __html: sanitise(html),
        }}
    />
);
