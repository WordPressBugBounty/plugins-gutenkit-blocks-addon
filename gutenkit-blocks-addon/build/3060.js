"use strict";(globalThis.webpackChunkgutenkit_blocks_addon=globalThis.webpackChunkgutenkit_blocks_addon||[]).push([[3060],{3060:(e,t,n)=>{n.r(t),n.d(t,{default:()=>d});var l=n(7723),o=n(6087),a=n(1455),i=n.n(a),s=n(790);const d=(0,o.memo)((({attributes:e,setAttributes:t,device:n,advancedControl:o})=>{const{GkitColor:a,GkitPanelBody:d,GkitResponsive:r,GkitSwitcher:c,GkitTabs:u,GkitTypography:k,GkitSlider:g,GkitRangeUnit:b,GkitComplexSelectAsync:h,GkitNumber:p,GkitBoxControl:_}=window.gutenkit.components,{gkitResponsiveValue:C,useFontFamilyinBlock:m,responsiveHelper:x}=window.gutenkit.helpers;m([e?.titleTypography]);const v=e=>i()({path:`/wp/v2/categories/?search=${e}`}).then((e=>e.map((e=>({label:e?.name,value:e?.id}))))).catch((e=>{console.error(e)}));return(0,s.jsx)(u,{type:"top-level",tabs:[{name:"content",title:(0,l.__)("Content","gutenkit-blocks-addon")},{name:"style",title:(0,l.__)("Style","gutenkit-blocks-addon")},{name:"advanced",title:(0,l.__)("Advanced","gutenkit-blocks-addon")}],children:i=>{switch(i.name){case"content":return(0,s.jsxs)(d,{title:(0,l.__)("Settings","gutenkit-blocks-addon"),children:[(0,s.jsx)(h,{label:(0,l.__)("Select Categories","gutenkit-blocks-addon"),options:v,cacheOptions:!0,defaultOptions:!0,isMulti:!0,value:e.selectedCategories,onChange:e=>t({selectedCategories:e})}),(0,s.jsx)(p,{label:(0,l.__)("Post Count","gutenkit-blocks-addon"),value:e.postCount,onChange:e=>t({postCount:Number(e)}),labelPosition:"side",min:0,max:100,step:1}),(0,s.jsx)(c,{label:(0,l.__)("Crop Title by Words","gutenkit-blocks-addon"),value:e?.enableCropTitle,onChange:e=>t({enableCropTitle:e})}),e.enableCropTitle&&(0,s.jsx)(p,{label:(0,l.__)("Number of Words","gutenkit-blocks-addon"),value:e.numberOfWordsTitle,onChange:e=>t({numberOfWordsTitle:Number(e)}),labelPosition:"side",min:1,max:100,step:1}),(0,s.jsx)(r,{children:(0,s.jsx)(p,{label:(0,l.__)("Select Column","gutenkit-blocks-addon"),value:C(e,"selectColumn",n),onChange:e=>x("selectColumn",e,n,t),min:1,max:10,step:1})})]});case"style":return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(d,{title:(0,l.__)("Grid","gutenkit-blocks-addon"),children:[(0,s.jsx)(r,{children:(0,s.jsx)(b,{label:(0,l.__)("Height","gutenkit-blocks-addon"),value:C(e,"height",n),onChange:e=>x("height",e,n,t),units:{px:{min:0,max:1e3}}})}),(0,s.jsx)(r,{children:(0,s.jsx)(b,{label:(0,l.__)("Gap","gutenkit-blocks-addon"),value:C(e,"gap",n),onChange:e=>x("gap",e,n,t),units:{px:{min:0,max:100}}})})]}),(0,s.jsxs)(d,{title:(0,l.__)("Title","gutenkit-blocks-addon"),children:[(0,s.jsx)(k,{label:(0,l.__)("Typography","gutenkit-blocks-addon"),value:e?.titleTypography,onChange:e=>t({titleTypography:e})}),(0,s.jsx)(a,{label:(0,l.__)("Color","gutenkit-blocks-addon"),onChange:e=>t({titleColor:e}),value:e?.titleColor}),(0,s.jsx)(a,{label:(0,l.__)("Hover Color","gutenkit-blocks-addon"),onChange:e=>t({titleColorHover:e}),value:e?.titleColorHover}),(0,s.jsx)(r,{children:(0,s.jsx)(_,{label:(0,l.__)("Margin","gutenkit-blocks-addon"),values:C(e,"titleMargin",n),onChange:e=>x("titleMargin",e,n,t)})})]})]});case"advanced":return o}}})}))}}]);