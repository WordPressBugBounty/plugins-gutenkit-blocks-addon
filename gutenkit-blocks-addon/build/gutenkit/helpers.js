(()=>{var e={7752:(e,t,o)=>{var n;!function(){function i(e,t,o){return e.call.apply(e.bind,arguments)}function r(e,t,o){if(!e)throw Error();if(2<arguments.length){var n=Array.prototype.slice.call(arguments,2);return function(){var o=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(o,n),e.apply(t,o)}}return function(){return e.apply(t,arguments)}}function s(e,t,o){return(s=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?i:r).apply(null,arguments)}var a=Date.now||function(){return+new Date};function c(e,t){this.a=e,this.o=t||e,this.c=this.o.document}var l=!!window.FontFace;function u(e,t,o,n){if(t=e.c.createElement(t),o)for(var i in o)o.hasOwnProperty(i)&&("style"==i?t.style.cssText=o[i]:t.setAttribute(i,o[i]));return n&&t.appendChild(e.c.createTextNode(n)),t}function g(e,t,o){(e=e.c.getElementsByTagName(t)[0])||(e=document.documentElement),e.insertBefore(o,e.lastChild)}function f(e){e.parentNode&&e.parentNode.removeChild(e)}function d(e,t,o){t=t||[],o=o||[];for(var n=e.className.split(/\s+/),i=0;i<t.length;i+=1){for(var r=!1,s=0;s<n.length;s+=1)if(t[i]===n[s]){r=!0;break}r||n.push(t[i])}for(t=[],i=0;i<n.length;i+=1){for(r=!1,s=0;s<o.length;s+=1)if(n[i]===o[s]){r=!0;break}r||t.push(n[i])}e.className=t.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function h(e,t){for(var o=e.className.split(/\s+/),n=0,i=o.length;n<i;n++)if(o[n]==t)return!0;return!1}function p(e,t,o){function n(){a&&i&&r&&(a(s),a=null)}t=u(e,"link",{rel:"stylesheet",href:t,media:"all"});var i=!1,r=!0,s=null,a=o||null;l?(t.onload=function(){i=!0,n()},t.onerror=function(){i=!0,s=Error("Stylesheet failed to load"),n()}):setTimeout((function(){i=!0,n()}),0),g(e,"head",t)}function m(e,t,o,n){var i=e.c.getElementsByTagName("head")[0];if(i){var r=u(e,"script",{src:t}),s=!1;return r.onload=r.onreadystatechange=function(){s||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(s=!0,o&&o(null),r.onload=r.onreadystatechange=null,"HEAD"==r.parentNode.tagName&&i.removeChild(r))},i.appendChild(r),setTimeout((function(){s||(s=!0,o&&o(Error("Script load timeout")))}),n||5e3),r}return null}function b(){this.a=0,this.c=null}function v(e){return e.a++,function(){e.a--,w(e)}}function k(e,t){e.c=t,w(e)}function w(e){0==e.a&&e.c&&(e.c(),e.c=null)}function y(e){this.a=e||"-"}function S(e,t){this.c=e,this.f=4,this.a="n";var o=(t||"n4").match(/^([nio])([1-9])$/i);o&&(this.a=o[1],this.f=parseInt(o[2],10))}function $(e){var t=[];e=e.split(/,\s*/);for(var o=0;o<e.length;o++){var n=e[o].replace(/['"]/g,"");-1!=n.indexOf(" ")||/^\d/.test(n)?t.push("'"+n+"'"):t.push(n)}return t.join(",")}function z(e){return e.a+e.f}function x(e){var t="normal";return"o"===e.a?t="oblique":"i"===e.a&&(t="italic"),t}function T(e){var t=4,o="n",n=null;return e&&((n=e.match(/(normal|oblique|italic)/i))&&n[1]&&(o=n[1].substr(0,1).toLowerCase()),(n=e.match(/([1-9]00|normal|bold)/i))&&n[1]&&(/bold/i.test(n[1])?t=7:/[1-9]00/.test(n[1])&&(t=parseInt(n[1].substr(0,1),10)))),o+t}function P(e,t){this.c=e,this.f=e.o.document.documentElement,this.h=t,this.a=new y("-"),this.j=!1!==t.events,this.g=!1!==t.classes}function C(e){if(e.g){var t=h(e.f,e.a.c("wf","active")),o=[],n=[e.a.c("wf","loading")];t||o.push(e.a.c("wf","inactive")),d(e.f,o,n)}j(e,"inactive")}function j(e,t,o){e.j&&e.h[t]&&(o?e.h[t](o.c,z(o)):e.h[t]())}function A(){this.c={}}function E(e,t){this.c=e,this.f=t,this.a=u(this.c,"span",{"aria-hidden":"true"},this.f)}function N(e){g(e.c,"body",e.a)}function _(e){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+$(e.c)+";font-style:"+x(e)+";font-weight:"+e.f+"00;"}function I(e,t,o,n,i,r){this.g=e,this.j=t,this.a=n,this.c=o,this.f=i||3e3,this.h=r||void 0}function O(e,t,o,n,i,r,s){this.v=e,this.B=t,this.c=o,this.a=n,this.s=s||"BESbswy",this.f={},this.w=i||3e3,this.u=r||null,this.m=this.j=this.h=this.g=null,this.g=new E(this.c,this.s),this.h=new E(this.c,this.s),this.j=new E(this.c,this.s),this.m=new E(this.c,this.s),e=_(e=new S(this.a.c+",serif",z(this.a))),this.g.a.style.cssText=e,e=_(e=new S(this.a.c+",sans-serif",z(this.a))),this.h.a.style.cssText=e,e=_(e=new S("serif",z(this.a))),this.j.a.style.cssText=e,e=_(e=new S("sans-serif",z(this.a))),this.m.a.style.cssText=e,N(this.g),N(this.h),N(this.j),N(this.m)}y.prototype.c=function(e){for(var t=[],o=0;o<arguments.length;o++)t.push(arguments[o].replace(/[\W_]+/g,"").toLowerCase());return t.join(this.a)},I.prototype.start=function(){var e=this.c.o.document,t=this,o=a(),n=new Promise((function(n,i){!function r(){a()-o>=t.f?i():e.fonts.load(function(e){return x(e)+" "+e.f+"00 300px "+$(e.c)}(t.a),t.h).then((function(e){1<=e.length?n():setTimeout(r,25)}),(function(){i()}))}()})),i=null,r=new Promise((function(e,o){i=setTimeout(o,t.f)}));Promise.race([r,n]).then((function(){i&&(clearTimeout(i),i=null),t.g(t.a)}),(function(){t.j(t.a)}))};var D={D:"serif",C:"sans-serif"},F=null;function B(){if(null===F){var e=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);F=!!e&&(536>parseInt(e[1],10)||536===parseInt(e[1],10)&&11>=parseInt(e[2],10))}return F}function H(e,t,o){for(var n in D)if(D.hasOwnProperty(n)&&t===e.f[D[n]]&&o===e.f[D[n]])return!0;return!1}function R(e){var t,o=e.g.a.offsetWidth,n=e.h.a.offsetWidth;(t=o===e.f.serif&&n===e.f["sans-serif"])||(t=B()&&H(e,o,n)),t?a()-e.A>=e.w?B()&&H(e,o,n)&&(null===e.u||e.u.hasOwnProperty(e.a.c))?L(e,e.v):L(e,e.B):function(e){setTimeout(s((function(){R(this)}),e),50)}(e):L(e,e.v)}function L(e,t){setTimeout(s((function(){f(this.g.a),f(this.h.a),f(this.j.a),f(this.m.a),t(this.a)}),e),0)}function M(e,t,o){this.c=e,this.a=t,this.f=0,this.m=this.j=!1,this.s=o}O.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.m.a.offsetWidth,this.A=a(),R(this)};var W=null;function X(e){0==--e.f&&e.j&&(e.m?((e=e.a).g&&d(e.f,[e.a.c("wf","active")],[e.a.c("wf","loading"),e.a.c("wf","inactive")]),j(e,"active")):C(e.a))}function Y(e){this.j=e,this.a=new A,this.h=0,this.f=this.g=!0}function V(e,t,o,n,i){var r=0==--e.h;(e.f||e.g)&&setTimeout((function(){var e=i||null,a=n||{};if(0===o.length&&r)C(t.a);else{t.f+=o.length,r&&(t.j=r);var c,l=[];for(c=0;c<o.length;c++){var u=o[c],g=a[u.c],f=t.a,h=u;if(f.g&&d(f.f,[f.a.c("wf",h.c,z(h).toString(),"loading")]),j(f,"fontloading",h),f=null,null===W)if(window.FontFace){h=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent);var p=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);W=h?42<parseInt(h[1],10):!p}else W=!1;f=W?new I(s(t.g,t),s(t.h,t),t.c,u,t.s,g):new O(s(t.g,t),s(t.h,t),t.c,u,t.s,e,g),l.push(f)}for(c=0;c<l.length;c++)l[c].start()}}),0)}function G(e,t){this.c=e,this.a=t}function U(e,t){this.c=e,this.a=t}function J(e,t){this.c=e||q,this.a=[],this.f=[],this.g=t||""}M.prototype.g=function(e){var t=this.a;t.g&&d(t.f,[t.a.c("wf",e.c,z(e).toString(),"active")],[t.a.c("wf",e.c,z(e).toString(),"loading"),t.a.c("wf",e.c,z(e).toString(),"inactive")]),j(t,"fontactive",e),this.m=!0,X(this)},M.prototype.h=function(e){var t=this.a;if(t.g){var o=h(t.f,t.a.c("wf",e.c,z(e).toString(),"active")),n=[],i=[t.a.c("wf",e.c,z(e).toString(),"loading")];o||n.push(t.a.c("wf",e.c,z(e).toString(),"inactive")),d(t.f,n,i)}j(t,"fontinactive",e),X(this)},Y.prototype.load=function(e){this.c=new c(this.j,e.context||this.j),this.g=!1!==e.events,this.f=!1!==e.classes,function(e,t,o){var n=[],i=o.timeout;!function(e){e.g&&d(e.f,[e.a.c("wf","loading")]),j(e,"loading")}(t),n=function(e,t,o){var n,i=[];for(n in t)if(t.hasOwnProperty(n)){var r=e.c[n];r&&i.push(r(t[n],o))}return i}(e.a,o,e.c);var r=new M(e.c,t,i);for(e.h=n.length,t=0,o=n.length;t<o;t++)n[t].load((function(t,o,n){V(e,r,t,o,n)}))}(this,new P(this.c,e),e)},G.prototype.load=function(e){function t(){if(r["__mti_fntLst"+n]){var o,i=r["__mti_fntLst"+n](),s=[];if(i)for(var a=0;a<i.length;a++){var c=i[a].fontfamily;null!=i[a].fontStyle&&null!=i[a].fontWeight?(o=i[a].fontStyle+i[a].fontWeight,s.push(new S(c,o))):s.push(new S(c))}e(s)}else setTimeout((function(){t()}),50)}var o=this,n=o.a.projectId,i=o.a.version;if(n){var r=o.c.o;m(this.c,(o.a.api||"https://fast.fonts.net/jsapi")+"/"+n+".js"+(i?"?v="+i:""),(function(i){i?e([]):(r["__MonotypeConfiguration__"+n]=function(){return o.a},t())})).id="__MonotypeAPIScript__"+n}else e([])},U.prototype.load=function(e){var t,o,n=this.a.urls||[],i=this.a.families||[],r=this.a.testStrings||{},s=new b;for(t=0,o=n.length;t<o;t++)p(this.c,n[t],v(s));var a=[];for(t=0,o=i.length;t<o;t++)if((n=i[t].split(":"))[1])for(var c=n[1].split(","),l=0;l<c.length;l+=1)a.push(new S(n[0],c[l]));else a.push(new S(n[0]));k(s,(function(){e(a,r)}))};var q="https://fonts.googleapis.com/css";function K(e){this.f=e,this.a=[],this.c={}}var Q={latin:"BESbswy","latin-ext":"çöüğş",cyrillic:"йяЖ",greek:"αβΣ",khmer:"កខគ",Hanuman:"កខគ"},Z={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},ee={i:"i",italic:"i",n:"n",normal:"n"},te=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;function oe(e,t){this.c=e,this.a=t}var ne={Arimo:!0,Cousine:!0,Tinos:!0};function ie(e,t){this.c=e,this.a=t}function re(e,t){this.c=e,this.f=t,this.a=[]}oe.prototype.load=function(e){var t=new b,o=this.c,n=new J(this.a.api,this.a.text),i=this.a.families;!function(e,t){for(var o=t.length,n=0;n<o;n++){var i=t[n].split(":");3==i.length&&e.f.push(i.pop());var r="";2==i.length&&""!=i[1]&&(r=":"),e.a.push(i.join(r))}}(n,i);var r=new K(i);!function(e){for(var t=e.f.length,o=0;o<t;o++){var n=e.f[o].split(":"),i=n[0].replace(/\+/g," "),r=["n4"];if(2<=n.length){var s;if(s=[],a=n[1])for(var a,c=(a=a.split(",")).length,l=0;l<c;l++){var u;if((u=a[l]).match(/^[\w-]+$/))if(null==(g=te.exec(u.toLowerCase())))u="";else{if(u=null==(u=g[2])||""==u?"n":ee[u],null==(g=g[1])||""==g)g="4";else var g=Z[g]||(isNaN(g)?"4":g.substr(0,1));u=[u,g].join("")}else u="";u&&s.push(u)}0<s.length&&(r=s),3==n.length&&(s=[],0<(n=(n=n[2])?n.split(","):s).length&&(n=Q[n[0]])&&(e.c[i]=n))}for(e.c[i]||(n=Q[i])&&(e.c[i]=n),n=0;n<r.length;n+=1)e.a.push(new S(i,r[n]))}}(r),p(o,function(e){if(0==e.a.length)throw Error("No fonts to load!");if(-1!=e.c.indexOf("kit="))return e.c;for(var t=e.a.length,o=[],n=0;n<t;n++)o.push(e.a[n].replace(/ /g,"+"));return t=e.c+"?family="+o.join("%7C"),0<e.f.length&&(t+="&subset="+e.f.join(",")),0<e.g.length&&(t+="&text="+encodeURIComponent(e.g)),t}(n),v(t)),k(t,(function(){e(r.a,r.c,ne)}))},ie.prototype.load=function(e){var t=this.a.id,o=this.c.o;t?m(this.c,(this.a.api||"https://use.typekit.net")+"/"+t+".js",(function(t){if(t)e([]);else if(o.Typekit&&o.Typekit.config&&o.Typekit.config.fn){t=o.Typekit.config.fn;for(var n=[],i=0;i<t.length;i+=2)for(var r=t[i],s=t[i+1],a=0;a<s.length;a++)n.push(new S(r,s[a]));try{o.Typekit.load({events:!1,classes:!1,async:!0})}catch(e){}e(n)}}),2e3):e([])},re.prototype.load=function(e){var t=this.f.id,o=this.c.o,n=this;t?(o.__webfontfontdeckmodule__||(o.__webfontfontdeckmodule__={}),o.__webfontfontdeckmodule__[t]=function(t,o){for(var i=0,r=o.fonts.length;i<r;++i){var s=o.fonts[i];n.a.push(new S(s.name,T("font-weight:"+s.weight+";font-style:"+s.style)))}e(n.a)},m(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+function(e){return e.o.location.hostname||e.a.location.hostname}(this.c)+"/"+t+".js",(function(t){t&&e([])}))):e([])};var se=new Y(window);se.a.c.custom=function(e,t){return new U(t,e)},se.a.c.fontdeck=function(e,t){return new re(t,e)},se.a.c.monotype=function(e,t){return new G(t,e)},se.a.c.typekit=function(e,t){return new ie(t,e)},se.a.c.google=function(e,t){return new oe(t,e)};var ae={load:s(se.load,se)};void 0===(n=function(){return ae}.call(t,o,t,e))||(e.exports=n)}()}},t={};function o(n){var i=t[n];if(void 0!==i)return i.exports;var r=t[n]={exports:{}};return e[n](r,r.exports,o),r.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");if(n.length)for(var i=n.length-1;i>-1&&(!e||!/^http(s?):/.test(e));)e=n[i--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e+"../"})(),(()=>{"use strict";const e=(e,t,o)=>{const n=wp.data.select("core/block-editor").getSettings(),i=n&&n.__experimentalFeatures?n.__experimentalFeatures.color:{},r=i&&i[t]?i[t]:{};return Object.keys(r).map((t=>r[t].find((t=>t&&t[o]===e)))).filter((e=>void 0!==e))[0]},t=e=>null==e||"object"==typeof e&&0===Object.keys(e).length||"string"==typeof e&&0===e.trim().length||!1===e,n=t=>{if(!t||t.startsWith("#"))return t;const o=t.split(","),n=e(o[0],"palette","slug");return n?`var(--wp--preset--color--${n.slug}, ${n.color})`:o[1]},i=t=>{if(!t||t.startsWith("linear-gradient(")||t?.startsWith("radial-gradient("))return t;const o=t.split(/,(.+)/).filter(Boolean),n=e(o[0],"gradients","slug");return n?`var(--wp--preset--gradient--${n.slug}, ${n.gradient})`:o[1]},r=e=>{let o="";return o=t(e?.size)||t(e?.unit)?!t(e?.size)&&t(e?.unit)?`${e?.size}`:void 0:`${e?.size}${e?.unit}`,o},s=e=>{let o="";return!t(e?.blur)&&(o+=`blur(${e?.blur?.size}px) `),!t(e?.brightness)&&(o+=`brightness(${e?.brightness?.size}%) `),!t(e?.contrast)&&(o+=`contrast(${e?.contrast?.size}%) `),!t(e?.saturation)&&(o+=`saturate(${e?.saturation?.size}%) `),!t(e?.hue)&&(o+=`hue-rotate(${e?.hue?.size}deg) `),!t(e?.grayscale)&&(o+=`grayscale(${e?.grayscale?.size}%) `),!t(e?.invert)&&(o+=`invert(${e?.invert?.size}%) `),!t(e?.sepia)&&(o+=`sepia(${e?.sepia?.size}%) `),t(o)?void 0:o},a=window.wp.hooks,c=window.wp.url,l={label:"Desktop",slug:"Desktop",value:"base",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><path d="M20.5 16h-.7V8c0-1.1-.9-2-2-2H6.2c-1.1 0-2 .9-2 2v8h-.7c-.8 0-1.5.7-1.5 1.5h20c0-.8-.7-1.5-1.5-1.5zM5.7 8c0-.3.2-.5.5-.5h11.6c.3 0 .5.2.5.5v7.6H5.7V8z"></path></svg>'},u=[l,{label:"Tablet",slug:"Tablet",value:"1024",direction:"max"},{label:"Mobile",slug:"Mobile",value:"767",direction:"max"}],g=window.wp.data,f=window.wp.editor,d=window.wp.element;var h=o(7752),p=o.n(h);const m=o.p+"images/placeholder.e4997309.jpg",b=o.p+"images/libraryPlaceholder.9201fa54.png",v=o.p+"images/dynamic-placeholder.ab3d870e.png",k=e=>{const{getBlockAttributes:t}=(0,g.select)("core/block-editor");return t(e)},w=(e,t)=>{const{updateBlockAttributes:o}=(0,g.dispatch)("core/block-editor");o(e,t)},y=window.wp.apiFetch;var S=o.n(y);const $=function(e,t,o){const n=new Date;n.setTime(n.getTime()+60*o*60*1e3);const i=`expires=${n.toUTCString()}`;document.cookie=`${e}=${t}; ${i}; path=/`},z=function(e){const t=`; ${document.cookie}`.split(`; ${e}=`);return 2===t.length?t.pop().split(";").shift():null},x=new Set(["px","em","rem","%","vh","vw"]),T=e=>{const t=[];for(const o in e){const n=e[o];!n||x.has(n)||Number.isNaN(n)||"string"==typeof n&&n.includes("undefined")||t.push(`${o}: ${n};`)}return t.join(" ")},P=e=>!!e&&!!(e?.desktop||e?.tablet||e?.mobile||e?.tabletlandscape||e?.mobilelandscape||e?.laptop||e?.widescreen||e?.customStyles),C=new Set(["px","em","rem","%","vh","vw"]),j=e=>{let t="";for(const o in e){const n=e[o];!n||C.has(n)||Number.isNaN(n)||"string"==typeof n&&n.includes("undefined")||(t+=`${o}: ${n}; `)}return t.trim()},A=new URL(m),E=new URL(b),N=new URL(v);window?.gutenkit?.screen&&(window.gutenkit.helpers={colorsGroup:[{color:"#72aee6",name:"Blue 20"},{color:"#3582c4",name:"Blue 40"},{color:"#e65054",name:"Red 40"},{color:"#8a2424",name:"Red 70"}],boxControlUnit:[{value:"px",label:"px"},{value:"em",label:"em"},{value:"%",label:"%"}],overflowOptions:[{label:"Default",value:""},{label:"Hidden",value:"hidden"},{label:"Auto",value:"auto"}],htmlTags:[{label:"Div",value:"div"},{label:"Header",value:"header"},{label:"Main",value:"main"},{label:"Article",value:"article"},{label:"Section",value:"section"},{label:"Aside",value:"aside"},{label:"Figure",value:"figure"},{label:"Figcaption",value:"figcaption"},{label:"Nav",value:"nav"},{label:"Footer",value:"footer"}],backgroundGenerator:(e,o="Desktop")=>{let s={background:"",size:""};return"image"!==e?.backgroundType||t(e?.backgroundImage?.url)&&t(e?.backgroundImage?.dynamicContentType)||(s.background+=(0,a.applyFilters)("gutenkit.backgroundImage.url",`url(${e?.backgroundImage?.imageUrl?.[o]?e?.backgroundImage?.imageUrl?.[o]:e?.backgroundImage?.url})`,e?.backgroundImage),!t(e?.backgroundRepeat)&&(s.background+=`${e?.backgroundRepeat} `),!t(e?.backgroundAttachment)&&(s.background+=`${e?.backgroundAttachment} `),!t(e?.backgroundPosition[o])&&"custom"!==e?.backgroundPosition[o]&&(s.background+=`${e?.backgroundPosition[o]}`),!t(e?.backgroundPosition[o])&&"custom"===e?.backgroundPosition[o]&&!t(e?.customPositionX[o])&&!t(e?.customPositionY[o])&&(s.background+=`${r(e?.customPositionX[o])} ${r(e?.customPositionY[o])}`),!t(e?.backgroundSize)&&"custom"!==e?.backgroundSize&&(s.size+=`${e?.backgroundSize}`),!t(e?.backgroundSize)&&"custom"===e?.backgroundSize&&(s.size+=`${r(e?.customSize[o])} auto`)),"classic"!==e?.backgroundType||t(e?.backgroundColor)||(s.background+=`${n(e?.backgroundColor)} `),"gradient"!==e?.backgroundType||t(e?.gradient)||(s.background+=`${i(e?.gradient)} `),t(s?.background)?s.background=void 0:s.background=s.background,t(s?.size)?s.size=void 0:s.size=s.size,s},fillBackgroundGenerator:(e,o="Desktop")=>{let s={"background-image":""};return"classic"===e?.backgroundType&&(s["background-color"]=`${n(e?.backgroundColor)}`),"gradient"===e?.backgroundType&&(s["background-image"]=`${i(e?.gradient)}`),"image"===e?.backgroundType&&((!t(e?.backgroundImage?.url)||!t(e?.backgroundImage?.dynamicContentType))&&(s["background-image"]=(0,a.applyFilters)("gutenkit.backgroundImage.url",`url(${e?.backgroundImage?.imageUrl?.[o]?e?.backgroundImage?.imageUrl?.[o]:e?.backgroundImage?.url})`,e?.backgroundImage)),!t(e?.backgroundAttachment)&&(s["background-attachment"]=e?.backgroundAttachment),!t(e?.backgroundPosition[o])&&"custom"!==e?.backgroundPosition[o]&&(s["background-position"]=e?.backgroundPosition[o]),!t(e?.backgroundPosition[o])&&"custom"===e?.backgroundPosition[o]&&!t(e?.customPositionX)&&!t(e?.customPositionY)&&(s["background-position"]=`${r(e?.customPositionX[o])} ${r(e?.customPositionY[o])}`),!t(e?.backgroundSize)&&"custom"!==e?.backgroundSize&&(s["background-size"]=e?.backgroundSize),!t(e?.backgroundSize)&&"custom"===e?.backgroundSize&&(s["background-size"]=`${r(e?.customSize[o])} auto`),!t(e?.backgroundRepeat)&&(s["background-repeat"]=e?.backgroundRepeat)),s},getBoxShadowValue:e=>{let t="";if((e?.horizontal?.size||0===e?.horizontal?.size)&&(t+=`${e?.horizontal?.size}px`),(e?.vertical?.size||0===e?.vertical?.size)&&(t+=` ${e?.vertical?.size}px`),(e?.blur?.size||0===e?.blur?.size)&&(t+=` ${e?.blur?.size}px`),(e?.spread?.size||0===e?.spread?.size)&&(t+=` ${e?.spread?.size}px`),e?.color&&(t+=` ${n(e?.color)}`),e?.position&&(t+=` ${e?.position}`),(e?.horizontal?.size||0===e?.horizontal?.size)&&e?.vertical?.size||0===e?.vertical?.size)return t},getBorderValue:e=>{if(t(e))return{border:void 0};if(3===Object.keys(e).length&&e?.width&&e?.color)return{border:`${e?.width} ${e?.style||"solid"} ${n(e?.color)}`};if(e?.right||e?.bottom||e?.left||e?.top){const t={};return Object.keys(e).forEach((o=>{e[o]?.width&&e[o]?.color&&(t[`border-${o}`]=`${e[o]?.width} ${e[o]?.style||"solid"} ${n(e[o]?.color)}`)})),t}},getBoxValue:(e={},t="")=>{const{top:o,right:n,bottom:i,left:r}=e,s={top:o,right:n,bottom:i,left:r},a=Object.values(s).filter((e=>void 0!==e)).length;if(0===a)return{[t]:void 0};if(4===a){let e="";return e=o===i&&o===n&&o===r?o:o===i&&r===n?`${o} ${n}`:`${o} ${n} ${i} ${r}`,{[t]:e}}let c={};return"border-radius"!==t?(Object.keys(s).forEach((o=>{c[`${t}-${o}`]=e[o]||void 0})),c):"border-radius"===t?(c["border-top-left-radius"]=o||void 0,c["border-top-right-radius"]=n||void 0,c["border-bottom-right-radius"]=i||void 0,c["border-bottom-left-radius"]=r||void 0,c):void 0},getTypographyValue:(e,t)=>"Desktop"===t?{"font-family":e?.fontFamily?.value,"font-size":e?.fontSize?.[t]?.size+e?.fontSize?.[t]?.unit,"font-style":e?.fontStyle,"font-weight":e?.fontWeight?.value,"text-decoration":e?.textDecoration,"text-transform":e?.textTransform,"line-height":e?.lineHeight?.[t]?.size+e?.lineHeight?.[t]?.unit,"letter-spacing":e?.letterSpacing?.[t]?.size+e?.letterSpacing?.[t]?.unit,"word-spacing":e?.wordSpacing?.[t]?.size+e?.wordSpacing?.[t]?.unit}:{"font-size":e?.fontSize?.[t]?.size+e?.fontSize?.[t]?.unit,"line-height":e?.lineHeight?.[t]?.size+e?.lineHeight?.[t]?.unit,"letter-spacing":e?.letterSpacing?.[t]?.size+e?.letterSpacing?.[t]?.unit,"word-spacing":e?.wordSpacing?.[t]?.size+e?.wordSpacing?.[t]?.unit},getSliderValue:r,getMultipleTransition:(...e)=>{let t=[];return Object.keys(e).length>0&&e.forEach(((e,o)=>{if(e?.duration?.size||e?.isDeclared&&e?.duration){let o=e?.isDeclared?"":"s";t.push(`${e?.name} ${e?.duration?.size||e?.duration}${o} ${e?.animation}`)}})),t.length>0?t.join(", "):void 0},getCSSFilters:s,getAttrDependencies:(e,t=!1)=>{if(e){let o="";o=t?Object.keys(e).map((e=>"blocksCSS"!==e?"attributes?."+e+",\n":"")).join(""):Object.keys(e).filter((e=>"blocksCSS"!==e)).join(", \n"),navigator.clipboard.writeText(o).then((()=>{console.info("Copied to clipboard")})).catch((()=>{console.warn("Something went wrong")}))}},gkitResponsiveValue:(e,t,o)=>{if(o&&e&&t){if(Array.isArray(t)){let n=e[t[0]];if(n&&n[t[1]])return n[t[1]][o]}return e[t+o]}},isNull:t,linkGenerator:e=>{let t=e?.url;!t||t.startsWith("http:")&&t.startsWith("https:")&&!t.startsWith("#")||(t=(0,c.prependHTTP)(t));let o={href:t,onClick:e=>e.preventDefault()};return e?.newTab&&(o.target="_blank",o.rel="noopener"),e?.noFollow&&(o.rel="_blank"==o.target?"nofollow noopener":"nofollow"),e?.customAttributes&&e?.customAttributes.length>0&&e?.customAttributes.forEach((e=>{const[t,n]=e.split("|");o[t]=n})),e?.isDynamicContent?(o["data-dynamic-content-url"]=JSON.stringify({...e,url:t}),o):o?.href?o:null},overlayGenerator:(e,o="Desktop")=>{let a={"background-image":""};return"gradient"===e?.backgroundType&&(a["background-image"]=i(e?.gradient)),"classic"===e?.backgroundType&&(!t(e?.backgroundColor)&&(a["background-color"]=n(e?.backgroundColor)),!t(e?.backgroundImage?.imageUrl)&&(a["background-image"]=`url(${e?.backgroundImage?.imageUrl})`),!t(e?.backgroundAttachment)&&(a["background-attachment"]=e?.backgroundAttachment),!t(e?.backgroundPosition[o])&&"custom"!==e?.backgroundPosition[o]&&(a["background-position"]=e?.backgroundPosition[o]),!t(e?.backgroundPosition[o])&&"custom"===e?.backgroundPosition[o]&&!t(e?.customPositionX)&&!t(e?.customPositionY)&&(a["background-position"]=`${r(e?.customPositionX[o])} ${r(e?.customPositionY[o])}`),!t(e?.backgroundSize)&&"custom"!==e?.backgroundSize&&(a["background-size"]=e?.backgroundSize),!t(e?.backgroundSize)&&"custom"===e?.backgroundSize&&(a["background-size"]=`${r(e?.customSize[o])} auto`),!t(e?.backgroundRepeat)&&(a["background-repeat"]=e?.backgroundRepeat)),!t(e?.opacity)&&(a.opacity=`${e?.opacity?.size}`),!t(e?.blendMode)&&(a["mix-blend-mode"]=e?.blendMode),!t(e?.cssFilters)&&(a.filter=s(e?.cssFilters)),t(a)?void 0:a},parseCSS:(e,t=u)=>{let o={};if(Array.isArray(e)){let[n,i,r=[]]=e;t.forEach((e=>{o[e?.slug]="base"===e?.value?[...n,...i(e?.slug)]:i(e?.slug)})),o.customStyles=r}else o=e;return{rawCSS:o,breakpoints:t}},responsiveHelper:(e,t,o,n)=>{n({[e+o]:t})},responsiveTypographyHelper:(e,t,o,n)=>{const i={...e};return{...i,[t]:{...i[t],[n]:o}}},useDeviceType:()=>{const{modules:e}=window?.gutenkit||{},t=e?.breakpoints,{deviceType:o}=(0,g.useSelect)((e=>{const o=e("gutenkit/global-store")?.getDeviceType,n=f.store?e(f.store)?.getDeviceType:void 0;return f.store?{deviceType:t?o?.():n?.()}:{deviceType:"Desktop"}}),[]);return o||"Desktop"},useFontFamilyinBlock:(e=[])=>{const{use_only_global_styles_fonts:o}=window?.gutenkit||{},{isBlockBasedTheme:n}=(0,g.useSelect)((e=>{const{getSettings:{__unstableIsBlockBasedTheme:t}}=e("core/block-editor");return{isBlockBasedTheme:t||!1}}));o&&n||((0,d.useEffect)((()=>{e.length=0}),[]),(0,d.useEffect)((()=>{let o=[];e?.length>0&&e.forEach((e=>{let n={};!t(e?.fontFamily)&&(n.Font=e?.fontFamily?.value),!t(e?.fontWeight)&&(n.Condensed=e?.fontWeight?.value);let i="";!t(n?.Font)&&(i=n?.Font),!t(n?.Font)&&!t(n?.Condensed)&&(i+=":400,"+n?.Condensed),!t(i)&&o.push(i)})),o.length>0&&p().load({google:{families:[...o]},context:frames["editor-canvas"]})}),[JSON.stringify(e)]))},truncateWords:function(e,t){if(!e)return"";const o=e.split(" ");if(t>=o.length)return e;const n=o.slice(0,t);return n.push("..."),n.join(" ")},GkitLocalStoreGetData:e=>e&&localStorage.getItem(e),GkitLocalStoreSetData:(e,t,o=[])=>{const n=o;n.length>0?n.includes(t)&&localStorage.setItem(e,t):localStorage.setItem(e,t)},onScrollAnimateIframe:(e,t)=>{const o=window.frames["editor-canvas"]||window;if(o){const{IntersectionObserver:n,document:i}=o,r=new n((e=>{e.forEach((e=>{if(e.isIntersecting)try{t(e)}catch(e){console.warn(e)}}))})),s=i.querySelectorAll(e);s&&s.forEach((e=>{const t=e.getAttribute("id"),o=i.getElementById(t);r.observe(o)}))}},onScrollAnimate:(e,t)=>{const o=new IntersectionObserver((e=>{e.forEach((e=>{if(e.isIntersecting)try{t(e)}catch(e){console.warn(e)}}))})),n=document.querySelectorAll(e);n&&n.forEach((e=>{const t=e.getAttribute("id"),n=document.getElementById(t);o.observe(n)}))},placeholderImage:A.href,libraryPlaceholderImage:E.href,dynamicPlaceholderImage:N.href,orderSortedValue:(e=[],t,o)=>{if(!t)return[];const n=o.startsWith(".")?o:`.${o}`,i=e?.map(((e,t)=>({selector:`${n} .${e.class}`,order:t})));return i},gkitDomNextSibling:function(e,t){let o=e.nextElementSibling;if(t){const e=t.startsWith("."),n=t.startsWith("#");for(;null!==o;){if(e&&o.classList.contains(t.slice(1))||n&&o.id===t.slice(1)||!e&&!n&&o.tagName.toLowerCase()===t.toLowerCase())return o;o=o.nextElementSibling}return null}return o},gkitDomPrevSibling:function(e,t){let o=e.previousElementSibling;if(t){const e=t.startsWith("."),n=t.startsWith("#");for(;null!==o;){if(e&&o.classList.contains(t.slice(1))||n&&o.id===t.slice(1)||!e&&!n&&o.tagName.toLowerCase()===t.toLowerCase())return o;o=o.previousElementSibling}return null}return o},gkitDomFindParent:function(e,t){const o=t.startsWith("."),n=t.startsWith("#");let i=e.parentElement;for(;null!==i;){if(o&&i.classList.contains(t.slice(1))||n&&i.id===t.slice(1)||!o&&!n&&i.tagName.toLowerCase()===t.toLowerCase())return i;i=i.parentElement}return null},gkitDomFindChild:function(e,t){const o=Array.from(e.children);if(t){const e=t.startsWith("."),n=t.startsWith("#");return o.filter((o=>!!(e&&o.classList.contains(t.slice(1))||n&&o.id===t.slice(1)||!e&&!n&&o.tagName.toLowerCase()===t.toLowerCase())))}return o},moveObjectToTop:function(e,t){const o=e.findIndex((e=>e.slug===t));if(-1!==o){const[t]=e.splice(o,1);e.unshift(t)}return e},getAttributes:k,setAttributes:w,gkitSwiper:function(e,t,o=!1,n="Desktop",i=[],r={}){const s=e.querySelector(".swiper-pagination"),a=e.querySelector(".swiper-button-next"),c=e.querySelector(".swiper-button-prev"),{direction:l,speed:u,delay:g,loop:f,autoplay:d,pauseOnMouseEnter:h,allowTouchMove:p,effect:m}=t,b={};if(i){const e=i.find((e=>"Desktop"===e.slug)),o=i.find((e=>"WideScreen"===e.slug)),n=i.map((t=>"Desktop"===t.slug?e:"WideScreen"===t.slug?o:t));n.forEach(((e,n,i)=>{let r=i[n+1]?.value||"0";r&&(r="base"===r&&o?o?.value:r,b[r]={slidesPerView:t?.[`slidesPerView${e?.slug}`]?.size||1,slidesPerGroup:t?.[`slidesPerGroup${e?.slug}`]?.size||1,spaceBetween:t?.[`spaceBetween${e?.slug}`]?.size||10,slidesPerGroupSkip:Number(0)})}))}let v={direction:l||"horizontal",loop:f||!1,speed:u||1e3,autoplay:d&&{pauseOnMouseEnter:h||!1,delay:g||3e3},allowTouchMove:p||!0,draggable:!0,effect:m||"slide",focusableElements:'a, button, input, textarea, select, details, [tabindex="0"]',pagination:{el:s,clickable:!0},navigation:{nextEl:a,prevEl:c},slidesPerGroupSkip:Number(0),...r};if(o){const{gkitResponsiveValue:e}=window.gutenkit.helpers;v={...v,slidesPerView:e(t,"slidesPerView",n)?.size||1,slidesPerGroup:e(t,"slidesPerGroup",n)?.size||1,spaceBetween:e(t,"spaceBetween",n)?.size||10},v.allowTouchMove=!1}else v.breakpoints=b;return new Swiper(e,v)},getMultipleTransform:(e,t)=>{if(t&&0!==Object.entries(t).length)return Object.entries(t).flatMap((([o,n])=>{const{rotate:i,rotateHover:s,scale:a,scaleHover:c}=t,l=i?.common3DRotate,u=s?.common3DRotateHover,g=a?.commonKeepProportions,f=c?.commonKeepProportionsHover,d=(t,o,i)=>{const s=[t+e].toString(),a=n&&void 0!==n[s],c=n&&void 0!==r(n[s]);return a&&o&&c?`${i}(${r(n[s])})`:!n||"horizontal"!=n[t]&&"vertical"!=n[t]?void 0:`${i}(calc(-1))`};return[d("commonRotate",!l,"rotateZ"),d("commonRotateX",l,"rotateX"),d("commonRotateY",l,"rotateY"),d("perspective",l,"perspective"),d("commonOffsetX",!0,"translateX"),d("commonOffsetY",!0,"translateY"),d("commonScale",g,"scale"),d("commonScaleX",!g,"scaleX"),d("commonScaleY",!g,"scaleY"),d("commonSkewX",!0,"skewX"),d("commonSkewY",!0,"skewY"),d("commonFlipHorizontal",!0,"scaleX"),d("commonFlipVertical",!0,"scaleY"),d("commonRotateHover",!u,"rotateZ"),d("commonRotateXHover",u,"rotateX"),d("commonRotateYHover",u,"rotateY"),d("perspectiveHover",u,"perspective"),d("commonOffsetXHover",!0,"translateX"),d("commonOffsetYHover",!0,"translateY"),d("commonScaleHover",f,"scale"),d("commonScaleXHover",!f,"scaleX"),d("commonScaleYHover",!f,"scaleY"),d("commonSkewXHover",!0,"skewX"),d("commonSkewYHover",!0,"skewY"),d("commonFlipHorizontalHover",!0,"scaleX"),d("commonFlipVerticalHover",!0,"scaleY")]})).filter((e=>void 0!==e)).join(" ")},getMultipleTransformOrigin:(...e)=>{let t=[];return e&&e.forEach((e=>{e?.value&&t.push(`${e.value}`)})),t.length>0?t.join(" "):void 0},useHasProActive:function({windowVariable:e="gutenkit",hookName:t="gutenkit.is-pro-active",cookieName:o="isValidLicense",apiPath:n="gutenkit"}={}){const[i,r]=(0,d.useState)((()=>"true"===z(o))),{has_pro:s}=window?.[e]||{};return(0,d.useEffect)((()=>{s&&(async()=>{const e=z(o);e?r("true"===e):setTimeout((async()=>{try{const e=await S()({path:`/${n}/v1/license/status`});"valid"===e?.status?(r(!0),$(o,"true",12)):(r(!1),$(o,"false",12))}catch(e){console.error("Error fetching license status:",e)}}),2e3)})()}),[s]),(0,d.useMemo)((()=>(0,a.applyFilters)(t,i)),[i])},truncateCharacter:function(e,t){return t>=e?.length?e:e?.slice(0,t)+"..."},getTextStrokeValue:(e,t)=>{const{width:o,color:i}=e||{};if(o&&"object"==typeof o){const{size:e,unit:r}=o[t]?o[t]:{};if(null!=e&&!isNaN(e))return`${e}${r||"px"} ${n(i)||""}`.trim()}},getColor:n,getGradient:i,hasCSS:P,useDeviceList:()=>{const{modules:e}=window?.gutenkit||{},t=(0,d.useRef)(null),o=(0,g.useSelect)((t=>{const o=e?.breakpoints?t("gutenkit/global-store"):null;let n=[l,{label:"Tablet",slug:"Tablet",value:"1024",direction:"max"},{label:"Mobile",slug:"Mobile",value:"767",direction:"max"}];if(o){const{getActiveBreakpoints:e}=o,t=e()?.sort(((e,t)=>parseInt(t.value)-parseInt(e.value)));t?.length>0&&(n=[l,...t])}return n}),[]);return(0,d.useMemo)((()=>{const e=t.current;return JSON.stringify(e)!==JSON.stringify(o)?(t.current=o,o):e}),[o])},baseBreakpoint:l,useBlockStyles:(e,t,o,n)=>{const{rawCSS:i,breakpoints:r}=(0,d.useMemo)((()=>n),[n]),{__unstableMarkNextChangeAsNotPersistent:s}=(0,g.useDispatch)("core/block-editor"),a=(0,d.useRef)(null),c=(0,d.useMemo)((()=>((e,t)=>{const o={};for(let n=0;n<t.length;n++){const i=t[n],r=e[i.slug]||e[i.slug.toLowerCase()];if(r){const e=[];for(let t=0;t<r.length;t++){const{selector:o,...n}=r[t],i=T(n);i&&e.push(`${o} { ${i} }`)}e.length>0&&(o[i.slug.toLowerCase()]=e.join(" "))}}if(e.customStyles){const t=[];for(let o=0;o<e.customStyles.length;o++){const{mediaQuery:n,selector:i,...r}=e.customStyles[o];if(n&&!n.includes("undefined")){const e=T(r);e&&t.push(`@media (${n}) { ${i} { ${e} } }`)}}t.length>0&&(o.customStyles=t.join(" "))}return o})(i,r)),[i,r]),l=(0,d.useRef)(e);return(0,d.useEffect)((()=>(c&&JSON.stringify(e)!==JSON.stringify(l.current||{})&&(a.current&&clearTimeout(a.current),a.current=setTimeout((()=>{s(),t({[o]:c}),l.current=e}),200)),()=>clearTimeout(a.current))),[c]),c},hasCSS:P,useModuleStyles:(e,t,o)=>{const{__unstableMarkNextChangeAsNotPersistent:n}=(0,g.useDispatch)("core/block-editor"),i=(0,d.useRef)(null),r=k(e),{rawCSS:s,breakpoints:a}=o,c=(0,d.useCallback)((t=>{w(e,t)}),[e]),l=(0,d.useMemo)((()=>((e,t)=>{const o={};let n="";const i=[];for(let o=0;o<t.length;o++){const n=t[o];i.push({deviceKey:n.slug.toLowerCase(),styles:e[n.slug]||e[n.slug.toLowerCase()]})}if(e.customStyles)for(let t=0;t<e.customStyles.length;t++){const o=e.customStyles[t];i.push({custom:!0,mediaQuery:o.mediaQuery,selector:o.selector,properties:o})}for(let e=0;e<i.length;e++){const{deviceKey:t,styles:r,custom:s,mediaQuery:a,selector:c,properties:l}=i[e];if(r){n="";for(let e=0;e<r.length;e++){const{selector:t,...o}=r[e],i=j(o);i&&(n+=`${t} { ${i} } `)}n&&(o[t]=n.trim())}else if(s&&a&&!a.includes("undefined")){const e=j(l);e&&(n=`@media (${a}) { ${c} { ${e} } }`,o.customStyles=(o.customStyles||"")+n)}}return o})(s,a)),[s,a]),u=(0,d.useRef)(r);return(0,d.useEffect)((()=>(l&&JSON.stringify(r)!==JSON.stringify(u.current||{})&&(i.current&&clearTimeout(i.current),i.current=setTimeout((()=>{n(),c({[t]:l}),u.current=r}),200)),()=>clearTimeout(i.current))),[l]),l},generatePlaceholder:(e,t,o)=>{const n=document.createElement("canvas"),i=n.getContext("2d");return n.width=t,n.height=o,i.fillStyle="#d3d3d3",i.fillRect(0,0,t,o),i.fillStyle="#000000",i.font="20px Arial",i.textAlign="center",i.textBaseline="middle",i.fillText(e,t/2,o/2),n.toDataURL()},getCookie:z,setCookie:$})})()})();