(()=>{var e,t,o,a,l={6942:(e,t)=>{var o;!function(){"use strict";var a={}.hasOwnProperty;function l(){for(var e="",t=0;t<arguments.length;t++){var o=arguments[t];o&&(e=i(e,n(o)))}return e}function n(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return l.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var o in e)a.call(e,o)&&e[o]&&(t=i(t,o));return t}function i(e,t){return t?e?e+" "+t:e+t:e}e.exports?(l.default=l,e.exports=l):void 0===(o=function(){return l}.apply(t,[]))||(e.exports=o)}()}},n={};function i(e){var t=n[e];if(void 0!==t)return t.exports;var o=n[e]={exports:{}};return l[e](o,o.exports,i),o.exports}i.m=l,i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,i.t=function(o,a){if(1&a&&(o=this(o)),8&a)return o;if("object"==typeof o&&o){if(4&a&&o.__esModule)return o;if(16&a&&"function"==typeof o.then)return o}var l=Object.create(null);i.r(l);var n={};e=e||[null,t({}),t([]),t(t)];for(var r=2&a&&o;"object"==typeof r&&!~e.indexOf(r);r=t(r))Object.getOwnPropertyNames(r).forEach((e=>n[e]=()=>o[e]));return n.default=()=>o,i.d(l,n),l},i.d=(e,t)=>{for(var o in t)i.o(t,o)&&!i.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((t,o)=>(i.f[o](e,t),t)),[])),i.u=e=>e+".js",i.miniCssF=e=>{},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o={},a="gutenkit-blocks-addon:",i.l=(e,t,l,n)=>{if(o[e])o[e].push(t);else{var r,c;if(void 0!==l)for(var s=document.getElementsByTagName("script"),u=0;u<s.length;u++){var p=s[u];if(p.getAttribute("src")==e||p.getAttribute("data-webpack")==a+l){r=p;break}}r||(c=!0,(r=document.createElement("script")).charset="utf-8",r.timeout=120,i.nc&&r.setAttribute("nonce",i.nc),r.setAttribute("data-webpack",a+l),r.src=e),o[e]=[t];var d=(t,a)=>{r.onerror=r.onload=null,clearTimeout(b);var l=o[e];if(delete o[e],r.parentNode&&r.parentNode.removeChild(r),l&&l.forEach((e=>e(a))),t)return t(a)},b=setTimeout(d.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=d.bind(null,r.onerror),r.onload=d.bind(null,r.onload),c&&document.head.appendChild(r)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;i.g.importScripts&&(e=i.g.location+"");var t=i.g.document;if(!e&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");if(o.length)for(var a=o.length-1;a>-1&&(!e||!/^http(s?):/.test(e));)e=o[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e+"../"})(),(()=>{var e={5126:0};i.f.j=(t,o)=>{var a=i.o(e,t)?e[t]:void 0;if(0!==a)if(a)o.push(a[2]);else{var l=new Promise(((o,l)=>a=e[t]=[o,l]));o.push(a[2]=l);var n=i.p+i.u(t),r=new Error;i.l(n,(o=>{if(i.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var l=o&&("load"===o.type?"missing":o.type),n=o&&o.target&&o.target.src;r.message="Loading chunk "+t+" failed.\n("+l+": "+n+")",r.name="ChunkLoadError",r.type=l,r.request=n,a[1](r)}}),"chunk-"+t,t)}};var t=(t,o)=>{var a,l,n=o[0],r=o[1],c=o[2],s=0;if(n.some((t=>0!==e[t]))){for(a in r)i.o(r,a)&&(i.m[a]=r[a]);c&&c(i)}for(t&&t(o);s<n.length;s++)l=n[s],i.o(e,l)&&e[l]&&e[l][0](),e[l]=0},o=self.webpackChunkgutenkit_blocks_addon=self.webpackChunkgutenkit_blocks_addon||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})(),(()=>{"use strict";const e=window.wp.domReady;var t=i.n(e);const o=window.wp.hooks,a=window.wp.compose,l=window.wp.i18n,n=window.wp.element,r=window.wp.blockEditor,c=window.wp.data,s=window.wp.components,u=(0,n.memo)((({children:e})=>e)),p=(0,s.withFilters)("gutenkit.motionEffects.after-tab")(u),d=window.wp.primitives,b=window.ReactJSXRuntime,m=(0,b.jsx)(d.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,b.jsx)(d.Path,{d:"M20 11.2H6.8l3.7-3.7-1-1L3.9 12l5.6 5.5 1-1-3.7-3.7H20z"})}),y=(0,b.jsx)(d.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,b.jsx)(d.Path,{d:"m14.5 6.5-1 1 3.7 3.7H4v1.6h13.2l-3.7 3.7 1 1 5.6-5.5z"})}),g=(0,b.jsx)(d.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,b.jsx)(d.Path,{d:"M12 3.9 6.5 9.5l1 1 3.8-3.7V20h1.5V6.8l3.7 3.7 1-1z"})}),v=(0,b.jsx)(d.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,b.jsx)(d.Path,{d:"m16.5 13.5-3.7 3.7V4h-1.5v13.2l-3.8-3.7-1 1 5.5 5.6 5.5-5.6z"})}),k=[{color:"#72aee6",name:"Blue 20"},{color:"#3582c4",name:"Blue 40"},{color:"#e65054",name:"Red 40"},{color:"#8a2424",name:"Red 70"}],f=(0,n.memo)((e=>{const{attributes:t,clientId:a,setAttributes:n,name:i}=e,{modules:r,components:c,helpers:u}=window.gutenkit,{useHasProActive:d,useDeviceType:f,gkitResponsiveValue:h,responsiveHelper:j}=u,S=d(),{GkitResponsive:w,GkitBackgrounGroup:x,GkitTabs:T,GkitPanelBody:P,GkitSlider:B,GkitChoose:_,GkitBoxShadow:H,GkitBoxControl:M,GkitBorderControl:L,GkitSelect:D,GkitProSwitcherNotice:C}=c,O=f(),z=(0,o.applyFilters)("gutenkit.advancedControl.background.exclude",new Set([])),A=(0,o.applyFilters)("gutenkit.advancedControl.position.exclude",new Set([])),I=(0,o.applyFilters)("gutenkit.advancedControl.border.exclude",new Set([])),R=(0,o.applyFilters)("gutenkit.advancedControl.width.exclude",new Set([])),W=(0,o.applyFilters)("gutenkit.advancedControl.motion-effect.exclude",new Set([])),E=(0,o.applyFilters)("gutenkit.advancedControl.layout.exclude",new Set([]));return(0,b.jsxs)(b.Fragment,{children:[!E.has(i)&&(0,b.jsxs)(P,{title:(0,l.__)("Layout","gutenkit-blocks-addon"),initialOpen:!0,children:[(0,b.jsx)(w,{children:(0,b.jsx)(M,{label:(0,l.__)("Margin","gutenkit-blocks-addon"),values:h(t,"commonMargin",O),onChange:e=>j("commonMargin",e,O,n)})}),(0,b.jsx)(w,{children:(0,b.jsx)(M,{label:(0,l.__)("Padding","gutenkit-blocks-addon"),values:h(t,"commonPadding",O),onChange:e=>j("commonPadding",e,O,n)})}),!R.has(i)&&(0,b.jsx)(b.Fragment,{children:(0,b.jsxs)(w,{children:[(0,b.jsx)(D,{label:(0,l.__)("Width","gutenkit-blocks-addon"),value:h(t,"commonwidthType",O),options:[{label:"Default",value:"default"},{label:"Full Width",value:"full"},{label:"Inline(auto)",value:"auto"},{label:"Custom",value:"custom"}],onChange:e=>j("commonwidthType",e,O,n),__nextHasNoMarginBottom:!0}),"custom"===h(t,"commonwidthType",O)&&(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(w,{children:(0,b.jsx)(B,{label:(0,l.__)("Custom Width","gutenkit-blocks-addon"),value:h(t,"commonCustomWidth",O),sizeUnits:["px","%","vw"],onChange:e=>j("commonCustomWidth",e,O,n),range:{min:0,max:1e3}})})})]})}),(0,b.jsx)(s.__experimentalDivider,{}),(0,b.jsx)(w,{children:(0,b.jsx)(s.RangeControl,{label:(0,l.__)("Z-Index","gutenkit-blocks-addon"),className:"gutenkit-range__slider",value:h(t,"commonZindex",O),max:9999,min:0,onChange:e=>j("commonZindex",e,O,n)})})]}),!A.has(i)&&(0,b.jsxs)(P,{title:(0,l.__)("Position","gutenkit-blocks-addon"),initialOpen:!1,children:[(0,b.jsx)(D,{label:(0,l.__)("Position","gutenkit-blocks-addon"),value:t?.commonPosition,options:[{label:"Default",value:"relative"},{label:"Absolute",value:"absolute"},{label:"Fixed",value:"fixed"}],onChange:e=>n({commonPosition:e}),__nextHasNoMarginBottom:!0}),"relative"!==t?.commonPosition&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(_,{label:(0,l.__)("Horizontal Orientation","gutenkit-blocks-addon"),value:t?.commonHorizontalOrientation,options:[{label:"Left",value:"left",icon:m},{label:"Right",value:"right",icon:y}],onChange:e=>{n({commonHorizontalOrientation:e})},isToggle:!1}),(0,b.jsx)(w,{children:(0,b.jsx)(B,{label:(0,l.__)("Offset","gutenkit-blocks-addon"),value:h(t,"commonHorizontalOffset",O),sizeUnits:["px","%","vw"],onChange:e=>j("commonHorizontalOffset",e,O,n),range:{min:-1e3,max:1e3}})}),(0,b.jsx)(_,{label:(0,l.__)("Vertical Orientation","gutenkit-blocks-addon"),value:t?.commonVerticalOrientation,options:[{label:"Top",value:"top",icon:g},{label:"Bottom",value:"bottom",icon:v}],onChange:e=>{n({commonVerticalOrientation:e})},isToggle:!1}),(0,b.jsx)(w,{children:(0,b.jsx)(B,{label:(0,l.__)("Offset","gutenkit-blocks-addon"),value:h(t,"commonVerticalOffset",O),sizeUnits:["px","%","vh"],onChange:e=>j("commonVerticalOffset",e,O,n),range:{min:-1e3,max:1e3}})})]})]}),!z.has(i)&&(0,b.jsx)(P,{title:(0,l.__)("Background","gutenkit-blocks-addon"),initialOpen:!1,children:(0,b.jsx)(T,{type:"normal",tabs:[{name:"normal",title:(0,l.__)("Normal","gutenkit-blocks-addon")},{name:"hover",title:(0,l.__)("Hover","gutenkit-blocks-addon")}],children:e=>"normal"===e.name?(0,b.jsx)(x,{label:(0,l.__)("Background","gutenkit-blocks-addon"),value:t?.commonBackground,onChange:e=>n({commonBackground:e}),exclude:{video:!0}}):"hover"===e.name?(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(x,{label:(0,l.__)("Background","gutenkit-blocks-addon"),value:t?.commonHoverBackground,onChange:e=>n({commonHoverBackground:e}),exclude:{video:!0}}),(0,b.jsx)(B,{label:(0,l.__)("Transition Duration","gutenkit-blocks-addon"),value:t?.commonBackgroundHoverTransition,onChange:e=>n({commonBackgroundHoverTransition:e}),range:{min:0,max:3,step:.1}})]}):void 0})}),!I.has(i)&&(0,b.jsx)(P,{title:(0,l.__)("Border","gutenkit-blocks-addon"),initialOpen:!1,children:(0,b.jsx)(T,{type:"normal",tabs:[{name:"normal",title:(0,l.__)("Normal","gutenkit-blocks-addon")},{name:"hover",title:(0,l.__)("Hover","gutenkit-blocks-addon")}],children:e=>"normal"===e.name?(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(L,{label:(0,l.__)("Border"),colors:k,onChange:e=>n({commonBorder:e}),value:t?.commonBorder}),(0,b.jsx)(w,{children:(0,b.jsx)(M,{label:(0,l.__)("Border Radius","gutenkit-blocks-addon"),values:h(t,"commonBorderRadius",O),onChange:e=>j("commonBorderRadius",e,O,n)})}),(0,b.jsx)(H,{label:(0,l.__)("Box Shadow","gutenkit-blocks-addon"),value:t?.commonBoxShadow,onChange:e=>n({commonBoxShadow:e})})]}):"hover"===e.name?(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(L,{label:(0,l.__)("Border"),onChange:e=>n({commonHoverBorder:e}),value:t?.commonHoverBorder}),(0,b.jsx)(w,{children:(0,b.jsx)(M,{label:(0,l.__)("Border Radius","gutenkit-blocks-addon"),values:h(t,"commonHoverBorderRadius",O),onChange:e=>j("commonHoverBorderRadius",e,O,n)})}),(0,b.jsx)(H,{label:(0,l.__)("Box Shadow","gutenkit-blocks-addon"),value:t?.commonHoverBoxShadow,onChange:e=>n({commonHoverBoxShadow:e})}),(0,b.jsx)(B,{label:(0,l.__)("Transition Duration","gutenkit-blocks-addon"),value:t?.commonBorderHoverTransition,onChange:e=>n({commonBorderHoverTransition:e}),range:{min:0,max:3,step:.1}})]}):void 0})}),!W.has(i)&&(r.hasOwnProperty("scrolling-effect")||r.hasOwnProperty("mouse-tilt")||r.hasOwnProperty("entrance-animation"))&&(0,b.jsxs)(P,{title:(0,l.__)("Motion Effects","gutenkit-blocks-addon"),children:[!S&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(C,{label:(0,l.__)("Scrolling Effects","gutenkit-blocks-addon"),message:(0,l.__)("Add exclusive Scrolling Effects with Gutenkit Pro.","gutenkit-blocks-addon")}),(0,b.jsx)(s.__experimentalDivider,{}),(0,b.jsx)(C,{label:(0,l.__)("Mouse Tilt Effect","gutenkit-blocks-addon"),message:(0,l.__)("Add a Mouse 3d Tilt effect with Gutenkit Pro.","gutenkit-blocks-addon")}),(0,b.jsx)(s.__experimentalDivider,{}),(0,b.jsx)(C,{label:(0,l.__)("Mouse Track Effect","gutenkit-blocks-addon"),message:(0,l.__)("Add a Mouse Track effect with Gutenkit Pro.","gutenkit-blocks-addon")}),(0,b.jsx)(s.__experimentalDivider,{})]}),(0,b.jsx)(p,{clientId:a,blockName:i,attributes:t,setAttributes:n})]})]})}));var h=i(6942),j=i.n(h);const S=(0,a.createHigherOrderComponent)((e=>(0,n.memo)((t=>{const{clientId:a,name:l,attributes:i,setAttributes:r}=t,s=(0,n.useRef)(i),{__unstableMarkNextChangeAsNotPersistent:u}=(0,c.useDispatch)("core/block-editor");if(l.includes("gutenkit")){const l=a?.slice(-6);(0,n.useEffect)((()=>{i?.blockClass||(u(),r({blockClass:`gkit${l}`,blockID:a})),i?.blockClass&&JSON.stringify(i)!==JSON.stringify(s.current)&&(u(),r({blockClass:`gkit${l}`,blockID:a}),s.current=i)}),[a,i]);const c={...t.wrapperProps,className:j()(i?.blockClass)},p=(0,o.applyFilters)("gutenkit.blockWrapper.attributes",c,i);return(0,b.jsx)(e,{...t,wrapperProps:p})}return(0,b.jsx)(e,{...t})}))),"addHideClass");(0,o.addFilter)("blocks.registerBlockType","gutenkit/global-components-attribute",((e,t)=>(t.includes("gutenkit")&&(e.attributes={...e.attributes,commonStyle:{type:"object"},commonMarginDesktop:{type:"object"},commonMarginTablet:{type:"object"},commonMarginMobile:{type:"object"},commonMarginTabletLandscape:{type:"object"},commonMarginMobileLandscape:{type:"object"},commonMarginLaptop:{type:"object"},commonMarginWideScreen:{type:"object"},commonPaddingDesktop:{type:"object"},commonPaddingTablet:{type:"object"},commonPaddingMobile:{type:"object"},commonPaddingTabletLandscape:{type:"object"},commonPaddingMobileLandscape:{type:"object"},commonPaddingLaptop:{type:"object"},commonPaddingWideScreen:{type:"object"},commonZindexDesktop:{type:"number"},commonZindexTablet:{type:"number"},commonZindexMobile:{type:"number"},commonZindexTabletLandscape:{type:"number"},commonZindexMobileLandscape:{type:"number"},commonZindexLaptop:{type:"number"},commonZindexWideScreen:{type:"number"},commonBlockHideDesktop:{type:"boolean",default:!1},commonBlockHideTablet:{type:"boolean",default:!1},commonBlockHideMobile:{type:"boolean",default:!1},commonBlockHideTabletLandscape:{type:"boolean",default:!1},commonBlockHideMobileLandscape:{type:"boolean",default:!1},commonBlockHideLaptop:{type:"boolean",default:!1},commonBlockHideWideScreen:{type:"boolean",default:!1},visibilityModuleStyles:{type:"object"},commonBackground:{type:"object",selector:"{{WRAPPER}}",isHover:!1},commonHoverBackground:{type:"object",selector:"{{WRAPPER}}",isHover:!0},commonBackgroundHoverTransition:{type:"object"},commonBorder:{type:"object"},commonBorderRadiusDesktop:{type:"object"},commonBorderRadiusTablet:{type:"object"},commonBorderRadiusMobile:{type:"object"},commonBorderRadiusTabletLandscape:{type:"object"},commonBorderRadiusMobileLandscape:{type:"object"},commonBorderRadiusLaptop:{type:"object"},commonBorderRadiusWideScreen:{type:"object"},commonBoxShadow:{type:"object"},commonHoverBorder:{type:"object"},commonHoverBorderRadiusDesktop:{type:"object"},commonHoverBorderRadiusTablet:{type:"object"},commonHoverBorderRadiusMobile:{type:"object"},commonHoverBorderRadiusTabletLandscape:{type:"object"},commonHoverBorderRadiusMobileLandscape:{type:"object"},commonHoverBorderRadiusLaptop:{type:"object"},commonHoverBorderRadiusWideScreen:{type:"object"},commonHoverBoxShadow:{type:"object"},commonBorderHoverTransition:{type:"object"},commonPosition:{type:"string",default:"relative"},commonHorizontalOrientation:{type:"string",default:"left"},commonHorizontalOffsetDesktop:{type:"object"},commonHorizontalOffsetTablet:{type:"object"},commonHorizontalOffsetMobile:{type:"object"},commonHorizontalOffsetTabletLandscape:{type:"object"},commonHorizontalOffsetMobileLandscape:{type:"object"},commonHorizontalOffsetLaptop:{type:"object"},commonHorizontalOffsetWideScreen:{type:"object"},commonVerticalOrientation:{type:"string",default:"top"},commonVerticalOffsetDesktop:{type:"object"},commonVerticalOffsetTablet:{type:"object"},commonVerticalOffsetMobile:{type:"object"},commonVerticalOffsetTabletLandscape:{type:"object"},commonVerticalOffsetMobileLandscape:{type:"object"},commonVerticalOffsetLaptop:{type:"object"},commonVerticalOffsetWideScreen:{type:"object"},commonwidthTypeDesktop:{type:"string",default:""},commonwidthTypeTablet:{type:"string",default:""},commonwidthTypeMobile:{type:"string",default:""},commonwidthTypeTabletLandscape:{type:"string",default:""},commonwidthTypeMobileLandscape:{type:"string",default:""},commonwidthTypeLaptop:{type:"string",default:""},commonwidthTypeWideScreen:{type:"string",default:""},commonCustomWidthDesktop:{type:"object",default:{}},commonCustomWidthTablet:{type:"object",default:{}},commonCustomWidthMobile:{type:"object",default:{}},commonCustomWidthTabletLandscape:{type:"object",default:{}},commonCustomWidthMobileLandscape:{type:"object",default:{}},commonCustomWidthLaptop:{type:"object",default:{}},commonCustomWidthWideScreen:{type:"object",default:{}},backgroundTracker:{type:"object"}}),e)));const w=(0,a.createHigherOrderComponent)((e=>t=>{const{setGroupingBlockName:o}=(0,c.dispatch)("core/blocks"),{isGroupable:a}=(0,c.select)("core/block-editor");if((0,n.useEffect)((()=>{a&&o("gutenkit/container")}),[a]),t.name.includes("gutenkit")){const{GkitStyle:o,GkitProUpgradeNotice:a}=window?.gutenkit?.components,{useHasProActive:l,useBlockStyles:n,hasCSS:i,useDeviceList:c}=window?.gutenkit?.helpers,{attributes:s,setAttributes:u}=t,p=l(),d=c(),m=n(s,u,"commonStyle",((e,t,o)=>{const{parseCSS:a,backgroundGenerator:l,getBoxShadowValue:n,getBoxValue:i,getBorderValue:r,getMultipleTransition:c,getSliderValue:s}=window.gutenkit.helpers;return a([[{selector:`.editor-styles-wrapper .block-editor-block-list__layout.is-root-container :where(.${t}), .gutenkit .${t}`,...r(e?.commonBorder),"box-shadow":n(e?.commonBoxShadow),position:`${e.commonPosition}`},{selector:`.editor-styles-wrapper .block-editor-block-list__layout.is-root-container :where(.${t}:not(.wp-block-gutenkit-container)), .gutenkit :where(.${t}:not(.wp-block-gutenkit-container))`,transition:c({name:"background",duration:e?.commonBackgroundHoverTransition,animation:"ease-in-out"},{name:"border",duration:e?.commonBorderHoverTransition,animation:"ease-in-out"},{name:"border-radius",duration:e?.commonBorderHoverTransition,animation:"ease-in-out"},{name:"box-shadow",duration:e?.commonBorderHoverTransition,animation:"ease-in-out"},{name:"transform",duration:e?.commonTransitionDuration,animation:"ease-in-out"})},{selector:`.editor-styles-wrapper .block-editor-block-list__layout.is-root-container :where(.${t}.wp-block-gutenkit-container), .gutenkit .${t}.wp-block-gutenkit-container`,transition:c({name:"background",duration:e?.commonBackgroundHoverTransition,animation:"ease-in-out"},{name:"border",duration:e?.commonBorderHoverTransition,animation:"ease-in-out"},{name:"border-radius",duration:e?.commonBorderHoverTransition,animation:"ease-in-out"},{name:"box-shadow",duration:e?.commonBorderHoverTransition,animation:"ease-in-out"},{name:"transform",duration:e?.commonTransitionDuration,animation:"ease-in-out"})},{selector:`.editor-styles-wrapper .block-editor-block-list__layout.is-root-container :where(.${t}:hover), .gutenkit .${t}:hover`,...r(e?.commonHoverBorder),"box-shadow":n(e?.commonHoverBoxShadow)}],o=>[{selector:`.editor-styles-wrapper .block-editor-block-list__layout.is-root-container :where(.${t}), .gutenkit .${t}`,"z-index":e[`commonZindex${o}`],...i(e[`commonBorderRadius${o}`],"border-radius"),background:l(e?.commonBackground,o).background,"background-size":l(e?.commonBackground,o).size,"box-shadow":n(e?.commonBoxShadow),position:"relative"===e.commonPosition?void 0:e.commonPosition,[e.commonHorizontalOrientation]:"relative"!==e.commonPosition?s(e[`commonHorizontalOffset${o}`]):void 0,[e.commonVerticalOrientation]:"relative"!==e.commonPosition?s(e[`commonVerticalOffset${o}`]):void 0,width:"default"===e[`commonwidthType${o}`]||"full"===e[`commonwidthType${o}`]?"100%":"auto"===e[`commonwidthType${o}`]?"auto":s(e[`commonCustomWidth${o}`])},{selector:`.editor-styles-wrapper .block-editor-block-list__layout.is-root-container :where(.${t}:not(.wp-block-gutenkit-container)), .gutenkit :where(.${t}:not(.wp-block-gutenkit-container))`,...i(e[`commonMargin${o}`],"margin"),...i(e[`commonPadding${o}`],"padding")},{selector:`.editor-styles-wrapper .block-editor-block-list__layout.is-root-container :where(.${t}.wp-block-gutenkit-container), .gutenkit .${t}.wp-block-gutenkit-container`,"margin-block-start":e[`commonMargin${o}`]?.top+"!important","margin-block-end":e[`commonMargin${o}`]?.bottom+"!important","margin-left":e[`commonMargin${o}`]?.left+"!important","margin-right":e[`commonMargin${o}`]?.right+"!important",...i(e[`commonPadding${o}`],"padding")},{selector:`.editor-styles-wrapper .block-editor-block-list__layout.is-root-container :where(.${t}:hover), .gutenkit .${t}:hover`,background:l(e?.commonHoverBackground,o)?.background,"background-size":l(e?.commonHoverBackground,o)?.size,...i(e[`commonHoverBorderRadius${o}`],"border-radius")}]],o)})(s,s?.blockClass,d));return(0,b.jsxs)(b.Fragment,{children:[i(m)&&(0,b.jsx)(o,{blocksCSS:m}),(0,b.jsx)(e,{...t,advancedControl:(0,b.jsx)(f,{...t})}),!p&&(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(r.InspectorControls,{children:(0,b.jsx)(a,{...t})})})]})}return(0,b.jsx)(e,{...t})}),"addBlocksComponents");(0,o.addFilter)("editor.BlockEdit","gutenkit/global-components",w),(0,o.addFilter)("editor.BlockListBlock","gutenkit/add-hide-class",S);const x=JSON.parse('[{"label":"DM Sans","value":"DM Sans","variants":[{"label":"Default","value":"normal"},{"label":"400","value":"400"},{"label":"500","value":"500"},{"label":"700","value":"700"},{"label":"Initial","value":"initial"},{"label":"Inherit","value":"inherit"}]},{"label":"Inter","value":"Inter","variants":[{"label":"Default","value":"normal"},{"label":"100","value":"100"},{"label":"200","value":"200"},{"label":"300","value":"300"},{"label":"400","value":"400"},{"label":"500","value":"500"},{"label":"600","value":"600"},{"label":"700","value":"700"},{"label":"800","value":"800"},{"label":"900","value":"900"},{"label":"Initial","value":"initial"},{"label":"Inherit","value":"inherit"}]},{"label":"Space Mono","value":"Space Mono","variants":[{"label":"Default","value":"normal"},{"label":"400","value":"400"},{"label":"700","value":"700"},{"label":"Initial","value":"initial"},{"label":"Inherit","value":"inherit"}]},{"label":"Space Grotesk","value":"Space Grotesk","variants":[{"label":"Default","value":"normal"},{"label":"300","value":"300"},{"label":"400","value":"400"},{"label":"500","value":"500"},{"label":"600","value":"600"},{"label":"700","value":"700"},{"label":"Initial","value":"initial"},{"label":"Inherit","value":"inherit"}]},{"label":"Work Sans","value":"Work Sans","variants":[{"label":"Default","value":"normal"},{"label":"100","value":"100"},{"label":"200","value":"200"},{"label":"300","value":"300"},{"label":"400","value":"400"},{"label":"500","value":"500"},{"label":"600","value":"600"},{"label":"700","value":"700"},{"label":"800","value":"800"},{"label":"900","value":"900"},{"label":"Initial","value":"initial"},{"label":"Inherit","value":"inherit"}]},{"label":"Syne","value":"Syne","variants":[{"label":"Default","value":"normal"},{"label":"400","value":"400"},{"label":"500","value":"500"},{"label":"600","value":"600"},{"label":"700","value":"700"},{"label":"800","value":"800"},{"label":"Initial","value":"initial"},{"label":"Inherit","value":"inherit"}]},{"label":"Libre Franklin","value":"Libre Franklin","variants":[{"label":"Default","value":"normal"},{"label":"100","value":"100"},{"label":"200","value":"200"},{"label":"300","value":"300"},{"label":"400","value":"400"},{"label":"500","value":"500"},{"label":"600","value":"600"},{"label":"700","value":"700"},{"label":"800","value":"800"},{"label":"900","value":"900"},{"label":"Initial","value":"initial"},{"label":"Inherit","value":"inherit"}]},{"label":"Cormorant","value":"Cormorant","variants":[{"label":"Default","value":"normal"},{"label":"300","value":"300"},{"label":"400","value":"400"},{"label":"500","value":"500"},{"label":"600","value":"600"},{"label":"700","value":"700"},{"label":"Initial","value":"initial"},{"label":"Inherit","value":"inherit"}]},{"label":"Fira Sans","value":"Fira Sans","variants":[{"label":"Default","value":"normal"},{"label":"100","value":"100"},{"label":"200","value":"200"},{"label":"300","value":"300"},{"label":"400","value":"400"},{"label":"500","value":"500"},{"label":"600","value":"600"},{"label":"700","value":"700"},{"label":"800","value":"800"},{"label":"900","value":"900"},{"label":"Initial","value":"initial"},{"label":"Inherit","value":"inherit"}]},{"label":"Eczar","value":"Eczar","variants":[{"label":"Default","value":"normal"},{"label":"400","value":"400"},{"label":"500","value":"500"},{"label":"600","value":"600"},{"label":"700","value":"700"},{"label":"800","value":"800"},{"label":"Initial","value":"initial"},{"label":"Inherit","value":"inherit"}]},{"label":"Alegreya Sans","value":"Alegreya Sans","variants":[{"label":"Default","value":"normal"},{"label":"100","value":"100"},{"label":"300","value":"300"},{"label":"400","value":"400"},{"label":"500","value":"500"},{"label":"700","value":"700"},{"label":"800","value":"800"},{"label":"900","value":"900"},{"label":"Initial","value":"initial"},{"label":"Inherit","value":"inherit"}]},{"label":"Source Sans Pro","value":"Source Sans Pro","variants":[{"label":"Default","value":"normal"},{"label":"200","value":"200"},{"label":"300","value":"300"},{"label":"400","value":"400"},{"label":"600","value":"600"},{"label":"700","value":"700"},{"label":"900","value":"900"},{"label":"Initial","value":"initial"},{"label":"Inherit","value":"inherit"}]},{"label":"Source Serif Pro","value":"Source Serif Pro","variants":[{"label":"Default","value":"normal"},{"label":"200","value":"200"},{"label":"300","value":"300"},{"label":"400","value":"400"},{"label":"600","value":"600"},{"label":"700","value":"700"},{"label":"900","value":"900"},{"label":"Initial","value":"initial"},{"label":"Inherit","value":"inherit"}]},{"label":"Roboto","value":"Roboto","variants":[{"label":"Default","value":"normal"},{"label":"100","value":"100"},{"label":"300","value":"300"},{"label":"400","value":"400"},{"label":"500","value":"500"},{"label":"700","value":"700"},{"label":"900","value":"900"},{"label":"Initial","value":"initial"},{"label":"Inherit","value":"inherit"}]},{"label":"Inknut Antiqua","value":"Inknut Antiqua","variants":[{"label":"Default","value":"normal"},{"label":"300","value":"300"},{"label":"400","value":"400"},{"label":"500","value":"500"},{"label":"600","value":"600"},{"label":"700","value":"700"},{"label":"800","value":"800"},{"label":"900","value":"900"},{"label":"Initial","value":"initial"},{"label":"Inherit","value":"inherit"}]},{"label":"Poppins","value":"Poppins","variants":[{"label":"Default","value":"normal"},{"label":"100","value":"100"},{"label":"200","value":"200"},{"label":"300","value":"300"},{"label":"400","value":"400"},{"label":"500","value":"500"},{"label":"600","value":"600"},{"label":"700","value":"700"},{"label":"800","value":"800"},{"label":"900","value":"900"},{"label":"Initial","value":"initial"},{"label":"Inherit","value":"inherit"}]},{"label":"Archivo","value":"Archivo","variants":[{"label":"Default","value":"normal"},{"label":"400","value":"400"},{"label":"500","value":"500"},{"label":"600","value":"600"},{"label":"700","value":"700"},{"label":"Initial","value":"initial"},{"label":"Inherit","value":"inherit"}]},{"label":"Playfair Display","value":"Playfair Display","variants":[{"label":"Default","value":"normal"},{"label":"400","value":"400"},{"label":"500","value":"500"},{"label":"600","value":"600"},{"label":"700","value":"700"},{"label":"800","value":"800"},{"label":"900","value":"900"},{"label":"Initial","value":"initial"},{"label":"Inherit","value":"inherit"}]}]'),T=["gutenkit/image-box","gutenkit/team","gutenkit/advanced-image","gutenkit/image-comparison","gutenkit-pro/featured-image","gutenkit-pro/flip-box","gutenkit-pro/client-logo"];t()((async()=>{const{moveObjectToTop:e}=window.gutenkit.helpers,t=wp.data.select("core/blocks").getCategories();wp.blocks.setCategories(e(t,"gutenkit")),Object.keys(localStorage).map((e=>{(e.includes("gkit-active-panel")||e.includes("gkit-inspector-tab"))&&localStorage.removeItem(e)}));const o=await async function(){try{const{default:e}=await i.e(5162).then(i.t.bind(i,5162,19));return e}catch(e){return console.error("Error loading icons dynamically:",e),null}}();window.gutenkit={...window.gutenkit,icons:o,fonts:{defaultFonts:x}}})),(0,o.addFilter)("blocks.registerBlockType","gutenkit-pro/modules/attributes",((e,t)=>(t.includes("gutenkit")&&(e.attributes={...e.attributes,enableTooltip:{type:"boolean",default:!1},tooltipContent:{type:"string",default:"Gkit Tooltip"},tooltipPosition:{type:"string",default:"top"},tooltipPlacement:{type:"string",default:""},tooltipTrigger:{type:"string",default:"mouseenter"},tooltipOffset:{type:"number",default:10},tooltipOffsetY:{type:"number",default:0},enableTooltipArrow:{type:"boolean",default:!0},tooltipColor:{type:"string"},tooltipTypography:{type:"object"},tooltipBackground:{type:"object"},tooltipPaddingDesktop:{type:"object"},tooltipPaddingTablet:{type:"object"},tooltipPaddingMobile:{type:"object"},tooltipPaddingTabletLandscape:{type:"object"},tooltipPaddingMobileLandscape:{type:"object"},tooltipPaddingLaptop:{type:"object"},tooltipPaddingWideScreen:{type:"object"},tooltipBorderRadiusDesktop:{type:"object"},tooltipBorderRadiusTablet:{type:"object"},tooltipBorderRadiusMobile:{type:"object"},tooltipBorderRadiusTabletLandscape:{type:"object"},tooltipBorderRadiusMobileLandscape:{type:"object"},tooltipBorderRadiusLaptop:{type:"object"},tooltipBorderRadiusWideScreen:{type:"object"},tooltipShadow:{type:"object"},tooltipStyle:{type:"object"},tooltipAnimation:{type:"string",default:"fade"},tooltipBackgroundColor:{type:"string"},tooltipWidthDesktop:{type:"object"},tooltipWidthTablet:{type:"object"},tooltipWidthMobile:{type:"object"},tooltipWidthTabletLandscape:{type:"object"},tooltipWidthMobileLandscape:{type:"object"},tooltipWidthLaptop:{type:"object"},tooltipWidthWideScreen:{type:"object"},tooltipTextAlignDesktop:{type:"string"},tooltipTextAlignTablet:{type:"string"},tooltipTextAlignMobile:{type:"string"},tooltipTextAlignTabletLandscape:{type:"string"},tooltipTextAlignMobileLandscape:{type:"string"},tooltipTextAlignLaptop:{type:"string"},tooltipTextAlignWideScreen:{type:"string"},tooltipDelay:{type:"number",default:300},cssTransformModuleStyle:{type:"object"},multipleTransform:{type:"object",default:{flip:{commonFlipHorizontal:"",commonFlipVertical:""},scale:{commonKeepProportions:!1}}},multipleTransformHover:{type:"object",default:{flipHover:{commonFlipHorizontalHover:"",commonFlipVerticalHover:""},scaleHover:{commonKeepProportionsHover:!0}}},commonXAnchorPointDesktop:{type:"string"},commonXAnchorPointTablet:{type:"string"},commonXAnchorPointMobile:{type:"string"},commonXAnchorPointTabletLandscape:{type:"string"},commonXAnchorPointMobileLandscape:{type:"string"},commonXAnchorPointLaptop:{type:"string"},commonXAnchorPointWideScreen:{type:"string"},commonXAnchorPointHoverDesktop:{type:"string"},commonXAnchorPointHoverTablet:{type:"string"},commonXAnchorPointHoverMobile:{type:"string"},commonXAnchorPointHoverTabletLandscape:{type:"string"},commonXAnchorPointHoverMobileLandscape:{type:"string"},commonXAnchorPointHoverLaptop:{type:"string"},commonXAnchorPointHoverWideScreen:{type:"string"},commonYAnchorPointDesktop:{type:"string"},commonYAnchorPointTablet:{type:"string"},commonYAnchorPointMobile:{type:"string"},commonYAnchorPointTabletLandscape:{type:"string"},commonYAnchorPointMobileLandscape:{type:"string"},commonYAnchorPointLaptop:{type:"string"},commonYAnchorPointWideScreen:{type:"string"},commonYAnchorPointHoverDesktop:{type:"string"},commonYAnchorPointHoverTablet:{type:"string"},commonYAnchorPointHoverMobile:{type:"string"},commonYAnchorPointHoverTabletLandscape:{type:"string"},commonYAnchorPointHoverMobileLandscape:{type:"string"},commonYAnchorPointHoverLaptop:{type:"string"},commonYAnchorPointHoverWideScreen:{type:"string"},commonTransitionDuration:{type:"object"},glassMorphismStyle:{type:"object"},commonGlassMorphism:{type:"object",default:{}},mouseTiltEffects:{type:"boolean",default:!1},tiltGrayscope:{type:"object"},mouseEffectsTiltDirection:{type:"boolean",default:!1},mouseEffectsTiltSpeed:{type:"object",default:{size:500}},mouseEffectsTiltRotation:{type:"object",default:{size:20}},mouseEffectsTiltStartX:{type:"object",default:{size:0}},mouseEffectsTiltStartY:{type:"object",default:{size:0}},mouseEffectsTiltPerspective:{type:"object",default:{size:1e3}},mouseEffectsTiltScale:{type:"object",default:{size:1}},mouseTiltEffectsGlare:{type:"boolean",default:!1},mouseEffectsTiltGlareSize:{type:"object",default:{size:1}},mouseTiltEffectsGyroscope:{type:"boolean",default:!1},mouseTrackEffects:{type:"boolean",default:!1},mouseEffectsTrackDirection:{type:"string",default:"direct"},mouseEffectsTrackSpeed:{type:"object",default:{size:20}},OnPageScrollStyle:{type:"object"},isOnePageScrollSection:{type:"boolean",default:!1},disableOnePageScrollForThisSection:{type:"boolean",default:!1},onePageScrollTooltipText:{type:"string"},onePageScrollTooltipTypography:{type:"object"},onPageScrollToolTipColor:{type:"string"},onPageScrollToolTipPadding:{type:"object",default:{top:4,right:8,bottom:4,left:8}},onPageScrollToolTipBorderRadius:{type:"object"},isScrollingEffect:{type:"boolean",default:!1},verticalScroll:{type:"object"},horizontalScroll:{type:"object"},transperencyScroll:{type:"object"},blurScroll:{type:"object"},scaleScroll:{type:"object"},rotateScroll:{type:"object"},scrollDesktopDisable:{type:"boolean",default:!1},scrollTabletDisable:{type:"boolean",default:!1},scrollMobileDisable:{type:"boolean",default:!1},scrollTabletLandscapeDisable:{type:"boolean",default:!1},scrollMobileLandscapeDisable:{type:"boolean",default:!1},scrollLaptopDisable:{type:"boolean",default:!1},scrollWideScreenDisable:{type:"boolean",default:!1},stickyPosition:{type:"string",default:"none"},stickyUntil:{type:"string"},stickYOffsetDesktop:{type:"object",default:{size:0,unit:"px"}},stickYOffsetTablet:{type:"object",default:{size:0,unit:"px"}},stickYOffsetMobile:{type:"object",default:{size:0,unit:"px"}},stickYOffsetTabletLandscape:{type:"object",default:{size:0,unit:"px"}},stickYOffsetMobileLandscape:{type:"object",default:{size:0,unit:"px"}},stickYOffsetLaptop:{type:"object",default:{size:0,unit:"px"}},stickYOffsetWideScreen:{type:"object",default:{size:0,unit:"px"}},stickyBackground:{type:"object"},stickyDesktopDisable:{type:"boolean",default:!1},stickyTabletDisable:{type:"boolean",default:!1},stickyMobileDisable:{type:"boolean",default:!1},stickyTabletLandscapeDisable:{type:"boolean",default:!1},stickyMobileLandscapeDisable:{type:"boolean",default:!1},stickyLaptopDisable:{type:"boolean",default:!1},stickyWideScreenDisable:{type:"boolean",default:!1},stickyStyles:{type:"object"},isStickyContainer:{type:"boolean",default:!1},scrollEffect:{type:"string",default:"fade"},gutenkitBlockCustomCSS:{type:"string"},displayConditions:{type:"array",default:[]},interactions:{type:"array"}}),"gutenkit/container"===t&&(e.attributes={...e.attributes,isImageScrollingEffect:{type:"boolean",default:!1},verticalImageScroll:{type:"object"},horizontalImageScroll:{type:"object"},transperencyImageScroll:{type:"object"},blurImageScroll:{type:"object"},scaleImageScroll:{type:"object"},imageScrollDesktopDisable:{type:"boolean",default:!1},imageScrollTabletDisable:{type:"boolean",default:!1},imageScrollMobileDisable:{type:"boolean",default:!1},imageScrollTabletLandscapeDisable:{type:"boolean",default:!1},imageScrollMobileLandscapeDisable:{type:"boolean",default:!1},imageScrollLaptopDisable:{type:"boolean",default:!1},imageScrollWideScreenDisable:{type:"boolean",default:!1}}),T.includes(t)&&(e.attributes={...e.attributes,maskingStyle:{type:"object"},enableMasking:{type:"boolean",default:!1},maskShape:{type:"object",default:{url:"placeholder"},excludeCopy:!0},shapeType:{type:"string",default:"default"},shapeStyle:{type:"string",default:"shape1"},maskPositionDesktop:{type:"string",default:"center center"},maskPositionTablet:{type:"string"},maskPositionMobile:{type:"string"},maskPositionTabletLandscape:{type:"string"},maskPositionMobileLandscape:{type:"string"},maskPositionLaptop:{type:"string"},maskPositionWideScreen:{type:"string"},maskPositionXDesktop:{type:"object",default:50},maskPositionXTablet:{type:"object"},maskPositionXMobile:{type:"object"},maskPositionXTabletLandscape:{type:"object"},maskPositionXMobileLandscape:{type:"object"},maskPositionXLaptop:{type:"object"},maskPositionXWideScreen:{type:"object"},maskPositionYDesktop:{type:"object",default:50},maskPositionYTablet:{type:"object"},maskPositionYMobile:{type:"object"},maskPositionYTabletLandscape:{type:"object"},maskPositionYMobileLandscape:{type:"object"},maskPositionYLaptop:{type:"object"},maskPositionYWideScreen:{type:"object"},maskRepeatDesktop:{type:"string",default:"no-repeat"},maskRepeatTablet:{type:"string"},maskRepeatMobile:{type:"string"},maskRepeatTabletLandscape:{type:"string"},maskRepeatMobileLandscape:{type:"string"},maskRepeatLaptop:{type:"string"},maskRepeatWideScreen:{type:"string"},maskSizeDesktop:{type:"string",default:"contain"},maskSizeTablet:{type:"string"},maskSizeMobile:{type:"string"},maskSizeTabletLandscape:{type:"string"},maskSizeMobileLandscape:{type:"string"},maskSizeLaptop:{type:"string"},maskSizeWideScreen:{type:"string"},customSizeDesktop:{type:"object",default:50},customSizeTablet:{type:"object"},customSizeMobile:{type:"object"},customSizeTabletLandscape:{type:"object"},customSizeMobileLandscape:{type:"object"},customSizeLaptop:{type:"object"},customSizeWideScreen:{type:"object"}}),e)),10)})()})();