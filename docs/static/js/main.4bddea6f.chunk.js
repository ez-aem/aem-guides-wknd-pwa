(this["webpackJsonpaem-guides-wknd-pwa"]=this["webpackJsonpaem-guides-wknd-pwa"]||[]).push([[0],{63:function(e,t,a){},73:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),i=a(37),o=a.n(i),c=a(27),s=(a(63),a(6)),l=a(4),d={primary:"#202020",accent:"#FFEB00",background:"#202020",surface:"#202020",error:"#B00020",text:"#fff",onSurface:"#000000",disabled:"rgb(255, 69, 58)",placeholder:"rgb(255, 69, 58)",backdrop:"rgb(255, 69, 58)",notification:"rgb(255, 69, 58)"},h=a(3),m=a(7),p="wknd-app/components/title",u={emptyLabel:"Title",isEmpty:m.TitleV2IsEmptyFn,resourceType:p};Object(h.MapTo)(p)(m.TitleV2,u);var j=Object(h.withMappable)(m.TitleV2,u),b="wknd-app/components/text",O={emptyLabel:"Text",isEmpty:m.TextV2IsEmptyFn,resourceType:b};Object(h.MapTo)(b)(m.TextV2,O);Object(h.withMappable)(m.TextV2,O);var g="wknd-app/components/teaser",v={emptyLabel:"Teaser",isEmpty:m.TeaserV1IsEmptyFn,resourceType:g};Object(h.MapTo)(g)(m.TeaserV1,v);Object(h.withMappable)(m.TeaserV1,v);var T="wknd-app/components/image",_={emptyLabel:"Image",isEmpty:m.ImageV2IsEmptyFn,resourceType:T};Object(h.MapTo)(T)(m.ImageV2,_);var x=Object(h.withMappable)(m.ImageV2,_),P=(a(73),"wcm/foundation/components/responsivegrid"),y={emptyLabel:"Layout Container",isEmpty:function(e){return null==e.cqItemsOrder||0===e.cqItemsOrder.length},resourceType:P};Object(h.MapTo)(P)(h.ResponsiveGrid,y);Object(h.withMappable)(h.ResponsiveGrid,y);var A=a(30),E=A.CarouselV1,f="wknd-app/components/carousel",R={emptyLabel:"Carousel",isEmpty:A.CarouselV1IsEmptyFn,resourceType:f};Object(h.MapTo)(f)(E,R);Object(h.withMappable)(E,R);var C=a(1);function S(e){var t=e.error;return Object(C.jsxs)("div",{className:"content",children:[Object(C.jsx)("h1",{children:"Error"}),Object(C.jsx)("span",{children:t.message})]})}var I=a(11),H=a(75).AEMHeadless,N=Object({NODE_ENV:"production",PUBLIC_URL:"/aem-guides-wknd-pwa",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_AUTHORIZATION:"admin:admin",REACT_APP_DEV_TOKEN:"abc123",REACT_APP_GRAPHQL_ENDPOINT:"graphql/execute.json",REACT_APP_HOST_URI:"http://localhost:4502",REACT_APP_PUBLIC_URI:"http://localhost:3000",REACT_APP_SERVICE_TOKEN:"auth/service-token.json"}),w=N.REACT_APP_PUBLIC_URI,L=N.REACT_APP_GRAPHQL_ENDPOINT,k=N.REACT_APP_AUTHORIZATION;var D=function(e,t){var a=Object(n.useState)(null),r=Object(I.a)(a,2),i=r[0],o=r[1],c=Object(n.useState)(null),s=Object(I.a)(c,2),l=s[0],d=s[1];return Object(n.useEffect)((function(){var a=new H({serviceURL:w,endpoint:L,auth:k});(e?a.runQuery.bind(a):a.runPersistedQuery.bind(a))(e||t).then((function(e){var t=e.data,a=e.errors;a&&d(function(e){return e.map((function(e){return e.message})).join(",")}(a)),t&&o(t)})).catch((function(e){d(e)}))}),[e,t]),{data:i,errorMessage:l}};a(84);function U(){var e=Object(n.useState)(!1),t=Object(I.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)(K),o=Object(I.a)(i,2),c=o[0],l=(o[1],Object(n.useState)(!1)),d=Object(I.a)(l,2),h=d[0],m=d[1],p=Object(n.useState)([]),u=Object(I.a)(p,2),j=u[0],b=u[1],O=D(c,"wknd/adventures-all"),g=O.data,v=O.errorMessage;if(v)return Object(C.jsx)(S,{error:v});if(!g)return Object(C.jsx)("div",{children:"Loading..."});!h&&g.adventureList.items&&m(V(g.adventureList.items));return Object(C.jsxs)("div",{children:[Object(C.jsx)("div",{className:"search-by-category-container",children:Object(C.jsx)("ul",{className:"search-by-category",children:h&&Object.keys(h).map((function(e,t){var n=h[e],i=a===n.adventureActivity?"selected":"";return Object(C.jsxs)("li",{className:"search-by-category-item",onClick:function(){return e=n.adventureActivity,r(e),void b(F(g.adventureList.items,e));var e},children:[Object(C.jsx)("img",{className:"search-by-category-item-image ".concat(i),src:n.adventurePrimaryImage._path,alt:n.adventureTitle}),Object(C.jsx)("p",{children:n.adventureActivity||"Miscellaneous"})]})}))})}),Object(C.jsx)("div",{className:"search-by-category-container",children:Object(C.jsx)("ul",{className:"search-by-category",children:j&&j.map((function(e){return Object(C.jsx)("li",{className:"search-by-category-item",children:Object(C.jsxs)(s.Link,{to:"/detail?_path=".concat(e._path),children:[Object(C.jsx)("img",{className:"search-by-category-item-image",src:e.adventurePrimaryImage._path,alt:e.adventureTitle}),Object(C.jsx)("p",{children:e.adventureTitle})]})})}))})})]})}var V=function(e){var t={};return e.forEach((function(e){if(e.adventureActivity){var a=function(e){return e.toLowerCase().replace(" ","-")}(e.adventureActivity);t.hasOwnProperty(a)||(t[a]=e)}else t.miscellaneous=e})),t},F=function(e,t){return e.filter((function(e){return e.adventureActivity===t}))},K="\n  {\n    adventureList {\n      items {\n        _path\n        adventureActivity\n        adventureTitle\n        adventurePrimaryImage {\n          ...on ImageRef {\n            _path\n            mimeType\n            width\n            height\n          }\n        }\n      }\n    }\n  }",B=Object({NODE_ENV:"production",PUBLIC_URL:"/aem-guides-wknd-pwa",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_AUTHORIZATION:"admin:admin",REACT_APP_DEV_TOKEN:"abc123",REACT_APP_GRAPHQL_ENDPOINT:"graphql/execute.json",REACT_APP_HOST_URI:"http://localhost:4502",REACT_APP_PUBLIC_URI:"http://localhost:3000",REACT_APP_SERVICE_TOKEN:"auth/service-token.json"}).REACT_APP_CONTENT_PATH,M="".concat(B,"/home/adventures");function W(){return Object(C.jsxs)("div",{className:"content",style:z.container,children:[Object(C.jsxs)("div",{style:z.searchBox,children:[Object(C.jsx)("div",{style:z.homepageHeroImage,className:"homepage-hero-image-wrapper",children:Object(C.jsx)(x,{styles:z.homepageHeroImage,pagePath:M,itemPath:"root/image"},"search-image")}),Object(C.jsxs)("div",{style:z.homepageHeroTitleSearch,children:[Object(C.jsx)("div",{style:z.homepageHeroTitle,children:Object(C.jsx)(j,{styles:z.homepageHeroTitle,pagePath:M,itemPath:"root/title"},"search-title")}),Object(C.jsx)("input",{style:z.homepageHeroSearch,placeholder:"Find Your Next Adventure"})]})]}),Object(C.jsxs)("div",{style:z.searchByCategory,children:[Object(C.jsx)(j,{styles:z.homepageHeroTitle,pagePath:M,itemPath:"root/title-categories"},"search-title-categories"),Object(C.jsx)(U,{})]})]})}var z={container:{},searchBox:{height:"10rem",minHeight:"10rem",position:"relative",overflow:"hidden"},searchResults:{padding:"1rem"},homepageHero:{flex:1,position:"relative"},homepageHeroTitleSearch:{position:"absolute",top:".5rem",left:0,right:0,marginTop:".5rem",textAlign:"center",zIndex:10},homepageHeroTitle:{color:d.background},homepageHeroImage:{position:"absolute",top:0,right:0,bottom:0,left:0},homepageHeroSearch:{gridArea:"overlay",alignSelf:"flex-start",justifySelf:"center",padding:".5rem 1rem",marginTop:".25rem",borderRadius:"5rem",border:"none",boxShadow:"0 0 5px rgba(0,0,0,.1)"},searchByCategory:{padding:"1rem"}};function G(e){var t,a=e.imgSrc,n=e.title;return Object(C.jsx)("div",{style:Q.imageContainer,className:"loading-skeleton",children:a&&Object(C.jsx)("img",{src:(t=a,!!t&&(t.startsWith("http")?t:"".concat("http://localhost:3000").concat(t))),style:Q.image,alt:n})})}var Q={imageContainer:{position:"relative",paddingTop:"55%",overflow:"hidden"},image:{width:"100%",maxWidth:"100%",position:"absolute",top:0,right:0,bottom:0,left:0,objectFit:"cover"}};function q(){var e,t,a,n,r,i,o,c,s=new URLSearchParams(Object(l.l)().search).get("_path"),d=D(function(e){return'{\n    adventureByPath (_path: "'.concat(e,'") {\n      item {\n        _path\n          adventureTitle\n          adventureActivity\n          adventureType\n          adventurePrice\n          adventureTripLength\n          adventureGroupSize\n          adventureDifficulty\n          adventurePrice\n          adventurePrimaryImage {\n            ... on ImageRef {\n              _path\n              mimeType\n              width\n              height\n            }\n          }\n          adventureDescription {\n            html\n            json\n          }\n          adventureItinerary {\n            html\n            json\n          }\n      }\n    }\n  }\n  ')}(s)),h=d.data,m=d.errorMessage;if(m)return Object(C.jsx)(S,{error:m});var p=(null===h||void 0===h||null===(e=h.adventureByPath)||void 0===e||null===(t=e.item)||void 0===t?void 0:t.adventureTitle)||!1,u=(null===h||void 0===h||null===(a=h.adventureByPath)||void 0===a||null===(n=a.item)||void 0===n||null===(r=n.adventureDescription)||void 0===r?void 0:r.json)||!1,j=(null===h||void 0===h||null===(i=h.adventureByPath)||void 0===i||null===(o=i.item)||void 0===o||null===(c=o.adventurePrimaryImage)||void 0===c?void 0:c._path)||!1;return Object(C.jsxs)("div",{className:"content detail-screen",style:Z.container,children:[!p&&Object(C.jsx)("div",{className:"loading-skeleton",style:Z.titleSkeleton}),p&&Object(C.jsx)("h1",{style:Z.title,children:p}),Object(C.jsx)(G,{imgSrc:j,alt:p}),Object(C.jsx)("div",{style:Z.description,children:u&&u.map((function(e,t){var a="header"===e.nodeType?"".concat(e.style):"p";return Object(C.jsx)(a,{children:e.content.map((function(e){return e.value}))},t)}))})]})}var Z={container:{flex:1},title:{padding:"1rem",fontSize:"1.5rem",textTransform:"uppercase",maxWidth:"100%",margin:0},description:{padding:"1rem"},titleSkeleton:{height:"2.5rem",width:"85%",margin:"1rem"}};var J=a(12),Y=(a(85),Object({NODE_ENV:"production",PUBLIC_URL:"/aem-guides-wknd-pwa",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_AUTHORIZATION:"admin:admin",REACT_APP_DEV_TOKEN:"abc123",REACT_APP_GRAPHQL_ENDPOINT:"graphql/execute.json",REACT_APP_HOST_URI:"http://localhost:4502",REACT_APP_PUBLIC_URI:"http://localhost:3000",REACT_APP_SERVICE_TOKEN:"auth/service-token.json"}).REACT_APP_CONTENT_PATH),X="".concat(Y,"/home");function $(){return Object(C.jsxs)("div",{className:"content",style:ee.container,children:[Object(C.jsxs)(s.Link,{to:"/adventures",style:ee.homepageHero,children:[Object(C.jsx)("div",{style:ee.homepageHeroImage,className:"homepage-hero-image-wrapper",children:Object(C.jsx)(x,{styles:ee.homepageHeroImage,pagePath:X,itemPath:"root/image"},"search-image")}),Object(C.jsxs)("div",{style:ee.homepageHeroTitleSearch,children:[Object(C.jsx)("div",{style:ee.homepageHeroTitle,children:Object(C.jsx)(j,{styles:ee.homepageHeroTitle,pagePath:X,itemPath:"root/title"},"search-title")}),Object(C.jsx)("input",{style:ee.homepageHeroSearch,placeholder:"Find Adventures Near You"})]})]}),Object(C.jsxs)(s.Link,{to:"/magazine",style:ee.homepageHero,children:[Object(C.jsx)("div",{style:ee.homepageHeroImage,className:"homepage-hero-image-wrapper",children:Object(C.jsx)(x,{styles:ee.homepageHeroImage,pagePath:X,itemPath:"root/image-featured-articles"},"featured-article-image")}),Object(C.jsx)("div",{style:ee.homepageHeroTitleSearch,children:Object(C.jsx)("div",{style:Object(J.a)(Object(J.a)({},ee.homepageHeroTitle),{},{textAlign:"left",paddingLeft:"1rem"}),children:Object(C.jsx)(j,{styles:ee.homepageHeroTitle,pagePath:X,itemPath:"root/title-featured-articles"},"featured-article-title")})})]})]})}var ee={container:{},homepageHero:{flex:1,position:"relative"},homepageHeroTitleSearch:{position:"absolute",top:".5rem",left:0,right:0,marginTop:".5rem",textAlign:"center",zIndex:10},homepageHeroTitle:{color:d.background},homepageHeroImage:{position:"absolute",top:0,right:0,bottom:0,left:0},homepageHeroSearch:{gridArea:"overlay",alignSelf:"flex-start",justifySelf:"center",padding:".5rem 1rem",marginTop:".25rem",borderRadius:"5rem",border:"none",boxShadow:"0 0 5px rgba(0,0,0,.1)"},adventureListContainer:{overflow:"hidden",flex:1},adventureList:{display:"flex",flexDirection:"row",overflowX:"auto"},carousel:{}};function te(e){var t,a=e._path,n=e.title,r=(e.description,e.imgSrc),i=e.descriptionJSON,o=!1;if(i){var c=i.filter((function(e){return"header"!==e.nodeType}));c.length>0&&(o=(t=(t=c[0].content[0].value).substr(0,65)).substr(0,Math.min(t.length,t.lastIndexOf(" ")))+"...")}return Object(C.jsx)("div",{style:ae.container,children:Object(C.jsxs)(s.Link,{to:"/detail?_path=".concat(a),style:ae.link,children:[Object(C.jsx)(G,{imgSrc:r,title:n}),Object(C.jsx)("h3",{style:ae.title,children:n}),o&&Object(C.jsx)("p",{style:ae.description,children:o})]})})}var ae={container:{flex:1},link:{textDecoration:"none",color:d.text},title:{textTransform:"uppercase",marginTop:".5rem"},description:{margin:0}};function ne(e){return!!e&&Object(C.jsx)("div",{style:ce.list,children:e.map((function(e,t){var a,n=e._path,r=(null===e||void 0===e?void 0:e.adventureTitle)||!1,i=(null===e||void 0===e||null===(a=e.adventurePrimaryImage)||void 0===a?void 0:a._path)||!1;return Object(C.jsx)("div",{style:ce.adventureCard,children:Object(C.jsx)(te,{_path:n,title:r,imgSrc:i})},t)}))})}var re=Object({NODE_ENV:"production",PUBLIC_URL:"/aem-guides-wknd-pwa",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_AUTHORIZATION:"admin:admin",REACT_APP_DEV_TOKEN:"abc123",REACT_APP_GRAPHQL_ENDPOINT:"graphql/execute.json",REACT_APP_HOST_URI:"http://localhost:4502",REACT_APP_PUBLIC_URI:"http://localhost:3000",REACT_APP_SERVICE_TOKEN:"auth/service-token.json"}).REACT_APP_CONTENT_PATH,ie="".concat(re,"/home/magazine");function oe(){var e,t=!1,a=Object(n.useState)(""),r=Object(I.a)(a,2),i=r[0],o=(r[1],D(i,"wknd/adventures-all")),c=o.data,s=o.errorMessage;return s?Object(C.jsx)(S,{error:s}):((null===c||void 0===c||null===(e=c.adventureList)||void 0===e?void 0:e.items)&&(t=c.adventureList.items),Object(C.jsxs)("div",{className:"content",style:ce.container,children:[Object(C.jsx)("div",{style:ce.pageTitle,children:Object(C.jsx)(j,{pagePath:ie,itemPath:"root/title"},"title")}),t&&ne(t)]}))}var ce={container:{},pageTitle:{padding:"1rem"},adventureCard:{padding:"1rem"}},se=(a(86),a(39)),le=a(40),de=a(41);function he(){var e=Object(l.l)(),t="/"===e.pathname,a="/adventures"===e.pathname,n="/magazine"===e.pathname;return Object(C.jsx)(C.Fragment,{children:Object(C.jsx)("div",{style:me.tabsContainer,children:Object(C.jsxs)("nav",{style:me.tabs,children:[Object(C.jsxs)(s.Link,{to:"/",style:Object(J.a)(Object(J.a)({},me.tab),{},{color:t?d.accent:d.text}),children:[Object(C.jsx)(se.a,{size:"2rem"}),Object(C.jsx)("span",{style:me.tabText,children:"Home"})]}),Object(C.jsxs)(s.Link,{to:"/adventures",style:Object(J.a)(Object(J.a)({},me.tab),{},{color:a?d.accent:d.text}),children:[Object(C.jsx)(le.a,{size:"2rem"}),Object(C.jsx)("span",{style:me.tabText,children:"Adventures"})]}),Object(C.jsxs)(s.Link,{to:"/magazine",style:Object(J.a)(Object(J.a)({},me.tab),{},{color:n?d.accent:d.text}),children:[Object(C.jsx)(de.a,{size:"2rem"}),Object(C.jsx)("span",{style:me.tabText,children:"Magazine"})]})]})})})}var me={tabsContainer:{zIndex:10,backgroundColor:d.background,height:"6rem"},tabs:{display:"flex",flexDirection:"row",listStyle:"none",margin:0,padding:0,alignItems:"center",justifyContent:"space-evenly",overflow:"hidden"},tab:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",color:d.text,flex:1,padding:"20px",textDecoration:"none",flexBasis:"25%"},tabText:{fontFamily:"Source Sans Pro"}};function pe(){return Object(C.jsx)("div",{style:ue.container,children:Object(C.jsxs)(s.HashRouter,{children:[Object(C.jsxs)(l.g,{children:[Object(C.jsx)(l.d,{exact:!0,path:"/adventures",children:Object(C.jsx)(W,{})}),Object(C.jsx)(l.d,{path:"/detail",children:Object(C.jsx)(q,{})}),Object(C.jsx)(l.d,{path:"/magazine",children:Object(C.jsx)(oe,{})}),Object(C.jsx)(l.d,{path:"/",children:Object(C.jsx)($,{})})]}),Object(C.jsx)(he,{})]})})}var ue={container:{display:"flex",flex:1,minHeight:"100vh",maxHeight:"100%",width:"100vw",maxWidth:"100%",position:"relative",flexDirection:"column",backgroundColor:d.background,paddingTop:"10px",color:d.text}},je=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,88)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,i=t.getLCP,o=t.getTTFB;a(e),n(e),r(e),i(e),o(e)}))},be=Object({NODE_ENV:"production",PUBLIC_URL:"/aem-guides-wknd-pwa",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_AUTHORIZATION:"admin:admin",REACT_APP_DEV_TOKEN:"abc123",REACT_APP_GRAPHQL_ENDPOINT:"graphql/execute.json",REACT_APP_HOST_URI:"http://localhost:4502",REACT_APP_PUBLIC_URI:"http://localhost:3000",REACT_APP_SERVICE_TOKEN:"auth/service-token.json"}).REACT_APP_CONTENT_PATH;c.ModelManager.initializeAsync(be),o.a.render(Object(C.jsx)(r.a.StrictMode,{children:Object(C.jsx)(pe,{})}),document.getElementById("root")),je()}},[[87,1,2]]]);
//# sourceMappingURL=main.4bddea6f.chunk.js.map