(()=>{var o,i,n,t={790:o=>{"use strict";o.exports=window.ReactJSXRuntime},5573:o=>{"use strict";o.exports=window.wp.primitives},6087:o=>{"use strict";o.exports=window.wp.element},6427:o=>{"use strict";o.exports=window.wp.components},6942:(o,i)=>{var n;!function(){"use strict";var t={}.hasOwnProperty;function e(){for(var o="",i=0;i<arguments.length;i++){var n=arguments[i];n&&(o=c(o,r(n)))}return o}function r(o){if("string"==typeof o||"number"==typeof o)return o;if("object"!=typeof o)return"";if(Array.isArray(o))return e.apply(null,o);if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]"))return o.toString();var i="";for(var n in o)t.call(o,n)&&o[n]&&(i=c(i,n));return i}function c(o,i){return i?o?o+" "+i:o+i:o}o.exports?(e.default=e,o.exports=e):void 0===(n=function(){return e}.apply(i,[]))||(o.exports=n)}()},7723:o=>{"use strict";o.exports=window.wp.i18n},9047:(o,i,n)=>{"use strict";const t=window.wp.blocks;var e=n(7723),r=n(6087),c=n(6942),a=n.n(c);const s=window.wp.blockEditor;var g=n(790);const x=(0,r.lazy)((()=>n.e(84).then(n.bind(n,84)))),l=JSON.parse('{"UU":"gutenkit/icon-box"}'),{iconBox:d}=window.gutenkit.editorIcon;(0,t.registerBlockType)(l.UU,{edit:function({attributes:o,setAttributes:i,clientId:n,advancedControl:t,isSelected:r}){const{GkitStyle:c,GkitIcon:l,GkitSuspense:d}=window.gutenkit.components,{useDeviceType:b,linkGenerator:B,useBlockStyles:k,useDeviceList:u}=window.gutenkit.helpers,h=u(),p=b(),v=o?.iconBoxShowGlobalLink&&!o?.iconBoxShowButton?"a":"div",m=o?.iconBoxShowGlobalLink&&!o?.iconBoxShowButton?B(o?.iconBoxGlobalLinkUrl):"",f=(0,s.useBlockProps)({className:a()({"gkit-icon-box":!0,"gkit-icon-box-equal-height":o?.enableEqualHeight,"gkit-icon-box-hover-background-animation":o?.iconBoxContainerHoverBackgroundAnimation,[`gkit-animation-${o?.iconBoxContainerHoverAnimation?.effect?.value}`]:o?.iconBoxContainerHoverAnimationSwitch})}),w=k(o,i,"blocksCSS",((o,i)=>{const{parseCSS:n,backgroundGenerator:t,getBoxShadowValue:e,getBoxValue:r,getBorderValue:c,getTypographyValue:a,getSliderValue:s,getColor:g}=window.gutenkit.helpers,x=o?.blockClass,l={},d={};"left"!==o?.iconBoxContainerHoverHoverDirection&&"right"!==o?.iconBoxContainerHoverHoverDirection||(l[o?.iconBoxContainerHoverHoverDirection]="-100%",l.top="0",d[o?.iconBoxContainerHoverHoverDirection]="0"),"top"!==o?.iconBoxContainerHoverHoverDirection&&"bottom"!==o?.iconBoxContainerHoverHoverDirection||(l[o?.iconBoxContainerHoverHoverDirection]="-100%",l.left="0",d[o?.iconBoxContainerHoverHoverDirection]="0");const b=i=>{let n={};return n=0!==o?.iconBoxBadgeTitle?.length?{...r(o?.[`iconBoxBadgePadding${i}`],"padding")}:"0px",n};return n([[{selector:`.${x}.gkit-icon-box-hover-background-animation::before`,background:t(o?.commonHoverBackground).background,...l},{selector:`.${x}.gkit-icon-box-hover-background-animation:hover:before`,...d},{selector:`.${x}.gkit-icon-box .gkit-icon-box-body .gkit-icon-box-title`,color:g(o?.iconBoxTitleColor)},{selector:`.${x}.gkit-icon-box:hover .gkit-icon-box-title`,color:g(o?.iconBoxTitleHoverColor)},{selector:`.${x}.gkit-icon-box .gkit-icon-box-description`,color:g(o?.iconBoxDescriptionColor)},{selector:`.${x}.gkit-icon-box:hover .gkit-icon-box-description`,color:g(o?.iconBoxDescriptionHoverColor)},{selector:`.${x}.gkit-icon-box .gkit-icon-box-watermark`,fill:g(o?.iconBoxWaterMarkIconColor)},{selector:`.${x}.gkit-icon-box .gkit-icon-box-header:is(.gkit-icon-box-header-icon)`,fill:g(o?.iconBoxIconColor),background:t(o?.iconBoxIconBackgroundColor).background,...c(o?.iconBoxIconBorder),"box-shadow":e(o?.iconBoxIconBoxShadow)},{selector:`.${x}.gkit-icon-box:hover .gkit-icon-box-header:is(.gkit-icon-box-header-icon)`,fill:g(o?.iconBoxIconHoverColor),background:t(o?.iconBoxIconHoverBackgroundColor).background,...c(o?.iconBoxIconHoverBorder),"box-shadow":e(o?.iconBoxIconHoverBoxShadow)},{selector:`.${x}.gkit-icon-box .gkit-icon-box-button-wrapper .gkit-icon-box-button`,color:g(o?.iconBoxBtnTextColor),fill:g(o?.iconBoxBtnTextColor),background:t(o?.iconBoxBtnBackground).background,...c(o?.iconBoxBtnBorder),"box-shadow":e(o?.iconBoxBtnBoxShadow)},{selector:`.${x}.gkit-icon-box:hover .gkit-icon-box-button-wrapper .gkit-icon-box-button`,color:g(o?.iconBoxBtnHoverColor),fill:g(o?.iconBoxBtnHoverColor),background:t(o?.iconBoxBtnHoverBackground).background,...c(o?.iconBoxBtnHoverBorder),"box-shadow":e(o?.iconBoxBtnHoverBoxShadow)},{selector:`.${x}.gkit-icon-box .gkit-icon-box-badge .gkit-icon-box-badge-text`,color:g(o?.iconBoxBadgeTextColor),background:t(o?.iconBoxBadgeBackground).background,"background-size":t(o?.iconBoxBadgeBackground).size,"box-shadow":e(o?.iconBoxBadgeBoxShadow),...c(o?.iconBoxBadgeBorder)},{selector:`.${x} .gkit-icon-box-button .gkit-btn-left-icon`,"margin-right":s(o?.iconBoxBtnIconSpacing)},{selector:`.${x} .gkit-icon-box-button .gkit-btn-right-icon`,"margin-left":s(o?.iconBoxBtnIconSpacing)}],i=>[{selector:`.${x}.gkit-icon-box`,"align-items":["row-reverse","row"].includes(o[`iconBoxHeaderIconPosition${i}`])?void 0:o[`iconBoxContentAlignment${i}`],"flex-direction":o[`iconBoxHeaderIconPosition${i}`]},{selector:`.${x} .gkit-icon-box-body`,"text-align":o?.[`iconBoxContentAlignment${i}`]},{selector:`.${x}.gkit-icon-box .gkit-icon-box-header`,"align-self":o[`iconBoxContentVerticalAlignment${i}`]},{selector:`.${x}.gkit-icon-box .gkit-icon-box-body .gkit-icon-box-title`,...r(o?.[`iconBoxTitleMargin${i}`],"margin"),...a(o?.iconBoxTitleTypography,i)},{selector:`.${x}.gkit-icon-box .gkit-icon-box-description`,...a(o?.iconBoxDescriptionTypography,i),...r(o?.[`iconBoxDescriptionMargin${i}`],"margin"),...r(o?.[`iconBoxDescriptionPadding${i}`],"padding")},{selector:`.${x}.gkit-icon-box .gkit-icon-box-watermark`,"font-size":s(o?.[`iconBoxWaterMarkIconSize${i}`])},{selector:`.${x}.gkit-icon-box .gkit-icon-box-header:is(.gkit-icon-box-header-icon)`,...r(o?.[`iconBoxIconBorderRadius${i}`],"border-radius"),...r(o?.[`iconBoxIconSpacing${i}`],"margin"),...r(o?.[`iconBoxIconPadding${i}`],"padding"),"font-size":s(o?.[`iconBoxIconSize${i}`]),rotate:s(o?.[`iconBoxIconRotate${i}`]),height:o?.useHeightWidthIcon&&s(o[`iconHeight${i}`]),width:o?.useHeightWidthIcon&&s(o[`iconWidth${i}`]),"line-height":o?.useHeightWidthIcon&&s(o[`iconLineHeight${i}`]),transform:`translateY(${s(o?.[`iconBoxIconVerticalAlign${i}`])})`},{selector:`.${x}.gkit-icon-box:hover .gkit-icon-box-header:is(.gkit-icon-box-header-icon)`,...r(o?.[`iconBoxIconHoverBorderRadius${i}`],"border-radius")},{selector:`.${x}.gkit-icon-box .gkit-icon-box-button-wrapper .gkit-icon-box-button`,...a(o?.iconBoxBtnTypography,i),...r(o?.[`iconBoxBtnPadding${i}`],"padding"),...r(o?.[`iconBoxBtnMargin${i}`],"margin"),...r(o?.[`iconBoxBtnBorderRadius${i}`],"border-radius")},{selector:`.${x}.gkit-icon-box .gkit-icon-box-button-wrapper .gkit-icon-box-button .gkit-btn-right-icon, .${x}.gkit-icon-box .gkit-icon-box-button-wrapper .gkit-icon-box-button .gkit-btn-left-icon`,"font-size":s(o?.[`iconBoxBtnIconSize${i}`])},{selector:`.${x}.gkit-icon-box:hover .gkit-icon-box-button-wrapper .gkit-icon-box-button`,...r(o?.[`iconBoxBtnHoverBorderRadius${i}`],"border-radius")},{selector:`.${x}.gkit-icon-box .gkit-icon-box-badge`,left:"left"===o?.gkitVerticalBadge?s(o?.[`gkitVerticalBadgePosition${i}`]):"",right:"right"===o?.gkitVerticalBadge?s(o?.[`gkitVerticalBadgePosition${i}`]):"",top:"top"===o?.gkitHorizontalBadge?s(o?.[`gkitHorizontalBadgePosition${i}`]):"",bottom:"bottom"===o?.gkitHorizontalBadge?s(o?.[`gkitHorizontalBadgePosition${i}`]):""},{selector:`.${x}.gkit-icon-box .gkit-icon-box-badge .gkit-icon-box-badge-text`,...a(o?.iconBoxBadgeTypography,i),...r(o?.[`iconBoxBadgePadding${i}`],"padding"),...r(o?.[`iconBoxBadgeBorderRadius${i}`],"border-radius"),...b(i)},{selector:`.${x} .gkit-icon-box-button .gkit-btn-right-icon svg, .${x} .gkit-icon-box-button .gkit-btn-left-icon svg`,transform:`translateY(${s(o?.[`iconBoxBtnIconVerticalAlign${i}`])})`}]],i)})(o,h));return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(c,{blocksCSS:w}),r&&(0,g.jsx)(d,{children:(0,g.jsx)(x,{attributes:o,setAttributes:i,device:p,advancedControl:t})}),(0,g.jsxs)(v,{...m,...f,children:[o?.iconBoxShowHeaderIcon&&(0,g.jsx)(l,{icon:o?.iconBoxHeaderIcon,className:"gkit-icon-box-header gkit-icon-box-header-icon"}),(0,g.jsxs)("div",{className:"gkit-icon-box-body",children:[(0,g.jsx)(s.RichText,{identifier:"title",tagName:o?.iconBoxTitleTag,value:o?.iconBoxTitleText,onChange:o=>{i({iconBoxTitleText:o})},placeholder:(0,e.__)("Enter your title here...","gutenkit-blocks-addon"),className:"gkit-icon-box-title"}),(0,g.jsx)(s.RichText,{identifier:"content",tagName:"p",value:o?.iconBoxDescriptionText,onChange:o=>{i({iconBoxDescriptionText:o})},placeholder:(0,e.__)("Enter your description here...","gutenkit-blocks-addon"),className:"gkit-icon-box-description"}),o?.iconBoxShowButton&&(0,g.jsx)("div",{className:a()({"gkit-icon-box-button-wrapper":o?.iconBoxShowButton,"gkit-icon-box-button-hover":o?.iconBoxEnableHoverBtn}),children:(0,g.jsxs)("a",{href:"#",className:"gkit-icon-box-button gkit-btn",children:[o?.iconBoxShowBtnIcon&&"before"===o?.iconBoxBtnIconPosition&&(0,g.jsx)(l,{icon:o?.iconBoxBtnIcon,className:"gkit-btn-left-icon",tagName:"span"}),(0,g.jsx)(s.RichText,{identifier:"button",tagName:o?.iconBoxBtnTag,value:o?.iconBoxBtnText,onChange:o=>{i({iconBoxBtnText:o})},placeholder:(0,e.__)("Enter your button text here...","gutenkit-blocks-addon"),className:"gkit-icon-box-button-text"}),o?.iconBoxShowBtnIcon&&"after"===o?.iconBoxBtnIconPosition&&(0,g.jsx)(l,{icon:o?.iconBoxBtnIcon,className:"gkit-btn-right-icon",tagName:"span"})]})})]}),o?.iconBoxEnableWaterMark&&o?.iconBoxWaterMarkIcon&&(0,g.jsx)(l,{icon:o?.iconBoxWaterMarkIcon,className:"gkit-icon-box-watermark"}),o?.iconBoxShowBadge&&(0,g.jsx)("div",{className:"gkit-icon-box-badge",children:(0,g.jsx)(s.RichText,{identifier:"badge",tagName:"span",value:o?.iconBoxBadgeTitle,onChange:o=>{i({iconBoxBadgeTitle:o})},placeholder:(0,e.__)("Enter Text","gutenkit-blocks-addon"),className:"gkit-icon-box-badge-text"})})]})]})},icon:{src:d},save:function({attributes:o}){const{GkitIcon:i}=window.gutenkit.components,{linkGenerator:n}=window.gutenkit.helpers,t=o?.iconBoxShowGlobalLink&&!o?.iconBoxShowButton?"a":"div",e=n(o?.iconBoxBtnUrl),r=o?.iconBoxShowGlobalLink&&!o?.iconBoxShowButton?n(o?.iconBoxGlobalLinkUrl):"",c=s.useBlockProps.save({className:a()({"gkit-icon-box":!0,"gkit-icon-box-equal-height":o?.enableEqualHeight,"gkit-icon-box-hover-background-animation":o?.iconBoxContainerHoverBackgroundAnimation,[`gkit-animation-${o?.iconBoxContainerHoverAnimation?.effect?.value}`]:o?.iconBoxContainerHoverAnimationSwitch})});return(0,g.jsxs)(t,{...r,...c,children:[o?.iconBoxShowHeaderIcon&&(0,g.jsx)(i,{icon:o?.iconBoxHeaderIcon,className:"gkit-icon-box-header gkit-icon-box-header-icon"}),(0,g.jsxs)("div",{className:"gkit-icon-box-body",children:[o?.iconBoxTitleText&&(0,g.jsx)(s.RichText.Content,{identifier:"title",tagName:o?.iconBoxTitleTag,value:o?.iconBoxTitleText,className:"gkit-icon-box-title"}),o?.iconBoxDescriptionText&&(0,g.jsx)(s.RichText.Content,{identifier:"content",tagName:"p",value:o?.iconBoxDescriptionText,className:"gkit-icon-box-description"}),o?.iconBoxShowButton&&(0,g.jsx)("div",{className:a()({"gkit-icon-box-button-wrapper":o?.iconBoxShowButton,"gkit-icon-box-button-hover":o?.iconBoxEnableHoverBtn}),children:(0,g.jsxs)("a",{...e,className:"gkit-icon-box-button gkit-btn",children:[o?.iconBoxShowBtnIcon&&"before"===o?.iconBoxBtnIconPosition&&(0,g.jsx)(i,{icon:o?.iconBoxBtnIcon,className:"gkit-btn-left-icon",tagName:"span"}),(0,g.jsx)("span",{className:"gkit-icon-box-button-text",children:o?.iconBoxBtnText}),o?.iconBoxShowBtnIcon&&"after"===o?.iconBoxBtnIconPosition&&(0,g.jsx)(i,{icon:o?.iconBoxBtnIcon,className:"gkit-btn-right-icon",tagName:"span"})]})})]}),o?.iconBoxEnableWaterMark&&o?.iconBoxWaterMarkIcon&&(0,g.jsx)(i,{icon:o?.iconBoxWaterMarkIcon,className:"gkit-icon-box-watermark"}),o?.iconBoxShowBadge&&(0,g.jsx)("div",{className:"gkit-icon-box-badge",children:(0,g.jsx)("span",{className:"gkit-icon-box-badge-text",children:o?.iconBoxBadgeTitle})})]})}})}},e={};function r(o){var i=e[o];if(void 0!==i)return i.exports;var n=e[o]={exports:{}};return t[o](n,n.exports,r),n.exports}r.m=t,o=[],r.O=(i,n,t,e)=>{if(!n){var c=1/0;for(x=0;x<o.length;x++){for(var[n,t,e]=o[x],a=!0,s=0;s<n.length;s++)(!1&e||c>=e)&&Object.keys(r.O).every((o=>r.O[o](n[s])))?n.splice(s--,1):(a=!1,e<c&&(c=e));if(a){o.splice(x--,1);var g=t();void 0!==g&&(i=g)}}return i}e=e||0;for(var x=o.length;x>0&&o[x-1][2]>e;x--)o[x]=o[x-1];o[x]=[n,t,e]},r.n=o=>{var i=o&&o.__esModule?()=>o.default:()=>o;return r.d(i,{a:i}),i},r.d=(o,i)=>{for(var n in i)r.o(i,n)&&!r.o(o,n)&&Object.defineProperty(o,n,{enumerable:!0,get:i[n]})},r.f={},r.e=o=>Promise.all(Object.keys(r.f).reduce(((i,n)=>(r.f[n](o,i),i)),[])),r.u=o=>o+".js",r.miniCssF=o=>{},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(o){if("object"==typeof window)return window}}(),r.o=(o,i)=>Object.prototype.hasOwnProperty.call(o,i),i={},n="gutenkit-blocks-addon:",r.l=(o,t,e,c)=>{if(i[o])i[o].push(t);else{var a,s;if(void 0!==e)for(var g=document.getElementsByTagName("script"),x=0;x<g.length;x++){var l=g[x];if(l.getAttribute("src")==o||l.getAttribute("data-webpack")==n+e){a=l;break}}a||(s=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,r.nc&&a.setAttribute("nonce",r.nc),a.setAttribute("data-webpack",n+e),a.src=o),i[o]=[t];var d=(n,t)=>{a.onerror=a.onload=null,clearTimeout(b);var e=i[o];if(delete i[o],a.parentNode&&a.parentNode.removeChild(a),e&&e.forEach((o=>o(t))),n)return n(t)},b=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),s&&document.head.appendChild(a)}},r.r=o=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},(()=>{var o;r.g.importScripts&&(o=r.g.location+"");var i=r.g.document;if(!o&&i&&(i.currentScript&&"SCRIPT"===i.currentScript.tagName.toUpperCase()&&(o=i.currentScript.src),!o)){var n=i.getElementsByTagName("script");if(n.length)for(var t=n.length-1;t>-1&&(!o||!/^http(s?):/.test(o));)o=n[t--].src}if(!o)throw new Error("Automatic publicPath is not supported in this browser");o=o.replace(/^blob:/,"").replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=o+"../../"})(),(()=>{var o={7482:0,6798:0};r.f.j=(i,n)=>{var t=r.o(o,i)?o[i]:void 0;if(0!==t)if(t)n.push(t[2]);else if(6798!=i){var e=new Promise(((n,e)=>t=o[i]=[n,e]));n.push(t[2]=e);var c=r.p+r.u(i),a=new Error;r.l(c,(n=>{if(r.o(o,i)&&(0!==(t=o[i])&&(o[i]=void 0),t)){var e=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src;a.message="Loading chunk "+i+" failed.\n("+e+": "+c+")",a.name="ChunkLoadError",a.type=e,a.request=c,t[1](a)}}),"chunk-"+i,i)}else o[i]=0},r.O.j=i=>0===o[i];var i=(i,n)=>{var t,e,[c,a,s]=n,g=0;if(c.some((i=>0!==o[i]))){for(t in a)r.o(a,t)&&(r.m[t]=a[t]);if(s)var x=s(r)}for(i&&i(n);g<c.length;g++)e=c[g],r.o(o,e)&&o[e]&&o[e][0](),o[e]=0;return r.O(x)},n=globalThis.webpackChunkgutenkit_blocks_addon=globalThis.webpackChunkgutenkit_blocks_addon||[];n.forEach(i.bind(null,0)),n.push=i.bind(null,n.push.bind(n))})();var c=r.O(void 0,[6798],(()=>r(9047)));c=r.O(c)})();