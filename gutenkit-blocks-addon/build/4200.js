"use strict";(self.webpackChunkgutenkit_blocks_addon=self.webpackChunkgutenkit_blocks_addon||[]).push([[4200],{4200:(n,e,o)=>{o.r(e),o.d(e,{default:()=>k});var i=o(7723),l=o(6087),a=o(6427),t=o(5573),s=o(790);const d=(0,s.jsx)(t.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,s.jsx)(t.Path,{d:"M13 5.5H4V4h9v1.5Zm7 7H4V11h16v1.5Zm-7 7H4V18h9v1.5Z"})}),r=(0,s.jsx)(t.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,s.jsx)(t.Path,{d:"M7.5 5.5h9V4h-9v1.5Zm-3.5 7h16V11H4v1.5Zm3.5 7h9V18h-9v1.5Z"})}),c=(0,s.jsx)(t.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,s.jsx)(t.Path,{d:"M11.111 5.5H20V4h-8.889v1.5ZM4 12.5h16V11H4v1.5Zm7.111 7H20V18h-8.889v1.5Z"})}),k=(0,l.memo)((({attributes:n,setAttributes:e,device:o,advancedControl:l})=>{const{GkitBoxShadow:t,GkitColor:k,GkitIconPicker:g,GkitPanelBody:u,GkitBoxControl:h,GkitResponsive:v,GkitSwitcher:b,GkitTabs:_,GkitAdvancedUrl:x,GkitChoose:j,GkitSlider:C,GkitRangeUnit:m,GkitBorderControl:B}=window.gutenkit.components,{gkitResponsiveValue:w,responsiveHelper:p,colorsGroup:H}=window.gutenkit.helpers;return(0,s.jsx)(_,{type:"top-level",tabs:[{name:"content",title:(0,i.__)("Content","gutenkit-blocks-addon")},{name:"style",title:(0,i.__)("Style","gutenkit-blocks-addon")},{name:"advanced",title:(0,i.__)("Advanced","gutenkit-blocks-addon")}],children:G=>{switch(G.name){case"content":return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(u,{title:(0,i.__)("Icon","gutenkit-blocks-addon"),initialOpen:!0,children:[(0,s.jsx)(g,{label:(0,i.__)("Icon","gutenkit-blocks-addon"),value:n?.icon,onChange:n=>e({icon:n})}),(0,s.jsx)(b,{label:(0,i.__)("Enable Link?","gutenkit-blocks-addon"),value:n?.iconEnableLink,onChange:n=>e({iconEnableLink:n})}),n?.iconEnableLink&&(0,s.jsx)(x,{value:n?.iconWebsiteLink,onChange:n=>e({iconWebsiteLink:n})}),(0,s.jsx)(v,{children:(0,s.jsx)(j,{label:(0,i.__)("Alignment","gutenkit-blocks-addon"),options:[{label:(0,i.__)("Left","gutenkit-blocks-addon"),value:"left",icon:d},{label:(0,i.__)("Center","gutenkit-blocks-addon"),value:"center",icon:r},{label:(0,i.__)("Right","gutenkit-blocks-addon"),value:"right",icon:c}],value:w(n,"iconAlign",o),onChange:n=>p("iconAlign",n,o,e)})})]})});case"style":return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(u,{title:(0,i.__)("Icon","gutenkit-blocks-addon"),children:[(0,s.jsx)(v,{children:(0,s.jsx)(m,{label:(0,i.__)("Size","gutenkit-blocks-addon"),value:w(n,"iconSize",o),onChange:n=>p("iconSize",n,o,e),units:{px:{min:0,max:200,step:1},rem:{min:0,max:10,step:.1}}})}),(0,s.jsx)(C,{label:(0,i.__)("Roate","gutenkit-blocks-addon"),value:n?.iconRoate,onChange:n=>e({iconRoate:n}),sizeUnits:["deg"],range:{min:0,max:360,step:1}}),(0,s.jsx)(_,{type:"normal",tabs:[{name:"normal",title:(0,i.__)("Normal","gutenkit-blocks-addon")},{name:"hover",title:(0,i.__)("Hover","gutenkit-blocks-addon")}],children:l=>"normal"===l.name?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(k,{label:(0,i.__)("Color","gutenkit-blocks-addon"),value:n?.iconColor,onChange:n=>e({iconColor:n})}),(0,s.jsx)(k,{label:(0,i.__)("Background Color","gutenkit-blocks-addon"),value:n?.iconBgColor,onChange:n=>e({iconBgColor:n})}),(0,s.jsx)(B,{label:(0,i.__)("Border"),colors:H,onChange:n=>e({iconBorder:n}),value:n?.iconBorder}),(0,s.jsx)(v,{children:(0,s.jsx)(h,{label:(0,i.__)("Border Radius","gutenkit-blocks-addon"),values:w(n,"iconBorderRadius",o),onChange:n=>p("iconBorderRadius",n,o,e),isMinPositiveOnly:!0})}),(0,s.jsx)(t,{label:(0,i.__)("Box Shadow","gutenkit-blocks-addon"),value:n?.iconBoxShadow,onChange:n=>e({iconBoxShadow:n})})]}):"hover"===l.name?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(k,{label:(0,i.__)("Color","gutenkit-blocks-addon"),value:n?.iconHoverColor,onChange:n=>e({iconHoverColor:n})}),(0,s.jsx)(k,{label:(0,i.__)("Background Color","gutenkit-blocks-addon"),value:n?.iconHoverBgColor,onChange:n=>e({iconHoverBgColor:n})}),(0,s.jsx)(B,{label:(0,i.__)("Border"),colors:H,onChange:n=>e({iconHoverBorder:n}),value:n?.iconHoverBorder}),(0,s.jsx)(v,{children:(0,s.jsx)(h,{label:(0,i.__)("Border Radius","gutenkit-blocks-addon"),values:w(n,"iconHoverBorderRadius",o),onChange:n=>p("iconHoverBorderRadius",n,o,e),isMinPositiveOnly:!1})}),(0,s.jsx)(t,{label:(0,i.__)("Box Shadow","gutenkit-blocks-addon"),value:n?.iconHoverBoxShadow,onChange:n=>e({iconHoverBoxShadow:n})})]}):void 0}),(0,s.jsx)(a.__experimentalDivider,{}),(0,s.jsx)(v,{children:(0,s.jsx)(h,{label:(0,i.__)("Padding","gutenkit-blocks-addon"),values:w(n,"iconPadding",o),onChange:n=>p("iconPadding",n,o,e)})}),(0,s.jsx)(v,{children:(0,s.jsx)(h,{label:(0,i.__)("Margin","gutenkit-blocks-addon"),values:w(n,"iconMargin",o),onChange:n=>p("iconMargin",n,o,e)})})]})});case"advanced":return(0,s.jsx)(s.Fragment,{children:l})}}})}))}}]);