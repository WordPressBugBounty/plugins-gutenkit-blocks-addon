(()=>{var t,e,i,a={8857:(t,e,i)=>{"use strict";const a=window.wp.blocks,n=window.wp.blockEditor;var r=i(6087);const o=window.wp.compose;var l=i(6942),s=i.n(l),c=i(7723);const d=window.wp.data;var g=i(790);const k=(0,r.lazy)((()=>i.e(4672).then(i.bind(i,4672)))),v=JSON.parse('{"UU":"gutenkit/advanced-tab"}'),{advancedTab:b}=window.gutenkit.editorIcon;(0,a.registerBlockType)(v.UU,{edit:function({attributes:t,setAttributes:e,clientId:i,advancedControl:l,isSelected:v}){const{GkitStyle:b,GkitIcon:u,GkitSuspense:p}=window.gutenkit.components,{useDeviceType:m,useBlockStyles:f,useDeviceList:h}=window.gutenkit.helpers,$=h(),{tabContents:w,enableFullWidth:y,navPosition:x,style:B,enableCaret:C,eventType:S,enableURLHash:I}=t,T=m(),j=(0,r.useRef)(null),_=(0,n.useBlockProps)({ref:(0,o.useMergeRefs)([j])}),A=w.map((()=>["gutenkit/advanced-tab-item"])),[N,P]=(0,r.useState)(!0),[O,R]=(0,r.useState)(w),[L,E]=(0,r.useState)(),H=w.map(((t,e)=>({...t,id:`${i}-tab-${e}`}))),W={className:s()("gkit-tab-wraper",{"gkit-fitcontent-tab":!y||"vertical"===x},[x])},F={className:s()("gkit-tab-nav",{[B]:C},{"gkit-tab-nav--fullwidth":y&&"horizontal"===x})},G=(0,n.useInnerBlocksProps)({className:"tab-content gkit-tab-content"},{renderAppender:!1,templateLock:"all",template:A});(0,r.useEffect)((()=>{if(N)P(!1);else{const t=(0,d.select)("core/block-editor").getBlocks(i);if(R(w),O.length!==w.length){let e=-1;for(let t=0;t<O.length;t++){const i=O[t].title;if(w.every((t=>t.title!==i))){e=t;break}}if(-1!==e)t.splice(e,1),(0,d.dispatch)("core/block-editor").replaceInnerBlocks(i,t);else{const e=(0,a.createBlock)("gutenkit/advanced-tab-item");t.splice(t.length,0,e),(0,d.dispatch)("core/block-editor").replaceInnerBlocks(i,t)}}else{const e=[],a=[];for(let i=0;i<w.length;i++){const n=O.findIndex((t=>t.id===H[i].id));a[i]=t[n],n!==i&&-1!==n&&e.push({from:i,to:n})}if(e.length>0){const t=j.current.querySelectorAll(".gkit-nav-link");let e=0;for(let i=0;i<t.length;i++)if(t[i].classList.contains("active")){e=i;break}a.map(((t,e)=>{t.attributes.blockClass=t.attributes.blockClass.replace("active","")})),a[e].attributes.blockClass=s()(a[e].attributes.blockClass,"active"),(0,d.dispatch)("core/block-editor").replaceInnerBlocks(i,a)}}}}),[w]),(0,r.useEffect)((()=>{"background_slide_style"===B&&((t,e)=>{let i,a;t?(i=t?.target.closest(".gkit-nav-link"),a=i?.closest(".gkit-tab-nav")):(i=e.querySelector(".gkit-nav-link.active"),a=i?.closest(".gkit-tab-nav")),(()=>{const{offsetWidth:t,offsetLeft:e,offsetHeight:n,offsetTop:r}=i;a.style.setProperty("--left",`${e}px`),a.style.setProperty("--width",`${t}px`),a.style.setProperty("--top",`${r}px`),a.style.setProperty("--height",`${n}px`)})()})(L,j.current)}),[L,t]);const D=(t,i,a)=>{const n=JSON.parse(JSON.stringify(w));n[t][i]=a,e({tabContents:n})},U=(t,i)=>{E(t),e({activeIndex:i})},J=f(t,e,"blocksCSS",((t,e)=>{const{parseCSS:i,backgroundGenerator:a,getBoxValue:n,getSliderValue:r,getBorderValue:o,getTypographyValue:l,getBoxShadowValue:s,getColor:c}=window.gutenkit.helpers,d=t?.blockClass;return i([[{selector:`.${d} .gkit-tab-wraper .gkit-tab-nav .gkit-nav-item .gkit-nav-link`,"flex-direction":t?.itemPosition},{selector:`.${d} .gkit-tab-nav .gkit-nav-item .gkit-nav-link`,color:c(t?.titleColor),background:a(t?.navItemBackground).background,...o(t.navItemBorder),"box-shadow":s(t.navItemBoxShadow)},{selector:`.${d} .gkit-tab-nav .gkit-nav-item .gkit-nav-link .gkit-tab-sub-title`,color:c(t?.subTitleColor)},{selector:`.${d} .gkit-tab-nav .gkit-nav-item .gkit-nav-link:hover .gkit-tab-sub-title`,color:c(t?.subTitleHoverColor)},{selector:`.${d} .gkit-tab-nav .gkit-nav-item .gkit-nav-link.active .gkit-tab-sub-title`,color:c(t?.subTitleActiveColor)},{selector:`.${d} .gkit-tab-nav .gkit-nav-item .gkit-nav-link:hover`,color:c(t?.titleHoverColor),background:a(t?.navItemHoverBackground).background,...o(t.navItemHoverBorder),"box-shadow":s(t.navItemHoverBoxShadow)},{selector:`.${d} .gkit-tab-nav .gkit-nav-item .gkit-nav-link.active`,color:c(t?.titleActiveColor),background:a(t?.navItemActiveBackground).background,...o(t.navItemActiveBorder),"box-shadow":s("background_slide_style"!==t?.style?t.navItemActiveBoxShadow:null)},{selector:`.${d} .gkit-tab-wraper .gkit-nav-link .gkit-tab-icon`,fill:c(t?.iconColor)},{selector:`.${d} .gkit-tab-wraper .gkit-nav-link.active .gkit-tab-icon`,fill:c(t?.iconActiveColor)},{selector:`.${d} .gkit-tab-wraper .gkit-nav-link:not(.active):hover .gkit-tab-icon`,fill:c(t?.iconHoverColor)},{selector:`.${d} .gkit-tab-wraper.gkit-fitcontent-tab:not(.vertical)`,"text-align":t.navWrapperAlign},{selector:`.${d} .gkit-tab-nav`,background:a(t?.navBackground).background,"box-shadow":s(t.navBoxShadow),...o(t.navBorder)},{selector:`.${d} .gkit-tab-content`,overflow:t?.bodyOverflow},{selector:`.${d} .gkit-tab-content .gkit-tab-pane`,background:a(t?.bodyBackground).background,"box-shadow":s(t.bodyBoxShadow),...o(t.bodyBorder)},{selector:`.${d} .gkit-tab-nav.border_bottom .gkit-nav-item .gkit-nav-link::before, .${d} .tooltip_style.gkit-tab-nav .gkit-nav-item .gkit-nav-link::before, .${d} .progress_style.gkit-tab-nav .gkit-nav-item .gkit-nav-link::before, .${d} .gkit-tab-nav.ribbon_style .gkit-nav-item .gkit-nav-link::before, .${d} .gkit-tab-nav.progress_style .gkit-nav-item .gkit-nav-link::after`,background:a(t?.caretBackground).background},{selector:`.${d} .gkit-tab-nav.heartbit_style .gkit-nav-item .gkit-nav-link::after`,"border-color":c(t?.caretColor),"--gradient-color":c(t?.caretFillColor)},{selector:`.${d} .gkit-tab-nav.background_slide_style:after `,background:a(t?.navItemActiveBackground).background?a(t?.navItemActiveBackground).background:"#39bcd3","box-shadow":s(t.navItemActiveBoxShadow),...o(t.navItemActiveBorder)},{selector:`.${d} .gkit-tab-nav.background_slide_style .gkit-nav-item .active`,background:"transparent"}],e=>[{selector:`.${d} .gkit-tab-wraper`,"flex-direction":t[`navDirection${e}`],"align-items":t[`navWrapperAlignItems${e}`]},{selector:`.${d} .gkit-tab-wraper .gkit-nav-link .gkit-tab-icon`,"font-size":r(t[`iconSize${e}`])},{selector:`.${d} .gkit-tab-nav .gkit-nav-item .gkit-nav-link`,gap:r(t[`iconSpacing${e}`])},{selector:`.${d} .gkit-tab-nav .gkit-nav-item .gkit-tab-sub-title`,"text-align":t[`subTitleAlign${e}`]},{selector:`.${d} .gkit-tab-nav`,...n(t[`navPadding${e}`],"padding"),...n(t[`navMargin${e}`],"margin"),...n(t[`navItemBorderRadius${e}`],"border-radius"),"flex-direction":"row"===t[`navDirection${e}`]||"row-reverse"===t[`navDirection${e}`]?"column":"row","justify-content":t[`navJustify${e}`],"flex-basis":r(t[`navWidthVertical${e}`]),gap:r(t[`navItemGap${e}`]),...n(t[`navBorderRadius${e}`],"border-radius")},{selector:`.${d} .gkit-tab-nav .gkit-nav-item`,"flex-grow":"stretch"===t[`navDirection${e}`]?1:0},{selector:`.${d} .gkit-tab-nav .gkit-nav-item .gkit-nav-link`,...n(t[`navItemBorderRadius${e}`],"border-radius"),...n(t[`navItemPadding${e}`],"padding"),"justify-content":t[`navItemAlign${e}`]},{selector:`.${d} .gkit-tab-nav .gkit-nav-item .gkit-nav-link .gkit-tab-title`,...l(t.navItemTypographyGroup,e)},{selector:`.${d} .gkit-tab-nav .gkit-nav-item .gkit-nav-link .gkit-tab-sub-title`,...l(t.subTitleTypographyGroup,e)},{selector:`.${d} .gkit-tab-nav .gkit-nav-item .gkit-nav-link.active`,...n(t[`navItemActiveBorderRadius${e}`],"border-radius")},{selector:`.${d} .gkit-tab-nav .gkit-nav-item .gkit-nav-link:hover`,...n(t[`navItemHoverBorderRadius${e}`],"border-radius")},{selector:`.${d} .gkit-tab-content .gkit-tab-pane`,...n(t[`bodyPadding${e}`],"padding"),...n(t[`bodyBorderRadius${e}`],"border-radius"),"text-align":t[`contentAlign${e}`],"justify-content":t[`contentAlign${e}`],"align-items":t[`contentJustify${e}`]},{selector:`.${d} .gkit-tab-nav.border_bottom .gkit-nav-item .gkit-nav-link::before, .${d} .tooltip_style.gkit-tab-nav .gkit-nav-item .gkit-nav-link::before, .${d} .gkit-tab-nav.heartbit_style .gkit-nav-item .gkit-nav-link::after, .${d} .progress_style.gkit-tab-nav .gkit-nav-item .gkit-nav-link::before, .${d} .gkit-tab-nav.ribbon_style .gkit-nav-item .gkit-nav-link::before`,width:r(t[`caretWidth${e}`]),height:r(t[`caretHeight${e}`]),bottom:r(t[`caretBottomPosition${e}`]),left:r(t[`caretLeftPosition${e}`])},{selector:`.${d} .gkit-tab-nav .gkit-nav-item:first-child .gkit-nav-link`,...n(t[`navItemFirstChildBorderWidth${e}`],"border-width"),...n(t[`navItemFirstChildBorderRadius${e}`],"border-radius")},{selector:`.${d} .gkit-tab-nav .gkit-nav-item:last-child .gkit-nav-link`,...n(t[`navItemLaststChildBorderWidth${e}`],"border-width"),...n(t[`navItemLaststChildBorderRadius${e}`],"border-radius")},{selector:`.${d} .gkit-tab-nav.background_slide_style:after `,...n(t[`navItemActiveBorderRadius${e}`],"border-radius"),transition:t.enableCaret&&`all ${r(t[`gkitAdvTabBgTransition${e}`])}s ease-in-out`}]],e)})(t,$));return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(b,{blocksCSS:J}),v&&(0,g.jsx)(p,{children:(0,g.jsx)(k,{attributes:t,setAttributes:e,device:T,advancedControl:l})}),(0,g.jsx)("div",{..._,children:(0,g.jsxs)("div",{...W,"data-event":S,"data-url":I,children:[(0,g.jsx)("ul",{...F,children:w.map(((e,i)=>{const a=i===t?.activeIndex?"active":"",r=e?.title?.trim().length?`#${e.title.toLowerCase().replace(/\s+/g,"-")}`:"";let o={};return"click"===t.eventType?o.onClick=t=>U(t,i):o.onMouseEnter=t=>U(t,i),(0,g.jsx)("li",{className:"gkit-nav-item",children:(0,g.jsxs)("a",{className:`gkit-nav-link ${a}`,id:`gkit-tab-${i}`,"data-hash":r,...o,children:[e.addIcon&&(0,g.jsx)(u,{icon:e.icon,className:"gkit-tab-icon",tagName:"span"}),(0,g.jsx)(n.RichText,{identifier:`title-${i}`,tagName:"span",value:e?.title,onChange:t=>D(i,"title",t),placeholder:(0,c.__)("Title","gutenkit-blocks-addon"),className:"gkit-tab-title"}),e.addSubTitle&&(0,g.jsx)(n.RichText,{identifier:`sub-title-${i}`,tagName:"p",value:e?.subTitle,onChange:t=>D(i,"subTitle",t),placeholder:(0,c.__)("Sub Title","gutenkit"),className:"gkit-tab-sub-title"})]})},i)}))}),(0,g.jsx)("div",{...G})]})})]})},icon:{src:b},save:function({attributes:t}){const{tabContents:e,enableFullWidth:i,navPosition:a,style:r,enableCaret:o,eventType:l,enableURLHash:c,blockID:d}=t,{GkitIcon:k}=window.gutenkit.components,v=n.useBlockProps.save(),b=n.useInnerBlocksProps.save({className:"tab-content gkit-tab-content"}),u={className:s()("gkit-tab-wraper",{"gkit-fitcontent-tab":!i||"vertical"===a},[a])},p={className:s()("gkit-tab-nav",{[r]:o},{"gkit-tab-nav--fullwidth":i&&"horizontal"===a})};return(0,g.jsx)("div",{...v,children:(0,g.jsxs)("div",{...u,"data-event":l,"data-url":c,children:[(0,g.jsx)("ul",{...p,children:e.map(((t,e)=>{const i=0===e?"active":"",a=t?.title?.trim().length?`#${t.title.toLowerCase().replace(/\s+/g,"-")}`:"";return(0,g.jsx)("li",{className:"gkit-nav-item",children:(0,g.jsxs)("a",{className:`gkit-nav-link ${i}`,id:`gkit-tab-${e}`,"data-hash":a,children:[t.addIcon&&(0,g.jsx)(k,{icon:t.icon,className:"gkit-tab-icon",tagName:"span"}),(0,g.jsx)(n.RichText.Content,{identifier:`title-${e}`,tagName:"span",value:t?.title,className:"gkit-tab-title"}),t.addSubTitle&&(0,g.jsx)(n.RichText.Content,{identifier:`sub-title-${e}`,tagName:"p",value:t?.subTitle,className:"gkit-tab-sub-title"})]})},e)}))}),(0,g.jsx)("div",{...b})]})})}})},790:t=>{"use strict";t.exports=window.ReactJSXRuntime},6427:t=>{"use strict";t.exports=window.wp.components},6087:t=>{"use strict";t.exports=window.wp.element},7723:t=>{"use strict";t.exports=window.wp.i18n},5573:t=>{"use strict";t.exports=window.wp.primitives},6942:(t,e)=>{var i;!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var t="",e=0;e<arguments.length;e++){var i=arguments[e];i&&(t=o(t,r(i)))}return t}function r(t){if("string"==typeof t||"number"==typeof t)return t;if("object"!=typeof t)return"";if(Array.isArray(t))return n.apply(null,t);if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]"))return t.toString();var e="";for(var i in t)a.call(t,i)&&t[i]&&(e=o(e,i));return e}function o(t,e){return e?t?t+" "+e:t+e:t}t.exports?(n.default=n,t.exports=n):void 0===(i=function(){return n}.apply(e,[]))||(t.exports=i)}()}},n={};function r(t){var e=n[t];if(void 0!==e)return e.exports;var i=n[t]={exports:{}};return a[t](i,i.exports,r),i.exports}r.m=a,t=[],r.O=(e,i,a,n)=>{if(!i){var o=1/0;for(d=0;d<t.length;d++){for(var[i,a,n]=t[d],l=!0,s=0;s<i.length;s++)(!1&n||o>=n)&&Object.keys(r.O).every((t=>r.O[t](i[s])))?i.splice(s--,1):(l=!1,n<o&&(o=n));if(l){t.splice(d--,1);var c=a();void 0!==c&&(e=c)}}return e}n=n||0;for(var d=t.length;d>0&&t[d-1][2]>n;d--)t[d]=t[d-1];t[d]=[i,a,n]},r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var i in e)r.o(e,i)&&!r.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},r.f={},r.e=t=>Promise.all(Object.keys(r.f).reduce(((e,i)=>(r.f[i](t,e),e)),[])),r.u=t=>t+".js",r.miniCssF=t=>{},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),e={},i="gutenkit-blocks-addon:",r.l=(t,a,n,o)=>{if(e[t])e[t].push(a);else{var l,s;if(void 0!==n)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var g=c[d];if(g.getAttribute("src")==t||g.getAttribute("data-webpack")==i+n){l=g;break}}l||(s=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.setAttribute("data-webpack",i+n),l.src=t),e[t]=[a];var k=(i,a)=>{l.onerror=l.onload=null,clearTimeout(v);var n=e[t];if(delete e[t],l.parentNode&&l.parentNode.removeChild(l),n&&n.forEach((t=>t(a))),i)return i(a)},v=setTimeout(k.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=k.bind(null,l.onerror),l.onload=k.bind(null,l.onload),s&&document.head.appendChild(l)}},r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{var t;r.g.importScripts&&(t=r.g.location+"");var e=r.g.document;if(!t&&e&&(e.currentScript&&"SCRIPT"===e.currentScript.tagName.toUpperCase()&&(t=e.currentScript.src),!t)){var i=e.getElementsByTagName("script");if(i.length)for(var a=i.length-1;a>-1&&(!t||!/^http(s?):/.test(t));)t=i[a--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=t+"../../"})(),(()=>{var t={25:0,2317:0};r.f.j=(e,i)=>{var a=r.o(t,e)?t[e]:void 0;if(0!==a)if(a)i.push(a[2]);else if(2317!=e){var n=new Promise(((i,n)=>a=t[e]=[i,n]));i.push(a[2]=n);var o=r.p+r.u(e),l=new Error;r.l(o,(i=>{if(r.o(t,e)&&(0!==(a=t[e])&&(t[e]=void 0),a)){var n=i&&("load"===i.type?"missing":i.type),o=i&&i.target&&i.target.src;l.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",l.name="ChunkLoadError",l.type=n,l.request=o,a[1](l)}}),"chunk-"+e,e)}else t[e]=0},r.O.j=e=>0===t[e];var e=(e,i)=>{var a,n,[o,l,s]=i,c=0;if(o.some((e=>0!==t[e]))){for(a in l)r.o(l,a)&&(r.m[a]=l[a]);if(s)var d=s(r)}for(e&&e(i);c<o.length;c++)n=o[c],r.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return r.O(d)},i=globalThis.webpackChunkgutenkit_blocks_addon=globalThis.webpackChunkgutenkit_blocks_addon||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))})();var o=r.O(void 0,[2317],(()=>r(8857)));o=r.O(o)})();