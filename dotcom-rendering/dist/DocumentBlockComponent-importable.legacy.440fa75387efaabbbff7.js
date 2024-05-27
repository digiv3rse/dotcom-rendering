"use strict";(self.webpackChunk_guardian_dotcom_rendering=self.webpackChunk_guardian_dotcom_rendering||[]).push([[1391],{602:(e,i,n)=>{n.d(i,{L:()=>m});var r=n(5809),t=n(7800),o=n(43),c=n(7162),s=n(2522),a=n(2933),d=n(3965),l=n(3546),u=n(3904),h=function(e){switch(e){case"immersive":case"inline":case"showcase":return c.OS.large({fontWeight:"bold",lineHeight:"regular"});case"halfWidth":case"supporting":case"thumbnail":return c.OS.medium({fontWeight:"bold",lineHeight:"regular"})}},p=function(e){switch(e){case"immersive":case"inline":case"showcase":return"default";case"halfWidth":case"supporting":return"small";case"thumbnail":return"xsmall"}},g=function(e){switch(e){case"immersive":case"inline":case"showcase":case"halfWidth":case"supporting":return"Allow and continue";case"thumbnail":return"Allow"}},m=function(e){var i,n=e.children,m=e.role,b=void 0===m?"inline":m,v=e.onAccept,f=e.isTracking,y=e.isMainMedia,w=e.source,j=e.sourceDomain,O=void 0===j?"unknown":j,x=(0,u.useState)(!1),k=(0,r.Z)(x,2),D=k[0],S=k[1],L=function(e){switch(e){case"immersive":case"inline":case"showcase":return c.OS.medium({lineHeight:"regular"});case"halfWidth":case"supporting":case"thumbnail":return c.OS.small({lineHeight:"regular"})}}(b);return(i={isTracking:f,isOverlayClicked:D,isMainMedia:y}).isMainMedia||!i.isTracking||i.isOverlayClicked?(0,t.jsx)(t.Fragment,{children:n}):(0,t.jsxs)("div",{css:(0,o.css)("width:100%;background:",s.Oq.secondary,";border:1px solid ",s.Cg.secondary,";display:flex;flex-direction:column;justify-content:space-between;padding:",a.D[1],"px ",a.D[6],"px ",a.D[3],"px;margin-bottom:",a.D[3],"px;"),"data-component":"click-to-view:".concat(O),children:[(0,t.jsx)("div",{css:(0,o.css)(h(b)," margin-bottom:",a.D[1],"px;"),children:w?"Allow ".concat(w," content?"):"Allow content provided by a third party?"}),(0,t.jsx)("p",{css:(0,o.css)(L,";"),children:w?(0,t.jsxs)(t.Fragment,{children:["This article includes content provided by ",w,". We ask for your permission before anything is loaded, as they may be using cookies and other technologies. To view this content,"," ",(0,t.jsx)("strong",{children:"click 'Allow and continue'"}),"."]}):(0,t.jsxs)(t.Fragment,{children:["This article includes content hosted on"," ",O,". We ask for your permission before anything is loaded, as the provider may be using cookies and other technologies. To view this content,"," ",(0,t.jsx)("strong",{children:"click 'Allow and continue'"}),"."]})}),(0,t.jsx)("div",{css:(0,o.css)("margin-top:",a.D[5],"px;"),children:(0,t.jsx)(d.z,{priority:"primary",size:p(b),icon:(0,t.jsx)(l.l,{}),iconSide:"left",onClick:function(){return S(!0),void(v&&setTimeout((function(){return v()})))},"data-cy":"click-to-view-button","data-link-name":"allow-button",children:g(b)})})]})}},1376:(e,i,n)=>{n.r(i),n.d(i,{DocumentBlockComponent:()=>a,getDocumentCloudAssetUrl:()=>s});var r=n(7800),t=n(2990),o=n(602),c={name:"162bozl",styles:"iframe{min-width:300px!important;max-width:100%;}"},s=function(e){return null==e?void 0:e.replace(new RegExp("https://embed.documentcloud.org/documents/([0-9]+)-([^/]+).*","g"),"https://assets.documentcloud.org/documents/$1/$2.pdf")},a=function(e){var i=e.embedUrl,n=e.height,a=e.isMainMedia,d=e.isTracking,l=e.role,u=e.source,h=e.sourceDomain,p=e.title,g=e.width;return(0,r.jsx)(o.L,{role:l,isTracking:d,isMainMedia:a,source:u,sourceDomain:h,children:(0,r.jsxs)("div",{css:c,children:[(0,r.jsx)("iframe",{src:i,title:p,height:n,width:g,allowFullScreen:!0,"data-cy":"document-embed"}),"DocumentCloud"===u?(0,r.jsx)(t.Q,{priority:"subdued",size:"small",href:s(i),title:p,download:!0,children:"Download original document"}):(0,r.jsx)(r.Fragment,{})]})})}},3965:(e,i,n)=>{n.d(i,{z:()=>u});var r=n(4649),t=n(8808),o=n(7800),c=n(8259),s=n(5015),a=["priority","size","icon","iconSide","hideLabel","nudgeIcon","type","isLoading","loadingAnnouncement","cssOverrides","children"];function d(e,i){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);i&&(r=r.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var i=1;i<arguments.length;i++){var n=null!=arguments[i]?arguments[i]:{};i%2?d(Object(n),!0).forEach((function(i){(0,r.Z)(e,i,n[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))}))}return e}var u=function(e){var i=e.priority,n=e.size,r=e.icon,d=e.iconSide,u=e.hideLabel,h=e.nudgeIcon,p=e.type,g=void 0===p?"button":p,m=e.isLoading,b=void 0!==m&&m,v=e.loadingAnnouncement,f=void 0===v?"Loading":v,y=e.cssOverrides,w=e.children,j=(0,t.Z)(e,a);return(0,o.jsx)("button",l(l({css:(0,s.$)({size:n,priority:i,icon:r,hideLabel:u,iconSide:d,nudgeIcon:h,cssOverrides:y,isLoading:b}),type:g,"aria-live":"polite","aria-label":b?f:void 0},j),{},{children:(0,c._)({hideLabel:u,iconSvg:r,isLoading:b,children:w})}))}},2990:(e,i,n)=>{n.d(i,{Q:()=>u});var r=n(4649),t=n(8808),o=n(7800),c=n(8259),s=n(5015),a=["priority","size","iconSide","icon","nudgeIcon","hideLabel","cssOverrides","children"];function d(e,i){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);i&&(r=r.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var i=1;i<arguments.length;i++){var n=null!=arguments[i]?arguments[i]:{};i%2?d(Object(n),!0).forEach((function(i){(0,r.Z)(e,i,n[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))}))}return e}var u=function(e){var i=e.priority,n=e.size,r=e.iconSide,d=e.icon,u=e.nudgeIcon,h=e.hideLabel,p=e.cssOverrides,g=e.children,m=(0,t.Z)(e,a);return(0,o.jsx)("a",l(l({css:(0,s.$)({size:n,priority:i,icon:d,hideLabel:h,iconSide:r,nudgeIcon:u,cssOverrides:p})},m),{},{children:(0,c._)({hideLabel:h,iconSvg:d,children:g})}))}},3546:(e,i,n)=>{n.d(i,{l:()=>a});var r=n(7800),t=n(43),o=n(7861),c=n(9861),s=function(e){var i=e.size;return(0,r.jsx)("svg",{width:i?o.EA[i]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.011 11.883 2 12.896l5.057 7.08h.48L22 5.005l-1.011-.986L7.537 16.207l-4.526-4.324Z"})})},a=function(e){var i=e.size,n=e.isAnnouncedByScreenReader,o=void 0!==n&&n;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s,{size:i}),o?(0,r.jsx)("span",{css:(0,t.css)(c.j,";"),children:"Checkmark"}):""]})}}}]);
//# sourceMappingURL=DocumentBlockComponent-importable.legacy.440fa75387efaabbbff7.js.map