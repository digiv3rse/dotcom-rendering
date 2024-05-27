"use strict";(self.webpackChunk_guardian_dotcom_rendering=self.webpackChunk_guardian_dotcom_rendering||[]).push([[3725],{5663:(e,t,n)=>{n.r(t),n.d(t,{BrazeEndOfArticleComponent:()=>be});var r=n(3904),i=n(43),o=n(2631),a=n(9525),s=n(7162),c=n(5246),l=n(2933),d=n(6027),u=n(1698),p=n(3965),m=n(293),h=n(4365),g=n(4686),f=n(2990),b=n(3921),x=n(427);function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){A(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function A(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function j(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o=[],a=!0,s=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(e){s=!0,i=e}finally{try{a||null==n.return||n.return()}finally{if(s)throw i}}return o}}(e,t)||w(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e,t){if(e){if("string"==typeof e)return S(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?S(e,t):void 0}}function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var O,E,M,I,k,P=function(e,t){try{t()}catch(t){t instanceof Error&&console.log("Error (".concat(e,"): "),t.message)}},D=["https://media.guim.co.uk/","https://i.guim.co.uk/"],T={button:(0,i.css)("background-color:",a.r[400],";color:",a.n$[100],";&:hover{background-color:",a.r[400],";}"),thankYouText:(0,i.css)(s.d1.medium({fontWeight:"bold"}),";color:",a.n$[0],";"),errorText:(0,i.css)(s.d1.medium({fontWeight:"bold"}),";color:",a.n$[0],";margin-bottom:16px;"),newslettersLinkPeriod:(0,i.css)("color:",a.n$[0],";")},R=function(e){return(0,i.jsx)(o.a,{theme:u.Zs},(0,i.jsx)(p.z,{css:T.button,onClick:e.onSignUpClick},"Sign up"))},B=function(e){var t=e.subscribeToNewsletter,n=e.newsletterId,o=e.ophanComponentId,a=e.trackClick,s=j((0,r.useState)("DEFAULT"),2),c=s[0],l=s[1],d=function(){l("IN_PROGRESS"),a({internalButtonId:0,ophanComponentId:o}),t(n).then((function(){return l("SUCCESS")})).catch((function(){l("FAILURE")}))};switch(c){case"DEFAULT":return(0,i.jsx)(R,{onSignUpClick:d});case"FAILURE":return(0,i.jsx)(r.default.Fragment,null,(0,i.jsx)("div",{css:T.errorText},"There was an error signing up to the newsletter. Please try again"),(0,i.jsx)(R,{onSignUpClick:d}));case"IN_PROGRESS":return(0,i.jsx)(L,null);case"SUCCESS":return(0,i.jsx)(r.default.Fragment,null,(0,i.jsx)("div",{css:T.thankYouText},"Thank you."),(0,i.jsx)("div",null,(0,i.jsx)(m.r,{href:"https://manage.theguardian.com/email-prefs",priority:"primary"},"Manage my newsletters"),(0,i.jsx)("span",{css:T.newslettersLinkPeriod},".")))}},U=(0,i.css)("circle{animation:",(0,i.keyframes)(O||(E=["\n    0% {\n        transform: scale(1);\n        filter: brightness(1);\n    }\n    15% {\n        transform: scale(1.333);\n        filter: brightness(0.7);\n    }\n    30% {\n        transform: scale(1);\n        filter: brightness(1);\n    }\n"],M||(M=E.slice(0)),O=Object.freeze(Object.defineProperties(E,{raw:{value:Object.freeze(M)}}))))," 1.5s ease infinite;}#dot_1{animation-delay:0ms;transform-origin:3px 3.5px;}#dot_2{animation-delay:400ms;transform-origin:17.4px 3.5px;}#dot_3{animation-delay:800ms;transform-origin:31.7px 3.5px;}"),L=function(){return(0,i.jsx)("svg",{width:"50",height:"17",viewBox:"-5 -5 45 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",css:U},(0,i.jsx)("g",{id:"Dots step 1"},(0,i.jsx)("g",{id:"Group 660"},(0,i.jsx)("circle",{id:"dot_1",opacity:"0.5",cx:"3.0152",cy:"3.56641",r:"3",fill:"#707070"}),(0,i.jsx)("circle",{id:"dot_2",opacity:"0.5",cx:"17.3748",cy:"3.56641",r:"3",fill:"#707070"}),(0,i.jsx)("circle",{id:"dot_3",opacity:"0.5",cx:"31.7348",cy:"3.56641",r:"3",fill:"#707070"}))))},N={container:{name:"1r962iv",styles:"padding:4px"},clock:{name:"1g4x3x3",styles:"position:relative;top:2px;margin-right:4px;svg{fill:#999999;height:16px;width:16px;}"},text:(0,i.css)("color:",a.n$[20],";",s.OS.medium()," margin-left:4px;")},z=function(e){var t=e.frequency;return t?(0,i.jsx)("div",{css:N.container},(0,i.jsx)("span",{css:N.clock},(0,i.jsx)(h.h,null)),(0,i.jsx)("span",{css:N.text},t)):null},G={epicContainer:(0,i.css)("padding:4px 8px 12px;border-top:1px solid ",a.r[400],";background-color:",a.n$[97],";display:flex;flex-direction:row;max-width:620px;"),rightSection:{name:"h044v7",styles:"padding-left:12px"},image:(0,i.css)("width:196px;",c.C4.desktop,"{width:96px;}"),heading:(0,i.css)(s.Se.small({fontWeight:"bold"}),";margin:0;max-width:100%;",c.Dp.mobileLandscape,"{",s.Se.small({fontWeight:"bold"}),";}",c.Dp.tablet,"{max-width:100%;}"),paragraph:(0,i.css)(s.d1.medium()," line-height:135%;margin:",l.D[5],"px 0 ",l.D[5],"px;max-width:100%;color:",a.n$[0],";",c.Dp.phablet,"{max-width:90%;}",c.Dp.tablet,"{max-width:100%;}",c.Dp.desktop,"{margin:",l.D[3],"px 0 ",l.D[4],"px;max-width:42rem;}",c.Dp.leftCol,"{max-width:37rem;}",c.Dp.wide,"{max-width:42rem;}")},_=function(e){var t=e.brazeMessageProps,n=t.header,r=t.frequency,s=t.paragraph1,c=t.paragraph2,l=t.imageUrl,d=t.newsletterId,u=t.ophanComponentId,p=e.subscribeToNewsletter,m=e.trackClick;return function(e){var t=e.header,n=e.frequency,r=e.paragraph1,i=e.imageUrl,o=e.newsletterId,a=e.ophanComponentId;return!(!(t&&n&&r&&i&&o&&a)||!function(e){return D.some((function(t){return e.startsWith(t)}))}(i)&&(console.log("Image URL ".concat(i," is not allowed")),1))}(e.brazeMessageProps)?(0,i.jsx)(o.a,{theme:a.UQ},(0,i.jsx)("section",{css:G.epicContainer},(0,i.jsx)("div",null,(0,i.jsx)("img",{css:G.image,src:l})),(0,i.jsx)("div",{css:G.rightSection},(0,i.jsx)("span",{css:G.heading},n),(0,i.jsx)(z,{frequency:r}),(0,i.jsx)("p",{css:G.paragraph},s),c?(0,i.jsx)("p",{css:G.paragraph},c):null,(0,i.jsx)(B,{subscribeToNewsletter:p,newsletterId:d,ophanComponentId:u,trackClick:m})))):null},H={name:"bjn8wh",styles:"position:relative"},Z=(0,i.css)("svg{fill:",a.n$[7],";}"),F=(0,i.css)("display:none;position:absolute;top:15px;right:0;z-index:99999;",c.Dp.tablet,"{display:block;}"),K=(0,i.css)(s.d1.medium(),";margin:0;a{color:",a.n$[0],";}"),W=(0,i.css)(s.Se.xxsmall({fontWeight:"bold"}),";margin:",l.D[2],"px 0;"),$=function(e){var t=e.remindMeConfirmationText,n=e.remindMeConfirmationHeaderText,r=e.onClose;return(0,i.jsx)("div",{css:H},(0,i.jsx)("div",{css:F},(0,i.jsx)(p.z,{onClick:function(){return r()},icon:(0,i.jsx)(g.D,null),priority:"subdued",size:"small",hideLabel:!0,css:Z},"Close")),(0,i.jsx)(x.Z,null),n&&(0,i.jsx)("h4",{css:W},n),(0,i.jsx)("p",{css:K},t," You can manage your email preferences in the My Account area,"," ",(0,i.jsx)("a",{href:"https://manage.theguardian.com/email-prefs"},"emails and marketing section"),"."))},Y=(0,i.css)("margin:",l.D[4],"px ",l.D[2],"px ",l.D[1],"px 0;display:flex;flex-wrap:wrap;align-items:center;&.hidden{display:none;}"),V=(0,i.css)("display:inline-block;width:auto;height:25px;margin:",l.D[1],"px 0;"),q=(0,i.css)("margin:",l.D[1],"px ",l.D[2],"px ",l.D[1],"px 0;"),Q={textPrimary:a.n$[7],backgroundPrimary:a.A5[400],backgroundPrimaryHover:a.A5[300],textSecondary:a.n$[7],backgroundSecondary:a.n$[93],backgroundSecondaryHover:a.n$[86],borderSecondary:a.n$[86]},J={button:Q,link:Q},X=(0,i.css)("border:1px solid ",a.n$[7],"!important;background-color:transparent!important;color:",a.n$[7],"!important;:hover{background-color:",a.n$[86],"!important;}"),ee=function(e){var t=e.buttonUrl,n=e.buttonText,r=e.trackClick;return(0,i.jsx)("div",{css:q},(0,i.jsx)(o.a,{theme:J},(0,i.jsx)(f.Q,{href:t,icon:(0,i.jsx)(b.l,null),iconSide:"right",target:"_blank",rel:"noopener noreferrer",priority:"primary",onClick:function(){return r(0)}},n)))},te=function(e){var t=e.remindMeButtonText,n=e.onClick;return(0,i.jsx)("div",{css:q},(0,i.jsx)(o.a,{theme:J},(0,i.jsx)(p.z,{onClick:function(){return n()},priority:"tertiary",css:X},t)))},ne=function(){return(0,i.jsx)("img",{width:422,height:60,src:"https://assets.guim.co.uk/images/acquisitions/2db3a266287f452355b68d4240df8087/payment-methods.png",alt:"Accepted payment methods: Visa, Mastercard, American Express and PayPal",css:V})},re=function(e){var t=e.buttonText,n=e.buttonUrl,o=e.remindMeButtonText,a=e.remindMeConfirmationText,s=e.remindMeConfirmationHeaderText,c=e.trackClick,l=e.hidePaymentIcons,d=j((0,r.useState)("DEFAULT"),2),u=d[0],p=d[1],m="true"!==l;return"REMINDER_CONFIRMED"===u?(0,i.jsx)($,{remindMeConfirmationText:a,remindMeConfirmationHeaderText:s,onClose:function(){return p("REMINDER_CONFIRMATION_CLOSED")}}):"REMINDER_CONFIRMATION_CLOSED"===u?(0,i.jsx)("div",{css:Y},(0,i.jsx)(ee,{buttonText:t,buttonUrl:n,trackClick:c}),(0,i.jsx)(ne,null)):(0,i.jsx)("div",{css:Y},(0,i.jsx)(ee,{buttonText:t,buttonUrl:n,trackClick:c}),o&&a&&(0,i.jsx)(te,{remindMeButtonText:o,onClick:function(){c(1),p("REMINDER_CONFIRMED")}}),m&&(0,i.jsx)(ne,null))},ie={GBPCountries:{name:"United Kingdom",currency:"GBP",countries:["GB","FK","GI","GG","IM","JE","SH"],supportRegionId:"UK"},UnitedStates:{name:"United States",currency:"USD",countries:["US"],supportRegionId:"US"},AUDCountries:{name:"Australia",currency:"AUD",countries:["AU","KI","NR","NF","TV"],supportRegionId:"AU"},EURCountries:{name:"Europe",currency:"EUR",countries:["AD","AL","AT","BA","BE","BG","BL","CH","CY","CZ","DE","DK","EE","ES","FI","FO","FR","GF","GL","GP","GR","HR","HU","IE","IT","LI","LT","LU","LV","MC","ME","MF","IS","MQ","MT","NL","NO","PF","PL","PM","PT","RE","RO","RS","SE","SI","SJ","SK","SM","TF","TR","WF","YT","VA","AX"],supportRegionId:"EU"},International:{name:"International",currency:"USD",countries:["AE","AF","AG","AI","AM","AO","AQ","AR","AS","AW","AZ","BB","BD","BF","BH","BI","BJ","BM","BN","BO","BQ","BR","BS","BT","BV","BW","BY","BZ","CC","CD","CF","CG","CI","CL","CM","CN","CO","CR","CU","CV","CW","CX","DJ","DM","DO","DZ","EC","EG","EH","ER","ET","FJ","FM","GA","GD","GE","GH","GM","GN","GQ","GS","GT","GU","GW","GY","HK","HM","HN","HT","ID","IL","IN","IO","IQ","IR","JM","JO","JP","KE","KG","KH","KM","KN","KP","KR","KW","KY","KZ","LA","LB","LC","LK","LR","LS","LY","MA","MD","MG","MH","MK","ML","MM","MN","MO","MP","MR","MS","MU","MV","MW","MX","MY","MZ","NA","NC","NE","NG","NI","NP","NU","OM","PA","PE","PG","PH","PK","PN","PR","PS","PW","PY","QA","RU","RW","SA","SB","SC","SD","SG","SL","SN","SO","SR","SS","ST","SV","SX","SY","SZ","TC","TD","TG","TH","TJ","TK","TL","TM","TN","TO","TT","TW","TZ","UA","UG","UM","UY","UZ","VC","VE","VG","VI","VN","VU","WS","YE","ZA","ZM","ZW"],supportRegionId:"INT"},NZDCountries:{name:"New Zealand",currency:"NZD",countries:["NZ","CK"],supportRegionId:"NZ"},Canada:{name:"Canada",currency:"CAD",countries:["CA"],supportRegionId:"CA"}},oe={GB:"the UK",US:"the US",AU:"Australia",CA:"Canada",DE:"Germany",NZ:"New Zealand",FR:"France",NL:"the Netherlands",IE:"Ireland",SE:"Sweden",CH:"Switzerland",NO:"Norway",BE:"Belgium",IT:"Italy",IN:"India",ES:"Spain",DK:"Denmark",SG:"Singapore",AT:"Austria",FI:"Finland",HK:"Hong Kong",LU:"Luxembourg",PT:"Portugal",AE:"the UAE",MX:"Mexico",BR:"Brazil",ZA:"South Africa",TW:"Taiwan",IL:"Israel",JP:"Japan",CZ:"the Czech Republic",GR:"Greece",IS:"Iceland",TH:"Thailand",MY:"Malaysia",RO:"Romania",PL:"Poland",HU:"Hungary",TR:"Turkey",KR:"Korea",SI:"Slovenia",CL:"Chile",CO:"Colombia",QA:"Qatar",HR:"Croatia",SK:"Slovakia",ID:"Indonesia",VN:"Vietnam",CN:"China",MT:"Malta",AR:"Argentina",KE:"Kenya",PR:"Puerto Rico",RU:"Russia",EE:"Estonia",CR:"Costa Rica",PA:"Panama"},ae={GBPCountries:"£",UnitedStates:"$",AUDCountries:"$",Canada:"CA$",EURCountries:"€",NZDCountries:"NZ$",International:"$"},se=["%%CURRENCY_SYMBOL%%","%%COUNTRY_NAME%%"],ce=function(e,t){var n;if(!e)return"";e=e.replace(/%%CURRENCY_SYMBOL%%/g,function(e){if(e){var t=(n=e,Object.keys(ie).find((function(e){return ie[e].countries.includes(n)}))||"International");return ae[t]}var n;return"£"}(t));var r=null!==(n=function(e){if(e)return oe[e]}(t))&&void 0!==n?n:"";return r?e.replace(/%%COUNTRY_NAME%%/g,r):e},le=/%%.*?%%/g,de=function(e){var t,n=[],r=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=w(e))){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){s=!0,o=e},f:function(){try{a||null==n.return||n.return()}finally{if(s)throw o}}}}(Object.keys(e).filter((function(e){return/^paragraph\d$/.test(e)})).sort());try{for(r.s();!(t=r.n()).done;){var i=e[t.value];i&&n.push(i)}}catch(e){r.e(e)}finally{r.f()}return n},ue={picture:{name:"0",styles:""},rightContainer:{name:"82a6rk",styles:"flex:1"},image:{name:"1clo8ee",styles:"height:auto;width:100%;object-fit:cover"},container:(0,i.css)("display:none;",c.Dp.tablet,"{display:flex;align-items:center;padding:",l.D[1],"px ",l.D[1],"px 0;}"),leftContainer:(0,i.css)("flex:3;margin-right:",l.D[4],"px;"),text:(0,i.css)(s.Se.large({fontWeight:"bold"}),";line-height:1.35;"),imageCaptionContainer:{name:"0",styles:""},imageCaption:(0,i.css)(s.d1.medium()," margin:0;"),imageCaptionBold:(0,i.css)(s.d1.medium({fontWeight:"bold"}),";"),imageCaptionItalic:(0,i.css)(s.d1.medium({fontStyle:"italic"}),";")},pe=function(e){var t=e.authoredEpicImageUrl,n=e.authoredEpicImageAltText,r=e.authoredEpicHeader,o=e.authoredEpicBylineName,a=e.authoredEpicBylineCopy1,s=e.authoredEpicBylineCopy2;return(0,i.jsx)("div",{css:ue.container},(0,i.jsx)("div",{css:ue.leftContainer},r&&(0,i.jsx)("span",{css:ue.text},r)),(0,i.jsx)("div",{css:ue.rightContainer},(0,i.jsx)("picture",{css:ue.picture},(0,i.jsx)("source",{srcSet:"data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",media:"(max-width: ".concat(d.A.tablet-1,"px)")}),(0,i.jsx)("source",{srcSet:t,media:"(min-width: ".concat(d.A.tablet,"px)")}),(0,i.jsx)("img",{css:ue.image,src:t,alt:n})),(0,i.jsx)("div",{css:ue.imageCaptionContainer},(0,i.jsx)("p",{css:[ue.imageCaption,ue.imageCaptionBold,"",""]},o),a&&(0,i.jsx)("p",{css:[ue.imageCaption,ue.imageCaptionItalic,"",""]},a),s&&(0,i.jsx)("p",{css:ue.imageCaption},s))))},me=(0,i.css)("a{color:",a.r[400],";text-decoration:none;}a:hover{text-decoration:underline;}"),he={epicWrapper:{name:"5mr6hz",styles:"max-width:620px"},epicContainer:(0,i.css)("padding:",l.D[1],"px ",l.D[2],"px ",l.D[3],"px;border-top:1px solid #ffe500;background-color:#f6f6f6;display:flex;flex-direction:column;b,strong{font-weight:bold;}"),paragraph:(0,i.css)("margin-top:0;margin-bottom:",l.D[2],"px;",s.d1.medium()," ",me,";"),heading:(0,i.css)(s.Se.xxsmall({fontWeight:"bold"})," margin-top:0;margin-bottom:",l.D[3],"px;"),highlightText:(0,i.css)(s.d1.medium({fontWeight:"bold"})," ",me," padding:2px;background-color:",a.A5[400],";")},ge=function(e){var t=e.brazeMessageProps,n=t.heading,r=t.buttonText,s=t.buttonUrl,c=t.highlightedText,l=t.remindMeButtonText,d=t.remindMeConfirmationHeaderText,u=t.remindMeConfirmationText,p=t.ophanComponentId,m=t.hidePaymentIcons,h=t.authoredEpicHeader,g=t.authoredEpicImageUrl,f=t.authoredEpicImageAltText,b=t.authoredEpicBylineName,x=t.authoredEpicBylineCopy1,y=t.authoredEpicBylineCopy2,v=e.countryCode,A=e.trackClick;if(!function(e){var t,n,r=e.buttonText,i=e.buttonUrl,o=e.ophanComponentId,a=e.highlightedText,s=de(e),c=!!(n=null===(t=((a||"")+" "+s.join(" ")).match(le))||void 0===t?void 0:t.filter((function(e){return!se.includes("".concat(e))})))&&n.length>0;return Boolean(r&&i&&o&&s.length>0&&!c)}(e.brazeMessageProps))return null;var C=de(e.brazeMessageProps).map((function(e){return ce(e,v)})),j=ce(c,v);return(0,i.jsx)(o.a,{theme:a.UQ},(0,i.jsx)("div",{css:he.epicWrapper},(0,i.jsx)("section",{css:he.epicContainer},null!=g&&null!=f&&null!=b&&(0,i.jsx)(pe,{authoredEpicImageUrl:g,authoredEpicImageAltText:f,authoredEpicHeader:h,authoredEpicBylineName:b,authoredEpicBylineCopy1:x,authoredEpicBylineCopy2:y}),(0,i.jsx)("div",{css:he.heading},n),C.map((function(e,t){return(0,i.jsx)("p",{key:"paragraph"+t,css:he.paragraph},(0,i.jsx)("span",{dangerouslySetInnerHTML:{__html:e}}),j.length>0&&t===C.length-1?(0,i.jsx)("span",{css:he.highlightText,dangerouslySetInnerHTML:{__html:j}}):null)})),(0,i.jsx)(re,{buttonText:r,buttonUrl:s,hidePaymentIcons:m,remindMeButtonText:l,remindMeConfirmationText:u,remindMeConfirmationHeaderText:d,trackClick:function(e){return A({internalButtonId:e,ophanComponentId:p})}}))))},fe=(A(I={},"Epic",ge),A(I,"EpicWithSpecialHeader",(function(e){return(0,i.jsx)(ge,e)})),A(I,"NewsletterEpic",_),A(I,"USNewsletterEpic",(function(e){return function(e){var t=e.header,n=e.frequency,r=e.paragraph1,i=e.ophanComponentId;return Boolean(t&&n&&r&&i)}(e.brazeMessageProps)?(0,i.jsx)(_,C({},e,{brazeMessageProps:v(v({},e.brazeMessageProps),{},{imageUrl:"https://i.guim.co.uk/img/media/d0944e021b1cc7426f515fecc8034f12b7862041/0_0_784_784/master/784.png?width=196&quality=45&auto=format&s=cca73e857c5093f39ef7a2a9dc2e7ce7",newsletterId:"4300"})})):null})),A(I,"AUNewsletterEpic",(function(e){return function(e){var t=e.header,n=e.frequency,r=e.paragraph1,i=e.ophanComponentId;return Boolean(t&&n&&r&&i)}(e.brazeMessageProps)?(0,i.jsx)(_,C({},e,{brazeMessageProps:v(v({},e.brazeMessageProps),{},{imageUrl:"https://i.guim.co.uk/img/media/9f9f9c06ed5a323b13be816d5c160728c81d1bf9/0_0_784_784/master/784.png?width=196&quality=45&auto=format&s=87f06d1d5322f1fb8e2262d202f70e99",newsletterId:"4148"})})):null})),A(I,"UKNewsletterEpic",(function(e){return function(e){var t=e.header,n=e.frequency,r=e.paragraph1,i=e.ophanComponentId;return Boolean(t&&n&&r&&i)}(e.brazeMessageProps)?(0,i.jsx)(_,C({},e,{brazeMessageProps:v(v({},e.brazeMessageProps),{},{imageUrl:"https://i.guim.co.uk/img/media/568c6031be78dab6f6c28336010884f3ebd0f97c/0_0_1936_1936/master/1936.png?width=196&quality=45&auto=format&s=2a3630e9625620d5726c31c5cdbf4772",newsletterId:"4156"})})):null})),A(I,"DownToEarthNewsletterEpic",(function(e){return function(e){var t=e.header,n=e.frequency,r=e.paragraph1,i=e.ophanComponentId;return Boolean(t&&n&&r&&i)}(e.brazeMessageProps)?(0,i.jsx)(_,C({},e,{brazeMessageProps:v(v({},e.brazeMessageProps),{},{imageUrl:"https://i.guim.co.uk/img/media/591152b12591385d278b2c112d31a561a40a2e2d/0_1_648_648/648.png?width=196&s=be117e8d22a0c389daf49b369f726915",newsletterId:"4147"})})):null})),A(I,"EpicNewsletter_AU_AfternoonUpdate",(function(e){return function(e){var t=e.header,n=e.frequency,r=e.paragraph1,i=e.ophanComponentId;return Boolean(t&&n&&r&&i)}(e.brazeMessageProps)?(0,i.jsx)(_,C({},e,{brazeMessageProps:v(v({},e.brazeMessageProps),{},{imageUrl:"https://i.guim.co.uk/img/media/1abda073e6d4069ca058a190830a723d7b5a6f2a/0_0_200_200/200.png?width=200&quality=75&s=9ae7230c7e040a6c0b3e4248ac70c068",newsletterId:"6023"})})):null})),A(I,"EpicNewsletter_TheGuide",(function(e){return function(e){var t=e.header,n=e.frequency,r=e.paragraph1,i=e.ophanComponentId;return Boolean(t&&n&&r&&i)}(e.brazeMessageProps)?(0,i.jsx)(_,C({},e,{brazeMessageProps:v(v({},e.brazeMessageProps),{},{imageUrl:"https://i.guim.co.uk/img/media/d277750131b8bb53086870cd7e6adea00aadf432/0_0_200_200/200.png?width=200&quality=75&s=7a0d75b73f805685529987bba80cbccb",newsletterId:"6006"})})):null})),I),be=(k=fe,function(e){var t=k[e.componentName];if(!t)return null;var n=function(e){var t=e.submitComponentEvent,n=e.logButtonClickWithBraze,r=e.ophanComponentType;return function(e){var i=e.internalButtonId,o=e.ophanComponentId;P("ophanButtonClick",(function(){t({component:{componentType:r,id:o},action:"CLICK",value:(i+1).toString(10)})})),P("brazeButtonClick",(function(){n(i)}))}}({submitComponentEvent:e.submitComponentEvent,logButtonClickWithBraze:e.logButtonClickWithBraze,ophanComponentType:"RETENTION_EPIC"}),r=v(v({},e),{},{trackClick:n});return(0,i.jsx)(t,r)})},6027:(e,t,n)=>{n.d(t,{A:()=>r});var r={mobile:320,mobileMedium:375,mobileLandscape:480,phablet:660,tablet:740,desktop:980,leftCol:1140,wide:1300}},5246:(e,t,n)=>{n.d(t,{C4:()=>c,Dp:()=>s,vX:()=>l});var r=n(6027),i=function(e){return"@media (min-width: ".concat("".concat(e,"px"),")")},o=function(e){return"@media (max-width: ".concat("".concat(e-1,"px"),")")},a=function(e,t){return"@media (min-width: ".concat("".concat(e,"px"),") and (max-width: ","".concat(t-1,"px"),")")},s={mobile:i(r.A.mobile),mobileMedium:i(r.A.mobileMedium),mobileLandscape:i(r.A.mobileLandscape),phablet:i(r.A.phablet),tablet:i(r.A.tablet),desktop:i(r.A.desktop),leftCol:i(r.A.leftCol),wide:i(r.A.wide)},c={mobile:o(r.A.mobile),mobileMedium:o(r.A.mobileMedium),mobileLandscape:o(r.A.mobileLandscape),phablet:o(r.A.phablet),tablet:o(r.A.tablet),desktop:o(r.A.desktop),leftCol:o(r.A.leftCol),wide:o(r.A.wide)},l={mobile:{and:{mobileMedium:a(r.A.mobile,r.A.mobileMedium),mobileLandscape:a(r.A.mobile,r.A.mobileLandscape),phablet:a(r.A.mobile,r.A.phablet),tablet:a(r.A.mobile,r.A.tablet),desktop:a(r.A.mobile,r.A.desktop),leftCol:a(r.A.mobile,r.A.leftCol),wide:a(r.A.mobileMedium,r.A.wide)}},mobileMedium:{and:{mobileLandscape:a(r.A.mobileMedium,r.A.mobileLandscape),phablet:a(r.A.mobileMedium,r.A.phablet),tablet:a(r.A.mobileMedium,r.A.tablet),desktop:a(r.A.mobileMedium,r.A.desktop),leftCol:a(r.A.mobileMedium,r.A.leftCol),wide:a(r.A.mobileMedium,r.A.wide)}},mobileLandscape:{and:{phablet:a(r.A.mobileLandscape,r.A.phablet),tablet:a(r.A.mobileLandscape,r.A.tablet),desktop:a(r.A.mobileLandscape,r.A.desktop),leftCol:a(r.A.mobileLandscape,r.A.leftCol),wide:a(r.A.mobileLandscape,r.A.wide)}},phablet:{and:{tablet:a(r.A.phablet,r.A.tablet),desktop:a(r.A.phablet,r.A.desktop),leftCol:a(r.A.phablet,r.A.leftCol),wide:a(r.A.phablet,r.A.wide)}},tablet:{and:{desktop:a(r.A.tablet,r.A.desktop),leftCol:a(r.A.tablet,r.A.leftCol),wide:a(r.A.tablet,r.A.wide)}},desktop:{and:{leftCol:a(r.A.desktop,r.A.leftCol),wide:a(r.A.desktop,r.A.wide)}},leftCol:{and:{wide:a(r.A.leftCol,r.A.wide)}}}},427:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(7800),i=n(2933),o=n(6027),a=n(9525),s=i.D[1],c=o.A.wide,l=function(e){for(var t=e.count,n=void 0===t?4:t,i=e.color,o=void 0===i?a.n$[86]:i,l=e.cssOverrides,d=function(e){return s*(e-1)+1}(n),u="0 0 ".concat(c," ").concat(d),p=[],m=0;m<n;m++)p.push((0,r.jsx)("line",{x1:0,x2:c,y1:m*s+.5,y2:m*s+.5},m));return(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100%",height:d,viewBox:u,preserveAspectRatio:"none",stroke:o,strokeWidth:1,css:l,"aria-hidden":"true",focusable:"false",children:p})}},3965:(e,t,n)=>{n.d(t,{z:()=>u});var r=n(4649),i=n(8808),o=n(7800),a=n(8259),s=n(5015),c=["priority","size","icon","iconSide","hideLabel","nudgeIcon","type","isLoading","loadingAnnouncement","cssOverrides","children"];function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u=function(e){var t=e.priority,n=e.size,r=e.icon,l=e.iconSide,u=e.hideLabel,p=e.nudgeIcon,m=e.type,h=void 0===m?"button":m,g=e.isLoading,f=void 0!==g&&g,b=e.loadingAnnouncement,x=void 0===b?"Loading":b,y=e.cssOverrides,v=e.children,A=(0,i.Z)(e,c);return(0,o.jsx)("button",d(d({css:(0,s.$)({size:n,priority:t,icon:r,hideLabel:u,iconSide:l,nudgeIcon:p,cssOverrides:y,isLoading:f}),type:h,"aria-live":"polite","aria-label":f?x:void 0},A),{},{children:(0,a._)({hideLabel:u,iconSvg:r,isLoading:f,children:v})}))}},2990:(e,t,n)=>{n.d(t,{Q:()=>u});var r=n(4649),i=n(8808),o=n(7800),a=n(8259),s=n(5015),c=["priority","size","iconSide","icon","nudgeIcon","hideLabel","cssOverrides","children"];function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u=function(e){var t=e.priority,n=e.size,r=e.iconSide,l=e.icon,u=e.nudgeIcon,p=e.hideLabel,m=e.cssOverrides,h=e.children,g=(0,i.Z)(e,c);return(0,o.jsx)("a",d(d({css:(0,s.$)({size:n,priority:t,icon:l,hideLabel:p,iconSide:r,nudgeIcon:u,cssOverrides:m})},g),{},{children:(0,a._)({hideLabel:p,iconSvg:l,children:h})}))}},293:(e,t,n)=>{n.d(t,{r:()=>u});var r=n(4649),i=n(8808),o=n(7800),a=n(79),s=n(1038),c=["priority","icon","iconSide","cssOverrides","children"];function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u=function(e){var t=e.priority,n=void 0===t?"primary":t,r=e.icon,l=e.iconSide,u=void 0===l?"left":l,p=e.cssOverrides,m=e.children,h=(0,i.Z)(e,c);return(0,o.jsx)("a",d(d({css:(0,s.Wf)({priority:n,iconSvg:r,iconSide:u,cssOverrides:p})},h),{},{children:(0,a.w)({children:m,iconSvg:r,iconSide:u})}))}},79:(e,t,n)=>{n.d(t,{w:()=>o});var r=n(7800),i=n(3904),o=function(e){var t=e.children,n=e.iconSvg,o=e.iconSide,a=(0,r.jsx)(i.Fragment,{children:"      "},"spacer"),s=[t];return n&&("left"===o?s.unshift(a,(0,i.cloneElement)(n,{key:"svg"})):s.push(a,(0,i.cloneElement)(n,{key:"svg"}))),s}},1038:(e,t,n)=>{n.d(t,{Wf:()=>b});var r=n(43),i=n(7162),o=n(4623),a=n(7861),s=n(2933),c=n(2522),l={link:{textPrimary:c.DG.brand[500],textPrimaryHover:c.DG.brand[500],textSecondary:c.DG.neutral[7],textSecondaryHover:c.DG.neutral[7]}};c.DG.neutral[100],c.DG.neutral[100],c.DG.neutral[7],c.DG.neutral[7];var d=(0,r.css)("position:relative;",i.OS.medium(),";cursor:pointer;text-decoration:underline;text-underline-position:under;text-underline-offset:5%;display:inline;align-items:center;&:focus{",o.y,";}&:hover{text-decoration-thickness:var(--source-text-decoration-thickness, auto);}"),u={name:"4ygs1r",styles:"border:none;background:transparent;padding:0"},p=(0,r.css)("svg{fill:currentColor;margin-bottom:-3px;width:",a.bf.iconXsmall,"px;height:auto;}"),m=(0,r.css)("svg{margin-left:-",s.D[5],"px;}"),h=(0,r.css)("svg{margin-left:-",s.D[6],"px;margin-right:",s.D[1],"px;}"),g={primary:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l.link;return(0,r.css)("color:",e.textPrimary,";&:hover{color:",e.textPrimaryHover,";}")},secondary:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l.link;return(0,r.css)("color:",e.textSecondary,";&:hover{color:",e.textSecondaryHover,";}")}},f={right:m,left:h},b=function(e){var t=e.isButton,n=e.priority,r=e.iconSvg,i=e.iconSide,o=void 0===i?"left":i,a=e.cssOverrides;return function(e){return[d,t?u:"",g[n](e.link),r?p:"",r?f[o]:"",a]}}},3921:(e,t,n)=>{n.d(t,{l:()=>c});var r=n(7800),i=n(43),o=n(7861),a=n(9861),s=function(e){var t=e.size;return(0,r.jsx)("svg",{width:t?o.EA[t]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1 12.956h18.274l-7.167 8.575.932.932L23 12.478v-.956l-9.96-9.985-.932.932 7.166 8.575H1v1.912Z"})})},c=function(e){var t=e.size,n=e.isAnnouncedByScreenReader,o=void 0!==n&&n;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s,{size:t}),o?(0,r.jsx)("span",{css:(0,i.css)(a.j,";"),children:"Arrow right"}):""]})}},4365:(e,t,n)=>{n.d(t,{h:()=>c});var r=n(7800),i=n(43),o=n(7861),a=n(9861),s=function(e){var t=e.size;return(0,r.jsx)("svg",{width:t?o.EA[t]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-8.909-.318-.659-7.864h-.886l-.682 8.523 1.159 1.159 6.34-.59V12l-5.272-.318Z"})})},c=function(e){var t=e.size,n=e.isAnnouncedByScreenReader,o=void 0!==n&&n;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s,{size:t}),o?(0,r.jsx)("span",{css:(0,i.css)(a.j,";"),children:"Clock"}):""]})}},4686:(e,t,n)=>{n.d(t,{D:()=>c});var r=n(7800),i=n(43),o=n(7861),a=n(9861),s=function(e){var t=e.size;return(0,r.jsx)("svg",{width:t?o.EA[t]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.015 14.042 20.707 22 22 20.709 14.06 12 22 3.291 20.707 2l-8.692 7.958L3.293 2.03 2 3.321 9.97 12 2 20.679l1.293 1.291 8.722-7.928Z"})})},c=function(e){var t=e.size,n=e.isAnnouncedByScreenReader,o=void 0!==n&&n;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s,{size:t}),o?(0,r.jsx)("span",{css:(0,i.css)(a.j,";"),children:"Close"}):""]})}}}]);
//# sourceMappingURL=guardian-braze-components-end-of-article.legacy.64158304eb7115bbb2a7.js.map