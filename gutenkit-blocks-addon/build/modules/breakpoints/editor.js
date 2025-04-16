(()=>{"use strict";var e={5338:(e,t,i)=>{var n=i(5795);t.H=n.createRoot,n.hydrateRoot},5795:e=>{e.exports=window.ReactDOM}},t={};function i(n){var o=t[n];if(void 0!==o)return o.exports;var s=t[n]={exports:{}};return e[n](s,s.exports,i),s.exports}i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);const n=window.wp.element;var o=i(5338);const s=window.wp.components,r=window.wp.i18n,a=window.wp.primitives,l=window.ReactJSXRuntime,c=(0,l.jsx)(a.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,l.jsx)(a.Path,{d:"M16.7 7.1l-6.3 8.5-3.3-2.5-.9 1.2 4.5 3.4L17.9 8z"})}),d=(0,l.jsxs)(a.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[(0,l.jsx)(a.Path,{d:"m19 7.5h-7.628c-.3089-.87389-1.1423-1.5-2.122-1.5-.97966 0-1.81309.62611-2.12197 1.5h-2.12803v1.5h2.12803c.30888.87389 1.14231 1.5 2.12197 1.5.9797 0 1.8131-.62611 2.122-1.5h7.628z"}),(0,l.jsx)(a.Path,{d:"m19 15h-2.128c-.3089-.8739-1.1423-1.5-2.122-1.5s-1.8131.6261-2.122 1.5h-7.628v1.5h7.628c.3089.8739 1.1423 1.5 2.122 1.5s1.8131-.6261 2.122-1.5h2.128z"})]}),p=(0,l.jsx)(a.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,l.jsx)(a.Path,{d:"M19.5 4.5h-7V6h4.44l-5.97 5.97 1.06 1.06L18 7.06v4.44h1.5v-7Zm-13 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3H17v3a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h3V5.5h-3Z"})}),u=window.wp.data,v=JSON.parse('[{"label":"Mobile","slug":"Mobile","value":"767","icon":"<svg xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"24\\" height=\\"24\\" viewBox=\\"0 0 24 24\\" aria-hidden=\\"true\\" focusable=\\"false\\"><path fill=\\"#111722\\" d=\\"M15 4H9a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h6a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm.5 14c0 .3-.2.5-.5.5H9c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h6c.3 0 .5.2.5.5v12Zm-4.5-.5h2V16h-2v1.5Z\\"/></svg>","isActive":true,"isRequired":true,"direction":"max"},{"label":"Mobile Landscape","slug":"MobileLandscape","value":"880","icon":"<svg xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"24\\" height=\\"24\\" viewBox=\\"0 0 24 24\\" aria-hidden=\\"true\\" focusable=\\"false\\"><path fill=\\"#111722\\" d=\\"M4 9v6c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2Zm14-.5c.3 0 .5.2.5.5v6c0 .3-.2.5-.5.5H6c-.3 0-.5-.2-.5-.5V9c0-.3.2-.5.5-.5h12Zm-.5 4.5v-2H16v2h1.5Z\\"/></svg>","isActive":false,"direction":"max"},{"label":"Tablet","slug":"Tablet","value":"1024","icon":"<svg xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"24\\" height=\\"24\\" viewBox=\\"0 0 24 24\\" aria-hidden=\\"true\\" focusable=\\"false\\"><path fill=\\"#111722\\" d=\\"M16.4 5H7.6C6.6 5 6 5.8 6 6.8v10.4c0 1 .8 1.8 1.7 1.8h8.8c1 0 1.7-.8 1.7-1.8V6.8c0-1-.8-1.8-1.7-1.8Zm.4 12.3c0 .2-.2.4-.4.4H7.6c-.2 0-.4-.2-.4-.4V6.7c0-.2.2-.4.4-.4h8.8c.2 0 .4.2.4.5v10.4Zm-6.6-.5h3.6v-1.3h-3.6v1.3Z\\"/></svg>","isActive":true,"isRequired":true,"direction":"max"},{"label":"Tablet Landscape","slug":"TabletLandscape","value":"1200","icon":"<svg xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"24\\" height=\\"24\\" viewBox=\\"0 0 24 24\\" aria-hidden=\\"true\\" focusable=\\"false\\"><path fill=\\"#111722\\" d=\\"M5 7.6v8.8c0 1 .8 1.7 1.8 1.7h10.4c1 0 1.8-.8 1.8-1.7V7.6c0-1-.8-1.7-1.8-1.7H6.8c-1 0-1.8.8-1.8 1.7Zm12.3-.4c.2 0 .4.2.4.4v8.8c0 .2-.2.4-.4.4H6.7c-.2 0-.4-.2-.4-.4V7.6c0-.2.2-.4.5-.4h10.4Zm-.5 6.5v-3.4h-1.3v3.4h1.3Z\\"/></svg>","isActive":false,"direction":"max"},{"label":"Laptop","slug":"Laptop","value":"1366","icon":"<svg xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"24\\" height=\\"24\\" viewBox=\\"0 0 24 24\\" aria-hidden=\\"true\\" focusable=\\"false\\"><path fill=\\"#111722\\" d=\\"m19.4 16.6-1-3.2V6.8a2 2 0 0 0-2-2H7.6a2 2 0 0 0-2 2v6.6l-1 3.2v1c0 .3.2.6.4.9.2.3.4.4.6.5l.9.2h11c.2 0 .5 0 .8-.2.3 0 .5-.3.7-.5l.3-.9c.2-.3.2-.7.1-1ZM7 6.8c0-.2 0-.3.2-.4l.4-.2h8.8l.4.2.2.4v6H7v-6Zm10.9 10.8-.2.2H6.3a.2.2 0 0 1-.2-.2V17l.7-2.9h10.4l.8 3v.2l-.1.3Zm-5.2-1.7h-1.4c-.4 0-.7.3-.7.7 0 .5.2.8.7.8h1.4c.4 0 .8-.3.8-.8 0-.4-.4-.7-.8-.7Z\\"/></svg>","isActive":false,"direction":"max"},{"label":"Wide Screen","slug":"WideScreen","value":"2400","icon":"<svg xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"24\\" height=\\"24\\" viewBox=\\"0 0 24 24\\" aria-hidden=\\"true\\" focusable=\\"false\\"><path fill=\\"#111722\\" fillRule=\\"evenodd\\" d=\\"M8.3 19.4h7.6l.4-.2v-.6l-.1-.4a.7.7 0 0 0-.5-.2h-1v-1.3h3.6c.5 0 1-.2 1.2-.5.3-.2.5-.7.5-1.1V6.3c0-.5-.2-.9-.5-1.2-.3-.3-.8-.5-1.2-.5H5.7c-.5.1-1 .2-1.2.6-.3.3-.5.7-.5 1.2v8.8c0 .5.2.8.5 1.1.3.3.8.5 1.2.5h3.5v1.3H8c-.2 0-.3 0-.4.3v.4l.1.5h.5Zm5.8-4H5.7c-.2 0-.3 0-.3-.2v-9l.3-.1h12.6l.2.1.1.2v9H14Zm-.6 2.6h-3v-1.3h3V18Z\\" clipRule=\\"evenodd\\"/></svg>","isActive":false,"direction":"min"}]'),g={setDeviceType:e=>({type:"SET_DEVICE_TYPE",deviceType:e}),setBreakpoints:e=>async({dispatch:t,registry:i})=>{const{editEntityRecord:n}=i.dispatch("core");await n("root","site",void 0,{gutenkitBreakpoints:JSON.stringify(e)}),await t({type:"SET_BREAKPOINTS",breakpoints:e})}},h="gutenkit/global-store",w={deviceType:"Desktop",breakpoints:[]},k=(0,u.createReduxStore)(h,{reducer(e=w,t){switch(t.type){case"SET_DEVICE_TYPE":return{...e,deviceType:t.deviceType};case"SET_BREAKPOINTS":return{...e,breakpoints:t.breakpoints}}return e},actions:g,selectors:{getDeviceType:(0,u.createRegistrySelector)((e=>t=>{const{getActiveBreakpoints:i}=e(h),n=i();return n?.length>0&&n.find((e=>t.deviceType===e.slug))?t.deviceType:"Desktop"})),getBreakpoints:(0,u.createRegistrySelector)((e=>t=>{const{getEntityRecord:i}=e("core"),n=i("root","site");return n?JSON.parse(n.gutenkitBreakpoints):t.breakpoints})),getEditedBreakpoints:(0,u.createRegistrySelector)((e=>t=>{const{getEntityRecord:i,getEditedEntityRecord:n}=e("core"),o=i("root","site")?n("root","site"):i("root","site");return o?JSON.parse(o.gutenkitBreakpoints):t.breakpoints})),getActiveBreakpoints:(0,u.createRegistrySelector)((e=>t=>{const{getBreakpoints:i}=e(h),n=i();return n?n.filter((e=>e.isActive)):t.breakpoints})),getDefaultBreakpoints:e=>v}}),m={label:"Desktop",slug:"Desktop",value:"base",icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="#111722" d="M20.5 16.3h-.7v-8a2 2 0 0 0-2-2H6.2a2 2 0 0 0-2 2v8h-.7c-.8 0-1.5.6-1.5 1.4h20c0-.8-.7-1.4-1.5-1.4Zm-14.8-8c0-.4.2-.6.5-.6h11.6c.3 0 .5.3.5.5V16H5.7V8.1Z"/></svg>'},b=window.wp.editPost,f=()=>{const{activeBreakpoints:e,device:t,didPostSaveRequestSucceed:i,isSavingPost:o,hasSidebarOpened:a}=(0,u.useSelect)((e=>{const{getActiveBreakpoints:t,getDeviceType:i}=e(h),{didPostSaveRequestSucceed:n,isSavingPost:o}=e("core/editor"),{getActiveGeneralSidebarName:s}=e(b.store);return{activeBreakpoints:t()?t().sort(((e,t)=>parseInt(t?.value)-parseInt(e?.value))):[],device:i(),didPostSaveRequestSucceed:n,isSavingPost:o,hasSidebarOpened:!!s()}}),[]),[v,g]=(0,n.useState)(null),[w,k]=(0,n.useState)(""),{setDeviceType:f}=(0,u.dispatch)(h),x=[m,...e],y=x.find((e=>e.slug===t)),S=e.findIndex((e=>e.slug===t)),P=-1!==S?e[S+1]:null;return(0,n.useEffect)((()=>{const e="base"!==y?.value?y?.value:null,{setDeviceType:i}=(0,u.dispatch)("core/editor");if(e){"min"===y?.direction?document.body.style.setProperty("--gkit-breakpoint-width",`${parseInt(e)}px`):P?.value?document.body.style.setProperty("--gkit-breakpoint-width",`${parseInt(P?.value)+1}px`):"Mobile"===y?.slug?document.body.style.setProperty("--gkit-breakpoint-width","360px"):document.body.style.setProperty("--gkit-breakpoint-width",`${e}px`);const t=a?".block-editor-iframe__container":".interface-interface-skeleton__body",n=document.querySelector(t);n&&((e,t)=>{const i=t.offsetWidth;if(i<e){const t=i/e;document.body.style.setProperty("--gkit-breakpoint-scale",`${t}`)}else document.body.style.removeProperty("--gkit-breakpoint-scale")})(e,n),e<=1024&&e>767&&i("Tablet"),e<=767&&i("Mobile"),e>1024&&i("Desktop")}else document.body.style.removeProperty("--gkit-breakpoint-width"),document.body.style.removeProperty("--gkit-breakpoint-scale");"Desktop"===t&&i("Desktop")}),[t,x,a,P]),(0,n.useEffect)((()=>{if(o()&&i()){let e;e&&clearTimeout(e),e=setTimeout((()=>{!function(e,t){if(e)try{e.location.href=t}catch(e){}}(v,w)}),500)}}),[o(),i()]),(0,l.jsx)("div",{className:"gkit-dropdown-wrapper",children:(0,l.jsx)(s.Dropdown,{className:"gkit-dropdown",contentClassName:"gkit-dropdown-content",popoverProps:{placement:"bottom-end"},renderToggle:({isOpen:e,onToggle:t})=>(0,l.jsx)(s.Button,{className:"gkit-dropdown-toggle",onClick:t,"aria-expanded":e,icon:(0,l.jsx)("span",{dangerouslySetInnerHTML:{__html:y?.icon}})}),renderContent:()=>(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.MenuGroup,{children:x&&x.map((e=>(0,l.jsxs)(s.MenuItem,{className:"gkit-dropdown-item",icon:e.slug===t?c:null,onClick:()=>{f(e?.slug)},children:[(0,l.jsx)("span",{className:"gkit-breakpoint-dropdown-label",children:e.label}),(0,l.jsx)("span",{className:"gkit-breakpoint-dropdown-value",children:"base"===e.value?e.value:e.direction+" "+e.value})]},e.slug)))}),(0,l.jsx)(s.MenuGroup,{children:(0,l.jsx)(s.MenuItem,{className:"gkit-dropdown-item",icon:d,onClick:()=>{if(void 0!==wp.editPost){const{store:e}=wp.editPost,{openGeneralSidebar:t}=(0,u.dispatch)(e);t("gutenkit-additional-breakpoints-sidebar/gutenkit/additionalBreakpoints/sidebar")}if(void 0!==wp.editSite){const{store:e}=wp.editSite,{openGeneralSidebar:t}=(0,u.dispatch)(e);t("gutenkit-additional-breakpoints-sidebar/gutenkit/additionalBreakpoints/sidebar")}},children:(0,r.__)("Breakpoints Settings","gutenkit-blocks-addon")})}),void 0!==wp.editPost&&(0,l.jsx)(s.MenuGroup,{children:(0,l.jsx)(s.MenuItem,{className:"gkit-dropdown-item",icon:p,onClick:()=>{if(void 0!==wp.editPost){const{getEditedPostPreviewLink:e}=(0,u.select)("core/editor"),t=e(),i=window.open(t,"_blank");k(t),g(i)}},children:(0,r.__)("Preview in new tab","gutenkit-blocks-addon")})}),void 0!==wp.editSite&&(0,l.jsx)(s.MenuGroup,{children:(0,l.jsx)(s.MenuItem,{className:"gkit-dropdown-item",icon:p,onClick:()=>{const e=(0,u.select)("core").getSite()?.url,t=window.open(e,"_blank");k(e),g(t)},children:(0,r.__)("View Site","gutenkit-blocks-addon")})})]})})})},x=()=>(0,l.jsx)(f,{}),y=window.wp.plugins;function S(e,t){const i=e.findIndex((e=>e.slug===t));return i<=0?null:e[i-1]?.isActive?e[i-1]?e[i-1]:null:S(e,e[i-1]?.slug)}function P(e,t){const i=e.findIndex((e=>e.slug===t));return i>=e.length-1?null:e[i+1]?.isActive?e[i+1]?e[i+1]:null:P(e,e[i+1]?.slug)}const B=()=>{const{breakpointsList:e,defaultBreakpoints:t}=(0,u.useSelect)((e=>{const{getEditedBreakpoints:t,getDefaultBreakpoints:i}=e(h);return{breakpointsList:t(),defaultBreakpoints:i()}})),{setBreakpoints:i}=(0,u.useDispatch)(h),n=t.find((e=>"Tablet"===e.slug)),o=t.find((e=>"Mobile"===e.slug));return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(s.__experimentalToolsPanel,{label:(0,r.__)("Additional Breakpoints","gutenkit-blocks-addon"),resetAll:()=>{i(t)},dropdownMenuProps:{popoverProps:{placement:"left-start",offset:259}},children:e&&e.map(((e,t,r)=>(0,l.jsx)(s.__experimentalToolsPanelItem,{hasValue:()=>"Tablet"===e.slug?n.value!==e.value:"Mobile"===e.slug?o.value!==e.value:!e.isRequired&&e.isActive,isShownByDefault:e.isActive&&e.isRequired,label:e.label,onDeselect:()=>{const e=[...r];e[t].isActive=!1,i(e)},onSelect:()=>{const e=[...r];e[t].isActive=!0,i(e)},children:(0,l.jsx)(s.__experimentalNumberControl,{label:`${e.label} Width`,value:e.value,onChange:n=>{let o=r[t].value;const s=[...r],a=S(s,e.slug),l=P(s,e.slug);(null===a&&parseInt(n)>299||a&&parseInt(n)>=parseInt(a.value)+1)&&(null===l||l&&parseInt(n)<=parseInt(l.value)-1)?s[t].value=n:setTimeout((()=>{s[t].value=o}),500),i(s)},placeholder:e.value},t)},t)))})})},T=window.wp.editor,_=window.wp.domReady;var j=i.n(_);const M=window.wp.hooks,I=window.wp.compose,R=({svgString:e})=>{const t=(new DOMParser).parseFromString(e,"image/svg+xml").documentElement,i=e=>{const t=e.nodeName,o={};for(let t of e.attributes)o[t.name]=t.value;const s=[];for(let t of e.childNodes)1===t.nodeType?s.push(i(t)):3===t.nodeType&&s.push(t.textContent);return(0,n.createElement)(t,o,...s)};return i(t)},E=(0,I.createHigherOrderComponent)((e=>e=>{const{activeBreakpoints:t,device:i}=(0,u.useSelect)((e=>{const{getActiveBreakpoints:t,getDeviceType:i}=e(h);return{activeBreakpoints:t()?t().sort(((e,t)=>parseInt(t?.value)-parseInt(e?.value))):[],device:i()}}),[]),{setDeviceType:n}=(0,u.dispatch)(h),o=[m,...t],a=o.find((e=>e.slug===i)),c=a?.icon;return(0,l.jsx)(s.DropdownMenu,{icon:(0,l.jsx)(R,{svgString:c}),label:a?.label||(0,r.__)("Select a device","gutenkit-blocks-addon"),className:"gutenkit-responsive-dropdown-menu gutenkit-responsive-dropdown-menu-breakpoints",popoverProps:{className:"gutenkit-responsive-dropdown-popover gutenkit-responsive-dropdown-popover-breakpoints"},toggleProps:{tooltipPosition:"middle left"},controls:o.map((e=>({key:e?.slug,label:e?.label,icon:(0,l.jsx)(R,{svgString:e?.icon}),onClick:()=>{n(e?.slug)}})))})}),"GkitResponsiveDropdown");j()((()=>{(0,u.register)(k)})),(0,y.registerPlugin)("gutenkit-additional-breakpoints-button",{render:()=>{const e=(0,n.useRef)(null),t=(0,n.useRef)(!0);return(0,n.useEffect)((()=>{if(!t.current)return;const i=setInterval((()=>{const n=document.querySelector(".editor-header__settings");if(!n)return;const s=n.querySelector(".components-dropdown.components-dropdown-menu.editor-preview-dropdown");if(!s)return;let r=document.getElementById("breakpoints-root");r||(r=document.createElement("div"),r.id="breakpoints-root",s.parentNode.insertBefore(r,s.nextSibling)),!e.current&&r&&(e.current=(0,o.H)(r),e.current.render((0,l.jsx)(x,{})),t.current=!1,clearInterval(i))}),100);return()=>clearInterval(i)}),[]),null}}),(0,y.registerPlugin)("gutenkit-additional-breakpoints-sidebar",{render:()=>{const{breakpoints:e}=window.gutenkit.editorIcon;return(0,l.jsx)(T.PluginSidebar,{name:"gutenkit/additionalBreakpoints/sidebar",icon:e,title:(0,r.__)("Breakpoints Settings","gutenkit-blocks-addon"),children:(0,l.jsx)(B,{})})}}),(0,M.addFilter)("gutenkit.responsive.dropdown","gutenkit/breakpoints/control/dropdown",E)})();