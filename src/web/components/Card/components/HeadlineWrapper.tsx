import React from 'react';
import { css } from 'emotion';

type Props = {
    children: JSX.Element | JSX.Element[];
};

export const HeadlineWrapper = ({ children }: Props) => (
    <div
        className={css`
            padding-bottom: 8px;
        `}
    >
        {children}
    </div>
);
