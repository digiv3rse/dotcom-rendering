"use strict";(self.webpackChunk_guardian_dotcom_rendering=self.webpackChunk_guardian_dotcom_rendering||[]).push([[3434],{3461:(e,t,n)=>{n.r(t),n.d(t,{relativeTime:()=>a});var r=n(3506),a=function(){return(0,r.e)(),window.setInterval((function(){(0,r.e)()}),15e3),Promise.resolve()}},3506:(e,t,n)=>{n.d(t,{e:()=>o,t:()=>a});var r=n(8887),a=function(e){if(e instanceof HTMLElement){var t=e.dataset.relativeformat,n=e.getAttribute("datetime");if(!n||!t)return;var a=!1;switch(t){case"short":case"med":a=(0,r.S)(new Date(n).getTime(),{verbose:!1});break;case"long":a=(0,r.S)(new Date(n).getTime(),{verbose:!0})}var o=e.innerText;!1!==a&&a!==o&&(e.innerHTML=a)}},o=function(){document.querySelectorAll("time[data-relativeformat]").forEach(a)}},8887:(e,t,n)=>{n.d(t,{S:()=>a});var r=function(e,t,n){var r=1!==t;switch(e){case"s":return n?" seconds ago":"s ago";case"m":return n&&r?" minutes ago":n?" minute ago":"m ago";case"h":return n&&r?" hours ago":n?" hour ago":"h ago";case"d":return n?" days ago":"d ago"}},a=function(e,t){var n,a,o,i=new Date(e),c=new Date,u=null==t?void 0:t.verbose,s=null!==(n=null==t?void 0:t.daysUntilAbsolute)&&void 0!==n?n:7,g=Math.floor((c.getTime()-i.getTime())/1e3),d=g<15,l=g<55,f=g<3300,m=(a=i,o=new Date,a.getTime()>o.getTime()-864e5),v=function(e){var t=new Date,n=new Date;return n.setDate(t.getDate()-1),e.toDateString()===n.toDateString()}(i),h=g<24*s*60*60;if(g<0)return!1;if(d)return"now";if(l)return"".concat(g).concat(r("s",g,u));if(f){var w=Math.round(g/60);return"".concat(w).concat(r("m",w,u))}if(m){var D=Math.round(g/3600);return"".concat(D).concat(r("h",D,u))}if(v&&u)return"Yesterday".concat(function(e){return" ".concat(e.getHours(),".").concat(e.getMinutes().toString().padStart(2,"0"))}(i));if(h){var S=Math.round(g/3600/24);return"".concat(S).concat(r("d",S,u))}return[i.getDate(),u?i.toLocaleString("en-GB",{month:"long"}):i.toLocaleString("en-GB",{month:"short"}),i.getFullYear()].join(" ")}}}]);
//# sourceMappingURL=relativeTime.legacy.587e3ad509e8be7b92e2.js.map