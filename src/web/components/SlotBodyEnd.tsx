import React from 'react';
import { css } from 'emotion';
import { useApi } from '@root/src/web/lib/api';

const wrapperMargins = css`
    margin: 18px 0;
`;

type Props = {
    contentType: string;
    sectionName?: string;
    shouldHideReaderRevenue: boolean;
    isMinuteArticle: boolean;
    isPaidContent: boolean;
    tags: TagType[];
};

export const SlotBodyEnd = ({
    contentType,
    sectionName,
    shouldHideReaderRevenue,
    isMinuteArticle,
    isPaidContent,
    tags,
}: Props) => {
    // Putting together the request payload
    const contributionsPayload = {
        tracking: {
            ophanPageId: window?.guardian.config.ophan.pageViewId,
            ophanComponentId: 'ACQUISITIONS_EPIC',
            platformId: 'GUARDIAN_WEB',
            campaignCode: 'gdnwb_copts_memco_remote_epic_test_api',
            abTestName: 'remote_epic_test',
            abTestVariant: 'api',
            referrerUrl: window?.location.origin + window?.location.pathname
        },
        localisation: {
            countryCode: 'GB', // TODO: make this dynamic
        },
        targeting: {
            contentType,
            sectionName,
            shouldHideReaderRevenue,
            isMinuteArticle,
            isPaidContent,
            tags,
        },
    };

    const endpointUrl = 'https://contributions.guardianapis.com/epic';
    const { data: responseBody, error } = useApi(endpointUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(contributionsPayload),
    });

    if (error) {
        window.guardian.modules.sentry.reportError(error, 'slot-body-end');
        return null;
    }

    if (responseBody && responseBody.data) {
        const { data } = responseBody;

        return (
            <div className={wrapperMargins}>
                {data.css && <style>{data.css}</style>}
                <div
                    // eslint-disable-next-line react/no-danger
                    dangerouslySetInnerHTML={{ __html: data.html }}
                />
            </div>
        );
    }

    return null;
};
