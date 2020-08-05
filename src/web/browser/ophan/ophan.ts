/**
 * an individual A/B test, structured for Ophan
 */
export type OphanABEvent = {
    variantName: string;
    complete: string | boolean;
    campaignCodes?: Array<string>;
};

/**
 * the actual payload we send to Ophan: an object of OphanABEvents with test IDs as keys
 */
export type OphanABPayload = {
    abTestRegister: { [testId: string]: OphanABEvent };
};

export type OphanProduct =
    | 'CONTRIBUTION'
    | 'RECURRING_CONTRIBUTION'
    | 'MEMBERSHIP_SUPPORTER'
    | 'MEMBERSHIP_PATRON'
    | 'MEMBERSHIP_PARTNER'
    | 'DIGITAL_SUBSCRIPTION'
    | 'PRINT_SUBSCRIPTION';

export type OphanAction =
    | 'INSERT'
    | 'VIEW'
    | 'EXPAND'
    | 'LIKE'
    | 'DISLIKE'
    | 'SUBSCRIBE'
    | 'ANSWER'
    | 'VOTE'
    | 'CLICK';

export type OphanComponentType =
    | 'READERS_QUESTIONS_ATOM'
    | 'QANDA_ATOM'
    | 'PROFILE_ATOM'
    | 'GUIDE_ATOM'
    | 'TIMELINE_ATOM'
    | 'NEWSLETTER_SUBSCRIPTION'
    | 'SURVEYS_QUESTIONS'
    | 'ACQUISITIONS_EPIC'
    | 'ACQUISITIONS_ENGAGEMENT_BANNER'
    | 'ACQUISITIONS_THANK_YOU_EPIC'
    | 'ACQUISITIONS_HEADER'
    | 'ACQUISITIONS_FOOTER'
    | 'ACQUISITIONS_INTERACTIVE_SLICE'
    | 'ACQUISITIONS_NUGGET'
    | 'ACQUISITIONS_STANDFIRST'
    | 'ACQUISITIONS_THRASHER'
    | 'ACQUISITIONS_EDITORIAL_LINK'
    | 'ACQUISITIONS_SUBSCRIPTIONS_BANNER'
    | 'ACQUISITIONS_OTHER'
    | 'SIGN_IN_GATE';

export type OphanComponent = {
    componentType: OphanComponentType;
    id?: string;
    products?: Array<OphanProduct>;
    campaignCode?: string;
    labels?: Array<string>;
};

export type OphanComponentEvent = {
    component: OphanComponent;
    action: OphanAction;
    value?: string;
    id?: string;
    abTest?: {
        name: string;
        variant: string;
    };
};

export type TestMeta = {
    abTestName: string;
    abTestVariant: string;
    campaignCode: string;
    campaignId?: string;
    componentType: OphanComponentType;
    products?: OphanProduct[];
};

const record = (event: {}): void => {
    if (
        window.guardian &&
        window.guardian.ophan &&
        window.guardian.ophan.record
    ) {
        window.guardian.ophan.record(event);
    } else {
        throw new Error("window.guardian.ophan.record doesn't exist");
    }
};

export const submitComponentEvent = (
    componentEvent: OphanComponentEvent,
): void => {
    record({ componentEvent });
};

export const sendOphanComponentEvent = (
    action: OphanAction,
    testMeta: TestMeta,
): void => {
    const {
        abTestName,
        abTestVariant,
        componentType,
        products = [],
        campaignCode,
    } = testMeta;

    const componentEvent: OphanComponentEvent = {
        component: {
            componentType,
            products,
            campaignCode,
            id: testMeta.campaignId || testMeta.campaignCode,
        },
        abTest: {
            name: abTestName,
            variant: abTestVariant,
        },
        action,
    };

    submitComponentEvent(componentEvent);
};

export const abTestPayload = (tests: {
    [key: string]: string;
}): OphanABPayload => {
    const records: { [key: string]: OphanABEvent } = {};
    Object.keys(tests).forEach((testName) => {
        records[`ab${testName}`] = {
            variantName: tests[testName],
            complete: false,
        };
    });

    return { abTestRegister: records };
};

export const sendOphanPlatformRecord = () => {
    record({ experiences: 'dotcom-rendering' });

    // Record server-side AB test variants (i.e. control or variant)
    if (
        window.guardian &&
        window.guardian.config &&
        window.guardian.config.tests
    ) {
        const { tests } = window.guardian.config;

        record(abTestPayload(tests));
    }
};

export const recordPerformance = () => {
    const performanceAPI = window.performance;
    const supportsPerformanceProperties =
        performanceAPI &&
        'navigation' in performanceAPI &&
        'timing' in performanceAPI;

    if (!supportsPerformanceProperties) {
        return;
    }

    const { timing } = performanceAPI;

    const performance = {
        dns: timing.domainLookupEnd - timing.domainLookupStart,
        connection: timing.connectEnd - timing.connectStart,
        firstByte: timing.responseStart - timing.connectEnd,
        lastByte: timing.responseEnd - timing.responseStart,
        domContentLoadedEvent:
            timing.domContentLoadedEventStart - timing.responseEnd,
        loadEvent: timing.loadEventStart - timing.domContentLoadedEventStart,
        navType: performanceAPI.navigation.type,
        redirectCount: performanceAPI.navigation.redirectCount,
    };

    record({
        performance,
    });
};
