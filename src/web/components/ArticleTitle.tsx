import React from 'react';
import { css, cx } from 'emotion';

import { from, until } from '@guardian/src-foundations/mq';
import { SeriesSectionLink } from './SeriesSectionLink';

const sectionStyles = css`
    height: 157px;
    padding-top: 8px;
    display: flex;
    flex-direction: row;
    ${from.leftCol} {
        flex-direction: column;
    }
`;

type Props = {
    CAPI: CAPIType;
    badge?: BadgeType;
    inLeftCol?: boolean;
    fallbackToSection?: boolean;
};

const titleBadgeWrapper = css`
    margin-bottom: 6px;
    margin-top: 6px;
    ${until.leftCol} {
        display: flex;
        margin-right: 10px;
    }
`;

const badgeContainer = css`
    display: flex;
    padding-top: 3px;
    padding-bottom: 6px;
`;

const marginTop = css`
    margin-top: 6px;
`;

export const ArticleTitle = ({
    CAPI,
    badge,
    inLeftCol,
    fallbackToSection = true,
}: Props) => (
    <div className={cx(inLeftCol && sectionStyles, badge && badgeContainer)}>
        {badge && <div className={titleBadgeWrapper} />}
        <div className={badge && marginTop}>
            <SeriesSectionLink
                CAPI={CAPI}
                fallbackToSection={fallbackToSection}
            />
        </div>
    </div>
);
