(this["webpackJsonpaem-guides-wknd-pwa"]=this["webpackJsonpaem-guides-wknd-pwa"]||[]).push([[0],{34:function(e,t,n){},35:function(e,t,n){},59:function(e,t,n){"use strict";n.r(t);var i=n(2),r=n.n(i),a=n(25),l=n.n(a),o=(n(34),n(8)),c=(n(35),"https://publish-p25404-e45662-cmstg.adobeaemcloud.com/"),s={primary:"#202020",accent:"#FFEB00",background:"#202020",surface:"#202020",error:"#B00020",text:"#fff",onSurface:"#000000",disabled:"rgb(255, 69, 58)",placeholder:"rgb(255, 69, 58)",backdrop:"rgb(255, 69, 58)",notification:"rgb(255, 69, 58)"},d=n(11),u=n(3),j=n(28),b=n(29);function p(e){return!!e&&(e.startsWith("http")?e:"".concat(c).concat(e))}var v=n(1);function h(e){var t=e.title,n=e.imgSrc,i=e.subtitle,r=e.height,a=e.link,l=void 0===a?"/":a,c=n?s.background:s.text,d={container:{width:"100vw",height:r||"auto",textDecoration:"none",display:"flex",flexDirection:"column"},link:{flex:1,textDecoration:"none",padding:"20px"},title:{fontSize:"30px",color:c,fontWeight:"bold",textTransform:"uppercase",margin:0},subtitle:{fontSize:"16px",color:c,fontWeight:"bold",margin:0},imgBG:{flex:1,background:n?"url(".concat(p(n),")"):"transparent",padding:l?0:"20px",display:"flex",backgroundSize:"cover"},titleSkeleton:{height:"2.5rem",width:"85%",boxShadow:"0 0 5px rgb(0 0 0 / 50%)"}};r||(d.container.flex=1);var u=function(){return Object(v.jsxs)(v.Fragment,{children:[!t&&Object(v.jsx)("div",{style:d.titleSkeleton,className:"loading-skeleton"}),t&&Object(v.jsx)("h2",{style:d.title,children:t}),i&&Object(v.jsx)("p",{style:d.subtitle,children:i})]})};return Object(v.jsx)("div",{style:d.container,className:n?"":"loading-skeleton",children:Object(v.jsx)("div",{style:d.imgBG,children:l?Object(v.jsx)(o.b,{to:l,style:d.link,children:u()}):u()})})}var x=n(17),m=n(27);function g(e,t){var n=Object(i.useState)(null),r=Object(x.a)(n,2),a=r[0],l=r[1],o=Object(i.useState)(null),s=Object(x.a)(o,2),d=s[0],u=s[1];return Object(i.useEffect)((function(){var n=new m.AEMHeadless({serviceURL:c,endpoint:"graphql/execute.json"});(e?n.runQuery.bind(n):n.runPersistedQuery.bind(n))(e||t).then((function(e){var t=e.data,n=e.errors;n&&u(function(e){return e.map((function(e){return e.message})).join(",")}(n)),t&&l(t)})).catch((function(e){u(e)}))}),[e,t]),{data:a,errorMessage:d}}function f(e){var t=e.error;return Object(v.jsxs)("div",{children:[Object(v.jsx)("h1",{children:"Error"}),Object(v.jsx)("span",{children:t.message})]})}function O(e){return e?e.adventureList.items.map((function(e,t){return Object(v.jsx)(h,{link:"/detail?_path=".concat(e._path),title:"Featured Adventure",subtitle:e.adventureTitle,imgSrc:e.adventurePrimaryImage._path||!1},t)})):Object(v.jsx)(h,{})}function y(){var e,t,n,i,r=!1,a=!1,l=!1,o=g(null,"wknd/native-app-home"),c=o.data,s=o.errorMessage;return s?Object(v.jsx)(f,{error:s}):((null===c||void 0===c||null===(e=c.appByPath)||void 0===e?void 0:e.item)&&(r=c.appByPath.item),(null===(t=r)||void 0===t?void 0:t.appTitle)&&(a=r.appTitle),(null===(n=r)||void 0===n||null===(i=n.appHeroImage)||void 0===i?void 0:i._path)&&(l=r.appHeroImage._path),Object(v.jsxs)("div",{style:k.container,children:[Object(v.jsx)(h,{title:a,imgSrc:l,link:"/adventures"}),O(c)]}))}var k={container:{flex:1,display:"flex",flexDirection:"column"}};function S(e){var t=e.imgSrc,n=e.title;return Object(v.jsx)("div",{style:w.imageContainer,className:"loading-skeleton",children:t&&Object(v.jsx)("img",{src:p(t),style:w.image,alt:n})})}var w={imageContainer:{position:"relative",paddingTop:"55%",overflow:"hidden"},image:{width:"100%",maxWidth:"100%",position:"absolute",top:0,right:0,bottom:0,left:0,objectFit:"cover"}};function T(e){var t,n=e._path,i=e.title,r=e.description,a=e.imgSrc;return Object(v.jsx)("div",{style:_.container,children:Object(v.jsxs)(o.b,{to:"/detail?_path=".concat(n),style:_.link,children:[Object(v.jsx)(S,{imgSrc:a,title:i}),Object(v.jsx)("h3",{style:_.title,children:i}),r&&Object(v.jsx)("div",{dangerouslySetInnerHTML:(t=r,{__html:t})})]})})}var _={container:{flex:1},link:{textDecoration:"none",color:s.text},title:{textTransform:"uppercase",marginTop:".5rem",fontFamily:"Source Sans Pro",fontWeight:"bold",fontSize:".9rem"},description:{margin:0}};function D(e){return!!e&&Object(v.jsx)("div",{style:B.list,children:e.map((function(e,t){var n,i,r=e._path,a=(null===e||void 0===e?void 0:e.adventureTitle)||!1,l=(null===e||void 0===e||null===(n=e.adventureDescription)||void 0===n?void 0:n.html)||!1,o=(null===e||void 0===e||null===(i=e.adventurePrimaryImage)||void 0===i?void 0:i._path)||!1;return Object(v.jsx)(T,{_path:r,title:a,description:l,imgSrc:o},t)}))})}function P(){var e,t=!1,n=g(null,"wknd/native-app-adventures"),i=n.data,r=n.errorMessage;return r?Object(v.jsx)(f,{error:r}):((null===i||void 0===i||null===(e=i.adventureList)||void 0===e?void 0:e.items)&&(t=i.adventureList.items),Object(v.jsxs)("div",{style:B.container,children:[Object(v.jsx)(h,{imgSrc:"/content/dam/wknd/en/adventures/cycling-southern-utah/AdobeStock_221043703.jpg",title:"WKND Adventures",height:"100px"}),Object(v.jsx)("h2",{style:B.title,children:"Our Adventures"}),D(t)]}))}var B={container:{flex:1,display:"flex",flexDirection:"column",marginBottom:"6rem"},title:{padding:"1rem 1rem 0",margin:0,textTransform:"uppercase"},list:{padding:"1rem",display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem"}};function C(){var e,t,n,i,r,a,l,o,c=new URLSearchParams(Object(u.f)().search).get("_path"),s=g(null,"".concat("wknd/native-app-adventure%3bapath=").concat(c)),d=s.data,j=s.errorMessage;if(j)return Object(v.jsx)(f,{error:j});var b,p=(null===d||void 0===d||null===(e=d.adventureByPath)||void 0===e||null===(t=e.item)||void 0===t?void 0:t.adventureTitle)||!1,h=(null===d||void 0===d||null===(n=d.adventureByPath)||void 0===n||null===(i=n.item)||void 0===i||null===(r=i.adventureDescription)||void 0===r?void 0:r.html)||!1,x=(null===d||void 0===d||null===(a=d.adventureByPath)||void 0===a||null===(l=a.item)||void 0===l||null===(o=l.adventurePrimaryImage)||void 0===o?void 0:o._path)||!1;return Object(v.jsxs)("div",{style:F.container,children:[!p&&Object(v.jsx)("div",{className:"loading-skeleton",style:F.titleSkeleton}),p&&Object(v.jsx)("h1",{style:F.title,children:p}),Object(v.jsx)(S,{imgSrc:x,alt:p}),h&&Object(v.jsx)("div",{style:F.description,dangerouslySetInnerHTML:(b=h,{__html:b})})]})}var F={container:{flex:1,marginBottom:"6rem"},title:{padding:"1rem",fontSize:"1.5rem",textTransform:"uppercase",maxWidth:"100%",margin:0},description:{padding:"1rem"},titleSkeleton:{height:"2.5rem",width:"85%",margin:"1rem"}};function I(){var e=Object(u.f)();console.log("location",e);var t="/"===e.pathname,n="/adventures"===e.pathname;return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("div",{style:L.tabsContainer,children:Object(v.jsxs)("nav",{style:L.tabs,children:[Object(v.jsxs)(o.b,{to:"/",style:Object(d.a)(Object(d.a)({},L.tab),{},{color:t?s.accent:s.text}),children:[Object(v.jsx)(j.a,{size:"2rem"}),Object(v.jsx)("span",{style:L.tabText,children:"Home"})]}),Object(v.jsxs)(o.b,{to:"/adventures",style:Object(d.a)(Object(d.a)({},L.tab),{},{color:n?s.accent:s.text}),children:[Object(v.jsx)(b.a,{size:"2rem"}),Object(v.jsx)("span",{style:L.tabText,children:"Adventures"})]})]})}),Object(v.jsxs)(u.c,{children:[Object(v.jsx)(u.a,{exact:!0,path:"/adventures",children:Object(v.jsx)(P,{})}),Object(v.jsx)(u.a,{path:"/detail",children:Object(v.jsx)(C,{})}),Object(v.jsx)(u.a,{path:"/",children:Object(v.jsx)(y,{})})]})]})}var L={tabsContainer:{position:"fixed",bottom:0,right:0,left:0,padding:"0 20px",zIndex:10,backgroundColor:s.background,height:"6rem"},tabs:{display:"flex",flexDirection:"row",listStyle:"none",margin:0,padding:0,alignItems:"center",justifyContent:"space-between"},tab:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",color:s.text,flex:1,padding:"20px",textDecoration:"none"},tabText:{fontFamily:"Source Sans Pro"}};function z(){return Object(v.jsx)("div",{style:M.container,children:Object(v.jsx)(o.a,{children:Object(v.jsx)(I,{})})})}var M={container:{display:"flex",flex:1,minHeight:"100vh",width:"100vw",position:"relative",flexDirection:"column",backgroundColor:s.background,paddingTop:"10px",color:s.text}},H=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,60)).then((function(t){var n=t.getCLS,i=t.getFID,r=t.getFCP,a=t.getLCP,l=t.getTTFB;n(e),i(e),r(e),a(e),l(e)}))};l.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(z,{})}),document.getElementById("root")),H()}},[[59,1,2]]]);
//# sourceMappingURL=main.c22fb6a5.chunk.js.map