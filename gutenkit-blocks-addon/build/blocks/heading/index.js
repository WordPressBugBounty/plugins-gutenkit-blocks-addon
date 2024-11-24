(()=>{var e,t,i,o={5393:(e,t,i)=>{"use strict";const o=window.wp.blocks,r=window.wp.blockEditor;var a=i(6942),s=i.n(a),l=i(790);const n=({image:e,className:t="",isEdit:i=!1,...o})=>{let r=null;const{placeholderImage:a}=window.gutenkit.helpers,n=s()({[`wp-image-${e.id}`]:e.id,"is-dynamic-image":e?.isDynamicContent,[t]:""!==t}),d={dynamicContentType:e?.dynamicContentType,dynamicLabel:e?.dynamicLabel,fallbackimage:e?.fallbackimage?JSON.stringify(e?.fallbackimage):null,isDynamicContent:e?.isDynamicContent,originalUrl:e?.url&&"placeholder"===e?.url?a:e?.selectedImage||e?.url};return e?.isDynamicContent&&("acfimage"===e?.dynamicContentType&&e?.acffield&&(d.acffield=e?.acffield),o={...o,"data-dynamic-content":JSON.stringify(d)}),i&&(o={...o,loading:"lazy"}),e?.url&&"placeholder"===e?.url&&(r=(0,l.jsx)("img",{src:a,alt:"Placeholder image",className:n,...o})),e?.url&&"placeholder"!==e?.url&&(r=(0,l.jsx)("img",{src:e.selectedImage||e?.url,className:n,alt:e?.alt,...o})),r},d=e=>(0,l.jsx)("div",{...e?.wrapper,children:e?.isCustom?e.isCustom:(0,l.jsx)("div",{...e?.divider})}),p=JSON.parse('{"UU":"gutenkit/heading","uK":{"blockID":{"type":"string"},"blockClass":{"type":"string"},"blocksCSS":{"type":"object"},"content":{"type":"string","source":"html","selector":".gkit-heading-title","default":"Grow your <strong>report</strong>","__experimentalRole":"content","excludeCopy":true},"linkSwitch":{"type":"boolean","default":false,"excludeCopy":true},"link":{"type":"object","default":"#","excludeCopy":true},"htmlTag":{"type":"string","default":"h2","excludeCopy":true},"showBorder":{"type":"boolean","default":false,"excludeCopy":true},"borderPosition":{"type":"string","default":"start","excludeCopy":true},"showSubtitle":{"type":"boolean","default":false,"excludeCopy":true},"borderSubtitle":{"type":"boolean","default":false,"excludeCopy":true},"showOutline":{"type":"boolean","default":false,"excludeCopy":true},"subtitleContent":{"type":"string","source":"html","selector":".gkit-heading-subtitle","default":"Time has changed","excludeCopy":true},"subtitlePosition":{"type":"string","default":"after-title","excludeCopy":true},"subtitleHtmlTag":{"type":"string","default":"h3","excludeCopy":true},"showDescription":{"type":"boolean","default":false,"excludeCopy":true},"descriptionContent":{"type":"string","source":"text","selector":".gkit-heading-description p","default":"A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradise","excludeCopy":true},"descriptionMaxWidthDesktop":{"type":"object","default":{"unit":"%","size":100}},"descriptionMaxWidthTablet":{"type":"object"},"descriptionMaxWidthMobile":{"type":"object"},"descriptionMaxWidthTabletLandscape":{"type":"object"},"descriptionMaxWidthMobileLandscape":{"type":"object"},"descriptionMaxWidthLaptop":{"type":"object"},"descriptionMaxWidthWideScreen":{"type":"object"},"showShadowText":{"type":"boolean","default":false,"excludeCopy":true},"shadowTextContent":{"type":"string","default":"bussiness","excludeCopy":true},"showSeparator":{"type":"boolean","default":true,"excludeCopy":true},"separatorStyle":{"type":"string","default":"dotted","excludeCopy":true},"separatorPosition":{"type":"string","default":"after-title","excludeCopy":true},"separatorImage":{"type":"object","default":{"url":"placeholder"},"excludeCopy":true},"generalTextAlignmentDesktop":{"type":"string"},"generalTextAlignmentTablet":{"type":"string"},"generalTextAlignmentMobile":{"type":"string"},"generalTextAlignmentTabletLandscape":{"type":"string"},"generalTextAlignmentMobileLandscape":{"type":"string"},"generalTextAlignmentLaptop":{"type":"string"},"generalTextAlignmentWideScreen":{"type":"string"},"titleColor":{"type":"string"},"titleHoverColor":{"type":"string"},"titleTextShadow":{"type":"object"},"titleMarginDesktop":{"type":"object"},"titleMarginTablet":{"type":"object"},"titleMarginMobile":{"type":"object"},"titleMarginTabletLandscape":{"type":"object"},"titleMarginMobileLandscape":{"type":"object"},"titleMarginLaptop":{"type":"object"},"titleMarginWideScreen":{"type":"object"},"titleTypography":{"type":"object"},"titleBorderWidth":{"type":"object","default":{"unit":"px","size":5}},"titleBorderHeight":{"type":"object","default":{"unit":"%","size":100}},"titleBorderVerticalPosition":{"type":"object","default":{"unit":"px","size":0}},"titleBorderRightGap":{"type":"object","default":{"unit":"px","size":30}},"titleBorderLeftGap":{"type":"object","default":{"unit":"px","size":30}},"titleBorderBackground":{"type":"string"},"focusedTitleColor":{"type":"string"},"focusedTitleHoverColor":{"type":"string"},"focusedTitleTypography":{"type":"object"},"focusedTitleTextDecorationColor":{"type":"string"},"focusedTitleTextShadow":{"type":"object"},"focusedTitlePaddingDesktop":{"type":"object"},"focusedTitlePaddingTablet":{"type":"object"},"focusedTitlePaddingMobile":{"type":"object"},"focusedTitlePaddingTabletLandscape":{"type":"object"},"focusedTitlePaddingMobileLandscape":{"type":"object"},"focusedTitlePaddingLaptop":{"type":"object"},"focusedTitlePaddingWideScreen":{"type":"object"},"focusedTitleUseBackground":{"type":"boolean","default":false},"focusedTitleBackgroundColor":{"type":"object","selector":"{{WRAPPER}}"},"focusedTitleBorderRadius":{"type":"object"},"focusedTitleUseTextFill":{"type":"boolean","default":false},"focusedTitleTextFillBackground":{"type":"object","selector":"{{WRAPPER}}"},"focusedTitleUseStroke":{"type":"boolean","default":false},"focusedTitleStrokeWidth":{"type":"object"},"focusedTitleStrokeColor":{"type":"string"},"subtitleColor":{"type":"string"},"subtitleTypography":{"type":"object"},"subtitleMarginDesktop":{"type":"object"},"subtitleMarginTablet":{"type":"object"},"subtitleMarginMobile":{"type":"object"},"subtitleMarginTabletLandscape":{"type":"object"},"subtitleMarginMobileLandscape":{"type":"object"},"subtitleMarginLaptop":{"type":"object"},"subtitleMarginWideScreen":{"type":"object"},"subtitlePaddingDesktop":{"type":"object","default":{"top":"8px","right":"32px","bottom":"8px","left":"32px"}},"subtitlePaddingTablet":{"type":"object"},"subtitlePaddingMobile":{"type":"object"},"subtitlePaddingTabletLandscape":{"type":"object"},"subtitlePaddingMobileLandscape":{"type":"object"},"subtitlePaddingLaptop":{"type":"object"},"subtitlePaddingWideScreen":{"type":"object"},"subtitleUseTextFill":{"type":"boolean","default":false},"subtitleTextFillBackground":{"type":"object","selector":"{{WRAPPER}}"},"subtitleBorderLeftBackground":{"type":"object"},"subtitleBorderLeftWidthDesktop":{"type":"object"},"subtitleBorderLeftWidthTablet":{"type":"object"},"subtitleBorderLeftWidthMobile":{"type":"object"},"subtitleBorderLeftWidthTabletLandscape":{"type":"object"},"subtitleBorderLeftWidthMobileLandscape":{"type":"object"},"subtitleBorderLeftWidthLaptop":{"type":"object"},"subtitleBorderLeftWidthWideScreen":{"type":"object"},"subtitleBorderLeftMarginDesktop":{"type":"object"},"subtitleBorderLeftMarginTablet":{"type":"object"},"subtitleBorderLeftMarginMobile":{"type":"object"},"subtitleBorderLeftMarginTabletLandscape":{"type":"object"},"subtitleBorderLeftMarginMobileLandscape":{"type":"object"},"subtitleBorderLeftMarginLaptop":{"type":"object"},"subtitleBorderLeftMarginWideScreen":{"type":"object"},"subtitleBorderRightBackground":{"type":"object"},"subtitleBorderRightWidthDesktop":{"type":"object"},"subtitleBorderRightWidthTablet":{"type":"object"},"subtitleBorderRightWidthMobile":{"type":"object"},"subtitleBorderRightWidthTabletLandscape":{"type":"object"},"subtitleBorderRightWidthMobileLandscape":{"type":"object"},"subtitleBorderRightWidthLaptop":{"type":"object"},"subtitleBorderRightWidthWideScreen":{"type":"object"},"subtitleBorderRightMarginDesktop":{"type":"object"},"subtitleBorderRightMarginTablet":{"type":"object"},"subtitleBorderRightMarginMobile":{"type":"object"},"subtitleBorderRightMarginTabletLandscape":{"type":"object"},"subtitleBorderRightMarginMobileLandscape":{"type":"object"},"subtitleBorderRightMarginLaptop":{"type":"object"},"subtitleBorderRightMarginWideScreen":{"type":"object"},"subtitleBorderRightHeightDesktop":{"type":"object"},"subtitleBorderRightHeightTablet":{"type":"object"},"subtitleBorderRightHeightMobile":{"type":"object"},"subtitleBorderRightHeightTabletLandscape":{"type":"object"},"subtitleBorderRightHeightMobileLandscape":{"type":"object"},"subtitleBorderRightHeightLaptop":{"type":"object"},"subtitleBorderRightHeightWideScreen":{"type":"object"},"subtitleBorderRightVerticalPositionDesktop":{"type":"object"},"subtitleBorderRightVerticalPositionTablet":{"type":"object"},"subtitleBorderRightVerticalPositionMobile":{"type":"object"},"subtitleBorderRightVerticalPositionTabletLandscape":{"type":"object"},"subtitleBorderRightVerticalPositionMobileLandscape":{"type":"object"},"subtitleBorderRightVerticalPositionLaptop":{"type":"object"},"subtitleBorderRightVerticalPositionWideScreen":{"type":"object"},"subtitleOutlineBorder":{"type":"object"},"subtitleOutlineBorderRadiusDesktop":{"type":"object","default":{"top":"2em","right":"2em","bottom":"2em","left":"2em"}},"subtitleOutlineBorderRadiusTablet":{"type":"object"},"subtitleOutlineBorderRadiusMobile":{"type":"object"},"subtitleOutlineBorderRadiusTabletLandscape":{"type":"object"},"subtitleOutlineBorderRadiusMobileLandscape":{"type":"object"},"subtitleOutlineBorderRadiusLaptop":{"type":"object"},"subtitleOutlineBorderRadiusWideScreen":{"type":"object"},"descriptionColor":{"type":"string"},"descriptionTypography":{"type":"object"},"descriptionMarginDesktop":{"type":"object"},"descriptionMarginTablet":{"type":"object"},"descriptionMarginMobile":{"type":"object"},"descriptionMarginTabletLandscape":{"type":"object"},"descriptionMarginMobileLandscape":{"type":"object"},"descriptionMarginLaptop":{"type":"object"},"descriptionMarginWideScreen":{"type":"object"},"separatorWidthDesktop":{"type":"object","default":{"unit":"px","size":100}},"separatorWidthTablet":{"type":"object"},"separatorWidthMobile":{"type":"object"},"separatorWidthTabletLandscape":{"type":"object"},"separatorWidthMobileLandscape":{"type":"object"},"separatorWidthLaptop":{"type":"object"},"separatorWidthWideScreen":{"type":"object"},"separatorHeightDesktop":{"type":"object","default":{"unit":"px","size":4}},"separatorHeightTablet":{"type":"object"},"separatorHeightMobile":{"type":"object"},"separatorHeightTabletLandscape":{"type":"object"},"separatorHeightMobileLandscape":{"type":"object"},"separatorHeightLaptop":{"type":"object"},"separatorHeightWideScreen":{"type":"object"},"separatorMarginDesktop":{"type":"object"},"separatorMarginTablet":{"type":"object"},"separatorMarginMobile":{"type":"object"},"separatorMarginTabletLandscape":{"type":"object"},"separatorMarginMobileLandscape":{"type":"object"},"separatorMarginLaptop":{"type":"object"},"separatorMarginWideScreen":{"type":"object"},"separatorColor":{"type":"string"},"shadowTextPositionDesktop":{"type":"object","default":{"top":"-35%","left":"55%"}},"shadowTextPositionTablet":{"type":"object"},"shadowTextPositionMobile":{"type":"object"},"shadowTextPositionTabletLandscape":{"type":"object"},"shadowTextPositionMobileLandscape":{"type":"object"},"shadowTextPositionLaptop":{"type":"object"},"shadowTextPositionWideScreen":{"type":"object"},"shadowTextTypography":{"type":"object"},"shadowTextColor":{"type":"string"},"shadowTextStrokeWidth":{"type":"object"},"shadowTextStrokeColor":{"type":"string"}}}'),c=[{attributes:p.uK,save({attributes:e}){const{linkGenerator:t}=window.gutenkit.helpers,i=r.useBlockProps.save({className:s()({"gkit-heading-has-border":e?.showBorder,[`gkit-heading-border-position-${e?.borderPosition}`]:e?.borderPosition}),id:"block-"+e?.blockID}),o=e?.subtitleHtmlTag||"h3",a={};a.className=s()({"gkit-heading-subtitle":e?.showSubtitle,"gkit-heading-subtitle-has-border":e?.borderSubtitle,"gkit-heading-subtitle-has-outline":e?.showOutline,"gkit-heading-subtitle-has-text-fill":e?.subtitleUseTextFill});const p=e?.linkSwitch?t(e?.link):"";return(0,l.jsxs)("div",{...i,children:[(0,l.jsxs)(l.Fragment,{children:["top"===e?.separatorPosition&&(0,l.jsx)(d,{wrapper:{className:s()({"gkit-heading-separetor":e?.showSeparator,[`gkit-heading-separetor-${e?.separatorPosition}`]:e?.separatorPosition,[`gkit-heading-separetor-style-${e?.separatorStyle}`]:e?.separatorStyle})},divider:{className:s()({"gkit-heading-separetor-divider":e?.showSeparator})},isCustom:!(!e?.showSeparator||"custom"!==e?.separatorStyle)&&(0,l.jsx)(n,{image:e?.separatorImage})}),e?.showShadowText&&(0,l.jsx)("span",{className:"gkit-heading-shadow-text",children:e?.shadowTextContent}),"before-title"===e?.subtitlePosition&&(0,l.jsx)(l.Fragment,{children:e?.showSubtitle&&(0,l.jsx)(o,{...a,children:e?.subtitleContent})}),"before-title"===e?.separatorPosition&&(0,l.jsx)(d,{wrapper:{className:s()({"gkit-heading-separetor":e?.showSeparator,[`gkit-heading-separetor-${e?.separatorPosition}`]:e?.separatorPosition,[`gkit-heading-separetor-style-${e?.separatorStyle}`]:e?.separatorStyle})},divider:{className:s()({"gkit-heading-separetor-divider":e?.showSeparator})},isCustom:!(!e?.showSeparator||"custom"!==e?.separatorStyle)&&(0,l.jsx)(n,{image:e?.separatorImage})})]}),e?.linkSwitch?(0,l.jsx)("a",{...p,className:"external-link",children:(0,l.jsx)(r.RichText.Content,{tagName:e?.htmlTag,value:e?.content,className:s()({"gkit-heading-title":!0,"gkit-heading-title-text-fill":e?.focusedTitleUseTextFill})})}):(0,l.jsx)(r.RichText.Content,{tagName:e?.htmlTag,value:e?.content,className:s()({"gkit-heading-title":!0,"gkit-heading-title-text-fill":e?.focusedTitleUseTextFill})}),(0,l.jsxs)(l.Fragment,{children:["after-title"===e?.separatorPosition&&(0,l.jsx)(d,{wrapper:{className:s()({"gkit-heading-separetor":e?.showSeparator,[`gkit-heading-separetor-${e?.separatorPosition}`]:e?.separatorPosition,[`gkit-heading-separetor-style-${e?.separatorStyle}`]:e?.separatorStyle})},divider:{className:s()({"gkit-heading-separetor-divider":e?.showSeparator})},isCustom:!(!e?.showSeparator||"custom"!==e?.separatorStyle)&&(0,l.jsx)(n,{image:e?.separatorImage})}),"after-title"===e?.subtitlePosition&&(0,l.jsx)(l.Fragment,{children:e?.showSubtitle&&(0,l.jsx)(o,{...a,children:e?.subtitleContent})}),e?.showDescription&&(0,l.jsx)("div",{className:"gkit-heading-description",children:(0,l.jsx)("p",{children:e?.descriptionContent})}),"bottom"===e?.separatorPosition&&(0,l.jsx)(d,{wrapper:{className:s()({"gkit-heading-separetor":e?.showSeparator,[`gkit-heading-separetor-${e?.separatorPosition}`]:e?.separatorPosition,[`gkit-heading-separetor-style-${e?.separatorStyle}`]:e?.separatorStyle})},divider:{className:s()({"gkit-heading-separetor-divider":e?.showSeparator})},isCustom:!(!e?.showSeparator||"custom"!==e?.separatorStyle)&&(0,l.jsx)(n,{image:e?.separatorImage})})]})]})}}];var g=i(7723),u=i(6087);const b=({attributes:e,setAttributes:t,SubtitleTag:i,subTitleProps:o,isEdit:a=!1})=>{const{GkitImage:n}=window.gutenkit.components;return(0,l.jsxs)(l.Fragment,{children:["top"===e?.separatorPosition&&e?.showSeparator&&(0,l.jsx)(d,{wrapper:{className:s()({"gkit-heading-separetor":e?.showSeparator,[`gkit-heading-separetor-${e?.separatorPosition}`]:e?.separatorPosition,[`gkit-heading-separetor-style-${e?.separatorStyle}`]:e?.separatorStyle})},divider:{className:s()({"gkit-heading-separetor-divider":e?.showSeparator})},isCustom:!(!e?.showSeparator||"custom"!==e?.separatorStyle)&&(0,l.jsx)(n,{image:e?.separatorImage,isEdit:a})}),e?.showShadowText&&(0,l.jsx)("span",{className:"gkit-heading-shadow-text",children:e?.shadowTextContent}),"before-title"===e?.subtitlePosition&&(0,l.jsx)(l.Fragment,{children:e?.showSubtitle&&(a?(0,l.jsx)(r.RichText,{tagName:i,value:e?.subtitleContent,...o,className:"gkit-heading-subtitle",onChange:e=>t({subtitleContent:e}),placeholder:(0,g.__)("Write subtitle here...","gutenkit-blocks-addon")}):(0,l.jsx)(r.RichText.Content,{tagName:i,value:e?.subtitleContent,...o,className:"gkit-heading-subtitle"}))}),"before-title"===e?.separatorPosition&&e?.showSeparator&&(0,l.jsx)(d,{wrapper:{className:s()({"gkit-heading-separetor":e?.showSeparator,[`gkit-heading-separetor-${e?.separatorPosition}`]:e?.separatorPosition,[`gkit-heading-separetor-style-${e?.separatorStyle}`]:e?.separatorStyle})},divider:{className:s()({"gkit-heading-separetor-divider":e?.showSeparator})},isCustom:!(!e?.showSeparator||"custom"!==e?.separatorStyle)&&(0,l.jsx)(n,{image:e?.separatorImage,isEdit:a})})]})},h=({attributes:e,setAttributes:t,SubtitleTag:i,subTitleProps:o,isEdit:a=!1})=>{const{GkitImage:n}=window.gutenkit.components;return(0,l.jsxs)(l.Fragment,{children:["after-title"===e?.separatorPosition&&e?.showSeparator&&(0,l.jsx)(d,{wrapper:{className:s()({"gkit-heading-separetor":e?.showSeparator,[`gkit-heading-separetor-${e?.separatorPosition}`]:e?.separatorPosition,[`gkit-heading-separetor-style-${e?.separatorStyle}`]:e?.separatorStyle})},divider:{className:s()({"gkit-heading-separetor-divider":e?.showSeparator})},isCustom:!(!e?.showSeparator||"custom"!==e?.separatorStyle)&&(0,l.jsx)(n,{image:e?.separatorImage,isEdit:a})}),"after-title"===e?.subtitlePosition&&(0,l.jsx)(l.Fragment,{children:e?.showSubtitle&&(a?(0,l.jsx)(r.RichText,{tagName:i,value:e?.subtitleContent,...o,className:"gkit-heading-subtitle",onChange:e=>t({subtitleContent:e}),placeholder:(0,g.__)("Write subtitle here...","gutenkit-blocks-addon")}):(0,l.jsx)(r.RichText.Content,{tagName:i,value:e?.subtitleContent,...o,className:"gkit-heading-subtitle"}))}),e?.showDescription&&(0,l.jsx)("div",{className:"gkit-heading-description",children:a?(0,l.jsx)(r.RichText,{tagName:"p",value:e?.descriptionContent,onChange:e=>t({descriptionContent:e}),placeholder:(0,g.__)("Write description here...","gutenkit-blocks-addon")}):(0,l.jsx)(r.RichText.Content,{tagName:"p",value:e?.descriptionContent})}),"bottom"===e?.separatorPosition&&e?.showSeparator&&(0,l.jsx)(d,{wrapper:{className:s()({"gkit-heading-separetor":e?.showSeparator,[`gkit-heading-separetor-${e?.separatorPosition}`]:e?.separatorPosition,[`gkit-heading-separetor-style-${e?.separatorStyle}`]:e?.separatorStyle})},divider:{className:s()({"gkit-heading-separetor-divider":e?.showSeparator})},isCustom:!(!e?.showSeparator||"custom"!==e?.separatorStyle)&&(0,l.jsx)(n,{image:e?.separatorImage,isEdit:a})})]})},y=(0,u.lazy)((()=>i.e(2311).then(i.bind(i,2311)))),{heading:k}=window.gutenkit.editorIcon;(0,o.registerBlockType)(p.UU,{edit:function({attributes:e,setAttributes:t,clientId:i,advancedControl:o,isSelected:a}){const{GkitStyle:n,GkitSuspense:d}=window.gutenkit.components,{useDeviceType:p,gkitResponsiveValue:c,linkGenerator:u,useBlockStyles:k,useDeviceList:f}=window.gutenkit.helpers,x=f(),j=p(),m=c(e,"generalTextAlignment",j),T=(0,r.useBlockProps)({className:s()({[`has-text-align-${m}`]:m,"gkit-heading-has-border":e?.showBorder,[`gkit-heading-border-position-${e?.borderPosition}`]:e?.borderPosition})}),w=e?.subtitleHtmlTag||"h3",S={};S.className=s()({"gkit-heading-subtitle":e?.showSubtitle,"gkit-heading-subtitle-has-border":e?.borderSubtitle,"gkit-heading-subtitle-has-outline":e?.showOutline,"gkit-heading-subtitle-has-text-fill":e?.subtitleUseTextFill});const v=k(e,t,"blocksCSS",((e,t)=>{const{parseCSS:i,backgroundGenerator:o,fillBackgroundGenerator:r,getBoxValue:a,getBorderValue:s,getTypographyValue:l,getSliderValue:n,getBoxShadowValue:d,getColor:p}=window.gutenkit.helpers,c=e.blockClass;return i([[{selector:`.${c} .gkit-heading-description`,color:p(e?.descriptionColor)},{selector:`.${c} .gkit-heading-title, .${c} > a.external-link`,color:p(e?.titleColor),"text-shadow":d(e?.titleTextShadow)},{selector:`.${c} .gkit-heading-title strong`,color:p(e?.focusedTitleColor),"text-decoration-color":p(e?.focusedTitleTextDecorationColor),"text-shadow":d(e?.focusedTitleTextShadow),background:e?.focusedTitleUseBackground&&o(e?.focusedTitleBackgroundColor).background,...a(e?.focusedTitleBorderRadius,"border-radius"),"-webkit-text-stroke-width":e?.focusedTitleUseStroke&&n(e?.focusedTitleStrokeWidth),"-webkit-text-stroke-color":e?.focusedTitleUseStroke&&p(e?.focusedTitleStrokeColor)},{selector:`.${c} .gkit-heading-title strong a`,color:p(e?.focusedTitleColor),"text-decoration-color":p(e?.focusedTitleTextDecorationColor),"text-shadow":d(e?.focusedTitleTextShadow),background:e?.focusedTitleUseBackground&&o(e?.focusedTitleBackgroundColor).background,...a(e?.focusedTitleBorderRadius,"border-radius")},{selector:`.${c} .gkit-heading-title.gkit-heading-title-text-fill strong`,...r(e?.focusedTitleTextFillBackground)},{selector:`.${c} .gkit-heading-title:hover strong`,color:p(e?.focusedTitleHoverColor)},{selector:`.${c} .gkit-heading-title:hover strong a`,color:p(e?.focusedTitleHoverColor)},{selector:`.${c} .gkit-heading-title:hover`,color:p(e?.titleHoverColor)},{selector:`.${c}.gkit-heading-has-border .gkit-heading-title::before`,width:n(e?.titleBorderWidth),height:n(e?.titleBorderHeight),top:n(e?.titleBorderVerticalPosition),background:e?.titleBorderBackground},{selector:`.${c}.gkit-heading-has-border .gkit-heading-title, .${c}.gkit-heading-has-border .gkit-heading-separetor`,"padding-left":"start"===e?.borderPosition?n(e?.titleBorderRightGap):void 0,"padding-right":"end"===e?.borderPosition?n(e?.titleBorderLeftGap):void 0},{selector:`.${c} .gkit-heading-subtitle`,color:p(e?.subtitleColor)},{selector:`.${c} .gkit-heading-subtitle.gkit-heading-subtitle-has-text-fill`,...r(e?.subtitleTextFillBackground)},{selector:`.${c} .gkit-heading-subtitle-has-border::before`,background:o(e?.subtitleBorderLeftBackground).background},{selector:`.${c} .gkit-heading-subtitle-has-border::after`,background:o(e?.subtitleBorderRightBackground).background},{selector:`.${c}.wp-block-gutenkit-heading .gkit-heading-separetor .gkit-heading-separetor-divider`,color:p(e?.separatorColor),"margin-left":"right"===e?.generalTextAlignmentDesktop?"auto":void 0,"margin-right":"center"===e?.generalTextAlignmentDesktop?"auto":"right"===e?.generalTextAlignmentDesktop?"0":void 0,margin:"center"===e?.generalTextAlignmentDesktop?"0 auto":void 0},{selector:`.${c} .gkit-heading-shadow-text`,"-webkit-text-fill-color":p(e?.shadowTextColor),"-webkit-text-stroke-width":n(e?.shadowTextStrokeWidth),"-webkit-text-stroke-color":p(e?.shadowTextStrokeColor)},{selector:`.${c} .gkit-heading-subtitle-has-outline:not(.gkit-heading-subtitle-has-border)`,...s(e?.subtitleOutlineBorder)}],t=>[{selector:`.${c}`,"text-align":e?.[`generalTextAlignment${t}`]},{selector:`.${c} .gkit-heading-description`,"max-width":n(e?.[`descriptionMaxWidth${t}`]),...l(e?.descriptionTypography,t),...a(e?.[`descriptionMargin${t}`],"margin")},{selector:`.${c} .gkit-heading-title`,...a(e?.[`titleMargin${t}`],"margin"),...l(e?.titleTypography,t)},{selector:`.${c} .gkit-heading-title strong`,...l(e?.focusedTitleTypography,t),...a(e?.[`focusedTitlePadding${t}`],"padding")},{selector:`.${c} .gkit-heading-title.gkit-heading-title-text-fill strong`,...r(e?.focusedTitleTextFillBackground,t)},{selector:`.${c} .gkit-heading-subtitle.gkit-heading-subtitle-has-text-fill`,...r(e?.subtitleTextFillBackground,t)},{selector:`.${c} .gkit-heading-subtitle`,...l(e?.subtitleTypography,t),...a(e?.[`subtitleMargin${t}`],"margin")},{selector:`.${c} .gkit-heading-subtitle-has-border::before`,width:n(e?.[`subtitleBorderLeftWidth${t}`]),...a(e?.[`subtitleBorderLeftMargin${t}`],"margin")},{selector:`.${c} .gkit-heading-subtitle-has-border::after`,width:n(e?.[`subtitleBorderRightWidth${t}`]),...a(e?.[`subtitleBorderRightMargin${t}`],"margin")},{selector:`.${c} .gkit-heading-subtitle-has-border::after, .${c} .gkit-heading-subtitle-has-border::before`,height:n(e?.[`subtitleBorderRightHeight${t}`]),transform:`translateY(${n(e?.[`subtitleBorderRightVerticalPosition${t}`])})`},{selector:`.${c}.wp-block-gutenkit-heading .gkit-heading-separetor`,...a(e?.[`separatorMargin${t}`],"margin")},{selector:`.${c}.wp-block-gutenkit-heading .gkit-heading-separetor .gkit-heading-separetor-divider`,width:n(e?.[`separatorWidth${t}`]),height:n(e?.[`separatorHeight${t}`])},{selector:`.${c}.wp-block-gutenkit-heading .gkit-heading-separetor .gkit-heading-separetor-divider::before`,height:n(e?.[`separatorHeight${t}`])},{selector:`.${c} .gkit-heading-shadow-text`,top:e?.[`shadowTextPosition${t}`]?.top,left:e?.[`shadowTextPosition${t}`]?.left,...l(e?.shadowTextTypography,t)},{selector:`.${c} .gkit-heading-subtitle-has-outline:not(.gkit-heading-subtitle-has-border)`,...a(e?.[`subtitleOutlineBorderRadius${t}`],"border-radius"),...a(e?.[`subtitlePadding${t}`],"padding")}]],t)})(e,x));return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n,{blocksCSS:v}),a&&(0,l.jsx)(d,{children:(0,l.jsx)(y,{attributes:e,setAttributes:t,device:j,advancedControl:o})}),(0,l.jsxs)("div",{...T,children:[(0,l.jsx)(b,{attributes:e,setAttributes:t,SubtitleTag:w,subTitleProps:S,isEdit:!0}),e.linkSwitch?(0,l.jsx)("a",{...u(e?.link),className:"external-link",children:(0,l.jsx)(r.RichText,{identifier:"content",tagName:e?.htmlTag,value:e?.content,onChange:e=>{t({content:e})},placeholder:(0,g.__)("Enter your heading here...","gutenkit-blocks-addon"),className:s()({"gkit-heading-title":!0,"gkit-heading-title-text-fill":e?.focusedTitleUseTextFill})})}):(0,l.jsx)(r.RichText,{identifier:"content",tagName:e?.htmlTag,value:e?.content,onChange:e=>{t({content:e})},placeholder:(0,g.__)("Enter your heading here...","gutenkit-blocks-addon"),className:s()({"gkit-heading-title":!0,"gkit-heading-title-text-fill":e?.focusedTitleUseTextFill})}),(0,l.jsx)(h,{attributes:e,setAttributes:t,SubtitleTag:w,subTitleProps:S,isEdit:!0})]})]})},icon:{src:k},save:function({attributes:e}){const{linkGenerator:t}=window.gutenkit.helpers,i=r.useBlockProps.save({className:s()({"gkit-heading-has-border":e?.showBorder,[`gkit-heading-border-position-${e?.borderPosition}`]:e?.borderPosition}),id:"block-"+e?.blockID}),o=e?.subtitleHtmlTag||"h3",a={};a.className=s()({"gkit-heading-subtitle":e?.showSubtitle,"gkit-heading-subtitle-has-border":e?.borderSubtitle,"gkit-heading-subtitle-has-outline":e?.showOutline,"gkit-heading-subtitle-has-text-fill":e?.subtitleUseTextFill});const n=e?.linkSwitch?t(e?.link):"";return(0,l.jsxs)("div",{...i,children:[(0,l.jsx)(b,{attributes:e,SubtitleTag:o,subTitleProps:a,isEdit:!1}),e?.linkSwitch?(0,l.jsx)("a",{...n,className:"external-link",children:(0,l.jsx)(r.RichText.Content,{tagName:e?.htmlTag,value:e?.content,className:s()({"gkit-heading-title":!0,"gkit-heading-title-text-fill":e?.focusedTitleUseTextFill})})}):(0,l.jsx)(r.RichText.Content,{tagName:e?.htmlTag,value:e?.content,className:s()({"gkit-heading-title":!0,"gkit-heading-title-text-fill":e?.focusedTitleUseTextFill})}),(0,l.jsx)(h,{attributes:e,SubtitleTag:o,subTitleProps:a,isEdit:!1})]})},deprecated:c})},790:e=>{"use strict";e.exports=window.ReactJSXRuntime},6427:e=>{"use strict";e.exports=window.wp.components},6087:e=>{"use strict";e.exports=window.wp.element},7723:e=>{"use strict";e.exports=window.wp.i18n},5573:e=>{"use strict";e.exports=window.wp.primitives},6942:(e,t)=>{var i;!function(){"use strict";var o={}.hasOwnProperty;function r(){for(var e="",t=0;t<arguments.length;t++){var i=arguments[t];i&&(e=s(e,a(i)))}return e}function a(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return r.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var i in e)o.call(e,i)&&e[i]&&(t=s(t,i));return t}function s(e,t){return t?e?e+" "+t:e+t:e}e.exports?(r.default=r,e.exports=r):void 0===(i=function(){return r}.apply(t,[]))||(e.exports=i)}()}},r={};function a(e){var t=r[e];if(void 0!==t)return t.exports;var i=r[e]={exports:{}};return o[e](i,i.exports,a),i.exports}a.m=o,e=[],a.O=(t,i,o,r)=>{if(!i){var s=1/0;for(p=0;p<e.length;p++){i=e[p][0],o=e[p][1],r=e[p][2];for(var l=!0,n=0;n<i.length;n++)(!1&r||s>=r)&&Object.keys(a.O).every((e=>a.O[e](i[n])))?i.splice(n--,1):(l=!1,r<s&&(s=r));if(l){e.splice(p--,1);var d=o();void 0!==d&&(t=d)}}return t}r=r||0;for(var p=e.length;p>0&&e[p-1][2]>r;p--)e[p]=e[p-1];e[p]=[i,o,r]},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var i in t)a.o(t,i)&&!a.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((t,i)=>(a.f[i](e,t),t)),[])),a.u=e=>e+".js",a.miniCssF=e=>{},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),t={},i="gutenkit-blocks-addon:",a.l=(e,o,r,s)=>{if(t[e])t[e].push(o);else{var l,n;if(void 0!==r)for(var d=document.getElementsByTagName("script"),p=0;p<d.length;p++){var c=d[p];if(c.getAttribute("src")==e||c.getAttribute("data-webpack")==i+r){l=c;break}}l||(n=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,a.nc&&l.setAttribute("nonce",a.nc),l.setAttribute("data-webpack",i+r),l.src=e),t[e]=[o];var g=(i,o)=>{l.onerror=l.onload=null,clearTimeout(u);var r=t[e];if(delete t[e],l.parentNode&&l.parentNode.removeChild(l),r&&r.forEach((e=>e(o))),i)return i(o)},u=setTimeout(g.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=g.bind(null,l.onerror),l.onload=g.bind(null,l.onload),n&&document.head.appendChild(l)}},a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;a.g.importScripts&&(e=a.g.location+"");var t=a.g.document;if(!e&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(e=t.currentScript.src),!e)){var i=t.getElementsByTagName("script");if(i.length)for(var o=i.length-1;o>-1&&(!e||!/^http(s?):/.test(e));)e=i[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=e+"../../"})(),(()=>{var e={5119:0,6295:0};a.f.j=(t,i)=>{var o=a.o(e,t)?e[t]:void 0;if(0!==o)if(o)i.push(o[2]);else if(6295!=t){var r=new Promise(((i,r)=>o=e[t]=[i,r]));i.push(o[2]=r);var s=a.p+a.u(t),l=new Error;a.l(s,(i=>{if(a.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var r=i&&("load"===i.type?"missing":i.type),s=i&&i.target&&i.target.src;l.message="Loading chunk "+t+" failed.\n("+r+": "+s+")",l.name="ChunkLoadError",l.type=r,l.request=s,o[1](l)}}),"chunk-"+t,t)}else e[t]=0},a.O.j=t=>0===e[t];var t=(t,i)=>{var o,r,s=i[0],l=i[1],n=i[2],d=0;if(s.some((t=>0!==e[t]))){for(o in l)a.o(l,o)&&(a.m[o]=l[o]);if(n)var p=n(a)}for(t&&t(i);d<s.length;d++)r=s[d],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(p)},i=self.webpackChunkgutenkit_blocks_addon=self.webpackChunkgutenkit_blocks_addon||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))})();var s=a.O(void 0,[6295],(()=>a(5393)));s=a.O(s)})();