"use strict";(self.webpackChunk_guardian_dotcom_rendering=self.webpackChunk_guardian_dotcom_rendering||[]).push([[3434],{5489:(e,t,n)=>{n.r(t),n.d(t,{relativeTime:()=>r});var o=n(233);const r=()=>((0,o.e)(),window.setInterval((()=>{(0,o.e)()}),15e3),Promise.resolve())},233:(e,t,n)=>{n.d(t,{e:()=>a,t:()=>r});var o=n(4857);const r=e=>{if(e instanceof HTMLElement){const{relativeformat:t}=e.dataset,n=e.getAttribute("datetime");if(!n||!t)return;let r=!1;switch(t){case"short":case"med":r=(0,o.S)(new Date(n).getTime(),{verbose:!1});break;case"long":r=(0,o.S)(new Date(n).getTime(),{verbose:!0})}const a=e.innerText;!1!==r&&r!==a&&(e.innerHTML=r)}},a=()=>{document.querySelectorAll("time[data-relativeformat]").forEach(r)}},4857:(e,t,n)=>{n.d(t,{S:()=>r});const o=(e,t,n)=>{const o=1!==t;switch(e){case"s":return n?" seconds ago":"s ago";case"m":return n&&o?" minutes ago":n?" minute ago":"m ago";case"h":return n&&o?" hours ago":n?" hour ago":"h ago";case"d":return n?" days ago":"d ago"}},r=(e,t)=>{const n=new Date(e),r=new Date,a=null==t?void 0:t.verbose;var c;const s=null!==(c=null==t?void 0:t.daysUntilAbsolute)&&void 0!==c?c:7,i=Math.floor((r.getTime()-n.getTime())/1e3),u=i<15,g=i<55,d=i<3300,l=(e=>{const t=new Date;return e.getTime()>t.getTime()-864e5})(n),m=(e=>{const t=new Date,n=new Date;return n.setDate(t.getDate()-1),e.toDateString()===n.toDateString()})(n),h=i<24*s*60*60;if(i<0)return!1;if(u)return"now";if(g)return"".concat(i).concat(o("s",i,a));if(d){const e=Math.round(i/60);return"".concat(e).concat(o("m",e,a))}if(l){const e=Math.round(i/3600);return"".concat(e).concat(o("h",e,a))}if(m&&a)return"Yesterday".concat(" ".concat((f=n).getHours(),".").concat(f.getMinutes().toString().padStart(2,"0")));if(h){const e=Math.round(i/3600/24);return"".concat(e).concat(o("d",e,a))}return[n.getDate(),a?n.toLocaleString("en-GB",{month:"long"}):n.toLocaleString("en-GB",{month:"short"}),n.getFullYear()].join(" ");var f}}}]);
//# sourceMappingURL=relativeTime.modern.5385c91f40653c855a75.js.map