(()=>{var e,t,n,i={790:e=>{"use strict";e.exports=window.ReactJSXRuntime},807:(e,t,n)=>{"use strict";const i=window.wp.blocks;var o=n(7723),r=n(6087),s=n(6427),a=n(6942),u=n.n(a);const l=window.wp.blockEditor;var c=n(7143);function d(e,t){switch(e){case"post":case"page":return{type:"post",subtype:e};case"category":return{type:"term",subtype:"category"};case"tag":return{type:"term",subtype:"post_tag"};case"post_format":return{type:"post-format"};default:return"taxonomy"===t?{type:"term",subtype:e}:"post-type"===t?{type:"post",subtype:e}:{initialSuggestionsSearchOptions:{type:"post",subtype:"page",perPage:20}}}}const g=window.wp.coreData,k=window.wp.htmlEntities;var p=n(790);const m=e=>{const{attributes:t,setAttributes:n,onReplace:i,popoverAnchor:a,isLinkOpen:u,setIsLinkOpen:m,clientId:b,isEditingURL:h,setIsEditingURL:v}=e,[w,f]=(0,r.useState)(!0),x=(0,r.useRef)(null),{selectPreviousBlock:S}=(0,c.dispatch)("core/block-editor"),{saveEntityRecord:y}=(0,c.dispatch)("core"),M=(0,g.useResourcePermissions)("pages"),I=(0,g.useResourcePermissions)("posts");(0,r.useEffect)((()=>{if(x.current){const{current:e}=x,t=e.querySelector(".block-editor-url-input__input");t&&t.focus()}}),[a,x]),(0,r.useEffect)((()=>(w||h||i([]),()=>{f(!0)})),[w,h]);let C=!1;return t?.gkitMenuItemCustomLink?.type&&"page"!==t?.gkitMenuItemCustomLink?.type?"post"===t?.gkitMenuItemCustomLink?.type&&(C=I.canCreate):C=M.canCreate,(0,p.jsxs)(p.Fragment,{children:[w&&(0,p.jsx)("div",{className:"components-popover-pointer-events-trap","aria-hidden":"true",onClick:()=>{m(!1),f(!1)}}),(0,p.jsx)(s.Popover,{placement:"bottom",onClose:()=>{if(!t?.gkitMenuItemCustomLink?.url)return S(b,!0),i([]),void m(!1)},anchor:a,focusOnMount:!!h&&"firstElement",__unstableSlotName:"__unstable-block-tools-after",shift:!0,ref:x,children:(0,p.jsx)(l.__experimentalLinkControl,{hasTextControl:!0,hasRichPreviews:!0,withCreateSuggestion:C,createSuggestion:async function(e){const n=t?.gkitMenuItemCustomLink?.type||"page",i=await y("postType",n,{title:e,status:"draft"});return{id:i.id,type:n,title:(0,k.decodeEntities)(i.title.rendered),url:i.link,kind:"post-type"}},value:{title:t?.gkitMenuItemCustomLink?.title||t?.gkitMenuItemCustomLinkLabel,...t?.gkitMenuItemCustomLink},createSuggestionButtonText:e=>{let n;
/* translators: %s: search term. */
return n=t?.gkitMenuItemCustomLink?.type&&"post"===t?.gkitMenuItemCustomLink?.type?(0,o.__)("Create draft post: <mark>%s</mark>"):(0,o.__)("Create draft page: <mark>%s</mark>"),(0,r.createInterpolateElement)(sprintf(n,e),{mark:(0,p.jsx)("mark",{})})},onChange:e=>{n({gkitMenuItemCustomLink:e}),n({gkitMenuItemCustomLinkLabel:e?.title||e?.url})},showSuggestions:!0,showInitialSuggestions:!0,suggestionsQuery:d(t?.gkitMenuItemCustomLink?.type,t?.gkitMenuItemCustomLink?.kind),noDirectEntry:!!t?.gkitMenuItemCustomLink?.type,noURLSuggestion:!!t?.gkitMenuItemCustomLink?.type},t?.gkitMenuItemCustomLink)})]})},b=(0,r.forwardRef)((({attributes:e,setAttributes:t,onReplace:n,mergeBlocks:i,popoverAnchor:s,isSelected:a,isLinkOpen:u,setIsLinkOpen:c,isEditingURL:d,setIsEditingURL:g},k)=>{const{GkitIcon:b}=window.gutenkit.components,{linkGenerator:h}=window.gutenkit.helpers,{gkitMenuItemCustomLinkLabel:v,gkitMenuItemCustomLink:w}=e,f=h(w),x=(0,r.useRef)();return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)("a",{...f,className:"gkit-nav-menu-link",ref:k,children:[u&&(0,p.jsx)(m,{popoverAnchor:s,setAttributes:t,attributes:e,onMerge:i,onReplace:n,richTextRef:x,isLinkOpen:u,setIsLinkOpen:c,isEditingURL:d,setIsEditingURL:g}),(0,p.jsx)(l.RichText,{ref:x,tagName:"span",identifier:"label",value:v,onChange:e=>{t({gkitMenuItemCustomLinkLabel:e})},withoutInteractiveFormatting:!0,placeholder:(0,o.__)("Add Link","gutenkit-blocks-addon"),className:"gkit-nav-menu-link-text",allowedFormats:["core/bold","core/italic"],"aria-label":(0,o.__)("Navigation link text","gutenkit-blocks-addon")})]}),e?.gkitAddSubMenu?(0,p.jsx)(p.Fragment,{children:e?.gkitSubMenuIndicator&&e?.gkitSubMenuIndicator.hasOwnProperty("src")?(0,p.jsx)(b,{icon:e?.gkitSubMenuIndicator,className:"gkit-nav-menu-submenu-arrow",tagName:"button","aria-label":(0,o.__)("Submenu Arrow","gutenkit-blocks-addon")}):(0,p.jsx)("button",{className:"gkit-nav-menu-submenu-arrow","aria-label":(0,o.__)("Submenu Arrow","gutenkit-blocks-addon"),children:(0,p.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",className:"gkit-icon","aria-hidden":"true",focusable:"false",children:(0,p.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0 9.6c0-0.205 0.078-0.409 0.234-0.566 0.312-0.312 0.819-0.312 1.131 0l13.834 13.834 13.834-13.834c0.312-0.312 0.819-0.312 1.131 0s0.312 0.819 0 1.131l-14.4 14.4c-0.312 0.312-0.819 0.312-1.131 0l-14.4-14.4c-0.156-0.156-0.234-0.361-0.234-0.566z"})})})}):null]})})),h=window.wp.primitives,v=(0,p.jsx)(h.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,p.jsx)(h.Path,{d:"M2 12C2 6.44444 6.44444 2 12 2C17.5556 2 22 6.44444 22 12C22 17.5556 17.5556 22 12 22C6.44444 22 2 17.5556 2 12ZM13 11V7H11V11H7V13H11V17H13V13H17V11H13Z"})}),w=({rootClientId:e,isMegaMenu:t,onClick:n})=>{const r=(0,o.__)("Add Submenu","gutenkit-blocks-addon"),{insertBlock:a}=(0,c.dispatch)("core/block-editor"),u=(0,i.createBlock)("gutenkit/nav-menu-submenu",{}),l=t?(0,i.createBlock)("gutenkit-pro/mega-menu",{}):null;return(0,p.jsx)(s.Button,{className:"gkit-nav-menu-item-appender-button",onClick:()=>{n(),a(t?l:u,0,e)},icon:v,iconPosition:"right",showTooltip:!0,"aria-label":r,label:r,variant:"secondary"})},f=(0,p.jsx)(h.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,p.jsx)(h.Path,{d:"M2 12c0 3.6 2.4 5.5 6 5.5h.5V19l3-2.5-3-2.5v2H8c-2.5 0-4.5-1.5-4.5-4s2-4.5 4.5-4.5h3.5V6H8c-3.6 0-6 2.4-6 6zm19.5-1h-8v1.5h8V11zm0 5h-8v1.5h8V16zm0-10h-8v1.5h8V6z"})}),x=(0,p.jsx)(h.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,p.jsx)(h.Path,{d:"M5 5v1.5h14V5H5zm0 7.8h14v-1.5H5v1.5zM5 19h14v-1.5H5V19z"})}),S=(0,p.jsx)(h.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,p.jsx)(h.Path,{fillRule:"evenodd",clipRule:"evenodd",d:"m13.955 20.748 8-17.5-.91-.416L19.597 6H13.5v1.5h5.411l-1.6 3.5H13.5v1.5h3.126l-1.6 3.5H13.5l.028 1.5h.812l-1.295 2.832.91.416ZM17.675 16l-.686 1.5h4.539L21.5 16h-3.825Zm2.286-5-.686 1.5H21.5V11h-1.54ZM2 12c0 3.58 2.42 5.5 6 5.5h.5V19l3-2.5-3-2.5v2H8c-2.48 0-4.5-1.52-4.5-4S5.52 7.5 8 7.5h3.5V6H8c-3.58 0-6 2.42-6 6Z"})}),y=(0,p.jsx)(h.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,p.jsx)(h.Path,{d:"M10 17.389H8.444A5.194 5.194 0 1 1 8.444 7H10v1.5H8.444a3.694 3.694 0 0 0 0 7.389H10v1.5ZM14 7h1.556a5.194 5.194 0 0 1 0 10.39H14v-1.5h1.556a3.694 3.694 0 0 0 0-7.39H14V7Zm-4.5 6h5v-1.5h-5V13Z"})}),M=window.wp.compose,I=(0,r.lazy)((()=>n.e(120).then(n.bind(n,120)))),C=JSON.parse('{"UU":"gutenkit/nav-menu-item"}'),{navMenuItem:j}=window.gutenkit.editorIcon;(0,i.registerBlockType)(C.UU,{edit:function({attributes:e,setAttributes:t,clientId:n,advancedControl:a,isSelected:d,onReplace:g}){const{GkitStyle:k,GkitSuspense:m}=window.gutenkit.components,{useDeviceType:h,useBlockStyles:v,useDeviceList:C,useHasProActive:j}=window.gutenkit.helpers,L=C(),[B,_]=(0,r.useState)(!1),[A,R]=(0,r.useState)(null),[T,P]=(0,r.useState)(!1),{getBlock:N}=(0,c.select)("core/block-editor"),{replaceInnerBlocks:O,selectBlock:E}=(0,c.dispatch)("core/block-editor"),V=N(n)?.innerBlocks?.length>0,H=h(),F=j(),U=(0,r.useRef)(null),z=(0,c.select)("core/editor")?.getCurrentPostId(),G=(0,l.useBlockProps)({className:u()({[`gkit-nav-menu-submenu-type-${e?.gkitSubMenuType}`]:e?.gkitSubMenuType&&e?.gkitAddSubMenu,"gkit-nav-menu-item-active":e?.gkitMenuItemCustomLink?.id===z}),ref:(0,M.useMergeRefs)([R])}),$=(0,l.useInnerBlocksProps)({className:u()("gkit-nav-menu-submenu",{"has-child-blocks":V,"no-animation":!V})},{orientation:"horizontal",renderAppender:!(V||!d)&&(()=>(0,p.jsx)(w,{onClick:()=>_(!0),rootClientId:n,isMegaMenu:"megamenu"===e?.gkitSubMenuType&&F}))});(0,r.useEffect)((()=>(e?.gkitMenuItemCustomLink?.url?(P(!0),_(!1)):(P(!1),_(!0)),()=>{P(!1),_(!1)})),[e?.gkitMenuItemCustomLink]);const{hasInnerBlocks:Z,isNested:D}=(0,c.useSelect)((e=>{const{getBlockOrder:t,getBlockParents:i,getBlockName:o}=e("core/block-editor");return{hasInnerBlocks:t(n).length>0,isNested:"gutenkit/nav-menu-submenu"===o(i(n).at(-1))}})),q=v(e,t,"blocksCSS",((e,t)=>{const n=window.gutenkit.helpers,{parseCSS:i,getBoxValue:o,getBorderValue:r,getSliderValue:s}=n,a=e.blockClass;return i([[],t=>[{selector:`.${a} .gkit-nav-menu-submenu-arrow`,"font-size":s(e[`gkitSubMenuIndicatorIconSize${t}`]),...r(e[`gkitSubMenuIndicatorBorder${t}`]),...o(e[`gkitSubMenuIndicatorPadding${t}`],"padding"),...o(e[`gkitSubMenuIndicatorBorderRadius${t}`],"border-radius"),"margin-left":s(e[`gkitSubMenuIndicatorLeftSpacing${t}`])}]],t)})(e,L));return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(l.BlockControls,{children:(0,p.jsxs)(s.ToolbarGroup,{children:[Z?(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(s.ToolbarButton,{icon:S,name:"Remove Submenu",label:(0,o.__)(e?.gkitSubMenuType&&"megamenu"===e?.gkitSubMenuType?"Remove Mega Menu":"Remove Submenu","gutenkit-blocks-addon"),onClick:()=>{t({gkitAddSubMenu:!1}),t({gkitSubMenuType:""}),O(n,[])}})}):(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(s.ToolbarButton,{icon:f,label:(0,o.__)("Add Submenu","gutenkit-blocks-addon"),onClick:()=>{t({gkitAddSubMenu:!0}),t({gkitSubMenuType:"dropdown"});const e=(0,i.createBlock)("gutenkit/nav-menu-item",{}),o=(0,i.createBlock)("gutenkit/nav-menu-submenu",{},[e]);(0,i.createBlocksFromInnerBlocksTemplate)([o]),O(n,[o]),E(e?.clientId)}}),!D&&F&&(0,p.jsx)(s.ToolbarButton,{icon:x,label:(0,o.__)("Add Mega Menu","gutenkit-blocks-addon"),onClick:()=>{t({gkitAddSubMenu:!0}),t({gkitSubMenuType:"megamenu"});const e=(0,i.createBlock)("gutenkit/container",{containerWidth:"alignfull",variationSeleted:!0}),o=(0,i.createBlock)("gutenkit-pro/mega-menu",{},[e]);(0,i.createBlocksFromInnerBlocksTemplate)([o]),O(n,[o]),E(e?.clientId)}})]}),(0,p.jsx)(s.ToolbarButton,{name:"link",icon:y,title:(0,o.__)("Link","gutenkit-blocks-addon"),onClick:e=>{_(!B)}})]})}),(0,p.jsx)(k,{blocksCSS:q}),d&&(0,p.jsx)(m,{children:(0,p.jsx)(I,{attributes:e,setAttributes:t,device:H,advancedControl:a,clientId:n,isProActive:F})}),(0,p.jsxs)("li",{...G,children:[(0,p.jsx)(b,{attributes:e,setAttributes:t,isLinkOpen:B,setIsLinkOpen:_,isProActive:F,isSelected:d,clientId:n,popoverAnchor:A,setPopoverAnchor:R,isNested:D,ref:U,onReplace:g,isEditingURL:T,setIsEditingURL:P}),e?.gkitAddSubMenu?(0,p.jsx)(p.Fragment,{children:(0,p.jsx)("div",{...$})}):null]})]})},icon:{src:j},save:function({attributes:e}){const{GkitIcon:t}=window.gutenkit.components,{linkGenerator:n}=window.gutenkit.helpers,{gkitMenuItemCustomLinkLabel:i,gkitMenuItemCustomLink:r}=e,s=l.useBlockProps.save({className:u()({[`gkit-nav-menu-submenu-type-${e?.gkitSubMenuType}`]:e?.gkitSubMenuType&&e?.gkitAddSubMenu}),"data-id":e?.gkitMenuItemCustomLink?.id}),a=l.useInnerBlocksProps.save({className:u()("gkit-nav-menu-submenu",{})}),c=n(r);return(0,p.jsxs)("li",{...s,children:[(0,p.jsx)("a",{...c,className:"gkit-nav-menu-link",children:(0,p.jsx)(l.RichText.Content,{tagName:"span",identifier:"label",value:i,className:"gkit-nav-menu-link-text","aria-label":(0,o.__)("Navigation link text","gutenkit-blocks-addon")})}),e?.gkitAddSubMenu?(0,p.jsx)(p.Fragment,{children:e?.gkitSubMenuIndicator&&e?.gkitSubMenuIndicator.hasOwnProperty("src")?(0,p.jsx)(t,{icon:e?.gkitSubMenuIndicator,className:"gkit-nav-menu-submenu-arrow",tagName:"button","aria-label":(0,o.__)("Submenu Arrow","gutenkit-blocks-addon")}):(0,p.jsx)("button",{className:"gkit-nav-menu-submenu-arrow","aria-label":(0,o.__)("Submenu Arrow","gutenkit-blocks-addon"),children:(0,p.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",className:"gkit-icon","aria-hidden":"true",focusable:"false",children:(0,p.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0 9.6c0-0.205 0.078-0.409 0.234-0.566 0.312-0.312 0.819-0.312 1.131 0l13.834 13.834 13.834-13.834c0.312-0.312 0.819-0.312 1.131 0s0.312 0.819 0 1.131l-14.4 14.4c-0.312 0.312-0.819 0.312-1.131 0l-14.4-14.4c-0.156-0.156-0.234-0.361-0.234-0.566z"})})})}):null,e?.gkitAddSubMenu?(0,p.jsx)(p.Fragment,{children:(0,p.jsx)("div",{...a})}):null]})}})},3832:e=>{"use strict";e.exports=window.wp.url},6087:e=>{"use strict";e.exports=window.wp.element},6427:e=>{"use strict";e.exports=window.wp.components},6942:(e,t)=>{var n;!function(){"use strict";var i={}.hasOwnProperty;function o(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];n&&(e=s(e,r(n)))}return e}function r(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return o.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var n in e)i.call(e,n)&&e[n]&&(t=s(t,n));return t}function s(e,t){return t?e?e+" "+t:e+t:e}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},7143:e=>{"use strict";e.exports=window.wp.data},7723:e=>{"use strict";e.exports=window.wp.i18n},8107:e=>{"use strict";e.exports=window.wp.dom}},o={};function r(e){var t=o[e];if(void 0!==t)return t.exports;var n=o[e]={exports:{}};return i[e](n,n.exports,r),n.exports}r.m=i,e=[],r.O=(t,n,i,o)=>{if(!n){var s=1/0;for(c=0;c<e.length;c++){for(var[n,i,o]=e[c],a=!0,u=0;u<n.length;u++)(!1&o||s>=o)&&Object.keys(r.O).every((e=>r.O[e](n[u])))?n.splice(u--,1):(a=!1,o<s&&(s=o));if(a){e.splice(c--,1);var l=i();void 0!==l&&(t=l)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[n,i,o]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,n)=>(r.f[n](e,t),t)),[])),r.u=e=>e+".js",r.miniCssF=e=>{},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),t={},n="gutenkit-blocks-addon:",r.l=(e,i,o,s)=>{if(t[e])t[e].push(i);else{var a,u;if(void 0!==o)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var d=l[c];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==n+o){a=d;break}}a||(u=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,r.nc&&a.setAttribute("nonce",r.nc),a.setAttribute("data-webpack",n+o),a.src=e),t[e]=[i];var g=(n,i)=>{a.onerror=a.onload=null,clearTimeout(k);var o=t[e];if(delete t[e],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((e=>e(i))),n)return n(i)},k=setTimeout(g.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=g.bind(null,a.onerror),a.onload=g.bind(null,a.onload),u&&document.head.appendChild(a)}},r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");if(n.length)for(var i=n.length-1;i>-1&&(!e||!/^http(s?):/.test(e));)e=n[i--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/^blob:/,"").replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e+"../../"})(),(()=>{var e={3794:0,4918:0};r.f.j=(t,n)=>{var i=r.o(e,t)?e[t]:void 0;if(0!==i)if(i)n.push(i[2]);else if(4918!=t){var o=new Promise(((n,o)=>i=e[t]=[n,o]));n.push(i[2]=o);var s=r.p+r.u(t),a=new Error;r.l(s,(n=>{if(r.o(e,t)&&(0!==(i=e[t])&&(e[t]=void 0),i)){var o=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.src;a.message="Loading chunk "+t+" failed.\n("+o+": "+s+")",a.name="ChunkLoadError",a.type=o,a.request=s,i[1](a)}}),"chunk-"+t,t)}else e[t]=0},r.O.j=t=>0===e[t];var t=(t,n)=>{var i,o,[s,a,u]=n,l=0;if(s.some((t=>0!==e[t]))){for(i in a)r.o(a,i)&&(r.m[i]=a[i]);if(u)var c=u(r)}for(t&&t(n);l<s.length;l++)o=s[l],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(c)},n=globalThis.webpackChunkgutenkit_blocks_addon=globalThis.webpackChunkgutenkit_blocks_addon||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var s=r.O(void 0,[4918],(()=>r(807)));s=r.O(s)})();