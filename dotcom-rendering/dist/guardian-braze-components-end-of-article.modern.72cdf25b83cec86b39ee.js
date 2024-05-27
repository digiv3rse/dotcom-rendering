"use strict";(self.webpackChunk_guardian_dotcom_rendering=self.webpackChunk_guardian_dotcom_rendering||[]).push([[3725,7392],{3280:(e,t,n)=>{n.r(t),n.d(t,{BrazeEndOfArticleComponent:()=>ge});var r=n(3904),i=n(43),o=n(2631),a=n(7357),s=n(3196),c=n(1810),l=n(4436),d=n(863),u=n(4460),p=n(3220),m=n(5706),f=n(5317),b=n(7555),h=n(1782),g=n(380),x=n(9461);function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){j(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function A(){return(A=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function C(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o=[],a=!0,s=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(e){s=!0,i=e}finally{try{a||null==n.return||n.return()}finally{if(s)throw i}}return o}}(e,t)||w(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e,t){if(e){if("string"==typeof e)return O(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?O(e,t):void 0}}function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var S,P,E,k,I,M=function(e,t){try{t()}catch(t){t instanceof Error&&console.log("Error (".concat(e,"): "),t.message)}},D=["https://media.guim.co.uk/","https://i.guim.co.uk/"],T={button:(0,i.css)("background-color:",a.r[400],";color:",a.n$[100],";&:hover{background-color:",a.r[400],";}",""),thankYouText:(0,i.css)(s.d1.medium({fontWeight:"bold"}),";color:",a.n$[0],";",""),errorText:(0,i.css)(s.d1.medium({fontWeight:"bold"}),";color:",a.n$[0],";margin-bottom:16px;",""),newslettersLinkPeriod:(0,i.css)("color:",a.n$[0],";","")},R=function(e){return(0,i.jsx)(o.a,{theme:u.Zs},(0,i.jsx)(p.z,{css:T.button,onClick:e.onSignUpClick},"Sign up"))},B=function(e){var t=e.subscribeToNewsletter,n=e.newsletterId,o=e.ophanComponentId,a=e.trackClick,s=C((0,r.useState)("DEFAULT"),2),c=s[0],l=s[1],d=function(){l("IN_PROGRESS"),a({internalButtonId:0,ophanComponentId:o}),t(n).then((function(){return l("SUCCESS")})).catch((function(){l("FAILURE")}))};switch(c){case"DEFAULT":return(0,i.jsx)(R,{onSignUpClick:d});case"FAILURE":return(0,i.jsx)(r.default.Fragment,null,(0,i.jsx)("div",{css:T.errorText},"There was an error signing up to the newsletter. Please try again"),(0,i.jsx)(R,{onSignUpClick:d}));case"IN_PROGRESS":return(0,i.jsx)(L,null);case"SUCCESS":return(0,i.jsx)(r.default.Fragment,null,(0,i.jsx)("div",{css:T.thankYouText},"Thank you."),(0,i.jsx)("div",null,(0,i.jsx)(m.r,{href:"https://manage.theguardian.com/email-prefs",priority:"primary"},"Manage my newsletters"),(0,i.jsx)("span",{css:T.newslettersLinkPeriod},".")))}},U=(0,i.css)("circle{animation:",(0,i.keyframes)(S||(P=["\n    0% {\n        transform: scale(1);\n        filter: brightness(1);\n    }\n    15% {\n        transform: scale(1.333);\n        filter: brightness(0.7);\n    }\n    30% {\n        transform: scale(1);\n        filter: brightness(1);\n    }\n"],E||(E=P.slice(0)),S=Object.freeze(Object.defineProperties(P,{raw:{value:Object.freeze(E)}}))))," 1.5s ease infinite;}#dot_1{animation-delay:0ms;transform-origin:3px 3.5px;}#dot_2{animation-delay:400ms;transform-origin:17.4px 3.5px;}#dot_3{animation-delay:800ms;transform-origin:31.7px 3.5px;}",""),L=function(){return(0,i.jsx)("svg",{width:"50",height:"17",viewBox:"-5 -5 45 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",css:U},(0,i.jsx)("g",{id:"Dots step 1"},(0,i.jsx)("g",{id:"Group 660"},(0,i.jsx)("circle",{id:"dot_1",opacity:"0.5",cx:"3.0152",cy:"3.56641",r:"3",fill:"#707070"}),(0,i.jsx)("circle",{id:"dot_2",opacity:"0.5",cx:"17.3748",cy:"3.56641",r:"3",fill:"#707070"}),(0,i.jsx)("circle",{id:"dot_3",opacity:"0.5",cx:"31.7348",cy:"3.56641",r:"3",fill:"#707070"}))))},N={container:{name:"1r962iv",styles:"padding:4px"},clock:{name:"1g4x3x3",styles:"position:relative;top:2px;margin-right:4px;svg{fill:#999999;height:16px;width:16px;}"},text:(0,i.css)("color:",a.n$[20],";",s.OS.medium()," margin-left:4px;","")},z=function(e){var t=e.frequency;return t?(0,i.jsx)("div",{css:N.container},(0,i.jsx)("span",{css:N.clock},(0,i.jsx)(f.h,null)),(0,i.jsx)("span",{css:N.text},t)):null},G={epicContainer:(0,i.css)("padding:4px 8px 12px;border-top:1px solid ",a.r[400],";background-color:",a.n$[97],";display:flex;flex-direction:row;max-width:620px;",""),rightSection:{name:"h044v7",styles:"padding-left:12px"},image:(0,i.css)("width:196px;",c.C4.desktop,"{width:96px;}",""),heading:(0,i.css)(s.Se.small({fontWeight:"bold"}),";margin:0;max-width:100%;",c.Dp.mobileLandscape,"{",s.Se.small({fontWeight:"bold"}),";}",c.Dp.tablet,"{max-width:100%;}",""),paragraph:(0,i.css)(s.d1.medium()," line-height:135%;margin:",l.D[5],"px 0 ",l.D[5],"px;max-width:100%;color:",a.n$[0],";",c.Dp.phablet,"{max-width:90%;}",c.Dp.tablet,"{max-width:100%;}",c.Dp.desktop,"{margin:",l.D[3],"px 0 ",l.D[4],"px;max-width:42rem;}",c.Dp.leftCol,"{max-width:37rem;}",c.Dp.wide,"{max-width:42rem;}","")},_=function(e){var t=e.brazeMessageProps,n=t.header,r=t.frequency,s=t.paragraph1,c=t.paragraph2,l=t.imageUrl,d=t.newsletterId,u=t.ophanComponentId,p=e.subscribeToNewsletter,m=e.trackClick;return function(e){var t=e.header,n=e.frequency,r=e.paragraph1,i=e.imageUrl,o=e.newsletterId,a=e.ophanComponentId;return!(!(t&&n&&r&&i&&o&&a)||!function(e){return D.some((function(t){return e.startsWith(t)}))}(i)&&(console.log("Image URL ".concat(i," is not allowed")),1))}(e.brazeMessageProps)?(0,i.jsx)(o.a,{theme:a.UQ},(0,i.jsx)("section",{css:G.epicContainer},(0,i.jsx)("div",null,(0,i.jsx)("img",{css:G.image,src:l})),(0,i.jsx)("div",{css:G.rightSection},(0,i.jsx)("span",{css:G.heading},n),(0,i.jsx)(z,{frequency:r}),(0,i.jsx)("p",{css:G.paragraph},s),c?(0,i.jsx)("p",{css:G.paragraph},c):null,(0,i.jsx)(B,{subscribeToNewsletter:p,newsletterId:d,ophanComponentId:u,trackClick:m})))):null},H={name:"bjn8wh",styles:"position:relative"},F=(0,i.css)("svg{fill:",a.n$[7],";}",""),K=(0,i.css)("display:none;position:absolute;top:15px;right:0;z-index:99999;",c.Dp.tablet,"{display:block;}",""),W=(0,i.css)(s.d1.medium(),";margin:0;a{color:",a.n$[0],";}",""),Z=(0,i.css)(s.Se.xxsmall({fontWeight:"bold"}),";margin:",l.D[2],"px 0;",""),$=function(e){var t=e.remindMeConfirmationText,n=e.remindMeConfirmationHeaderText,r=e.onClose;return(0,i.jsx)("div",{css:H},(0,i.jsx)("div",{css:K},(0,i.jsx)(p.z,{onClick:function(){return r()},icon:(0,i.jsx)(b.D,null),priority:"subdued",size:"small",hideLabel:!0,css:F},"Close")),(0,i.jsx)(x.Z,null),n&&(0,i.jsx)("h4",{css:Z},n),(0,i.jsx)("p",{css:W},t," You can manage your email preferences in the My Account area,"," ",(0,i.jsx)("a",{href:"https://manage.theguardian.com/email-prefs"},"emails and marketing section"),"."))},Y=(0,i.css)("margin:",l.D[4],"px ",l.D[2],"px ",l.D[1],"px 0;display:flex;flex-wrap:wrap;align-items:center;&.hidden{display:none;}",""),V=(0,i.css)("display:inline-block;width:auto;height:25px;margin:",l.D[1],"px 0;",""),q=(0,i.css)("margin:",l.D[1],"px ",l.D[2],"px ",l.D[1],"px 0;",""),Q={textPrimary:a.n$[7],backgroundPrimary:a.A5[400],backgroundPrimaryHover:a.A5[300],textSecondary:a.n$[7],backgroundSecondary:a.n$[93],backgroundSecondaryHover:a.n$[86],borderSecondary:a.n$[86]},J={button:Q,link:Q},X=(0,i.css)("border:1px solid ",a.n$[7],"!important;background-color:transparent!important;color:",a.n$[7],"!important;:hover{background-color:",a.n$[86],"!important;}",""),ee=function(e){var t=e.buttonUrl,n=e.buttonText,r=e.trackClick;return(0,i.jsx)("div",{css:q},(0,i.jsx)(o.a,{theme:J},(0,i.jsx)(h.Q,{href:t,icon:(0,i.jsx)(g.l,null),iconSide:"right",target:"_blank",rel:"noopener noreferrer",priority:"primary",onClick:function(){return r(0)}},n)))},te=function(e){var t=e.remindMeButtonText,n=e.onClick;return(0,i.jsx)("div",{css:q},(0,i.jsx)(o.a,{theme:J},(0,i.jsx)(p.z,{onClick:function(){return n()},priority:"tertiary",css:X},t)))},ne=function(){return(0,i.jsx)("img",{width:422,height:60,src:"https://assets.guim.co.uk/images/acquisitions/2db3a266287f452355b68d4240df8087/payment-methods.png",alt:"Accepted payment methods: Visa, Mastercard, American Express and PayPal",css:V})},re=function(e){var t=e.buttonText,n=e.buttonUrl,o=e.remindMeButtonText,a=e.remindMeConfirmationText,s=e.remindMeConfirmationHeaderText,c=e.trackClick,l=e.hidePaymentIcons,d=C((0,r.useState)("DEFAULT"),2),u=d[0],p=d[1],m="true"!==l;return"REMINDER_CONFIRMED"===u?(0,i.jsx)($,{remindMeConfirmationText:a,remindMeConfirmationHeaderText:s,onClose:function(){return p("REMINDER_CONFIRMATION_CLOSED")}}):"REMINDER_CONFIRMATION_CLOSED"===u?(0,i.jsx)("div",{css:Y},(0,i.jsx)(ee,{buttonText:t,buttonUrl:n,trackClick:c}),(0,i.jsx)(ne,null)):(0,i.jsx)("div",{css:Y},(0,i.jsx)(ee,{buttonText:t,buttonUrl:n,trackClick:c}),o&&a&&(0,i.jsx)(te,{remindMeButtonText:o,onClick:function(){c(1),p("REMINDER_CONFIRMED")}}),m&&(0,i.jsx)(ne,null))},ie={GBPCountries:{name:"United Kingdom",currency:"GBP",countries:["GB","FK","GI","GG","IM","JE","SH"],supportRegionId:"UK"},UnitedStates:{name:"United States",currency:"USD",countries:["US"],supportRegionId:"US"},AUDCountries:{name:"Australia",currency:"AUD",countries:["AU","KI","NR","NF","TV"],supportRegionId:"AU"},EURCountries:{name:"Europe",currency:"EUR",countries:["AD","AL","AT","BA","BE","BG","BL","CH","CY","CZ","DE","DK","EE","ES","FI","FO","FR","GF","GL","GP","GR","HR","HU","IE","IT","LI","LT","LU","LV","MC","ME","MF","IS","MQ","MT","NL","NO","PF","PL","PM","PT","RE","RO","RS","SE","SI","SJ","SK","SM","TF","TR","WF","YT","VA","AX"],supportRegionId:"EU"},International:{name:"International",currency:"USD",countries:["AE","AF","AG","AI","AM","AO","AQ","AR","AS","AW","AZ","BB","BD","BF","BH","BI","BJ","BM","BN","BO","BQ","BR","BS","BT","BV","BW","BY","BZ","CC","CD","CF","CG","CI","CL","CM","CN","CO","CR","CU","CV","CW","CX","DJ","DM","DO","DZ","EC","EG","EH","ER","ET","FJ","FM","GA","GD","GE","GH","GM","GN","GQ","GS","GT","GU","GW","GY","HK","HM","HN","HT","ID","IL","IN","IO","IQ","IR","JM","JO","JP","KE","KG","KH","KM","KN","KP","KR","KW","KY","KZ","LA","LB","LC","LK","LR","LS","LY","MA","MD","MG","MH","MK","ML","MM","MN","MO","MP","MR","MS","MU","MV","MW","MX","MY","MZ","NA","NC","NE","NG","NI","NP","NU","OM","PA","PE","PG","PH","PK","PN","PR","PS","PW","PY","QA","RU","RW","SA","SB","SC","SD","SG","SL","SN","SO","SR","SS","ST","SV","SX","SY","SZ","TC","TD","TG","TH","TJ","TK","TL","TM","TN","TO","TT","TW","TZ","UA","UG","UM","UY","UZ","VC","VE","VG","VI","VN","VU","WS","YE","ZA","ZM","ZW"],supportRegionId:"INT"},NZDCountries:{name:"New Zealand",currency:"NZD",countries:["NZ","CK"],supportRegionId:"NZ"},Canada:{name:"Canada",currency:"CAD",countries:["CA"],supportRegionId:"CA"}},oe={GB:"the UK",US:"the US",AU:"Australia",CA:"Canada",DE:"Germany",NZ:"New Zealand",FR:"France",NL:"the Netherlands",IE:"Ireland",SE:"Sweden",CH:"Switzerland",NO:"Norway",BE:"Belgium",IT:"Italy",IN:"India",ES:"Spain",DK:"Denmark",SG:"Singapore",AT:"Austria",FI:"Finland",HK:"Hong Kong",LU:"Luxembourg",PT:"Portugal",AE:"the UAE",MX:"Mexico",BR:"Brazil",ZA:"South Africa",TW:"Taiwan",IL:"Israel",JP:"Japan",CZ:"the Czech Republic",GR:"Greece",IS:"Iceland",TH:"Thailand",MY:"Malaysia",RO:"Romania",PL:"Poland",HU:"Hungary",TR:"Turkey",KR:"Korea",SI:"Slovenia",CL:"Chile",CO:"Colombia",QA:"Qatar",HR:"Croatia",SK:"Slovakia",ID:"Indonesia",VN:"Vietnam",CN:"China",MT:"Malta",AR:"Argentina",KE:"Kenya",PR:"Puerto Rico",RU:"Russia",EE:"Estonia",CR:"Costa Rica",PA:"Panama"},ae={GBPCountries:"£",UnitedStates:"$",AUDCountries:"$",Canada:"CA$",EURCountries:"€",NZDCountries:"NZ$",International:"$"},se=["%%CURRENCY_SYMBOL%%","%%COUNTRY_NAME%%"],ce=function(e,t){var n;if(!e)return"";e=e.replace(/%%CURRENCY_SYMBOL%%/g,function(e){if(e){var t=(n=e,Object.keys(ie).find((function(e){return ie[e].countries.includes(n)}))||"International");return ae[t]}var n;return"£"}(t));var r=null!==(n=function(e){if(e)return oe[e]}(t))&&void 0!==n?n:"";return r?e.replace(/%%COUNTRY_NAME%%/g,r):e},le=/%%.*?%%/g,de=function(e){var t,n=[],r=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=w(e))){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){s=!0,o=e},f:function(){try{a||null==n.return||n.return()}finally{if(s)throw o}}}}(Object.keys(e).filter((function(e){return/^paragraph\d$/.test(e)})).sort());try{for(r.s();!(t=r.n()).done;){var i=e[t.value];i&&n.push(i)}}catch(e){r.e(e)}finally{r.f()}return n},ue={picture:(0,i.css)("",""),rightContainer:{name:"82a6rk",styles:"flex:1"},image:{name:"1clo8ee",styles:"height:auto;width:100%;object-fit:cover"},container:(0,i.css)("display:none;",c.Dp.tablet,"{display:flex;align-items:center;padding:",l.D[1],"px ",l.D[1],"px 0;}",""),leftContainer:(0,i.css)("flex:3;margin-right:",l.D[4],"px;",""),text:(0,i.css)(s.Se.large({fontWeight:"bold"}),";line-height:1.35;",""),imageCaptionContainer:(0,i.css)("",""),imageCaption:(0,i.css)(s.d1.medium()," margin:0;",""),imageCaptionBold:(0,i.css)(s.d1.medium({fontWeight:"bold"}),";",""),imageCaptionItalic:(0,i.css)(s.d1.medium({fontStyle:"italic"}),";","")},pe=function(e){var t=e.authoredEpicImageUrl,n=e.authoredEpicImageAltText,r=e.authoredEpicHeader,o=e.authoredEpicBylineName,a=e.authoredEpicBylineCopy1,s=e.authoredEpicBylineCopy2;return(0,i.jsx)("div",{css:ue.container},(0,i.jsx)("div",{css:ue.leftContainer},r&&(0,i.jsx)("span",{css:ue.text},r)),(0,i.jsx)("div",{css:ue.rightContainer},(0,i.jsx)("picture",{css:ue.picture},(0,i.jsx)("source",{srcSet:"data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",media:"(max-width: ".concat(d.A.tablet-1,"px)")}),(0,i.jsx)("source",{srcSet:t,media:"(min-width: ".concat(d.A.tablet,"px)")}),(0,i.jsx)("img",{css:ue.image,src:t,alt:n})),(0,i.jsx)("div",{css:ue.imageCaptionContainer},(0,i.jsx)("p",{css:[ue.imageCaption,ue.imageCaptionBold,"",""]},o),a&&(0,i.jsx)("p",{css:[ue.imageCaption,ue.imageCaptionItalic,"",""]},a),s&&(0,i.jsx)("p",{css:ue.imageCaption},s))))},me=(0,i.css)("a{color:",a.r[400],";text-decoration:none;}a:hover{text-decoration:underline;}",""),fe={epicWrapper:{name:"5mr6hz",styles:"max-width:620px"},epicContainer:(0,i.css)("padding:",l.D[1],"px ",l.D[2],"px ",l.D[3],"px;border-top:1px solid #ffe500;background-color:#f6f6f6;display:flex;flex-direction:column;b,strong{font-weight:bold;}",""),paragraph:(0,i.css)("margin-top:0;margin-bottom:",l.D[2],"px;",s.d1.medium()," ",me,";",""),heading:(0,i.css)(s.Se.xxsmall({fontWeight:"bold"})," margin-top:0;margin-bottom:",l.D[3],"px;",""),highlightText:(0,i.css)(s.d1.medium({fontWeight:"bold"})," ",me," padding:2px;background-color:",a.A5[400],";","")},be=function(e){var t=e.brazeMessageProps,n=t.heading,r=t.buttonText,s=t.buttonUrl,c=t.highlightedText,l=t.remindMeButtonText,d=t.remindMeConfirmationHeaderText,u=t.remindMeConfirmationText,p=t.ophanComponentId,m=t.hidePaymentIcons,f=t.authoredEpicHeader,b=t.authoredEpicImageUrl,h=t.authoredEpicImageAltText,g=t.authoredEpicBylineName,x=t.authoredEpicBylineCopy1,y=t.authoredEpicBylineCopy2,v=e.countryCode,j=e.trackClick;if(!function(e){var t,n,r=e.buttonText,i=e.buttonUrl,o=e.ophanComponentId,a=e.highlightedText,s=de(e),c=!!(n=null===(t=((a||"")+" "+s.join(" ")).match(le))||void 0===t?void 0:t.filter((function(e){return!se.includes("".concat(e))})))&&n.length>0;return Boolean(r&&i&&o&&s.length>0&&!c)}(e.brazeMessageProps))return null;var A=de(e.brazeMessageProps).map((function(e){return ce(e,v)})),C=ce(c,v);return(0,i.jsx)(o.a,{theme:a.UQ},(0,i.jsx)("div",{css:fe.epicWrapper},(0,i.jsx)("section",{css:fe.epicContainer},null!=b&&null!=h&&null!=g&&(0,i.jsx)(pe,{authoredEpicImageUrl:b,authoredEpicImageAltText:h,authoredEpicHeader:f,authoredEpicBylineName:g,authoredEpicBylineCopy1:x,authoredEpicBylineCopy2:y}),(0,i.jsx)("div",{css:fe.heading},n),A.map((function(e,t){return(0,i.jsx)("p",{key:"paragraph"+t,css:fe.paragraph},(0,i.jsx)("span",{dangerouslySetInnerHTML:{__html:e}}),C.length>0&&t===A.length-1?(0,i.jsx)("span",{css:fe.highlightText,dangerouslySetInnerHTML:{__html:C}}):null)})),(0,i.jsx)(re,{buttonText:r,buttonUrl:s,hidePaymentIcons:m,remindMeButtonText:l,remindMeConfirmationText:u,remindMeConfirmationHeaderText:d,trackClick:function(e){return j({internalButtonId:e,ophanComponentId:p})}}))))},he=(j(k={},"Epic",be),j(k,"EpicWithSpecialHeader",(function(e){return(0,i.jsx)(be,e)})),j(k,"NewsletterEpic",_),j(k,"USNewsletterEpic",(function(e){return function(e){var t=e.header,n=e.frequency,r=e.paragraph1,i=e.ophanComponentId;return Boolean(t&&n&&r&&i)}(e.brazeMessageProps)?(0,i.jsx)(_,A({},e,{brazeMessageProps:v(v({},e.brazeMessageProps),{},{imageUrl:"https://i.guim.co.uk/img/media/d0944e021b1cc7426f515fecc8034f12b7862041/0_0_784_784/master/784.png?width=196&quality=45&auto=format&s=cca73e857c5093f39ef7a2a9dc2e7ce7",newsletterId:"4300"})})):null})),j(k,"AUNewsletterEpic",(function(e){return function(e){var t=e.header,n=e.frequency,r=e.paragraph1,i=e.ophanComponentId;return Boolean(t&&n&&r&&i)}(e.brazeMessageProps)?(0,i.jsx)(_,A({},e,{brazeMessageProps:v(v({},e.brazeMessageProps),{},{imageUrl:"https://i.guim.co.uk/img/media/9f9f9c06ed5a323b13be816d5c160728c81d1bf9/0_0_784_784/master/784.png?width=196&quality=45&auto=format&s=87f06d1d5322f1fb8e2262d202f70e99",newsletterId:"4148"})})):null})),j(k,"UKNewsletterEpic",(function(e){return function(e){var t=e.header,n=e.frequency,r=e.paragraph1,i=e.ophanComponentId;return Boolean(t&&n&&r&&i)}(e.brazeMessageProps)?(0,i.jsx)(_,A({},e,{brazeMessageProps:v(v({},e.brazeMessageProps),{},{imageUrl:"https://i.guim.co.uk/img/media/568c6031be78dab6f6c28336010884f3ebd0f97c/0_0_1936_1936/master/1936.png?width=196&quality=45&auto=format&s=2a3630e9625620d5726c31c5cdbf4772",newsletterId:"4156"})})):null})),j(k,"DownToEarthNewsletterEpic",(function(e){return function(e){var t=e.header,n=e.frequency,r=e.paragraph1,i=e.ophanComponentId;return Boolean(t&&n&&r&&i)}(e.brazeMessageProps)?(0,i.jsx)(_,A({},e,{brazeMessageProps:v(v({},e.brazeMessageProps),{},{imageUrl:"https://i.guim.co.uk/img/media/591152b12591385d278b2c112d31a561a40a2e2d/0_1_648_648/648.png?width=196&s=be117e8d22a0c389daf49b369f726915",newsletterId:"4147"})})):null})),j(k,"EpicNewsletter_AU_AfternoonUpdate",(function(e){return function(e){var t=e.header,n=e.frequency,r=e.paragraph1,i=e.ophanComponentId;return Boolean(t&&n&&r&&i)}(e.brazeMessageProps)?(0,i.jsx)(_,A({},e,{brazeMessageProps:v(v({},e.brazeMessageProps),{},{imageUrl:"https://i.guim.co.uk/img/media/1abda073e6d4069ca058a190830a723d7b5a6f2a/0_0_200_200/200.png?width=200&quality=75&s=9ae7230c7e040a6c0b3e4248ac70c068",newsletterId:"6023"})})):null})),j(k,"EpicNewsletter_TheGuide",(function(e){return function(e){var t=e.header,n=e.frequency,r=e.paragraph1,i=e.ophanComponentId;return Boolean(t&&n&&r&&i)}(e.brazeMessageProps)?(0,i.jsx)(_,A({},e,{brazeMessageProps:v(v({},e.brazeMessageProps),{},{imageUrl:"https://i.guim.co.uk/img/media/d277750131b8bb53086870cd7e6adea00aadf432/0_0_200_200/200.png?width=200&quality=75&s=7a0d75b73f805685529987bba80cbccb",newsletterId:"6006"})})):null})),k),ge=(I=he,function(e){var t=I[e.componentName];if(!t)return null;var n=function(e){var t=e.submitComponentEvent,n=e.logButtonClickWithBraze,r=e.ophanComponentType;return function(e){var i=e.internalButtonId,o=e.ophanComponentId;M("ophanButtonClick",(function(){t({component:{componentType:r,id:o},action:"CLICK",value:(i+1).toString(10)})})),M("brazeButtonClick",(function(){n(i)}))}}({submitComponentEvent:e.submitComponentEvent,logButtonClickWithBraze:e.logButtonClickWithBraze,ophanComponentType:"RETENTION_EPIC"}),r=v(v({},e),{},{trackClick:n});return(0,i.jsx)(t,r)})},863:(e,t,n)=>{n.d(t,{A:()=>r});const r={mobile:320,mobileMedium:375,mobileLandscape:480,phablet:660,tablet:740,desktop:980,leftCol:1140,wide:1300}},1810:(e,t,n)=>{n.d(t,{C4:()=>c,Dp:()=>s,vX:()=>l});var r=n(863);const i=e=>"@media (min-width: ".concat("".concat(e,"px"),")"),o=e=>"@media (max-width: ".concat("".concat(e-1,"px"),")"),a=(e,t)=>"@media (min-width: ".concat("".concat(e,"px"),") and (max-width: ").concat("".concat(t-1,"px"),")"),s={mobile:i(r.A.mobile),mobileMedium:i(r.A.mobileMedium),mobileLandscape:i(r.A.mobileLandscape),phablet:i(r.A.phablet),tablet:i(r.A.tablet),desktop:i(r.A.desktop),leftCol:i(r.A.leftCol),wide:i(r.A.wide)},c={mobile:o(r.A.mobile),mobileMedium:o(r.A.mobileMedium),mobileLandscape:o(r.A.mobileLandscape),phablet:o(r.A.phablet),tablet:o(r.A.tablet),desktop:o(r.A.desktop),leftCol:o(r.A.leftCol),wide:o(r.A.wide)},l={mobile:{and:{mobileMedium:a(r.A.mobile,r.A.mobileMedium),mobileLandscape:a(r.A.mobile,r.A.mobileLandscape),phablet:a(r.A.mobile,r.A.phablet),tablet:a(r.A.mobile,r.A.tablet),desktop:a(r.A.mobile,r.A.desktop),leftCol:a(r.A.mobile,r.A.leftCol),wide:a(r.A.mobileMedium,r.A.wide)}},mobileMedium:{and:{mobileLandscape:a(r.A.mobileMedium,r.A.mobileLandscape),phablet:a(r.A.mobileMedium,r.A.phablet),tablet:a(r.A.mobileMedium,r.A.tablet),desktop:a(r.A.mobileMedium,r.A.desktop),leftCol:a(r.A.mobileMedium,r.A.leftCol),wide:a(r.A.mobileMedium,r.A.wide)}},mobileLandscape:{and:{phablet:a(r.A.mobileLandscape,r.A.phablet),tablet:a(r.A.mobileLandscape,r.A.tablet),desktop:a(r.A.mobileLandscape,r.A.desktop),leftCol:a(r.A.mobileLandscape,r.A.leftCol),wide:a(r.A.mobileLandscape,r.A.wide)}},phablet:{and:{tablet:a(r.A.phablet,r.A.tablet),desktop:a(r.A.phablet,r.A.desktop),leftCol:a(r.A.phablet,r.A.leftCol),wide:a(r.A.phablet,r.A.wide)}},tablet:{and:{desktop:a(r.A.tablet,r.A.desktop),leftCol:a(r.A.tablet,r.A.leftCol),wide:a(r.A.tablet,r.A.wide)}},desktop:{and:{leftCol:a(r.A.desktop,r.A.leftCol),wide:a(r.A.desktop,r.A.wide)}},leftCol:{and:{wide:a(r.A.leftCol,r.A.wide)}}}},9461:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(7800),i=n(4436),o=n(863),a=n(7357);const s=i.D[1],c=o.A.wide,l=e=>{let{count:t=4,color:n=a.n$[86],cssOverrides:i}=e;const o=(e=>s*(e-1)+1)(t),l="0 0 ".concat(c," ").concat(o),d=[];for(let e=0;e<t;e++)d.push((0,r.jsx)("line",{x1:0,x2:c,y1:e*s+.5,y2:e*s+.5},e));return(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100%",height:o,viewBox:l,preserveAspectRatio:"none",stroke:n,strokeWidth:1,css:i,"aria-hidden":"true",focusable:"false",children:d})}},3220:(e,t,n)=>{n.d(t,{z:()=>s});var r=n(7800),i=n(9579),o=n(8185);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const s=e=>{var t,n,{priority:s,size:c,icon:l,iconSide:d,hideLabel:u,nudgeIcon:p,type:m="button",isLoading:f=!1,loadingAnnouncement:b="Loading",cssOverrides:h,children:g}=e,x=function(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(e,["priority","size","icon","iconSide","hideLabel","nudgeIcon","type","isLoading","loadingAnnouncement","cssOverrides","children"]);return(0,r.jsx)("button",(t=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({css:(0,o.$)({size:c,priority:s,icon:l,hideLabel:u,iconSide:d,nudgeIcon:p,cssOverrides:h,isLoading:f}),type:m,"aria-live":"polite","aria-label":f?b:void 0},x),n=null!=(n={children:(0,i._)({hideLabel:u,iconSvg:l,isLoading:f,children:g})})?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n.push.apply(n,r)}return n}(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})),t))}},1782:(e,t,n)=>{n.d(t,{Q:()=>s});var r=n(7800),i=n(9579),o=n(8185);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const s=e=>{var t,n,{priority:s,size:c,iconSide:l,icon:d,nudgeIcon:u,hideLabel:p,cssOverrides:m,children:f}=e,b=function(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(e,["priority","size","iconSide","icon","nudgeIcon","hideLabel","cssOverrides","children"]);return(0,r.jsx)("a",(t=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({css:(0,o.$)({size:c,priority:s,icon:d,hideLabel:p,iconSide:l,nudgeIcon:u,cssOverrides:m})},b),n=null!=(n={children:(0,i._)({hideLabel:p,iconSvg:d,children:f})})?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n.push.apply(n,r)}return n}(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})),t))}},5706:(e,t,n)=>{n.d(t,{r:()=>s});var r=n(7800),i=n(3829),o=n(5181);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const s=e=>{var t,n,{priority:s="primary",icon:c,iconSide:l="left",cssOverrides:d,children:u}=e,p=function(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(e,["priority","icon","iconSide","cssOverrides","children"]);return(0,r.jsx)("a",(t=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({css:(0,o.Wf)({priority:s,iconSvg:c,iconSide:l,cssOverrides:d})},p),n=null!=(n={children:(0,i.w)({children:u,iconSvg:c,iconSide:l})})?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n.push.apply(n,r)}return n}(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})),t))}},3829:(e,t,n)=>{n.d(t,{w:()=>o});var r=n(7800),i=n(3904);const o=e=>{let{children:t,iconSvg:n,iconSide:o}=e;const a=(0,r.jsx)(i.Fragment,{children:"      "},"spacer"),s=[t];return n&&("left"===o?s.unshift(a,(0,i.cloneElement)(n,{key:"svg"})):s.push(a,(0,i.cloneElement)(n,{key:"svg"}))),s}},5181:(e,t,n)=>{n.d(t,{Wf:()=>O});var r=n(43),i=n(3196),o=n(8322),a=n(4655),s=n(4436),c=n(683);const l={link:{textPrimary:c.DG.brand[500],textPrimaryHover:c.DG.brand[500],textSecondary:c.DG.neutral[7],textSecondaryHover:c.DG.neutral[7]}};function d(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function u(){const e=d(["\n\tposition: relative;\n\t",";\n\tcursor: pointer;\n\ttext-decoration: underline;\n\ttext-underline-position: under;\n\ttext-underline-offset: 5%;\n\n\tdisplay: inline;\n\talign-items: center;\n\n\t&:focus {\n\t\t",";\n\t}\n\n\t&:hover {\n\t\t/* If the hover text decoration thickness is not set, we default to the initial value. */\n\t\ttext-decoration-thickness: var(--source-text-decoration-thickness, auto);\n\t}\n"]);return u=function(){return e},e}function p(){const e=d(["\n\t/* override user agent styles */\n\tborder: none;\n\tbackground: transparent;\n\tpadding: 0;\n"]);return p=function(){return e},e}function m(){const e=d(["\n\tcolor: ",";\n\n\t&:hover {\n\t\tcolor: ",";\n\t}\n"]);return m=function(){return e},e}function f(){const e=d(["\n\tcolor: ",";\n\n\t&:hover {\n\t\tcolor: ",";\n\t}\n"]);return f=function(){return e},e}function b(){const e=d(["\n\tsvg {\n\t\tfill: currentColor;\n\t\t/*\n\t\tTODO: hardcoded bottom margin to vertically align\n\t\ticons with text. This needs to be revisited when\n\t\tthe rules of icon spacing have been formalised\n\t\t */\n\t\tmargin-bottom: -3px;\n\t\twidth: ","px;\n\t\theight: auto;\n\t}\n"]);return b=function(){return e},e}function h(){const e=d(["\n\tsvg {\n\t\tmargin-left: -","px;\n\t}\n"]);return h=function(){return e},e}function g(){const e=d(["\n\tsvg {\n\t\tmargin-left: -","px;\n\t\tmargin-right: ","px;\n\t}\n"]);return g=function(){return e},e}c.DG.neutral[100],c.DG.neutral[100],c.DG.neutral[7],c.DG.neutral[7];const x=(0,r.css)(u(),i.OS.medium(),o.y),y=(0,r.css)(p()),v=(0,r.css)(b(),a.bf.iconXsmall),j=(0,r.css)(h(),s.D[5]),A=(0,r.css)(g(),s.D[6],s.D[1]),C={primary:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l.link;return(0,r.css)(m(),e.textPrimary,e.textPrimaryHover)},secondary:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l.link;return(0,r.css)(f(),e.textSecondary,e.textSecondaryHover)}},w={right:j,left:A},O=e=>{let{isButton:t,priority:n,iconSvg:r,iconSide:i="left",cssOverrides:o}=e;return e=>[x,t?y:"",C[n](e.link),r?v:"",r?w[i]:"",o]}},380:(e,t,n)=>{n.d(t,{l:()=>l});var r=n(7800),i=n(43),o=n(4655),a=n(1083);function s(){const e=(t=["\n\t\t\t\t\t","\n\t\t\t\t"],n||(n=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}})));var t,n;return s=function(){return e},e}const c=e=>{let{size:t}=e;return(0,r.jsx)("svg",{width:t?o.EA[t]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1 12.956h18.274l-7.167 8.575.932.932L23 12.478v-.956l-9.96-9.985-.932.932 7.166 8.575H1v1.912Z"})})},l=e=>{let{size:t,isAnnouncedByScreenReader:n=!1}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c,{size:t}),n?(0,r.jsx)("span",{css:(0,i.css)(s(),a.j),children:"Arrow right"}):""]})}},5317:(e,t,n)=>{n.d(t,{h:()=>l});var r=n(7800),i=n(43),o=n(4655),a=n(1083);function s(){const e=(t=["\n\t\t\t\t\t","\n\t\t\t\t"],n||(n=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}})));var t,n;return s=function(){return e},e}const c=e=>{let{size:t}=e;return(0,r.jsx)("svg",{width:t?o.EA[t]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-8.909-.318-.659-7.864h-.886l-.682 8.523 1.159 1.159 6.34-.59V12l-5.272-.318Z"})})},l=e=>{let{size:t,isAnnouncedByScreenReader:n=!1}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c,{size:t}),n?(0,r.jsx)("span",{css:(0,i.css)(s(),a.j),children:"Clock"}):""]})}},7555:(e,t,n)=>{n.d(t,{D:()=>l});var r=n(7800),i=n(43),o=n(4655),a=n(1083);function s(){const e=(t=["\n\t\t\t\t\t","\n\t\t\t\t"],n||(n=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}})));var t,n;return s=function(){return e},e}const c=e=>{let{size:t}=e;return(0,r.jsx)("svg",{width:t?o.EA[t]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.015 14.042 20.707 22 22 20.709 14.06 12 22 3.291 20.707 2l-8.692 7.958L3.293 2.03 2 3.321 9.97 12 2 20.679l1.293 1.291 8.722-7.928Z"})})},l=e=>{let{size:t,isAnnouncedByScreenReader:n=!1}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c,{size:t}),n?(0,r.jsx)("span",{css:(0,i.css)(s(),a.j),children:"Close"}):""]})}}}]);
//# sourceMappingURL=guardian-braze-components-end-of-article.modern.72cdf25b83cec86b39ee.js.map