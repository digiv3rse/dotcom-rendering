(self.webpackChunk_guardian_dotcom_rendering=self.webpackChunk_guardian_dotcom_rendering||[]).push([[9206],{5036:e=>{e.exports=function(e,t,i){i=i||{};var n=t.content,o=t.attributes;return function(t){return e("svg",Object.assign({dangerouslySetInnerHTML:{__html:n}},o,t),t&&t.children)}}},5951:(e,t,i)=>{var n=i(5036),o=i(3904);e.exports=n.bind(null,o.createElement.bind(o))},2949:(e,t,i)=>{"use strict";i.r(t),i.d(t,{FetchCommentCounts:()=>L});var n=i(5809),o=i(7800),a=i(2631),r=i(3904),l=i(5761),s=i(8678),d=i(5953),c=i(6325),u=i(43),p=i(7162),m=i(5246),b=i(1374),f=i.n(b),A=i(5578),h=function(e,t){return(0,u.css)("display:flex;flex-direction:row;",p.OS.xxsmall({lineHeight:"tight"}),";margin-top:-4px;padding-left:5px;padding-right:5px;color:",t?e.text.dynamoHeadline:e.text.cardFooter,";")},v=function(e,t){return(0,u.css)("svg{margin-bottom:-5px;height:14px;width:14px;margin-right:2px;fill:",t?e.text.dynamoHeadline:e.text.cardFooter,";}")},w=(0,u.css)("display:block;",m.vX.leftCol.and.wide,"{display:none;}"),g=(0,u.css)("display:none;",m.vX.leftCol.and.wide,"{display:block;}"),x=function(e){var t=e.containerPalette,i=e.format,n=e.short,a=e.long,r=e.isDynamo,l=(0,A.b)(i,t);return(0,o.jsxs)("div",{css:h(l,r),children:[(0,o.jsx)("div",{css:v(l,r),children:(0,o.jsx)(f(),{})}),(0,o.jsx)("div",{css:w,"aria-hidden":"true",children:a}),(0,o.jsx)("div",{css:g,"aria-hidden":"true",children:n})]})};function C(){var e=[];return document.querySelectorAll("[data-discussion-id]").forEach((function(t){if(t instanceof HTMLElement)try{var i=t.dataset,n=i.discussionId,o=i.format,a=i.isDynamo,r=i.containerPalette;n&&o&&e.push({discussionId:n,format:JSON.parse(o),isDynamo:!!a||void 0,containerPalette:r})}catch(e){}})),e}function y(e){var t=e.flatMap((function(e){return e.discussionId}));return"https://api.nextgen.guardianapps.co.uk/discussion/comment-counts.json?shortUrls=".concat(t.join(","))}var L=function(e){var t=e.repeat,i=(0,r.useState)(),u=(0,n.Z)(i,2),p=u[0],m=u[1];return(0,r.useEffect)((function(){var e=C();m(y(e))}),[]),(0,c.h)(p,{refreshInterval:t?15e3:0,refreshWhenHidden:!1,onSuccess:function(e){var t,i=C();if(null!=e&&e.counts)try{t=function(e,t){return e.map((function(e){var i=e.count,n=e.id,o=(0,d.C)(i),a=o.long,r=o.short,l=t.find((function(e){return e.discussionId===n})),s=null==l?void 0:l.format,c=null==l?void 0:l.isDynamo,u=null==l?void 0:l.containerPalette;return{id:n,long:a,short:r,format:s,isDynamo:c,containerPalette:u}}))}(e.counts,i),t.forEach((function(e){var t=document.querySelector('[data-discussion-id="'.concat(e.id,'"]'));t&&((0,l.so)(t).render((0,o.jsx)(a.C,{value:(0,s.E)(),children:(0,o.jsx)(x,{format:e.format,short:e.short,long:e.long,isDynamo:e.isDynamo,containerPalette:e.containerPalette})})),t.setAttribute("aria-label","".concat(e.short," Comments")))}))}catch(e){}m(y(i))}}),null}},5953:(e,t,i)=>{"use strict";i.d(t,{C:()=>n});var n=function(e){if(void 0===e)return{short:"…",long:"…"};if(0===e)return{short:"0",long:"0"};var t=parseInt(e.toFixed(0),10),i=function(e){for(var t=e.toFixed(0).split(""),i=t.length,n=t.length-1;n>=1;n-=1)(i-n)%3==0&&t.splice(n,0,",");return t.join("")}(t);return{short:t>1e4?"".concat(Math.round(t/1e3),"k"):t.toString(),long:i}}},6325:(e,t,i)=>{"use strict";i.d(t,{h:()=>a});var n=i(6131);function o(e){if(!e.ok)throw Error(e.statusText||"useApi | An api call returned HTTP status ".concat(e.status));return e}var a=function(e,t,i){var a=(0,n.ZP)(e,function(e){return function(t){return fetch(t,e).then(o).then((function(e){return e.json()}))}}(i),t),r=a.data,l=a.error;return{data:r,error:l,loading:!!e&&!l&&!r}}},1539:(e,t,i)=>{"use strict";var n;i.d(t,{Y:()=>n}),function(e){e[e.Standard=0]="Standard",e[e.Gallery=1]="Gallery",e[e.Audio=2]="Audio",e[e.Video=3]="Video",e[e.Review=4]="Review",e[e.Analysis=5]="Analysis",e[e.Explainer=6]="Explainer",e[e.Comment=7]="Comment",e[e.Letter=8]="Letter",e[e.Feature=9]="Feature",e[e.LiveBlog=10]="LiveBlog",e[e.DeadBlog=11]="DeadBlog",e[e.Recipe=12]="Recipe",e[e.MatchReport=13]="MatchReport",e[e.Interview=14]="Interview",e[e.Editorial=15]="Editorial",e[e.Quiz=16]="Quiz",e[e.Interactive=17]="Interactive",e[e.PhotoEssay=18]="PhotoEssay",e[e.PrintShop=19]="PrintShop",e[e.Obituary=20]="Obituary",e[e.Correction=21]="Correction",e[e.FullPageInteractive=22]="FullPageInteractive",e[e.NewsletterSignup=23]="NewsletterSignup",e[e.Timeline=24]="Timeline",e[e.Profile=25]="Profile"}(n||(n={}))},9442:(e,t,i)=>{"use strict";var n;i.d(t,{D:()=>n}),function(e){e[e.Standard=0]="Standard",e[e.Immersive=1]="Immersive",e[e.Showcase=2]="Showcase",e[e.NumberedList=3]="NumberedList"}(n||(n={}))},4819:(e,t,i)=>{"use strict";var n;i.d(t,{D:()=>n}),function(e){e[e.News=0]="News",e[e.Opinion=1]="Opinion",e[e.Sport=2]="Sport",e[e.Culture=3]="Culture",e[e.Lifestyle=4]="Lifestyle"}(n||(n={}))},2241:(e,t,i)=>{"use strict";var n;i.d(t,{v:()=>n}),function(e){e[e.SpecialReport=5]="SpecialReport",e[e.Labs=6]="Labs",e[e.SpecialReportAlt=7]="SpecialReportAlt"}(n||(n={}))},6027:(e,t,i)=>{"use strict";i.d(t,{A:()=>n});var n={mobile:320,mobileMedium:375,mobileLandscape:480,phablet:660,tablet:740,desktop:980,leftCol:1140,wide:1300}},9525:(e,t,i)=>{"use strict";i.d(t,{A5:()=>a,Fp:()=>u,H5:()=>m,TG:()=>p,UQ:()=>o,VK:()=>c,Vp:()=>s,lh:()=>b,n$:()=>r,qD:()=>f,r:()=>d,vU:()=>l});var n=i(2522),o=n.DG.brand,a=n.DG.brandAlt,r=n.DG.neutral,l=n.DG.error,s=n.DG.success,d=n.DG.news,c=n.DG.opinion,u=n.DG.sport,p=n.DG.culture,m=n.DG.lifestyle,b=n.DG.labs,f=n.DG.specialReport;n.DG.focus},5246:(e,t,i)=>{"use strict";i.d(t,{C4:()=>s,Dp:()=>l,vX:()=>d});var n=i(6027),o=function(e){return"@media (min-width: ".concat("".concat(e,"px"),")")},a=function(e){return"@media (max-width: ".concat("".concat(e-1,"px"),")")},r=function(e,t){return"@media (min-width: ".concat("".concat(e,"px"),") and (max-width: ","".concat(t-1,"px"),")")},l={mobile:o(n.A.mobile),mobileMedium:o(n.A.mobileMedium),mobileLandscape:o(n.A.mobileLandscape),phablet:o(n.A.phablet),tablet:o(n.A.tablet),desktop:o(n.A.desktop),leftCol:o(n.A.leftCol),wide:o(n.A.wide)},s={mobile:a(n.A.mobile),mobileMedium:a(n.A.mobileMedium),mobileLandscape:a(n.A.mobileLandscape),phablet:a(n.A.phablet),tablet:a(n.A.tablet),desktop:a(n.A.desktop),leftCol:a(n.A.leftCol),wide:a(n.A.wide)},d={mobile:{and:{mobileMedium:r(n.A.mobile,n.A.mobileMedium),mobileLandscape:r(n.A.mobile,n.A.mobileLandscape),phablet:r(n.A.mobile,n.A.phablet),tablet:r(n.A.mobile,n.A.tablet),desktop:r(n.A.mobile,n.A.desktop),leftCol:r(n.A.mobile,n.A.leftCol),wide:r(n.A.mobileMedium,n.A.wide)}},mobileMedium:{and:{mobileLandscape:r(n.A.mobileMedium,n.A.mobileLandscape),phablet:r(n.A.mobileMedium,n.A.phablet),tablet:r(n.A.mobileMedium,n.A.tablet),desktop:r(n.A.mobileMedium,n.A.desktop),leftCol:r(n.A.mobileMedium,n.A.leftCol),wide:r(n.A.mobileMedium,n.A.wide)}},mobileLandscape:{and:{phablet:r(n.A.mobileLandscape,n.A.phablet),tablet:r(n.A.mobileLandscape,n.A.tablet),desktop:r(n.A.mobileLandscape,n.A.desktop),leftCol:r(n.A.mobileLandscape,n.A.leftCol),wide:r(n.A.mobileLandscape,n.A.wide)}},phablet:{and:{tablet:r(n.A.phablet,n.A.tablet),desktop:r(n.A.phablet,n.A.desktop),leftCol:r(n.A.phablet,n.A.leftCol),wide:r(n.A.phablet,n.A.wide)}},tablet:{and:{desktop:r(n.A.tablet,n.A.desktop),leftCol:r(n.A.tablet,n.A.leftCol),wide:r(n.A.tablet,n.A.wide)}},desktop:{and:{leftCol:r(n.A.desktop,n.A.leftCol),wide:r(n.A.desktop,n.A.wide)}},leftCol:{and:{wide:r(n.A.leftCol,n.A.wide)}}}},1374:(e,t,i)=>{e.exports={attributes:{width:"16",height:"16",viewBox:"0 0 16 16"},content:'<path d="M13 0l1 1v7l-1 1H7l-2 3H4V9H2L1 8V1l1-1h11z"></path>'};var n=i(5951);e.exports=n(e.exports)}}]);
//# sourceMappingURL=FetchCommentCounts-importable.legacy.3f8dd82e3064080a69a0.js.map