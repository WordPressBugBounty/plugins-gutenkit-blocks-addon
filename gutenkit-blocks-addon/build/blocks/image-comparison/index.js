(()=>{var e,t,o,i={790:e=>{"use strict";e.exports=window.ReactJSXRuntime},4294:(e,t,o)=>{"use strict";const i=window.wp.blocks;o(7723);var a=o(6942),r=o.n(a),n=o(6087);const l=window.wp.blockEditor;var s=o(790);const c=({attributes:e,isEdit:t,isDeprecated:o})=>{const{GkitImage:i}=window.gutenkit.components,{gkitImageComparisonStyle:a,gkitComparisonBeforeImage:n,gkitImageComparisonBeforeLabel:l,gkitComparisonAfterImage:c,gkitImageComparisonAfterLabel:g,gkitImageComparisonOffset:p,gkitComparisonImageHover:d}=e,b="labelNone"===e?.gkitChooseLabelOption,f="labelHover"===e?.gkitChooseLabelOption,k="labelActive"===e?.gkitChooseLabelOption,m=b&&!f&&!k,u=f&&!k&&!b,h=k&&!f&&!b,y=e?.gkitComparisonImageOverlay?"":"gkit-overlay",v=h?"active":"",j=u?"hover":"",L=p?.size,H=!0===d&&"hover",B=r()(`gkit-img-comparison-inner ${a}`),S=(0,s.jsxs)(s.Fragment,{children:[n&&(0,s.jsxs)("figure",{slot:"first",className:`before ${y}`,children:[(0,s.jsx)(i,{slot:"first",width:"100%",image:n,isEdit:t}),(""===l?"":l)&&(0,s.jsx)(s.Fragment,{children:!0===m?"":l&&(0,s.jsx)("figcaption",{className:`gkit-before-label ${j}${v}`,children:l})})]}),c&&(0,s.jsxs)("figure",{slot:"second",className:`after ${y}`,children:[(0,s.jsx)(i,{slot:"second",width:"100%",image:c,isEdit:t}),(""===g?"":g)&&(0,s.jsx)(s.Fragment,{children:!0===m?"":g&&(0,s.jsx)("figcaption",{className:`gkit-after-label ${j}${v}`,children:g})})]}),(0,s.jsx)("svg",{slot:"handle",className:"custom-animated-handle",xmlns:"http://www.w3.org/2000/svg",width:"100",viewBox:"-8 -3 16 6",children:(0,s.jsx)("path",{stroke:"#fff",d:"M -5 -2 L -7 0 L -5 2 M -5 -2 L -5 2 M 5 -2 L 7 0 L 5 2 M 5 -2 L 5 2",strokeWidth:"1",fill:"#fff",vectorEffect:"non-scaling-stroke"})})]}),C=(0,s.jsxs)(s.Fragment,{children:[n&&(0,s.jsxs)("figure",{slot:"first",className:`before ${y}`,children:[(0,s.jsx)(i,{slot:"first",image:n,isEdit:t}),(""===l?"":l)&&(0,s.jsx)(s.Fragment,{children:!0===m?"":l&&(0,s.jsx)("figcaption",{className:`gkit-before-label ${j}${v}`,children:l})})]}),c&&(0,s.jsxs)("figure",{slot:"second",className:`after ${y}`,children:[(0,s.jsx)(i,{slot:"second",image:c,isEdit:t}),(""===g?"":g)&&(0,s.jsx)(s.Fragment,{children:!0===m?"":g&&(0,s.jsx)("figcaption",{className:`gkit-after-label ${j}${v}`,children:g})})]}),(0,s.jsx)("svg",{slot:"handle",className:"custom-animated-handle",xmlns:"http://www.w3.org/2000/svg",width:"100",viewBox:"-8 -3 16 6",children:(0,s.jsx)("path",{stroke:"#fff",d:"M -5 -2 L -7 0 L -5 2 M -5 -2 L -5 2 M 5 -2 L 7 0 L 5 2 M 5 -2 L 5 2",strokeWidth:"1",fill:"#fff",vectorEffect:"non-scaling-stroke"})})]});return(0,s.jsxs)(s.Fragment,{children:["horizontal"===a&&(0,s.jsx)("img-comparison-slider",{id:"gkit-img-comparison",class:B,direction:"horizontal",hover:H,value:L,children:o?S:C}),"vertical"===a&&(0,s.jsx)("img-comparison-slider",{id:"gkit-img-comparison",class:B,direction:"vertical",hover:H,value:L,children:o?S:C})]})},g=window.wp.data,p=(window.wp.compose,(0,n.lazy)((()=>o.e(1715).then(o.bind(o,1715))))),d=JSON.parse('{"UU":"gutenkit/image-comparison","uK":{"blockID":{"type":"string"},"blockClass":{"type":"string"},"blocksCSS":{"type":"object"},"gkitImageComparisonStyle":{"type":"string","default":"vertical"},"gkitComparisonBeforeImage":{"type":"object","default":{"url":"placeholder"}},"handleLabelPosition":{"type":"object"},"gkitImageComparisonBeforeLabel":{"type":"string","default":"Before"},"gkitComparisonAfterImage":{"type":"object","default":{"url":"placeholder"}},"gkitImageComparisonAfterLabel":{"type":"string","default":"After"},"gkitImageComparisonOffset":{"type":"object","default":{"size":50,"unit":"%"}},"gkitChooseLabelOption":{"type":"string","default":"labelHover"},"gkitShowHandler":{"type":"boolean","default":true},"gkitComparisonImageOverlay":{"type":"boolean","default":false},"gkitComparisonImageHover":{"type":"boolean","default":false},"gkitComparisonImageClickToMove":{"type":"boolean","default":true},"gkitBeforeLabelPositionYDesktop":{"type":"object"},"gkitBeforeLabelPositionYTablet":{"type":"object"},"gkitBeforeLabelPositionYMobile":{"type":"object"},"gkitBeforeLabelPositionYTabletLandscape":{"type":"object"},"gkitBeforeLabelPositionYMobileLandscape":{"type":"object"},"gkitBeforeLabelPositionYLaptop":{"type":"object"},"gkitBeforeLabelPositionYWideScreen":{"type":"object"},"gkitBeforeLabelPositionXDesktop":{"type":"object"},"gkitBeforeLabelPositionXTablet":{"type":"object"},"gkitBeforeLabelPositionXMobile":{"type":"object"},"gkitBeforeLabelPositionXTabletLandscape":{"type":"object"},"gkitBeforeLabelPositionXMobileLandscape":{"type":"object"},"gkitBeforeLabelPositionXLaptop":{"type":"object"},"gkitBeforeLabelPositionXWideScreen":{"type":"object"},"gkitAfterLabelPositionYDesktop":{"type":"object"},"gkitAfterLabelPositionYTablet":{"type":"object"},"gkitAfterLabelPositionYMobile":{"type":"object"},"gkitAfterLabelPositionYTabletLandscape":{"type":"object"},"gkitAfterLabelPositionYMobileLandscape":{"type":"object"},"gkitAfterLabelPositionYLaptop":{"type":"object"},"gkitAfterLabelPositionYWideScreen":{"type":"object"},"gkitAfterLabelPositionXDesktop":{"type":"object"},"gkitAfterLabelPositionXTablet":{"type":"object"},"gkitAfterLabelPositionXMobile":{"type":"object"},"gkitAfterLabelPositionXTabletLandscape":{"type":"object"},"gkitAfterLabelPositionXMobileLandscape":{"type":"object"},"gkitAfterLabelPositionXLaptop":{"type":"object"},"gkitAfterLabelPositionXWideScreen":{"type":"object"},"gkitBeforeLabelColor":{"type":"string"},"gkitAfterLabelColor":{"type":"string"},"gkitLabelTypography":{"type":"object"},"gkitBeforeLabelBackground":{"type":"object","default":"#ffffff"},"gkitBeforeLabelBorderGroup":{"type":"object"},"gkitBeforeLabelBorderRadiusDesktop":{"type":"object"},"gkitBeforeLabelBorderRadiusTablet":{"type":"object"},"gkitBeforeLabelBorderRadiusMobile":{"type":"object"},"gkitBeforeLabelBorderRadiusTabletLandscape":{"type":"object"},"gkitBeforeLabelBorderRadiusMobileLandscape":{"type":"object"},"gkitBeforeLabelBorderRadiusLaptop":{"type":"object"},"gkitBeforeLabelBorderRadiusWideScreen":{"type":"object"},"gkitAfterLabelBorderGroup":{"type":"object"},"gkitAfterLabelBorderRadiusDesktop":{"type":"object"},"gkitAfterLabelBorderRadiusTablet":{"type":"object"},"gkitAfterLabelBorderRadiusMobile":{"type":"object"},"gkitAfterLabelBorderRadiusTabletLandscape":{"type":"object"},"gkitAfterLabelBorderRadiusMobileLandscape":{"type":"object"},"gkitAfterLabelBorderRadiusLaptop":{"type":"object"},"gkitAfterLabelBorderRadiusWideScreen":{"type":"object"},"gkitAfterLabelBackground":{"type":"object","default":"#ffffff"},"gkitBeforeLabelSpacingDesktop":{"type":"object"},"gkitBeforeLabelSpacingTablet":{"type":"object"},"gkitBeforeLabelSpacingMobile":{"type":"object"},"gkitBeforeLabelSpacingTabletLandscape":{"type":"object"},"gkitBeforeLabelSpacingMobileLandscape":{"type":"object"},"gkitBeforeLabelSpacingLaptop":{"type":"object"},"gkitBeforeLabelSpacingWideScreen":{"type":"object"},"gkitAfterLabelSpacingDesktop":{"type":"object"},"gkitAfterLabelSpacingTablet":{"type":"object"},"gkitAfterLabelSpacingMobile":{"type":"object"},"gkitAfterLabelSpacingTabletLandscape":{"type":"object"},"gkitAfterLabelSpacingMobileLandscape":{"type":"object"},"gkitAfterLabelSpacingLaptop":{"type":"object"},"gkitAfterLabelSpacingWideScreen":{"type":"object"},"gkitHandleIconSizeDesktop":{"type":"object"},"gkitHandleIconSizeTablet":{"type":"object"},"gkitHandleIconSizeMobile":{"type":"object"},"gkitHandleIconSizeTabletLandscape":{"type":"object"},"gkitHandleIconSizeMobileLandscape":{"type":"object"},"gkitHandleIconSizeLaptop":{"type":"object"},"gkitHandleIconSizeWideScreen":{"type":"object"},"gkitIconHeightWidth":{"type":"boolean","default":false},"gkitHandleControlWidthDesktop":{"type":"object"},"gkitHandleControlWidthTablet":{"type":"object"},"gkitHandleControlWidthMobile":{"type":"object"},"gkitHandleControlWidthTabletLandscape":{"type":"object"},"gkitHandleControlWidthMobileLandscape":{"type":"object"},"gkitHandleControlWidthLaptop":{"type":"object"},"gkitHandleControlWidthWideScreen":{"type":"object"},"gkitHandleControlHeightVerticalDesktop":{"type":"object"},"gkitHandleControlHeightVerticalTablet":{"type":"object"},"gkitHandleControlHeightVerticalMobile":{"type":"object"},"gkitHandleControlHeightVerticalTabletLandscape":{"type":"object"},"gkitHandleControlHeightVerticalMobileLandscape":{"type":"object"},"gkitHandleControlHeightVerticalLaptop":{"type":"object"},"gkitHandleControlHeightVerticalWideScreen":{"type":"object"},"gkitHandleControlHeightDesktop":{"type":"object"},"gkitHandleControlHeightTablet":{"type":"object"},"gkitHandleControlHeightMobile":{"type":"object"},"gkitHandleControlHeightTabletLandscape":{"type":"object"},"gkitHandleControlHeightMobileLandscape":{"type":"object"},"gkitHandleControlHeightLaptop":{"type":"object"},"gkitHandleControlHeightWideScreen":{"type":"object"},"gkitHandleNormalBackground":{"type":"object","default":"#ffffff"},"gkitHandleNormalColor":{"type":"string"},"gkitHandleNormalBoxShadow":{"type":"string","default":"none"},"gkitHandleHoverBackground":{"type":"object","default":"#ffffff"},"gkitHandleHoverColor":{"type":"string"},"gkitHandleHoverBoxShadow":{"type":"string","default":"none"},"gkitHandleSpacingDesktop":{"type":"object"},"gkitHandleSpacingTablet":{"type":"object"},"gkitHandleSpacingMobile":{"type":"object"},"gkitHandleSpacingTabletLandscape":{"type":"object"},"gkitHandleSpacingMobileLandscape":{"type":"object"},"gkitHandleSpacingLaptop":{"type":"object"},"gkitHandleSpacingWideScreen":{"type":"object"},"gkitHandleBorderRadiusDesktop":{"type":"object"},"gkitHandleBorderRadiusTablet":{"type":"object"},"gkitHandleBorderRadiusMobile":{"type":"object"},"gkitHandleBorderRadiusTabletLandscape":{"type":"object"},"gkitHandleBorderRadiusMobileLandscape":{"type":"object"},"gkitHandleBorderRadiusLaptop":{"type":"object"},"gkitHandleBorderRadiusWideScreen":{"type":"object"},"gkitHandleDividerThicknessDesktop":{"type":"object","default":{"unit":"px","size":3}},"gkitHandleDividerThicknessTablet":{"type":"object"},"gkitHandleDividerThicknessMobile":{"type":"object"},"gkitHandleDividerThicknessTabletLandscape":{"type":"object"},"gkitHandleDividerThicknessMobileLandscape":{"type":"object"},"gkitHandleDividerThicknessLaptop":{"type":"object"},"gkitHandleDividerThicknessWideScreen":{"type":"object"},"gkitHandleDividerColor":{"type":"string","default":"#FFFFFF"}}}'),b=[{attributes:d.uK,save({attributes:e}){const t=l.useBlockProps.save(),o={className:r()("gkit-image-comparison","image-comparison-container")};return(0,s.jsx)("div",{...t,children:(0,s.jsx)("div",{...o,children:(0,s.jsx)(c,{attributes:e,isDeprecated:!0})})})}}],{imageComparison:f}=window.gutenkit.editorIcon;(0,i.registerBlockType)(d.UU,{edit:function({attributes:e,setAttributes:t,advancedControl:o,clientId:i,isSelected:a}){const{GkitStyle:d,GkitSuspense:b}=window.gutenkit.components,{useDeviceType:f,useBlockStyles:k,useDeviceList:m}=window.gutenkit.helpers,u=m(),h=f(),y=(0,l.useBlockProps)(),v=(0,n.useRef)(),j=`block-${i}`,L={className:r()("gkit-image-comparison","image-comparison-container","active"),ref:v};if(j){const e=document.getElementById(`${j}`),t=e=>{a||(0,g.dispatch)("core/block-editor").selectBlock(i)};e&&e.addEventListener("click",t)}(0,n.useEffect)((()=>{const e=v.current;if(!e)return;const t=e.querySelectorAll(".gkit-img-comparison-inner");return t.forEach((e=>{const t=e?.querySelector(".custom-animated-handle");t&&(t.addEventListener("mouseover",(()=>{e.querySelectorAll(".gkit-overlay").forEach((e=>{e.classList.add("overlay-out")}))})),t.addEventListener("mouseout",(()=>{e.querySelectorAll(".gkit-overlay").forEach((e=>{e.classList.remove("overlay-out")}))})))})),()=>{t.forEach((e=>{const t=e?.querySelector(".custom-animated-handle");t&&(t.removeEventListener("mouseover",(()=>{e.querySelectorAll(".gkit-overlay").forEach((e=>{e.classList.add("overlay-out")}))})),t.removeEventListener("mouseout",(()=>{e.querySelectorAll(".gkit-overlay").forEach((e=>{e.classList.remove("overlay-out")}))})))}))}}),[]);const H=k(e,t,"blocksCSS",((e,t)=>{const{parseCSS:o,backgroundGenerator:i,getBoxShadowValue:a,getBoxValue:r,getBorderValue:n,getSliderValue:l,getColor:s,getTypographyValue:c}=window.gutenkit.helpers,g=e.blockClass,p="labelNone"===e?.gkitChooseLabelOption,d="labelHover"===e?.gkitChooseLabelOption,b="labelActive"===e?.gkitChooseLabelOption,f=e?.gkitImageComparisonStyle;return o([[{selector:`.${g} .image-comparison-container img-comparison-slider`,"pointer-events":!0===e?.gkitComparisonImageClickToMove?"auto":"none"},{selector:`.${g} .image-comparison-container img-comparison-slider`,"pointer-events":!0===e?.gkitComparisonImageHover&&"auto"},{selector:`.${g} .image-comparison-container img-comparison-slider .custom-animated-handle`,display:!0===e?.gkitShowHandler?"block":"none"},{selector:`.${g} .gkit-image-comparison img-comparison-slider:is(.horizontal, .vertical) .before figcaption,\n            .${g} .gkit-image-comparison img-comparison-slider:is(.horizontal, .vertical) .before figcaption.hover`,color:s(e?.gkitBeforeLabelColor),background:i(e?.gkitBeforeLabelBackground).background,...n(e?.gkitBeforeLabelBorderGroup)},{selector:`.${g} .gkit-image-comparison img-comparison-slider:is(.horizontal, .vertical) .after figcaption,\n            .${g} .gkit-image-comparison img-comparison-slider:is(.horizontal, .vertical) .after figcaption.hover`,color:s(e?.gkitAfterLabelColor),background:i(e?.gkitAfterLabelBackground).background,...n(e?.gkitAfterLabelBorderGroup)},{selector:`.${g} .image-comparison-container img-comparison-slider.horizontal :is(.before figcaption, .after figcaption),\n            .${g} .image-comparison-container img-comparison-slider.vertical :is(.before figcaption, .after figcaption)`,display:p&&"none"},{selector:`.${g} .image-comparison-container img-comparison-slider.horizontal :is(.before figcaption.active, .after figcaption.active),\n            .${g} .image-comparison-container img-comparison-slider.vertical :is(.before figcaption.active, .after figcaption.active)`,display:b&&"block"},{selector:`.${g} .image-comparison-container:hover img-comparison-slider.horizontal :is(.before figcaption.hover, .after figcaption.hover),\n            .${g} .image-comparison-container:hover img-comparison-slider.vertical :is(.before figcaption.hover, .after figcaption.hover)`,opacity:d?1:0,transition:"opacity 0.4s ease-in-out"},{selector:`.${g} .image-comparison-container img-comparison-slider :is(svg.custom-animated-handle, svg path)`,background:i(e?.gkitHandleNormalBackground).background,fill:s(e?.gkitHandleNormalColor),stroke:s(e?.gkitHandleNormalColor),"box-shadow":a(e?.gkitHandleNormalBoxShadow)},{selector:`.${g} .image-comparison-container img-comparison-slider:hover :is(svg.custom-animated-handle, svg path)`,background:i(e?.gkitHandleHoverBackground).background,fill:s(e?.gkitHandleHoverColor),stroke:s(e?.gkitHandleHoverColor),"box-shadow":a(e?.gkitHandleHoverBoxShadow)},{selector:`.${g} .image-comparison-container img-comparison-slider`,"--divider-color":s(e?.gkitHandleDividerColor)}],t=>[{selector:`.${g} .image-comparison-container img-comparison-slider.${f} :is(.before, .after) figcaption`,...c(e?.gkitLabelTypography,`${t}`)},{selector:`.${g} .gkit-image-comparison img-comparison-slider:is(.horizontal, .vertical) .before figcaption`,...r(e[`gkitBeforeLabelSpacing${t}`],"padding"),...r(e[`gkitBeforeLabelBorderRadius${t}`],"border-radius")},{selector:`.${g} .gkit-image-comparison img-comparison-slider:is(.horizontal, .vertical) .after figcaption`,...r(e[`gkitAfterLabelSpacing${t}`],"padding"),...r(e[`gkitAfterLabelBorderRadius${t}`],"border-radius")},{selector:`.${g} .image-comparison-container :is(img-comparison-slider.horizontal, img-comparison-slider.vertical) .before figcaption`,top:l(e?.handleLabelPosition?.[`gkitBeforeLabelPositionY${t}`])},{selector:`.${g} .image-comparison-container :is(img-comparison-slider.horizontal, img-comparison-slider.vertical) .before figcaption`,left:l(e?.handleLabelPosition?.[`gkitBeforeLabelPositionX${t}`])},{selector:`.${g} .image-comparison-container img-comparison-slider.horizontal .after figcaption`,top:l(e?.handleLabelPosition?.[`gkitAfterLabelPositionY${t}`])},{selector:`.${g} .image-comparison-container img-comparison-slider.vertical .after figcaption`,bottom:l(e?.handleLabelPosition?.[` gkitAfterLabelPositionY${t}`])},{selector:`.${g} .image-comparison-container img-comparison-slider.horizontal .after figcaption`,right:l(e?.handleLabelPosition?.[`gkitAfterLabelPositionX${t}`])},{selector:`.${g} .image-comparison-container img-comparison-slider.vertical .after figcaption`,left:l(e?.handleLabelPosition?.[`gkitAfterLabelPositionX${t}`])},{selector:`.${g} .image-comparison-container :is(img-comparison-slider.vertical, img-comparison-slider.horizontal) :is(svg.custom-animated-handle, svg path)`,height:l(!1===e?.gkitIconHeightWidth&&e[`gkitHandleIconSize${t}`]),width:l(!1===e?.gkitIconHeightWidth&&e[`gkitHandleIconSize${t}`])},{selector:`.${g} .image-comparison-container :is(img-comparison-slider.vertical, img-comparison-slider.horizontal) :is(svg.custom-animated-handle, svg path)`,height:l(!1!==e?.gkitIconHeightWidth&&e[`gkitHandleControlWidth${t}`]),width:l(!1!==e?.gkitIconHeightWidth&&e[`gkitHandleControlHeight${t}`])},{selector:`.${g} .image-comparison-container img-comparison-slider :is(svg.custom-animated-handle, svg path)`,...r(e[`gkitHandleSpacing${t}`],"padding"),...r(e[`gkitHandleBorderRadius${t}`],"border-radius")},{selector:`.${g} .image-comparison-container img-comparison-slider`,"--divider-width":l(e[`gkitHandleDividerThickness${t}`])}]],t)})(e,u));return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(d,{blocksCSS:H}),a&&(0,s.jsx)(b,{children:(0,s.jsx)(p,{attributes:e,setAttributes:t,device:h,advancedControl:o})}),(0,s.jsx)("div",{...y,children:(0,s.jsx)("div",{...L,children:(0,s.jsx)(c,{attributes:e,isEdit:!0,isDeprecated:!0})})})]})},icon:{src:f},save:function({attributes:e}){const t=l.useBlockProps.save(),o={className:r()("gkit-image-comparison","image-comparison-container")};return(0,s.jsx)("div",{...t,children:(0,s.jsx)("div",{...o,children:(0,s.jsx)(c,{attributes:e})})})},deprecated:b})},6087:e=>{"use strict";e.exports=window.wp.element},6427:e=>{"use strict";e.exports=window.wp.components},6942:(e,t)=>{var o;!function(){"use strict";var i={}.hasOwnProperty;function a(){for(var e="",t=0;t<arguments.length;t++){var o=arguments[t];o&&(e=n(e,r(o)))}return e}function r(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return a.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var o in e)i.call(e,o)&&e[o]&&(t=n(t,o));return t}function n(e,t){return t?e?e+" "+t:e+t:e}e.exports?(a.default=a,e.exports=a):void 0===(o=function(){return a}.apply(t,[]))||(e.exports=o)}()},7723:e=>{"use strict";e.exports=window.wp.i18n}},a={};function r(e){var t=a[e];if(void 0!==t)return t.exports;var o=a[e]={exports:{}};return i[e](o,o.exports,r),o.exports}r.m=i,e=[],r.O=(t,o,i,a)=>{if(!o){var n=1/0;for(g=0;g<e.length;g++){for(var[o,i,a]=e[g],l=!0,s=0;s<o.length;s++)(!1&a||n>=a)&&Object.keys(r.O).every((e=>r.O[e](o[s])))?o.splice(s--,1):(l=!1,a<n&&(n=a));if(l){e.splice(g--,1);var c=i();void 0!==c&&(t=c)}}return t}a=a||0;for(var g=e.length;g>0&&e[g-1][2]>a;g--)e[g]=e[g-1];e[g]=[o,i,a]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,o)=>(r.f[o](e,t),t)),[])),r.u=e=>e+".js",r.miniCssF=e=>{},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),t={},o="gutenkit-blocks-addon:",r.l=(e,i,a,n)=>{if(t[e])t[e].push(i);else{var l,s;if(void 0!==a)for(var c=document.getElementsByTagName("script"),g=0;g<c.length;g++){var p=c[g];if(p.getAttribute("src")==e||p.getAttribute("data-webpack")==o+a){l=p;break}}l||(s=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.setAttribute("data-webpack",o+a),l.src=e),t[e]=[i];var d=(o,i)=>{l.onerror=l.onload=null,clearTimeout(b);var a=t[e];if(delete t[e],l.parentNode&&l.parentNode.removeChild(l),a&&a.forEach((e=>e(i))),o)return o(i)},b=setTimeout(d.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=d.bind(null,l.onerror),l.onload=d.bind(null,l.onload),s&&document.head.appendChild(l)}},r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");if(o.length)for(var i=o.length-1;i>-1&&(!e||!/^http(s?):/.test(e));)e=o[i--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/^blob:/,"").replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e+"../../"})(),(()=>{var e={7062:0,8538:0};r.f.j=(t,o)=>{var i=r.o(e,t)?e[t]:void 0;if(0!==i)if(i)o.push(i[2]);else if(8538!=t){var a=new Promise(((o,a)=>i=e[t]=[o,a]));o.push(i[2]=a);var n=r.p+r.u(t),l=new Error;r.l(n,(o=>{if(r.o(e,t)&&(0!==(i=e[t])&&(e[t]=void 0),i)){var a=o&&("load"===o.type?"missing":o.type),n=o&&o.target&&o.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+n+")",l.name="ChunkLoadError",l.type=a,l.request=n,i[1](l)}}),"chunk-"+t,t)}else e[t]=0},r.O.j=t=>0===e[t];var t=(t,o)=>{var i,a,[n,l,s]=o,c=0;if(n.some((t=>0!==e[t]))){for(i in l)r.o(l,i)&&(r.m[i]=l[i]);if(s)var g=s(r)}for(t&&t(o);c<n.length;c++)a=n[c],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(g)},o=globalThis.webpackChunkgutenkit_blocks_addon=globalThis.webpackChunkgutenkit_blocks_addon||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var n=r.O(void 0,[8538],(()=>r(4294)));n=r.O(n)})();