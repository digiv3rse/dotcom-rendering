"use strict";(self.webpackChunk_guardian_dotcom_rendering=self.webpackChunk_guardian_dotcom_rendering||[]).push([[3022],{3690:(t,e,n)=>{n.r(e),n.d(e,{SecureSignupIframe:()=>C});var o=n(7800),r=n(43),i=n(1810),a=n(4436),c=n(7357),s=n(6543),l=n(5706),d=n(4083),u=n(4450),p=n(3220),h=n(800),f=n(3904),m=n(1104),v=n(9038);function g(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function b(){const t=g(["\n\t\t\t\t\twidth: 100%;\n\t\t\t\t\tmin-height: 65px;\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t"]);return b=function(){return t},t}function w(){const t=g(["\n\t\t\t\t\t\t\tdisplay: flex;\n\t\t\t\t\t\t\talign-items: flex-start;\n\t\t\t\t\t\t\t"," {\n\t\t\t\t\t\t\t\tflex-wrap: wrap;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tbutton {\n\t\t\t\t\t\t\t\tmargin-left: ","px;\n\t\t\t\t\t\t\t\tbackground-color: ",";\n\t\t\t\t\t\t\t\t:hover {\n\t\t\t\t\t\t\t\t\tbackground-color: ",";\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t"]);return w=function(){return t},t}function x(){const t=g(["\n\t\t\t\t\t\t.grecaptcha-badge {\n\t\t\t\t\t\t\tvisibility: hidden;\n\t\t\t\t\t\t}\n\t\t\t\t\t"]);return x=function(){return t},t}const y="undefined"==typeof window,S=t=>{let{text:e}=t;return(0,o.jsx)(s.b,{children:(0,o.jsxs)("span",{children:[e," Please try again or contact"," ",(0,o.jsx)(l.r,{href:"mailto:customer.help@theguardian.com",target:"_blank",rel:"noreferrer",children:"customer.help@theguardian.com"})]})})},j=t=>{let{text:e}=t;return(0,o.jsx)(d.F,{children:(0,o.jsxs)("span",{children:[(0,o.jsx)("b",{children:"Subscription Confirmed. "}),(0,o.jsx)("span",{children:e})]})})},k=(t,e)=>{const n=(0,v.ZL)();let o="CLICK";switch(e){case"form-submission":case"captcha-not-passed":case"captcha-passed":o="ANSWER";break;case"submission-confirmed":o="SUBSCRIBE";break;case"captcha-load-error":case"form-submit-error":case"submission-failed":o="CLOSE";break;case"open-captcha":o="EXPAND";break;default:o="CLICK"}const r=JSON.stringify({eventDescription:e,newsletterId:t,timestamp:Date.now()});(0,v.X4)({action:o,value:r,component:{componentType:"NEWSLETTER_SUBSCRIPTION",id:"DCR SecureSignupIframe ".concat(t)}},n)},C=t=>{let{name:e,styles:n,html:s,newsletterId:l,successDescription:d}=t;const v=(0,f.useRef)(null),g=(0,f.useRef)(null),[C,D]=(0,f.useState)(0),[E,I]=(0,f.useState)(!1),[R,T]=(0,f.useState)(void 0),[L,_]=(0,f.useState)(void 0),z="boolean"==typeof R,O=()=>{!function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;var e;const{current:n}=v;if(!n)return;const o=null===(e=n.contentDocument)||void 0===e?void 0:e.body,r=o?o.scrollHeight:0;D(Math.max(0,t,r))}()},A=()=>{k(l,"click-button")},N=t=>{var e;t.preventDefault(),E||(_(void 0),k(l,"open-captcha"),null===(e=g.current)||void 0===e||e.execute())},P=y?void 0:window.guardian.config.page.googleRecaptchaSiteKey;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("iframe",{title:"Sign up to ".concat(e),ref:v,css:(0,r.css)(b()),style:{height:C,display:z||E?"none":"block"},srcDoc:"\n\t\t\t\t<html>\n\t\t\t\t\t<head>\n\t\t\t\t\t\t".concat(n,'\n\t\t\t\t\t</head>\n\t\t\t\t\t<body style="margin: 0; overflow:hidden;">').concat(s,"</body>\n\t\t\t\t</html>"),onLoad:()=>{(()=>{var t,e,n;const{current:o}=v;null==o||null===(t=o.contentWindow)||void 0===t||t.addEventListener("resize",O);const r=null==o||null===(e=o.contentDocument)||void 0===e?void 0:e.querySelector("form"),i=null==o||null===(n=o.contentDocument)||void 0===n?void 0:n.querySelector("button");null==i||i.addEventListener("click",A),null==r||r.addEventListener("submit",N),O()})(),(t=>{var e;const{current:n}=v,o=null==n||null===(e=n.contentDocument)||void 0===e?void 0:e.fonts;if(!(null==o?void 0:o.add))return;const r=[];document.fonts.forEach((e=>{t.includes(e.family)&&r.push(e)})),r.forEach((t=>{try{o.add(t)}catch(t){}}))})(["GuardianTextSans"])}}),E&&(0,o.jsx)("div",{children:(0,o.jsx)(u.t,{isAnnouncedByScreenReader:!0,size:"small"})}),!!L&&(0,o.jsx)(S,{text:L}),z&&(R?(0,o.jsx)("div",{children:(0,o.jsx)(j,{text:d})}):(0,o.jsxs)("div",{css:(0,r.css)(w(),i.C4.tablet,a.D[1],c.n$[0],c.n$[20]),children:[(0,o.jsx)(S,{text:"Sign up failed."}),(0,o.jsx)(p.z,{size:"small",icon:(0,o.jsx)(h.i,{}),iconSide:"right",onClick:()=>{var t;_(void 0),T(void 0),null===(t=g.current)||void 0===t||t.reset()},children:"Try again"})]})),!!P&&(0,o.jsx)("div",{css:(0,r.css)(x()),children:(0,o.jsx)(m.Z,{sitekey:P,ref:g,onChange:t=>{t?(k(l,"captcha-passed"),I(!0),(async t=>{var e;const{current:n}=v;var o;const r=null!==(o=null==n||null===(e=n.contentDocument)||void 0===e?void 0:e.querySelector('input[type="email"]'))&&void 0!==o?o:null;var i;const a=null!==(i=null==r?void 0:r.value)&&void 0!==i?i:"";k(l,"form-submission");const c=await(async(t,e)=>{const n=[];return e.forEach(((t,e)=>{n.push("".concat(encodeURIComponent(e),"=").concat(encodeURIComponent(t.toString())))})),fetch(t,{method:"POST",body:n.join("&"),headers:{Accept:"application/json","Content-Type":"application/x-www-form-urlencoded"}})})(window.guardian.config.page.ajaxUrl+"/email",((t,e,n)=>{var o;const r=window.location.origin+window.location.pathname;var i;const a=null!==(i=null===(o=window.guardian.ophan)||void 0===o?void 0:o.pageViewId)&&void 0!==i?i:"",c=new FormData;return c.append("email",t),c.append("csrfToken",""),c.append("listName",e),c.append("ref",r),c.append("refViewId",a),c.append("name",""),window.guardian.config.switches.emailSignupRecaptcha&&c.append("g-recaptcha-response",n),c})(a,l,t));I(!1),T(c.ok),k(l,c.ok?"submission-confirmed":"submission-failed")})(t).catch((t=>{console.error(t),k(l,"form-submit-error"),_("Sorry, there was an error signing you up."),I(!1)}))):k(l,"captcha-not-passed")},onError:()=>{var t;k(l,"captcha-load-error"),_("Sorry, the reCAPTCHA failed to load."),null===(t=g.current)||void 0===t||t.reset()},size:"invisible"})})]})}}}]);
//# sourceMappingURL=SecureSignupIframe-importable.modern.b1f82e69c1039609b26c.js.map