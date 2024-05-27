"use strict";(self.webpackChunk_guardian_dotcom_rendering=self.webpackChunk_guardian_dotcom_rendering||[]).push([[4181],{5289:(e,r,t)=>{t.r(r),t.d(r,{BrazeMessaging:()=>o});var n=t(6621),a=t(6849),o=function(e){var r=e.idApiUrl,t=(0,a._)(r),o=t.brazeMessages,i=t.brazeCards;return o&&(0,n.c)("tx","Braze Messages Interface loaded",o),i&&(0,n.c)("tx","Braze Cards Interface loaded",i),null}},2516:(e,r,t)=>{t.d(r,{T:()=>u,_:()=>s});var n=t(3742);function a(e){if(!e.ok)throw Error(e.statusText||"getIdApiUserData | An api call returned HTTP status ".concat(e.status));return e}var o=function(e){return fetch(e,{credentials:"include"}).then(a).then((function(e){return e.json()}))},i={},s=function(e){if(!i.idapiUserMeResponse){var r=(0,n.p)(e,"user/me");i.idapiUserMeResponse=o(r)}return i.idapiUserMeResponse},u=function(e){if(!i.idapiUserIdentifiersResponse){var r=(0,n.p)(e,"user/me/identifiers");i.idapiUserIdentifiersResponse=o(r)}return i.idapiUserIdentifiersResponse}},6849:(e,r,t)=>{t.d(r,{_:()=>E});var n=t(1504),a=t(2699),o=t(7791),i=t(824),s=t.n(i),u=t(232),c=t(4857),l=t(6621),d=t(7789),f=t(3203),p="gu.brazeUserSet",h=t(2516),g=function(){var e=(0,o.Z)(s().mark((function e(r){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,h.T)(r).then((function(e){return e.brazeUuid})).catch((function(e){window.guardian.modules.sentry.reportError(e,"getBrazeUuid")})));case 1:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),v=t(5226);function m(e,r){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,r){if(e){if("string"==typeof e)return y(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?y(e,r):void 0}}(e))||r&&e&&"number"==typeof e.length){t&&(e=t);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,s=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return i=e.done,e},e:function(e){s=!0,o=e},f:function(){try{i||null==t.return||t.return()}finally{if(s)throw o}}}}function y(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var b,w=function(e,r,t){return{isSuccessful:!1,failure:{field:e,data:r},data:t}},C=function(e,r){return[{name:"apiKey",value:Promise.resolve(window.guardian.config.page.brazeApiKey)},{name:"brazeSwitch",value:Promise.resolve(window.guardian.config.switches.brazeSwitch)},{name:"brazeUuid",value:e?g(r):Promise.resolve(null)},{name:"consent",value:new Promise((function(e,r){(0,v.onConsentChange)((function(t){try{e((0,v.getConsentFor)("braze",t))}catch(e){r(e)}}))}))},{name:"isNotPaidContent",value:Promise.resolve(!window.guardian.config.page.isPaidContent)}]},k=function(){var e=(0,o.Z)(s().mark((function e(r,t){var n,a,o,i,u,c,l,d;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=C(r,t),a={},o=m(n),e.prev=3,o.s();case 5:if((i=o.n()).done){e.next=23;break}return u=i.value,c=u.name,l=u.value,e.prev=7,e.next=10,l;case 10:if(!(d=e.sent)){e.next=15;break}a[c]=d,e.next=16;break;case 15:return e.abrupt("return",w(c,d,a));case 16:e.next=21;break;case 18:return e.prev=18,e.t0=e.catch(7),e.abrupt("return",w(c,e.t0 instanceof Error?e.t0.message:e.t0,a));case 21:e.next=5;break;case 23:e.next=28;break;case 25:e.prev=25,e.t1=e.catch(3),o.e(e.t1);case 28:return e.prev=28,o.f(),e.finish(28);case 31:return e.abrupt("return",{isSuccessful:!0,data:a});case 32:case"end":return e.stop()}}),e,null,[[3,25,28,31],[7,18]])})));return function(r,t){return e.apply(this,arguments)}}(),I={enableLogging:!0,noCookies:!0,baseUrl:"https://sdk.fra-01.braze.eu/api/v3",sessionTimeoutInSeconds:1,minimumIntervalBetweenTriggerActionsInSeconds:0,devicePropertyAllowlist:[]},x=function(){var e=(0,o.Z)(s().mark((function e(r){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(7845).then(t.t.bind(t,8e3,23));case 2:return(n=e.sent).setLogger((function(e){return(0,l.c)("tx",e)})),n.initialize(r,I),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),B=function(e){return void 0===b&&(b=x(e)),b},z=function(){var e=(0,o.Z)(s().mark((function e(r,t,a,o){var i,u,c;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i="true"===localStorage.getItem(p),u=!a&&i,c=!o&&i,!(!t&&i||u||c)){e.next=18;break}if(e.prev=5,!r){e.next=11;break}return e.next=9,B(r);case 9:e.sent.wipeData();case 11:n.dL.clear(),localStorage.removeItem(p),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(5),window.guardian.modules.sentry.reportError(e.t0,"braze-maybeWipeUserData");case 18:case"end":return e.stop()}}),e,null,[[5,15]])})));return function(r,t,n,a){return e.apply(this,arguments)}}(),M=function(){var e=(0,o.Z)(s().mark((function e(r){var t,a,o,i,h,g,v,m,y,b;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(u.t.local.isAvailable()){e.next=2;break}return e.abrupt("return",{brazeMessages:new n.Vp,brazeCards:new n.J9});case 2:return t=!!(0,c.e)({name:"GU_U",shouldMemoize:!0}),e.next=5,k(t,r);case 5:if((a=e.sent).isSuccessful){e.next=12;break}return o=a.failure,i=a.data,(0,l.c)("tx","Not attempting to show Braze messages. Dependency ".concat(o.field," failed with ").concat(String(o.data),".")),e.next=11,z(i.apiKey,i.brazeUuid,i.consent,i.brazeSwitch);case 11:return e.abrupt("return",{brazeMessages:new n.Vp,brazeCards:new n.J9});case 12:return e.prev=12,(h=(0,d.i)("braze-sdk-load")).start(),e.next=17,B(a.data.apiKey);case 17:return g=e.sent,v=h.end(),(0,f.IM)({component:"braze-sdk-load-timing",value:v}),m=function(e,r){window.guardian.modules.sentry.reportError(e,r)},localStorage.setItem(p,"true"),g.changeUser(a.data.brazeUuid),g.openSession(),y=window.guardian.config.switches.brazeContentCards?new n.BX(g,m):new n.J9,b=new n.uU(g,n.dL,m),e.abrupt("return",{brazeMessages:b,brazeCards:y});case 29:return e.prev=29,e.t0=e.catch(12),e.abrupt("return",{brazeMessages:new n.Vp,brazeCards:new n.J9});case 32:case"end":return e.stop()}}),e,null,[[12,29]])})));return function(r){return e.apply(this,arguments)}}(),E=function(e){var r=(0,a.Z)("braze-message",(function(){return M(e)})),t=r.data;return r.error?{brazeMessages:new n.Vp,brazeCards:new n.J9}:{brazeMessages:null==t?void 0:t.brazeMessages,brazeCards:null==t?void 0:t.brazeCards}}},1504:(e,r,t)=>{t.d(r,{BX:()=>z,J9:()=>M,Vp:()=>x,dL:()=>F,uU:()=>I});var n=t(232);function a(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function o(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,r,t){return r&&o(e.prototype,r),t&&o(e,t),e}function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function u(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,a,o=[],i=!0,s=!1;try{for(t=t.call(e);!(i=(n=t.next()).done)&&(o.push(n.value),!r||o.length!==r);i=!0);}catch(e){s=!0,a=e}finally{try{i||null==t.return||t.return()}finally{if(s)throw a}}return o}}(e,r)||c(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,r){if(e){if("string"==typeof e)return l(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?l(e,r):void 0}}function l(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var d,f,p,h,g=["https://media.guim.co.uk/","https://i.guim.co.uk/"],v=function(e){return g.some((function(r){return e.startsWith(r)}))},m=["%%CURRENCY_SYMBOL%%","%%COUNTRY_NAME%%"],y=/%%.*?%%/g,b=function(e){var r,t,n=e.buttonText,a=e.buttonUrl,o=e.ophanComponentId,i=e.highlightedText,s=w(e),u=!!(t=null===(r=((i||"")+" "+s.join(" ")).match(y))||void 0===r?void 0:r.filter((function(e){return!m.includes("".concat(e))})))&&t.length>0;return Boolean(n&&a&&o&&s.length>0&&!u)},w=function(e){var r,t=[],n=function(e,r){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=c(e))){t&&(e=t);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,s=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return i=e.done,e},e:function(e){s=!0,o=e},f:function(){try{i||null==t.return||t.return()}finally{if(s)throw o}}}}(Object.keys(e).filter((function(e){return/^paragraph\d$/.test(e)})).sort());try{for(n.s();!(r=n.n()).done;){var a=e[r.value];a&&t.push(a)}}catch(e){n.e(e)}finally{n.f()}return t},C=(s(d={},"AppBanner",(function(e){var r=e.header,t=e.body,n=e.cta,a=e.imageUrl;return!(!(r&&t&&n&&a)||!v(a)&&(console.log("Image URL ".concat(a," is not allowed")),1))})),s(d,"BannerWithLink",(function(e){var r=e.header,t=e.body,n=e.buttonText,a=e.buttonUrl,o=e.imageUrl,i=e.ophanComponentId;return o&&!v(o)?(console.log("Image URL ".concat(o," is not allowed")),!1):Boolean(r&&t&&n&&a&&o&&i)})),s(d,"BannerNewsletter",(function(e){var r=e.header,t=e.body,n=e.imageUrl,a=e.ophanComponentId,o=e.newsletterId,i=e.frequency;return n&&!v(n)?(console.log("Image URL ".concat(n," is not allowed")),!1):Boolean(r&&t&&n&&a&&o&&i)})),s(d,"Epic",b),s(d,"EpicWithSpecialHeader",(function(e){var r=b(e);if(r){var t=e.authoredEpicImageUrl,n=e.authoredEpicImageAltText,a=e.authoredEpicBylineName;return Boolean(t&&n&&a)}return r})),s(d,"NewsletterEpic",(function(e){var r=e.header,t=e.frequency,n=e.paragraph1,a=e.imageUrl,o=e.newsletterId,i=e.ophanComponentId;return!(!(r&&t&&n&&a&&o&&i)||!v(a)&&(console.log("Image URL ".concat(a," is not allowed")),1))})),s(d,"USNewsletterEpic",(function(e){var r=e.header,t=e.frequency,n=e.paragraph1,a=e.ophanComponentId;return Boolean(r&&t&&n&&a)})),s(d,"AUNewsletterEpic",(function(e){var r=e.header,t=e.frequency,n=e.paragraph1,a=e.ophanComponentId;return Boolean(r&&t&&n&&a)})),s(d,"UKNewsletterEpic",(function(e){var r=e.header,t=e.frequency,n=e.paragraph1,a=e.ophanComponentId;return Boolean(r&&t&&n&&a)})),s(d,"DownToEarthNewsletterEpic",(function(e){var r=e.header,t=e.frequency,n=e.paragraph1,a=e.ophanComponentId;return Boolean(r&&t&&n&&a)})),s(d,"EpicNewsletter_AU_AfternoonUpdate",(function(e){var r=e.header,t=e.frequency,n=e.paragraph1,a=e.ophanComponentId;return Boolean(r&&t&&n&&a)})),s(d,"EpicNewsletter_TheGuide",(function(e){var r=e.header,t=e.frequency,n=e.paragraph1,a=e.ophanComponentId;return Boolean(r&&t&&n&&a)})),d),k=function(){function e(r,t,n,o,i,s){a(this,e),this.id=void 0,this.appboy=void 0,this.message=void 0,this.slotName=void 0,this.cache=void 0,this.errorHandler=void 0,this.id=r,this.message=t,this.appboy=n,this.slotName=o,this.cache=i,this.errorHandler=s}return i(e,[{key:"logImpression",value:function(){try{this.appboy.logInAppMessageImpression(this.message)}catch(e){e instanceof Error&&this.errorHandler(e,"BrazeMessage.logImpression")}this.cache.remove(this.slotName,this.id,this.errorHandler)}},{key:"logButtonClick",value:function(e){var r=new this.appboy.InAppMessageButton("Button: ID ".concat(e),void 0,void 0,void 0,void 0,void 0,e);try{this.appboy.logInAppMessageButtonClick(r,this.message)}catch(e){e instanceof Error&&this.errorHandler(e,"BrazeMessage.logButtonClick")}}},{key:"extras",get:function(){return this.message.extras}}]),e}(),I=function(){function e(r,t,n){a(this,e),this.appboy=void 0,this.freshMessageBySlot=void 0,this.cache=void 0,this.errorHandler=void 0,this.appboy=r,this.cache=t,this.freshMessageBySlot={Banner:this.getFreshMessagesForSlot("Banner"),EndOfArticle:this.getFreshMessagesForSlot("EndOfArticle")},this.errorHandler=n}return i(e,[{key:"getFreshMessagesForSlot",value:function(e){var r=this;return new Promise((function(t){r.appboy.subscribeToInAppMessage((function(n){var a=n,o=a.extras;o&&o.slotName&&o.slotName===e&&(r.cache.push(e,{message:a,id:"".concat(Math.random().toString(16).slice(2),"-").concat((new Date).getTime())},r.errorHandler),t(a))}))}))}},{key:"getMessageForBanner",value:function(e){return this.getMessageForSlot("Banner",e)}},{key:"getMessageForEndOfArticle",value:function(e){return this.getMessageForSlot("EndOfArticle",e)}},{key:"getMessageForSlot",value:function(e,r){var t=this,n=this.getHighestPriorityMessageFromCache(e,r);return n?Promise.resolve(n):this.freshMessageBySlot[e].then((function(){var n=t.getHighestPriorityMessageFromCache(e,r);if(n)return Promise.resolve(n);throw new Error("No valid messages for ".concat(e," slot"))}))}},{key:"getHighestPriorityMessageFromCache",value:function(e,r){var t,n=this.cache.all(e,this.appboy,this.errorHandler).filter((function(e){return!!(r=e.message.extras)&&!!C[r.componentName]&&C[r.componentName](r);var r})),a={messagesWithFilters:(t=n).filter((function(e){return Boolean(e.message.extras.section)})),messagesWithoutFilters:t.filter((function(e){return!Boolean(e.message.extras.section)}))},o=a.messagesWithoutFilters,i=u(a.messagesWithFilters.concat(o).filter((function(e){var t;if(!e.message.extras.section||"string"!=typeof e.message.extras.section)return!0;var n=null==r||null===(t=r.section)||void 0===t?void 0:t.toLowerCase();return!!n&&e.message.extras.section.split("|").map((function(e){return e.toLowerCase()})).includes(n)})),1)[0];if(i)return new k(i.id,i.message,this.appboy,e,this.cache,this.errorHandler)}}]),e}(),x=function(){function e(){a(this,e)}return i(e,[{key:"getMessageForBanner",value:function(){return Promise.reject(new Error("No banner message"))}},{key:"getMessageForEndOfArticle",value:function(){return Promise.reject(new Error("No end of article message"))}}]),e}();(h=f||(f={})).Banner="Banner",h.EndOfArticle="EndOfArticle",function(e){e.ProfileBadge="ProfileBadge"}(p||(p={}));var B=function(){function e(r,t,n,o,i){a(this,e),this.id=void 0,this.slotName=void 0,this.card=void 0,this.appboy=void 0,this.errorHandler=void 0,this.id=r,this.slotName=t,this.card=n,this.appboy=o,this.errorHandler=i}return i(e,[{key:"logImpression",value:function(){try{this.appboy.logCardImpressions([this.card],!0)||this.errorHandler(new Error("Failed to log card impression event"),"BrazeCard.logImpressions")}catch(e){e instanceof Error&&this.errorHandler(e,"BrazeCard.logImpressions")}}},{key:"logCardClick",value:function(){try{this.appboy.logCardClick(this.card,!0)||this.errorHandler(new Error("Failed to log card click event"),"BrazeCard.logCardClick")}catch(e){e instanceof Error&&this.errorHandler(e,"BrazeCard.logCardClick")}}},{key:"logCardDismissal",value:function(){try{this.appboy.logCardDismissal(this.card)||this.errorHandler(new Error("Failed to log card dismiss event"),"BrazeCard.logCardDismiss")}catch(e){e instanceof Error&&this.errorHandler(e,"BrazeCard.logCardDismiss")}}},{key:"extras",get:function(){var e=this.card.extras;return void 0===e?{}:e}},{key:"expiry",get:function(){var e=this.card.expiresAt;return null===e?void 0:e}}]),e}(),z=function(){function e(r,t){a(this,e),this.appboy=void 0,this.errorHandler=void 0,this.appboy=r,this.errorHandler=t}return i(e,[{key:"getCardsForProfileBadge",value:function(){return this.getCardsForSlot(p.ProfileBadge)}},{key:"getCardsForSlot",value:function(e){var r=this;return this.appboy.getCachedContentCards().cards.flatMap((function(t){var n=t.extras;return n&&n.slotName&&n.slotName===e?void 0===t.id?(r.errorHandler(new Error("appboy card had no ID"),"BrazeCards.getCardsForSlot"),[]):[new B(t.id,e,t,r.appboy,r.errorHandler)]:[]}))}},{key:"lastUpdated",get:function(){return this.appboy.getCachedContentCards().lastUpdated}}]),e}(),M=function(){function e(){a(this,e)}return i(e,[{key:"getCardsForProfileBadge",value:function(){return[]}}]),e}(),E=function(e){return"".concat("gu.brazeMessageCache",".").concat(e)},S=function(e,r){var t=E(e);n.t.local.set(t,r)},U=function(e,r){return new r.HtmlMessage(e.message,e.extras,e.campaignId,e.cardId,e.triggerId,e.dismissType,e.duration,e.animateIn,e.animateOut,e.frameColor,e.htmlId,e.css,e.messageFields)},A=function(e,r){var t=function(e){var r=E(e),t=n.t.local.get(r);return Array.isArray(t)?t:[]}(e),a=t.filter((function(e){return r=e,Boolean((null==r?void 0:r.expires)&&Number.isFinite(null==r?void 0:r.expires)&&(null==r||null===(t=r.message)||void 0===t?void 0:t.id)&&(null==r||null===(n=r.message)||void 0===n||null===(a=n.message)||void 0===a?void 0:a.triggerId)&&(null==r||null===(o=r.message)||void 0===o||null===(i=o.message)||void 0===i?void 0:i.extras));var r,t,n,a,o,i})).filter((function(e){return e.expires>Date.now()}));if(t.length!==a.length){var o=t.length-a.length;r(Error("Removed ".concat(o," expired message").concat(1===o?"":"s"," from queue")),"LocalMessageCache"),S(e,a)}return a},F=function(){function e(){a(this,e)}return i(e,null,[{key:"peek",value:function(e,r,t){var n=A(e,t)[0];if(n)return{id:n.message.id,message:U(n.message.message,r)}}},{key:"all",value:function(e,r,t){return A(e,t).map((function(e){return{id:e.message.id,message:U(e.message.message,r)}}))}},{key:"remove",value:function(e,r,t){var n=A(e,t),a=n.findIndex((function(e){return e.message.id===r}));return!!(a>=0&&n.splice(a,1))&&(S(e,n),!0)}},{key:"push",value:function(e,r,t){var n=A(e,t);if(n.length<2){var a={message:r,expires:Date.now()+864e5};return n.push(a),S(e,n),!0}return t(new Error("Failed to add message to queue - queue full"),"LocalMessageCache"),!1}},{key:"clear",value:function(){for(var e in f){var r=E(e);n.t.local.remove(r)}}}]),e}()},3742:(e,r,t)=>{t.d(r,{p:()=>a});var n=/\b\/{2,}/g,a=function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return r.join("/").replace(n,"/")}}}]);
//# sourceMappingURL=BrazeMessaging-importable.legacy.6b433710afb3418a7525.js.map