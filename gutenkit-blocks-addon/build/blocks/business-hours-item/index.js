(()=>{"use strict";var e,t,i={790:e=>{e.exports=window.ReactJSXRuntime},6087:e=>{e.exports=window.wp.element},7723:e=>{e.exports=window.wp.i18n}},s={};function n(e){var t=s[e];if(void 0!==t)return t.exports;var r=s[e]={exports:{}};return i[e](r,r.exports,n),r.exports}n.m=i,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,i)=>(n.f[i](e,t),t)),[])),n.u=e=>e+".js",n.miniCssF=e=>{},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="gutenkit-blocks-addon:",n.l=(i,s,r,o)=>{if(e[i])e[i].push(s);else{var a,l;if(void 0!==r)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var d=u[c];if(d.getAttribute("src")==i||d.getAttribute("data-webpack")==t+r){a=d;break}}a||(l=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.setAttribute("data-webpack",t+r),a.src=i),e[i]=[s];var g=(t,s)=>{a.onerror=a.onload=null,clearTimeout(h);var n=e[i];if(delete e[i],a.parentNode&&a.parentNode.removeChild(a),n&&n.forEach((e=>e(s))),t)return t(s)},h=setTimeout(g.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=g.bind(null,a.onerror),a.onload=g.bind(null,a.onload),l&&document.head.appendChild(a)}},n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(e=t.currentScript.src),!e)){var i=t.getElementsByTagName("script");if(i.length)for(var s=i.length-1;s>-1&&(!e||!/^http(s?):/.test(e));)e=i[s--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/^blob:/,"").replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e+"../../"})(),(()=>{var e={6257:0};n.f.j=(t,i)=>{var s=n.o(e,t)?e[t]:void 0;if(0!==s)if(s)i.push(s[2]);else{var r=new Promise(((i,n)=>s=e[t]=[i,n]));i.push(s[2]=r);var o=n.p+n.u(t),a=new Error;n.l(o,(i=>{if(n.o(e,t)&&(0!==(s=e[t])&&(e[t]=void 0),s)){var r=i&&("load"===i.type?"missing":i.type),o=i&&i.target&&i.target.src;a.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",a.name="ChunkLoadError",a.type=r,a.request=o,s[1](a)}}),"chunk-"+t,t)}};var t=(t,i)=>{var s,r,[o,a,l]=i,u=0;if(o.some((t=>0!==e[t]))){for(s in a)n.o(a,s)&&(n.m[s]=a[s]);l&&l(n)}for(t&&t(i);u<o.length;u++)r=o[u],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0},i=globalThis.webpackChunkgutenkit_blocks_addon=globalThis.webpackChunkgutenkit_blocks_addon||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))})();const r=window.wp.blocks;var o=n(7723);const a=window.wp.blockEditor;var l=n(6087),u=n(790);const c=(0,l.lazy)((()=>n.e(2859).then(n.bind(n,2859)))),d=JSON.parse('{"UU":"gutenkit/business-hours-item"}'),{businessHoursItem:g}=window.gutenkit.editorIcon;(0,r.registerBlockType)(d.UU,{edit:function({attributes:e,setAttributes:t,clientId:i,advancedControl:s,isSelected:n}){const{GkitStyle:r,GkitSuspense:l}=window.gutenkit.components,{useBlockStyles:d,useDeviceList:g}=window.gutenkit.helpers;g();let h=(0,a.useBlockProps)();const k=d(e,t,"blocksCSS",(e=>{const{parseCSS:t,getColor:i}=window.gutenkit.helpers,s=`wp-block-gutenkit-business-hours .${e?.blockClass}.wp-block-gutenkit-business-hours-item`;return t({desktop:[{selector:`.${s} .gkit-single-day-item.gkit-highlight-this-day`,background:i(e?.gkitSingleBusinessBackgroundColor)},{selector:`.${s} .gkit-single-day-item.gkit-highlight-this-day .gkit-business-day`,color:i(e?.gkitSingleBusinessDayColor)},{selector:`.${s} .gkit-single-day-item.gkit-highlight-this-day .gkit-business-time`,color:i(e?.gkitSingleBusinessTimeColor)}],tablet:[],mobile:[]})})(e));return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(r,{blocksCSS:k}),n&&(0,u.jsx)(l,{children:(0,u.jsx)(c,{attributes:e,setAttributes:t,advancedControl:s})}),(0,u.jsx)(u.Fragment,{children:(0,u.jsx)("div",{...h,children:(0,u.jsxs)("div",{className:"gkit-single-day gkit-single-day-item "+(e?.gkitHighlightThisDay?"gkit-highlight-this-day":""),children:[(0,u.jsx)(a.RichText,{identifier:"day",tagName:"span",value:e?.gkitBusinessDay,onChange:e=>t({gkitBusinessDay:e}),placeholder:(0,o.__)("Day","gutenkit-blocks-addon"),className:"gkit-business-day"}),(0,u.jsx)(a.RichText,{identifier:"time",tagName:"span",value:e?.gkitBusinessTime,onChange:e=>t({gkitBusinessTime:e}),placeholder:(0,o.__)("Time","gutenkit-blocks-addon"),className:"gkit-business-time"})]})})})]})},icon:{src:g},save:function({attributes:e}){const t=a.useBlockProps.save();return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)("div",{...t,children:(0,u.jsxs)("div",{className:"gkit-single-day gkit-single-day-item "+(e?.gkitHighlightThisDay?"gkit-highlight-this-day":""),children:[e?.gkitBusinessDay&&(0,u.jsx)(a.RichText.Content,{identifier:"day",tagName:"span",value:e?.gkitBusinessDay,className:"gkit-business-day"}),e?.gkitBusinessTime&&(0,u.jsx)(a.RichText.Content,{identifier:"time",tagName:"span",value:e?.gkitBusinessTime,className:"gkit-business-time"})]})})})}})})();