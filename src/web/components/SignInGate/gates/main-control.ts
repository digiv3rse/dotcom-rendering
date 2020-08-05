import {
    SignInGateComponent,
    CurrentABTest,
} from '@frontend/web/components/SignInGate/gateDesigns/types';
import {
    isNPageOrHigherPageView,
    isValidContentType,
    isValidSection,
    isIOS9,
    shouldShowCmp,
} from '@frontend/web/components/SignInGate/displayRule';
import { hasUserDismissedGate } from '../dismissGate';

const canShow = (
    CAPI: CAPIBrowserType,
    isSignedIn: boolean,
    currentTest: CurrentABTest,
): boolean =>
    !shouldShowCmp() &&
    !isSignedIn &&
    !hasUserDismissedGate(currentTest.variant, currentTest.name) &&
    isNPageOrHigherPageView(3) &&
    isValidContentType(CAPI) &&
    isValidSection(CAPI) &&
    !isIOS9();

export const signInGateComponent: SignInGateComponent = {
    canShow,
};
