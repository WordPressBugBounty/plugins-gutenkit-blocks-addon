(()=>{var r,e,t,o={790:r=>{"use strict";r.exports=window.ReactJSXRuntime},6087:r=>{"use strict";r.exports=window.wp.element},6942:(r,e)=>{var t;!function(){"use strict";var o={}.hasOwnProperty;function s(){for(var r="",e=0;e<arguments.length;e++){var t=arguments[e];t&&(r=i(r,a(t)))}return r}function a(r){if("string"==typeof r||"number"==typeof r)return r;if("object"!=typeof r)return"";if(Array.isArray(r))return s.apply(null,r);if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]"))return r.toString();var e="";for(var t in r)o.call(r,t)&&r[t]&&(e=i(e,t));return e}function i(r,e){return e?r?r+" "+e:r+e:r}r.exports?(s.default=s,r.exports=s):void 0===(t=function(){return s}.apply(e,[]))||(r.exports=t)}()},7723:r=>{"use strict";r.exports=window.wp.i18n},8377:(r,e,t)=>{"use strict";const o=window.wp.blocks;var s=t(7723),a=t(6087),i=t(6942),n=t.n(i);const g=r=>{let e=JSON.parse(r.target.getAttribute("data-progress-bar"));e&&function(t,o){const s=performance.now();requestAnimationFrame((function a(i){const n=i-s;let g;n>=o?(g=t,r.target.removeAttribute("data-progress-bar")):(g=function(r,e,t){return 0*(1-t)+t*e}(0,t,n/o),requestAnimationFrame(a)),function(t){r.target.querySelector(".gkit-progress-bar__progress").style.width=t+"%",e.percentageHide||(r.target.querySelector(".gkit-progress-bar__label").textContent=Math.round(t)+"%")}(g)}))}(e.progress,e.duration)},c=window.wp.blockEditor;var l=t(790);const p=({attributes:r,setAttributes:e,animationData:t,isEdit:o})=>{const{GkitIcon:a}=window.gutenkit.components;return(0,l.jsxs)(l.Fragment,{children:[o?(0,l.jsx)(c.RichText,{identifier:"title",tagName:"div",value:r.title,onChange:r=>e({title:r}),placeholder:(0,s.__)("Enter your title...","gutenkit-blocks-addon"),className:"gkit-progress-bar-title"}):r.title&&(0,l.jsx)("div",{className:"gkit-progress-bar-content",children:r.title}),"switch"!==r.style?(0,l.jsx)("div",{id:`progress-bar-${r.blockID}`,className:"gkit-progress-bar","data-progress-bar":JSON.stringify(t),children:(0,l.jsx)("div",{className:"gkit-progress-bar__progress",children:!r.percentageHide&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:"gkit-progress-bar__label"}),"inner-content"===r.style&&r.icon&&(0,l.jsx)(a,{icon:r.icon,className:"gkit-progress-bar__icon"})]})})}):(0,l.jsxs)("div",{id:`progress-bar-${r.blockID}`,className:"gkit-progress-bar","data-progress-bar":JSON.stringify(t),children:[(0,l.jsx)("div",{className:"gkit-progress-bar__progress"}),!r.percentageHide&&(0,l.jsx)("div",{className:"gkit-progress-bar__label"})]})]})},d=(0,a.lazy)((()=>t.e(9250).then(t.bind(t,9250)))),u=JSON.parse('{"UU":"gutenkit/progress-bar"}'),{progressBar:b}=window.gutenkit.editorIcon;(0,o.registerBlockType)(u.UU,{edit:function({attributes:r,setAttributes:e,advancedControl:t,isSelected:o}){const{GkitStyle:s,GkitSuspense:i}=window.gutenkit.components,{onScrollAnimateIframe:u,onScrollAnimate:b,useBlockStyles:k,useDeviceList:f,useDeviceType:h}=window.gutenkit.helpers,m=f(),v=h(),[y,_]=(0,a.useState)({progress:r?.progress?.size,duration:r?.duration?.size,style:r?.style,percentageHide:r?.percentageHide}),w=(0,c.useBlockProps)({className:n()([`gkit-progress-bar-${r?.style}`])});(0,a.useEffect)((()=>{let e;var t,o,s,a;return t=r?.progress?.size,o=r?.duration?.size,s=r?.style,a=r.percentageHide,clearTimeout(e),e=setTimeout((()=>{_({progress:t,duration:o,style:s,percentageHide:a}),document.getElementsByTagName("iframe").length>0?u(".gkit-progress-bar",g):b(".gkit-progress-bar",g)}),300),()=>{clearTimeout(e)}}),[r?.progress?.size,r?.duration?.size,r?.style,v,r.percentageHide]);const S=k(r,e,"blocksCSS",((r,e)=>{const{parseCSS:t,backgroundGenerator:o,getBoxShadowValue:s,getBoxValue:a,getTypographyValue:i,getSliderValue:n,getColor:g}=window.gutenkit.helpers,c=r?.blockClass;return t([[{selector:`.${c} .gkit-progress-bar`,background:o(r?.barBackground).background,"box-shadow":s(r.barBoxShadow),...a(r.barborderRadius,"border-radius")},{selector:`.${c}.gkit-progress-bar-shadow .gkit-progress-bar`,...a(r.barPadding,"padding")},{selector:`.${c}:not(.gkit-progress-bar-stripe)  .gkit-progress-bar`,background:o(r?.barBackground).background},{selector:`.${c}.gkit-progress-bar-stripe .gkit-progress-bar`,background:r?.barStripeBackground},{selector:`.${c} .gkit-progress-bar__progress`,background:o(r?.trackBackground).background,...a(r.trackBorderRadius,"border-radius"),"box-shadow":s(r.trackBoxShadow)},{selector:`.${c} .gkit-progress-bar-content`,color:g(r?.titleColor)},{selector:`.${c} .gkit-progress-bar__label`,color:g(r?.percentageColor)},{selector:`.${c}.gkit-progress-bar-tooltip .gkit-progress-bar__label`,"background-color":g(r?.percentageBackground)},{selector:`.${c}.gkit-progress-bar-stripe .gkit-progress-bar__progress`,color:g(r?.barStripeBackground)},{selector:`.${c}.gkit-progress-bar-stripe .gkit-progress-bar__progress`,background:`repeating-linear-gradient(to right, ${g(r?.trackStripeBackground)}, ${g(r?.trackStripeBackground)} 4px, currentColor 4px, currentColor 8px)`},{selector:`.${c}.gkit-progress-bar-tooltip .gkit-progress-bar__label::before`,"border-color":`transparent ${g(r?.percentageBackground)} transparent transparent`},{selector:`.${c}.gkit-progress-bar-tooltip--box .gkit-progress-bar__label::before`,"border-color":`${g(r?.percentageBackground)} transparent transparent transparent`},{selector:`.${c}.gkit-progress-bar-tooltip--circle .gkit-progress-bar__label::before`,background:r?.percentageBackground},{selector:`.${c}.gkit-progress-bar-tooltip--ribbon .gkit-progress-bar__label::before`,"border-color":`transparent transparent ${g(r?.percentageBackground)} transparent`},{selector:`.${c}.gkit-progress-bar-tooltip--rounded .gkit-progress-bar__label::before`,"border-color":`${g(r?.percentageBackground)} transparent transparent transparent`},{selector:`.${c} .gkit-progress-bar__icon`,fill:g(r?.iconColor)},{selector:`.${c}.gkit-progress-bar-switch .gkit-progress-bar__progress::before, .${c}.gkit-progress-bar-switch .gkit-progress-bar__progress::after`,color:g(r?.switchColor)}],e=>[{selector:`.${c}:not(.gkit-progress-bar-switch)  .gkit-progress-bar`,height:n(r[`barHeight${e}`])},{selector:`.${c} .gkit-progress-bar-content`,...i(r.titleTypography,e),"margin-bottom":n(r[`titleMarginBottom${e}`])},{selector:`.${c} .gkit-progress-bar__label`,...i(r.percentageTypography,e)},{selector:`.${c} .gkit-progress-bar__icon`,"font-size":n(r[`iconSize${e}`])}]],e)})(r,m));return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s,{blocksCSS:S}),o&&(0,l.jsx)(i,{children:(0,l.jsx)(d,{attributes:r,setAttributes:e,device:v,advancedControl:t})}),(0,l.jsx)("div",{...w,children:(0,l.jsx)(p,{attributes:r,setAttributes:e,animationData:y,isEdit:!0})})]})},icon:{src:b},save:function({attributes:r}){const e=c.useBlockProps.save({className:n()([`gkit-progress-bar-${r?.style}`])}),t={progress:r?.progress?.size,duration:r?.duration?.size,style:r?.style,percentageHide:r?.percentageHide};return(0,l.jsx)("div",{...e,children:(0,l.jsx)(p,{attributes:r,animationData:t,isEdit:!1})})}})}},s={};function a(r){var e=s[r];if(void 0!==e)return e.exports;var t=s[r]={exports:{}};return o[r](t,t.exports,a),t.exports}a.m=o,r=[],a.O=(e,t,o,s)=>{if(!t){var i=1/0;for(l=0;l<r.length;l++){for(var[t,o,s]=r[l],n=!0,g=0;g<t.length;g++)(!1&s||i>=s)&&Object.keys(a.O).every((r=>a.O[r](t[g])))?t.splice(g--,1):(n=!1,s<i&&(i=s));if(n){r.splice(l--,1);var c=o();void 0!==c&&(e=c)}}return e}s=s||0;for(var l=r.length;l>0&&r[l-1][2]>s;l--)r[l]=r[l-1];r[l]=[t,o,s]},a.n=r=>{var e=r&&r.__esModule?()=>r.default:()=>r;return a.d(e,{a:e}),e},a.d=(r,e)=>{for(var t in e)a.o(e,t)&&!a.o(r,t)&&Object.defineProperty(r,t,{enumerable:!0,get:e[t]})},a.f={},a.e=r=>Promise.all(Object.keys(a.f).reduce(((e,t)=>(a.f[t](r,e),e)),[])),a.u=r=>r+".js",a.miniCssF=r=>{},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(r){if("object"==typeof window)return window}}(),a.o=(r,e)=>Object.prototype.hasOwnProperty.call(r,e),e={},t="gutenkit-blocks-addon:",a.l=(r,o,s,i)=>{if(e[r])e[r].push(o);else{var n,g;if(void 0!==s)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var p=c[l];if(p.getAttribute("src")==r||p.getAttribute("data-webpack")==t+s){n=p;break}}n||(g=!0,(n=document.createElement("script")).charset="utf-8",n.timeout=120,a.nc&&n.setAttribute("nonce",a.nc),n.setAttribute("data-webpack",t+s),n.src=r),e[r]=[o];var d=(t,o)=>{n.onerror=n.onload=null,clearTimeout(u);var s=e[r];if(delete e[r],n.parentNode&&n.parentNode.removeChild(n),s&&s.forEach((r=>r(o))),t)return t(o)},u=setTimeout(d.bind(null,void 0,{type:"timeout",target:n}),12e4);n.onerror=d.bind(null,n.onerror),n.onload=d.bind(null,n.onload),g&&document.head.appendChild(n)}},a.r=r=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},(()=>{var r;a.g.importScripts&&(r=a.g.location+"");var e=a.g.document;if(!r&&e&&(e.currentScript&&"SCRIPT"===e.currentScript.tagName.toUpperCase()&&(r=e.currentScript.src),!r)){var t=e.getElementsByTagName("script");if(t.length)for(var o=t.length-1;o>-1&&(!r||!/^http(s?):/.test(r));)r=t[o--].src}if(!r)throw new Error("Automatic publicPath is not supported in this browser");r=r.replace(/^blob:/,"").replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=r+"../../"})(),(()=>{var r={8548:0,5788:0};a.f.j=(e,t)=>{var o=a.o(r,e)?r[e]:void 0;if(0!==o)if(o)t.push(o[2]);else if(5788!=e){var s=new Promise(((t,s)=>o=r[e]=[t,s]));t.push(o[2]=s);var i=a.p+a.u(e),n=new Error;a.l(i,(t=>{if(a.o(r,e)&&(0!==(o=r[e])&&(r[e]=void 0),o)){var s=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;n.message="Loading chunk "+e+" failed.\n("+s+": "+i+")",n.name="ChunkLoadError",n.type=s,n.request=i,o[1](n)}}),"chunk-"+e,e)}else r[e]=0},a.O.j=e=>0===r[e];var e=(e,t)=>{var o,s,[i,n,g]=t,c=0;if(i.some((e=>0!==r[e]))){for(o in n)a.o(n,o)&&(a.m[o]=n[o]);if(g)var l=g(a)}for(e&&e(t);c<i.length;c++)s=i[c],a.o(r,s)&&r[s]&&r[s][0](),r[s]=0;return a.O(l)},t=globalThis.webpackChunkgutenkit_blocks_addon=globalThis.webpackChunkgutenkit_blocks_addon||[];t.forEach(e.bind(null,0)),t.push=e.bind(null,t.push.bind(t))})();var i=a.O(void 0,[5788],(()=>a(8377)));i=a.O(i)})();