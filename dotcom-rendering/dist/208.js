"use strict";
exports.id = 208;
exports.ids = [208];
exports.modules = {

/***/ 37208:
/*!**********************************************************!*\
  !*** ./src/web/lib/readerRevenueDevUtils.ts + 2 modules ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "changeGeolocation": () => (/* binding */ changeGeolocation),
  "getForcedVariant": () => (/* binding */ getForcedVariant),
  "showMeTheBanner": () => (/* binding */ showMeTheBanner),
  "showMeTheEpic": () => (/* binding */ showMeTheEpic),
  "showNextVariant": () => (/* binding */ showNextVariant),
  "showPreviousVariant": () => (/* binding */ showPreviousVariant)
});

// EXTERNAL MODULE: ../node_modules/@guardian/libs/esm/cookies/ERR_INVALID_COOKIE.js
var ERR_INVALID_COOKIE = __webpack_require__(48056);
// EXTERNAL MODULE: ../node_modules/@guardian/libs/esm/cookies/getCookieValues.js
var getCookieValues = __webpack_require__(85984);
// EXTERNAL MODULE: ../node_modules/@guardian/libs/esm/cookies/getDomainAttribute.js
var getDomainAttribute = __webpack_require__(30047);
// EXTERNAL MODULE: ../node_modules/@guardian/libs/esm/cookies/isValidCookie.js
var isValidCookie = __webpack_require__(5104);
// EXTERNAL MODULE: ../node_modules/@guardian/libs/esm/cookies/memoizedCookies.js
var memoizedCookies = __webpack_require__(84702);
;// CONCATENATED MODULE: ../node_modules/@guardian/libs/esm/cookies/setCookie.js
const setCookie=({name,value,daysToLive,isCrossSubdomain=false})=>{const expires=new Date;if(!(0,isValidCookie/* isValidCookie */.I)(name,value)){throw new Error(`${ERR_INVALID_COOKIE/* ERR_INVALID_COOKIE */.P} ${name}=${value}`)}if(daysToLive){expires.setUTCDate(expires.getUTCDate()+daysToLive)}else{expires.setUTCMonth(expires.getUTCMonth()+5);expires.setUTCDate(1)}document.cookie=`${name}=${value}; path=/; expires=${expires.toUTCString()};${(0,getDomainAttribute/* getDomainAttribute */.B)({isCrossSubdomain})}`;if(memoizedCookies/* memoizedCookies.has */.k.has(name)){const[value]=(0,getCookieValues/* getCookieValues */.H)(name);if(value){memoizedCookies/* memoizedCookies.set */.k.set(name,value)}}};
// EXTERNAL MODULE: ../node_modules/@guardian/libs/esm/cookies/getCookie.js
var getCookie = __webpack_require__(31614);
// EXTERNAL MODULE: ../node_modules/@guardian/libs/esm/cookies/getShortDomain.js
var getShortDomain = __webpack_require__(42602);
;// CONCATENATED MODULE: ../node_modules/@guardian/libs/esm/cookies/removeCookie.js
const removeCookie=({name,currentDomainOnly=false})=>{const expires="expires=Thu, 01 Jan 1970 00:00:01 GMT;";const path="path=/;";document.cookie=`${name}=;${path}${expires}`;if(!currentDomainOnly){document.cookie=`${name}=;${path}${expires} domain=${(0,getShortDomain/* getShortDomain */.W)()};`}};
// EXTERNAL MODULE: ../node_modules/@guardian/libs/esm/storage/storage.js
var storage = __webpack_require__(29103);
// EXTERNAL MODULE: ./src/web/lib/alreadyVisited.ts
var alreadyVisited = __webpack_require__(29658);
// EXTERNAL MODULE: ./src/web/lib/contributions.ts
var contributions = __webpack_require__(44914);
// EXTERNAL MODULE: ./src/web/lib/getCountryCode.ts + 2 modules
var getCountryCode = __webpack_require__(36134);
;// CONCATENATED MODULE: ./src/web/lib/readerRevenueDevUtils.ts
const readerRevenueCookies=[contributions/* HIDE_SUPPORT_MESSAGING_COOKIE */.C6,contributions/* RECURRING_CONTRIBUTOR_COOKIE */.Ty,contributions/* SUPPORT_RECURRING_CONTRIBUTOR_MONTHLY_COOKIE */.K3,contributions/* SUPPORT_RECURRING_CONTRIBUTOR_ANNUAL_COOKIE */.y0,contributions/* SUPPORT_ONE_OFF_CONTRIBUTION_COOKIE */.CC];const clearEpicViewLog=()=>localStorage.removeItem("gu.contributions.views");const clearBannerLastClosedAt=()=>{localStorage.removeItem("gu.prefs.engagementBannerLastClosedAt");localStorage.removeItem("gu.prefs.subscriptionBannerLastClosedAt");localStorage.removeItem("gu.noRRBannerTimestamp")};const fakeOneOffContributor=()=>setCookie({name:contributions/* SUPPORT_ONE_OFF_CONTRIBUTION_COOKIE */.CC,value:Date.now().toString()});const MULTIVARIATE_ID_COOKIE="GU_mvt_id";const MAX_CLIENT_MVT_ID=1e6;const incrementMvtCookie=()=>{const mvtId=parseInt((0,getCookie/* getCookie */.e)({name:MULTIVARIATE_ID_COOKIE})??"10",10);if(mvtId){if(mvtId===MAX_CLIENT_MVT_ID){setCookie({name:MULTIVARIATE_ID_COOKIE,value:"1"})}else{setCookie({name:MULTIVARIATE_ID_COOKIE,value:`${mvtId+1}`})}}};const decrementMvtCookie=()=>{const mvtId=parseInt((0,getCookie/* getCookie */.e)({name:MULTIVARIATE_ID_COOKIE})??"10",10);if(mvtId){if(mvtId===0){setCookie({name:MULTIVARIATE_ID_COOKIE,value:MAX_CLIENT_MVT_ID.toString()})}else{setCookie({name:MULTIVARIATE_ID_COOKIE,value:`${mvtId-1}`})}}};const clearCommonReaderRevenueStateAndReload=(asExistingSupporter,shouldHideReaderRevenue)=>{if(shouldHideReaderRevenue){alert('This page has "Prevent membership/contribution appeals" ticked in Composer. Please try a different page');return}readerRevenueCookies.forEach(cookie=>removeCookie({name:cookie}));clearEpicViewLog();if(asExistingSupporter){fakeOneOffContributor()}window.location.reload()};const showMeTheEpic=(asExistingSupporter=false,shouldHideReaderRevenue)=>{clearCommonReaderRevenueStateAndReload(asExistingSupporter,shouldHideReaderRevenue)};const showMeTheBanner=(asExistingSupporter=false,shouldHideReaderRevenue)=>{clearBannerLastClosedAt();(0,alreadyVisited/* setAlreadyVisited */.Jt)(2);clearCommonReaderRevenueStateAndReload(asExistingSupporter,shouldHideReaderRevenue)};const showNextVariant=(asExistingSupporter=false,shouldHideReaderRevenue)=>{incrementMvtCookie();clearCommonReaderRevenueStateAndReload(asExistingSupporter,shouldHideReaderRevenue)};const showPreviousVariant=(asExistingSupporter=false,shouldHideReaderRevenue)=>{decrementMvtCookie();clearCommonReaderRevenueStateAndReload(asExistingSupporter,shouldHideReaderRevenue)};const changeGeolocation=(asExistingSupporter=false,shouldHideReaderRevenue)=>{(0,getCountryCode/* getLocaleCode */.A)().then(current=>{const geo=window.prompt(`Enter two-letter geolocation code (e.g. GB, US, AU). Current is ${current??"null"}.`);if(geo==="UK"){alert(`'UK' is not a valid geolocation - please use 'GB' instead!`)}else if(geo){storage/* storage.local.set */.t.local.set("gu.geo.override",geo);clearCommonReaderRevenueStateAndReload(asExistingSupporter,shouldHideReaderRevenue)}}).catch(e=>{console.error(`changeGeolocation - error: ${String(e)}`)})};const getForcedVariant=type=>{if(URLSearchParams){const params=new URLSearchParams(window.location.search);const value=params.get(`force-${type}`);if(value){return value}}return null};

/***/ })

};
;
//# sourceMappingURL=208.js.map