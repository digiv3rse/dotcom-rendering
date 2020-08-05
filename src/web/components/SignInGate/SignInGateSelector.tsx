import React, { useState, useEffect } from 'react';
import { useAB } from '@guardian/ab-react';
import { ABTest, Runnable } from '@guardian/ab-core';
import { constructQuery } from '@root/src/lib/querystring';

import { setUserDismissedGate } from '@frontend/web/components/SignInGate/dismissGate';
import {
    SignInGateComponent,
    CurrentABTest,
} from '@frontend/web/components/SignInGate/gateDesigns/types';
import { getCookie } from '@frontend/web/browser/cookie';

// Sign in Gate A/B Tests
import { signInGatePatientia } from '@frontend/web/experiments/tests/sign-in-gate-patientia';
import { signInGateMainVariant } from '@root/src/web/experiments/tests/sign-in-gate-main-variant';
import { signInGateMainControl } from '@root/src/web/experiments/tests/sign-in-gate-main-control';

// Sign in Gate Types
import { signInGateComponent as gateMainVariant } from '@root/src/web/components/SignInGate/gates/main-variant';
import { signInGateComponent as gateMainControl } from '@root/src/web/components/SignInGate/gates/main-control';
import { signInGateComponent as gatePatientiaControl } from '@root/src/web/components/SignInGate/gates/patientia-control';
import { signInGateComponent as gatePatientiaVariant } from '@root/src/web/components/SignInGate/gates/patientia-variant';

import {
    ComponentEventParams,
    submitViewEventTracking,
    withComponentId,
} from './componentEventTracking';

// component name, should always be sign-in-gate
export const componentName = 'sign-in-gate';

// interface for the sign in gate selector component
interface SignInGateSelectorProps {
    isSignedIn?: boolean;
    CAPI: CAPIBrowserType;
}

// interface for the component which shows the sign in gate
interface ShowSignInGateProps {
    setShowGate: React.Dispatch<React.SetStateAction<boolean>>;
    abTest: CurrentABTest;
    CAPI: CAPIBrowserType;
    signInUrl: string;
    gateVariant: SignInGateComponent;
}

const dismissGate = (
    setShowGate: React.Dispatch<React.SetStateAction<boolean>>,
    currentAbTestValue: CurrentABTest,
) => {
    setShowGate(false);
    setUserDismissedGate(currentAbTestValue.variant, currentAbTestValue.name);

    // When the user closes the sign in gate, we scroll them back to the main content
    const articleBody = document.querySelector(
        '.article-body-commercial-selector',
    );

    articleBody?.scrollIntoView(true);
};

type GateTestMap = { [name: string]: SignInGateComponent };

/* When adding a new test, you need to add the test name to the tests array below,
   and add a entry for each variant that maps it to a SignInGateComponent in testVariantToGateMapping, and in turn match each test id to an component id in testIdToComponentId
*/
const tests: ReadonlyArray<ABTest> = [
    signInGatePatientia,
    signInGateMainVariant,
    signInGateMainControl,
];

const testVariantToGateMapping: GateTestMap = {
    'patientia-control-1': gatePatientiaControl,
    'patientia-variant-1': gatePatientiaVariant,
    'main-control-1': gateMainControl,
    'main-variant-1': gateMainVariant,
};

const testIdToComponentId: { [key: string]: string } = {
    SignInGateMainVariant: 'main_variant_1',
    SignInGateMainControl: 'main_control_1',
    SignInGatePatientia: 'patientia_test',
};

// function to generate the profile.theguardian.com url with tracking params
// and the return url (link to current article page)
const generateSignInUrl = (
    CAPI: CAPIBrowserType,
    currentTest: CurrentABTest,
) => {
    // url of the article, return user here after sign in/registration
    const returnUrl = `${CAPI.config.host}/${CAPI.pageId}`;

    // set the component event params to be included in the query
    const queryParams: ComponentEventParams = {
        componentType: 'signingate',
        componentId: testIdToComponentId[currentTest.id],
        abTestName: currentTest.name,
        abTestVariant: currentTest.variant,
        viewId: window.guardian.ophan.viewId,
        browserId: getCookie('bwid') || undefined,
        visitId: getCookie('vsid') || undefined,
    };

    return `${
        CAPI.config.idUrl
    }/signin?returnUrl=${returnUrl}&componentEventParams=${encodeURIComponent(
        constructQuery(queryParams),
    )}`;
};

// component which shows the sign in gate
// fires a VIEW ophan component event
// and show the gate component if it exists
const ShowSignInGate = ({
    CAPI,
    abTest,
    setShowGate,
    signInUrl,
    gateVariant,
}: ShowSignInGateProps) => {
    // use effect hook to fire view event tracking only on initial render
    useEffect(() => {
        submitViewEventTracking({
            component: withComponentId(testIdToComponentId[abTest.id]),
            abTest,
        });
    }, [abTest]);

    // some sign in gate ab test variants may not need to show a gate
    // therefore the gate is optional
    // this is because we want a section of the audience to never see the gate
    // but still fire a view event if they are eligible to see the gate
    if (gateVariant.gate) {
        return gateVariant.gate({
            guUrl: CAPI.config.host || 'https://theguardian.com/',
            signInUrl,
            dismissGate: () => {
                dismissGate(setShowGate, abTest);
            },
            abTest,
            ophanComponentId: testIdToComponentId[abTest.id],
            isComment:
                CAPI.designType === 'Comment' ||
                CAPI.designType === 'GuardianView',
        });
    }
    // return nothing if no gate needs to be shown
    return <></>;
};

// component with conditional logic which determines if a sign in gate
// should be shown on the current page
export const SignInGateSelector = ({
    isSignedIn,
    CAPI,
}: SignInGateSelectorProps) => {
    const [showGate, setShowGate] = useState(true);
    const [currentTest, setCurrentTest] = useState<CurrentABTest>({
        name: '',
        variant: '',
        id: '',
    });

    const ab = useAB();

    useEffect(() => {
        const test: Runnable | null = ab.firstRunnableTest(tests);

        setCurrentTest({
            name: test?.dataLinkNames || test?.id || '',
            variant: test?.variantToRun.id || '',
            id: test?.id || '',
        });
    }, [ab]);

    // check to see if the test is available on this render cycle
    // required by the ab test framework, as we have to wait for the above
    // useEffect hook to determine which test to run
    if (currentTest.name === '' || currentTest.variant === '') {
        return null;
    }

    const signInUrl = generateSignInUrl(CAPI, currentTest);

    const gateVariant: SignInGateComponent | null =
        testVariantToGateMapping?.[currentTest.variant];

    return (
        <>
            {/* Sign In Gate Display Logic */}
            {showGate &&
                gateVariant?.canShow(CAPI, !!isSignedIn, currentTest) && (
                    <ShowSignInGate
                        CAPI={CAPI}
                        abTest={currentTest}
                        setShowGate={setShowGate}
                        signInUrl={signInUrl}
                        gateVariant={gateVariant}
                    />
                )}
        </>
    );
};
