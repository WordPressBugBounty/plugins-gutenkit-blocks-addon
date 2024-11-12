(()=>{var t,e,o,n={7818:(t,e,o)=>{"use strict";const n=window.wp.blocks;var i=o(7723),r=o(6087),u=o(6942),a=o.n(u);const l=window.wp.blockEditor;var s=o(790);const d=function({attributes:t,setAttributes:e,isEdit:o}){const{GkitIcon:n}=window.gutenkit.components,{linkGenerator:r}=window.gutenkit.helpers;return(0,s.jsx)("div",{className:"gkit-dual-btn-container",children:(0,s.jsxs)("div",{className:"gkit-dual-btn-wrapper",children:[(0,s.jsxs)("a",{className:"gkit-dual-btn gkit-dual-btn-first",...r(t?.gkitButtonOneLink),children:[t?.gkitButtonOneIconsShow&&t?.gkitButtonOneIcons&&"before"===t?.gkitDoubleButtonOneIconPosition&&(0,s.jsx)(n,{className:"gkit-button-icon-left",icon:t?.gkitButtonOneIcons}),o?(0,s.jsx)(l.RichText,{tagName:"span",className:"gkit-dual-btn-text",value:t?.gkitButtonOneText,onChange:t=>e({gkitButtonOneText:t}),placeholder:(0,i.__)("Enter text","gutenkit-blocks-addon")}):t?.gkitButtonOneText&&(0,s.jsx)(l.RichText.Content,{className:"gkit-dual-btn-text",tagName:"span",value:t?.gkitButtonOneText}),t?.gkitButtonOneIconsShow&&t?.gkitButtonOneIcons&&"after"===t?.gkitDoubleButtonOneIconPosition&&(0,s.jsx)(n,{className:"gkit-button-icon-right",icon:t?.gkitButtonOneIcons})]}),t?.gkitShowButtonMiddleText&&(o?(0,s.jsx)(l.RichText,{tagName:"span",className:"gkit-dual-btn-middle-text",value:t?.gkitButtonMiddleText,onChange:t=>e({gkitButtonMiddleText:t}),placeholder:(0,i.__)("Enter text","gutenkit-blocks-addon")}):t?.gkitButtonMiddleText&&(0,s.jsx)(l.RichText.Content,{className:"gkit-dual-btn-middle-text",tagName:"span",value:t?.gkitButtonMiddleText})),(0,s.jsxs)("a",{className:"gkit-dual-btn gkit-dual-btn-second",...r(t?.gkitButtonTwoLink),children:[t?.gkitButtonTwoIconsShow&&t?.gkitButtonTwoIcons&&"before"===t?.gkitDoubleButtonTwoIconPosition&&(0,s.jsx)(n,{className:"gkit-button-icon-left",icon:t?.gkitButtonTwoIcons}),o?(0,s.jsx)(l.RichText,{tagName:"span",className:"gkit-dual-btn-text",value:t?.gkitButtonTwoText,onChange:t=>e({gkitButtonTwoText:t}),placeholder:(0,i.__)("Enter text","gutenkit-blocks-addon")}):t?.gkitButtonTwoText&&(0,s.jsx)(l.RichText.Content,{className:"gkit-dual-btn-text",tagName:"span",value:t?.gkitButtonTwoText}),t?.gkitButtonTwoIconsShow&&t?.gkitButtonTwoIcons&&"after"===t?.gkitDoubleButtonTwoIconPosition&&(0,s.jsx)(n,{className:"gkit-button-icon-right",icon:t?.gkitButtonTwoIcons})]})]})})},g=(0,r.lazy)((()=>o.e(7156).then(o.bind(o,7156)))),c=JSON.parse('{"UU":"gutenkit/dual-button"}'),{dualButton:k}=window.gutenkit.editorIcon;(0,n.registerBlockType)(c.UU,{edit:function({attributes:t,setAttributes:e,clientId:o,advancedControl:n,isSelected:i}){const{GkitStyle:r,GkitSuspense:u}=window.gutenkit.components,{useDeviceType:c,useBlockStyles:k,useDeviceList:b}=window.gutenkit.helpers,p=b(),B=c(),w=(0,l.useBlockProps)({className:a()({"gkit-dual-button-middle-text":t?.gkitShowButtonMiddleText})}),h=k(t,e,"blocksCSS",((t,e)=>{const{parseCSS:o,backgroundGenerator:n,getBoxShadowValue:i,getBoxValue:r,getBorderValue:u,getTypographyValue:a,getSliderValue:l,getColor:s}=window.gutenkit.helpers,d=t?.blockClass;return o([[{selector:`.${d} .gkit-dual-btn-wrapper .gkit-dual-btn-first`,color:s(t?.gkitDoubleButtonOneColor),fill:s(t?.gkitDoubleButtonOneColor),"box-shadow":i(t?.gkitDoubleButtonOneBoxShadow),...u(t?.gkitDoubleButtonOneBorder)},{selector:`.${d} .gkit-dual-btn-wrapper .gkit-dual-btn-first:hover`,color:s(t?.gkitDoubleButtonOneHoverColor),fill:s(t?.gkitDoubleButtonOneHoverColor),"border-color":s(t?.gkitDoubleButtonOneHoverBorderColor),"box-shadow":i(t?.gkitDoubleButtonOneHoverBoxShadow)},{selector:`.${d} .gkit-dual-btn-wrapper .gkit-dual-btn-second`,color:s(t?.gkitDoubleButtonTwoColor),fill:s(t?.gkitDoubleButtonTwoColor),"box-shadow":i(t?.gkitDoubleButtonTwoBoxShadow),...u(t?.gkitDoubleButtonTwoBorder)},{selector:`.${d} .gkit-dual-btn-wrapper .gkit-dual-btn-second:hover`,color:s(t?.gkitDoubleButtonTwoHoverColor),fill:s(t?.gkitDoubleButtonTwoHoverColor),"border-color":s(t?.gkitDoubleButtonTwoHoverBorderColor),"box-shadow":i(t?.gkitDoubleButtonTwoHoverBoxShadow)},{selector:`.${d} .gkit-dual-btn-wrapper .gkit-dual-btn-middle-text`,color:s(t?.gkitDoubleButtonMiddletextColor),...u(t?.gkitDoubleButtonMiddletextBorder),"box-shadow":i(t?.gkitDoubleButtonMiddletextBoxShadow)}],e=>[{selector:`.${d} .gkit-dual-btn-container`,"justify-content":t?.[`gkitDoubleButtonAlign${e}`]},{selector:`.${d} .gkit-dual-btn-wrapper`,width:l(t?.[`gkitDualButtonWidth${e}`]),gap:l(t?.[`gkitDualButtonGap${e}`])},{selector:`.${d} .gkit-dual-btn-wrapper .gkit-dual-btn-first`,gap:l(t?.[`gkitDoubleButtonOneIconSpecing${e}`]),...a(t?.gkitDoubleButtonOneTypography,e),...r(t?.[`gkitDoubleButtonOneBorderRadius${e}`],"border-radius"),...r(t?.[`gkitDoubleButtonOnePadding${e}`],"padding"),...r(t?.[`gkitDoubleButtonOneMargin${e}`],"margin"),"justify-content":t?.[`gkitDoubleButtonOneAlign${e}`],background:n(t?.gkitDoubleButtonOneBackground,e).background,"background-size":n(t?.gkitDoubleButtonOneBackground,e).size},{selector:`.${d} .gkit-dual-btn-wrapper .gkit-dual-btn-first:hover`,...r(t?.[`gkitDoubleButtonOneHoverBorderRadius${e}`],"border-radius"),background:n(t?.gkitDoubleButtonOneHoverBackground,e).background,"background-size":n(t?.gkitDoubleButtonOneHoverBackground,e).size},{selector:`.${d} .gkit-dual-btn-wrapper .gkit-dual-btn-second`,gap:l(t?.[`gkitDoubleButtonTwoIconSpecing${e}`]),...a(t?.gkitDoubleButtonTwoTypography,e),...r(t?.[`gkitDoubleButtonTwoBorderRadius${e}`],"border-radius"),...r(t?.[`gkitDoubleButtonTwoPadding${e}`],"padding"),...r(t?.[`gkitDoubleButtonTwoMargin${e}`],"margin"),"justify-content":t?.[`gkitDoubleButtonTwoAlign${e}`],background:n(t?.gkitDoubleButtonTwoBackground,e).background,"background-size":n(t?.gkitDoubleButtonTwoBackground,e).size},{selector:`.${d} .gkit-dual-btn-wrapper .gkit-dual-btn-second:hover`,...r(t?.[`gkitDoubleButtonTwoHoverBorderRadius${e}`],"border-radius"),background:n(t?.gkitDoubleButtonTwoHoverBackground,e).background,"background-size":n(t?.gkitDoubleButtonTwoHoverBackground,e).size},{selector:`.${d} .gkit-dual-btn-wrapper .gkit-dual-btn-middle-text`,...a(t?.gkitDoubleButtonMiddletextTypography,e),...r(t?.[`gkitDoubleButtonMiddletextBorderRadius${e}`],"border-radius"),width:l(t?.[`gkitDoubleButtonMiddletextWidth${e}`]),height:l(t?.[`gkitDoubleButtonMiddletextHeight${e}`]),background:n(t?.gkitDoubleButtonMiddletextBackground,e).background,"background-size":n(t?.gkitDoubleButtonMiddletextBackground,e).size},{selector:`.${d} .gkit-dual-btn-wrapper .gkit-dual-btn :is(.gkit-button-icon-left, .gkit-button-icon-right)`,"font-size":l(t?.[`iconFontSize${e}`]),transform:`translateY(${l(t?.[`verticalAlignIcon${e}`])})`}]],e)})(t,p));return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r,{blocksCSS:h}),i&&(0,s.jsx)(u,{children:(0,s.jsx)(g,{attributes:t,setAttributes:e,device:B,advancedControl:n})}),(0,s.jsx)("div",{...w,children:(0,s.jsx)(d,{attributes:t,setAttributes:e,isEdit:!0})})]})},icon:{src:k},save:function({attributes:t}){const e=l.useBlockProps.save({className:a()({"gkit-dual-button-middle-text":t?.gkitShowButtonMiddleText})});return(0,s.jsx)("div",{...e,children:(0,s.jsx)(d,{attributes:t,isEdit:!1})})}})},790:t=>{"use strict";t.exports=window.ReactJSXRuntime},6427:t=>{"use strict";t.exports=window.wp.components},6087:t=>{"use strict";t.exports=window.wp.element},7723:t=>{"use strict";t.exports=window.wp.i18n},5573:t=>{"use strict";t.exports=window.wp.primitives},6942:(t,e)=>{var o;!function(){"use strict";var n={}.hasOwnProperty;function i(){for(var t="",e=0;e<arguments.length;e++){var o=arguments[e];o&&(t=u(t,r(o)))}return t}function r(t){if("string"==typeof t||"number"==typeof t)return t;if("object"!=typeof t)return"";if(Array.isArray(t))return i.apply(null,t);if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]"))return t.toString();var e="";for(var o in t)n.call(t,o)&&t[o]&&(e=u(e,o));return e}function u(t,e){return e?t?t+" "+e:t+e:t}t.exports?(i.default=i,t.exports=i):void 0===(o=function(){return i}.apply(e,[]))||(t.exports=o)}()}},i={};function r(t){var e=i[t];if(void 0!==e)return e.exports;var o=i[t]={exports:{}};return n[t](o,o.exports,r),o.exports}r.m=n,t=[],r.O=(e,o,n,i)=>{if(!o){var u=1/0;for(d=0;d<t.length;d++){o=t[d][0],n=t[d][1],i=t[d][2];for(var a=!0,l=0;l<o.length;l++)(!1&i||u>=i)&&Object.keys(r.O).every((t=>r.O[t](o[l])))?o.splice(l--,1):(a=!1,i<u&&(u=i));if(a){t.splice(d--,1);var s=n();void 0!==s&&(e=s)}}return e}i=i||0;for(var d=t.length;d>0&&t[d-1][2]>i;d--)t[d]=t[d-1];t[d]=[o,n,i]},r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var o in e)r.o(e,o)&&!r.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},r.f={},r.e=t=>Promise.all(Object.keys(r.f).reduce(((e,o)=>(r.f[o](t,e),e)),[])),r.u=t=>t+".js",r.miniCssF=t=>{},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),e={},o="gutenkit-blocks-addon:",r.l=(t,n,i,u)=>{if(e[t])e[t].push(n);else{var a,l;if(void 0!==i)for(var s=document.getElementsByTagName("script"),d=0;d<s.length;d++){var g=s[d];if(g.getAttribute("src")==t||g.getAttribute("data-webpack")==o+i){a=g;break}}a||(l=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,r.nc&&a.setAttribute("nonce",r.nc),a.setAttribute("data-webpack",o+i),a.src=t),e[t]=[n];var c=(o,n)=>{a.onerror=a.onload=null,clearTimeout(k);var i=e[t];if(delete e[t],a.parentNode&&a.parentNode.removeChild(a),i&&i.forEach((t=>t(n))),o)return o(n)},k=setTimeout(c.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=c.bind(null,a.onerror),a.onload=c.bind(null,a.onload),l&&document.head.appendChild(a)}},r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{var t;r.g.importScripts&&(t=r.g.location+"");var e=r.g.document;if(!t&&e&&(e.currentScript&&"SCRIPT"===e.currentScript.tagName.toUpperCase()&&(t=e.currentScript.src),!t)){var o=e.getElementsByTagName("script");if(o.length)for(var n=o.length-1;n>-1&&(!t||!/^http(s?):/.test(t));)t=o[n--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=t+"../../"})(),(()=>{var t={3298:0,9702:0};r.f.j=(e,o)=>{var n=r.o(t,e)?t[e]:void 0;if(0!==n)if(n)o.push(n[2]);else if(9702!=e){var i=new Promise(((o,i)=>n=t[e]=[o,i]));o.push(n[2]=i);var u=r.p+r.u(e),a=new Error;r.l(u,(o=>{if(r.o(t,e)&&(0!==(n=t[e])&&(t[e]=void 0),n)){var i=o&&("load"===o.type?"missing":o.type),u=o&&o.target&&o.target.src;a.message="Loading chunk "+e+" failed.\n("+i+": "+u+")",a.name="ChunkLoadError",a.type=i,a.request=u,n[1](a)}}),"chunk-"+e,e)}else t[e]=0},r.O.j=e=>0===t[e];var e=(e,o)=>{var n,i,u=o[0],a=o[1],l=o[2],s=0;if(u.some((e=>0!==t[e]))){for(n in a)r.o(a,n)&&(r.m[n]=a[n]);if(l)var d=l(r)}for(e&&e(o);s<u.length;s++)i=u[s],r.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return r.O(d)},o=self.webpackChunkgutenkit_blocks_addon=self.webpackChunkgutenkit_blocks_addon||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))})();var u=r.O(void 0,[9702],(()=>r(7818)));u=r.O(u)})();