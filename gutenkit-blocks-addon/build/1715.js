"use strict";(globalThis.webpackChunkgutenkit_blocks_addon=globalThis.webpackChunkgutenkit_blocks_addon||[]).push([[1715],{1715:(e,o,a)=>{a.r(o),a.d(o,{default:()=>r});var i=a(7723),t=a(6087),l=a(6427),n=a(790);const s=e=>{const{GkitSlider:o,GkitPopover:a,GkitResponsive:t}=window.gutenkit.components,{gkitResponsiveValue:s,useDeviceType:r}=window.gutenkit.helpers,g=r();let k={gkitBeforeLabelPositionXDesktop:e.value?.gkitBeforeLabelPositionXDesktop?e.value.gkitBeforeLabelPositionXDesktop:{},gkitBeforeLabelPositionXTablet:e.value?.gkitBeforeLabelPositionXTablet?e.value.gkitBeforeLabelPositionXTablet:{},gkitBeforeLabelPositionXMobile:e.value?.gkitBeforeLabelPositionXMobile?e.value.gkitBeforeLabelPositionXMobile:{},gkitBeforeLabelPositionYDesktop:e.value?.gkitBeforeLabelPositionYDesktop?e.value.gkitBeforeLabelPositionYDesktop:{},gkitBeforeLabelPositionYTablet:e.value?.gkitBeforeLabelPositionYTablet?e.value.gkitBeforeLabelPositionYTablet:{},gkitBeforeLabelPositionYMobile:e.value?.gkitBeforeLabelPositionYMobile?e.value.gkitBeforeLabelPositionYMobile:{},gkitAfterLabelPositionXDesktop:e.value?.gkitAfterLabelPositionXDesktop?e.value.gkitAfterLabelPositionXDesktop:{},gkitAfterLabelPositionXTablet:e.value?.gkitAfterLabelPositionXTablet?e.value.gkitAfterLabelPositionXTablet:{},gkitAfterLabelPositionXMobile:e.value?.gkitAfterLabelPositionXMobile?e.value.gkitAfterLabelPositionXMobile:{},gkitAfterLabelPositionYDesktop:e.value?.gkitAfterLabelPositionYDesktop?e.value.gkitAfterLabelPositionYDesktop:{},gkitAfterLabelPositionYTablet:e.value?.gkitAfterLabelPositionYTablet?e.value.gkitAfterLabelPositionYTablet:{},gkitAfterLabelPositionYMobile:e.value?.gkitAfterLabelPositionYMobile?e.value.gkitAfterLabelPositionYMobile:{},hasValue:!!e.value?.hasValue&&e.value.hasValue};const d=(o,a)=>{const i={...k,[o+g]:a};e.onChange(i)};return(0,n.jsxs)(a,{label:e.label?e.label:(0,i.__)("Label Position","gutenkit-blocks-addon"),onChange:e.onChange,value:k,children:[(0,n.jsx)(l.__experimentalHeading,{level:5,children:(0,i.__)("Before Label Position","gutenkit-blocks-addon")}),(0,n.jsx)(l.__experimentalSpacer,{marginTop:"15px"}),(0,n.jsx)(t,{children:(0,n.jsx)(o,{label:(0,i.__)("Position (X)","gutenkit-blocks-addon"),value:s(k,"gkitBeforeLabelPositionX",g),onChange:e=>d("gkitBeforeLabelPositionX",e),sizeUnits:["px","%"],range:{max:1e3,min:-1e3}})}),(0,n.jsx)(l.__experimentalSpacer,{marginTop:"15px"}),(0,n.jsx)(t,{children:(0,n.jsx)(o,{label:(0,i.__)("Position (Y)","gutenkit-blocks-addon"),value:s(k,"gkitBeforeLabelPositionY",g),onChange:e=>d("gkitBeforeLabelPositionY",e),sizeUnits:["px","%"],range:{max:1e3,min:-1e3}})}),(0,n.jsx)(l.__experimentalSpacer,{marginTop:"30px"}),(0,n.jsx)(l.__experimentalHeading,{level:5,children:(0,i.__)("After Label Position","gutenkit-blocks-addon")}),(0,n.jsx)(l.__experimentalSpacer,{marginTop:"15px"}),(0,n.jsx)(t,{children:(0,n.jsx)(o,{label:(0,i.__)("Position (X)","gutenkit-blocks-addon"),value:s(k,"gkitAfterLabelPositionX",g),onChange:e=>d("gkitAfterLabelPositionX",e),sizeUnits:["px","%"],range:{max:1e3,min:-1e3}})}),(0,n.jsx)(l.__experimentalSpacer,{marginTop:"15px"}),(0,n.jsx)(t,{children:(0,n.jsx)(o,{label:(0,i.__)("Position (Y)","gutenkit-blocks-addon"),value:s(k,"gkitAfterLabelPositionY",g),onChange:e=>d("gkitAfterLabelPositionY",e),sizeUnits:["px","%"],range:{max:1e3,min:-1e3}})})]})},r=(0,t.memo)((({attributes:e,setAttributes:o,device:a,advancedControl:t})=>{const{GkitPanelBody:r,GkitTabs:g,GkitTypography:k,GkitBackgrounGroup:d,GkitResponsive:b,GkitMedia:u,GkitSlider:c,GkitRangeUnit:m,GkitSwitcher:h,GkitColor:_,GkitBoxShadow:x,GkitText:v,GkitChoose:p,GkitBorderControl:C,GkitBoxControl:f,GkitBlockStylePreview:j}=window.gutenkit.components,{useFontFamilyinBlock:L,responsiveHelper:B,gkitResponsiveValue:H,boxControlUnit:P}=window.gutenkit.helpers;return L([e?.gkitLabelTypography]),(0,n.jsx)(g,{type:"top-level",tabs:[{name:"content",title:(0,i.__)("Content","gutenkit-blocks-addon")},{name:"style",title:(0,i.__)("Style","gutenkit-blocks-addon")},{name:"advanced",title:(0,i.__)("Advanced","gutenkit-blocks-addon")}],children:c=>{switch(c.name){case"content":return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r,{title:(0,i.__)("Items","gutenkit-blocks-addon"),initialOpen:!0,children:[(0,n.jsx)(j,{label:(0,i.__)("Select Style","gutenkit-blocks-addon"),value:e?.gkitImageComparisonStyle,options:[{label:(0,i.__)("Vertical Style","gutenkit-blocks-addon"),value:"vertical",attributes:{gkitImageComparisonStyle:"vertical"}},{label:(0,i.__)("Horizontal Style","gutenkit-blocks-addon"),value:"horizontal",attributes:{gkitImageComparisonStyle:"horizontal"}}],onChange:e=>o({gkitImageComparisonStyle:e})}),(0,n.jsx)(l.__experimentalDivider,{}),(0,n.jsx)(l.__experimentalHeading,{children:(0,i.__)("Before","gutenkit-blocks-addon")}),(0,n.jsx)(u,{label:(0,i.__)("Choose Image","gutenkit-blocks-addon"),mediaTypes:["image"],labelBlock:"block",onChange:e=>o({gkitComparisonBeforeImage:e}),value:e?.gkitComparisonBeforeImage,imageSize:!0}),"labelNone"!==e?.gkitChooseLabelOption&&(0,n.jsx)(v,{label:(0,i.__)("Label","gutenkit-blocks-addon"),value:e?.gkitImageComparisonBeforeLabel,onChange:e=>o({gkitImageComparisonBeforeLabel:e}),labelBlock:"block"}),(0,n.jsx)(l.__experimentalDivider,{}),(0,n.jsx)(l.__experimentalHeading,{children:(0,i.__)("After","gutenkit-blocks-addon")}),(0,n.jsx)(u,{label:(0,i.__)("Choose Image","gutenkit-blocks-addon"),mediaTypes:["image"],labelBlock:"block",onChange:e=>o({gkitComparisonAfterImage:e}),value:e?.gkitComparisonAfterImage,imageSize:!0}),"labelNone"!==e?.gkitChooseLabelOption&&(0,n.jsx)(v,{label:(0,i.__)("Label","gutenkit-blocks-addon"),value:e?.gkitImageComparisonAfterLabel,onChange:e=>o({gkitImageComparisonAfterLabel:e}),labelBlock:"block"})]}),(0,n.jsxs)(r,{title:(0,i.__)("Settings","gutenkit-blocks-addon"),children:[(0,n.jsx)(h,{label:(0,i.__)("Show Icon Handler?","gutenkit-blocks-addon"),value:e?.gkitShowHandler,onChange:e=>o({gkitShowHandler:e})}),(0,n.jsx)(m,{label:(0,i.__)("Offset","gutenkit-blocks-addon"),value:e?.gkitImageComparisonOffset,onChange:e=>o({gkitImageComparisonOffset:e}),units:{"%":{min:0,max:100}}}),(0,n.jsx)("small",{children:" How much of the before image is visible when the page loads, and ensured appearance on the frontend?"}),(0,n.jsx)(p,{label:(0,i.__)("Label Style","gutenkit-blocks-addon"),options:[{label:(0,i.__)("Active","gutenkit-blocks-addon"),value:"labelActive"},{label:(0,i.__)("Hover","gutenkit-blocks-addon"),value:"labelHover"},{label:(0,i.__)("None","gutenkit-blocks-addon"),value:"labelNone"}],value:e?.gkitChooseLabelOption,onChange:e=>o({gkitChooseLabelOption:e}),isToggle:!1}),(0,n.jsx)(l.__experimentalDivider,{}),(0,n.jsx)(h,{label:(0,i.__)("Remove Overlay?","gutenkit-blocks-addon"),value:e?.gkitComparisonImageOverlay,onChange:e=>o({gkitComparisonImageOverlay:e}),help:"Do not show the overlay with before and after."}),(0,n.jsx)(h,{label:(0,i.__)("Move slider on Hover?","gutenkit-blocks-addon"),value:e?.gkitComparisonImageHover,onChange:e=>o({gkitComparisonImageHover:e}),help:"Move slider on mouse hover?"}),(0,n.jsx)(h,{label:(0,i.__)("Click to Move?","gutenkit-blocks-addon"),value:e?.gkitComparisonImageClickToMove,onChange:e=>o({gkitComparisonImageClickToMove:e}),help:"Allow a user to click (or tap) anywhere on the image to move the slider to that location."})]})]});case"style":return(0,n.jsxs)(n.Fragment,{children:["labelNone"!==e?.gkitChooseLabelOption&&(0,n.jsxs)(r,{title:(0,i.__)("Label","gutenkit-blocks-addon"),children:[(0,n.jsx)(k,{label:(0,i.__)("Typography","gutenkit-blocks-addon"),value:e?.gkitLabelTypography,onChange:e=>o({gkitLabelTypography:e})}),(0,n.jsx)(s,{value:e?.handleLabelPosition,onChange:e=>o({handleLabelPosition:e})}),(0,n.jsx)(g,{type:"normal",tabs:[{name:"before-tab",title:(0,i.__)("Before","gutenkit-blocks-addon")},{name:"after-tab",title:(0,i.__)("After","gutenkit-blocks-addon")}],children:t=>"before-tab"===t.name?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(_,{label:(0,i.__)("Color","gutenkit-blocks-addon"),onChange:e=>o({gkitBeforeLabelColor:e}),value:e?.gkitBeforeLabelColor}),(0,n.jsx)(d,{label:(0,i.__)("Background","gutenkit-blocks-addon"),onChange:e=>o({gkitBeforeLabelBackground:e}),value:e?.gkitBeforeLabelBackground,exclude:{video:!0,image:!0}}),(0,n.jsx)(C,{label:(0,i.__)("Border","gutenkit-blocks-addon"),onChange:e=>o({gkitBeforeLabelBorderGroup:e}),value:e?.gkitBeforeLabelBorderGroup,withSlider:!0}),(0,n.jsx)(b,{children:(0,n.jsx)(f,{label:(0,i.__)("Border Radius","gutenkit-blocks-addon"),values:H(e,"gkitBeforeLabelBorderRadius",a),onChange:e=>B("gkitBeforeLabelBorderRadius",e,a,o)})}),(0,n.jsx)(b,{children:(0,n.jsx)(f,{label:(0,i.__)("Padding","gutenkit-blocks-addon"),values:H(e,"gkitBeforeLabelSpacing",a),onChange:e=>B("gkitBeforeLabelSpacing",e,a,o)})})]}):"after-tab"===t.name?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(_,{label:(0,i.__)("Color","gutenkit-blocks-addon"),onChange:e=>o({gkitAfterLabelColor:e}),value:e?.gkitAfterLabelColor}),(0,n.jsx)(d,{label:(0,i.__)("Background","gutenkit-blocks-addon"),onChange:e=>o({gkitAfterLabelBackground:e}),value:e?.gkitAfterLabelBackground,exclude:{video:!0,image:!0}}),(0,n.jsx)(C,{label:(0,i.__)("Border","gutenkit-blocks-addon"),onChange:e=>o({gkitAfterLabelBorderGroup:e}),value:e?.gkitAfterLabelBorderGroup,withSlider:!0}),(0,n.jsx)(b,{children:(0,n.jsx)(f,{label:(0,i.__)("Border Radius","gutenkit-blocks-addon"),values:H(e,"gkitAfterLabelBorderRadius",a),onChange:e=>B("gkitAfterLabelBorderRadius",e,a,o)})}),(0,n.jsx)(b,{children:(0,n.jsx)(f,{label:(0,i.__)("Padding","gutenkit-blocks-addon"),values:H(e,"gkitAfterLabelSpacing",a),onChange:e=>B("gkitAfterLabelSpacing",e,a,o)})})]}):void 0})]}),e?.gkitShowHandler&&(0,n.jsxs)(r,{title:(0,i.__)("Handle","gutenkit-blocks-addon"),children:[!1===e?.gkitIconHeightWidth&&(0,n.jsx)(b,{children:(0,n.jsx)(m,{label:(0,i.__)("Icon Size","gutenkit-blocks-addon"),value:H(e,"gkitHandleIconSize",a),onChange:e=>B("gkitHandleIconSize",e,a,o),units:{px:{min:0,max:150},em:{min:0,max:100,step:1},rem:{min:0,max:100,step:1}}})}),(0,n.jsx)(h,{label:(0,i.__)("Use Height Width","gutenkit-blocks-addon"),value:e?.gkitIconHeightWidth,onChange:e=>o({gkitIconHeightWidth:e})}),!0===e?.gkitIconHeightWidth&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(b,{children:(0,n.jsx)(m,{label:(0,i.__)("vertical"===e?.gkitImageComparisonStyle?"Control Width":"Control Height","gutenkit-blocks-addon"),value:H(e,"gkitHandleControlWidth",a),onChange:e=>B("gkitHandleControlWidth",e,a,o),units:{px:{min:0,max:500},em:{min:0,max:500,step:1},rem:{min:0,max:500,step:1}}})}),(0,n.jsx)(b,{children:(0,n.jsx)(m,{label:(0,i.__)("vertical"===e?.gkitImageComparisonStyle?"Control Height":"Control Width","gutenkit-blocks-addon"),value:H(e,"gkitHandleControlHeight",a),onChange:e=>B("gkitHandleControlHeight",e,a,o),units:{px:{min:0,max:500},em:{min:0,max:500,step:1},rem:{min:0,max:500,step:1}}})})]}),(0,n.jsx)(g,{type:"normal",tabs:[{name:"normal-tab",title:(0,i.__)("Normal","gutenkit-blocks-addon")},{name:"hover-tab",title:(0,i.__)("Hover","gutenkit-blocks-addon")}],children:a=>"normal-tab"===a.name?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d,{label:(0,i.__)("Background","gutenkit-blocks-addon"),onChange:e=>o({gkitHandleNormalBackground:e}),value:e?.gkitHandleNormalBackground,exclude:{video:!0,image:!0}}),(0,n.jsx)(_,{label:(0,i.__)("Arrow Color","gutenkit-blocks-addon"),onChange:e=>o({gkitHandleNormalColor:e}),value:e?.gkitHandleNormalColor}),(0,n.jsx)(x,{label:(0,i.__)("Box Shadow","gutenkit-blocks-addon"),value:e?.gkitHandleNormalBoxShadow,onChange:e=>o({gkitHandleNormalBoxShadow:e})})]}):"hover-tab"===a.name?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d,{label:(0,i.__)("Background","gutenkit-blocks-addon"),onChange:e=>o({gkitHandleHoverBackground:e}),value:e?.gkitHandleHoverBackground,exclude:{video:!0,image:!0}}),(0,n.jsx)(_,{label:(0,i.__)("Arrow Color","gutenkit-blocks-addon"),onChange:e=>o({gkitHandleHoverColor:e}),value:e?.gkitHandleHoverColor}),(0,n.jsx)(x,{label:(0,i.__)("Box Shadow","gutenkit-blocks-addon"),value:e?.gkitHandleHoverBoxShadow,onChange:e=>o({gkitHandleHoverBoxShadow:e})})]}):void 0}),(0,n.jsx)(l.__experimentalDivider,{}),(0,n.jsx)(b,{children:(0,n.jsx)(f,{label:(0,i.__)("Padding","gutenkit-blocks-addon"),values:H(e,"gkitHandleSpacing",a),onChange:e=>B("gkitHandleSpacing",e,a,o)})}),(0,n.jsx)(b,{children:(0,n.jsx)(f,{label:(0,i.__)("Border radius","gutenkit-blocks-addon"),units:P,values:H(e,"gkitHandleBorderRadius",a),onChange:e=>B("gkitHandleBorderRadius",e,a,o)})}),(0,n.jsx)(l.__experimentalDivider,{}),(0,n.jsx)(l.__experimentalHeading,{children:(0,i.__)("Handle Divider","gutenkit-blocks-addon")}),(0,n.jsx)(b,{children:(0,n.jsx)(m,{label:(0,i.__)("Divider Thickness","gutenkit-blocks-addon"),value:H(e,"gkitHandleDividerThickness",a),onChange:e=>B("gkitHandleDividerThickness",e,a,o),units:{px:{min:0,max:10},em:{min:0,max:10,step:1},rem:{min:0,max:10,step:1}}})}),(0,n.jsx)(_,{label:(0,i.__)("Divider Color","gutenkit-blocks-addon"),onChange:e=>o({gkitHandleDividerColor:e}),value:e?.gkitHandleDividerColor})]})]});case"advanced":return t}}})}))}}]);