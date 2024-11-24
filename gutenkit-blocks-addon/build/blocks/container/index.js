(()=>{var e,t,r,o={268:(e,t,r)=>{"use strict";const o=window.wp.blocks;r(7723);const n=window.wp.blockEditor;var i=r(6087);const a=window.wp.data;var l=r(6942),s=r.n(l),c=r(790);const d=({children:e,element:t})=>{const r=t?.classList.contains("gkit-container-resize-handler-left"),o=t?.classList.contains("gkit-container-resize-handler-right"),n=r?"tooltip-position-left":o?"tooltip-position-right":"";return(0,c.jsx)("span",{className:`gkit-container-resizer-tooltip ${n}`,children:e})},u=({showHandle:e,className:t,currentWidth:r,responsiveHelper:o,setAttributes:n,device:a,isParent:l})=>{const{gkitDomFindParent:u}=window.gutenkit.helpers,[k,g]=(0,i.useState)(!1),[p,b]=(0,i.useState)(null),[h,m]=(0,i.useState)(null),[v,w]=(0,i.useState)(null),[f,y]=(0,i.useState)(null),_={className:s()(t,{"show-handle":e})},x=(0,i.useRef)(null),B=x.current,S=B?.parentElement,$=B?.classList.contains("gkit-container-resize-handler-right"),j=B?.classList.contains("gkit-container-resize-handler-left");let N=l?"maxWidth":"flexBasis";return(0,i.useEffect)((()=>{const e=e=>{if(!k)return;if(e.preventDefault(),!l){S.style.flexShrink=0;const e=u(S,".gkit-block__inner").children;let r=0;if(e){Array.from(e).forEach((e=>{r+=e.offsetWidth}));var t=Math.abs(r-v)<=1}}const r=t?1:2,o=(e.clientX-h)*r;if(o>0)if($){S.style[N]=`${p+Math.abs(o)}px`;let e=parseInt(S.style[N])/v*100;y(e>100?100:e)}else{S.style[N]=p-Math.abs(o)+"px";let e=parseInt(S.style[N])/v*100;y(e>100?100:e)}else if(o<0)if(j){S.style[N]=`${p+Math.abs(o)}px`;let e=parseInt(S.style[N])/v*100;y(e>100?100:e)}else{S.style[N]=p-Math.abs(o)+"px";let e=parseInt(S.style[N])/v*100;y(e>100?100:e)}},t=()=>{let e=parseInt(S.style[N])/v*100,t="px"!==r.unit?`${e>100?100:e}`:parseInt(S.style[N])>v?v:parseInt(S.style[N]);isNaN(t)||o("customWidth",{size:t<v?Math.floor(t):v,unit:r.unit},a,n),!l&&n({containerFlexShrink:0}),y(null),g(!1),S.removeAttribute("style")},i=window.frames["editor-canvas"]?.document;return k&&(i?.addEventListener("mousemove",e),document?.addEventListener("mousemove",e),i?.addEventListener("mouseup",t),document?.addEventListener("mouseup",t)),()=>{i?.removeEventListener("mousemove",e),document?.removeEventListener("mousemove",e),i?.removeEventListener("mouseup",t),document?.removeEventListener("mouseup",t)}}),[k,p,h,r,v,a]),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("div",{..._,onMouseDown:e=>{e.preventDefault(),g(!0);const t=S?.parentElement?.offsetWidth;b(S.offsetWidth),m(e.clientX),w(t)},ref:x}),f&&(0,c.jsx)(d,{element:x.current,children:Math.floor(f)+"%"})]})},k=(0,i.lazy)((()=>r.e(2701).then(r.bind(r,2701)))),g=JSON.parse('{"UU":"gutenkit/container"}'),p={from:[{type:"block",isMultiBlock:!0,blocks:["*"],__experimentalConvert(e){const t=e.map((e=>(0,o.createBlock)(e.name,e.attributes,function e(t){return t?t.map((t=>(0,o.createBlock)(t.name,t.attributes,e(t.innerBlocks)))):[]}(e.innerBlocks))));return(0,o.createBlock)("gutenkit/container",{variationSeleted:!0,columnsWidth:100},t)}}],ungroup:(e,t)=>t,to:[{type:"block",isMultiBlock:!0,blocks:["gutenkit/container"],__experimentalConvert(e){const t=e.map((e=>(0,o.createBlock)(e.name,e.attributes,function e(t){return t?t.map((t=>(0,o.createBlock)(t.name,t.attributes,e(t.innerBlocks)))):[]}(e.innerBlocks))));return(0,o.createBlock)("gutenkit/container",{variationSeleted:!0,columnsWidth:100},t)}}]},{container:b}=window.gutenkit.editorIcon;(0,o.registerBlockType)(g.UU,{icon:{src:b},edit:function({attributes:e,setAttributes:t,clientId:r,advancedControl:l,isSelected:d}){const{GkitStyle:g,GkitContainerPlaceholder:p,GkitSuspense:b,GkitAllowedBlockNames:h}=window.gutenkit.components,{useDeviceType:m,gkitResponsiveValue:v,responsiveHelper:w,useBlockStyles:f,useDeviceList:y}=window.gutenkit.helpers,_=y(),x=m(),B=(0,i.useRef)(null),S=`${e?.htmlTag}`,{replaceInnerBlocks:$}=(0,a.useDispatch)("core/block-editor");let j;"gutenkit-popup"===(0,a.select)("core/editor").getCurrentPostType()&&(j=h());const{hasChildBlocks:N,hasParent:P,isParent:W}=(0,a.useSelect)((e=>{const{getBlockOrder:t,getBlockParentsByBlockName:o}=e(n.store);return{hasChildBlocks:t(r).length>0,hasParent:o(r,"gutenkit/container").length>0,isParent:0===o(r,"gutenkit/container").length}}),[r]),C=(0,n.useBlockProps)({className:s()([e?.containerWidth],{"gkit-has-inner-children":N})}),E=(0,n.useInnerBlocksProps)({className:s()({"gkit-container-parent gkit-block__inner":W},{"gkit-container-child gkit-block__inner":!W},{"gkit-has-children":N})},{allowedBlocks:j,renderAppender:N?void 0:n.InnerBlocks.ButtonBlockAppender});(0,i.useEffect)((()=>{P&&t({variationSeleted:!0})}),[]),(0,i.useEffect)((()=>{B.current&&B.current.load()}),[e?.containerBackground?.backgroundVideo]);const O=e=>e.map((([e,t,r=[]])=>(0,o.createBlock)(e,t,O(r)))),I=f(e,t,"blocksCSS",((e,t)=>{const r=window.gutenkit.helpers,{parseCSS:o,backgroundGenerator:n,getBoxShadowValue:i,getBoxValue:a,getBorderValue:l,overlayGenerator:s,getSliderValue:c}=r,d=e.blockClass;return o([[{selector:`.editor-styles-wrapper :is(.block-editor-block-list__layout.is-root-container, .block-editor-block-list__layout.gkit-mega-menu-wrapper, .block-editor-block-list__block) :where(.${d}), .gutenkit .${d}, .wp-block-gutenkit-container > .gkit-block__inner > .${d}`,overflow:e.overflow,"box-shadow":i(e?.conatinerBoxShadow),"--gkit-bg-hover-transition":c(e?.commonBackgroundHoverTransition)+"s","--gkit-bg-border-transition":c(e?.commonBorderHoverTransition)+"s"},{selector:`.wp-block-gutenkit-container > .gkit-block__inner > .${d}.gkit-block-custom-wide`,"flex-shrink":`${e.containerFlexShrink}`},{selector:`.editor-styles-wrapper :is(.block-editor-block-list__layout.is-root-container, .block-editor-block-list__layout.gkit-mega-menu-wrapper, .block-editor-block-list__block) > :where(.${d}:hover), .gutenkit .${d}:hover, .wp-block-gutenkit-container > .gkit-block__inner > .${d}:hover`,background:n(e?.containerBackgroundHover).background,"box-shadow":i(e?.containerBoxShadowHover)},{selector:`.${d} > .gkit-container-overlay`,transition:`background ${e?.containerOverlayHoverTransitionDuration?.size}s`}],t=>[{selector:`.editor-styles-wrapper :is(.block-editor-block-list__layout.is-root-container, .block-editor-block-list__layout.gkit-mega-menu-wrapper, .block-editor-block-list__block) > :where(.${d}), .editor-styles-wrapper .block-editor-block-list__block.${d}, .gutenkit .${d}, .wp-block-gutenkit-container > .gkit-block__inner > .${d}`,background:e.enableBackgroundImageScroll?void 0:n(e.containerBackground,t).background,"background-size":e.enableBackgroundImageScroll?void 0:n(e.containerBackground,t).size,...l(e[`border${t}`]),...a(e[`containerBorderRadius${t}`],"border-radius")},{selector:`.editor-styles-wrapper :is(.block-editor-block-list__layout.is-root-container, .block-editor-block-list__layout.gkit-mega-menu-wrapper, .block-editor-block-list__block) :where(.${d} .gkit-image-scroll-layer), .gutenkit :where(.${d} .gkit-image-scroll-layer), .wp-block-gutenkit-container > .gkit-block__inner > .${d} .gkit-image-scroll-layer`,background:e.enableBackgroundImageScroll?n(e.containerBackground,t).background:void 0,"background-size":e.enableBackgroundImageScroll?n(e.containerBackground,t).size:void 0},{selector:`.editor-styles-wrapper :is(.block-editor-block-list__layout.is-root-container, .block-editor-block-list__layout.gkit-mega-menu-wrapper, .block-editor-block-list__block) > :where(.${d}), .gutenkit .${d}`,"max-width":"alignfull"==e.containerWidth?"none":"alignwide"==e.containerWidth?"1200px":"gkit-block-custom-wide"==e.containerWidth&&`${c(e[`customWidth${t}`])}`},{selector:`.wp-block-gutenkit-container > .gkit-block__inner > .${d}.gkit-block-custom-wide`,"flex-basis":c(e[`customWidth${t}`])},{selector:`.editor-styles-wrapper :is(.block-editor-block-list__layout.is-root-container, .block-editor-block-list__layout.gkit-mega-menu-wrapper, .block-editor-block-list__block) > :where(.${d}:hover), .gutenkit .${d}:hover, .wp-block-gutenkit-container > .gkit-block__inner > .${d}:hover`,...a(e[`containerBorderRadiusHover${t}`],"border-radius")},{selector:`.editor-styles-wrapper .block-editor-block-list__layout.is-root-container > :where(.${d}:hover), body .is-layout-constrained > :where(.${d}:hover), .wp-block-gutenkit-container > .gkit-block__inner > .${d}:hover`,...l(e[`borderHover${t}`])},{selector:`.${d} > .gkit-block__inner`,"min-height":c(e[`minHeight${t}`]),"flex-direction":e[`direction${t}`],"max-width":"boxed"===e.contentWidth&&c(e[`contentBoxWidth${t}`]),"justify-content":e[`justifyContent${t}`],"align-items":e[`alignItems${t}`],"column-gap":c(e[`columnGapBetween${t}`]),"row-gap":c(e[`rowGapBetween${t}`]),"flex-wrap":e[`wrap${t}`]},{selector:`.${d} > .gkit-container-overlay`,...s(e.containerBackgroundOverlay,t)},{selector:`.${d}:hover > .gkit-container-overlay`,...s(e.containerBackgroundHoverOverlay,t)},{selector:`.${d}.wp-block-gutenkit-container > .gkit-block__inner > .${d}`,"max-width":"alignfull"==e.containerWidth?"none":"alignwide"==e.containerWidth?"var(--wp--style--global--wide-size, 1200px)":"gkit-block-custom-wide"==e.containerWidth&&c(e[`customWidth${t}`])}]],t)})(e,_));return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(g,{blocksCSS:I}),d&&e?.variationSeleted&&(0,c.jsx)(b,{children:(0,c.jsx)(k,{attributes:e,setAttributes:t,device:x,advancedControl:l})}),(0,c.jsxs)(S,{...C,children:[!e?.variationSeleted&&W&&(0,c.jsx)(p,{onSelect:e=>{e.attributes&&t(e.attributes),e.innerBlocks&&"100"!==e.name?(t({variationSeleted:!0}),$(r,O(e.innerBlocks))):(t({variationSeleted:!0}),$(r,O([])))}}),"video"===e?.containerBackground?.backgroundType&&(0,c.jsx)("div",{className:"gkit-block-video-wrap",children:(0,c.jsx)("video",{loop:!0,autoPlay:!0,muted:!0,ref:B,children:(0,c.jsx)("source",{src:e?.containerBackground?.backgroundVideo?.url,type:e?.containerBackground?.backgroundVideo?.mime})})}),e?.variationSeleted&&e?.showContainerOverlay&&(0,c.jsx)("div",{className:"gkit-container-overlay"}),e?.enableBackgroundImageScroll&&(0,c.jsx)("div",{className:"gkit-image-scroll-container",children:(0,c.jsx)("div",{className:"gkit-image-scroll-layer"})}),e?.variationSeleted&&(0,c.jsx)("div",{...E}),"gkit-block-custom-wide"==e?.containerWidth&&(0,c.jsx)(c.Fragment,{children:e?.variationSeleted?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(u,{showHandle:d,className:"gkit-container-resize-handler gkit-container-resize-handler-right",currentWidth:v(e,"customWidth",x),responsiveHelper:w,device:x,setAttributes:t,isParent:W}),(0,c.jsx)(u,{showHandle:d,className:"gkit-container-resize-handler gkit-container-resize-handler-left",currentWidth:v(e,"customWidth",x),responsiveHelper:w,device:x,setAttributes:t,isParent:W})]}):null})]})]})},save:function({attributes:e}){const t=n.useBlockProps.save({className:s()([e?.containerWidth])}),r=n.useInnerBlocksProps.save();r.className="gkit-block__inner";const o=`${e?.htmlTag}`;if(e?.variationSeleted)return(0,c.jsxs)(o,{...t,children:["video"===e?.containerBackground?.backgroundType&&(0,c.jsx)("div",{className:"gkit-block-video-wrap",children:(0,c.jsx)("video",{loop:!0,autoPlay:!0,muted:!0,children:(0,c.jsx)("source",{src:e?.containerBackground?.backgroundVideo?.url,type:e?.containerBackground?.backgroundVideo?.mime})})}),e?.showContainerOverlay&&(0,c.jsx)("div",{className:"gkit-container-overlay"}),e?.enableBackgroundImageScroll&&(0,c.jsx)("div",{className:"gkit-image-scroll-container",children:(0,c.jsx)("div",{className:"gkit-image-scroll-layer"})}),(0,c.jsx)("div",{...r})]})},transforms:p})},790:e=>{"use strict";e.exports=window.ReactJSXRuntime},6427:e=>{"use strict";e.exports=window.wp.components},6087:e=>{"use strict";e.exports=window.wp.element},2619:e=>{"use strict";e.exports=window.wp.hooks},7723:e=>{"use strict";e.exports=window.wp.i18n},5573:e=>{"use strict";e.exports=window.wp.primitives},6942:(e,t)=>{var r;!function(){"use strict";var o={}.hasOwnProperty;function n(){for(var e="",t=0;t<arguments.length;t++){var r=arguments[t];r&&(e=a(e,i(r)))}return e}function i(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return n.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var r in e)o.call(e,r)&&e[r]&&(t=a(t,r));return t}function a(e,t){return t?e?e+" "+t:e+t:e}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(t,[]))||(e.exports=r)}()}},n={};function i(e){var t=n[e];if(void 0!==t)return t.exports;var r=n[e]={exports:{}};return o[e](r,r.exports,i),r.exports}i.m=o,e=[],i.O=(t,r,o,n)=>{if(!r){var a=1/0;for(d=0;d<e.length;d++){r=e[d][0],o=e[d][1],n=e[d][2];for(var l=!0,s=0;s<r.length;s++)(!1&n||a>=n)&&Object.keys(i.O).every((e=>i.O[e](r[s])))?r.splice(s--,1):(l=!1,n<a&&(a=n));if(l){e.splice(d--,1);var c=o();void 0!==c&&(t=c)}}return t}n=n||0;for(var d=e.length;d>0&&e[d-1][2]>n;d--)e[d]=e[d-1];e[d]=[r,o,n]},i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((t,r)=>(i.f[r](e,t),t)),[])),i.u=e=>e+".js",i.miniCssF=e=>{},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),t={},r="gutenkit-blocks-addon:",i.l=(e,o,n,a)=>{if(t[e])t[e].push(o);else{var l,s;if(void 0!==n)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var u=c[d];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==r+n){l=u;break}}l||(s=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.setAttribute("data-webpack",r+n),l.src=e),t[e]=[o];var k=(r,o)=>{l.onerror=l.onload=null,clearTimeout(g);var n=t[e];if(delete t[e],l.parentNode&&l.parentNode.removeChild(l),n&&n.forEach((e=>e(o))),r)return r(o)},g=setTimeout(k.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=k.bind(null,l.onerror),l.onload=k.bind(null,l.onload),s&&document.head.appendChild(l)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;i.g.importScripts&&(e=i.g.location+"");var t=i.g.document;if(!e&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!e||!/^http(s?):/.test(e));)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e+"../../"})(),(()=>{var e={4184:0,4992:0};i.f.j=(t,r)=>{var o=i.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else if(4992!=t){var n=new Promise(((r,n)=>o=e[t]=[r,n]));r.push(o[2]=n);var a=i.p+i.u(t),l=new Error;i.l(a,(r=>{if(i.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var n=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;l.message="Loading chunk "+t+" failed.\n("+n+": "+a+")",l.name="ChunkLoadError",l.type=n,l.request=a,o[1](l)}}),"chunk-"+t,t)}else e[t]=0},i.O.j=t=>0===e[t];var t=(t,r)=>{var o,n,a=r[0],l=r[1],s=r[2],c=0;if(a.some((t=>0!==e[t]))){for(o in l)i.o(l,o)&&(i.m[o]=l[o]);if(s)var d=s(i)}for(t&&t(r);c<a.length;c++)n=a[c],i.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return i.O(d)},r=self.webpackChunkgutenkit_blocks_addon=self.webpackChunkgutenkit_blocks_addon||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var a=i.O(void 0,[4992],(()=>i(268)));a=i.O(a)})();