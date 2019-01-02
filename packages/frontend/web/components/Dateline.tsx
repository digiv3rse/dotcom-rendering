import React from 'react';

import { css } from 'react-emotion';
import { palette } from '@guardian/pasteup/palette';
import { sans } from '@guardian/pasteup/typography';

const captionFont = css`
    ${fs('textSans', 1)};
    color: ${palette.neutral[46]};
`;

const dateline = css`
    ${captionFont};

    padding-top: 2px;
    margin-bottom: 6px;
`;

const Dateline: React.SFC<{
    dateDisplay: string;
}> = ({ dateDisplay }) => (
    <>
        <div className={dateline}>{dateDisplay}</div>
    </>
);

export default Dateline;
