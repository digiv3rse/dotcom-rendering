import React from 'react';
import { css, cx } from 'emotion';
import Star from '@frontend/static/icons/star.svg';
import { palette } from '@guardian/src-foundations';

const ratingsWrapper = css`
    background-color: ${palette.brandAlt[400]};
    display: inline-block;
`;

const largeSize = css`
    padding: 6px 10px;
    svg {
        width: 20px;
        height: 20px;
    }
`;

const smallSize = css`
    padding: 2px;
    svg {
        width: 15px;
        height: 15px;
    }
`;

const emptyStar = css`
    fill: transparent;
    stroke: ${palette.neutral[7]};
`;

export const StarRating: React.FC<{
    rating: number;
    size: string;
}> = ({ rating, size }) => {
    const sizeClass = size === 'large' ? largeSize : smallSize;
    const stars = (n: number) => {
        return Array(5)
            .fill(0)
            .map((el, i) => {
                if (i < n) {
                    return <Star key={i} />;
                }
                return <Star className={emptyStar} key={i} />;
            });
    };
    return <div className={cx(ratingsWrapper, sizeClass)}>{stars(rating)}</div>;
};
