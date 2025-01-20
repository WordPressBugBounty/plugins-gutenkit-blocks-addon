"use strict";(globalThis.webpackChunkgutenkit_blocks_addon=globalThis.webpackChunkgutenkit_blocks_addon||[]).push([[1935],{1935:(e,a,o)=>{o.r(a),o.d(a,{default:()=>g});var l=o(7723),t=o(6087),i=o(6427),n=o(5573),d=o(790);const k=(0,d.jsx)(n.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,d.jsx)(n.Path,{d:"M13 5.5H4V4h9v1.5Zm7 7H4V11h16v1.5Zm-7 7H4V18h9v1.5Z"})}),s=(0,d.jsx)(n.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,d.jsx)(n.Path,{d:"M7.5 5.5h9V4h-9v1.5Zm-3.5 7h16V11H4v1.5Zm3.5 7h9V18h-9v1.5Z"})}),c=(0,d.jsx)(n.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,d.jsx)(n.Path,{d:"M11.111 5.5H20V4h-8.889v1.5ZM4 12.5h16V11H4v1.5Zm7.111 7H20V18h-8.889v1.5Z"})}),r=(0,d.jsx)(n.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,d.jsx)(n.Path,{d:"M4 12.8h16v-1.5H4v1.5zm0 7h12.4v-1.5H4v1.5zM4 4.3v1.5h16V4.3H4z"})}),g=(0,t.memo)((({attributes:e,setAttributes:a,device:o,advancedControl:t})=>{const{GkitBoxShadow:n,GkitColor:g,GkitIconPicker:u,GkitPanelBody:h,GkitResponsive:b,GkitSwitcher:_,GkitTabs:S,GkitTypography:v,GkitChoose:x,GkitSlider:m,GkitRangeUnit:p,GkitRepeater:j,GkitBoxControl:w,GkitBorderControl:C,GkitSelect:B,GkitText:y,GkitBlockStylePreview:H,GkitBackgrounGroup:I}=window.gutenkit.components,{gkitResponsiveValue:f,useFontFamilyinBlock:L,responsiveHelper:G}=window.gutenkit.helpers;return L([e?.gkitSocialShareListTypography]),(0,d.jsx)(S,{type:"top-level",tabs:[{name:"content",title:(0,l.__)("Content","gutenkit-blocks-addon")},{name:"style",title:(0,l.__)("Style","gutenkit-blocks-addon")},{name:"advanced",title:(0,l.__)("Advanced","gutenkit-blocks-addon")}],children:m=>{switch(m.name){case"content":return(0,d.jsxs)(h,{title:(0,l.__)("Social Media","gutenkit-blocks-addon"),initialOpen:!0,children:[(0,d.jsx)(H,{label:(0,l.__)("Select Style","gutenkit-blocks-addon"),value:e?.gkitSocialShareStyle,options:[{label:(0,l.__)("Icon","gutenkit-blocks-addon"),title:(0,l.__)("Icon Style","gutenkit-blocks-addon"),value:"icon",attributes:{gkitSocialShareStyle:"icon"}},{label:(0,l.__)("Text","gutenkit-blocks-addon"),title:(0,l.__)("Text Style","gutenkit-blocks-addon"),value:"text",attributes:{gkitSocialShareStyle:"text"}},{label:(0,l.__)("Icon And Text","gutenkit-blocks-addon"),title:(0,l.__)("Icon And Text Both","gutenkit-blocks-addon"),value:"both",attributes:{gkitSocialShareStyle:"both"}}],onChange:e=>a({gkitSocialShareStyle:e})}),(0,d.jsx)(i.__experimentalDivider,{}),(0,d.jsx)(b,{children:(0,d.jsx)(p,{label:(0,l.__)("Item Space Between","gutenkit-blocks-addon"),value:f(e,"gkitSocialShareElementSpacing",o),onChange:e=>G("gkitSocialShareElementSpacing",e,o,a),units:{px:{min:0,max:100},em:{min:0,max:100}}})}),"both"===e?.gkitSocialShareStyle&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(B,{label:(0,l.__)("Icon Position","gutenkit-blocks-addon"),value:e?.gkitSocialShareStyleIconPosition,options:[{label:(0,l.__)("Before","gutenkit-blocks-addon"),value:"before"},{label:(0,l.__)("After","gutenkit-blocks-addon"),value:"after"}],onChange:e=>a({gkitSocialShareStyleIconPosition:e}),__nextHasNoMarginBottom:!0}),(0,d.jsx)(b,{children:(0,d.jsx)(p,{label:(0,l.__)("Icon Space Between","gutenkit-blocks-addon"),value:f(e,"gkitSocialShareIconSpacing",o),onChange:e=>G("gkitSocialShareIconSpacing",e,o,a),units:{px:{min:0,max:100},em:{min:0,max:100}}})})]}),(0,d.jsx)(b,{children:(0,d.jsx)(x,{label:(0,l.__)("Alignment","gutenkit-blocks-addon"),options:[{label:(0,l.__)("Start","gutenkit-blocks-addon"),value:"flex-start",icon:k},{label:(0,l.__)("Center","gutenkit-blocks-addon"),value:"center",icon:s},{label:(0,l.__)("End","gutenkit-blocks-addon"),value:"flex-end",icon:c},{label:(0,l.__)("Space between","gutenkit-blocks-addon"),value:"space-between",icon:r}],onChange:e=>G("gkitSocialShareListAlign",e,o,a),value:f(e,"gkitSocialShareListAlign",o),isToggle:!1})}),(0,d.jsx)(i.__experimentalDivider,{}),(0,d.jsx)(i.__experimentalHeading,{children:(0,l.__)("Add Social Media","gutenkit-blocks-addon")}),(0,d.jsxs)(j,{onChange:e=>a({gkitSocialShareIcons:e}),itemLabelName:"gkitSocialShareLabel",repeaterFields:e?.gkitSocialShareIcons,children:[(0,d.jsx)(u,{label:(0,l.__)("Choose Icon","gutenkit-blocks-addon"),name:"gkitSocialShareIcon",default:{title:"facebook-f",src:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg>'}}),(0,d.jsx)(B,{label:(0,l.__)("Social Media","gutenkit-blocks-addon"),name:"gkitSocialMedia",options:[{value:"facebook",label:(0,l.__)("Facebook","gutenkit-blocks-addon")},{value:"twitter",label:(0,l.__)("Twitter","gutenkit-blocks-addon")},{value:"linkedin",label:(0,l.__)("LinkedIn","gutenkit-blocks-addon")},{value:"pinterest",label:(0,l.__)("Pinterest","gutenkit-blocks-addon")},{value:"vkontakte",label:(0,l.__)("Vkontakte","gutenkit-blocks-addon")},{value:"odnoklassniki",label:(0,l.__)("Odnoklassniki","gutenkit-blocks-addon")},{value:"moimir",label:(0,l.__)("Moimir","gutenkit-blocks-addon")},{value:"livejournal",label:(0,l.__)("Live Journal","gutenkit-blocks-addon")},{value:"blogger",label:(0,l.__)("Blogger","gutenkit-blocks-addon")},{value:"digg",label:(0,l.__)("Digg","gutenkit-blocks-addon")},{value:"evernote",label:(0,l.__)("Evernote","gutenkit-blocks-addon")},{value:"reddit",label:(0,l.__)("Reddit","gutenkit-blocks-addon")},{value:"delicious",label:(0,l.__)("Delicious","gutenkit-blocks-addon")},{value:"pocket",label:(0,l.__)("Pocket","gutenkit-blocks-addon")},{value:"surfingbird",label:(0,l.__)("Surfingbird","gutenkit-blocks-addon")},{value:"liveinternet",label:(0,l.__)("Liveinternet","gutenkit-blocks-addon")},{value:"buffer",label:(0,l.__)("Buffer","gutenkit-blocks-addon")},{value:"instapaper",label:(0,l.__)("Instapaper","gutenkit-blocks-addon")},{value:"xing",label:(0,l.__)("Xing","gutenkit-blocks-addon")},{value:"wordpress",label:(0,l.__)("Wordpress","gutenkit-blocks-addon")},{value:"baidu",label:(0,l.__)("Baidu","gutenkit-blocks-addon")},{value:"weibo",label:(0,l.__)("Weibo","gutenkit-blocks-addon")},{value:"skype",label:(0,l.__)("Skype","gutenkit-blocks-addon")},{value:"telegram",label:(0,l.__)("Telegram","gutenkit-blocks-addon")},{value:"viber",label:(0,l.__)("Viber","gutenkit-blocks-addon")},{value:"whatsapp",label:(0,l.__)("Whatsapp","gutenkit-blocks-addon")},{value:"line",label:(0,l.__)("Line","gutenkit-blocks-addon")}],default:"facebook",__nextHasNoMarginBottom:!0}),(0,d.jsx)(i.__experimentalDivider,{}),(0,d.jsx)(i.__experimentalHeading,{children:(0,l.__)("Normal Style","gutenkit-blocks-addon")}),(0,d.jsx)(g,{label:(0,l.__)("Color","gutenkit-blocks-addon"),name:"gkitSocialShareIconColor",default:"#222222"}),(0,d.jsx)(g,{label:(0,l.__)("Background Color","gutenkit-blocks-addon"),name:"gkitSocialShareIconBgColor"}),(0,d.jsx)(g,{label:(0,l.__)("Border Color","gutenkit-blocks-addon"),name:"gkitSocialShareBorder"}),(0,d.jsx)(i.__experimentalDivider,{}),(0,d.jsx)(i.__experimentalHeading,{children:(0,l.__)("Hover Style","gutenkit-blocks-addon")}),(0,d.jsx)(g,{label:(0,l.__)("Color","gutenkit-blocks-addon"),name:"gkitSocialShareIconHoverColor",default:"#ffffff"}),(0,d.jsx)(g,{label:(0,l.__)("Background Color","gutenkit-blocks-addon"),name:"gkitSocialShareIconHoverBgColor",default:"#3b5998"}),(0,d.jsx)(g,{label:(0,l.__)("Border Color","gutenkit-blocks-addon"),name:"gkitSocialShareBorderHover"})]})]});case"style":return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)(h,{title:(0,l.__)("Social Media","gutenkit-blocks-addon"),initialOpen:!0,children:[(0,d.jsx)(b,{children:(0,d.jsx)(x,{label:(0,l.__)("Display","gutenkit-blocks-addon"),options:[{label:(0,l.__)("Inline","gutenkit-blocks-addon"),value:"row"},{label:(0,l.__)("Block","gutenkit-blocks-addon"),value:"column"}],onChange:e=>G("gkitSocialShareListDisplay",e,o,a),value:f(e,"gkitSocialShareListDisplay",o),isToggle:!1})}),"text"!==e?.gkitSocialShareStyle&&(0,d.jsx)(b,{children:(0,d.jsx)(p,{label:(0,l.__)("Icon Size","gutenkit-blocks-addon"),value:f(e,"gkitSocialShareListIconSize",o),onChange:e=>G("gkitSocialShareListIconSize",e,o,a),units:{px:{min:0,max:100},"%":{min:0,max:100}}})}),"icon"!==e?.gkitSocialShareStyle&&(0,d.jsx)(v,{label:(0,l.__)("Typography","gutenkit-blocks-addon"),value:e?.gkitSocialShareListTypography,onChange:e=>a({gkitSocialShareListTypography:e})}),"icon"===e?.gkitSocialShareStyle&&(0,d.jsx)(_,{label:(0,l.__)("Use Height Width","gutenkit-blocks-addon"),value:e?.useHeightWidth,onChange:e=>a({useHeightWidth:e})}),e?.useHeightWidth&&"icon"===e?.gkitSocialShareStyle&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(b,{children:(0,d.jsx)(p,{label:(0,l.__)("Width","gutenkit-blocks-addon"),value:f(e,"gkitSocialShareListWidth",o),onChange:e=>G("gkitSocialShareListWidth",e,o,a),units:{px:{min:0,max:200},"%":{min:0,max:100}}})}),(0,d.jsx)(b,{children:(0,d.jsx)(p,{label:(0,l.__)("Height","gutenkit-blocks-addon"),value:f(e,"gkitSocialShareListHeight",o),onChange:e=>G("gkitSocialShareListHeight",e,o,a),units:{px:{min:0,max:200},"%":{min:0,max:100}}})})]}),!1===e?.useHeightWidth&&"icon"===e?.gkitSocialShareStyle&&(0,d.jsx)(b,{children:(0,d.jsx)(w,{label:(0,l.__)("Item Padding","gutenkit-blocks-addon"),values:f(e,"gkitSocialShareIconPadding",o),onChange:e=>G("gkitSocialShareIconPadding",e,o,a)})}),(0,d.jsx)(i.__experimentalDivider,{}),(0,d.jsx)(S,{type:"normal",tabs:[{name:"normal-tab",title:(0,l.__)("Normal","gutenkit-blocks-addon")},{name:"hover-tab",title:(0,l.__)("Hover","gutenkit-blocks-addon")}],children:t=>"normal-tab"===t.name?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(g,{label:(0,l.__)("Color","gutenkit-blocks-addon"),value:e?.gkitIconColor,onChange:e=>a({gkitIconColor:e})}),(0,d.jsx)(I,{label:(0,l.__)("Background","gutenkit-blocks-addon"),value:e?.gkitIconBgColor,onChange:e=>a({gkitIconBgColor:e}),exclude:{video:!0,image:!0}}),(0,d.jsx)(C,{label:(0,l.__)("Border","gutenkit-blocks-addon"),onChange:e=>a({gkitSocialShareBorder:e}),value:e?.gkitSocialShareBorder}),(0,d.jsx)(b,{children:(0,d.jsx)(w,{label:(0,l.__)("Border Radius","gutenkit-blocks-addon"),values:f(e,"gkitSocialShareListBorderRadius",o),onChange:e=>G("gkitSocialShareListBorderRadius",e,o,a)})}),(0,d.jsx)(n,{label:(0,l.__)("Box Shadow","gutenkit-blocks-addon"),value:e?.gkitSocialShareBoxShadow,onChange:e=>a({gkitSocialShareBoxShadow:e})}),"icon"!==e?.gkitSocialShareStyle&&(0,d.jsx)(n,{label:(0,l.__)("Text Shadow","gutenkit-blocks-addon"),value:e?.gkitSocialShareTextShadow,onChange:e=>a({gkitSocialShareTextShadow:e}),exclude:{position:!0,spread:!0}})]}):"hover-tab"===t.name?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(g,{label:(0,l.__)("Color","gutenkit-blocks-addon"),value:e?.gkitIconColorHover,onChange:e=>a({gkitIconColorHover:e})}),(0,d.jsx)(I,{label:(0,l.__)("Background","gutenkit-blocks-addon"),value:e?.gkitIconBgColorHover,onChange:e=>a({gkitIconBgColorHover:e}),exclude:{video:!0,image:!0}}),(0,d.jsx)(C,{label:(0,l.__)("Border","gutenkit-blocks-addon"),onChange:e=>a({gkitSocialShareBorderHover:e}),value:e?.gkitSocialShareBorderHover}),(0,d.jsx)(b,{children:(0,d.jsx)(w,{label:(0,l.__)("Border Radius","gutenkit-blocks-addon"),values:f(e,"gkitSocialShareListBorderRadiusHover",o),onChange:e=>G("gkitSocialShareListBorderRadiusHover",e,o,a)})}),(0,d.jsx)(n,{label:(0,l.__)("Box Shadow","gutenkit-blocks-addon"),value:e?.gkitSocialShareBoxShadowHover,onChange:e=>a({gkitSocialShareBoxShadowHover:e})}),"icon"!==e?.gkitSocialShareStyle&&(0,d.jsx)(n,{label:(0,l.__)("Text Shadow","gutenkit-blocks-addon"),value:e?.gkitSocialShareTextShadowHover,onChange:e=>a({gkitSocialShareTextShadowHover:e}),exclude:{position:!0,spread:!0}})]}):void 0}),"icon"!==e?.gkitSocialShareStyle&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(i.__experimentalDivider,{}),(0,d.jsx)(b,{children:(0,d.jsx)(w,{label:(0,l.__)("Padding","gutenkit-blocks-addon"),values:f(e,"gkitSocialListPadding",o),onChange:e=>G("gkitSocialListPadding",e,o,a)})})]})]})});case"advanced":return(0,d.jsx)(d.Fragment,{children:t})}}})}))}}]);