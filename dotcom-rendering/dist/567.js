"use strict";
exports.id = 567;
exports.ids = [567];
exports.modules = {

/***/ 25567:
/*!*********************************************************************************!*\
  !*** ./src/web/components/SignInGate/gateDesigns/SignInGateCopyTestJan2023.tsx ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignInGateCopyTestJan2023": () => (/* binding */ SignInGateCopyTestJan2023)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ 73464);
/* harmony import */ var _guardian_consent_management_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @guardian/consent-management-platform */ 48706);
/* harmony import */ var _guardian_source_react_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @guardian/source-react-components */ 51782);
/* harmony import */ var _guardian_source_react_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @guardian/source-react-components */ 33220);
/* harmony import */ var _guardian_source_react_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @guardian/source-react-components */ 35706);
/* harmony import */ var _componentEventTracking__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../componentEventTracking */ 66128);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared */ 12797);
const SignInGateCopyTestJan2023=({signInUrl,guUrl,dismissGate,abTest,ophanComponentId,isMandatory=false})=>{const getCopyTextFromVariant=abVariant=>{switch(abVariant){case"quick-and-easy":{return"Register: it’s quick and easy"}case"take-a-moment":{return"Take a moment to register"}default:{return"You need to register to keep reading"}}};return (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{css:_shared__WEBPACK_IMPORTED_MODULE_2__/* .signInGateContainer */ .Rt,"data-cy":"sign-in-gate-main",children:[(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("style",{children:_shared__WEBPACK_IMPORTED_MODULE_2__/* .hideElementsCss */ .JX}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{css:_shared__WEBPACK_IMPORTED_MODULE_2__/* .firstParagraphOverlay */ .ZL}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h1",{css:_shared__WEBPACK_IMPORTED_MODULE_2__/* .headingStyles */ .$B,children:getCopyTextFromVariant(abTest?.variant)}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p",{css:_shared__WEBPACK_IMPORTED_MODULE_2__/* .bodyBold */ .Hp,children:"It’s still free to read – this is not a paywall"}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("p",{css:_shared__WEBPACK_IMPORTED_MODULE_2__/* .bodyText */ .Sq,children:["We’re committed to keeping our quality reporting open. By registering and providing us with insight into your preferences, you’re helping us to engage with you more deeply, and that allows us to keep our journalism free for all. You’ll always be able to control your own"," ",(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{"data-cy":"sign-in-gate-main_privacy",css:_shared__WEBPACK_IMPORTED_MODULE_2__/* .privacyLink */ .Ur,onClick:()=>{_guardian_consent_management_platform__WEBPACK_IMPORTED_MODULE_0__.cmp.showPrivacyManager();(0,_componentEventTracking__WEBPACK_IMPORTED_MODULE_1__/* .trackLink */ .dw)(ophanComponentId,"privacy",abTest)},children:"privacy settings"}),"."]}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{css:_shared__WEBPACK_IMPORTED_MODULE_2__/* .actionButtons */ .x0,children:[(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_guardian_source_react_components__WEBPACK_IMPORTED_MODULE_4__/* .LinkButton */ .Q,{"data-cy":"sign-in-gate-main_register","data-ignore":"global-link-styling",css:_shared__WEBPACK_IMPORTED_MODULE_2__/* .registerButton */ .KI,priority:"primary",size:"small",href:signInUrl,onClick:()=>{(0,_componentEventTracking__WEBPACK_IMPORTED_MODULE_1__/* .trackLink */ .dw)(ophanComponentId,"register-link",abTest)},children:"Register for free"}),!isMandatory&&(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_guardian_source_react_components__WEBPACK_IMPORTED_MODULE_5__/* .Button */ .z,{"data-cy":"sign-in-gate-main_dismiss","data-ignore":"global-link-styling",css:_shared__WEBPACK_IMPORTED_MODULE_2__/* .laterButton */ .TB,priority:"subdued",size:"small",onClick:()=>{dismissGate();(0,_componentEventTracking__WEBPACK_IMPORTED_MODULE_1__/* .trackLink */ .dw)(ophanComponentId,"not-now",abTest)},children:"I’ll do it later"})]}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p",{css:[_shared__WEBPACK_IMPORTED_MODULE_2__/* .bodySeparator */ .rg,_shared__WEBPACK_IMPORTED_MODULE_2__/* .bodyBold */ .Hp,_shared__WEBPACK_IMPORTED_MODULE_2__/* .signInHeader */ .zP],children:"Have a subscription? Made a contribution? Already registered?"}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_guardian_source_react_components__WEBPACK_IMPORTED_MODULE_6__/* .Link */ .r,{"data-cy":"sign-in-gate-main_signin","data-ignore":"global-link-styling",css:_shared__WEBPACK_IMPORTED_MODULE_2__/* .signInLink */ .iY,href:signInUrl,onClick:()=>{(0,_componentEventTracking__WEBPACK_IMPORTED_MODULE_1__/* .trackLink */ .dw)(ophanComponentId,"sign-in-link",abTest)},children:"Sign In"}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{css:_shared__WEBPACK_IMPORTED_MODULE_2__/* .faq */ .sb,children:[(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_guardian_source_react_components__WEBPACK_IMPORTED_MODULE_6__/* .Link */ .r,{"data-ignore":"global-link-styling",href:`${guUrl}/membership/2019/dec/20/signing-in-to-the-guardian`,onClick:()=>{(0,_componentEventTracking__WEBPACK_IMPORTED_MODULE_1__/* .trackLink */ .dw)(ophanComponentId,"how-link",abTest)},children:"Why register & how does it help?"}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_guardian_source_react_components__WEBPACK_IMPORTED_MODULE_6__/* .Link */ .r,{"data-ignore":"global-link-styling",href:`${guUrl}/info/2014/nov/03/why-your-data-matters-to-us-full-text`,onClick:()=>{(0,_componentEventTracking__WEBPACK_IMPORTED_MODULE_1__/* .trackLink */ .dw)(ophanComponentId,"why-link",abTest)},children:"How will my information & data be used?"}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_guardian_source_react_components__WEBPACK_IMPORTED_MODULE_6__/* .Link */ .r,{"data-ignore":"global-link-styling",href:`${guUrl}/help/identity-faq`,onClick:()=>{(0,_componentEventTracking__WEBPACK_IMPORTED_MODULE_1__/* .trackLink */ .dw)(ophanComponentId,"help-link",abTest)},children:"Get help with registering or signing in"})]})]})};

/***/ }),

/***/ 12797:
/*!**************************************************************!*\
  !*** ./src/web/components/SignInGate/gateDesigns/shared.tsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$B": () => (/* binding */ headingStyles),
/* harmony export */   "Hp": () => (/* binding */ bodyBold),
/* harmony export */   "JX": () => (/* binding */ hideElementsCss),
/* harmony export */   "KI": () => (/* binding */ registerButton),
/* harmony export */   "Rt": () => (/* binding */ signInGateContainer),
/* harmony export */   "Sq": () => (/* binding */ bodyText),
/* harmony export */   "TB": () => (/* binding */ laterButton),
/* harmony export */   "Ur": () => (/* binding */ privacyLink),
/* harmony export */   "ZL": () => (/* binding */ firstParagraphOverlay),
/* harmony export */   "iY": () => (/* binding */ signInLink),
/* harmony export */   "rg": () => (/* binding */ bodySeparator),
/* harmony export */   "sb": () => (/* binding */ faq),
/* harmony export */   "x0": () => (/* binding */ actionButtons),
/* harmony export */   "zP": () => (/* binding */ signInHeader)
/* harmony export */ });
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react */ 70078);
/* harmony import */ var _guardian_source_foundations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @guardian/source-foundations */ 21810);
/* harmony import */ var _guardian_source_foundations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @guardian/source-foundations */ 93196);
/* harmony import */ var _guardian_source_foundations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @guardian/source-foundations */ 24436);
/* harmony import */ var _guardian_source_foundations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @guardian/source-foundations */ 80683);
/* harmony import */ var _guardian_source_foundations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @guardian/source-foundations */ 87357);
const signInGateContainer=_emotion_react__WEBPACK_IMPORTED_MODULE_0__.css`
	max-width: 617px;

	${_guardian_source_foundations__WEBPACK_IMPORTED_MODULE_1__/* .from.desktop */ .Dp.desktop} {
		min-height: 600px;
	}
`;const headingStyles=_emotion_react__WEBPACK_IMPORTED_MODULE_0__.css`
	${_guardian_source_foundations__WEBPACK_IMPORTED_MODULE_2__/* .headline.small */ .Se.small({fontWeight:"bold"})};
	border-top: 2px black solid;
	padding-bottom: ${_guardian_source_foundations__WEBPACK_IMPORTED_MODULE_3__/* .space[12] */ .D[12]}px;

	${_guardian_source_foundations__WEBPACK_IMPORTED_MODULE_1__/* .from.phablet */ .Dp.phablet} {
		padding-right: 160px;
		${_guardian_source_foundations__WEBPACK_IMPORTED_MODULE_2__/* .headline.medium */ .Se.medium({fontWeight:"bold"})};
	}
`;const bodySeparator=_emotion_react__WEBPACK_IMPORTED_MODULE_0__.css`
	border-top: 1px ${_guardian_source_foundations__WEBPACK_IMPORTED_MODULE_4__/* .line.primary */ .jv.primary} solid;
`;const bodyBold=_emotion_react__WEBPACK_IMPORTED_MODULE_0__.css`
	${_guardian_source_foundations__WEBPACK_IMPORTED_MODULE_2__/* .textSans.medium */ .OS.medium({fontWeight:"bold"})}
	padding-bottom: 20px;
	${_guardian_source_foundations__WEBPACK_IMPORTED_MODULE_1__/* .from.phablet */ .Dp.phablet} {
		padding-right: 130px;
	}
`;const bodyText=_emotion_react__WEBPACK_IMPORTED_MODULE_0__.css`
	${_guardian_source_foundations__WEBPACK_IMPORTED_MODULE_2__/* .textSans.medium */ .OS.medium({lineHeight:"regular"})}
	padding-bottom: ${_guardian_source_foundations__WEBPACK_IMPORTED_MODULE_3__/* .space[6] */ .D[6]}px;

	${_guardian_source_foundations__WEBPACK_IMPORTED_MODULE_1__/* .from.phablet */ .Dp.phablet} {
		padding-right: 160px;
	}
`;const signInHeader=_emotion_react__WEBPACK_IMPORTED_MODULE_0__.css`
	padding-bottom: 0;
`;const actionButtons=_emotion_react__WEBPACK_IMPORTED_MODULE_0__.css`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	margin-bottom: 42px;

	> a {
		/* stylelint-disable-next-line declaration-no-important */
		margin-right: ${_guardian_source_foundations__WEBPACK_IMPORTED_MODULE_3__/* .space[4] */ .D[4]}px !important;

		${_guardian_source_foundations__WEBPACK_IMPORTED_MODULE_1__/* .from.mobileMedium */ .Dp.mobileMedium} {
			/* stylelint-disable-next-line declaration-no-important */
			margin-right: ${_guardian_source_foundations__WEBPACK_IMPORTED_MODULE_3__/* .space[9] */ .D[9]}px !important;
		}

		/* stylelint-disable-next-line declaration-no-important */
		text-decoration: none !important;
	}
`;const registerButton=_emotion_react__WEBPACK_IMPORTED_MODULE_0__.css`
	/* stylelint-disable-next-line declaration-no-important */
	color: ${_guardian_source_foundations__WEBPACK_IMPORTED_MODULE_4__/* .text.ctaPrimary */ .fL.ctaPrimary} !important;
`;const laterButton=_emotion_react__WEBPACK_IMPORTED_MODULE_0__.css`
	/* stylelint-disable-next-line declaration-no-important */
	color: ${_guardian_source_foundations__WEBPACK_IMPORTED_MODULE_5__/* .brand[400] */ .UQ[400]} !important;
`;const signInLink=_emotion_react__WEBPACK_IMPORTED_MODULE_0__.css`
	/* stylelint-disable-next-line declaration-no-important */
	color: ${_guardian_source_foundations__WEBPACK_IMPORTED_MODULE_4__/* .text.anchorPrimary */ .fL.anchorPrimary} !important;
	/* stylelint-disable-next-line declaration-no-important */
	text-decoration-color: ${_guardian_source_foundations__WEBPACK_IMPORTED_MODULE_4__/* .line.primary */ .jv.primary} !important;
	text-underline-position: under;
`;const faq=_emotion_react__WEBPACK_IMPORTED_MODULE_0__.css`
	padding-top: ${_guardian_source_foundations__WEBPACK_IMPORTED_MODULE_3__/* .space[3] */ .D[3]}px;
	padding-bottom: 18px;
	margin-top: ${_guardian_source_foundations__WEBPACK_IMPORTED_MODULE_3__/* .space[5] */ .D[5]}px;

	& a {
		color: ${_guardian_source_foundations__WEBPACK_IMPORTED_MODULE_4__/* .text.anchorPrimary */ .fL.anchorPrimary};
		display: block;
		margin-bottom: ${_guardian_source_foundations__WEBPACK_IMPORTED_MODULE_3__/* .space[4] */ .D[4]}px;
		text-decoration-color: ${_guardian_source_foundations__WEBPACK_IMPORTED_MODULE_4__/* .line.primary */ .jv.primary};
		text-underline-position: under;
	}

	& a:hover {
		color: ${_guardian_source_foundations__WEBPACK_IMPORTED_MODULE_4__/* .text.anchorPrimary */ .fL.anchorPrimary};
	}
`;const privacyLink=_emotion_react__WEBPACK_IMPORTED_MODULE_0__.css`
	color: ${_guardian_source_foundations__WEBPACK_IMPORTED_MODULE_4__/* .text.anchorPrimary */ .fL.anchorPrimary};
	text-decoration: underline;
	text-decoration-color: ${_guardian_source_foundations__WEBPACK_IMPORTED_MODULE_4__/* .line.primary */ .jv.primary};
	text-underline-position: under;
	border: 0;
	background: transparent;
	/* stylelint-disable-next-line property-disallowed-list */
	font-family: inherit;
	font-size: inherit;
	padding: 0;
	cursor: pointer;
`;const firstParagraphOverlay=_emotion_react__WEBPACK_IMPORTED_MODULE_0__.css`
	margin-top: -250px;
	width: 100%;
	height: 250px;
	position: absolute;
`;const hideElementsCss=[`.article-body-commercial-selector > * {
        display: none;
    }`,`#sign-in-gate, .article-body-commercial-selector p:nth-of-type(-n + 3) {
        display: block;
    }`,`.article-body-commercial-selector > p:nth-of-type(1) {
        -webkit-mask-image: linear-gradient(black, rgba(0, 0, 0, 0.5));
        mask-image: linear-gradient(black, rgba(0, 0, 0, 0.5));
    }
	.article-body-commercial-selector > p:nth-of-type(2) {
        -webkit-mask-image: linear-gradient(rgba(0, 0, 0, 0.5), transparent);
        mask-image: linear-gradient(rgba(0, 0, 0, 0.5), transparent);
    }
	`,`#sign-in-gate ~ * {
        display: none;
    }`,`#slot-body-end {
        display: none;
    }`].join("\n");

/***/ })

};
;
//# sourceMappingURL=567.js.map