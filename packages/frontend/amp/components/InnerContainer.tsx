import React from 'react';
import { css, cx } from 'emotion';

const style = css`
    padding-left: 10px;
    padding-right: 10px;
`;

export const InnerContainer: React.SFC<{
    className?: string;
    children: React.ReactNode;
}> = ({ className, children, ...props }) => (
    <div className={cx(style, className)} {...props}>
        {children}
    </div>
);
