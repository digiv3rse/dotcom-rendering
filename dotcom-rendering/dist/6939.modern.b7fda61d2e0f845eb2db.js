(self.webpackChunk_guardian_dotcom_rendering=self.webpackChunk_guardian_dotcom_rendering||[]).push([[6939],{3198:(e,t,r)=>{var n=NaN,o="[object Symbol]",a=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,c=/^0o[0-7]+$/i,u=parseInt,l="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g,f="object"==typeof self&&self&&self.Object===Object&&self,d=l||f||Function("return this")(),h=Object.prototype.toString,g=Math.max,p=Math.min,v=function(){return d.Date.now()};function m(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&h.call(e)==o}(e))return n;if(m(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=m(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var r=s.test(e);return r||c.test(e)?u(e.slice(2),r?2:8):i.test(e)?n:+e}e.exports=function(e,t,r){var n,o,a,i,s,c,u=0,l=!1,f=!1,d=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(t){var r=n,a=o;return n=o=void 0,u=t,i=e.apply(a,r)}function b(e){var r=e-c;return void 0===c||r>=t||r<0||f&&e-u>=a}function w(){var e=v();if(b(e))return C(e);s=setTimeout(w,function(e){var r=t-(e-c);return f?p(r,a-(e-u)):r}(e))}function C(e){return s=void 0,d&&n?h(e):(n=o=void 0,i)}function k(){var e=v(),r=b(e);if(n=arguments,o=this,c=e,r){if(void 0===s)return function(e){return u=e,s=setTimeout(w,t),l?h(e):i}(c);if(f)return s=setTimeout(w,t),h(c)}return void 0===s&&(s=setTimeout(w,t)),i}return t=y(t)||0,m(r)&&(l=!!r.leading,a=(f="maxWait"in r)?g(y(r.maxWait)||0,t):a,d="trailing"in r?!!r.trailing:d),k.cancel=function(){void 0!==s&&clearTimeout(s),u=0,n=c=o=s=void 0},k.flush=function(){return void 0===s?i:C(v())},k}},5970:(e,t,r)=>{"use strict";r.d(t,{BX:()=>I,J9:()=>j,Vp:()=>E,dL:()=>M,uU:()=>B});var n=r(9103);function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,t,r){return t&&a(e.prototype,t),r&&a(e,r),e}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],i=!0,s=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(e){s=!0,o=e}finally{try{i||null==r.return||r.return()}finally{if(s)throw o}}return a}}(e,t)||u(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){if(e){if("string"==typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?l(e,t):void 0}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var f,d,h,g,p=["https://media.guim.co.uk/","https://i.guim.co.uk/"],v=function(e){return p.some((function(t){return e.startsWith(t)}))},m=["%%CURRENCY_SYMBOL%%","%%COUNTRY_NAME%%"],y=/%%.*?%%/g,b=function(e){var t,r,n=e.buttonText,o=e.buttonUrl,a=e.ophanComponentId,i=e.highlightedText,s=w(e),c=!!(r=null===(t=((i||"")+" "+s.join(" ")).match(y))||void 0===t?void 0:t.filter((function(e){return!m.includes("".concat(e))})))&&r.length>0;return Boolean(n&&o&&a&&s.length>0&&!c)},w=function(e){var t,r=[],n=function(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=u(e))){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,s=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){s=!0,a=e},f:function(){try{i||null==r.return||r.return()}finally{if(s)throw a}}}}(Object.keys(e).filter((function(e){return/^paragraph\d$/.test(e)})).sort());try{for(n.s();!(t=n.n()).done;){var o=e[t.value];o&&r.push(o)}}catch(e){n.e(e)}finally{n.f()}return r},C=(s(f={},"AppBanner",(function(e){var t=e.header,r=e.body,n=e.cta,o=e.imageUrl;return!(!(t&&r&&n&&o)||!v(o)&&(console.log("Image URL ".concat(o," is not allowed")),1))})),s(f,"BannerWithLink",(function(e){var t=e.header,r=e.body,n=e.buttonText,o=e.buttonUrl,a=e.imageUrl,i=e.ophanComponentId;return a&&!v(a)?(console.log("Image URL ".concat(a," is not allowed")),!1):Boolean(t&&r&&n&&o&&a&&i)})),s(f,"BannerNewsletter",(function(e){var t=e.header,r=e.body,n=e.imageUrl,o=e.ophanComponentId,a=e.newsletterId,i=e.frequency;return n&&!v(n)?(console.log("Image URL ".concat(n," is not allowed")),!1):Boolean(t&&r&&n&&o&&a&&i)})),s(f,"Epic",b),s(f,"EpicWithSpecialHeader",(function(e){var t=b(e);if(t){var r=e.authoredEpicImageUrl,n=e.authoredEpicImageAltText,o=e.authoredEpicBylineName;return Boolean(r&&n&&o)}return t})),s(f,"NewsletterEpic",(function(e){var t=e.header,r=e.frequency,n=e.paragraph1,o=e.imageUrl,a=e.newsletterId,i=e.ophanComponentId;return!(!(t&&r&&n&&o&&a&&i)||!v(o)&&(console.log("Image URL ".concat(o," is not allowed")),1))})),s(f,"USNewsletterEpic",(function(e){var t=e.header,r=e.frequency,n=e.paragraph1,o=e.ophanComponentId;return Boolean(t&&r&&n&&o)})),s(f,"AUNewsletterEpic",(function(e){var t=e.header,r=e.frequency,n=e.paragraph1,o=e.ophanComponentId;return Boolean(t&&r&&n&&o)})),s(f,"UKNewsletterEpic",(function(e){var t=e.header,r=e.frequency,n=e.paragraph1,o=e.ophanComponentId;return Boolean(t&&r&&n&&o)})),s(f,"DownToEarthNewsletterEpic",(function(e){var t=e.header,r=e.frequency,n=e.paragraph1,o=e.ophanComponentId;return Boolean(t&&r&&n&&o)})),s(f,"EpicNewsletter_AU_AfternoonUpdate",(function(e){var t=e.header,r=e.frequency,n=e.paragraph1,o=e.ophanComponentId;return Boolean(t&&r&&n&&o)})),s(f,"EpicNewsletter_TheGuide",(function(e){var t=e.header,r=e.frequency,n=e.paragraph1,o=e.ophanComponentId;return Boolean(t&&r&&n&&o)})),f),k=function(){function e(t,r,n,a,i,s){o(this,e),this.id=void 0,this.appboy=void 0,this.message=void 0,this.slotName=void 0,this.cache=void 0,this.errorHandler=void 0,this.id=t,this.message=r,this.appboy=n,this.slotName=a,this.cache=i,this.errorHandler=s}return i(e,[{key:"logImpression",value:function(){try{this.appboy.logInAppMessageImpression(this.message)}catch(e){e instanceof Error&&this.errorHandler(e,"BrazeMessage.logImpression")}this.cache.remove(this.slotName,this.id,this.errorHandler)}},{key:"logButtonClick",value:function(e){var t=new this.appboy.InAppMessageButton("Button: ID ".concat(e),void 0,void 0,void 0,void 0,void 0,e);try{this.appboy.logInAppMessageButtonClick(t,this.message)}catch(e){e instanceof Error&&this.errorHandler(e,"BrazeMessage.logButtonClick")}}},{key:"extras",get:function(){return this.message.extras}}]),e}(),B=function(){function e(t,r,n){o(this,e),this.appboy=void 0,this.freshMessageBySlot=void 0,this.cache=void 0,this.errorHandler=void 0,this.appboy=t,this.cache=r,this.freshMessageBySlot={Banner:this.getFreshMessagesForSlot("Banner"),EndOfArticle:this.getFreshMessagesForSlot("EndOfArticle")},this.errorHandler=n}return i(e,[{key:"getFreshMessagesForSlot",value:function(e){var t=this;return new Promise((function(r){t.appboy.subscribeToInAppMessage((function(n){var o=n,a=o.extras;a&&a.slotName&&a.slotName===e&&(t.cache.push(e,{message:o,id:"".concat(Math.random().toString(16).slice(2),"-").concat((new Date).getTime())},t.errorHandler),r(o))}))}))}},{key:"getMessageForBanner",value:function(e){return this.getMessageForSlot("Banner",e)}},{key:"getMessageForEndOfArticle",value:function(e){return this.getMessageForSlot("EndOfArticle",e)}},{key:"getMessageForSlot",value:function(e,t){var r=this,n=this.getHighestPriorityMessageFromCache(e,t);return n?Promise.resolve(n):this.freshMessageBySlot[e].then((function(){var n=r.getHighestPriorityMessageFromCache(e,t);if(n)return Promise.resolve(n);throw new Error("No valid messages for ".concat(e," slot"))}))}},{key:"getHighestPriorityMessageFromCache",value:function(e,t){var r,n=this.cache.all(e,this.appboy,this.errorHandler).filter((function(e){return!!(t=e.message.extras)&&!!C[t.componentName]&&C[t.componentName](t);var t})),o={messagesWithFilters:(r=n).filter((function(e){return Boolean(e.message.extras.section)})),messagesWithoutFilters:r.filter((function(e){return!Boolean(e.message.extras.section)}))},a=o.messagesWithoutFilters,i=c(o.messagesWithFilters.concat(a).filter((function(e){var r;if(!e.message.extras.section||"string"!=typeof e.message.extras.section)return!0;var n=null==t||null===(r=t.section)||void 0===r?void 0:r.toLowerCase();return!!n&&e.message.extras.section.split("|").map((function(e){return e.toLowerCase()})).includes(n)})),1)[0];if(i)return new k(i.id,i.message,this.appboy,e,this.cache,this.errorHandler)}}]),e}(),E=function(){function e(){o(this,e)}return i(e,[{key:"getMessageForBanner",value:function(){return Promise.reject(new Error("No banner message"))}},{key:"getMessageForEndOfArticle",value:function(){return Promise.reject(new Error("No end of article message"))}}]),e}();(g=d||(d={})).Banner="Banner",g.EndOfArticle="EndOfArticle",function(e){e.ProfileBadge="ProfileBadge"}(h||(h={}));var O=function(){function e(t,r,n,a,i){o(this,e),this.id=void 0,this.slotName=void 0,this.card=void 0,this.appboy=void 0,this.errorHandler=void 0,this.id=t,this.slotName=r,this.card=n,this.appboy=a,this.errorHandler=i}return i(e,[{key:"logImpression",value:function(){try{this.appboy.logCardImpressions([this.card],!0)||this.errorHandler(new Error("Failed to log card impression event"),"BrazeCard.logImpressions")}catch(e){e instanceof Error&&this.errorHandler(e,"BrazeCard.logImpressions")}}},{key:"logCardClick",value:function(){try{this.appboy.logCardClick(this.card,!0)||this.errorHandler(new Error("Failed to log card click event"),"BrazeCard.logCardClick")}catch(e){e instanceof Error&&this.errorHandler(e,"BrazeCard.logCardClick")}}},{key:"logCardDismissal",value:function(){try{this.appboy.logCardDismissal(this.card)||this.errorHandler(new Error("Failed to log card dismiss event"),"BrazeCard.logCardDismiss")}catch(e){e instanceof Error&&this.errorHandler(e,"BrazeCard.logCardDismiss")}}},{key:"extras",get:function(){var e=this.card.extras;return void 0===e?{}:e}},{key:"expiry",get:function(){var e=this.card.expiresAt;return null===e?void 0:e}}]),e}(),I=function(){function e(t,r){o(this,e),this.appboy=void 0,this.errorHandler=void 0,this.appboy=t,this.errorHandler=r}return i(e,[{key:"getCardsForProfileBadge",value:function(){return this.getCardsForSlot(h.ProfileBadge)}},{key:"getCardsForSlot",value:function(e){var t=this;return this.appboy.getCachedContentCards().cards.flatMap((function(r){var n=r.extras;return n&&n.slotName&&n.slotName===e?void 0===r.id?(t.errorHandler(new Error("appboy card had no ID"),"BrazeCards.getCardsForSlot"),[]):[new O(r.id,e,r,t.appboy,t.errorHandler)]:[]}))}},{key:"lastUpdated",get:function(){return this.appboy.getCachedContentCards().lastUpdated}}]),e}(),j=function(){function e(){o(this,e)}return i(e,[{key:"getCardsForProfileBadge",value:function(){return[]}}]),e}(),x=function(e){return"".concat("gu.brazeMessageCache",".").concat(e)},S=function(e,t){var r=x(e);n.t.local.set(r,t)},A=function(e,t){return new t.HtmlMessage(e.message,e.extras,e.campaignId,e.cardId,e.triggerId,e.dismissType,e.duration,e.animateIn,e.animateOut,e.frameColor,e.htmlId,e.css,e.messageFields)},F=function(e,t){var r=function(e){var t=x(e),r=n.t.local.get(t);return Array.isArray(r)?r:[]}(e),o=r.filter((function(e){return t=e,Boolean((null==t?void 0:t.expires)&&Number.isFinite(null==t?void 0:t.expires)&&(null==t||null===(r=t.message)||void 0===r?void 0:r.id)&&(null==t||null===(n=t.message)||void 0===n||null===(o=n.message)||void 0===o?void 0:o.triggerId)&&(null==t||null===(a=t.message)||void 0===a||null===(i=a.message)||void 0===i?void 0:i.extras));var t,r,n,o,a,i})).filter((function(e){return e.expires>Date.now()}));if(r.length!==o.length){var a=r.length-o.length;t(Error("Removed ".concat(a," expired message").concat(1===a?"":"s"," from queue")),"LocalMessageCache"),S(e,o)}return o},M=function(){function e(){o(this,e)}return i(e,null,[{key:"peek",value:function(e,t,r){var n=F(e,r)[0];if(n)return{id:n.message.id,message:A(n.message.message,t)}}},{key:"all",value:function(e,t,r){return F(e,r).map((function(e){return{id:e.message.id,message:A(e.message.message,t)}}))}},{key:"remove",value:function(e,t,r){var n=F(e,r),o=n.findIndex((function(e){return e.message.id===t}));return!!(o>=0&&n.splice(o,1))&&(S(e,n),!0)}},{key:"push",value:function(e,t,r){var n=F(e,r);if(n.length<2){var o={message:t,expires:Date.now()+864e5};return n.push(o),S(e,n),!0}return r(new Error("Failed to add message to queue - queue full"),"LocalMessageCache"),!1}},{key:"clear",value:function(){for(var e in d){var t=x(e);n.t.local.remove(t)}}}]),e}()},5726:(e,t,r)=>{"use strict";r.d(t,{p:()=>o});const n=/\b\/{2,}/g,o=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.join("/").replace(n,"/")}},1279:(e,t,r)=>{"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},o=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),o.forEach((function(t){n(e,t,r[t])}))}return e}r.d(t,{DF:()=>l,Ec:()=>h,Eg:()=>g,Es:()=>a,Nh:()=>p,Pg:()=>v,bv:()=>d,lL:()=>s});const a=e=>e.get("gu.contributions.views")||void 0,i=e=>{const t=e.getDay()||7;return Date.UTC(e.getFullYear(),e.getMonth(),e.getDate()-(t-1))/864e5},s=e=>e.get("gu.history.weeklyArticleCount")||void 0,c=new Set(["environment/climate-change","environment/climate-crisis","environment/environment","science/science","politics/politics","us-news/us-politics","australia-news/australian-politics","world/world","world/europe-news","world/russia","books/books","culture/culture","world/coronavirus-outbreak","world/race","inequality/inequality","technology/technology","business/business"]),u=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e.forEach((e=>{var r;c.has(e)&&(t[e]=(null!==(r=t[e])&&void 0!==r?r:0)+1)})),t},l=(e,t,r)=>{if(!((e,t)=>{const r=i(new Date),n=e.get("gu.history.articleCountsThisWeek");if(n&&n.week===r){const i=n.articles[t]||0;return e.set("gu.history.articleCountsThisWeek",{week:r,articles:(a=o({},n.articles),s={[t]:i+1},s=null!=s?s:{},Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(s)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r}(Object(s)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(s,e))})),a)}),i>0}var a,s;return e.set("gu.history.articleCountsThisWeek",{week:r,articles:{[t]:1}}),!1})(e,t)){const t=i(new Date),n=e.get("gu.history.weeklyArticleCount")||[],o=n[0];if(o&&o.week&&o.week===t)o.count+=1,o.tags=u(r,o.tags),e.set("gu.history.weeklyArticleCount",n);else{n.unshift({week:t,count:1,tags:u(r,{})});const o=t-365,a=n.filter((e=>e.week>=o));e.set("gu.history.weeklyArticleCount",a)}}},f=(e,t,r)=>{const n=(e=>{if(URLSearchParams){const t=new URLSearchParams(window.location.search).get("force-"+e);if(t)return t}return null})(e);return fetch("".concat(t,"/").concat(e).concat(n?"?force="+n:""),{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)}).then((t=>{if(!t.ok)throw Error(t.statusText||"Supporter Revenue ".concat(e," | Api call returned HTTP status ").concat(t.status));return t})).then((e=>e.json()))},d=(e,t)=>f("epic",e,t),h=(e,t)=>f("liveblog-epic",e,t),g=(e,t)=>f("banner",e,t),p=(e,t)=>f("puzzles",e,t),v=(e,t)=>f("header",e,t)}}]);
//# sourceMappingURL=6939.modern.b7fda61d2e0f845eb2db.js.map