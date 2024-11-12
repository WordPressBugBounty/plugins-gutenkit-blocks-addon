(()=>{var i,e,t,o={8353:(i,e,t)=>{"use strict";const o=window.wp.blocks;var a=t(7723),n=t(6087),l=t(6942),r=t.n(l);const c=window.wp.blockEditor;var s=t(790);const d=({attributes:i,setAttributes:e,isEdit:t})=>{const{GkitIcon:o}=window.gutenkit.components,{linkGenerator:n}=window.gutenkit.helpers,{gkitSocialmediaIcons:l,gkitSocialmediaStyleIconPosition:d,gkitSocialmediaStyle:m}=i;return(0,s.jsx)(s.Fragment,{children:l&&(0,s.jsx)("ul",{className:r()({"gkit-social-media-menu":!0,[`gkit-social-media-icon-position-${d}`]:"both"===m,[`gkit-social-media-icon-style-${m}`]:m}),children:l.map(((i,d)=>{const g={...n(i?.gkitSocialmediaLink),onClick:window?.gutenkit?i=>i.preventDefault():null},u=r()("gkit-social-media-menu-item",`gkit-social-media-menu-item-${Number(d)}`);return(0,s.jsx)("li",{className:u,children:(0,s.jsxs)("a",{...g,className:"gkit-social-media-menu-item-link","aria-label":i?.gkitSocialmediaLabel,children:["icon"!==m&&(0,s.jsx)(s.Fragment,{children:t?(0,s.jsx)(c.RichText,{identifier:`gkitSocialmediaLabel-${d}`,tagName:"span",value:i?.gkitSocialmediaLabel,className:"gkit-social-media-menu-item-name",onChange:i=>((i,t,o)=>{const a=JSON.parse(JSON.stringify(l));a[i].gkitSocialmediaLabel=o,e({gkitSocialmediaIcons:a})})(d,0,i),placeholder:(0,a.__)("Enter Label..","gutenkit")}):(0,s.jsx)("span",{className:"gkit-social-media-menu-item-name",children:i?.gkitSocialmediaLabel})}),"text"!==m&&(0,s.jsx)(o,{icon:i?.gkitSocialmediaIcon})]})},d)}))})})},m=(0,n.lazy)((()=>t.e(3834).then(t.bind(t,3834)))),g=JSON.parse('{"UU":"gutenkit/social-icons"}'),{socialIcons:u}=window.gutenkit.editorIcon;(0,o.registerBlockType)(g.UU,{edit:function({attributes:i,setAttributes:e,advancedControl:t,item:o,isSelected:a}){const{GkitStyle:n,GkitSuspense:l}=window.gutenkit.components,{useDeviceType:g,useBlockStyles:u,useDeviceList:k}=window.gutenkit.helpers,p=k(),S=g(),h=(0,c.useBlockProps)({className:r()({"gkit-social-media":!0})}),v=u(i,e,"blocksCSS",((i,e)=>{const{parseCSS:t,getBoxShadowValue:o,getBoxValue:a,getBorderValue:n,getTypographyValue:l,getSliderValue:r,backgroundGenerator:c,getColor:s}=window.gutenkit.helpers,d=i?.blockClass;return t([[{selector:`.${d} .gkit-social-media-menu .gkit-social-media-menu-item .gkit-social-media-menu-item-link`,...n(i?.gkitSocialmediaBorder),"box-shadow":o(i?.gkitSocialmediaBoxShadow),background:c(i?.gkitSocialIconNomalBackgroundColor).background,fill:s(i?.gkitSocialIconNomalColor),color:s(i?.gkitSocialIconNomalColor)},{selector:`.${d} .gkit-social-media-menu .gkit-social-media-menu-item:hover .gkit-social-media-menu-item-link`,"box-shadow":o(i?.gkitSocialmediaBoxShadowHover),background:c(i?.gkitSocialIconHoverBackgroundColor).background,...n(i?.gkitSocialmediaBorderHover),fill:s(i?.gkitSocialIconHoverColor),color:s(i?.gkitSocialIconHoverColor)},{selector:`.${d} .gkit-social-media-icon-style-both .gkit-social-media-menu-item .gkit-social-media-menu-item-link,\n\t\t\t\t.${d} .gkit-social-media-icon-style-text .gkit-social-media-menu-item .gkit-social-media-menu-item-link`,"text-shadow":o(i?.gkitSocialmediaTextShadow)},{selector:`.${d} .gkit-social-media-icon-style-both .gkit-social-media-menu-item:hover .gkit-social-media-menu-item-link,\n\t\t\t\t.${d} .gkit-social-media-icon-style-text .gkit-social-media-menu-item:hover .gkit-social-media-menu-item-link`,"text-shadow":o(i?.gkitSocialmediaTextShadowHover)},...(i=>{const e=i.map(((i,e)=>[{selector:`.${d} .gkit-social-media-menu .gkit-social-media-menu-item-${e} .gkit-social-media-menu-item-link`,color:s(i.gkitSocialmediaIconColor),fill:s(i.gkitSocialmediaIconColor),"background-color":i.gkitSocialmediaIconBgColor,"border-color":i.gkitSocialmediaBorderColor,"box-shadow":o(i.gkitSocialmediaBoxShadow)},{selector:`.${d} .gkit-social-media-menu .gkit-social-media-menu-item-${e}:hover .gkit-social-media-menu-item-link`,color:s(i.gkitSocialmediaIconHoverColor),fill:s(i.gkitSocialmediaIconHoverColor),"background-color":i.gkitSocialmediaIconHoverBgColor,"border-color":i.gkitSocialmediaBorderHoverColor,"box-shadow":o(i.gkitSocialmediaBoxShadowHover)},{selector:`.${d} .gkit-social-media-icon-style-both .gkit-social-media-menu-item-${e} .gkit-social-media-menu-item-link,\n\t\t\t\t\t.gkit-social-media-icon-style-text .gkit-social-media-menu-item-${e} .gkit-social-media-menu-item-link`,"text-shadow":o(i.gkitSocialmediaTextShadow)},{selector:`.${d} .gkit-social-media-icon-style-both .gkit-social-media-menu-item-${e}:hover .gkit-social-media-menu-item-link,\n\t\t\t\t\t.gkit-social-media-icon-style-text .gkit-social-media-menu-item-${e}:hover .gkit-social-media-menu-item-link`,"text-shadow":o(i.gkitSocialmediaTextShadowHover)}]));let t=[];return e.forEach((i=>{t=[...t,...i]})),t})(i?.gkitSocialmediaIcons)],e=>[{selector:`.${d} .gkit-social-media-menu`,"justify-content":"row"===i?.[`gkitSocialmediaListDisplay${e}`]?i?.[`gkitSocialmediaListAlign${e}`]:"flex-start","align-items":"column"===i?.[`gkitSocialmediaListDisplay${e}`]?i?.[`gkitSocialmediaListAlign${e}`]:"center",gap:r(i?.[`gkitSocialmediaElementSpacing${e}`]),"flex-direction":i?.[`gkitSocialmediaListDisplay${e}`]},{selector:`.${d} .gkit-social-media-menu .gkit-social-media-menu-item`,...a(i?.[`gkitSocialmediaListBorderRadius${e}`],"border-radius"),"justify-content":("column"===i?.[`gkitSocialmediaListDisplay${e}`]?i?.[`gkitSocialmediaListAlign${e}`]:"center")+" !important"},{selector:`.${d} .gkit-social-media-menu .gkit-social-media-menu-item .gkit-social-media-menu-item-link`,...a(i?.[`gkitSocialmediaListBorderRadius${e}`],"border-radius"),width:!0===i?.useHeightAndWidth&&"icon"===i?.gkitSocialmediaStyle?r(i?.[`gkitSocialmediaListWidth${e}`]):void 0,height:!0===i?.useHeightAndWidth&&"icon"===i?.gkitSocialmediaStyle?r(i?.[`gkitSocialmediaListHeight${e}`]):void 0,gap:r(i?.[`gkitSocialmediaIconSpacing${e}`]),...a("icon"!==i?.gkitSocialmediaStyle&&i?.[`gkitSocialmediaListPadding${e}`],"padding")},{selector:`.${d} .gkit-social-media-icon-style-icon .gkit-social-media-menu-item .gkit-social-media-menu-item-link`,...a(!1===i?.useHeightAndWidth&&"icon"===i?.gkitSocialmediaStyle&&i?.[`gkitSocialmediaIconPadding${e}`],"padding")},{selector:`.${d} .gkit-social-media-menu .gkit-social-media-menu-item .gkit-social-media-menu-item-link svg`,"font-size":r(i?.[`gkitSocialmediaListIconSize${e}`])},{selector:`.${d} .gkit-social-media-menu .gkit-social-media-menu-item`,width:"column"===i?.[`gkitSocialmediaListDisplay${e}`]&&"100%"},{selector:`.${d} .gkit-social-media-menu .gkit-social-media-menu-item:hover .gkit-social-media-menu-item-link`,...a(i?.[`gkitSocialmediaListBorderRadiusHover${e}`],"border-radius")},{selector:`.${d} .gkit-social-media-menu .gkit-social-media-menu-item .gkit-social-media-menu-item-link`,...l(i?.gkitSocialmediaListTypography,e)}]],e)})(i,p));return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n,{blocksCSS:v}),a&&(0,s.jsx)(l,{children:(0,s.jsx)(m,{attributes:i,setAttributes:e,device:S,advancedControl:t})}),(0,s.jsx)("div",{...h,children:(0,s.jsx)(d,{attributes:i,setAttributes:e,item:o,isEdit:!0})})]})},icon:{src:u},save:function({attributes:i,item:e}){const t=c.useBlockProps.save({className:"gkit-social-media"});return(0,s.jsx)("div",{...t,children:(0,s.jsx)(d,{attributes:i,item:e,isEdit:!1})})}})},790:i=>{"use strict";i.exports=window.ReactJSXRuntime},6427:i=>{"use strict";i.exports=window.wp.components},6087:i=>{"use strict";i.exports=window.wp.element},7723:i=>{"use strict";i.exports=window.wp.i18n},5573:i=>{"use strict";i.exports=window.wp.primitives},6942:(i,e)=>{var t;!function(){"use strict";var o={}.hasOwnProperty;function a(){for(var i="",e=0;e<arguments.length;e++){var t=arguments[e];t&&(i=l(i,n(t)))}return i}function n(i){if("string"==typeof i||"number"==typeof i)return i;if("object"!=typeof i)return"";if(Array.isArray(i))return a.apply(null,i);if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]"))return i.toString();var e="";for(var t in i)o.call(i,t)&&i[t]&&(e=l(e,t));return e}function l(i,e){return e?i?i+" "+e:i+e:i}i.exports?(a.default=a,i.exports=a):void 0===(t=function(){return a}.apply(e,[]))||(i.exports=t)}()}},a={};function n(i){var e=a[i];if(void 0!==e)return e.exports;var t=a[i]={exports:{}};return o[i](t,t.exports,n),t.exports}n.m=o,i=[],n.O=(e,t,o,a)=>{if(!t){var l=1/0;for(d=0;d<i.length;d++){t=i[d][0],o=i[d][1],a=i[d][2];for(var r=!0,c=0;c<t.length;c++)(!1&a||l>=a)&&Object.keys(n.O).every((i=>n.O[i](t[c])))?t.splice(c--,1):(r=!1,a<l&&(l=a));if(r){i.splice(d--,1);var s=o();void 0!==s&&(e=s)}}return e}a=a||0;for(var d=i.length;d>0&&i[d-1][2]>a;d--)i[d]=i[d-1];i[d]=[t,o,a]},n.n=i=>{var e=i&&i.__esModule?()=>i.default:()=>i;return n.d(e,{a:e}),e},n.d=(i,e)=>{for(var t in e)n.o(e,t)&&!n.o(i,t)&&Object.defineProperty(i,t,{enumerable:!0,get:e[t]})},n.f={},n.e=i=>Promise.all(Object.keys(n.f).reduce(((e,t)=>(n.f[t](i,e),e)),[])),n.u=i=>i+".js",n.miniCssF=i=>{},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(i){if("object"==typeof window)return window}}(),n.o=(i,e)=>Object.prototype.hasOwnProperty.call(i,e),e={},t="gutenkit-blocks-addon:",n.l=(i,o,a,l)=>{if(e[i])e[i].push(o);else{var r,c;if(void 0!==a)for(var s=document.getElementsByTagName("script"),d=0;d<s.length;d++){var m=s[d];if(m.getAttribute("src")==i||m.getAttribute("data-webpack")==t+a){r=m;break}}r||(c=!0,(r=document.createElement("script")).charset="utf-8",r.timeout=120,n.nc&&r.setAttribute("nonce",n.nc),r.setAttribute("data-webpack",t+a),r.src=i),e[i]=[o];var g=(t,o)=>{r.onerror=r.onload=null,clearTimeout(u);var a=e[i];if(delete e[i],r.parentNode&&r.parentNode.removeChild(r),a&&a.forEach((i=>i(o))),t)return t(o)},u=setTimeout(g.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=g.bind(null,r.onerror),r.onload=g.bind(null,r.onload),c&&document.head.appendChild(r)}},n.r=i=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},(()=>{var i;n.g.importScripts&&(i=n.g.location+"");var e=n.g.document;if(!i&&e&&(e.currentScript&&"SCRIPT"===e.currentScript.tagName.toUpperCase()&&(i=e.currentScript.src),!i)){var t=e.getElementsByTagName("script");if(t.length)for(var o=t.length-1;o>-1&&(!i||!/^http(s?):/.test(i));)i=t[o--].src}if(!i)throw new Error("Automatic publicPath is not supported in this browser");i=i.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=i+"../../"})(),(()=>{var i={2913:0,6133:0};n.f.j=(e,t)=>{var o=n.o(i,e)?i[e]:void 0;if(0!==o)if(o)t.push(o[2]);else if(6133!=e){var a=new Promise(((t,a)=>o=i[e]=[t,a]));t.push(o[2]=a);var l=n.p+n.u(e),r=new Error;n.l(l,(t=>{if(n.o(i,e)&&(0!==(o=i[e])&&(i[e]=void 0),o)){var a=t&&("load"===t.type?"missing":t.type),l=t&&t.target&&t.target.src;r.message="Loading chunk "+e+" failed.\n("+a+": "+l+")",r.name="ChunkLoadError",r.type=a,r.request=l,o[1](r)}}),"chunk-"+e,e)}else i[e]=0},n.O.j=e=>0===i[e];var e=(e,t)=>{var o,a,l=t[0],r=t[1],c=t[2],s=0;if(l.some((e=>0!==i[e]))){for(o in r)n.o(r,o)&&(n.m[o]=r[o]);if(c)var d=c(n)}for(e&&e(t);s<l.length;s++)a=l[s],n.o(i,a)&&i[a]&&i[a][0](),i[a]=0;return n.O(d)},t=self.webpackChunkgutenkit_blocks_addon=self.webpackChunkgutenkit_blocks_addon||[];t.forEach(e.bind(null,0)),t.push=e.bind(null,t.push.bind(t))})();var l=n.O(void 0,[6133],(()=>n(8353)));l=n.O(l)})();