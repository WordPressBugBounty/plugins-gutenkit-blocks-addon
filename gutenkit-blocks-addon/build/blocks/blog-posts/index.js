(()=>{var t,o,e,n={1451:(t,o,e)=>{"use strict";const n=window.wp.blocks;e(7723);const g=window.wp.blockEditor;var s=e(6087),i=e(1455),l=e.n(i);const a=window.wp.url,r=window.wp.coreData;var u=e(790);const p=({author:t,date:o,categories:e,comments:n,metaData:g})=>{const{GkitIcon:s}=window.gutenkit.components,i=g.map((t=>t.value)),l=new Date(o.postDate);if(g.length>0)return(0,u.jsxs)("div",{className:"post-meta-list",children:[i.includes("author")&&(0,u.jsx)("span",{className:"meta-author",children:t?.link&&(0,u.jsxs)(u.Fragment,{children:[t?.showAuthorImage&&t?.avatar_urls?(0,u.jsx)("span",{className:"meta-author-image",children:(0,u.jsx)("img",{src:t?.avatar_urls?.[96],alt:t?.name,loading:"lazy"})}):(0,u.jsx)(s,{icon:t?.icon}),(0,u.jsx)("a",{href:"#",rel:"author",children:t?.name})]})}),i.includes("date")&&(0,u.jsxs)("span",{className:"meta-date",children:[(0,u.jsx)(s,{icon:o?.icon}),(0,u.jsx)("span",{className:"meta-date-text",children:l.toDateString()})]}),i.includes("category")&&(0,u.jsx)("span",{className:"post-cat",children:(0,u.jsxs)("span",{className:"post-cat-item",children:[(0,u.jsx)(s,{icon:e?.icon}),e?.data?.map(((t,o)=>(0,u.jsx)("a",{href:"#",rel:"category tag",children:t.name},o)))]})}),i.includes("comment")&&(0,u.jsx)("span",{className:"post-comment",children:n?.data&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(s,{icon:n?.icon}),(0,u.jsx)("a",{href:"#",children:n?.data.length})]})})]})},c=function({post:t,attributes:o}){const e=t.featured_media,[n,g]=(0,s.useState)(""),[i,c]=(0,s.useState)({}),[b,k]=(0,s.useState)([]),[d,h]=(0,s.useState)([]),{featuredImageSize:m}=o,{GkitIcon:f}=window.gutenkit.components,{truncateWords:B}=window.gutenkit.helpers,[w]=(0,r.useEntityProp)("postType",t.type,"excerpt",t.id),v=""!==w?w:t.content.rendered;(0,s.useEffect)((()=>{e&&l()({path:`/wp/v2/media/${e}`}).then((t=>{g("full"===m?t?.source_url||"":t?.media_details?.sizes[m]?.source_url||"")})).catch((t=>{console.error(t)}))}),[e,m]),(0,s.useEffect)((()=>{const o=t?.author;o&&l()({path:`/wp/v2/users/${o}`}).then((t=>{c(t)})).catch((t=>{console.error(t)}))}),[t.author]),(0,s.useEffect)((()=>{const o=t?.categories,e={include:o,hide_empty:!0,parent:0};e&&l()({path:(0,a.addQueryArgs)("/wp/v2/categories",e)}).then((t=>{k(t)})).catch((t=>{console.error(t)}))}),[t.categories]),(0,s.useEffect)((()=>{const o=t?.comment_status;"open"===o&&l()({path:`/wp/v2/comments?post=${t.id}`}).then((t=>{h(t)})).catch((t=>{console.error(t)}))}),[t]);const $=new Date(t.date);return(0,u.jsxs)("div",{className:`gutenkit-blog-post gutenkit-blog-post-direction-${o?.featuredImagePosition}`,children:[o?.showFeaturedImage&&e&&"grid"!==o?.layout?(0,u.jsxs)("div",{className:"gutenkit-blog-post-thumbnail",children:[(0,u.jsxs)("a",{href:"#",className:"gutenkit-blog-post-thumbnail-link",children:[(0,u.jsx)("img",{src:n,alt:t.title.rendered,className:"gutenkit-blog-post-thumbnail-image",loading:"lazy"}),o?.showOverlay&&(0,u.jsx)("div",{className:"gkit-blog-post-overlay"})]}),"grid-thumb"===o?.layout&&(0,u.jsxs)(u.Fragment,{children:[o?.gkitBlogPostsFloatingDate&&(0,u.jsx)("div",{className:`gutenkit-blog-post-floating-date gutenkit-blog-post-floating-date-${o?.gkitBlogPostsFloatingDateStyle}`,children:(0,u.jsxs)("div",{className:`gutenkit-blog-post-floating-date-wrapper floating-date-${o?.gkitBlogPostsFloatingDateTrianglePositionAlignment}`,children:[(0,u.jsx)("strong",{className:"gutenkit-blog-post-floating-date-text",children:$.getDate()}),(0,u.jsx)("span",{className:"gutenkit-blog-post-floating-date-month",children:$.toLocaleString("en-US",{month:"long"})})]})}),o?.gkitBlogPostsFloatingCategory&&(0,u.jsx)("div",{className:"gutenkit-blog-post-floating-category",children:(0,u.jsx)("span",{className:"gutenkit-blog-post-floating-category-wrapper",children:b&&b.map(((t,o)=>(0,u.jsx)("a",{href:"#",rel:"category tag",children:t.name},o)))})})]})]}):"",(0,u.jsxs)("div",{className:"gutenkit-blog-post-content "+(o.showContentHighlightBorder?"gkit-highlight-border":""),children:[o?.showMetaData&&"before-title"===o?.metaDataPosition&&(0,u.jsx)(p,{author:{avatar_urls:i?.avatar_urls,link:i?.link,name:i?.name,showAuthorImage:o?.showAuthorAvatar,icon:o?.authorIcon},date:{postDate:t.date,icon:o?.dateIcon},categories:{data:b,icon:o?.categoryIcon},comments:{data:d,icon:o?.commentIcon},metaData:o?.metaData}),o?.showPostTitle&&(0,u.jsxs)("h2",{className:"gutenkit-blog-post-title",children:[(0,u.jsxs)("a",{href:"#",className:"gutenkit-blog-post-title-link",children:[" ",o?.numberOfWordsTitle?B(t.title.rendered,o?.numberOfWordsTitle):t.title.rendered," "]}),"grid"===o?.layout&&o?.gkitBlogPostsTitleSeparator&&(0,u.jsx)("span",{className:"gutenkit-blog-post-horizontal-line"})]}),o?.showMetaData&&"after-title"===o?.metaDataPosition&&(0,u.jsx)(p,{author:{avatar_urls:i?.avatar_urls,link:i?.link,name:i?.name,showAuthorImage:o?.showAuthorAvatar,icon:o?.authorIcon},date:{postDate:t.date,icon:o?.dateIcon},categories:{data:b,icon:o?.categoryIcon},comments:{data:d,icon:o?.commentIcon},metaData:o?.metaData}),o?.showPostContent&&(0,u.jsx)("div",{className:"gutenkit-blog-post-description",dangerouslySetInnerHTML:{__html:o?.numberOfWordsContent?B(v,o?.numberOfWordsContent):v}}),o?.showMetaData&&"after-content"===o?.metaDataPosition&&(0,u.jsx)(p,{author:{avatar_urls:i?.avatar_urls,link:i?.link,name:i?.name,showAuthorImage:o?.showAuthorAvatar,icon:o?.authorIcon},date:{postDate:t.date,icon:o?.dateIcon},categories:{data:b,icon:o?.categoryIcon},comments:{data:d,icon:o?.commentIcon},metaData:o?.metaData}),o?.showBlogPostsReadMore&&"list"!==o?.layout&&(0,u.jsx)("div",{className:"gutenkit-blog-post-btn-wraper",children:(0,u.jsxs)("a",{href:"#",className:"gutenkit-blog-post-btn gkit-btn",children:[o?.gkitBlogPostsShowBtnIcon&&"left"===o?.gkitBlogPostsBtnIconAlign&&o?.gkitBlogPostsBtnIcon&&(0,u.jsx)(f,{icon:o?.gkitBlogPostsBtnIcon}),o?.gkitBlogPostsBtnText&&(0,u.jsx)("span",{className:"gutenkit-blog-post-btn-text",children:o?.gkitBlogPostsBtnText}),o?.gkitBlogPostsShowBtnIcon&&"right"===o?.gkitBlogPostsBtnIconAlign&&o?.gkitBlogPostsBtnIcon&&(0,u.jsx)(f,{icon:o?.gkitBlogPostsBtnIcon})]})})]})]},t.id)};var b=e(6942),k=e.n(b);const d=(0,s.lazy)((()=>e.e(4986).then(e.bind(e,4986)))),h=JSON.parse('{"UU":"gutenkit/blog-posts"}'),{blogPosts:m}=window.gutenkit.editorIcon;(0,n.registerBlockType)(h.UU,{edit:function({attributes:t,setAttributes:o,clientId:e,advancedControl:n,isSelected:i}){const{GkitStyle:r,GkitSuspense:p}=window.gutenkit.components,{useDeviceType:b,useBlockStyles:h,useDeviceList:m}=window.gutenkit.helpers,f=m(),{numberOfPosts:B,selectPostBy:w,selectedPosts:v,selectedCategories:$,offset:y,orderBy:x,order:P}=t,S=v&&v.map((t=>t.value)),[C,j]=(0,s.useState)([]),I=b(),N=(0,g.useBlockProps)(),T={};return"category"===w?T.categories=$&&$.map((t=>t.value)):"selected"===w&&(T.include=S),T.per_page=B,T.offset=y,T.orderby=x,T.order=P,(0,s.useEffect)((()=>{l()({path:(0,a.addQueryArgs)("/wp/v2/posts",T)}).then((t=>{j(t)})).catch((t=>{console.error(t)}))}),[v,$,B,y,x,P]),h(t,o,"blocksCSS",((t,o)=>{const{parseCSS:e,backgroundGenerator:n,getBoxShadowValue:g,getBoxValue:s,getBorderValue:i,getTypographyValue:l,getSliderValue:a,getColor:r}=window.gutenkit.helpers;let u=t?.wrapperBackgroundNormal?.backgroundColor||t?.wrapperBackgroundNormal?.gradient||t?.wrapperBackgroundNormal&&Object.keys(t?.wrapperBackgroundNormal?.backgroundImage).length>1;const p=t.blockClass;return e([[{selector:`.${p} .gutenkit-blog-post-container:hover .gutenkit-blog-post-thumbnail-image`,transform:u&&"scale(1.05)",opacity:u&&.8},{selector:`.${p} .gutenkit-blog-posts .gutenkit-blog-post-container`,"box-shadow":g(t?.wrapperBoxShadowNormal),...i(t?.containerBorder)},{selector:`.${p} .gutenkit-blog-posts .gutenkit-blog-post-container:hover`,...i(t?.containerBorderHover),"box-shadow":g(t?.wrapperBoxShadowHover)},{selector:`.${p} .gutenkit-blog-posts .gutenkit-blog-post-container .gutenkit-blog-post`,"align-items":t?.verticalAlignment},{selector:`.${p} .gutenkit-blog-posts .gutenkit-blog-post-container .gutenkit-blog-post .gutenkit-blog-post-content`,"background-color":t?.containerBackgroundColor,"box-shadow":g(t?.contentBoxShadow),...i(t?.gkitBlogPostsContentBorder)},{selector:`.${p} .gutenkit-blog-posts .gutenkit-blog-post-container:hover .gutenkit-blog-post .gutenkit-blog-post-content`,...i(t?.gkitBlogPostsContentBorderHoverColor),"background-color":t?.containerBackgroundColorHover,"box-shadow":g(t?.contentBoxShadowHover)},{selector:`.${p} .gutenkit-blog-posts .gutenkit-blog-post-container .gutenkit-blog-post .gutenkit-blog-post-thumbnail .gutenkit-blog-post-thumbnail-link`,"box-shadow":g(t?.featuredImageBoxShadow),...i(t?.featuredImageBorder)},{selector:`.${p} .gutenkit-blog-posts .gutenkit-blog-post-container .gutenkit-blog-post-thumbnail-link .gkit-blog-post-overlay`,background:n(t?.blogPostBackgroundOverlay).background},{selector:`.${p} .gutenkit-blog-posts .gutenkit-blog-post-container:hover .gutenkit-blog-post-thumbnail-link .gkit-blog-post-overlay`,background:n(t?.blogPostBackgroundHoverOverlay).background},{selector:`.${p} .gutenkit-blog-posts .gutenkit-blog-post-container .gutenkit-blog-post .gutenkit-blog-post-content .post-meta-list > span `,...s(t?.metaItemPadding,"padding")},{selector:`.${p} .gutenkit-blog-posts .gutenkit-blog-post-container .gutenkit-blog-post .gutenkit-blog-post-content .post-meta-list > span:not(:last-child):after`,height:a(t?.showMetaSeparator&&t?.metaSeparatorHeight),width:a(t?.showMetaSeparator&&t?.metaSeparatorWidth),right:a(t?.showMetaSeparator&&t?.metaSeparatorSpacing)},{selector:`.${p} .gutenkit-blog-posts .gutenkit-blog-post-container .gutenkit-blog-post .gutenkit-blog-post-content .post-meta-list > span,\n\t\t\t.${p} .gutenkit-blog-posts .gutenkit-blog-post-container .gutenkit-blog-post .gutenkit-blog-post-content .post-meta-list > span > span`,gap:a(t?.metaItemIconSpacing),background:n(t?.metaBackgroundColorNormal).background},{selector:`.${p} .gutenkit-blog-posts .gutenkit-blog-post-container .gutenkit-blog-post-content .post-meta-list > span svg`,"font-size":a(t?.metaItemIconSize)},{selector:`.${p} .gutenkit-blog-posts .gutenkit-blog-post-container .gutenkit-blog-post .gutenkit-blog-post-content .post-meta-list > span`,...s(t?.metaBorderRadiusNormal,"border-radius"),"box-shadow":g(t?.metaBoxShadowNormal),...i(t?.metaBorderNormal)},{selector:`.${p} .gutenkit-blog-posts .gutenkit-blog-post-container:hover .gutenkit-blog-post .gutenkit-blog-post-content .post-meta-list > span,\n\t\t\t.${p} .gutenkit-blog-posts .gutenkit-blog-post-container:hover .gutenkit-blog-post .gutenkit-blog-post-content .post-meta-list > span > span `,background:u&&n(t?.metaBackgroundColorHover).background},{selector:`.${p} .gutenkit-blog-posts .gutenkit-blog-post-container:hover .gutenkit-blog-post .gutenkit-blog-post-content .post-meta-list > span:hover,\n\t\t\t.${p} .gutenkit-blog-posts .gutenkit-blog-post-container:hover .gutenkit-blog-post .gutenkit-blog-post-content .post-meta-list > span > span:hover `,background:n(t?.metaBackgroundColorHover).background},{selector:`.${p} .gutenkit-blog-posts .gutenkit-blog-post-container .gutenkit-blog-post .gutenkit-blog-post-content .post-meta-list > span:hover`,...s(t?.metaBorderRadiusHover,"border-radius"),"box-shadow":g(t?.metaBoxShadowHover),...i(t?.metaBorderHover)},{selector:`.${p} .gutenkit-blog-posts .gutenkit-blog-post-container .gutenkit-blog-post .gutenkit-blog-post-content .post-meta-list > span,\n\t\t\t.${p} .gutenkit-blog-posts .gutenkit-blog-post-container .gutenkit-blog-post .gutenkit-blog-post-content .post-meta-list > span > a,\n\t\t\t.${p} .gutenkit-blog-posts .gutenkit-blog-post-container .gutenkit-blog-post .gutenkit-blog-post-content .post-meta-list > span > span,\n\t\t\t.${p} .gutenkit-blog-posts .gutenkit-blog-post-container .gutenkit-blog-post .gutenkit-blog-post-content .post-meta-list > span > span > a `,color:r(t?.metaTextColorNormal),fill:r(t?.metaIconColorNormal?t?.metaIconColorNormal:t?.metaTextColorNormal),"text-shadow":g(t?.metaTextShadowNormal)},{selector:`.${p} .gutenkit-blog-posts .gutenkit-blog-post-container .gutenkit-blog-post .gutenkit-blog-post-content .post-meta-list > span:not(:last-child):after`,"background-color":t?.showMetaSeparator&&t?.metaTextColorNormal},{selector:`.${p} .gutenkit-blog-posts .gutenkit-blog-post-container:hover .gutenkit-blog-post .gutenkit-blog-post-content .post-meta-list > span, \n\t\t\t.${p} .gutenkit-blog-posts .gutenkit-blog-post-container:hover .gutenkit-blog-post .gutenkit-blog-post-content .post-meta-list > span a,\n\t\t\t.${p} .gutenkit-blog-posts .gutenkit-blog-post-container:hover .gutenkit-blog-post .gutenkit-blog-post-content .post-meta-list > span span,\n\t\t\t.${p} .gutenkit-blog-posts .gutenkit-blog-post-container:hover .gutenkit-blog-post .gutenkit-blog-post-content .post-meta-list > span > span a `,color:r(u?t?.metaTextColorHover:""),fill:r(u?t?.metaIconColorHover?t?.metaIconColorHover:t?.metaTextColorHover:""),"text-shadow":g(t?.metaTextShadowHover)},{selector:`.${p} .gutenkit-blog-posts .gutenkit-blog-post-container .gutenkit-blog-post .gutenkit-blog-post-content .post-meta-list > span:hover, \n\t\t\t.${p} .gutenkit-blog-posts .gutenkit-blog-post-container .gutenkit-blog-post .gutenkit-blog-post-content .post-meta-list > span a:hover,\n\t\t\t.${p} .gutenkit-blog-posts .gutenkit-blog-post-container .gutenkit-blog-post .gutenkit-blog-post-content .post-meta-list > span span:hover,\n\t\t\t.${p} .gutenkit-blog-posts .gutenkit-blog-post-container .gutenkit-blog-post .gutenkit-blog-post-content .post-meta-list > span > span a:hover `,color:r(t?.metaTextColorHover),fill:r(t?.metaIconColorHover?t?.metaIconColorHover:t?.metaTextColorHover),"text-shadow":g(t?.metaTextShadowHover)},{selector:`.${p} .gutenkit-blog-posts .gutenkit-blog-post-container .gutenkit-blog-post .gutenkit-blog-post-content .gutenkit-blog-post-title .gutenkit-blog-post-horizontal-line`,"background-color":t?.gkitBlogPostsTitleSeparatorColor,width:a(t?.gkitBlogPostsTitleSeparatorWidth),height:a(t?.gkitBlogPostsTitleSeparatorHeight),...s(t?.gkitBlogPostsTitleSeparatorMargin,"margin")},{selector:`.${p} .gutenkit-blog-posts .gutenkit-blog-post-container .gutenkit-blog-post .gutenkit-blog-post-content .gutenkit-blog-post-title .gutenkit-blog-post-title-link`,color:r(t?.titleColorNormal),"text-shadow":g(t?.titleTextShadowNormal)},{selector:`.${p} .gutenkit-blog-posts .gutenkit-blog-post-container:hover .gutenkit-blog-post .gutenkit-blog-post-content .gutenkit-blog-post-title .gutenkit-blog-post-title-link`,color:r(u?t?.titleColorHover:""),"text-shadow":g(t?.titleTextShadowHover)},{selector:`.${p} .gutenkit-blog-posts .gutenkit-blog-post-container .gutenkit-blog-post .gutenkit-blog-post-content .gutenkit-blog-post-title .gutenkit-blog-post-title-link:hover`,color:r(t?.titleColorHover)},{selector:`.${p} .gutenkit-blog-posts .gutenkit-blog-post-container .gutenkit-blog-post .gutenkit-blog-post-content .gutenkit-blog-post-description`,color:r(t?.contentColor)},{selector:`.${p} .gutenkit-blog-posts .gutenkit-blog-post-container:hover .gutenkit-blog-post .gutenkit-blog-post-content .gutenkit-blog-post-description`,color:r(u?t?.contentColorHover:"")},{selector:`.${p} .gutenkit-blog-posts .gutenkit-blog-post-container .gutenkit-blog-post .gutenkit-blog-post-content .gutenkit-blog-post-description:hover`,color:r(t?.contentColorHover)},{selector:`.${p} .gutenkit-blog-posts .gutenkit-blog-post-container .gutenkit-blog-post .gutenkit-blog-post-content.gkit-highlight-border::before`,height:a(t?.highlightBorderHeight),width:a(t?.highlightBorderWidth),top:a(t?.highlightBorderBottomPosition),left:a(t?.highlightBorderRightPosition),"background-color":t?.highlightBorderBackgroundcolorNormal},{selector:`.${p} .gutenkit-blog-posts .gutenkit-blog-post-container:hover .gutenkit-blog-post-content.gkit-highlight-border::before`,"background-color":u?t?.highlightBorderBackgroundcolorHover:""},{selector:`.${p} .gutenkit-blog-posts .gutenkit-blog-post-container .gutenkit-blog-post-content.gkit-highlight-border:hover::before`,"background-color":t?.highlightBorderBackgroundcolorHover},{selector:`.${p} .gutenkit-blog-posts .gutenkit-blog-post-container .gutenkit-blog-post-content .post-meta-list .meta-author .meta-author-image`,width:a(t?.authorImageWidth),height:a(t?.authorImageHeight),"box-shadow":g(t?.authorImageBoxShadow),...i(t?.authorImageBorder),...s(t?.authorImageMargin,"margin")},{selector:`.${p} .gutenkit-blog-posts .gutenkit-blog-post-container .gutenkit-blog-post-content .gutenkit-blog-post-btn-wraper .gutenkit-blog-post-btn`,color:r(t?.gkitBlogPostsBtnTextColor),fill:r(t?.gkitBlogPostsBtnTextColor),...i(t?.gkitBlogPostsBtnBorder),"background-color":r(t?.gkitBlogPostsBtnBgColor),"box-shadow":g(t?.gkitBlogPostsBtnBoxShadow),gap:a(t?.gkitBlogPostsBtnSpacing)},{selector:`.${p} .gutenkit-blog-posts .gutenkit-blog-post-container .gutenkit-blog-post-content .gutenkit-blog-post-btn-wraper .gutenkit-blog-post-btn:hover`,color:r(t?.gkitBlogPostsBtnHoverColor),fill:r(t?.gkitBlogPostsBtnHoverColor),"background-color":r(t?.gkitBlogPostsBtnHoverBgColor),...i(t?.gkitBlogPostsBtnBorderHoverColor),"box-shadow":g(t?.gkitBlogPostsBtnBoxShadowHover)},{selector:`.${p} .gutenkit-blog-posts .gutenkit-blog-post-container .gutenkit-blog-post-thumbnail .gutenkit-blog-post-floating-date.gutenkit-blog-post-floating-date-style1 .gutenkit-blog-post-floating-date-wrapper`,...i(t?.gkitBlogPostsFloatingDateBorderGroup),"box-shadow":g(t?.gkitBlogPostsFloatingDateShadowGroup)},{selector:`.${p} .gutenkit-blog-posts.gutenkit-blog-posts-layout-grid-thumb .gutenkit-blog-post .gutenkit-blog-post-thumbnail .gutenkit-blog-post-floating-date .gutenkit-blog-post-floating-date-wrapper .gutenkit-blog-post-floating-date-text`,color:r(t?.gkitBlogPostsFloatingDateColor)},{selector:`.${p} .gutenkit-blog-posts.gutenkit-blog-posts-layout-grid-thumb .gutenkit-blog-post .gutenkit-blog-post-thumbnail .gutenkit-blog-post-floating-date .gutenkit-blog-post-floating-date-wrapper .gutenkit-blog-post-floating-date-month`,color:r(t?.gkitBlogPostsFloatingDateMonthColor)},{selector:`.${p} .gutenkit-blog-posts.gutenkit-blog-posts-layout-grid-thumb .gutenkit-blog-post .gutenkit-blog-post-thumbnail .gutenkit-blog-post-floating-date.gutenkit-blog-post-floating-date-style2 .gutenkit-blog-post-floating-date-wrapper::before`,color:r(t?.gkitBlogPostsFloatingDateTriangleBackgroundColor),"border-width":a(t?.gkitBlogPostsFloatingDateTriangleSize),left:a(t?.gkitBlogPostsFloatingDateTrianglePositionLeft),top:a(t?.gkitBlogPostsFloatingDateTrianglePositionTop)},{selector:`.${p}.wp-block-gutenkit-blog-posts .gutenkit-blog-posts.gutenkit-blog-posts-layout-grid-thumb .gutenkit-blog-post .gutenkit-blog-post-thumbnail .gutenkit-blog-post-floating-category .gutenkit-blog-post-floating-category-wrapper a`,"background-color":t?.gkitBlogPostsFloatingCategoryBgColor,color:r(t?.gkitBlogPostsFloatingCategoryColor)}],o=>[{selector:`.${p} .gutenkit-blog-posts`,...s(t[`wrapperMargin${o}`],"margin")},{selector:`.${p} .gutenkit-blog-posts .gutenkit-blog-post-container`,background:n(t[`wrapperBackgroundNormal, "${o}`]).background,"background-size":n(t[`wrapperBackgroundNormal, "${o}`]).size,...s(t[`wrapperBorderRadius${o}`],"border-radius"),...s(t[`wrapperPadding${o}`],"padding")},{selector:`.${p} .gutenkit-blog-posts .gutenkit-blog-post-container:hover`,...s(t[`wrapperBorderRadiusHover${o}`],"border-radius")},{selector:`.${p} .gutenkit-blog-posts .gutenkit-blog-post-container .gutenkit-blog-post .gutenkit-blog-post-content`,...s(t[`contentPadding${o}`],"padding"),...s(t[`contentBorderRadius${o}`],"border-radius")},{selector:`.${p} .gutenkit-blog-posts .gutenkit-blog-post-container:hover .gutenkit-blog-post .gutenkit-blog-post-content`,...s(t[`contentBorderRadiusHover${o}`],"border-radius")},{selector:`.${p} .gutenkit-blog-posts .gutenkit-blog-post-container .gutenkit-blog-post .gutenkit-blog-post-thumbnail`,...s(t[`featuredImagePadding${o}`],"padding"),...s(t[`featuredImageMargin${o}`],"margin")},{selector:`.${p} .gutenkit-blog-posts .gutenkit-blog-post-container .gutenkit-blog-post .gutenkit-blog-post-thumbnail`,"max-width":"grid"!==t?.layout&&!0===t?.useHeightWidthSwitcher&&a(t[`gkitBlogImgMaxWidth${o}`])},{selector:`.${p} .gutenkit-blog-posts .gutenkit-blog-post-container .gutenkit-blog-post .gutenkit-blog-post-thumbnail :is(.gutenkit-blog-post-thumbnail-link, .gutenkit-blog-post-thumbnail-link img)`,width:"grid"!==t?.layout&&!0===t?.useHeightWidthSwitcher&&a(t[`gkitBlogImgWidth${o}`]),height:"grid"!==t?.layout&&!0===t?.useHeightWidthSwitcher&&a(t[`gkitBlogImgHeight${o}`])},{selector:`.${p} .gutenkit-blog-posts .gutenkit-blog-post-container .gutenkit-blog-post .gutenkit-blog-post-thumbnail .gutenkit-blog-post-thumbnail-link`,...s(t[`featuredImageBorderRadius${o}`],"border-radius"),width:"grid-thumb"===t.layout&&a(t[`gkitBlogPostsFeatureImgWidth${o}`])},{selector:`.${p} .gutenkit-blog-posts .gutenkit-blog-post-container .gutenkit-blog-post .gutenkit-blog-post-content .post-meta-list > span,\n\t\t\t\t.${p} .gutenkit-blog-posts .gutenkit-blog-post-container .gutenkit-blog-post .gutenkit-blog-post-content .post-meta-list > span > a,\n\t\t\t\t.${p} .gutenkit-blog-posts .gutenkit-blog-post-container .gutenkit-blog-post .gutenkit-blog-post-content .post-meta-list > span > span,\n\t\t\t\t.${p} .gutenkit-blog-posts .gutenkit-blog-post-container .gutenkit-blog-post .gutenkit-blog-post-content .post-meta-list > span > span > a `,...l(t.metaTypography,o)},{selector:`.${p} .gutenkit-blog-posts .gutenkit-blog-post-container .gutenkit-blog-post .gutenkit-blog-post-content .post-meta-list`,"justify-content":t[`metaAlignment${o}`],...s(t[`metaContainerMargin${o}`],"margin")},{selector:`.${p} .gutenkit-blog-posts.gutenkit-blog-posts-layout-list .gutenkit-blog-post-container .gutenkit-blog-post`,gap:a(t[`thumbContentSpaceBetween${o}`])},{selector:`.${p} .gutenkit-blog-posts .gutenkit-blog-post-container .gutenkit-blog-post .gutenkit-blog-post-content .post-meta-list > span`,...s(t[`metaItemMargin${o}`],"margin")},{selector:`.${p} .gutenkit-blog-posts .gutenkit-blog-post-container .gutenkit-blog-post .gutenkit-blog-post-content .gutenkit-blog-post-title`,"text-align":t[`titleAlignment${o}`],...s(t[`titleContainerMargin${o}`],"margin")},{selector:`.${p} .gutenkit-blog-posts .gutenkit-blog-post-container .gutenkit-blog-post .gutenkit-blog-post-content .gutenkit-blog-post-description`,...l(t.contentTypography,o),"text-align":t[`contentAlignment${o}`],...s(t[`contentContainerMargin${o}`],"margin")},{selector:`.${p} .gutenkit-blog-posts .gutenkit-blog-post-container .gutenkit-blog-post .gutenkit-blog-post-content .gutenkit-blog-post-title .gutenkit-blog-post-title-link`,...l(t.titleTypography,o)},{selector:`.${p} .gutenkit-blog-posts .gutenkit-blog-post-container .gutenkit-blog-post-content .post-meta-list .meta-author .meta-author-image`,...s(t[`authorImageBorderRadius${o}`],"border-radius")},{selector:`.${p} .gutenkit-blog-posts .gutenkit-blog-post-container .gutenkit-blog-post-content .gutenkit-blog-post-btn-wraper`,"justify-content":t[`gkitBlogPostsBtnAlign${o}`]},{selector:`.${p} .gutenkit-blog-posts .gutenkit-blog-post-container .gutenkit-blog-post-content .gutenkit-blog-post-btn-wraper .gutenkit-blog-post-btn`,...s(t[`gkitBlogPostsBtnPadding${o}`],"padding"),...s(t[`gkitBlogPostsBtnMargin${o}`],"margin"),...l(t.gkitBlogPostsBtnTypography,o),...s(t[`gkitBlogPostsBtnBorderRadius${o}`],"border-radius")},{selector:`.${p} .gutenkit-blog-posts.gutenkit-blog-posts-layout-grid, .${p} .gutenkit-blog-posts.gutenkit-blog-posts-layout-grid-thumb`,"grid-template-columns":`repeat(${t[`postsPerRow${o}`]}, minmax(0, 1fr))`,gap:a(t[`postsGridSpaceBetween${o}`])},{selector:`.${p} .gutenkit-blog-posts .gutenkit-blog-post-container .gutenkit-blog-post-thumbnail .gutenkit-blog-post-floating-date.gutenkit-blog-post-floating-date-style1`,left:a(t[`gkitBlogPostsFloatingDateLeftPosition${o}`]),top:a(t[`gkitBlogPostsFloatingDateTopPosition${o}`])},{selector:`.${p} .gutenkit-blog-posts.gutenkit-blog-posts-layout-grid-thumb .gutenkit-blog-post .gutenkit-blog-post-thumbnail .gutenkit-blog-post-floating-date.gutenkit-blog-post-floating-date-style2`,bottom:a(t[`gkitBlogPostsFloatingDateBottomPosition${o}`]),left:a(t[`gkitBlogPostsFloatingDateStyle2LeftPosition${o}`])},{selector:`.${p} .gutenkit-blog-posts .gutenkit-blog-post-container .gutenkit-blog-post-thumbnail .gutenkit-blog-post-floating-date.gutenkit-blog-post-floating-date-style1 .gutenkit-blog-post-floating-date-wrapper`,height:a(t[`gkitBlogPostsFloatingDateHeight${o}`]),width:a(t[`gkitBlogPostsFloatingDateWidth${o}`]),...s(t[`gkitBlogPostsFloatingDateBorderRadius${o}`],"border-radius")},{selector:`.${p} .gutenkit-blog-posts .gutenkit-blog-post-container .gutenkit-blog-post-thumbnail .gutenkit-blog-post-floating-date.gutenkit-blog-post-floating-date-style2 .gutenkit-blog-post-floating-date-wrapper`,...s(t[`gkitBlogPostsFloatingDatePadding${o}`],"padding")},{selector:`.${p} .gutenkit-blog-posts.gutenkit-blog-posts-layout-grid-thumb .gutenkit-blog-post .gutenkit-blog-post-thumbnail .gutenkit-blog-post-floating-date .gutenkit-blog-post-floating-date-wrapper`,background:n(t.gkitBlogPostsFloatingDateBgColorGroup,o).background,"background-size":n(t.gkitBlogPostsFloatingDateBgColorGroup,o).size},{selector:`.${p} .gutenkit-blog-posts.gutenkit-blog-posts-layout-grid-thumb .gutenkit-blog-post .gutenkit-blog-post-thumbnail .gutenkit-blog-post-floating-date .gutenkit-blog-post-floating-date-wrapper .gutenkit-blog-post-floating-date-text`,...l(t.gkitBlogPostsFloatingDateTypographyGroup,o)},{selector:`.${p} .gutenkit-blog-posts.gutenkit-blog-posts-layout-grid-thumb .gutenkit-blog-post .gutenkit-blog-post-thumbnail .gutenkit-blog-post-floating-date .gutenkit-blog-post-floating-date-wrapper .gutenkit-blog-post-floating-date-month`,...l(t.gkitBlogPostsFloatingDateMonthTypographyGroup,o)},{selector:`.${p} .gutenkit-blog-posts.gutenkit-blog-posts-layout-grid-thumb .gutenkit-blog-post .gutenkit-blog-post-thumbnail .gutenkit-blog-post-floating-date.gutenkit-blog-post-floating-date-style2 .gutenkit-blog-post-floating-date-wrapper`,...s(t[`gkitBlogPostsFloatingDatePadding${o}`],"padding")},{selector:`.${p}.wp-block-gutenkit-blog-posts .gutenkit-blog-posts.gutenkit-blog-posts-layout-grid-thumb .gutenkit-blog-post .gutenkit-blog-post-thumbnail .gutenkit-blog-post-floating-category`,top:a(t[`gkitBlogPostsFloatingCategoryTopPosition${o}`]),left:a(t[`gkitBlogPostsFloatingCategoryLeftPosition${o}`])},{selector:`.${p}.wp-block-gutenkit-blog-posts .gutenkit-blog-posts.gutenkit-blog-posts-layout-grid-thumb .gutenkit-blog-post .gutenkit-blog-post-thumbnail .gutenkit-blog-post-floating-category .gutenkit-blog-post-floating-category-wrapper`,gap:a(t[`gkitBlogPostsFloatingCategoryMarginRight${o}`])},{selector:`.${p}.wp-block-gutenkit-blog-posts .gutenkit-blog-posts.gutenkit-blog-posts-layout-grid-thumb .gutenkit-blog-post .gutenkit-blog-post-thumbnail .gutenkit-blog-post-floating-category .gutenkit-blog-post-floating-category-wrapper a`,...l(t.gkitBlogPostsFloatingCategoryTypography,o),...s(t[`gkitBlogPostsFloatingCategoryPadding${o}`],"padding"),...s(t[`gkitBlogPostsFloatingCategoryBorderRadius${o}`],"border-radius")}]],o)})(t,f)),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(r,{blocksCSS:t?.blocksCSS}),i&&(0,u.jsx)(p,{children:(0,u.jsx)(d,{attributes:t,setAttributes:o,device:I,advancedControl:n})}),(0,u.jsx)("div",{...N,children:(0,u.jsx)("div",{className:k()("gutenkit-blog-posts",{[`gutenkit-blog-posts-layout-${t?.layout}`]:t?.layout}),children:C.map((o=>(0,u.jsx)("div",{className:"gutenkit-blog-post-container",children:(0,u.jsx)(c,{post:o,attributes:t})},o.id)))})})]})},icon:{src:m},save:function(){return null}})},790:t=>{"use strict";t.exports=window.ReactJSXRuntime},1455:t=>{"use strict";t.exports=window.wp.apiFetch},6427:t=>{"use strict";t.exports=window.wp.components},6087:t=>{"use strict";t.exports=window.wp.element},7723:t=>{"use strict";t.exports=window.wp.i18n},5573:t=>{"use strict";t.exports=window.wp.primitives},6942:(t,o)=>{var e;!function(){"use strict";var n={}.hasOwnProperty;function g(){for(var t="",o=0;o<arguments.length;o++){var e=arguments[o];e&&(t=i(t,s(e)))}return t}function s(t){if("string"==typeof t||"number"==typeof t)return t;if("object"!=typeof t)return"";if(Array.isArray(t))return g.apply(null,t);if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]"))return t.toString();var o="";for(var e in t)n.call(t,e)&&t[e]&&(o=i(o,e));return o}function i(t,o){return o?t?t+" "+o:t+o:t}t.exports?(g.default=g,t.exports=g):void 0===(e=function(){return g}.apply(o,[]))||(t.exports=e)}()}},g={};function s(t){var o=g[t];if(void 0!==o)return o.exports;var e=g[t]={exports:{}};return n[t](e,e.exports,s),e.exports}s.m=n,t=[],s.O=(o,e,n,g)=>{if(!e){var i=1/0;for(u=0;u<t.length;u++){e=t[u][0],n=t[u][1],g=t[u][2];for(var l=!0,a=0;a<e.length;a++)(!1&g||i>=g)&&Object.keys(s.O).every((t=>s.O[t](e[a])))?e.splice(a--,1):(l=!1,g<i&&(i=g));if(l){t.splice(u--,1);var r=n();void 0!==r&&(o=r)}}return o}g=g||0;for(var u=t.length;u>0&&t[u-1][2]>g;u--)t[u]=t[u-1];t[u]=[e,n,g]},s.n=t=>{var o=t&&t.__esModule?()=>t.default:()=>t;return s.d(o,{a:o}),o},s.d=(t,o)=>{for(var e in o)s.o(o,e)&&!s.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:o[e]})},s.f={},s.e=t=>Promise.all(Object.keys(s.f).reduce(((o,e)=>(s.f[e](t,o),o)),[])),s.u=t=>t+".js",s.miniCssF=t=>{},s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),s.o=(t,o)=>Object.prototype.hasOwnProperty.call(t,o),o={},e="gutenkit-blocks-addon:",s.l=(t,n,g,i)=>{if(o[t])o[t].push(n);else{var l,a;if(void 0!==g)for(var r=document.getElementsByTagName("script"),u=0;u<r.length;u++){var p=r[u];if(p.getAttribute("src")==t||p.getAttribute("data-webpack")==e+g){l=p;break}}l||(a=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.setAttribute("data-webpack",e+g),l.src=t),o[t]=[n];var c=(e,n)=>{l.onerror=l.onload=null,clearTimeout(b);var g=o[t];if(delete o[t],l.parentNode&&l.parentNode.removeChild(l),g&&g.forEach((t=>t(n))),e)return e(n)},b=setTimeout(c.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=c.bind(null,l.onerror),l.onload=c.bind(null,l.onload),a&&document.head.appendChild(l)}},s.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{var t;s.g.importScripts&&(t=s.g.location+"");var o=s.g.document;if(!t&&o&&(o.currentScript&&"SCRIPT"===o.currentScript.tagName.toUpperCase()&&(t=o.currentScript.src),!t)){var e=o.getElementsByTagName("script");if(e.length)for(var n=e.length-1;n>-1&&(!t||!/^http(s?):/.test(t));)t=e[n--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),s.p=t+"../../"})(),(()=>{var t={9315:0,3083:0};s.f.j=(o,e)=>{var n=s.o(t,o)?t[o]:void 0;if(0!==n)if(n)e.push(n[2]);else if(3083!=o){var g=new Promise(((e,g)=>n=t[o]=[e,g]));e.push(n[2]=g);var i=s.p+s.u(o),l=new Error;s.l(i,(e=>{if(s.o(t,o)&&(0!==(n=t[o])&&(t[o]=void 0),n)){var g=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;l.message="Loading chunk "+o+" failed.\n("+g+": "+i+")",l.name="ChunkLoadError",l.type=g,l.request=i,n[1](l)}}),"chunk-"+o,o)}else t[o]=0},s.O.j=o=>0===t[o];var o=(o,e)=>{var n,g,i=e[0],l=e[1],a=e[2],r=0;if(i.some((o=>0!==t[o]))){for(n in l)s.o(l,n)&&(s.m[n]=l[n]);if(a)var u=a(s)}for(o&&o(e);r<i.length;r++)g=i[r],s.o(t,g)&&t[g]&&t[g][0](),t[g]=0;return s.O(u)},e=self.webpackChunkgutenkit_blocks_addon=self.webpackChunkgutenkit_blocks_addon||[];e.forEach(o.bind(null,0)),e.push=o.bind(null,e.push.bind(e))})();var i=s.O(void 0,[3083],(()=>s(1451)));i=s.O(i)})();