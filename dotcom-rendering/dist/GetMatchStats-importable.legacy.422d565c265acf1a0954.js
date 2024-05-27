"use strict";(self.webpackChunk_guardian_dotcom_rendering=self.webpackChunk_guardian_dotcom_rendering||[]).push([[8479],{2058:(e,t,r)=>{r.r(t),r.d(t,{GetMatchStats:()=>$});var n=r(7800),i=r(1539),o=r(6325),s=r(43),a=r(5246),l=r(2933),c=r(2522),d=r(7162),u=r(5578),p=r(5809);function h(e){var t,r,n,i,o,s,a,l=(r=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(function(e){var t=(0,p.Z)(e,4),r=t[1],n=t[2],i=t[3];return[r,r,n,n,i,i].join("")})),n=null!==(t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(r))&&void 0!==t?t:[],o=(i=(0,p.Z)(n,4))[1],s=i[2],a=i[3],o&&s&&a?{r:parseInt(o,16),g:parseInt(s,16),b:parseInt(a,16)}:null);return l?(299*l.r+587*l.g+114*l.b)/1e3:0}var m=function(e){return e.startsWith("#")?h(e)>128:h("#".concat(e))>128},f={name:"ho1qnd",styles:"display:flex;flex-direction:row"},b=function(e){var t=e.children;return(0,n.jsx)("div",{css:f,children:t})},g=function(e){var t=e.displayText,r=e.background,i=e.position,o=e.width;return(0,n.jsx)("div",{css:(0,s.css)(d.Se.medium({fontWeight:"bold"})," color:",m(r)?c.fL.ctaSecondary:c.fL.ctaPrimary,";background:",r,";flex-grow:",o,";line-height:0.8;padding-top:1px;padding-left:6px;padding-right:6px;padding-bottom:9px;margin-right:","left"===i&&"1px",";margin-left:","right"===i&&"1px",";text-align:","left"===i?"left":"right",";"),children:t})},x=function(e){var t=e.left,r=e.right;return(0,n.jsxs)(b,{children:[(0,n.jsx)(g,{position:"left",width:t.value===r.value?1:t.value,displayText:t.value.toString(),background:t.color}),(0,n.jsx)(g,{position:"right",width:t.value===r.value?1:r.value,displayText:r.value.toString(),background:r.color})]})};function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var j=(0,s.css)(d.Se.medium({fontWeight:"bold"})," text-anchor:middle;"),y=function(e){return(0,s.css)(d.Se.small({fontWeight:"bold"})," fill:",m(e)?c.fL.ctaSecondary:c.fL.ctaPrimary,";text-anchor:middle;")},w=(0,s.css)("stroke-width:2;stroke:",c.DG.neutral[97],";"),A=function(e){var t,r=e.sections,i=e.percentCutout,o=void 0===i?35:i,a=e.size,l=void 0===a?300:a,u=l/2,p=u*(o/100),h=(p+u)/2,f=r.map((function(e){return e.value})).reduce((function(e,t){return e+t})),b=2*Math.PI,g=Math.PI/2,x=l/2,A=[],k=[],S=-g,C=function(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return v(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?v(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,i=function(){};return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,a=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return s=e.done,e},e:function(e){a=!0,o=e},f:function(){try{s||null==r.return||r.return()}finally{if(a)throw o}}}}(function(e){return e.filter((function(e){return 0!==e.value}))}(r));try{for(C.s();!(t=C.n()).done;){var L=t.value,D=L.color,M=L.label,T=L.value,O=T/f*b,G=S+O,I=S+O/2,P=[O*h,(b-O)*h].map((function(e){return e.toFixed(6)})).join(","),z=(-(g+S)*h).toFixed(6);A.push({dasharray:P,dashoffset:z,label:M,value:T,transform:["translate(",(Math.cos(I)*h+x).toFixed(6),", ",(Math.sin(I)*h+x).toFixed(6),")"].join(""),color:D});var B=Math.cos(G),Q=Math.sin(G);k.push({label:M,d:["M".concat(x,",").concat(x),"m".concat(B*p,",").concat(Q*p),"l".concat(B*(u-p),",").concat(Q*(u-p))].join(" ")}),S=G}}catch(e){C.e(e)}finally{C.f()}return(0,n.jsxs)("svg",{width:l,height:l,viewBox:"0 0 ".concat(l," ").concat(l),children:[A.map((function(e){return(0,n.jsxs)("g",{children:[(0,n.jsx)("circle",{cx:x,cy:x,r:h,fill:"none",stroke:e.color,strokeWidth:u-p,strokeDasharray:e.dasharray,strokeDashoffset:e.dashoffset,transform:"rotate(-90 ".concat(x," ").concat(x,")")}),(0,n.jsxs)("text",{transform:e.transform,children:[(0,n.jsx)("tspan",{css:(t=e.color,(0,s.css)(d.OS.small()," fill:",m(t)?c.fL.ctaSecondary:c.fL.ctaPrimary,";text-anchor:middle;")),x:"0",dy:"0",children:e.label}),(0,n.jsx)("tspan",{css:y(e.color),x:"0",dy:".9em",children:e.value})]})]},e.label+e.color);var t})),k.length>=2&&k.map((function(e){var t=e.d,r=e.label;return(0,n.jsx)("path",{css:w,d:t},r)})),(0,n.jsx)("text",{css:j,transform:"translate(".concat(x,", ").concat(x,")"),dy:"0.4em",children:"%"})]})},k={name:"gwema8",styles:"display:flex;flex-direction:row;gap:2px"},S=function(e){var t=e.children;return(0,n.jsx)("div",{css:k,children:t})},C=function(e){var t=e.offTarget,r=e.onTarget,i=e.teamColours,o=e.position,a=e.format,l=(0,u.b)(a);return(0,n.jsxs)("div",{css:(0,s.css)("position:relative;",d.Se.medium({fontWeight:"bold"})," color:",m(i)?c.fL.ctaSecondary:c.fL.ctaPrimary,";background:",i,";flex-basis:50%;line-height:0.8;height:132px;background-image:radial-gradient(\n\t\t\t\t\tcircle,\n\t\t\t\t\trgba(255, 255, 255, 0.3) 1px,\n\t\t\t\t\ttransparent 1px\n\t\t\t\t);background-repeat:repeat;background-size:3px 3px;background-position-x:0;padding-top:1px;padding-left:6px;padding-right:6px;padding-bottom:9px;text-align:","left"===o?"left":"right",";"),children:[t,(0,n.jsx)("div",{css:(0,s.css)(d.OS.small()," padding-top:4px;"),children:"left"===o&&"Off target"}),(0,n.jsxs)("div",{css:(0,s.css)("position:absolute;bottom:0;left:","right"===o&&0,";right:","left"===o&&0,";background:",i,";text-align:","left"===o?"left":"right",";padding-left:4px;padding-right:4px;height:70px;width:92px;border-top:8px solid ",l.background.matchStats,";border-left:","left"===o&&"8px solid ".concat(l.background.matchStats),";border-right:","right"===o&&"8px solid ".concat(l.background.matchStats),";"),children:[r,(0,n.jsx)("div",{css:(0,s.css)(d.OS.small()," padding-top:4px;"),children:"left"===o&&"On target"})]})]})},L=function(e){var t=e.left,r=e.right,i=e.format;return(0,n.jsxs)(S,{children:[(0,n.jsx)(C,{position:"left",offTarget:t.offTarget,onTarget:t.onTarget,teamColours:t.color,format:i}),(0,n.jsx)(C,{position:"right",offTarget:r.offTarget,onTarget:r.onTarget,teamColours:r.color,format:i})]})},D=r(2290),M=function(e){return"right-column"===e?(0,s.css)("position:absolute;top:0;right:0;",(0,D.K)("rightColumnArea"),"@supports (display: grid){position:relative;grid-area:",e,";}"):"body"===e?(0,s.css)("grid-area:",e,";",(0,D.K)("bodyArea"),";"):(0,s.css)("grid-area:",e,";")},T=function(e){var t=e.children,r=e.area,i=e.element,o=void 0===i?"div":i;return(0,n.jsx)(o,{css:M(r),"data-gu-name":r,children:t})},O=r(4026),G={name:"189mca3",styles:"display:flex;flex-direction:row;position:relative"},I=function(e){var t=e.children;return(0,n.jsx)("div",{css:G,children:t})},P=function(e){var t=e.type,r=e.time;switch(t){case"dismissal":return(0,n.jsx)("i",{css:(0,s.css)("display:inline-block;background-color:","#cc2b12",";background-position:0 0;width:0.5625rem;height:0.75rem;transform:rotate(8deg);background-size:contain;")});case"booking":return(0,n.jsx)("i",{css:(0,s.css)("display:inline-block;background-color:","#fb0",";background-position:0 0;width:0.5625rem;height:0.75rem;transform:rotate(8deg);background-size:contain;")});case"substitution":return(0,n.jsx)("span",{children:"(s ".concat(r,"')")})}},z={name:"1gti9zv",styles:"font-weight:bold;width:30px"},B=function(e){var t=e.players;return(0,n.jsx)("ul",{children:t.map((function(e){return(0,n.jsx)("li",{css:(0,s.css)(d.OS.small(),";"),children:(0,n.jsxs)(I,{children:[(0,n.jsx)("div",{css:z,children:e.shirtNumber}),(0,n.jsxs)("div",{children:[(0,n.jsxs)("span",{children:[e.name," "]}),e.events.map((function(e){return(0,n.jsx)(P,{type:e.eventType,time:e.eventTime},e.eventTime+e.eventType)}))]})]})},e.id)}))})},Q=function(e){var t=e.children,r=e.format,o=(0,u.b)(r);switch(r.design){case i.Y.LiveBlog:case i.Y.DeadBlog:return(0,n.jsx)("div",{css:(0,s.css)("display:flex;flex-direction:column;background-color:",o.background.matchStats,";@supports (display: grid){display:grid;",a.C4.desktop,"{grid-template-columns:50% 50%;grid-template-areas:'title          .' 'possession     attempts' 'possession     corners' 'possession     fouls' 'subtitle       .' 'home           away';}",a.Dp.desktop,"{grid-template-columns:100%;grid-template-areas:'title' 'possession' 'attempts' 'corners' 'fouls' 'subtitle' 'home' 'away';}",a.C4.phablet,"{grid-template-columns:50% 50%;grid-template-areas:'title\t\t\ttitle' 'possession\t\tpossession' 'attempts\t\tattempts' 'corners\t\tcorners' 'fouls\t\t\tfouls' 'subtitle\t\tsubtitle' 'home\t\t\taway';}}"),children:t});default:return(0,n.jsx)("div",{css:(0,s.css)("display:flex;flex-direction:column;background-color:",o.background.matchStats,";@supports (display: grid){display:grid;",a.Dp.wide,"{grid-template-columns:50% 50%;grid-template-areas:'title          .' 'possession     attempts' 'possession     corners' 'possession     fouls' 'subtitle       .' 'home           away';}",a.C4.wide,"{grid-template-columns:50% 50%;grid-template-areas:'title          .' 'possession     attempts' 'possession     corners' 'possession     fouls' 'subtitle       .' 'home           away';}",a.C4.phablet,"{grid-template-columns:50% 50%;grid-template-areas:'title\t\t\ttitle' 'possession\t\tpossession' 'attempts\t\tattempts' 'corners\t\tcorners' 'fouls\t\t\tfouls' 'subtitle\t\tsubtitle' 'home\t\t\taway';}}"),children:t})}},F=function(e){var t=e.format,r=e.children,i=(0,u.b)(t);return(0,n.jsx)("div",{css:(0,s.css)("clear:left;position:relative;flex-grow:1;padding:",l.D[2],"px 10px;",a.Dp.mobileLandscape,"{margin-left:",l.D[3],"px;}min-height:800px;background-color:",i.background.matchStats,";",a.Dp.leftCol,"{:before{content:'';position:absolute;top:0;bottom:0;left:-100vw;right:0;background-color:",i.background.matchStats,";z-index:-1;}}"),children:r})},R=function(e){var t=e.children;switch(e.format.design){case i.Y.LiveBlog:case i.Y.DeadBlog:return(0,n.jsx)("div",{children:t});default:return(0,n.jsx)("div",{css:(0,s.css)(a.Dp.leftCol,"{position:absolute;left:-160px;}",a.Dp.wide,"{position:absolute;left:-240px;}"),children:t})}},W={name:"zl1inp",styles:"display:flex;justify-content:center"},E=function(e){var t=e.children;return(0,n.jsx)("div",{css:W,children:t})},N=function(e){var t=e.children;return(0,n.jsx)("h4",{css:(0,s.css)(a.Dp.phablet,"{border-right:1px solid ",c.Cg.secondary,";}margin-right:10px;padding-right:10px;",a.Dp.desktop,"{margin-right:0;padding-right:0;border-right:0;}"),children:t})},Y=function(e){var t=e.children;return(0,n.jsx)("h3",{css:(0,s.css)(d.Se.xxsmall({fontWeight:"bold"}),";"),children:t})},V=function(e){var t=e.children;return(0,n.jsx)("h4",{css:(0,s.css)(d.OS.small(),";"),children:t})},_=function(e){var t=e.home,r=e.away,o=e.format,l=[{value:t.possession,label:t.codename,color:t.colours},{value:r.possession,label:r.codename,color:r.colours}].reverse();switch(o.design){case i.Y.LiveBlog:case i.Y.DeadBlog:return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{css:(0,s.css)(a.Dp.mobileMedium,"{display:none;}"),children:(0,n.jsx)(A,{sections:l,size:200})}),(0,n.jsx)("div",{css:(0,s.css)("display:none;",a.vX.mobileMedium.and.desktop,"{display:block;}"),children:(0,n.jsx)(A,{sections:l,size:300})}),(0,n.jsx)("div",{css:(0,s.css)(a.C4.desktop,"{display:none;}"),children:(0,n.jsx)(A,{sections:l,size:200})})]});default:return(0,n.jsx)(A,{sections:l})}},H=function(e){var t=e.home,r=e.away,i=e.format;return(0,n.jsx)(F,{format:i,children:(0,n.jsxs)(Q,{format:i,children:[(0,n.jsx)(T,{area:"title",element:"aside",children:(0,n.jsxs)(R,{format:i,children:[(0,n.jsx)(O.c,{when:"above",breakpoint:"desktop",children:(0,n.jsx)(N,{children:(0,n.jsx)(Y,{children:"Match Stats"})})}),(0,n.jsx)(O.c,{when:"below",breakpoint:"desktop",children:(0,n.jsx)(Y,{children:"Match Stats"})})]})}),(0,n.jsxs)(T,{area:"possession",children:[(0,n.jsxs)(N,{children:[(0,n.jsx)(V,{children:"Possession"}),(0,n.jsx)(E,{children:(0,n.jsx)(_,{home:t,away:r,format:i})})]}),(0,n.jsx)("br",{})]}),(0,n.jsxs)(T,{area:"attempts",children:[(0,n.jsx)(V,{children:"Attempts"}),(0,n.jsx)(L,{left:{onTarget:t.shotsOn,offTarget:t.shotsOff,color:t.colours},right:{onTarget:r.shotsOn,offTarget:r.shotsOff,color:r.colours},format:i})]}),(0,n.jsxs)(T,{area:"corners",children:[(0,n.jsx)(V,{children:"Corners"}),(0,n.jsx)(x,{left:{value:t.corners,color:t.colours},right:{value:r.corners,color:r.colours}})]}),(0,n.jsxs)(T,{area:"fouls",children:[(0,n.jsx)(V,{children:"Fouls"}),(0,n.jsx)(x,{left:{value:t.fouls,color:t.colours},right:{value:r.fouls,color:r.colours}}),(0,n.jsx)("br",{})]}),(0,n.jsx)(T,{area:"subtitle",children:(0,n.jsxs)(R,{format:i,children:[(0,n.jsx)(O.c,{when:"above",breakpoint:"desktop",children:(0,n.jsx)(N,{children:(0,n.jsx)(Y,{children:"Lineups"})})}),(0,n.jsx)(O.c,{when:"below",breakpoint:"desktop",children:(0,n.jsx)(Y,{children:"Lineups"})})]})}),(0,n.jsx)(T,{area:"home",children:(0,n.jsxs)(N,{children:[(0,n.jsx)(V,{children:t.name}),(0,n.jsx)(B,{players:t.players.filter((function(e){return!e.substitute}))}),(0,n.jsx)("br",{}),(0,n.jsx)(V,{children:"Substitutes"}),(0,n.jsx)(B,{players:t.players.filter((function(e){return e.substitute}))}),(0,n.jsx)("br",{})]})}),(0,n.jsxs)(T,{area:"away",children:[(0,n.jsx)(V,{children:r.name}),(0,n.jsx)(B,{players:r.players.filter((function(e){return!e.substitute}))}),(0,n.jsx)("br",{}),(0,n.jsx)(V,{children:"Substitutes"}),(0,n.jsx)(B,{players:r.players.filter((function(e){return e.substitute}))}),(0,n.jsx)("br",{})]})]})})},K=r(2566),Z=function(){return(0,n.jsx)(K.V,{height:800})},$=function(e){var t=e.matchUrl,r=e.format,s={};r.design===i.Y.LiveBlog&&(s.refreshInterval=14e3);var a=(0,o.h)(t,s),l=a.data,c=a.error;return a.loading?(0,n.jsx)(Z,{}):c?(window.guardian.modules.sentry.reportError(c,"match=stats"),null):l?(0,n.jsx)(H,{home:l.homeTeam,away:l.awayTeam,format:r}):null}},4026:(e,t,r)=>{r.d(t,{c:()=>s});var n=r(7800),i=r(43),o=r(5246),s=function(e){var t,r=e.children,s=e.when,a=e.breakpoint,l=e.el;return t="below"===s?(0,i.css)(o.C4[a],"{display:none;}"):(0,i.css)(o.Dp[a],"{display:none;}"),"li"===l?(0,n.jsx)("li",{css:t,children:r}):(0,n.jsx)("span",{css:t,children:r})}},2566:(e,t,r)=>{r.d(t,{V:()=>h});var n,i=r(669),o=r(7800),s=r(43),a=r(9525),l=r(2933),c=a.n$[93],d=(0,s.keyframes)(n||(n=(0,i.Z)(["\n  0% {\n    background-position: -1500px 0;\n  }\n  100% {\n    background-position: 1500px 0;\n  }\n"]))),u=function(e){return(0,s.css)("animation:",d," 2s infinite linear;background:linear-gradient(\n\t\tto right,\n\t\t",e," 4%,\n\t\twhite 25%,\n\t\t",e," 36%\n\t);background-size:1500px 100%;")},p={name:"1ff36h2",styles:"flex-grow:1"},h=function(e){var t=e.height,r=e.rootId,n=e.width,i=e.spaceBelow,a=e.spaceLeft,d=e.shouldShimmer,h=void 0===d||d,m=e.backgroundColor,f=void 0===m?c:m;return(0,o.jsx)("div",{id:r,css:p,"data-name":"placeholder",children:(0,o.jsx)("div",{css:(0,s.css)("height:",t,"px;width:",void 0!==n?"".concat(n,"px"):"100%",";margin-bottom:",i&&l.D[i],"px;margin-left:",a&&l.D[a],"px;background-color:",f,";",h&&u(f),";")})})}},2290:(e,t,r)=>{r.d(t,{K:()=>i});var n=["sticky-video-button","sticky-video","banner","dropdown","burger","expanded-veggie-menu-wrapper","expanded-veggie-menu","mobileSticky","stickyAdWrapperLabsHeader","stickyAdWrapper","stickyAdWrapperNav","editionDropdown","toast","onwardsCarousel","myAccountDropdown","searchHeaderLink","TheGuardian","headerWrapper","articleHeadline","immersiveBlackBox","bodyArea","rightColumnArea","mainMedia","card-nested-link","card-link"],i=function(e){return"z-index: ".concat((t=e,-1===(r=n.indexOf(t))?-1:n.length-r),";");var t,r}},6325:(e,t,r)=>{r.d(t,{h:()=>o});var n=r(6131);function i(e){if(!e.ok)throw Error(e.statusText||"useApi | An api call returned HTTP status ".concat(e.status));return e}var o=function(e,t,r){var o=(0,n.ZP)(e,function(e){return function(t){return fetch(t,e).then(i).then((function(e){return e.json()}))}}(r),t),s=o.data,a=o.error;return{data:s,error:a,loading:!!e&&!a&&!s}}},1539:(e,t,r)=>{var n;r.d(t,{Y:()=>n}),function(e){e[e.Standard=0]="Standard",e[e.Gallery=1]="Gallery",e[e.Audio=2]="Audio",e[e.Video=3]="Video",e[e.Review=4]="Review",e[e.Analysis=5]="Analysis",e[e.Explainer=6]="Explainer",e[e.Comment=7]="Comment",e[e.Letter=8]="Letter",e[e.Feature=9]="Feature",e[e.LiveBlog=10]="LiveBlog",e[e.DeadBlog=11]="DeadBlog",e[e.Recipe=12]="Recipe",e[e.MatchReport=13]="MatchReport",e[e.Interview=14]="Interview",e[e.Editorial=15]="Editorial",e[e.Quiz=16]="Quiz",e[e.Interactive=17]="Interactive",e[e.PhotoEssay=18]="PhotoEssay",e[e.PrintShop=19]="PrintShop",e[e.Obituary=20]="Obituary",e[e.Correction=21]="Correction",e[e.FullPageInteractive=22]="FullPageInteractive",e[e.NewsletterSignup=23]="NewsletterSignup",e[e.Timeline=24]="Timeline",e[e.Profile=25]="Profile"}(n||(n={}))},9442:(e,t,r)=>{var n;r.d(t,{D:()=>n}),function(e){e[e.Standard=0]="Standard",e[e.Immersive=1]="Immersive",e[e.Showcase=2]="Showcase",e[e.NumberedList=3]="NumberedList"}(n||(n={}))},4819:(e,t,r)=>{var n;r.d(t,{D:()=>n}),function(e){e[e.News=0]="News",e[e.Opinion=1]="Opinion",e[e.Sport=2]="Sport",e[e.Culture=3]="Culture",e[e.Lifestyle=4]="Lifestyle"}(n||(n={}))},2241:(e,t,r)=>{var n;r.d(t,{v:()=>n}),function(e){e[e.SpecialReport=5]="SpecialReport",e[e.Labs=6]="Labs",e[e.SpecialReportAlt=7]="SpecialReportAlt"}(n||(n={}))},6027:(e,t,r)=>{r.d(t,{A:()=>n});var n={mobile:320,mobileMedium:375,mobileLandscape:480,phablet:660,tablet:740,desktop:980,leftCol:1140,wide:1300}},9525:(e,t,r)=>{r.d(t,{A5:()=>o,Fp:()=>u,H5:()=>h,TG:()=>p,UQ:()=>i,VK:()=>d,Vp:()=>l,lh:()=>m,n$:()=>s,qD:()=>f,r:()=>c,vU:()=>a});var n=r(2522),i=n.DG.brand,o=n.DG.brandAlt,s=n.DG.neutral,a=n.DG.error,l=n.DG.success,c=n.DG.news,d=n.DG.opinion,u=n.DG.sport,p=n.DG.culture,h=n.DG.lifestyle,m=n.DG.labs,f=n.DG.specialReport;n.DG.focus},5246:(e,t,r)=>{r.d(t,{C4:()=>l,Dp:()=>a,vX:()=>c});var n=r(6027),i=function(e){return"@media (min-width: ".concat("".concat(e,"px"),")")},o=function(e){return"@media (max-width: ".concat("".concat(e-1,"px"),")")},s=function(e,t){return"@media (min-width: ".concat("".concat(e,"px"),") and (max-width: ","".concat(t-1,"px"),")")},a={mobile:i(n.A.mobile),mobileMedium:i(n.A.mobileMedium),mobileLandscape:i(n.A.mobileLandscape),phablet:i(n.A.phablet),tablet:i(n.A.tablet),desktop:i(n.A.desktop),leftCol:i(n.A.leftCol),wide:i(n.A.wide)},l={mobile:o(n.A.mobile),mobileMedium:o(n.A.mobileMedium),mobileLandscape:o(n.A.mobileLandscape),phablet:o(n.A.phablet),tablet:o(n.A.tablet),desktop:o(n.A.desktop),leftCol:o(n.A.leftCol),wide:o(n.A.wide)},c={mobile:{and:{mobileMedium:s(n.A.mobile,n.A.mobileMedium),mobileLandscape:s(n.A.mobile,n.A.mobileLandscape),phablet:s(n.A.mobile,n.A.phablet),tablet:s(n.A.mobile,n.A.tablet),desktop:s(n.A.mobile,n.A.desktop),leftCol:s(n.A.mobile,n.A.leftCol),wide:s(n.A.mobileMedium,n.A.wide)}},mobileMedium:{and:{mobileLandscape:s(n.A.mobileMedium,n.A.mobileLandscape),phablet:s(n.A.mobileMedium,n.A.phablet),tablet:s(n.A.mobileMedium,n.A.tablet),desktop:s(n.A.mobileMedium,n.A.desktop),leftCol:s(n.A.mobileMedium,n.A.leftCol),wide:s(n.A.mobileMedium,n.A.wide)}},mobileLandscape:{and:{phablet:s(n.A.mobileLandscape,n.A.phablet),tablet:s(n.A.mobileLandscape,n.A.tablet),desktop:s(n.A.mobileLandscape,n.A.desktop),leftCol:s(n.A.mobileLandscape,n.A.leftCol),wide:s(n.A.mobileLandscape,n.A.wide)}},phablet:{and:{tablet:s(n.A.phablet,n.A.tablet),desktop:s(n.A.phablet,n.A.desktop),leftCol:s(n.A.phablet,n.A.leftCol),wide:s(n.A.phablet,n.A.wide)}},tablet:{and:{desktop:s(n.A.tablet,n.A.desktop),leftCol:s(n.A.tablet,n.A.leftCol),wide:s(n.A.tablet,n.A.wide)}},desktop:{and:{leftCol:s(n.A.desktop,n.A.leftCol),wide:s(n.A.desktop,n.A.wide)}},leftCol:{and:{wide:s(n.A.leftCol,n.A.wide)}}}},2933:(e,t,r)=>{r.d(t,{D:()=>i,K:()=>o});var n=r(2335),i={1:4,2:8,3:12,4:16,5:20,6:24,9:36,12:48,24:96},o={1:"".concat((0,n.Q)(i[1]),"rem"),2:"".concat((0,n.Q)(i[2]),"rem"),3:"".concat((0,n.Q)(i[3]),"rem"),4:"".concat((0,n.Q)(i[4]),"rem"),5:"".concat((0,n.Q)(i[5]),"rem"),6:"".concat((0,n.Q)(i[6]),"rem"),9:"".concat((0,n.Q)(i[9]),"rem"),12:"".concat((0,n.Q)(i[12]),"rem"),24:"".concat((0,n.Q)(i[24]),"rem")}},669:(e,t,r)=>{function n(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}r.d(t,{Z:()=>n})}}]);
//# sourceMappingURL=GetMatchStats-importable.legacy.422d565c265acf1a0954.js.map