"use strict";(self.webpackChunk_guardian_dotcom_rendering=self.webpackChunk_guardian_dotcom_rendering||[]).push([[8062],{3383:(e,r,t)=>{t.d(r,{Mk:()=>o,U:()=>a,Uz:()=>n});var i=t(5809),n=function(e){return"Contributor"===e.type},o=function(e,r){if(r&&!r.includes(" and ")){var t=e.filter(n).filter((function(e){var t=e.title;return r.includes(t)})),o=(0,i.Z)(t,2),a=o[0];if(!o[1])return a}},a=function(e,r){var t=e.reduce((function(e,r){var t=(0,i.Z)(e,2),o=t[0],a=t[1],s=function(e,r){return e.filter(n).filter((function(e){return e.title===r}))}(a,r),c=(0,i.Z)(s,1)[0];if(!c)return[o.concat(r),a];var l=a.filter((function(e){return!(e.id===c.id)}));return[o.concat({tag:c,token:r}),l]}),[[],r]);return(0,i.Z)(t,1)[0]}},3137:(e,r,t)=>{t.r(r),t.d(r,{ShowMore:()=>_});var i=t(5809),n=t(7800),o=t(43),a=t(2933),s=t(9525),c=t(5246),l=t(9861),d=t(3965),u=t(4686),p=t(4872),v=t(7634),g=t(3904),f=t(4649),h=t(1539),m=t(2241),y=t(4819),b=t(3383),w=t(3386),D=t(7926);function O(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);r&&(i=i.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,i)}return t}function j(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?O(Object(t),!0).forEach((function(r){(0,f.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):O(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var x=function(e,r,t){return e.map((function(e){var i,n,o,a,s,c,l,d,u=function(e){var r=e.linkFormat,t=e.containerFormat;return r?e.containerPalette||t.design===h.Y.LiveBlog||t.design===h.Y.Gallery||t.design===h.Y.Audio||t.design===h.Y.Video||t.theme===m.v.SpecialReport||t.design===h.Y.Analysis?t:r.design===h.Y.LiveBlog||r.design===h.Y.Gallery||r.design===h.Y.Audio||r.theme===m.v.SpecialReport||r.design===h.Y.Video?j(j({},t),{},{theme:y.D.News}):r:t}({linkFormat:e.format?(0,w.d)(e.format):void 0,containerFormat:r,containerPalette:t}),p="LiveBlogDesign"===(null===(i=e.format)||void 0===i?void 0:i.design);return{format:u,headline:null!==(n=null===(o=e.header)||void 0===o?void 0:o.headline)&&void 0!==n?n:"",url:null!==(a=e.properties.href)&&void 0!==a?a:null===(s=e.header)||void 0===s?void 0:s.url,kickerText:p?"Live":null===(c=e.header)||void 0===c||null===(l=c.kicker)||void 0===l||null===(d=l.item)||void 0===d?void 0:d.properties.kickerText}}))},P=function(){var e,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,i=(0,b.Mk)(r,t);return null!==(e=null==i?void 0:i.bylineLargeImageUrl)&&void 0!==e?e:void 0},k=function(e){switch(e.design){case h.Y.Gallery:return"Gallery";case h.Y.Video:return"Video";case h.Y.Audio:return"Audio";default:return}},S=function(e){var r,t;return e.properties.isBreaking?"Breaking news":null===(r=e.header.kicker)||void 0===r||null===(t=r.item)||void 0===t?void 0:t.properties.kickerText},Y=t(4954),L=t(5180),C=function(e){return(0,o.css)("position:relative;display:flex;flex-direction:",e,";row-gap:12px;",c.C4.tablet,"{flex-direction:column;width:100%;}")},I=(0,o.css)(c.Dp.tablet,"{flex-wrap:wrap;}"),A=(0,o.css)("margin-bottom:",a.D[3],"px;"),E=function(e){var r=e.children,t=e.direction,i=void 0===t?"column":t,o=e.showDivider,a=void 0!==o&&o,s=e.padBottom,c=void 0!==s&&s,l=e.wrapCards,d=void 0!==l&&l,u=e.containerPalette;return(0,n.jsx)("ul",{css:[C(i),a&&(0,L.r)(u),c&&A,d&&I],children:r})},R=t(8808),B=t(5443),z=["trail"];function F(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);r&&(i=i.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,i)}return t}function T(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?F(Object(t),!0).forEach((function(r){(0,f.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):F(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var Z=function(e){var r=e.trail,t=(0,R.Z)(e,z),i={linkTo:r.url,format:r.format,headlineText:r.headline,byline:r.byline,showByline:r.showByline,showQuotedHeadline:r.showQuotedHeadline,webPublicationDate:r.webPublicationDate,kickerText:r.kickerText,showPulsingDot:r.format.design===h.Y.LiveBlog,showClock:!1,imageUrl:r.image,isCrossword:r.isCrossword,mediaType:r.mediaType,mediaDuration:r.mediaDuration,starRating:r.starRating,dataLinkName:r.dataLinkName,snapData:r.snapData,discussionId:r.discussionId,avatarUrl:r.avatarUrl,showMainVideo:r.showMainVideo,isExternalLink:r.isExternalLink};return(0,B.Z)(T(T({},i),t))},M=t(6325),G=t(3287);function N(e){var r=e.isOpen,t=e.loading,i=e.title;return r&&t?"Loading":r?"Less ".concat(i):"More ".concat(i)}var U={name:"1d1lqhx",styles:"font-size:14px;padding-top:18px"},V={name:"zjik7",styles:"display:flex"},_=function(e){var r=e.title,t=e.pageId,f=e.sectionId,h=e.collectionId,m=e.showAge,y=e.ajaxUrl,b=e.containerPalette,O=(0,g.useState)([]),j=(0,i.Z)(O,2),L=j[0],C=j[1],I=(0,g.useState)(!1),A=(0,i.Z)(I,2),R=A[0],B=A[1];(0,G.t)((function(){var e,r=document.getElementById("container-".concat(f)),t=Array.from(null!==(e=null==r?void 0:r.querySelectorAll("a"))&&void 0!==e?e:[]).map((function(e){var r;return null===(r=e.attributes.getNamedItem("href"))||void 0===r?void 0:r.value})).filter((function(e){return!!e}));C(t)}),[]);var z,F=R?"".concat(y,"/").concat(t,"/show-more/").concat(h,".json?dcr=true"):void 0,T=(0,M.h)(F),_=T.data,H=T.error,Q=T.loading,$=_&&(z=_,z.map((function(e,r){var t,i,n,o,a,s,c,l,d,u,p,v,g,f,h,m,y=(0,w.d)(null!==(t=e.format)&&void 0!==t?t:{design:"ArticleDesign",theme:"NewsPillar",display:"StandardDisplay"}),b="".concat(e.card.group).concat(e.display.isBoosted?"+":""),O=(0,D.S)(y,b,r+1),j=null!==(i=e.properties.maybeContent)&&void 0!==i&&i.tags.tags?function(e){return e.map((function(e){var r=e.properties;return{id:r.id,type:r.tagType,title:r.webTitle,twitterHandle:r.twitterHandle,bylineImageUrl:r.bylineImageUrl,bylineLargeImageUrl:r.contributorLargeImagePath}}))}(e.properties.maybeContent.tags.tags):[];return{format:y,dataLinkName:O,url:"LinkSnap"===e.type&&e.properties.href?e.properties.href:e.header.url,headline:e.header.headline,trailText:e.card.trailText,starRating:e.card.starRating,webPublicationDate:void 0!==e.card.webPublicationDateOption?new Date(e.card.webPublicationDateOption).toISOString():void 0,image:(p=e,"LinkSnap"===p.type||"Replace"===(null===(v=p.properties.image)||void 0===v?void 0:v.type)?null===(m=p.properties.image)||void 0===m?void 0:m.item.imageSrc:p.display.imageHide?void 0:p.properties.isCrossword&&p.properties.maybeContentId?"https://api.nextgen.guardianapps.co.uk/".concat(p.properties.maybeContentId,".svg"):null===(g=p.properties.maybeContent)||void 0===g||null===(f=g.trail.trailPicture)||void 0===f||null===(h=f.allImages[0])||void 0===h?void 0:h.url),kickerText:S(e),supportingContent:e.supportingContent?x(e.supportingContent,y,void 0):void 0,discussionId:e.discussion.isCommentable?e.discussion.discussionId:void 0,byline:null!==(n=null===(o=e.properties.maybeContent)||void 0===o?void 0:o.trail.byline)&&void 0!==n?n:void 0,showByline:e.properties.showByline,snapData:(d=e.enriched,u=d,null!=u&&u.embedCss&&(u.embedCss=u.embedCss.replace(/body:not\(\.has-active-pageskin\)(?! &)/g,"body:not(.has-active-pageskin) &")),u),isBoosted:e.display.isBoosted,isCrossword:e.properties.isCrossword,showQuotedHeadline:e.display.showQuotedHeadline,avatarUrl:null!==(a=e.properties.maybeContent)&&void 0!==a&&a.tags.tags&&"Cutout"===(null===(s=e.properties.image)||void 0===s?void 0:s.type)?P(j,e.properties.maybeContent.trail.byline):void 0,mediaType:k(y),mediaDuration:null===(c=e.properties.maybeContent)||void 0===c||null===(l=c.elements.mediaAtoms[0])||void 0===l?void 0:l.duration,showMainVideo:e.properties.showMainVideo,isExternalLink:"ExternalLink"===e.card.cardStyle.type}}))).filter((function(e){return!L.includes(e.url)})),q="show-more-".concat(h);return(0,g.useEffect)((function(){var e=null!=$?$:[],r=(0,i.Z)(e,1)[0];if(r){var t=document.querySelector("#".concat(q,' [data-link-name="').concat(r.dataLinkName,'"]'));t instanceof HTMLElement&&t.focus()}}),[$,q]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{id:q,"aria-live":"polite",children:$&&(0,n.jsx)("div",{css:(0,o.css)("padding-top:",a.D[2],"px;"),children:(0,n.jsx)(E,{direction:"row",wrapCards:!0,children:$.map((function(e,r){var t,i;return(0,n.jsx)(Y.LI,{percentage:"33.333%",stretch:$.length%3!=1,padSides:!0,showDivider:r%3!=0,offsetBottomPaddingOnDivider:(t=r,i=$.length-$.length%3,3,t<i-(i%3||3)),children:(0,n.jsx)(Z,{trail:e,imageUrl:void 0,avatarUrl:void 0,containerPalette:b,showAge:m,headlineSize:"small"})},e.url)}))})})}),(0,n.jsxs)("div",{css:[V],children:[(0,n.jsx)(d.z,{size:"xsmall",icon:R?(0,n.jsx)(u.D,{}):(0,n.jsx)(p.G,{}),isLoading:Q,iconSide:"left",onClick:function(){return B(!R)},cssOverrides:(0,o.css)("margin-top:",a.D[4],"px;margin-right:10px;color:",s.n$[100],";background-color:",s.n$[7],";border-color:",s.n$[7],";&:hover{background-color:",s.n$[46],";border-color:",s.n$[46],";}",c.Dp.tablet,"{margin-left:10px;}"),"aria-controls":q,"aria-expanded":R&&!Q,"aria-describedby":"show-more-button-".concat(h,"-description"),children:N({isOpen:R,loading:Q,title:r})}),(0,n.jsx)("span",{id:"show-more-button-".concat(h,"-description"),css:(0,o.css)(l.j,";"),children:"Loads more stories and moves focus to first new story."}),H&&(0,n.jsx)(v.b,{cssOverrides:U,children:"Sorry, failed to load more stories. Retrying in a few seconds."})]})]})}},3386:(e,r,t)=>{t.d(r,{d:()=>d});var i=t(1539),n=function(e){var r=e.design,t=e.display;switch(r){case"ArticleDesign":default:return i.Y.Standard;case"GalleryDesign":return i.Y.Gallery;case"AudioDesign":return i.Y.Audio;case"VideoDesign":return i.Y.Video;case"ReviewDesign":return i.Y.Review;case"AnalysisDesign":return i.Y.Analysis;case"CommentDesign":return"ImmersiveDisplay"===t?i.Y.Standard:i.Y.Comment;case"LetterDesign":return i.Y.Letter;case"FeatureDesign":return i.Y.Feature;case"LiveBlogDesign":return i.Y.LiveBlog;case"DeadBlogDesign":return i.Y.DeadBlog;case"RecipeDesign":return i.Y.Recipe;case"MatchReportDesign":return i.Y.MatchReport;case"InterviewDesign":return i.Y.Interview;case"EditorialDesign":return i.Y.Editorial;case"QuizDesign":return i.Y.Quiz;case"InteractiveDesign":return i.Y.Interactive;case"PhotoEssayDesign":return i.Y.PhotoEssay;case"PrintShopDesign":return i.Y.PrintShop;case"ObituaryDesign":return i.Y.Obituary;case"FullPageInteractiveDesign":return i.Y.FullPageInteractive;case"NewsletterSignupDesign":return i.Y.NewsletterSignup;case"ExplainerDesign":return i.Y.Explainer;case"TimelineDesign":return i.Y.Timeline;case"ProfileDesign":return i.Y.Profile}},o=t(9442),a=function(e){switch(e.display){case"StandardDisplay":default:return o.D.Standard;case"ImmersiveDisplay":return o.D.Immersive;case"ShowcaseDisplay":return o.D.Showcase;case"NumberedListDisplay":return o.D.NumberedList}},s=t(4819),c=t(2241),l=function(e){switch(e.theme){case"NewsPillar":default:return s.D.News;case"OpinionPillar":return s.D.Opinion;case"SportPillar":return s.D.Sport;case"CulturePillar":return s.D.Culture;case"LifestylePillar":return s.D.Lifestyle;case"SpecialReportTheme":return c.v.SpecialReport;case"SpecialReportAltTheme":return c.v.SpecialReportAlt;case"Labs":return c.v.Labs}},d=function(e){return{display:a(e),theme:l(e),design:n(e)}}},7926:(e,r,t)=>{t.d(r,{S:()=>a});var i=t(2241),n=t(1539),o=function(e){var r=e.theme,t=e.design;if(r===i.v.SpecialReport)return"special-report";switch(t){case n.Y.Analysis:return"analysis";case n.Y.LiveBlog:return"live";case n.Y.DeadBlog:return"dead";case n.Y.Feature:return"feature";case n.Y.Editorial:return"editorial";case n.Y.Comment:return"comment";case n.Y.Gallery:case n.Y.Audio:case n.Y.Video:return"media";case n.Y.Review:return"review";case n.Y.Letter:return"letters";default:return"news"}},a=function(e,r,t){return[o(e),"group-".concat(r),"card-@".concat(t)].join(" | ")}},3287:(e,r,t)=>{t.d(r,{t:()=>o});var i=t(5809),n=t(3904),o=function(e,r){var t=(0,n.useState)(!1),o=(0,i.Z)(t,2),a=o[0],s=o[1],c=r.every((function(e){return void 0!==e}));(0,n.useEffect)((function(){!a&&c&&(e(),s(!0))}),[a,c,e])}},3965:(e,r,t)=>{t.d(r,{z:()=>u});var i=t(4649),n=t(8808),o=t(7800),a=t(8259),s=t(5015),c=["priority","size","icon","iconSide","hideLabel","nudgeIcon","type","isLoading","loadingAnnouncement","cssOverrides","children"];function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);r&&(i=i.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,i)}return t}function d(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){(0,i.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var u=function(e){var r=e.priority,t=e.size,i=e.icon,l=e.iconSide,u=e.hideLabel,p=e.nudgeIcon,v=e.type,g=void 0===v?"button":v,f=e.isLoading,h=void 0!==f&&f,m=e.loadingAnnouncement,y=void 0===m?"Loading":m,b=e.cssOverrides,w=e.children,D=(0,n.Z)(e,c);return(0,o.jsx)("button",d(d({css:(0,s.$)({size:t,priority:r,icon:i,hideLabel:u,iconSide:l,nudgeIcon:p,cssOverrides:b,isLoading:h}),type:g,"aria-live":"polite","aria-label":h?y:void 0},D),{},{children:(0,a._)({hideLabel:u,iconSvg:i,isLoading:h,children:w})}))}},7634:(e,r,t)=>{t.d(r,{b:()=>u});var i=t(4649),n=t(8808),o=t(7800),a=t(7849),s=t(5511),c=["children","cssOverrides"];function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);r&&(i=i.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,i)}return t}function d(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){(0,i.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var u=function(e){var r=e.children,t=e.cssOverrides,i=(0,n.Z)(e,c);return(0,o.jsxs)("span",d(d({css:function(e){return[(0,s.x)(e.userFeedback),t]},role:"alert"},i),{},{children:[(0,o.jsx)(a._,{}),r]}))}},5511:(e,r,t)=>{t.d(r,{k:()=>l,x:()=>c});var i=t(43),n=t(7162),o=t(7861),a=t(7860),s=(0,i.css)("display:flex;align-items:flex-start;",n.OS.medium(),";svg{fill:currentColor;flex:none;width:",o.jA.iconMedium,"rem;height:",o.T6.iconMedium,"rem;transform:translate(-4px, -3px);}"),c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a.F.userFeedback;return(0,i.css)(s,";color:",e.textError,";")},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a.F.userFeedback;return(0,i.css)(s,";color:",e.textSuccess,";")}},7860:(e,r,t)=>{t.d(r,{F:()=>n,W:()=>o});var i=t(2522),n={userFeedback:{textSuccess:i.DG.success[400],textError:i.DG.error[400]}},o={userFeedback:{textSuccess:i.DG.success[500],textError:i.DG.error[500]}}},7849:(e,r,t)=>{t.d(r,{_:()=>c});var i=t(7800),n=t(43),o=t(7861),a=t(9861),s=function(e){var r=e.size;return(0,i.jsx)("svg",{width:r?o.EA[r]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.41 2 1 19.057l.668.943h20.664l.668-.943L12.59 2h-1.18Zm-.063 12.178h1.306l.621-6.917-.856-.728h-.835l-.857.728.62 6.917ZM12 15.452c.7 0 1.274.573 1.274 1.274 0 .7-.573 1.274-1.274 1.274-.7 0-1.274-.573-1.274-1.274 0-.7.573-1.274 1.274-1.274Z"})})},c=function(e){var r=e.size,t=e.isAnnouncedByScreenReader,o=void 0!==t&&t;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s,{size:r}),o?(0,i.jsx)("span",{css:(0,n.css)(a.j,";"),children:"Warning"}):""]})}},4686:(e,r,t)=>{t.d(r,{D:()=>c});var i=t(7800),n=t(43),o=t(7861),a=t(9861),s=function(e){var r=e.size;return(0,i.jsx)("svg",{width:r?o.EA[r]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.015 14.042 20.707 22 22 20.709 14.06 12 22 3.291 20.707 2l-8.692 7.958L3.293 2.03 2 3.321 9.97 12 2 20.679l1.293 1.291 8.722-7.928Z"})})},c=function(e){var r=e.size,t=e.isAnnouncedByScreenReader,o=void 0!==t&&t;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s,{size:r}),o?(0,i.jsx)("span",{css:(0,n.css)(a.j,";"),children:"Close"}):""]})}},4872:(e,r,t)=>{t.d(r,{G:()=>c});var i=t(7800),n=t(43),o=t(7861),a=t(9861),s=function(e){var r=e.size;return(0,i.jsx)("svg",{width:r?o.EA[r]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"m10.8 13.2.425 9.8h1.525l.45-9.8 9.8-.45v-1.525l-9.8-.425-.45-9.8h-1.525l-.425 9.8-9.8.425v1.525l9.8.45Z"})})},c=function(e){var r=e.size,t=e.isAnnouncedByScreenReader,o=void 0!==t&&t;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s,{size:r}),o?(0,i.jsx)("span",{css:(0,n.css)(a.j,";"),children:"Plus sign"}):""]})}}}]);
//# sourceMappingURL=ShowMore-importable.legacy.7f0f629aaef47b8ebb5a.js.map