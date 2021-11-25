"use strict";(self.webpackChunkios_cfw_guide=self.webpackChunkios_cfw_guide||[]).push([[39276],{39276:(e,l,t)=>{t.r(l),t.d(l,{default:()=>Be});var a=t(66252),n=t(3577),i=t(2262),r=t(49963),u=t(97621),o=t(42119),s=t(480);const c=["href","rel","target","aria-label"],v=(0,a.aZ)({inheritAttrs:!1}),d=(0,a.aZ)({...v,props:{item:{type:Object,required:!0}},setup:function(e){const l=e,t=(0,o.yj)(),r=(0,u.WF)(),{item:v}=(0,i.BK)(l),d=(0,i.Fl)((()=>(0,s.ak)(v.value.link))),p=(0,i.Fl)((()=>(0,s.B2)(v.value.link)||(0,s.R5)(v.value.link))),h=(0,i.Fl)((()=>{if(!p.value)return v.value.target?v.value.target:d.value?"_blank":void 0})),g=(0,i.Fl)((()=>"_blank"===h.value)),k=(0,i.Fl)((()=>!d.value&&!p.value&&!g.value)),m=(0,i.Fl)((()=>{if(!p.value)return v.value.rel?v.value.rel:g.value?"noopener noreferrer":void 0})),w=(0,i.Fl)((()=>v.value.ariaLabel||v.value.text)),b=(0,i.Fl)((()=>{const e=Object.keys(r.value.locales);return e.length?!e.some((e=>e===v.value.link)):"/"!==v.value.link})),U=(0,i.Fl)((()=>!!b.value&&t.path.startsWith(v.value.link))),S=(0,i.Fl)((()=>!!k.value&&(v.value.activeMatch?new RegExp(v.value.activeMatch).test(t.path):U.value)));return(e,l)=>{const t=(0,a.up)("RouterLink"),r=(0,a.up)("OutboundLink");return(0,i.SU)(k)?((0,a.wg)(),(0,a.j4)(t,(0,a.dG)({key:0,class:["nav-link",{"router-link-active":(0,i.SU)(S)}],to:(0,i.SU)(v).link,"aria-label":(0,i.SU)(w)},e.$attrs),{default:(0,a.w5)((()=>[(0,a.WI)(e.$slots,"before"),(0,a.Uk)(" "+(0,n.zw)((0,i.SU)(v).text)+" ",1),(0,a.WI)(e.$slots,"after")])),_:3},16,["class","to","aria-label"])):((0,a.wg)(),(0,a.iD)("a",(0,a.dG)({key:1,class:"nav-link external",href:(0,i.SU)(v).link,rel:(0,i.SU)(m),target:(0,i.SU)(h),"aria-label":(0,i.SU)(w)},e.$attrs),[(0,a.WI)(e.$slots,"before"),(0,a.Uk)(" "+(0,n.zw)((0,i.SU)(v).text)+" ",1),(0,i.SU)(g)?((0,a.wg)(),(0,a.j4)(r,{key:0})):(0,a.kq)("",!0),(0,a.WI)(e.$slots,"after")],16,c))}}});var p=t(92568);const h=["aria-labelledby"],g={class:"wrapper"},k={key:0,id:"main-title"},m={key:1,class:"description"},w={key:2},b=["href"],U={key:3,class:"actions"},S={class:"home"},f=["innerHTML"],y={key:1,class:"features"},_={class:"theme-default-content custom"},D={key:2,style:{"text-align":"center"}},F=["id"],x={key:3},W={key:4,style:{"text-align":"center"}},L=["id"],I=["innerHTML"],T=["textContent"],H=(0,a.aZ)({setup(e){const l=(0,u.I2)(),r=(0,u.I5)(),o=(0,p.X6)(),c=(0,i.Fl)((()=>l.value.header.overlay_image?(0,u.pJ)(l.value.header.overlay_image):null)),v=(0,i.Fl)((()=>l.value.header.overlay_color?l.value.header.overlay_color:null)),H=(0,i.Fl)((()=>l.value.header.overlay_filter?l.value.header.overlay_filter:0)),$=(0,i.Fl)((()=>null===l.value.header.overlay_title?null:l.value.header.overlay_title||r.value.title||"Hello")),q=(0,i.Fl)((()=>null===l.value.header.cta_label?null:l.value.header.cta_label)),C=(0,i.Fl)((()=>null===l.value.header.cta_url?null:l.value.header.cta_url)),M=((0,i.Fl)((()=>l.value.heroAlt||$.value||"hero")),(0,i.Fl)((()=>null===l.value.header.overlay_excerpt?null:l.value.header.overlay_excerpt||r.value.description||"Welcome to your VuePress site"))),z=(0,i.Fl)((()=>{var e=o.value.discordNoticeText;if(null===e)return null;try{var l=t(9980)().render(e)}catch(l){return e}return l})),j=(0,i.Fl)((()=>{var e=o.value.adTagOne;return null===e?null:e})),B=(0,i.Fl)((()=>{var e=o.value.adTagTwo;return null===e?null:e})),R=(0,i.Fl)((()=>null==l.value.ads||l.value.ads)),X=(0,i.Fl)((()=>(0,s.kJ)(l.value.actions)?l.value.actions.map((({text:e,link:l,type:t="primary"})=>({text:e,link:l,type:t}))):[])),Y=(0,i.Fl)((()=>(0,s.kJ)(l.value.features)?l.value.features:[])),Z=(0,i.Fl)((()=>l.value.footer)),N=(0,i.Fl)((()=>l.value.footerHtml));return(e,l)=>{const t=(0,a.up)("Content");return(0,a.wg)(),(0,a.iD)("main",{class:"splash","aria-labelledby":(0,i.SU)($)?"main-title":void 0},[(0,a._)("header",{class:"hero heroImage",style:(0,n.j5)({"background-image":"linear-gradient(rgba(0, 0, 0, "+(0,i.SU)(H)+"), rgba(0, 0, 0, "+(0,i.SU)(H)+")), url("+(0,i.SU)(c)+")","background-color":(0,i.SU)(v)})},[(0,a._)("div",g,[(0,i.SU)($)?((0,a.wg)(),(0,a.iD)("h1",k,(0,n.zw)((0,i.SU)($)),1)):(0,a.kq)("",!0),(0,i.SU)(M)?((0,a.wg)(),(0,a.iD)("p",m,(0,n.zw)((0,i.SU)(M)),1)):(0,a.kq)("",!0),(0,i.SU)(q)?((0,a.wg)(),(0,a.iD)("p",w,[(0,a._)("a",{href:(0,i.SU)(C),class:"heroBtn"},(0,n.zw)((0,i.SU)(q)),9,b)])):(0,a.kq)("",!0),(0,i.SU)(X).length?((0,a.wg)(),(0,a.iD)("p",U,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((0,i.SU)(X),(e=>((0,a.wg)(),(0,a.j4)(d,{key:e.text,class:(0,n.C_)(["action-button",[e.type]]),item:e},null,8,["class","item"])))),128))])):(0,a.kq)("",!0)])],4),(0,a._)("div",S,[(0,i.SU)(z)?((0,a.wg)(),(0,a.iD)("div",{key:0,class:"custom-container tip",innerHTML:(0,i.SU)(z)},null,8,f)):(0,a.kq)("",!0),(0,i.SU)(Y).length?((0,a.wg)(),(0,a.iD)("div",y,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((0,i.SU)(Y),(e=>((0,a.wg)(),(0,a.iD)("div",{key:e.title,class:"feature"},[(0,a._)("h2",null,(0,n.zw)(e.title),1),(0,a._)("p",null,(0,n.zw)(e.details),1)])))),128))])):(0,a.kq)("",!0),(0,a._)("div",_,[(0,a.Wm)(t)]),(0,i.SU)(j)&&(0,i.SU)(R)?((0,a.wg)(),(0,a.iD)("div",D,[(0,a._)("div",{id:(0,i.SU)(j)},null,8,F)])):(0,a.kq)("",!0),(0,i.SU)(j)&&(0,i.SU)(B)&&(0,i.SU)(R)?((0,a.wg)(),(0,a.iD)("hr",x)):(0,a.kq)("",!0),(0,i.SU)(B)&&(0,i.SU)(R)?((0,a.wg)(),(0,a.iD)("div",W,[(0,a._)("div",{id:(0,i.SU)(B)},null,8,L)])):(0,a.kq)("",!0),(0,i.SU)(Z)?((0,a.wg)(),(0,a.iD)(a.HY,{key:5},[(0,i.SU)(N)?((0,a.wg)(),(0,a.iD)("div",{key:0,class:"footer",innerHTML:(0,i.SU)(Z)},null,8,I)):((0,a.wg)(),(0,a.iD)("div",{key:1,class:"footer",textContent:(0,n.zw)((0,i.SU)(Z))},null,8,T))],64)):(0,a.kq)("",!0)])],8,h)}}}),$=e=>!(0,s.ak)(e)||/github\.com/.test(e)?"GitHub":/bitbucket\.org/.test(e)?"Bitbucket":/gitlab\.com/.test(e)?"GitLab":/gitee\.com/.test(e)?"Gitee":null,q={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},C=(0,a.aZ)({setup(e){const l=e=>{e.style.height=e.scrollHeight+"px"},t=e=>{e.style.height=""};return(e,n)=>((0,a.wg)(),(0,a.j4)(r.uT,{name:"dropdown",onEnter:l,onAfterEnter:t,onBeforeLeave:l},{default:(0,a.w5)((()=>[(0,a.WI)(e.$slots,"default")])),_:3}))}}),M=["aria-label"],z=["innerHTML"],j={key:0,class:"arrow down"},B=["aria-label"],R=["innerHTML"],X={class:"nav-dropdown"},Y={class:"dropdown-subtitle"},Z={key:1},N={class:"dropdown-subitem-wrapper"},P=(0,a.aZ)({props:{item:{type:Object,required:!0}},setup(e){const l=e,{item:t}=(0,i.BK)(l),u=(0,i.Fl)((()=>t.value.ariaLabel||t.value.text)),s=(0,i.iH)(!1),c=(0,o.yj)();(0,a.YP)((()=>c.path),(()=>{s.value=!1}));const v=e=>{const l=0===e.detail;s.value=!!l&&!s.value},p=(e,l)=>l[l.length-1]===e;return(e,l)=>((0,a.wg)(),(0,a.iD)("div",{class:(0,n.C_)(["dropdown-wrapper",{open:s.value}])},[(0,a._)("button",{class:"dropdown-title",type:"button","aria-label":(0,i.SU)(u),onClick:v},[(0,a._)("span",{class:"title",innerHTML:(0,i.SU)(t).text},null,8,z),(0,i.SU)(t).noDropdown?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("span",j))],8,M),(0,a._)("button",{class:"mobile-dropdown-title",type:"button","aria-label":(0,i.SU)(u),onClick:l[0]||(l[0]=e=>s.value=!s.value)},[(0,a._)("span",{class:"title",innerHTML:(0,i.SU)(t).text},null,8,R),(0,a._)("span",{class:(0,n.C_)(["arrow",s.value?"down":"right"])},null,2)],8,B),(0,a.Wm)(C,null,{default:(0,a.w5)((()=>[(0,a.wy)((0,a._)("ul",X,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((0,i.SU)(t).children,((e,l)=>((0,a.wg)(),(0,a.iD)("li",{key:e.link||l,class:"dropdown-item"},[e.children?((0,a.wg)(),(0,a.iD)(a.HY,{key:0},[(0,a._)("h4",Y,[e.link?((0,a.wg)(),(0,a.j4)(d,{key:0,item:e,onFocusout:l=>p(e,(0,i.SU)(t).children)&&0===e.children.length&&(s.value=!1)},null,8,["item","onFocusout"])):((0,a.wg)(),(0,a.iD)("span",Z,(0,n.zw)(e.text),1))]),(0,a._)("ul",N,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.children,(l=>((0,a.wg)(),(0,a.iD)("li",{key:l.link,class:"dropdown-subitem"},[(0,a.Wm)(d,{item:l,onFocusout:a=>p(l,e.children)&&p(e,(0,i.SU)(t).children)&&(s.value=!1)},null,8,["item","onFocusout"])])))),128))])],64)):((0,a.wg)(),(0,a.j4)(d,{key:1,item:e,onFocusout:l=>p(e,(0,i.SU)(t).children)&&(s.value=!1)},null,8,["item","onFocusout"]))])))),128))],512),[[r.F8,s.value]])])),_:1})],2))}}),E={key:0,class:"navbar-links"},K=(0,a.aZ)({setup(e){const l=e=>(0,s.HD)(e)?(0,p.sC)(e):e.children?{...e,children:e.children.map(l)}:e,t=(()=>{const e=(0,p.X6)();return(0,i.Fl)((()=>(e.value.navbar||[]).map(l)))})(),n=(()=>{const e=(0,o.tv)(),l=(0,u.I)(),t=(0,u.I5)(),a=(0,p.X6)();return(0,i.Fl)((()=>{var n,i;const r=Object.keys(t.value.locales);if(r.length<2)return[];const u=e.currentRoute.value.path,o=e.currentRoute.value.fullPath;return[{text:null!=(n=a.value.selectLanguageText)?n:"unkown language",ariaLabel:null!=(i=a.value.selectLanguageAriaLabel)?i:"unkown language",dropdown:!1,children:r.map((n=>{var i,r,s,c,v,d;const p=null!=(r=null==(i=t.value.locales)?void 0:i[n])?r:{},h=null!=(c=null==(s=a.value.locales)?void 0:s[n])?c:{},g=`${p.lang}`,k=null!=(v=h.selectLanguageName)?v:g;let m;if(g===t.value.lang)m=o;else{const t=u.replace(l.value,n);m=e.getRoutes().some((e=>e.path===t))?t:null!=(d=h.home)?d:n}return{text:k,link:m}})),noDropdown:!0}]}))})(),r=(()=>{const e=(0,p.X6)(),l=(0,i.Fl)((()=>e.value.repo)),t=(0,i.Fl)((()=>l.value?$(l.value):null)),a=(0,i.Fl)((()=>l.value&&!(0,s.ak)(l.value)?`https://github.com/${l.value}`:l.value)),n=(0,i.Fl)((()=>a.value?e.value.repoLabel?e.value.repoLabel:null===t.value?"Source":t.value:null));return(0,i.Fl)((()=>a.value&&n.value?[{text:n.value,link:a.value}]:[]))})(),c=(0,i.Fl)((()=>[...t.value,...r.value,...n.value]));return(e,l)=>(0,i.SU)(c).length?((0,a.wg)(),(0,a.iD)("nav",E,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((0,i.SU)(c),(e=>((0,a.wg)(),(0,a.iD)("div",{key:e.text,class:"navbar-links-item"},[e.children?((0,a.wg)(),(0,a.j4)(P,{key:0,item:e},null,8,["item"])):((0,a.wg)(),(0,a.j4)(d,{key:1,item:e},null,8,["item"]))])))),128))])):(0,a.kq)("",!0)}}),O=["title"],V={class:"icon",focusable:"false",viewBox:"0 0 32 32"},G=[(0,a.uE)('<path d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z" fill="currentColor"></path><path d="M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z" fill="currentColor"></path><path d="M2 15.005h5v2H2z" fill="currentColor"></path><path d="M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 25.005h2v5h-2z" fill="currentColor"></path><path d="M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z" fill="currentColor"></path><path d="M25 15.005h5v2h-5z" fill="currentColor"></path><path d="M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 2.005h2v5h-2z" fill="currentColor"></path>',9)],A={class:"icon",focusable:"false",viewBox:"0 0 32 32"},J=[(0,a._)("path",{d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z",fill:"currentColor"},null,-1)],Q=(0,a.aZ)({setup(e){const l=(0,p.X6)(),t=(0,p.vs)(),n=()=>{t.value=!t.value};return(e,u)=>((0,a.wg)(),(0,a.iD)("button",{class:"toggle-dark-button",title:(0,i.SU)(l).toggleDarkMode,onClick:n},[(0,a.wy)(((0,a.wg)(),(0,a.iD)("svg",V,G,512)),[[r.F8,!(0,i.SU)(t)]]),(0,a.wy)(((0,a.wg)(),(0,a.iD)("svg",A,J,512)),[[r.F8,(0,i.SU)(t)]])],8,O))}}),ee=["title"],le=[(0,a._)("div",{class:"icon","aria-hidden":"true"},[(0,a._)("span"),(0,a._)("span"),(0,a._)("span")],-1)],te=(0,a.aZ)({emits:["toggle"],setup(e){const l=(0,p.X6)();return(e,t)=>((0,a.wg)(),(0,a.iD)("div",{class:"toggle-sidebar-button",title:(0,i.SU)(l).toggleSidebar,"aria-expanded":"false",role:"button",tabindex:"0",onClick:t[0]||(t[0]=l=>e.$emit("toggle"))},le,8,ee))}}),ae=["src","alt"],ne=(0,a.aZ)({emits:["toggle-sidebar"],setup(e){const l=(0,u.I)(),t=(0,u.I5)(),r=(0,p.X6)(),o=(0,p.vs)(),s=(0,i.iH)(null),c=(0,i.iH)(null),v=(0,i.Fl)((()=>r.value.home||l.value)),d=(0,i.Fl)((()=>o.value&&void 0!==r.value.logoDark?r.value.logoDark:r.value.logo)),h=(0,i.Fl)((()=>t.value.title)),g=(0,i.iH)(0),k=(0,i.Fl)((()=>g.value?{maxWidth:g.value+"px"}:{})),m=(0,i.Fl)((()=>r.value.darkMode));function w(e,l){var t,a,n;const i=null==(n=null==(a=null==(t=null==e?void 0:e.ownerDocument)?void 0:t.defaultView)?void 0:a.getComputedStyle(e,null))?void 0:n[l],r=Number.parseInt(i,10);return Number.isNaN(r)?0:r}return(0,a.bv)((()=>{const e=w(s.value,"paddingLeft")+w(s.value,"paddingRight"),l=()=>{var l;window.innerWidth<=719?g.value=0:g.value=s.value.offsetWidth-e-((null==(l=c.value)?void 0:l.offsetWidth)||0)};l(),window.addEventListener("resize",l,!1),window.addEventListener("orientationchange",l,!1)})),(e,l)=>{const t=(0,a.up)("RouterLink"),r=(0,a.up)("NavbarSearch");return(0,a.wg)(),(0,a.iD)("header",{ref:(e,l)=>{l.navbar=e,s.value=e},class:"navbar"},[(0,a.Wm)(te,{onToggle:l[0]||(l[0]=l=>e.$emit("toggle-sidebar"))}),(0,a._)("span",{ref:(e,l)=>{l.siteBrand=e,c.value=e}},[(0,a.Wm)(t,{to:(0,i.SU)(v)},{default:(0,a.w5)((()=>[(0,i.SU)(d)?((0,a.wg)(),(0,a.iD)("img",{key:0,class:"logo",src:(0,i.SU)(u.pJ)((0,i.SU)(d)),alt:(0,i.SU)(h)},null,8,ae)):(0,a.kq)("",!0),(0,i.SU)(h)?((0,a.wg)(),(0,a.iD)("span",{key:1,class:(0,n.C_)(["site-name",{"can-hide":(0,i.SU)(d)}])},(0,n.zw)((0,i.SU)(h)),3)):(0,a.kq)("",!0)])),_:1},8,["to"])],512),(0,a._)("div",{class:"navbar-links-wrapper",style:(0,n.j5)((0,i.SU)(k))},[(0,a.WI)(e.$slots,"before"),(0,a.Wm)(K,{class:"can-hide"}),(0,a.WI)(e.$slots,"after"),(0,i.SU)(m)?((0,a.wg)(),(0,a.j4)(Q,{key:0})):(0,a.kq)("",!0),(0,a.Wm)(r)],4)],512)}}}),ie={class:"page-meta"},re={key:0,class:"meta-item edit-link"},ue={key:1,class:"meta-item last-updated"},oe={class:"meta-item-label"},se={class:"meta-item-info"},ce={key:2,class:"meta-item contributors"},ve={class:"meta-item-label"},de={class:"meta-item-info"},pe=["title"],he=(0,a.Uk)(", "),ge=(0,a.aZ)({setup(e){const l=(0,p.X6)(),t=(()=>{const e=(0,p.X6)(),l=(0,u.Vi)(),t=(0,u.I2)();return(0,i.Fl)((()=>{var a,n;if(null!=(n=null!=(a=t.value.editLink)?a:e.value.editLink)&&!n)return null;const{repo:i,docsRepo:r=i,docsBranch:u="main",docsDir:o="docs",editLinkText:c}=e.value;if(!r)return null;const v=(({docsRepo:e,docsBranch:l,docsDir:t,filePathRelative:a,editLinkPattern:n})=>{const i=$(e);let r;return n?r=n:null!==i&&(r=q[i]),r?r.replace(/:repo/,(0,s.ak)(e)?e:`https://github.com/${e}`).replace(/:branch/,l).replace(/:path/,(0,s.FY)(`${(0,s.U1)(t)}/${a}`)):null})({docsRepo:r,docsBranch:u,docsDir:o,filePathRelative:l.value.filePathRelative,editLinkPattern:e.value.editLinkPattern});return v?{text:null!=c?c:"Edit this page",link:v}:null}))})(),r=(()=>{const e=(0,u.I5)(),l=(0,p.X6)(),t=(0,u.Vi)(),a=(0,u.I2)();return(0,i.Fl)((()=>{var n,i,r,u;return(null==(i=null!=(n=a.value.lastUpdated)?n:l.value.lastUpdated)||i)&&(null==(r=t.value.git)?void 0:r.updatedTime)?new Date(null==(u=t.value.git)?void 0:u.updatedTime).toLocaleString(e.value.lang):null}))})(),o=(()=>{const e=(0,p.X6)(),l=(0,u.Vi)(),t=(0,u.I2)();return(0,i.Fl)((()=>{var a,n,i,r;return null!=(n=null!=(a=t.value.contributors)?a:e.value.contributors)&&!n||null==(r=null==(i=l.value.git)?void 0:i.contributors)?null:r}))})();return(e,u)=>((0,a.wg)(),(0,a.iD)("footer",ie,[(0,i.SU)(t)?((0,a.wg)(),(0,a.iD)("div",re,[(0,a.Wm)(d,{class:"meta-item-label",item:(0,i.SU)(t)},null,8,["item"])])):(0,a.kq)("",!0),(0,i.SU)(r)?((0,a.wg)(),(0,a.iD)("div",ue,[(0,a._)("span",oe,(0,n.zw)((0,i.SU)(l).lastUpdatedText)+": ",1),(0,a._)("span",se,(0,n.zw)((0,i.SU)(r)),1)])):(0,a.kq)("",!0),(0,i.SU)(o)&&(0,i.SU)(o).length?((0,a.wg)(),(0,a.iD)("div",ce,[(0,a._)("span",ve,(0,n.zw)((0,i.SU)(l).contributorsText)+": ",1),(0,a._)("span",de,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((0,i.SU)(o),((e,l)=>((0,a.wg)(),(0,a.iD)(a.HY,{key:l},[(0,a._)("span",{class:"contributor",title:`email: ${e.email}`},(0,n.zw)(e.name),9,pe),l!==(0,i.SU)(o).length-1?((0,a.wg)(),(0,a.iD)(a.HY,{key:0},[he],64)):(0,a.kq)("",!0)],64)))),128))])])):(0,a.kq)("",!0)]))}}),ke={key:0,class:"page-nav"},me={class:"inner"},we={key:0,class:"prev"},be=(0,a.Uk)(" ← "),Ue={key:1,class:"next"},Se=(0,a.Uk)(" → "),fe=(0,a.aZ)({setup(e){const l=e=>!1===e?null:(0,s.HD)(e)?(0,p.sC)(e):!!(0,s.PO)(e)&&e,t=(e,l,a)=>{const n=e.findIndex((e=>e.link===l));if(-1!==n){const l=e[n+a];return(null==l?void 0:l.link)?l:null}for(const n of e)if(n.children){const e=t(n.children,l,a);if(e)return e}return null},n=(0,u.I2)(),r=(0,p.VU)(),c=(0,o.yj)(),v=(0,i.Fl)((()=>{const e=l(n.value.prev);return!1!==e?e:t(r.value,c.path,-1)})),h=(0,i.Fl)((()=>{const e=l(n.value.next);return!1!==e?e:t(r.value,c.path,1)}));return(e,l)=>(0,i.SU)(v)||(0,i.SU)(h)?((0,a.wg)(),(0,a.iD)("nav",ke,[(0,a._)("p",me,[(0,i.SU)(v)?((0,a.wg)(),(0,a.iD)("span",we,[be,(0,a.Wm)(d,{item:(0,i.SU)(v)},null,8,["item"])])):(0,a.kq)("",!0),(0,i.SU)(h)?((0,a.wg)(),(0,a.iD)("span",Ue,[(0,a.Wm)(d,{item:(0,i.SU)(h)},null,8,["item"]),Se])):(0,a.kq)("",!0)])])):(0,a.kq)("",!0)}}),ye={class:"page"},_e={class:"theme-default-content"},De=["innerHTML"],Fe={key:1,style:{"text-align":"center"}},xe=["id"],We={key:2,style:{"text-align":"center"}},Le=["id"],Ie=(0,a.aZ)({setup(e){const l=(0,u.I2)(),r=(0,p.X6)(),o=(0,i.Fl)((()=>{var e=l.value.discordNoticeText||r.value.discordNoticeText;if(null===e)return null;try{var a=t(9980)().render(e)}catch(l){return e}return a})),s=(0,i.Fl)((()=>{var e=r.value.adTagOne;return null===e?null:e})),c=(0,i.Fl)((()=>{var e=r.value.adTagTwo;return null===e?null:e})),v=(0,i.Fl)((()=>null==l.value.ads||l.value.ads)),d=(0,i.Fl)((()=>null===l.value.title?null:l.value.title));return(e,l)=>{const t=(0,a.up)("Content");return(0,a.wg)(),(0,a.iD)("main",ye,[(0,a.WI)(e.$slots,"top"),(0,a._)("div",_e,[(0,a._)("h1",null,(0,n.zw)((0,i.SU)(d)),1),(0,i.SU)(o)?((0,a.wg)(),(0,a.iD)("div",{key:0,class:"custom-container tip",innerHTML:(0,i.SU)(o)},null,8,De)):(0,a.kq)("",!0),(0,i.SU)(s)&&(0,i.SU)(v)?((0,a.wg)(),(0,a.iD)("div",Fe,[(0,a._)("div",{id:(0,i.SU)(s)},null,8,xe)])):(0,a.kq)("",!0),(0,a.Wm)(t),(0,i.SU)(c)&&(0,i.SU)(v)?((0,a.wg)(),(0,a.iD)("div",We,[(0,a._)("div",{id:(0,i.SU)(c)},null,8,Le)])):(0,a.kq)("",!0)]),(0,a.Wm)(ge),(0,a.Wm)(fe),(0,a.WI)(e.$slots,"bottom")])}}}),Te=e=>decodeURI(e).replace(/#.*$/,"").replace(/(index)?\.(md|html)$/,""),He=(e,l)=>!!((e,l)=>void 0!==l&&(e.hash===l||Te(e.path)===Te(l)))(e,l.link)||!!l.children&&l.children.some((l=>He(e,l))),$e=(e,l)=>e.link?(0,a.h)(d,{...l,item:e}):(0,a.h)("p",l,e.text),qe=(e,l)=>{var t;return(null===(t=e.children)||void 0===t?void 0:t.length)?(0,a.h)("ul",{class:{"sidebar-sub-items":l>0}},e.children.map((e=>(0,a.h)("li",(0,a.h)(Ce,{item:e,depth:l+1}))))):null},Ce=({item:e,depth:l=0})=>{const t=(0,o.yj)(),a=He(t,e);return[$e(e,{class:{"sidebar-heading":0===l,"sidebar-item":!0,active:a}}),qe(e,l)]};Ce.displayName="SidebarChild",Ce.props={item:{type:Object,required:!0},depth:{type:Number,required:!1}};const Me={class:"sidebar"},ze={class:"sidebar-links"},je=(0,a.aZ)({setup(e){const l=(0,p.VU)();return(e,t)=>((0,a.wg)(),(0,a.iD)("aside",Me,[(0,a.Wm)(K),(0,a.WI)(e.$slots,"top"),(0,a._)("ul",ze,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((0,i.SU)(l),(e=>((0,a.wg)(),(0,a.iD)("li",{key:e.link||e.text},[(0,a.Wm)((0,i.SU)(Ce),{item:e},null,8,["item"])])))),128))]),(0,a.WI)(e.$slots,"bottom")]))}}),Be=(0,a.aZ)({setup(e){const l=(0,u.Vi)(),t=(0,u.I2)(),s=(0,p.X6)(),c=(0,i.Fl)((()=>!1!==t.value.navbar&&!1!==s.value.navbar)),v=(0,p.VU)(),d=(0,i.iH)(!1),h=e=>{d.value="boolean"==typeof e?e:!d.value},g={x:0,y:0},k=e=>{g.x=e.changedTouches[0].clientX,g.y=e.changedTouches[0].clientY},m=e=>{const l=e.changedTouches[0].clientX-g.x,t=e.changedTouches[0].clientY-g.y;Math.abs(l)>Math.abs(t)&&Math.abs(l)>40&&(l>0&&g.x<=80?h(!0):h(!1))},w=(0,i.Fl)((()=>[{"no-navbar":!c.value,"no-sidebar":!v.value.length,"sidebar-open":d.value},t.value.pageClass]));let b;(0,a.bv)((()=>{const e=(0,o.tv)();b=e.afterEach((()=>{h(!1)}))})),(0,a.Ah)((()=>{b()}));const U=(0,p.P$)(),S=U.resolve,f=U.pending;return(e,u)=>((0,a.wg)(),(0,a.iD)("div",{class:(0,n.C_)(["theme-container",(0,i.SU)(w)]),onTouchstart:k,onTouchend:m},[(0,a.WI)(e.$slots,"navbar",{},(()=>[(0,i.SU)(c)?((0,a.wg)(),(0,a.j4)(ne,{key:0,onToggleSidebar:h},{before:(0,a.w5)((()=>[(0,a.WI)(e.$slots,"navbar-before")])),after:(0,a.w5)((()=>[(0,a.WI)(e.$slots,"navbar-after")])),_:3})):(0,a.kq)("",!0)])),(0,a._)("div",{class:"sidebar-mask",onClick:u[0]||(u[0]=e=>h(!1))}),(0,a.WI)(e.$slots,"sidebar",{},(()=>[(0,a.Wm)(je,null,{top:(0,a.w5)((()=>[(0,a.WI)(e.$slots,"sidebar-top")])),bottom:(0,a.w5)((()=>[(0,a.WI)(e.$slots,"sidebar-bottom")])),_:3})])),(0,a.WI)(e.$slots,"page",{},(()=>[(0,i.SU)(t).home?((0,a.wg)(),(0,a.j4)(H,{key:0})):((0,a.wg)(),(0,a.j4)(r.uT,{key:1,name:"fade-slide-y",mode:"out-in",onBeforeEnter:(0,i.SU)(S),onBeforeLeave:(0,i.SU)(f)},{default:(0,a.w5)((()=>[(0,a.Wm)(Ie,{key:(0,i.SU)(l).path},{top:(0,a.w5)((()=>[(0,a.WI)(e.$slots,"page-top")])),bottom:(0,a.w5)((()=>[(0,a.WI)(e.$slots,"page-bottom")])),_:3})])),_:3},8,["onBeforeEnter","onBeforeLeave"]))]))],34))}})}}]);