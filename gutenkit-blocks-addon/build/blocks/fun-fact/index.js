(()=>{var e,t,r,n={790:e=>{"use strict";e.exports=window.ReactJSXRuntime},2911:(e,t,r)=>{"use strict";const n=window.wp.blocks,o=window.wp.blockEditor;var i=r(6087),a=r(6942),c=r.n(a),s=r(7723),l=r(790);const u=({attributes:e,setAttributes:t,isEdit:r,animationData:n})=>{const{GkitIcon:i}=window.gutenkit.components;return(0,l.jsxs)(l.Fragment,{children:[e.enableVerticalBorder&&(0,l.jsx)("div",{className:"vertical-bar"}),(0,l.jsxs)("div",{id:`gkit-funfact-${e?.blockID}`,className:"gkit-funfact-inner","data-animation":JSON.stringify(n),children:[e?.addIcon&&(0,l.jsx)("div",{className:"funfact-icon",children:(0,l.jsx)(i,{icon:e.icon,className:"icon-box",tagName:"span"})}),(0,l.jsxs)("div",{className:"funfact-content",children:[(0,l.jsxs)("div",{className:"number-percentage-wraper",children:[(0,l.jsx)("span",{className:"number-percentage",children:"0"}),r&&e.enablePrefix&&(0,l.jsx)(o.RichText,{identifier:"prefix",tagName:"span",value:e?.prefix,onChange:e=>{t({prefix:e})},placeholder:(0,s.__)("$","gutenkit-blocks-addon"),className:"prefix"}),!r&&e.enablePrefix&&(0,l.jsx)(o.RichText.Content,{identifier:"prefix",tagName:"span",value:e?.prefix,className:"prefix"}),r&&e.enableSuffix&&(0,l.jsx)(o.RichText,{identifier:"suffix",tagName:"span",value:e?.suffix,onChange:e=>{t({suffix:e})},placeholder:(0,s.__)("M","gutenkit-blocks-addon"),className:"suffix"}),!r&&e.enableSuffix&&(0,l.jsx)(o.RichText.Content,{identifier:"suffix",tagName:"span",value:e?.suffix,className:"suffix"}),r&&e.enableSuper&&(0,l.jsx)(o.RichText,{identifier:"super",tagName:"span",value:e?.super,onChange:e=>{t({super:e})},placeholder:(0,s.__)("+","gutenkit-blocks-addon"),className:"super"}),!r&&e.enableSuper&&(0,l.jsx)(o.RichText.Content,{identifier:"super",tagName:"span",value:e?.super,className:"super"})]}),r&&e.enableHeading&&(0,l.jsx)(o.RichText,{identifier:"heading",tagName:e?.headerTag,value:e?.heading,onChange:e=>{t({heading:e})},placeholder:(0,s.__)("This is the heading","gutenkit-blocks-addon"),className:"funfact-title"}),!r&&e.enableHeading&&(0,l.jsx)(o.RichText.Content,{identifier:"heading",tagName:e?.headerTag,value:e?.heading,className:"funfact-title"})]})]})]})},d=(e,t)=>{const r=e.target,n=JSON.parse(r.getAttribute("data-animation")),o=r.querySelector(".number-percentage");n&&(()=>{const{endTime:e,duration:i,style:a}=n;if("static"===a){if(t){const l=document.createElement("span");l.classList.add("number-percentage"),o.replaceWith(l)}function c(e){const t=e.toString().split("."),r=t[0].replace(/\B(?=(\d{3})+(?!\d))/g,",");return t.length>1?r+"."+t[1]:r}function s(e,t,n,o){let i=t;const a=(n-t)/(o/16),s=r.querySelector(e);if(!s)return void console.error("Element not found:",e);const l=()=>{i+=a,s.innerHTML=i>999?c(Math.round(i)):Math.round(i),a>0&&i<n||a<0&&i>n?requestAnimationFrame(l):s.innerHTML=n>999?c(n):n};l()}s(".number-percentage",0,e,i)}else new Odometer({el:o,value:0}).update(e)})()},f=(0,i.lazy)((()=>r.e(7621).then(r.bind(r,7621)))),p=JSON.parse('{"UU":"gutenkit/fun-fact"}'),{funFact:g}=window.gutenkit.editorIcon;(0,n.registerBlockType)(p.UU,{edit:function({attributes:e,setAttributes:t,advancedControl:r,isSelected:n}){const{GkitStyle:a,GkitSuspense:s}=window.gutenkit.components,{useDeviceType:p,onScrollAnimateIframe:g,onScrollAnimate:m,useBlockStyles:b,useDeviceList:h}=window.gutenkit.helpers,v=h(),x=p(),[k,y]=(0,i.useState)({endTime:e.number?.size,duration:e?.duration?.size,style:e?.style}),w=(0,o.useBlockProps)({className:c()({"style-border-bottom":e.enableHoverBorder},{hover_from_left:e.enableHoverBorder&&"left"===e.hoverBorderDirection},"gkit-funfact")});(0,i.useEffect)((()=>{let t;var r,n,o;return r=e.number,n=e.duration?.size,o=e.style,clearTimeout(t),t=setTimeout((()=>{y({endTime:r,duration:n,style:o}),document.getElementsByTagName("iframe").length>0?g(".gkit-funfact-inner",(e=>{d(e,!0)})):m(".gkit-funfact-inner",(e=>{d(e,!0)}))}),300),()=>{clearTimeout(t)}}),[e.number,e.duration?.size,e.style,x]);const S=b(e,t,"blocksCSS",((e,t)=>{const r=window.gutenkit.helpers,{parseCSS:n,backgroundGenerator:o,getBoxShadowValue:i,getBoxValue:a,getBorderValue:c,getTypographyValue:s,getSliderValue:l,getColor:u}=r,d=e.blockClass;return n([[{selector:`.${d} .gkit-funfact-inner`,"flex-direction":e?.iconDirection},{selector:`.${d} .funfact-icon`,fill:u(e?.iconColor)},{selector:`.${d}:hover .funfact-icon .icon-box`,background:o(e?.iconHoverBackground).background,"border-color":e?.iconHoverBorderColor},{selector:`.${d}:hover .funfact-icon`,fill:u(e?.iconHoverColor)},{selector:`.${d} .funfact-icon .icon-box`,background:o(e?.iconBackground).background,...c(e?.iconBorder),"box-shadow":i(e.iconBoxShadow)},{selector:`.${d}.gkit-funfact .funfact-content .number-percentage-wraper`,color:u(e?.numberColor)},{selector:`.${d} .funfact-title`,color:u(e?.titleColor)},{selector:`.${d} .super`,color:u(e?.superColor)},{selector:`.${d}.style-border-bottom.gkit-funfact::before`,"background-color":u(e?.hoverBorderColor),height:l(e?.hoverBorderHeight)},{selector:`.${d}.gkit-funfact:has(.vertical-bar)`,"align-items":e?.verticalBorderAlignment,"flex-direction":e?.verticalBorderDirection},{selector:`.${d} .vertical-bar`,"background-color":u(e?.verticalBorderColor),height:l(e?.verticalBorderHeight),width:l(e?.verticalBorderWidth)}],t=>[{selector:`.${d}.gkit-funfact`,"justify-content":e?.[`contentAlign${t}`],"text-align":e?.[`contentAlign${t}`]},{selector:`.${d}.gkit-funfact .funfact-content .number-percentage-wraper`,"justify-content":e?.[`contentAlign${t}`]},{selector:`.${d}:hover .funfact-icon svg`,...a(e?.[`iconHoverBorderRadius${t}`],"border-radius")},{selector:`.${d} .funfact-icon .icon-box svg`,"font-size":l(e?.[`iconWidth${t}`]),transform:`rotate(${l(e?.[`iconRotate${t}`])})`},{selector:`.${d} .funfact-icon .icon-box`,...a(e?.[`iconBorderRadius${t}`],"border-radius"),padding:l(e?.[`iconPadding${t}`]),...a(e?.[`iconMargin${t}`],"margin")},{selector:`.${d} .funfact-content`,...a(e?.[`contentMargin${t}`],"margin")},{selector:`.${d}.gkit-funfact .funfact-content .number-percentage-wraper`,...s(e?.numberTypography,t),"margin-bottom":l(e?.[`numberBottomSpace${t}`])},{selector:`.${d} .number-percentage-wraper .number-percentage`,"margin-right":l(e?.[`numberRightSpace${t}`])},{selector:`.${d} .funfact-title`,...s(e?.titleTypography,t),...a(e?.[`titlePadding${t}`],"padding")},{selector:`.${d} .super`,...s(e?.superTypography,t),top:l(e?.[`superTopPostion${t}`]),"margin-left":l(e?.[`superHorizontalPostion${t}`])}]],t)})(e,v));return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a,{blocksCSS:S}),n&&(0,l.jsx)(s,{children:(0,l.jsx)(f,{attributes:e,setAttributes:t,device:x,advancedControl:r})}),(0,l.jsx)("div",{...w,children:(0,l.jsx)(u,{attributes:e,setAttributes:t,isEdit:!0,animationData:k})})]})},icon:{src:g},save:function({attributes:e}){const t=o.useBlockProps.save({className:c()({"style-border-bottom":e.enableHoverBorder},{hover_from_left:e.enableHoverBorder&&"left"===e.hoverBorderDirection},"gkit-funfact")}),r={endTime:e.number,duration:e?.duration?.size,style:e?.style};return(0,l.jsx)("div",{...t,children:(0,l.jsx)(u,{attributes:e,isEdit:!1,animationData:r})})}})},5573:e=>{"use strict";e.exports=window.wp.primitives},6087:e=>{"use strict";e.exports=window.wp.element},6427:e=>{"use strict";e.exports=window.wp.components},6942:(e,t)=>{var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e="",t=0;t<arguments.length;t++){var r=arguments[t];r&&(e=a(e,i(r)))}return e}function i(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return o.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var r in e)n.call(e,r)&&e[r]&&(t=a(t,r));return t}function a(e,t){return t?e?e+" "+t:e+t:e}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},7723:e=>{"use strict";e.exports=window.wp.i18n}},o={};function i(e){var t=o[e];if(void 0!==t)return t.exports;var r=o[e]={exports:{}};return n[e](r,r.exports,i),r.exports}i.m=n,e=[],i.O=(t,r,n,o)=>{if(!r){var a=1/0;for(u=0;u<e.length;u++){for(var[r,n,o]=e[u],c=!0,s=0;s<r.length;s++)(!1&o||a>=o)&&Object.keys(i.O).every((e=>i.O[e](r[s])))?r.splice(s--,1):(c=!1,o<a&&(a=o));if(c){e.splice(u--,1);var l=n();void 0!==l&&(t=l)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[r,n,o]},i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((t,r)=>(i.f[r](e,t),t)),[])),i.u=e=>e+".js",i.miniCssF=e=>{},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),t={},r="gutenkit-blocks-addon:",i.l=(e,n,o,a)=>{if(t[e])t[e].push(n);else{var c,s;if(void 0!==o)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var d=l[u];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==r+o){c=d;break}}c||(s=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.setAttribute("data-webpack",r+o),c.src=e),t[e]=[n];var f=(r,n)=>{c.onerror=c.onload=null,clearTimeout(p);var o=t[e];if(delete t[e],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((e=>e(n))),r)return r(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=f.bind(null,c.onerror),c.onload=f.bind(null,c.onload),s&&document.head.appendChild(c)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;i.g.importScripts&&(e=i.g.location+"");var t=i.g.document;if(!e&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var n=r.length-1;n>-1&&(!e||!/^http(s?):/.test(e));)e=r[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/^blob:/,"").replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e+"../../"})(),(()=>{var e={6691:0,3787:0};i.f.j=(t,r)=>{var n=i.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else if(3787!=t){var o=new Promise(((r,o)=>n=e[t]=[r,o]));r.push(n[2]=o);var a=i.p+i.u(t),c=new Error;i.l(a,(r=>{if(i.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var o=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;c.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",c.name="ChunkLoadError",c.type=o,c.request=a,n[1](c)}}),"chunk-"+t,t)}else e[t]=0},i.O.j=t=>0===e[t];var t=(t,r)=>{var n,o,[a,c,s]=r,l=0;if(a.some((t=>0!==e[t]))){for(n in c)i.o(c,n)&&(i.m[n]=c[n]);if(s)var u=s(i)}for(t&&t(r);l<a.length;l++)o=a[l],i.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return i.O(u)},r=globalThis.webpackChunkgutenkit_blocks_addon=globalThis.webpackChunkgutenkit_blocks_addon||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var a=i.O(void 0,[3787],(()=>i(2911)));a=i.O(a)})();