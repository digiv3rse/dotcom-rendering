"use strict";(self.webpackChunk_guardian_dotcom_rendering=self.webpackChunk_guardian_dotcom_rendering||[]).push([[1813],{3163:(e,t,n)=>{n.d(t,{C:()=>z});var r=n(7800),i=n(43),s=n(1083),o=n(4926),c=n(5158),a=n(3904),l=n(4436),d=n(8322),u=n(3196),p=n(4655),h=n(683);const b={expander:{background:h.DG.neutral[97],horizontalRules:h.DG.neutral[86],border:h.DG.neutral[7],expandBackground:h.DG.neutral[7],expandBackgroundHover:"#454545",expandText:h.DG.neutral[100],collapseBackground:h.DG.neutral[100],collapseBackgroundHover:"#E5E5E5",collapseText:h.DG.neutral[7],collapseTextHover:h.DG.neutral[7]}};function x(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function f(){const e=x(["\n\tborder-image: repeating-linear-gradient(\n\t\t\tto bottom,\n\t\t\t",",\n\t\t\t"," 1px,\n\t\t\ttransparent 1px,\n\t\t\ttransparent 4px\n\t\t)\n\t\t13;\n\tborder-top: 13px solid ",";\n\tbackground: ",";\n\tbox-shadow: none;\n\tposition: relative;\n\tmargin-bottom: ",";\n\n\t.expander__checkbox:checked ~ label {\n\t\tbackground: ",";\n\t\tcolor: ",";\n\t\tborder: 1px solid ",";\n\n\t\t&:hover {\n\t\t\tbackground-color: ",";\n\t\t\tcolor: ",";\n\n\t\t\t#svgminus {\n\t\t\t\tfill: ",";\n\t\t\t}\n\t\t}\n\n\t\t#svgminus {\n\t\t\tfill: ",";\n\t\t}\n\t}\n\t.expander__checkbox ~ label #svgplus {\n\t\tfill: ",";\n\t}\n\n\t.expander__checkbox:checked ~ .expander__collapsible-body {\n\t\tmax-height: fit-content;\n\t\tmargin-bottom: ",";\n\t}\n\n\t.expander__checkbox:focus ~ .expander__collapsible-body {\n\t\t",";\n\t}\n"]);return f=function(){return e},e}function g(){const e=x(["\n\tbackground-image: linear-gradient(\n\t\t0deg,\n\t\t",",\n\t\t"," 40%,\n\t\trgba(255, 255, 255, 0)\n\t);\n\theight: 5rem;\n\tposition: absolute;\n\tbottom: 0;\n\twidth: 100%;\n\tdisplay: block;\n"]);return g=function(){return e},e}function v(){const e=x(["\n\t",";\n\tdisplay: inline-flex;\n\tjustify-content: space-between;\n\tbox-shadow: none;\n\talign-items: center;\n\tbox-sizing: border-box;\n\tcursor: pointer;\n\tposition: absolute;\n\tbottom: -","rem;\n\tborder-radius: ","rem;\n\tpadding: 0 ",";\n\tpadding-bottom: 2px;\n\tborder: 1px solid ",";\n\ttext-decoration: none;\n\tbackground: ",";\n\tcolor: ",";\n\theight: ","rem;\n\tmin-height: ","rem;\n\tmargin-left: ",";\n\n\t&:hover {\n\t\tbackground-color: ",";\n\t}\n"]);return v=function(){return e},e}function j(){const e=x(["\n\tmargin: 0;\n\tmax-height: ",";\n\toverflow: hidden;\n"]);return j=function(){return e},e}function m(){const e=x(["\n\tsvg {\n\t\tdisplay: block;\n\t\twidth: 1.5rem;\n\t\theight: auto;\n\t\tmargin-left: -",";\n\t\tmargin-right: ",";\n\t}\n"]);return m=function(){return e},e}function w(){const e=x(["\n\tdisplay: flex;\n\talign-items: center;\n\tpadding: 0 ",";\n\tposition: absolute;\n\tright: 0;\n\tmargin-top: -",";\n"]);return w=function(){return e},e}h.DG.neutral[20],h.DG.neutral[60],h.DG.neutral[60],h.DG.neutral[86],h.DG.neutral[100],h.DG.neutral[7],h.DG.neutral[10],h.DG.neutral[86],h.DG.neutral[86],h.DG.neutral[7];const C=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b.expander;return(0,i.css)(f(),e.horizontalRules,e.horizontalRules,e.border,e.background,l.K[9],e.collapseBackground,e.collapseText,e.collapseText,e.collapseBackgroundHover,e.collapseTextHover,e.collapseTextHover,e.collapseText,e.expandText,l.K[6],d.y)},O=(0,i.css)(m(),l.K[1],l.K[1]),y=(0,i.css)(w(),l.K[1],l.K[6]);function k(){const e=(t=["\n\t\t\t\t\t",";\n\t\t\t\t"],n||(n=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}})));var t,n;return k=function(){return e},e}const z=e=>{let{name:t,expandCallback:n,renderExtra:d,disableTabbingWhenCollapsed:h=!0,children:x,cssOverrides:f,collapsedHeight:m="240px"}=e;const[w,z]=(0,a.useState)(!1);return(0,a.useEffect)((()=>{h&&((e,t)=>{const n=document.getElementById("expander-".concat(e,"__collapsible-body"));n&&Array.from(n.querySelectorAll("input,textarea,select,button,a")).forEach((e=>{e.tabIndex=t?0:-1}))})(t,w)}),[h,w]),(0,r.jsxs)("div",{id:"expander-".concat(t),css:e=>[C(e.expander),f],children:[(0,r.jsx)("input",{type:"checkbox",css:(0,i.css)(k(),s.j),className:"expander__checkbox",id:"expander-checkbox-".concat(t),onChange:e=>{null==n||n(e.target.checked),z(e.target.checked)},"aria-label":"".concat(w?"Collapse":"Expand"," ").concat(t&&t)}),(0,r.jsx)("div",{className:"expander__collapsible-body",id:"expander-".concat(t,"__collapsible-body"),css:()=>(e=>(0,i.css)(j(),e))(m),"aria-hidden":!w,children:x}),!w&&(0,r.jsx)("div",{css:e=>function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b.expander;return(0,i.css)(g(),e.background,e.background)}(e.expander)}),d&&(0,r.jsx)("span",{css:y,children:d()}),(0,r.jsx)("label",{"aria-hidden":!0,css:e=>function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b.expander;return(0,i.css)(v(),u.OS.small({fontWeight:"bold"}),p.T6.ctaSmall/2,p.T6.ctaSmall,l.K[4],e.expandBackground,e.expandBackground,e.expandText,p.T6.ctaSmall,p.T6.ctaSmall,l.K[2],e.expandBackgroundHover)}(e.expander),htmlFor:"expander-checkbox-".concat(t),children:w?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("span",{id:"svgminus",css:O,children:(0,r.jsx)(o.i,{})}),"Show less"]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("span",{id:"svgplus",css:O,children:(0,r.jsx)(c.G,{})}),"Show more"]})})]})}},5601:(e,t,n)=>{n.d(t,{m:()=>g});var r=n(7800),i=n(43),s=n(3196),o=n(4436),c=n(1810),a=n(683);const l={tabs:{background:a.DG.neutral[97],text:a.DG.neutral[7],border:a.DG.neutral[60],inactiveBackground:a.DG.neutral[86]}};function d(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function u(){const e=d(["\n\tdisplay: flex;\n\talign-items: flex-end;\n\tjustify-content: flex-start;\n"]);return u=function(){return e},e}function p(){const e=d(["\n\tbackground-color: ",";\n\t","\n\tposition: relative;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\ttext-decoration: none;\n\tappearance: none;\n\twidth: 100%;\n\tmin-height: ","px;\n\talign-self: stretch;\n\ttext-align: left;\n\tcolor: ",";\n\tpadding: ","px ","px;\n\tborder: 1px solid ",";\n\tborder-bottom: none;\n\tcursor: pointer;\n\n\t:first-of-type {\n\t\tmargin-left: ","px;\n\t\tborder-top-left-radius: ","px;\n\t}\n\t:last-of-type {\n\t\tmargin-right: ","px;\n\t\tborder-top-right-radius: ","px;\n\t}\n\n\t"," {\n\t\t","\n\t\twidth: 210px;\n\t}\n\n\t&[aria-selected='false'] {\n\t\tbackground-color: ",";\n\t}\n\n\t/* Pseudo-element that covers the tab panel bottom border for the active tab */\n\t&[aria-selected='true']::after {\n\t\tposition: absolute;\n\t\tz-index: 1;\n\t\tbottom: -1px;\n\t\tright: 0;\n\t\tleft: 0;\n\t\theight: 1px;\n\t\tbackground: inherit;\n\t\tcontent: '';\n\t}\n"]);return p=function(){return e},e}function h(){const e=d(["\n\tposition: relative;\n\tpadding: ","px;\n\tbackground: ",";\n\tborder-top: 1px solid ",";\n\tcolor: ",";\n"]);return h=function(){return e},e}a.DG.neutral[20],a.DG.neutral[97],a.DG.neutral[60],a.DG.neutral[7];const b=(0,i.css)(u()),x=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l.tabs;return(0,i.css)(p(),e.background,s.OS.medium({fontWeight:"bold"}),o.D[12],e.text,o.D[2],o.D[3],e.border,o.D[2],o.D[2],o.D[2],o.D[2],c.Dp.phablet,s.OS.medium({fontWeight:"bold"}),e.inactiveBackground)},f=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l.tabs;return(0,i.css)(h(),o.D[3],e.background,e.border,e.text)};function g(e){let{tabsLabel:t,tabElement:n,tabs:i,selectedTab:s,onTabChange:o}=e;const c=n;return(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{css:b,role:"tablist","aria-label":t,children:i.map((e=>(0,r.jsx)(c,{css:e=>x(e.tabs),role:"tab",id:e.id,href:e.href,"aria-selected":s===e.id,"aria-controls":"".concat(e.id,"-tab"),onClick:()=>o(e.id),children:e.text},e.id)))}),i.map((e=>(0,r.jsx)("div",{css:e=>f(e.tabs),role:"tabpanel",id:"".concat(e.id,"-tab"),"aria-labelledby":e.id,hidden:!(e.id===s),children:e.content},"".concat(e.id,"-tab"))))]})}},1782:(e,t,n)=>{n.d(t,{Q:()=>c});var r=n(7800),i=n(9579),s=n(8185);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const c=e=>{var t,n,{priority:c,size:a,iconSide:l,icon:d,nudgeIcon:u,hideLabel:p,cssOverrides:h,children:b}=e,x=function(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(e,["priority","size","iconSide","icon","nudgeIcon","hideLabel","cssOverrides","children"]);return(0,r.jsx)("a",(t=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({css:(0,s.$)({size:a,priority:c,icon:d,hideLabel:p,iconSide:l,nudgeIcon:u,cssOverrides:h})},x),n=null!=(n={children:(0,i._)({hideLabel:p,iconSvg:d,children:b})})?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n.push.apply(n,r)}return n}(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})),t))}},5317:(e,t,n)=>{n.d(t,{h:()=>l});var r=n(7800),i=n(43),s=n(4655),o=n(1083);function c(){const e=(t=["\n\t\t\t\t\t","\n\t\t\t\t"],n||(n=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}})));var t,n;return c=function(){return e},e}const a=e=>{let{size:t}=e;return(0,r.jsx)("svg",{width:t?s.EA[t]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-8.909-.318-.659-7.864h-.886l-.682 8.523 1.159 1.159 6.34-.59V12l-5.272-.318Z"})})},l=e=>{let{size:t,isAnnouncedByScreenReader:n=!1}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a,{size:t}),n?(0,r.jsx)("span",{css:(0,i.css)(c(),o.j),children:"Clock"}):""]})}},4926:(e,t,n)=>{n.d(t,{i:()=>l});var r=n(7800),i=n(43),s=n(4655),o=n(1083);function c(){const e=(t=["\n\t\t\t\t\t","\n\t\t\t\t"],n||(n=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}})));var t,n;return c=function(){return e},e}const a=e=>{let{size:t}=e;return(0,r.jsx)("svg",{width:t?s.EA[t]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1 10.75v2.5h22v-2.5H1Z"})})},l=e=>{let{size:t,isAnnouncedByScreenReader:n=!1}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a,{size:t}),n?(0,r.jsx)("span",{css:(0,i.css)(c(),o.j),children:"Minus sign"}):""]})}},5158:(e,t,n)=>{n.d(t,{G:()=>l});var r=n(7800),i=n(43),s=n(4655),o=n(1083);function c(){const e=(t=["\n\t\t\t\t\t","\n\t\t\t\t"],n||(n=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}})));var t,n;return c=function(){return e},e}const a=e=>{let{size:t}=e;return(0,r.jsx)("svg",{width:t?s.EA[t]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"m10.8 13.2.425 9.8h1.525l.45-9.8 9.8-.45v-1.525l-9.8-.425-.45-9.8h-1.525l-.425 9.8-9.8.425v1.525l9.8.45Z"})})},l=e=>{let{size:t,isAnnouncedByScreenReader:n=!1}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a,{size:t}),n?(0,r.jsx)("span",{css:(0,i.css)(c(),o.j),children:"Plus sign"}):""]})}},8092:(e,t,n)=>{n.d(t,{m:()=>l});var r=n(7800),i=n(43),s=n(4655),o=n(1083);function c(){const e=(t=["\n\t\t\t\t\t","\n\t\t\t\t"],n||(n=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}})));var t,n;return c=function(){return e},e}const a=e=>{let{size:t}=e;return(0,r.jsx)("svg",{width:t?s.EA[t]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M19 16c1.675 0 3 1.35 3 3 0 1.675-1.325 3-3 3a2.972 2.972 0 0 1-2.975-3c0-.125 0-.275.025-.375L7.1 14.15a2.908 2.908 0 0 1-2.075.825C3.325 14.975 2 13.65 2 12a3.004 3.004 0 0 1 3.025-3.025c.775 0 1.5.35 2.075.875l8.95-4.475c-.025-.1-.025-.225-.025-.4A2.966 2.966 0 0 1 19 2c1.675 0 3 1.325 3 2.975C22 6.65 20.675 8 19 8c-.8 0-1.475-.325-2.05-.825l-8.975 4.45C8 11.7 8 11.825 8 12s0 .3-.025.375l8.975 4.45c.575-.5 1.25-.825 2.05-.825Zm0-12.8c-.975 0-1.8.775-1.8 1.775 0 1 .825 1.825 1.8 1.825 1 0 1.825-.825 1.825-1.825S20 3.2 19 3.2Zm0 17.6c1 0 1.825-.825 1.825-1.8 0-1-.825-1.8-1.825-1.8-.975 0-1.8.8-1.8 1.8 0 .975.825 1.8 1.8 1.8Z"})})},l=e=>{let{size:t,isAnnouncedByScreenReader:n=!1}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a,{size:t}),n?(0,r.jsx)("span",{css:(0,i.css)(c(),o.j),children:"Share"}):""]})}},7722:(e,t,n)=>{n.d(t,{r:()=>l});var r=n(7800),i=n(43),s=n(4655),o=n(1083);function c(){const e=(t=["\n\t\t\t\t\t","\n\t\t\t\t"],n||(n=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}})));var t,n;return c=function(){return e},e}const a=e=>{let{size:t}=e;return(0,r.jsx)("svg",{width:t?s.EA[t]:void 0,height:void 0,viewBox:"-3 -3 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:(0,r.jsx)("path",{d:"m9.6 2.292.225.91A9.037 9.037 0 0 0 7.313 4.24l-.481-.803A9.955 9.955 0 0 1 9.6 2.292Zm4.8 0-.225.91a9.037 9.037 0 0 1 2.512 1.039l.485-.803A9.95 9.95 0 0 0 14.4 2.292ZM3.438 6.832a9.965 9.965 0 0 0-1.145 2.768l.909.225A9.048 9.048 0 0 1 4.24 7.312l-.803-.481Zm-.5 5.168c0-.454.033-.908.101-1.357l-.926-.141c-.15.993-.15 2.003 0 2.997l.926-.141a9.14 9.14 0 0 1-.101-1.358Zm14.231 8.562-.482-.803c-.779.47-1.625.82-2.509 1.039l.225.909a9.973 9.973 0 0 0 2.766-1.145Zm3.893-8.562c0 .455-.033.908-.101 1.358l.927.14c.15-.993.15-2.003 0-2.996l-.927.14c.068.45.102.904.102 1.358Zm.645 2.4-.909-.225a9.05 9.05 0 0 1-1.039 2.513l.803.484c.52-.861.905-1.795 1.145-2.772Zm-8.35 6.562c-.9.136-1.815.136-2.715 0l-.141.927c.993.15 2.003.15 2.997 0l-.14-.927Zm5.938-3.586a9.087 9.087 0 0 1-1.92 1.918l.557.755a10.017 10.017 0 0 0 2.119-2.112l-.756-.561Zm-1.92-12.67a9.079 9.079 0 0 1 1.92 1.92l.755-.563a10.017 10.017 0 0 0-2.113-2.113l-.562.755Zm-12.67 1.92a9.079 9.079 0 0 1 1.92-1.92l-.562-.755A10.017 10.017 0 0 0 3.95 6.062l.755.563Zm15.857.206-.803.48c.471.78.821 1.626 1.04 2.51l.909-.225a9.933 9.933 0 0 0-1.145-2.765Zm-9.92-3.792a9.156 9.156 0 0 1 2.716 0l.141-.927c-.993-.15-2.003-.15-2.997 0l.14.927ZM5.188 20.298l-1.936.451.452-1.936-.913-.214-.452 1.936a.937.937 0 0 0 1.127 1.127l1.934-.444-.212-.92Zm-2.202-2.535.913.213.312-1.343a9.025 9.025 0 0 1-1.007-2.459l-.91.225c.205.829.514 1.628.922 2.377l-.23.987Zm4.375 2.031-1.342.313.212.912.988-.23c.749.409 1.548.718 2.376.922l.225-.91a9.02 9.02 0 0 1-2.453-1.013l-.006.006ZM12 3.875a8.125 8.125 0 0 0-6.875 12.448l-.78 3.332 3.332-.78a8.125 8.125 0 1 0 4.323-15Z",fill:"#3A76F0"})})},l=e=>{let{size:t,isAnnouncedByScreenReader:n=!1}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a,{size:t}),n?(0,r.jsx)("span",{css:(0,i.css)(c(),o.j),children:"Signal logo"}):""]})}},8188:(e,t,n)=>{n.d(t,{J:()=>l});var r=n(7800),i=n(43),s=n(4655),o=n(1083);function c(){const e=(t=["\n\t\t\t\t\t","\n\t\t\t\t"],n||(n=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}})));var t,n;return c=function(){return e},e}const a=e=>{let{size:t}=e;return(0,r.jsxs)("svg",{width:t?s.EA[t]:void 0,height:void 0,viewBox:"-3 -3 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:[(0,r.jsx)("path",{d:"M12 22C17.5233 22 22 17.5233 22 12C22 6.47667 17.5233 2 12 2C6.47667 2 2 6.4775 2 12C2 17.5225 6.4775 22 12 22Z",fill:"url(#paint0_linear_4181_6917)"}),(0,r.jsx)("path",{d:"M6.52666 11.8942L12.3583 9.37833L16.0892 8.01583C16.2273 8.01282 16.3628 8.05335 16.4767 8.13166C16.5558 8.20083 16.6067 8.29749 16.6192 8.40249C16.6394 8.53257 16.6449 8.6645 16.6358 8.79583C16.485 10.3767 15.8342 14.215 15.5042 15.9858C15.3642 16.7408 15.0875 16.9917 14.8208 17.0108C14.24 17.0642 13.7992 16.6275 13.2375 16.2558L11.0058 14.7567C10.0183 14.1067 10.6583 13.7508 11.2208 13.1642L13.9767 10.4725C13.9833 10.4417 13.9825 10.4092 13.9742 10.3783C13.9658 10.3475 13.9508 10.3192 13.93 10.295C13.8992 10.2758 13.865 10.2633 13.8283 10.26C13.7917 10.2567 13.7558 10.2617 13.7225 10.275C13.6342 10.295 12.2283 11.2242 9.50499 13.0625C9.10582 13.3367 8.74416 13.47 8.42083 13.4625C8.06333 13.455 7.37666 13.2608 6.86583 13.095C6.23666 12.8908 5.74166 12.7842 5.78499 12.4383C5.80583 12.2642 6.05249 12.0825 6.52666 11.8942Z",fill:"white"}),(0,r.jsx)("defs",{children:(0,r.jsxs)("linearGradient",{id:"paint0_linear_4181_6917",x1:"11.8742",y1:"1.81167",x2:"11.8742",y2:"21.9375",gradientUnits:"userSpaceOnUse",children:[(0,r.jsx)("stop",{stopColor:"#2AABEE"}),(0,r.jsx)("stop",{offset:"1",stopColor:"#229ED9"})]})})]})},l=e=>{let{size:t,isAnnouncedByScreenReader:n=!1}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a,{size:t}),n?(0,r.jsx)("span",{css:(0,i.css)(c(),o.j),children:"Telegram logo"}):""]})}},9160:(e,t,n)=>{n.d(t,{H:()=>l});var r=n(7800),i=n(43),s=n(4655),o=n(1083);function c(){const e=(t=["\n\t\t\t\t\t","\n\t\t\t\t"],n||(n=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}})));var t,n;return c=function(){return e},e}const a=e=>{let{size:t}=e;return(0,r.jsxs)("svg",{width:t?s.EA[t]:void 0,height:void 0,viewBox:"-3 -3 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:[(0,r.jsx)("mask",{id:"mask0_4181_6918",style:{maskType:"luminance"},maskUnits:"userSpaceOnUse",x:"2",y:"2",width:"20",height:"20",children:(0,r.jsx)("path",{d:"M2 2H22V22H2V2Z",fill:"white"})}),(0,r.jsxs)("g",{mask:"url(#mask0_4181_6918)",children:[(0,r.jsx)("mask",{id:"mask1_4181_6918",style:{maskType:"luminance"},maskUnits:"userSpaceOnUse",x:"2",y:"2",width:"20",height:"20",children:(0,r.jsx)("path",{d:"M22 2H2V22H22V2Z",fill:"white"})}),(0,r.jsxs)("g",{mask:"url(#mask1_4181_6918)",children:[(0,r.jsx)("path",{d:"M12 20.8892C14.3572 20.8883 16.6176 19.9514 18.2843 18.2846C19.951 16.6177 20.8877 14.3572 20.8883 12C20.8877 9.6428 19.951 7.38232 18.2843 5.71544C16.6176 4.04857 14.3572 3.11172 12 3.11084C9.64266 3.1115 7.38205 4.04825 5.71515 5.71515C4.04825 7.38205 3.1115 9.64266 3.11084 12C3.1115 14.3574 4.04825 16.618 5.71515 18.2849C7.38205 19.9518 9.64266 20.8885 12 20.8892Z",fill:"#2EDB2A"}),(0,r.jsx)("path",{d:"M4.27417 15.1625L8.52418 19.2642L2.84167 20.8925L4.27417 15.1617V15.1625Z",fill:"#2EDB2A"}),(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M19.0858 4.90583C17.2058 3.03333 14.7058 2.00167 12.0417 2C6.55333 2 2.08583 6.44583 2.08333 11.91C2.0825 13.6567 2.54083 15.3617 3.4125 16.8642L2 22L7.27917 20.6217C8.73333 21.4108 10.3717 21.8275 12.0375 21.8283H12.0417C17.53 21.8283 21.9975 17.3825 22 11.9183C22.0037 10.6147 21.748 9.32339 21.2476 8.1196C20.7473 6.91581 20.0125 5.82279 19.0858 4.90583ZM12.0417 20.155H12.0383C10.5568 20.1554 9.10219 19.7589 7.82583 19.0067L7.52333 18.8283L4.39083 19.6458L5.2275 16.6067L5.03083 16.295C4.2025 14.9842 3.765 13.4675 3.765 11.9117C3.76667 7.37 7.48 3.675 12.0458 3.675C14.2567 3.67583 16.335 4.53333 17.8975 6.09083C19.46 7.64833 20.32 9.7175 20.32 11.9183C20.3175 16.4608 16.605 20.1567 12.0425 20.1567L12.0417 20.155ZM16.5817 13.985C16.3325 13.8608 15.1092 13.2617 14.8817 13.18C14.6542 13.0983 14.4875 13.0558 14.3217 13.3042C14.1558 13.5525 13.6792 14.1092 13.5342 14.275C13.3892 14.4408 13.2433 14.4608 12.995 14.3375C12.7467 14.2142 11.9442 13.9525 10.9933 13.1083C10.2533 12.4517 9.75417 11.6408 9.60917 11.3925C9.46417 11.1442 9.59417 11.0108 9.71833 10.8875C9.83 10.7767 9.9675 10.5983 10.0917 10.4533C10.2158 10.3083 10.2575 10.2058 10.3408 10.04C10.4242 9.87417 10.3825 9.73 10.32 9.60583C10.2575 9.48167 9.76 8.2625 9.55333 7.7675C9.35167 7.28417 9.14667 7.35 8.99333 7.3425C8.84833 7.33583 8.68167 7.33333 8.51583 7.33333C8.3899 7.33665 8.266 7.36589 8.15187 7.41923C8.03774 7.47256 7.93583 7.54885 7.8525 7.64333C7.62417 7.89083 6.98167 8.49 6.98167 9.70917C6.98167 10.9283 7.87333 12.105 7.9975 12.2708C8.12167 12.4367 9.75167 14.9375 12.2483 16.01C12.8417 16.265 13.305 16.4175 13.6675 16.5317C14.2642 16.72 14.8058 16.6942 15.235 16.63C15.7125 16.5592 16.7075 16.0308 16.9142 15.4525C17.1208 14.8742 17.1217 14.3783 17.0592 14.275C16.9967 14.1717 16.8308 14.11 16.5817 13.9858V13.985Z",fill:"white"})]})]})]})},l=e=>{let{size:t,isAnnouncedByScreenReader:n=!1}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a,{size:t}),n?(0,r.jsx)("span",{css:(0,i.css)(c(),o.j),children:"WhatsApp logo"}):""]})}}}]);
//# sourceMappingURL=1813.modern.d6f9406ab413cd7b7a42.js.map