(()=>{var t,e,r,o={3913:(t,e,r)=>{"use strict";const o=window.wp.blocks;r(7723);const n=window.wp.blockEditor;var i=r(6087),a=r(6942),s=r.n(a),l=r(790);const c=({attributes:t})=>{const{btnText:e,iconsSwitch:r,iconAlign:o,btnClass:n,btnID:i,url:a}=t,{GkitIcon:c}=window.gutenkit.components,{linkGenerator:g}=window.gutenkit.helpers;let u={className:s()("gkit-btn",{[n]:n})};return i&&(u.id=i),(0,l.jsx)("div",{className:"gkit-btn-wraper",children:(0,l.jsxs)("a",{className:"gkit-btn",...g(a),...u,children:[r&&"left"==o&&(0,l.jsx)(c,{icon:t?.icons,className:"icon-left"}),e,r&&"right"==o&&(0,l.jsx)(c,{icon:t?.icons,className:"icon-right"})]})})},g=(0,i.lazy)((()=>r.e(8789).then(r.bind(r,8789)))),u=JSON.parse('{"UU":"gutenkit/button"}'),{button:d}=window.gutenkit.editorIcon;(0,o.registerBlockType)(u.UU,{edit:function({attributes:t,setAttributes:e,clientId:r,advancedControl:o,isSelected:i}){const{GkitStyle:a,GkitSuspense:s}=window.gutenkit.components,{useDeviceType:u,useBlockStyles:d,useDeviceList:p}=window.gutenkit.helpers,b=p(),f=(0,n.useBlockProps)(),h=u(),k=d(t,e,"blocksCSS",((t,e)=>{const{parseCSS:r,backgroundGenerator:o,getBoxShadowValue:n,getBoxValue:i,getBorderValue:a,getTypographyValue:s,getSliderValue:l,getColor:c}=window.gutenkit.helpers,g=t.blockClass;return r([[{selector:`.${g} .gkit-btn-wraper .gkit-btn`,"text-shadow":n(t.shadow),color:c(t.textColor),fill:c(t.textColor),background:o(t?.bgColor).background,"background-size":o(t?.bgColor).size,"box-shadow":n(t.boxShadowGroup)},{selector:`.${g} .gkit-btn-wraper .gkit-btn:hover`,color:c(t.hoverColor),fill:c(t.hoverColor),background:o(t?.bgHoverColor).background,"background-size":o(t?.bgHoverColor).size,transform:`translateY(${l(t.backgroundHoverTransformY)})`,"box-shadow":n(t.boxShadowGroupHover)},{selector:`.${g} .gkit-btn-wraper .gkit-btn > .icon-left`,"margin-left":"0"},{selector:`.${g} .gkit-btn-wraper .gkit-btn > .icon-right`,"margin-right":"0"},{selector:`.rtl .${g} .gkit-btn-wraper .gkit-btn > .icon-left`,"margin-right":"0"},{selector:`.rtl .${g} .gkit-btn-wraper .gkit-btn > .icon-right`,"margin-left":"0"}],e=>[{selector:`.${g} .gkit-btn-wraper`,"text-align":t[`align${e}`]},{selector:`.${g} .gkit-btn-wraper .gkit-btn`,width:l(t[`width${e}`]),...i(t[`textPadding${e}`],"padding"),...s(t.typography,e),...a(t[`border${e}`]),...i(t[`borderRadius${e}`],"border-radius")},{selector:`.${g} .gkit-btn-wraper .gkit-btn:hover`,...a(t[`hoverBorder${e}`]),...i(t[`hoverBorderRadius${e}`],"border-radius")},{selector:`.${g} .gkit-btn-wraper .gkit-btn .gkit-icon`,"font-size":l(t[`iconFontSize${e}`]),transform:`translateY(${l(t[`normalIconVerticalAlign${e}`])})`},{selector:`.${g} .gkit-btn-wraper .gkit-btn > .icon-left`,"margin-right":l(t[`normalIconPadding${e}`]),"margin-left":"0"},{selector:`.${g} .gkit-btn-wraper .gkit-btn > .icon-right`,"margin-left":l(t[`normalIconPadding${e}`]),"margin-right":"0"},{selector:`.rtl .${g} .gkit-btn-wraper .gkit-btn > .icon-left`,"margin-right":"0","margin-left":l(t[`normalIconPadding${e}`])},{selector:`.rtl .${g} .gkit-btn-wraper .gkit-btn > .icon-right`,"margin-left":"0","margin-right":l(t[`normalIconPadding${e}`])}]],e)})(t,b));return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a,{blocksCSS:k}),i&&(0,l.jsx)(s,{children:(0,l.jsx)(g,{attributes:t,setAttributes:e,device:h,advancedControl:o})}),(0,l.jsx)("div",{...f,children:(0,l.jsx)(c,{attributes:t})})]})},icon:{src:d},save:function({attributes:t}){const e=n.useBlockProps.save();return(0,l.jsx)("div",{...e,children:(0,l.jsx)(c,{attributes:t})})}})},790:t=>{"use strict";t.exports=window.ReactJSXRuntime},6427:t=>{"use strict";t.exports=window.wp.components},6087:t=>{"use strict";t.exports=window.wp.element},7723:t=>{"use strict";t.exports=window.wp.i18n},5573:t=>{"use strict";t.exports=window.wp.primitives},6942:(t,e)=>{var r;!function(){"use strict";var o={}.hasOwnProperty;function n(){for(var t="",e=0;e<arguments.length;e++){var r=arguments[e];r&&(t=a(t,i(r)))}return t}function i(t){if("string"==typeof t||"number"==typeof t)return t;if("object"!=typeof t)return"";if(Array.isArray(t))return n.apply(null,t);if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]"))return t.toString();var e="";for(var r in t)o.call(t,r)&&t[r]&&(e=a(e,r));return e}function a(t,e){return e?t?t+" "+e:t+e:t}t.exports?(n.default=n,t.exports=n):void 0===(r=function(){return n}.apply(e,[]))||(t.exports=r)}()}},n={};function i(t){var e=n[t];if(void 0!==e)return e.exports;var r=n[t]={exports:{}};return o[t](r,r.exports,i),r.exports}i.m=o,t=[],i.O=(e,r,o,n)=>{if(!r){var a=1/0;for(g=0;g<t.length;g++){for(var[r,o,n]=t[g],s=!0,l=0;l<r.length;l++)(!1&n||a>=n)&&Object.keys(i.O).every((t=>i.O[t](r[l])))?r.splice(l--,1):(s=!1,n<a&&(a=n));if(s){t.splice(g--,1);var c=o();void 0!==c&&(e=c)}}return e}n=n||0;for(var g=t.length;g>0&&t[g-1][2]>n;g--)t[g]=t[g-1];t[g]=[r,o,n]},i.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return i.d(e,{a:e}),e},i.d=(t,e)=>{for(var r in e)i.o(e,r)&&!i.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},i.f={},i.e=t=>Promise.all(Object.keys(i.f).reduce(((e,r)=>(i.f[r](t,e),e)),[])),i.u=t=>t+".js",i.miniCssF=t=>{},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),e={},r="gutenkit-blocks-addon:",i.l=(t,o,n,a)=>{if(e[t])e[t].push(o);else{var s,l;if(void 0!==n)for(var c=document.getElementsByTagName("script"),g=0;g<c.length;g++){var u=c[g];if(u.getAttribute("src")==t||u.getAttribute("data-webpack")==r+n){s=u;break}}s||(l=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.setAttribute("data-webpack",r+n),s.src=t),e[t]=[o];var d=(r,o)=>{s.onerror=s.onload=null,clearTimeout(p);var n=e[t];if(delete e[t],s.parentNode&&s.parentNode.removeChild(s),n&&n.forEach((t=>t(o))),r)return r(o)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=d.bind(null,s.onerror),s.onload=d.bind(null,s.onload),l&&document.head.appendChild(s)}},i.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{var t;i.g.importScripts&&(t=i.g.location+"");var e=i.g.document;if(!t&&e&&(e.currentScript&&"SCRIPT"===e.currentScript.tagName.toUpperCase()&&(t=e.currentScript.src),!t)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!t||!/^http(s?):/.test(t));)t=r[o--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=t+"../../"})(),(()=>{var t={8985:0,2941:0};i.f.j=(e,r)=>{var o=i.o(t,e)?t[e]:void 0;if(0!==o)if(o)r.push(o[2]);else if(2941!=e){var n=new Promise(((r,n)=>o=t[e]=[r,n]));r.push(o[2]=n);var a=i.p+i.u(e),s=new Error;i.l(a,(r=>{if(i.o(t,e)&&(0!==(o=t[e])&&(t[e]=void 0),o)){var n=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;s.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",s.name="ChunkLoadError",s.type=n,s.request=a,o[1](s)}}),"chunk-"+e,e)}else t[e]=0},i.O.j=e=>0===t[e];var e=(e,r)=>{var o,n,[a,s,l]=r,c=0;if(a.some((e=>0!==t[e]))){for(o in s)i.o(s,o)&&(i.m[o]=s[o]);if(l)var g=l(i)}for(e&&e(r);c<a.length;c++)n=a[c],i.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return i.O(g)},r=globalThis.webpackChunkgutenkit_blocks_addon=globalThis.webpackChunkgutenkit_blocks_addon||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))})();var a=i.O(void 0,[2941],(()=>i(3913)));a=i.O(a)})();