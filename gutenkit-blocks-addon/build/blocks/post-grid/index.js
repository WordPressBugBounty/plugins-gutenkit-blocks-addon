(()=>{var e,t,r,o={790:e=>{"use strict";e.exports=window.ReactJSXRuntime},1455:e=>{"use strict";e.exports=window.wp.apiFetch},6087:e=>{"use strict";e.exports=window.wp.element},6942:(e,t)=>{var r;!function(){"use strict";var o={}.hasOwnProperty;function i(){for(var e="",t=0;t<arguments.length;t++){var r=arguments[t];r&&(e=s(e,n(r)))}return e}function n(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return i.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var r in e)o.call(e,r)&&e[r]&&(t=s(t,r));return t}function s(e,t){return t?e?e+" "+t:e+t:e}e.exports?(i.default=i,e.exports=i):void 0===(r=function(){return i}.apply(t,[]))||(e.exports=r)}()},7723:e=>{"use strict";e.exports=window.wp.i18n},9227:(e,t,r)=>{"use strict";const o=window.wp.blocks;r(7723);const i=window.wp.blockEditor;var n=r(6087),s=(r(6942),r(1455)),a=r.n(s),l=r(790);const c=function({post:e,attributes:t}){const r=e.featured_media,[o,i]=(0,n.useState)(""),{truncateWords:s}=window.gutenkit.helpers;return(0,n.useEffect)((()=>{r&&a()({path:`/wp/v2/media/${r}`}).then((e=>{i(e?.source_url||"")})).catch((e=>{console.error(e)}))}),[r]),(0,l.jsxs)("div",{className:"gkit-post-grid-item",children:[(0,l.jsx)("a",{href:"#",className:"gkit-post-grid-item__header","aria-label":"url",children:(0,l.jsx)("div",{className:"gkit-post-grid-item__thumb",style:{backgroundImage:`url(${o||""})`}})}),(0,l.jsx)("h3",{className:"gkit-post-grid-item__title",children:(0,l.jsx)("a",{href:"#",children:t?.enableCropTitle?s(e.title.rendered,t?.numberOfWordsTitle):e.title.rendered})})]})},u=(0,n.lazy)((()=>r.e(3060).then(r.bind(r,3060)))),p=JSON.parse('{"UU":"gutenkit/post-grid"}'),{postGrid:d}=window.gutenkit.editorIcon;(0,o.registerBlockType)(p.UU,{edit:function({attributes:e,setAttributes:t,advancedControl:r,isSelected:o}){const{GkitStyle:s,GkitSuspense:p}=window.gutenkit.components,{useDeviceType:d,useBlockStyles:g,useDeviceList:f}=window.gutenkit.helpers,h=(0,i.useBlockProps)(),v=d(),[m,b]=(0,n.useState)([]),w=f();(0,n.useEffect)((()=>{if(0===e?.selectedCategories.length)a()({path:`/wp/v2/posts?per_page=${e.postCount}`}).then((e=>b(e))).catch((e=>console.error(e)));else{let t=e.selectedCategories.map((e=>e.value));t=t.join(","),a()({path:`/wp/v2/posts?categories=${t}&per_page=${e.postCount}`}).then((e=>b(e))).catch((e=>console.error(e)))}}),[e.postCount,e?.selectedCategories]);const k=g(e,t,"blocksCSS",((e,t)=>{const{parseCSS:r,getBoxValue:o,getSliderValue:i,getColor:n,getTypographyValue:s}=window.gutenkit.helpers,a=e.blockClass;return r([[{selector:`.${a} .gkit-post-grid-item__title`,color:n(e.titleColor)},{selector:`.${a} .gkit-post-grid-item:hover .gkit-post-grid-item__title`,color:n(e.titleColorHover)}],t=>[{selector:`.${a}`,"grid-template-columns":`repeat(${e[`selectColumn${t}`]}, 1fr)`,gap:i(e[`gap${t}`])},{selector:`.${a} .gkit-post-grid-item__thumb`,height:i(e[`height${t}`])},{selector:`.${a} .gkit-post-grid-item__title`,...o(e[`titleMargin${t}`],"margin"),...s(e.titleTypography,`${t}`)}]],t)})(e,w));return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s,{blocksCSS:k}),o&&(0,l.jsx)(p,{children:(0,l.jsx)(u,{attributes:e,setAttributes:t,device:v,advancedControl:r})}),(0,l.jsx)("div",{...h,children:m.map(((t,r)=>(0,l.jsx)(c,{post:t,attributes:e},r)))})]})},icon:{src:d},save:function(){return null}})}},i={};function n(e){var t=i[e];if(void 0!==t)return t.exports;var r=i[e]={exports:{}};return o[e](r,r.exports,n),r.exports}n.m=o,e=[],n.O=(t,r,o,i)=>{if(!r){var s=1/0;for(u=0;u<e.length;u++){for(var[r,o,i]=e[u],a=!0,l=0;l<r.length;l++)(!1&i||s>=i)&&Object.keys(n.O).every((e=>n.O[e](r[l])))?r.splice(l--,1):(a=!1,i<s&&(s=i));if(a){e.splice(u--,1);var c=o();void 0!==c&&(t=c)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[r,o,i]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,r)=>(n.f[r](e,t),t)),[])),n.u=e=>e+".js",n.miniCssF=e=>{},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),t={},r="gutenkit-blocks-addon:",n.l=(e,o,i,s)=>{if(t[e])t[e].push(o);else{var a,l;if(void 0!==i)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var p=c[u];if(p.getAttribute("src")==e||p.getAttribute("data-webpack")==r+i){a=p;break}}a||(l=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.setAttribute("data-webpack",r+i),a.src=e),t[e]=[o];var d=(r,o)=>{a.onerror=a.onload=null,clearTimeout(g);var i=t[e];if(delete t[e],a.parentNode&&a.parentNode.removeChild(a),i&&i.forEach((e=>e(o))),r)return r(o)},g=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),l&&document.head.appendChild(a)}},n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!e||!/^http(s?):/.test(e));)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/^blob:/,"").replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e+"../../"})(),(()=>{var e={6406:0,9674:0};n.f.j=(t,r)=>{var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else if(9674!=t){var i=new Promise(((r,i)=>o=e[t]=[r,i]));r.push(o[2]=i);var s=n.p+n.u(t),a=new Error;n.l(s,(r=>{if(n.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),s=r&&r.target&&r.target.src;a.message="Loading chunk "+t+" failed.\n("+i+": "+s+")",a.name="ChunkLoadError",a.type=i,a.request=s,o[1](a)}}),"chunk-"+t,t)}else e[t]=0},n.O.j=t=>0===e[t];var t=(t,r)=>{var o,i,[s,a,l]=r,c=0;if(s.some((t=>0!==e[t]))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(l)var u=l(n)}for(t&&t(r);c<s.length;c++)i=s[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(u)},r=globalThis.webpackChunkgutenkit_blocks_addon=globalThis.webpackChunkgutenkit_blocks_addon||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var s=n.O(void 0,[9674],(()=>n(9227)));s=n.O(s)})();