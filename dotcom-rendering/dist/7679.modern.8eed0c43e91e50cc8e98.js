(self.webpackChunk_guardian_dotcom_rendering=self.webpackChunk_guardian_dotcom_rendering||[]).push([[7679],{5036:e=>{e.exports=function(e,t,n){n=n||{};var r=t.content,i=t.attributes;return function(t){return e("svg",Object.assign({dangerouslySetInnerHTML:{__html:r}},i,t),t&&t.children)}}},5951:(e,t,n)=>{var r=n(5036),i=n(3904);e.exports=r.bind(null,i.createElement.bind(i))},4857:(e,t,n)=>{"use strict";n.d(t,{S:()=>i});const r=(e,t,n)=>{const r=1!==t;switch(e){case"s":return n?" seconds ago":"s ago";case"m":return n&&r?" minutes ago":n?" minute ago":"m ago";case"h":return n&&r?" hours ago":n?" hour ago":"h ago";case"d":return n?" days ago":"d ago"}},i=(e,t)=>{const n=new Date(e),i=new Date,o=null==t?void 0:t.verbose;var s;const c=null!==(s=null==t?void 0:t.daysUntilAbsolute)&&void 0!==s?s:7,l=Math.floor((i.getTime()-n.getTime())/1e3),a=l<15,d=l<55,u=l<3300,p=(e=>{const t=new Date;return e.getTime()>t.getTime()-864e5})(n),b=(e=>{const t=new Date,n=new Date;return n.setDate(t.getDate()-1),e.toDateString()===n.toDateString()})(n),h=l<24*c*60*60;if(l<0)return!1;if(a)return"now";if(d)return"".concat(l).concat(r("s",l,o));if(u){const e=Math.round(l/60);return"".concat(e).concat(r("m",e,o))}if(p){const e=Math.round(l/3600);return"".concat(e).concat(r("h",e,o))}if(b&&o)return"Yesterday".concat(" ".concat((f=n).getHours(),".").concat(f.getMinutes().toString().padStart(2,"0")));if(h){const e=Math.round(l/3600/24);return"".concat(e).concat(r("d",e,o))}return[n.getDate(),o?n.toLocaleString("en-GB",{month:"long"}):n.toLocaleString("en-GB",{month:"short"}),n.getFullYear()].join(" ");var f}},1919:(e,t,n)=>{"use strict";var r;n.d(t,{Y:()=>r}),function(e){e[e.Standard=0]="Standard",e[e.Gallery=1]="Gallery",e[e.Audio=2]="Audio",e[e.Video=3]="Video",e[e.Review=4]="Review",e[e.Analysis=5]="Analysis",e[e.Explainer=6]="Explainer",e[e.Comment=7]="Comment",e[e.Letter=8]="Letter",e[e.Feature=9]="Feature",e[e.LiveBlog=10]="LiveBlog",e[e.DeadBlog=11]="DeadBlog",e[e.Recipe=12]="Recipe",e[e.MatchReport=13]="MatchReport",e[e.Interview=14]="Interview",e[e.Editorial=15]="Editorial",e[e.Quiz=16]="Quiz",e[e.Interactive=17]="Interactive",e[e.PhotoEssay=18]="PhotoEssay",e[e.PrintShop=19]="PrintShop",e[e.Obituary=20]="Obituary",e[e.Correction=21]="Correction",e[e.FullPageInteractive=22]="FullPageInteractive",e[e.NewsletterSignup=23]="NewsletterSignup",e[e.Timeline=24]="Timeline",e[e.Profile=25]="Profile"}(r||(r={}))},4516:(e,t,n)=>{"use strict";var r;n.d(t,{D:()=>r}),function(e){e[e.Standard=0]="Standard",e[e.Immersive=1]="Immersive",e[e.Showcase=2]="Showcase",e[e.NumberedList=3]="NumberedList"}(r||(r={}))},5575:(e,t,n)=>{"use strict";var r;n.d(t,{D:()=>r}),function(e){e[e.News=0]="News",e[e.Opinion=1]="Opinion",e[e.Sport=2]="Sport",e[e.Culture=3]="Culture",e[e.Lifestyle=4]="Lifestyle"}(r||(r={}))},5364:(e,t,n)=>{"use strict";var r;n.d(t,{v:()=>r}),function(e){e[e.SpecialReport=5]="SpecialReport",e[e.Labs=6]="Labs",e[e.SpecialReportAlt=7]="SpecialReportAlt"}(r||(r={}))},863:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});const r={mobile:320,mobileMedium:375,mobileLandscape:480,phablet:660,tablet:740,desktop:980,leftCol:1140,wide:1300}},1810:(e,t,n)=>{"use strict";n.d(t,{C4:()=>l,Dp:()=>c,vX:()=>a});var r=n(863);const i=e=>"@media (min-width: ".concat("".concat(e,"px"),")"),o=e=>"@media (max-width: ".concat("".concat(e-1,"px"),")"),s=(e,t)=>"@media (min-width: ".concat("".concat(e,"px"),") and (max-width: ").concat("".concat(t-1,"px"),")"),c={mobile:i(r.A.mobile),mobileMedium:i(r.A.mobileMedium),mobileLandscape:i(r.A.mobileLandscape),phablet:i(r.A.phablet),tablet:i(r.A.tablet),desktop:i(r.A.desktop),leftCol:i(r.A.leftCol),wide:i(r.A.wide)},l={mobile:o(r.A.mobile),mobileMedium:o(r.A.mobileMedium),mobileLandscape:o(r.A.mobileLandscape),phablet:o(r.A.phablet),tablet:o(r.A.tablet),desktop:o(r.A.desktop),leftCol:o(r.A.leftCol),wide:o(r.A.wide)},a={mobile:{and:{mobileMedium:s(r.A.mobile,r.A.mobileMedium),mobileLandscape:s(r.A.mobile,r.A.mobileLandscape),phablet:s(r.A.mobile,r.A.phablet),tablet:s(r.A.mobile,r.A.tablet),desktop:s(r.A.mobile,r.A.desktop),leftCol:s(r.A.mobile,r.A.leftCol),wide:s(r.A.mobileMedium,r.A.wide)}},mobileMedium:{and:{mobileLandscape:s(r.A.mobileMedium,r.A.mobileLandscape),phablet:s(r.A.mobileMedium,r.A.phablet),tablet:s(r.A.mobileMedium,r.A.tablet),desktop:s(r.A.mobileMedium,r.A.desktop),leftCol:s(r.A.mobileMedium,r.A.leftCol),wide:s(r.A.mobileMedium,r.A.wide)}},mobileLandscape:{and:{phablet:s(r.A.mobileLandscape,r.A.phablet),tablet:s(r.A.mobileLandscape,r.A.tablet),desktop:s(r.A.mobileLandscape,r.A.desktop),leftCol:s(r.A.mobileLandscape,r.A.leftCol),wide:s(r.A.mobileLandscape,r.A.wide)}},phablet:{and:{tablet:s(r.A.phablet,r.A.tablet),desktop:s(r.A.phablet,r.A.desktop),leftCol:s(r.A.phablet,r.A.leftCol),wide:s(r.A.phablet,r.A.wide)}},tablet:{and:{desktop:s(r.A.tablet,r.A.desktop),leftCol:s(r.A.tablet,r.A.leftCol),wide:s(r.A.tablet,r.A.wide)}},desktop:{and:{leftCol:s(r.A.desktop,r.A.leftCol),wide:s(r.A.desktop,r.A.wide)}},leftCol:{and:{wide:s(r.A.leftCol,r.A.wide)}}}},9461:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(7800),i=n(4436),o=n(863),s=n(7357);const c=i.D[1],l=o.A.wide,a=e=>{let{count:t=4,color:n=s.n$[86],cssOverrides:i}=e;const o=(e=>c*(e-1)+1)(t),a="0 0 ".concat(l," ").concat(o),d=[];for(let e=0;e<t;e++)d.push((0,r.jsx)("line",{x1:0,x2:l,y1:e*c+.5,y2:e*c+.5},e));return(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100%",height:o,viewBox:a,preserveAspectRatio:"none",stroke:n,strokeWidth:1,css:i,"aria-hidden":"true",focusable:"false",children:d})}},5706:(e,t,n)=>{"use strict";n.d(t,{r:()=>c});var r=n(7800),i=n(3829),o=n(5181);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const c=e=>{var t,n,{priority:c="primary",icon:l,iconSide:a="left",cssOverrides:d,children:u}=e,p=function(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(e,["priority","icon","iconSide","cssOverrides","children"]);return(0,r.jsx)("a",(t=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){s(e,t,n[t])}))}return e}({css:(0,o.Wf)({priority:c,iconSvg:l,iconSide:a,cssOverrides:d})},p),n=null!=(n={children:(0,i.w)({children:u,iconSvg:l,iconSide:a})})?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n.push.apply(n,r)}return n}(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})),t))}},3829:(e,t,n)=>{"use strict";n.d(t,{w:()=>o});var r=n(7800),i=n(3904);const o=e=>{let{children:t,iconSvg:n,iconSide:o}=e;const s=(0,r.jsx)(i.Fragment,{children:"      "},"spacer"),c=[t];return n&&("left"===o?c.unshift(s,(0,i.cloneElement)(n,{key:"svg"})):c.push(s,(0,i.cloneElement)(n,{key:"svg"}))),c}},5181:(e,t,n)=>{"use strict";n.d(t,{Wf:()=>S});var r=n(43),i=n(3196),o=n(8322),s=n(4655),c=n(4436),l=n(683);const a={link:{textPrimary:l.DG.brand[500],textPrimaryHover:l.DG.brand[500],textSecondary:l.DG.neutral[7],textSecondaryHover:l.DG.neutral[7]}};function d(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function u(){const e=d(["\n\tposition: relative;\n\t",";\n\tcursor: pointer;\n\ttext-decoration: underline;\n\ttext-underline-position: under;\n\ttext-underline-offset: 5%;\n\n\tdisplay: inline;\n\talign-items: center;\n\n\t&:focus {\n\t\t",";\n\t}\n\n\t&:hover {\n\t\t/* If the hover text decoration thickness is not set, we default to the initial value. */\n\t\ttext-decoration-thickness: var(--source-text-decoration-thickness, auto);\n\t}\n"]);return u=function(){return e},e}function p(){const e=d(["\n\t/* override user agent styles */\n\tborder: none;\n\tbackground: transparent;\n\tpadding: 0;\n"]);return p=function(){return e},e}function b(){const e=d(["\n\tcolor: ",";\n\n\t&:hover {\n\t\tcolor: ",";\n\t}\n"]);return b=function(){return e},e}function h(){const e=d(["\n\tcolor: ",";\n\n\t&:hover {\n\t\tcolor: ",";\n\t}\n"]);return h=function(){return e},e}function f(){const e=d(["\n\tsvg {\n\t\tfill: currentColor;\n\t\t/*\n\t\tTODO: hardcoded bottom margin to vertically align\n\t\ticons with text. This needs to be revisited when\n\t\tthe rules of icon spacing have been formalised\n\t\t */\n\t\tmargin-bottom: -3px;\n\t\twidth: ","px;\n\t\theight: auto;\n\t}\n"]);return f=function(){return e},e}function v(){const e=d(["\n\tsvg {\n\t\tmargin-left: -","px;\n\t}\n"]);return v=function(){return e},e}function m(){const e=d(["\n\tsvg {\n\t\tmargin-left: -","px;\n\t\tmargin-right: ","px;\n\t}\n"]);return m=function(){return e},e}l.DG.neutral[100],l.DG.neutral[100],l.DG.neutral[7],l.DG.neutral[7];const g=(0,r.css)(u(),i.OS.medium(),o.y),w=(0,r.css)(p()),A=(0,r.css)(f(),s.bf.iconXsmall),x=(0,r.css)(v(),c.D[5]),j=(0,r.css)(m(),c.D[6],c.D[1]),y={primary:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a.link;return(0,r.css)(b(),e.textPrimary,e.textPrimaryHover)},secondary:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a.link;return(0,r.css)(h(),e.textSecondary,e.textSecondaryHover)}},O={right:x,left:j},S=e=>{let{isButton:t,priority:n,iconSvg:r,iconSide:i="left",cssOverrides:o}=e;return e=>[g,t?w:"",y[n](e.link),r?A:"",r?O[i]:"",o]}},8536:(e,t,n)=>{"use strict";n.d(t,{m:()=>a});var r=n(7800),i=n(43),o=n(4655),s=n(1083);function c(){const e=(t=["\n\t\t\t\t\t","\n\t\t\t\t"],n||(n=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}})));var t,n;return c=function(){return e},e}const l=e=>{let{size:t}=e;return(0,r.jsx)("svg",{width:t?o.EA[t]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2 15.75h3.75L11 21h1V3h-1L5.75 8.25H2l-1 1v5.5l1 1ZM21.3 12c0 2.7-.925 5.175-2.5 7.175l.55.525A9.906 9.906 0 0 0 23 12c0-3.125-1.425-5.9-3.65-7.725l-.55.525c1.575 2 2.5 4.475 2.5 7.2Zm-5.2 0c0 1.575-.425 2.975-1.275 4.2l.65.65C16.75 15.575 17.5 13.9 17.5 12c0-1.925-.75-3.6-2.025-4.875l-.65.65C15.675 9 16.1 10.425 16.1 12Z"})})},a=e=>{let{size:t,isAnnouncedByScreenReader:n=!1}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l,{size:t}),n?(0,r.jsx)("span",{css:(0,i.css)(c(),s.j),children:"Audio"}):""]})}},6823:(e,t,n)=>{"use strict";n.d(t,{M:()=>a});var r=n(7800),i=n(43),o=n(4655),s=n(1083);function c(){const e=(t=["\n\t\t\t\t\t","\n\t\t\t\t"],n||(n=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}})));var t,n;return c=function(){return e},e}const l=e=>{let{size:t}=e;return(0,r.jsx)("svg",{width:t?o.EA[t]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M23 6.5v10.975l-1.475 1.55H2.5L1 17.55V6.5L2.5 5h4.975l2.5-2.5H14L16.5 5h5.025L23 6.5Zm-11 9.75c2.5 0 4.525-2 4.525-4.475 0-2.5-2.025-4.5-4.525-4.5-2.5 0-4.5 2-4.5 4.5 0 2.475 2 4.475 4.5 4.475Z"})})},a=e=>{let{size:t,isAnnouncedByScreenReader:n=!1}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l,{size:t}),n?(0,r.jsx)("span",{css:(0,i.css)(c(),s.j),children:"Camera"}):""]})}},2383:(e,t,n)=>{"use strict";n.d(t,{O:()=>a});var r=n(7800),i=n(43),o=n(4655),s=n(1083);function c(){const e=(t=["\n\t\t\t\t\t","\n\t\t\t\t"],n||(n=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}})));var t,n;return c=function(){return e},e}const l=e=>{let{size:t}=e;return(0,r.jsx)("svg",{width:t?o.EA[t]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M23 10.75h-1.25l-.6-4.525L15.4 12 14 10.575l5.725-5.75-4.475-.575V3h7.275l.475.475v7.275ZM11 8 9.975 9H3v10h16v-5l.975-1H21v6.975L19.975 21h-18L1 19.975V8l.975-1H11v1Z"})})},a=e=>{let{size:t,isAnnouncedByScreenReader:n=!1}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l,{size:t}),n?(0,r.jsx)("span",{css:(0,i.css)(c(),s.j),children:"External link"}):""]})}},2679:(e,t,n)=>{"use strict";n.d(t,{P:()=>a});var r=n(7800),i=n(43),o=n(4655),s=n(1083);function c(){const e=(t=["\n\t\t\t\t\t","\n\t\t\t\t"],n||(n=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}})));var t,n;return c=function(){return e},e}const l=e=>{let{size:t}=e;return(0,r.jsx)("svg",{width:t?o.EA[t]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20.075 12.35v-.7L4.475 5.2l-.575.45v12.7l.575.4 15.6-6.4Z"})})},a=e=>{let{size:t,isAnnouncedByScreenReader:n=!1}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l,{size:t}),n?(0,r.jsx)("span",{css:(0,i.css)(c(),s.j),children:"Play"}):""]})}},1635:(e,t,n)=>{"use strict";n.d(t,{A:()=>a});var r=n(7800),i=n(43),o=n(4655),s=n(1083);function c(){const e=(t=["\n\t\t\t\t\t","\n\t\t\t\t"],n||(n=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}})));var t,n;return c=function(){return e},e}const l=e=>{let{size:t}=e;return(0,r.jsx)("svg",{width:t?o.EA[t]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3 5 1 7v10l2 2h11.5V5H3Zm18.5.5-5 5v3l5 5H23v-13h-1.5Z"})})},a=e=>{let{size:t,isAnnouncedByScreenReader:n=!1}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l,{size:t}),n?(0,r.jsx)("span",{css:(0,i.css)(c(),s.j),children:"Video"}):""]})}}}]);
//# sourceMappingURL=7679.modern.8eed0c43e91e50cc8e98.js.map