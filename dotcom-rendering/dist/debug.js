(()=>{var n={5660:(n,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>s});var o=e(559),a=e.n(o),i=e(3476),A=e.n(i)()(a());A.push([n.id,":root {\n\t/* z-index given to all labels */\n\t--debug-z-index: 100;\n}\n\n/* Layout: Annotate */\nmain[data-layout] {\n\tposition: relative;\n}\nmain[data-layout]::before {\n\tcontent: 'page layout: ' attr(data-layout);\n\tfont-family: monospace;\n\tbackground-color: hotpink;\n\tcolor: white;\n\n\tpadding: 5px;\n\tposition: absolute;\n\tz-index: var(--debug-z-index);\n}\n\n/* Islands: Outline child elements & label (top, right) */\ngu-island {\n\tposition: relative;\n}\n\ngu-island::before {\n\tcontent: 'island: ' attr(name);\n\tfont-family: monospace;\n\tfont-size: 13px;\n\tbackground-color: blue;\n\tcolor: white;\n\n\tpadding: 5px;\n\tposition: absolute;\n\tz-index: var(--debug-z-index);\n\ttop: 0;\n\tright: 0;\n}\n\n/* Islands can be empty, we will force their height & label them as such */\ngu-island:empty {\n\tdisplay: block;\n\tmin-height: 23px;\n}\ngu-island:empty::before {\n\tcontent: 'island: ' attr(name) ' (empty)';\n}\n\ngu-island > * {\n\toutline: 4px blue solid;\n}\n\n/* Fronts Containers - label (top, right) */\nsection[data-container-name] {\n\tposition: relative;\n}\nsection[data-container-name]::before {\n\tcontent: 'container: ' attr(data-container-name);\n\tfont-family: monospace;\n\tbackground-color: green;\n\tcolor: white;\n\n\tpadding: 5px;\n\tposition: absolute;\n\tz-index: var(--debug-z-index);\n\ttop: 0;\n\tright: 0;\n}\n\n/* Elements - outline & label (bottom, left) */\nfigure[data-spacefinder-type] {\n\tposition: relative;\n}\nfigure[data-spacefinder-type]::after {\n\tcontent: 'element: ' attr(data-spacefinder-type);\n\tfont-family: monospace;\n\tbackground-color: red;\n\tcolor: white;\n\n\tpadding: 5px;\n\tposition: absolute;\n\tz-index: var(--debug-z-index);\n\tbottom: 0px;\n}\n\nfigure[data-spacefinder-type] {\n\toutline: 4px red solid;\n}\n\n/* Handle the case where an island is directly inside an element */\nfigure[data-spacefinder-type] > gu-island > * {\n\toutline-style: dashed;\n}\n\n/* Patches - overriding CSS as we please comes with consequences ... */\n\n/* Links relies on position: relative being set higher up, so we need to ignore this element */\ngu-island[name='Links'] {\n\tdisplay: contents;\n}\n/* Because we can't rely on position:relative for links, we need to move the labelling to the child */\ngu-island[name='Links']::before {\n\tcontent: '';\n}\ngu-island[name='Links'] > *::before {\n\tcontent: 'island: Links';\n\tfont-family: monospace;\n\tfont-size: 13px;\n\tbackground-color: blue;\n\tcolor: white;\n\n\tpadding: 5px;\n\tposition: absolute;\n\tz-index: var(--debug-z-index);\n\ttop: 0;\n\tright: 0;\n}\n\n/* For some reason ReaderRevenueLinks outline is always below its surrounding elements, use outline offset to counter-act this */\ngu-island[name='ReaderRevenueLinks'] > * {\n\toutline-offset: -4px;\n}\n\n/* Onwards upper leaves an empty div when no content is available */\ngu-island[name='OnwardsUpper'] > *:empty {\n\tmin-height: 23px;\n}\n","",{version:3,sources:["webpack://./src/web/browser/debug/debug.css"],names:[],mappings:"AAAA;CACC,gCAAgC;CAChC,oBAAoB;AACrB;;AAEA,qBAAqB;AACrB;CACC,kBAAkB;AACnB;AACA;CACC,0CAA0C;CAC1C,sBAAsB;CACtB,yBAAyB;CACzB,YAAY;;CAEZ,YAAY;CACZ,kBAAkB;CAClB,6BAA6B;AAC9B;;AAEA,yDAAyD;AACzD;CACC,kBAAkB;AACnB;;AAEA;CACC,8BAA8B;CAC9B,sBAAsB;CACtB,eAAe;CACf,sBAAsB;CACtB,YAAY;;CAEZ,YAAY;CACZ,kBAAkB;CAClB,6BAA6B;CAC7B,MAAM;CACN,QAAQ;AACT;;AAEA,0EAA0E;AAC1E;CACC,cAAc;CACd,gBAAgB;AACjB;AACA;CACC,yCAAyC;AAC1C;;AAEA;CACC,uBAAuB;AACxB;;AAEA,2CAA2C;AAC3C;CACC,kBAAkB;AACnB;AACA;CACC,gDAAgD;CAChD,sBAAsB;CACtB,uBAAuB;CACvB,YAAY;;CAEZ,YAAY;CACZ,kBAAkB;CAClB,6BAA6B;CAC7B,MAAM;CACN,QAAQ;AACT;;AAEA,8CAA8C;AAC9C;CACC,kBAAkB;AACnB;AACA;CACC,gDAAgD;CAChD,sBAAsB;CACtB,qBAAqB;CACrB,YAAY;;CAEZ,YAAY;CACZ,kBAAkB;CAClB,6BAA6B;CAC7B,WAAW;AACZ;;AAEA;CACC,sBAAsB;AACvB;;AAEA,kEAAkE;AAClE;CACC,qBAAqB;AACtB;;AAEA,sEAAsE;;AAEtE,8FAA8F;AAC9F;CACC,iBAAiB;AAClB;AACA,qGAAqG;AACrG;CACC,WAAW;AACZ;AACA;CACC,wBAAwB;CACxB,sBAAsB;CACtB,eAAe;CACf,sBAAsB;CACtB,YAAY;;CAEZ,YAAY;CACZ,kBAAkB;CAClB,6BAA6B;CAC7B,MAAM;CACN,QAAQ;AACT;;AAEA,gIAAgI;AAChI;CACC,oBAAoB;AACrB;;AAEA,mEAAmE;AACnE;CACC,gBAAgB;AACjB",sourcesContent:[":root {\n\t/* z-index given to all labels */\n\t--debug-z-index: 100;\n}\n\n/* Layout: Annotate */\nmain[data-layout] {\n\tposition: relative;\n}\nmain[data-layout]::before {\n\tcontent: 'page layout: ' attr(data-layout);\n\tfont-family: monospace;\n\tbackground-color: hotpink;\n\tcolor: white;\n\n\tpadding: 5px;\n\tposition: absolute;\n\tz-index: var(--debug-z-index);\n}\n\n/* Islands: Outline child elements & label (top, right) */\ngu-island {\n\tposition: relative;\n}\n\ngu-island::before {\n\tcontent: 'island: ' attr(name);\n\tfont-family: monospace;\n\tfont-size: 13px;\n\tbackground-color: blue;\n\tcolor: white;\n\n\tpadding: 5px;\n\tposition: absolute;\n\tz-index: var(--debug-z-index);\n\ttop: 0;\n\tright: 0;\n}\n\n/* Islands can be empty, we will force their height & label them as such */\ngu-island:empty {\n\tdisplay: block;\n\tmin-height: 23px;\n}\ngu-island:empty::before {\n\tcontent: 'island: ' attr(name) ' (empty)';\n}\n\ngu-island > * {\n\toutline: 4px blue solid;\n}\n\n/* Fronts Containers - label (top, right) */\nsection[data-container-name] {\n\tposition: relative;\n}\nsection[data-container-name]::before {\n\tcontent: 'container: ' attr(data-container-name);\n\tfont-family: monospace;\n\tbackground-color: green;\n\tcolor: white;\n\n\tpadding: 5px;\n\tposition: absolute;\n\tz-index: var(--debug-z-index);\n\ttop: 0;\n\tright: 0;\n}\n\n/* Elements - outline & label (bottom, left) */\nfigure[data-spacefinder-type] {\n\tposition: relative;\n}\nfigure[data-spacefinder-type]::after {\n\tcontent: 'element: ' attr(data-spacefinder-type);\n\tfont-family: monospace;\n\tbackground-color: red;\n\tcolor: white;\n\n\tpadding: 5px;\n\tposition: absolute;\n\tz-index: var(--debug-z-index);\n\tbottom: 0px;\n}\n\nfigure[data-spacefinder-type] {\n\toutline: 4px red solid;\n}\n\n/* Handle the case where an island is directly inside an element */\nfigure[data-spacefinder-type] > gu-island > * {\n\toutline-style: dashed;\n}\n\n/* Patches - overriding CSS as we please comes with consequences ... */\n\n/* Links relies on position: relative being set higher up, so we need to ignore this element */\ngu-island[name='Links'] {\n\tdisplay: contents;\n}\n/* Because we can't rely on position:relative for links, we need to move the labelling to the child */\ngu-island[name='Links']::before {\n\tcontent: '';\n}\ngu-island[name='Links'] > *::before {\n\tcontent: 'island: Links';\n\tfont-family: monospace;\n\tfont-size: 13px;\n\tbackground-color: blue;\n\tcolor: white;\n\n\tpadding: 5px;\n\tposition: absolute;\n\tz-index: var(--debug-z-index);\n\ttop: 0;\n\tright: 0;\n}\n\n/* For some reason ReaderRevenueLinks outline is always below its surrounding elements, use outline offset to counter-act this */\ngu-island[name='ReaderRevenueLinks'] > * {\n\toutline-offset: -4px;\n}\n\n/* Onwards upper leaves an empty div when no content is available */\ngu-island[name='OnwardsUpper'] > *:empty {\n\tmin-height: 23px;\n}\n"],sourceRoot:""}]);const s=A},3476:n=>{"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",o=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),o&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),o&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,o,a,i){"string"==typeof n&&(n=[[null,n,void 0]]);var A={};if(o)for(var s=0;s<this.length;s++){var r=this[s][0];null!=r&&(A[r]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);o&&A[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),t.push(d))}},t}},559:n=>{"use strict";n.exports=function(n){var t=n[1],e=n[3];if(!e)return t;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),i="/*# ".concat(a," */");return[t].concat([i]).join("\n")}return[t].join("\n")}},9757:(n,t,e)=>{var o=e(5660);o&&o.__esModule&&(o=o.default),n.exports="string"==typeof o?o:o.toString()}},t={};function e(o){var a=t[o];if(void 0!==a)return a.exports;var i=t[o]={id:o,exports:{}};return n[o](i,i.exports,e),i.exports}e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var o in t)e.o(t,o)&&!e.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:t[o]})},e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),e.r=n=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},(()=>{"use strict";var n=e(9757),t=e.n(n),o=document.createElement("style");o.innerHTML=t(),document.body.appendChild(o)})()})();
//# sourceMappingURL=debug.js.map