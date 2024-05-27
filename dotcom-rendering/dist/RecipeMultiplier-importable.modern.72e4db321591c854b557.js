"use strict";(self.webpackChunk_guardian_dotcom_rendering=self.webpackChunk_guardian_dotcom_rendering||[]).push([[834],{4225:(e,t,n)=>{n.r(t),n.d(t,{RecipeMultiplier:()=>L});var r=n(7800),i=n(43),o=n(6725),c=n(2803);const s=e=>void 0===e;var l,a=n(7357),u=n(3196),d=n(4436),v=n(3220),p=n(4926),f=n(5158),g=n(3904),b=n(7410);function h(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function j(){const e=h(["\n\t","\n\tposition: sticky;\n\tz-index: 1;\n\tdisplay: grid;\n\tgrid-template-columns: 6fr repeat(3, 1fr);\n\ttop: 0;\n\tcolor: ",";\n\tbackground-color: ",";\n\tpadding: ","px;\n"]);return j=function(){return e},e}function m(){const e=h(["\n\t\t\t\t\t\tbackground-color: ",";\n\t\t\t\t\t"]);return m=function(){return e},e}function x(){const e=h(["\n\t\t\t\t\t\tbackground-color: ",";\n\t\t\t\t\t"]);return x=function(){return e},e}const O="\ngu-recipe {\n\tcolor: ".concat(a.H5[100],";\n\tbackground-color: ").concat(a.H5[800],";\n\tfont-weight: bold;\n}\n"),y=(0,i.css)(j(),u.OS.small(),a.H5[100],a.H5[800],d.D[2]),w=["g","l"],S="undefined"==typeof document,z=["s","second","seconds","min","minute","minutes","hr","hour","hours","C","c","cm","mm"],k=new Map([["½",.5],["⅓",.3333],["⅔",.6667],["¼",.25],["¾",.75],["⅕",.2],["⅖",.4],["⅗",.6],["⅘",.8],["⅙",.1667],["⅚",.8333],["⅐",.1429],["⅛",.125],["⅜",.375],["⅝",.625],["⅞",.875],["⅑",.1111],["⅒",.1]]),P=new RegExp(["(?:".concat(["","Serves ","Makes "].join("|"),")"),"(?<value>".concat(["\\d+","\\d+-\\d+","\\d+/\\d+",...k.keys()].join("|"),")"),"(?:(?<separator> ?)","(?<unit>[a-z]+?\\b)|(?=<))"].join(""),"i");var E;const C=S?1:parseFloat(null!==(E=null===(l=document.querySelector("gu-recipe[serves]"))||void 0===l?void 0:l.dataset.value)&&void 0!==E?E:"1"),L=()=>{const[e,t]=(0,g.useState)(C),[n,l]=(0,g.useState)(1);return(0,b.t)((()=>{var e;(0,c.c)("dotcom","Injecting multiplier");const t=document.createElement("style");t.innerHTML=O,document.body.appendChild(t);const n=null===(e=document.querySelector("gu-island[name=RecipeMultiplier]"))||void 0===e?void 0:e.nextSibling;if(n instanceof HTMLElement){const e=document.createTreeWalker(n,NodeFilter.SHOW_TEXT,null);let t;for(;t=e.nextNode();){var r,i;if(!(t instanceof Text))continue;const e=null!==(i=null===(r=t.nodeValue)||void 0===r?void 0:r.match(P))&&void 0!==i?i:void 0;if(!e)continue;const{index:n,groups:a}=e,u=e[0].length;switch(n){case void 0:case-1:break;case 0:{var s;u&&t.splitText(u);const e=document.createElement("gu-recipe");if(e.textContent=t.textContent,l=null==a?void 0:a.unit,(0,o.H)(l)&&z.includes(l))continue;Object.entries(null!=a?a:{}).map((e=>{let[t,n]=e;var r;const[i,o]=n.split("/").map(parseFloat);return"value"===t&&n.includes("/")&&void 0!==i&&void 0!==o?[t,(i/o).toString()]:[t,null!==(c=null===(r=k.get(n))||void 0===r?void 0:r.toString())&&void 0!==c?c:n];var c})).forEach((t=>{let[n,r]=t;e.setAttribute("data-".concat(n),r)})),null===(s=t.parentNode)||void 0===s||s.insertBefore(e,t),t.textContent=null;break}default:t.splitText(n)}(0,c.c)("design",n,u,t.textContent)}}var l}),[]),(0,g.useEffect)((()=>{const t=document.querySelector("gu-recipe[serves]");t&&(t.innerText=e.toString()),l(e/C)}),[e]),(0,g.useEffect)((()=>{document.querySelectorAll("gu-recipe").forEach((e=>{const{value:t,separator:r,unit:i}=e.dataset;s(t)||s(r)||s(i)||(e.innerText=(e=>{let{value:t,separator:n,unit:r}=e;const[i,o]=t;if(void 0===i)return"Invalid value";if(void 0!==o)return"".concat(i,"-").concat(o).concat(n).concat(r);if((e=>w.includes(e))(r)){const e=5*Math.round(i/5);return"".concat(e).concat(n).concat(r)}const c=i>1?Math.round(i):Math.round(100*i)/100;return"".concat(c).concat(n).concat(r)})({value:t.split("-").map(parseFloat).map((e=>e*n)),separator:r,unit:i}))}))}),[n]),(0,r.jsxs)("ul",{css:y,children:[(0,r.jsxs)("li",{children:["Serves ",e]}),(0,r.jsx)("li",{css:{textAlign:"center"},children:(0,r.jsx)(v.z,{icon:(0,r.jsx)(p.i,{}),hideLabel:!0,size:"xsmall",disabled:e-1<.5,cssOverrides:(0,i.css)(m(),a.H5[300]),onClick:()=>t(e-1),children:"subtract 1 serving"})}),(0,r.jsx)("li",{css:{fontWeight:"bold",textAlign:"center"},children:e}),(0,r.jsx)("li",{css:{textAlign:"center"},children:(0,r.jsx)(v.z,{icon:(0,r.jsx)(f.G,{}),hideLabel:!0,size:"xsmall",disabled:e+1>24,cssOverrides:(0,i.css)(x(),a.H5[300]),onClick:()=>t(e+1),children:"add 1 serving"})}),(0,r.jsx)("li",{css:{gridColumn:"1 / -1",accentColor:a.H5[300]},children:(0,r.jsx)("input",{css:{width:"100%",margin:0},type:"range",name:"",min:.5,max:24,step:.5,value:e,onChange:e=>{let{target:{value:n}}=e;const r=Number.parseFloat(n);Number.isNaN(r)||t(r)}})})]})}},7410:(e,t,n)=>{n.d(t,{t:()=>i});var r=n(3904);const i=(e,t)=>{const[n,i]=(0,r.useState)(!1),o=t.every((e=>void 0!==e));(0,r.useEffect)((()=>{!n&&o&&(e(),i(!0))}),[n,o,e])}},3220:(e,t,n)=>{n.d(t,{z:()=>s});var r=n(7800),i=n(9579),o=n(8185);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const s=e=>{var t,n,{priority:s,size:l,icon:a,iconSide:u,hideLabel:d,nudgeIcon:v,type:p="button",isLoading:f=!1,loadingAnnouncement:g="Loading",cssOverrides:b,children:h}=e,j=function(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(e,["priority","size","icon","iconSide","hideLabel","nudgeIcon","type","isLoading","loadingAnnouncement","cssOverrides","children"]);return(0,r.jsx)("button",(t=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){c(e,t,n[t])}))}return e}({css:(0,o.$)({size:l,priority:s,icon:a,hideLabel:d,iconSide:u,nudgeIcon:v,cssOverrides:b,isLoading:f}),type:p,"aria-live":"polite","aria-label":f?g:void 0},j),n=null!=(n={children:(0,i._)({hideLabel:d,iconSvg:a,isLoading:f,children:h})})?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n.push.apply(n,r)}return n}(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})),t))}},4926:(e,t,n)=>{n.d(t,{i:()=>a});var r=n(7800),i=n(43),o=n(4655),c=n(1083);function s(){const e=(t=["\n\t\t\t\t\t","\n\t\t\t\t"],n||(n=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}})));var t,n;return s=function(){return e},e}const l=e=>{let{size:t}=e;return(0,r.jsx)("svg",{width:t?o.EA[t]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1 10.75v2.5h22v-2.5H1Z"})})},a=e=>{let{size:t,isAnnouncedByScreenReader:n=!1}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l,{size:t}),n?(0,r.jsx)("span",{css:(0,i.css)(s(),c.j),children:"Minus sign"}):""]})}},5158:(e,t,n)=>{n.d(t,{G:()=>a});var r=n(7800),i=n(43),o=n(4655),c=n(1083);function s(){const e=(t=["\n\t\t\t\t\t","\n\t\t\t\t"],n||(n=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}})));var t,n;return s=function(){return e},e}const l=e=>{let{size:t}=e;return(0,r.jsx)("svg",{width:t?o.EA[t]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"m10.8 13.2.425 9.8h1.525l.45-9.8 9.8-.45v-1.525l-9.8-.425-.45-9.8h-1.525l-.425 9.8-9.8.425v1.525l9.8.45Z"})})},a=e=>{let{size:t,isAnnouncedByScreenReader:n=!1}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l,{size:t}),n?(0,r.jsx)("span",{css:(0,i.css)(s(),c.j),children:"Plus sign"}):""]})}}}]);
//# sourceMappingURL=RecipeMultiplier-importable.modern.72e4db321591c854b557.js.map