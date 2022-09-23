import{_ as w,r as a,o as d,a as j,w as o,c as v,b as k,d as s,e as t,t as b,F as x,f as I,g as $,h as V,n as D,i as F,j as O}from"./entry-bff167c0.mjs";const P={setup(m,{expose:c}){c();const r={colors:["indigo","warning","pink darken-2","red lighten-1","deep-purple accent-4"],slides:["First","Second","Third","Fourth","Fifth"]};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}},B={class:"d-flex fill-height justify-center align-center"},W={class:"text-h2"};function q(m,c,n,e,r,h){const _=a("v-sheet"),p=a("v-carousel-item"),u=a("v-carousel");return d(),j(u,{cycle:"",height:"400","hide-delimiter-background":"","show-arrows":!1,"delimiter-icon":"mdi-color-helper",color:"white"},{default:o(()=>[(d(),v(x,null,k(e.slides,(l,f)=>s(p,{key:f,"reverse-transition":"fade-transition",transition:"fade-transition"},{default:o(()=>[s(_,{color:e.colors[f],height:"100%"},{default:o(()=>[t("div",B,[t("div",W,b(l)+" Slide ",1)])]),_:2},1032,["color"])]),_:2},1024)),64))]),_:1})}var A=w(P,[["render",q]]);const N={props:{data:Object},setup(m,{expose:c}){c();const n=m,{titleTxt:e,subtitleTxt:r}=I(n.data),h={props:n,titleTxt:e,subtitleTxt:r};return Object.defineProperty(h,"__isScriptSetup",{enumerable:!1,value:!0}),h}},M={class:"hot-articles"},z={class:"title-wrapper"},E={class:"title"},L={class:"title-txt"},R={class:"subtitle-txt"},U={href:"",class:"see-more-link"},G=t("p",null,"\u770B\u66F4\u591A",-1),H=$("mdi-chevron-right");function J(m,c,n,e,r,h){const _=a("v-icon");return d(),v("div",M,[t("div",z,[t("div",E,[t("h1",L,b(e.titleTxt),1),t("h2",R,b(e.subtitleTxt),1)]),t("a",U,[G,s(_,null,{default:o(()=>[H]),_:1})])])])}var K=w(N,[["render",J]]);const Q={emits:["change-wrapper"],setup(m,{expose:c,emit:n}){c();const e=[{description:"\u5FEB\u4F86\u5927\u8CB7\u5BB6\uFF0C\u597D\u79AE\u9001\u4E0D\u5B8C",src:"https://picsum.photos/600/400?random=1"},{description:"\u53F0\u4E2D\u9A5A\u50B3\u6709\u7D93\u8239\u7684\u9A5A\u50B3\uFF0C\u5687\u6B7B\u5BF6\u5BF6",src:"https://picsum.photos/600/400?random=2"},{description:"\u5BF6\u5BF6\u4E0D\u54ED\uFF0C\u54ED\u4E0D\u54ED\u5927\u5BF6\u5BF6\uFF0C\u5BF6\u5BF6\u54ED",src:"https://picsum.photos/600/400?random=3"},{description:"\u9AD4\u80B2\u7684\u8CE0\u7387\uFF0C\u9AD4\u80B2\u8CE0\u7387\uFF0C\u9AD4\u80B2\u8CE0\u7387\uFF0C\u9AD4\u80B2\u8CE0\u7387\uFF0C\u9AD4\u80B2\u8CE0\u7387\uFF0C\u9AD4\u80B2\u8CE0\u7387\uFF0C\u9AD4\u80B2\u8CE0\u7387\u9AD4\u80B2\u8CE0\u7387\uFF0C\u9AD4\u80B2\u8CE0\u7387\uFF0C",src:"https://picsum.photos/600/400?random=4"},{description:"\u660E\u5929\u662F\u661F\u671F\u516D\uFF0C\u5F8C\u5929\u662F\u661F\u671F\u65E5",src:"https://picsum.photos/600/400?random=5"},{description:"\u5728\u975E\u6D32\u6BCF\u904E60\u79D2\uFF0C\u5C31\u6709\u4E00\u5206\u9418\u904E\u53BB",src:"https://picsum.photos/600/400?random=6"}],r=[],h=3;for(let l=0,f=e.length;l<f;l+=h)r.push(e.slice(l,l+h));const _=(l,f,C)=>{p.value=C},p=V(0),u={contents:e,contentMobile:r,chunk:h,onWrapperClick:_,contIndex:p,emit:n};return Object.defineProperty(u,"__isScriptSetup",{enumerable:!1,value:!0}),u}},X={class:"breakpoint"},Y={class:"slider"},Z={class:"sliderWrapper"},tt=$("mdi-chevron-left"),et=$("mdi-chevron-right"),st={class:"content"},ot=t("h4",null,"123123",-1),nt={class:"sliderSideInfo scrollbar"},ct=["onClick"],it={class:"breakpoint-mobile"},rt={class:"breakpoint-card-list"},_t={class:"swiper-wrapper"},lt={class:"cover"},at={class:"card-item-content"},dt=t("h5",null,"\u5167\u5BB9\u5167\u5BB9\u5167\u5BB9\u5167\u5BB91\u5167\u5BB9\u5167\u5BB9\u5167\u5BB9\u5167\u5BB91\u5167\u5BB9\u5167\u5BB9\u5167\u5BB9\u5167\u5BB91\u5167\u5BB9\u5167\u5BB9\u5167\u5BB9\u5167\u5BB91\u5167\u5BB9\u5167\u5BB9\u5167\u5BB9\u5167\u5BB91",-1),ht={class:"card-item-content-calendar"},pt=$("mdi-calendar"),ut=t("p",null,"2022.09.20",-1),vt=t("div",{class:"card-swiper-btn"},null,-1);function mt(m,c,n,e,r,h){const _=a("v-icon"),p=a("v-btn"),u=a("v-carousel-item"),l=F,f=a("v-carousel"),C=a("v-img"),S=a("v-sheet");return d(),v(x,null,[t("div",X,[t("div",Y,[t("div",Z,[s(f,{cycle:"",height:"400","hide-delimiter-background":"","show-arrows":"hover","delimiter-icon":"mdi-color-helper",color:"white",modelValue:e.contIndex,"onUpdate:modelValue":c[0]||(c[0]=i=>e.contIndex=i)},{prev:o(({props:i})=>[s(p,{class:"wrapper-btn left",onClick:i.onClick},{default:o(()=>[s(_,{color:"white"},{default:o(()=>[tt]),_:1})]),_:2},1032,["onClick"])]),next:o(({props:i})=>[s(p,{class:"wrapper-btn right",onClick:i.onClick},{default:o(()=>[s(_,{color:"white"},{default:o(()=>[et]),_:1})]),_:2},1032,["onClick"])]),default:o(()=>[s(l,{to:"/about"},{default:o(()=>[(d(),v(x,null,k(e.contents,(i,g)=>s(u,{height:"400",src:i.src,key:g},{default:o(()=>[t("div",st,[t("h3",null,b(i.description),1),ot])]),_:2},1032,["src"])),64))]),_:1})]),_:1},8,["modelValue"])]),t("div",nt,[(d(),v(x,null,k(e.contents,(i,g)=>t("div",{class:D(["sliderSideInfoItem",{active:e.contIndex===g}]),key:i,onClick:y=>e.onWrapperClick(y,i,g)},[t("h3",null,b(i.description),1)],10,ct)),64))])])]),t("div",it,[t("div",rt,[s(f,{height:"400","hide-delimiter-background":"","show-arrows":!1},{default:o(()=>[(d(),v(x,null,k(e.contentMobile,(i,g)=>s(u,{key:g},{default:o(()=>[s(S,{height:"100%"},{default:o(()=>[t("div",_t,[(d(!0),v(x,null,k(i,(y,T)=>(d(),v("div",{class:"card-item",key:T},[t("div",lt,[s(C,{src:y.src},null,8,["src"])]),t("div",at,[t("h3",null,b(y.description),1),dt,t("div",ht,[s(_,null,{default:o(()=>[pt]),_:1}),ut])])]))),128)),vt])]),_:2},1024)]),_:2},1024)),64))]),_:1})])])],64)}var ft=w(Q,[["render",mt]]);const $t={},gt={class:"popular-articles"},xt={class:"popular-articles-list-wrapper"},bt={class:"list-header"},kt=t("h1",null,"\u71B1\u9580\u6587\u7AE0",-1),wt={href:""},yt=t("p",null,"\u67E5\u770B\u66F4\u591A",-1),Ct=$("mdi-chevron-right"),St={class:"popular-article-list"},Tt={class:"popular-article-item"},jt=t("a",{href:""},null,-1),It=t("div",{class:"seq"},"01",-1),Vt={class:"content"},Dt={class:"calendar-wrapper"},Ft=$("mdi-calendar-text"),Ot=t("p",null,"August 31, 2022",-1),Pt=t("h3",null,"2022\u5E74",-1),Bt={class:"popular-article-item"},Wt=t("a",{href:""},null,-1),qt=t("div",{class:"seq"},"01",-1),At={class:"content"},Nt={class:"calendar-wrapper"},Mt=$("mdi-calendar-text"),zt=t("p",null,"August 31, 2022",-1),Et=t("h3",null,"2022\u5E74",-1),Lt={class:"popular-article-item"},Rt=t("a",{href:""},null,-1),Ut=t("div",{class:"seq"},"01",-1),Gt={class:"content"},Ht={class:"calendar-wrapper"},Jt=$("mdi-calendar-text"),Kt=t("p",null,"August 31, 2022",-1),Qt=t("h3",null,"2022\u5E74",-1);function Xt(m,c){const n=a("v-icon");return d(),v("div",gt,[t("div",xt,[t("div",bt,[kt,t("a",wt,[yt,s(n,null,{default:o(()=>[Ct]),_:1})])]),t("div",St,[t("div",Tt,[jt,It,t("div",Vt,[t("div",Dt,[s(n,{color:"gray"},{default:o(()=>[Ft]),_:1}),Ot]),Pt])]),t("div",Bt,[Wt,qt,t("div",At,[t("div",Nt,[s(n,{color:"gray"},{default:o(()=>[Mt]),_:1}),zt]),Et])]),t("div",Lt,[Rt,Ut,t("div",Gt,[t("div",Ht,[s(n,{color:"gray"},{default:o(()=>[Jt]),_:1}),Kt]),Qt])])])])])}var Yt=w($t,[["render",Xt]]);const Zt={setup(m,{expose:c}){c();const e={articleData:O({titleTxt:"\u6700\u65B0\u6D88\u606F",subtitleTxt:"\u8B93\u60A8\u8F15\u9B06\u638C\u63E1\u71B1\u9580\u8CFD\u4E8B\u8A0A\u606F"})};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}},te={class:"homepage"},ee={class:"homepage-main"},se=t("div",{class:"container"},null,-1),oe={class:"grid-area"},ne={class:"left-grid-area"},ce={class:"right-grid-area"};function ie(m,c,n,e,r,h){const _=A,p=K,u=ft,l=Yt;return d(),v("div",te,[t("div",ee,[s(_),se,t("div",oe,[t("div",ne,[s(p,{data:e.articleData},null,8,["data"]),s(u),s(p,{data:e.articleData},null,8,["data"]),s(u)]),t("div",ce,[s(l)])])])])}var _e=w(Zt,[["render",ie]]);export{_e as default};