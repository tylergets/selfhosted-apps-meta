import{K as R,X as m,D as v,x as S,ad as V,as as O,aa as T,at as P,h as p,G as b,T as A,V as i,S as j,ak as N,au as k}from"./app.config.84580bd5.js";import{q as $,h as c,e as B,j as x,u as C}from"./query.ebc6f75b.js";import{_ as r,u as M}from"./entry.bdaf3d92.js";import{u as w}from"./cookie.76e46440.js";import{w as y,s as z,u as H}from"./utils.c66fdb6a.js";import"./app.f010f54e.js";import"./ContentDoc.24376620.js";import"./ContentList.4bb06c6b.js";import"./ContentQuery.a3b90c1d.js";import"./ContentRenderer.e74518c1.js";import"./ContentRendererMarkdown.dcb9d6b2.js";import"./ContentSlot.f74f7861.js";import"./DocumentDrivenEmpty.774772d4.js";import"./DocumentDrivenNotFound.607c42ce.js";import"./Markdown.1844a210.js";import"./ProseCode.9e51589d.js";import{u as F}from"./composables.e311f841.js";import"./query.c3f7607a.js";import"./_commonjsHelpers.0ee3bad0.js";const q=async t=>{const{content:e}=R().public;typeof(t==null?void 0:t.params)!="function"&&(t=$(t));const o=t.params(),a=e.experimental.stripQueryParameters?y(`/navigation/${`${c(o)}.${e.integrity}`}/${B(o)}.json`):y(`/navigation/${c(o)}.${e.integrity}.json`);if(z())return(await r(()=>import("./client-db.c833819d.js"),["./client-db.c833819d.js","./app.config.84580bd5.js","./cookie.76e46440.js","./query.c3f7607a.js","./_commonjsHelpers.0ee3bad0.js"],import.meta.url).then(l=>l.generateNavigation))(o);const n=await $fetch(a,{method:"GET",responseType:"json",params:e.experimental.stripQueryParameters?void 0:{_params:x(o),previewToken:w("previewToken").value}});if(typeof n=="string"&&n.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return n};const U=m({emits:{error(t){return!0}},setup(t,{slots:e,emit:o}){const a=v(null),n=S();return V(u=>{if(!n.isHydrating)return o("error",u),a.value=u,!1}),()=>{var u,l;return a.value?(u=e.error)==null?void 0:u.call(e,{error:a}):(l=e.default)==null?void 0:l.call(e)}}}),G=Object.freeze(Object.defineProperty({__proto__:null,default:U},Symbol.toStringTag,{value:"Module"})),Q=m({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(t,{slots:e,attrs:o}){const a=v(!1);return O(()=>{a.value=!0}),n=>{var _;if(a.value)return(_=e.default)==null?void 0:_.call(e);const u=e.fallback||e.placeholder;if(u)return u();const l=n.fallback||n.placeholder||"",d=n.fallbackTag||n.placeholderTag||"span";return T(d,o,l)}}}),g=new WeakMap;function W(t){if(g.has(t))return g.get(t);const e={...t};return e.render?e.render=(o,...a)=>{if(o.mounted$){const n=t.render(o,...a);return n.children===null||typeof n.children=="string"?P(n.type,n.props,n.children,n.patchFlag,n.dynamicProps,n.shapeFlag):p(n)}else return p("div",o.$attrs??o._.attrs)}:e.template&&(e.template=`
      <template v-if="mounted$">${t.template}</template>
      <template v-else><div></div></template>
    `),e.setup=(o,a)=>{var u;const n=v(!1);return O(()=>{n.value=!0}),Promise.resolve(((u=t.setup)==null?void 0:u.call(t,o,a))||{}).then(l=>typeof l!="function"?{...l,mounted$:n}:(...d)=>{if(n.value){const _=l(...d);return _.children===null||typeof _.children=="string"?P(_.type,_.props,_.children,_.patchFlag,_.dynamicProps,_.shapeFlag):p(_)}else return p("div",a.attrs)})},g.set(t,e),e}const K=Object.freeze(Object.defineProperty({__proto__:null,createClientOnly:W,default:Q},Symbol.toStringTag,{value:"Module"})),X=m({name:"DevOnly",setup(t,e){return()=>null}}),Y=Object.freeze(Object.defineProperty({__proto__:null,default:X},Symbol.toStringTag,{value:"Module"})),J=m({name:"ServerPlaceholder",render(){return T("div")}}),Z=Object.freeze(Object.defineProperty({__proto__:null,default:J},Symbol.toStringTag,{value:"Module"})),tt=m({name:"NuxtLoadingIndicator",props:{throttle:{type:Number,default:200},duration:{type:Number,default:2e3},height:{type:Number,default:3},color:{type:[String,Boolean],default:"repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)"}},setup(t,{slots:e}){const o=et({duration:t.duration,throttle:t.throttle}),a=S();return a.hook("page:start",o.start),a.hook("page:finish",o.finish),b(()=>o.clear),()=>p("div",{class:"nuxt-loading-indicator",style:{position:"fixed",top:0,right:0,left:0,pointerEvents:"none",width:`${o.progress.value}%`,height:`${t.height}px`,opacity:o.isLoading.value?1:0,background:t.color||void 0,backgroundSize:`${100/o.progress.value*100}% auto`,transition:"width 0.1s, height 0.4s, opacity 0.4s",zIndex:999999}},e)}});function et(t){const e=v(0),o=v(!1),a=A(()=>1e4/t.duration);let n=null,u=null;function l(){_(),e.value=0,t.throttle?u=setTimeout(()=>{o.value=!0,E()},t.throttle):(o.value=!0,E())}function d(){e.value=100,I()}function _(){clearInterval(n),clearTimeout(u),n=null,u=null}function L(D){e.value=Math.min(100,e.value+D)}function I(){_(),setTimeout(()=>{o.value=!1,setTimeout(()=>{e.value=0},400)},500)}function E(){n=setInterval(()=>{L(a.value)},100)}return{progress:e,isLoading:o,start:l,finish:d,clear:_}}const rt=Object.freeze(Object.defineProperty({__proto__:null,default:tt},Symbol.toStringTag,{value:"Module"})),it=t=>Object.fromEntries(Object.entries(t).filter(([,e])=>e!==void 0)),f=(t,e)=>(o,a)=>(F(()=>t({...it(o),...a.attrs},a)),()=>{var n,u;return e?(u=(n=a.slots).default)==null?void 0:u.call(n):null}),h={accesskey:String,autocapitalize:String,autofocus:{type:Boolean,default:void 0},class:[String,Object,Array],contenteditable:{type:Boolean,default:void 0},contextmenu:String,dir:String,draggable:{type:Boolean,default:void 0},enterkeyhint:String,exportparts:String,hidden:{type:Boolean,default:void 0},id:String,inputmode:String,is:String,itemid:String,itemprop:String,itemref:String,itemscope:String,itemtype:String,lang:String,nonce:String,part:String,slot:String,spellcheck:{type:Boolean,default:void 0},style:String,tabindex:String,title:String,translate:String},nt=m({name:"NoScript",inheritAttrs:!1,props:{...h,title:String,body:Boolean,renderPriority:[String,Number]},setup:f((t,{slots:e})=>{var n;const o={...t},a=(((n=e.default)==null?void 0:n.call(e))||[]).filter(({children:u})=>u).map(({children:u})=>u).join("");return a&&(o.children=a),{noscript:[o]}})}),ot=m({name:"Link",inheritAttrs:!1,props:{...h,as:String,crossorigin:String,disabled:Boolean,fetchpriority:String,href:String,hreflang:String,imagesizes:String,imagesrcset:String,integrity:String,media:String,prefetch:{type:Boolean,default:void 0},referrerpolicy:String,rel:String,sizes:String,title:String,type:String,methods:String,target:String,body:Boolean,renderPriority:[String,Number]},setup:f(t=>({link:[t]}))}),at=m({name:"Base",inheritAttrs:!1,props:{...h,href:String,target:String},setup:f(t=>({base:t}))}),ut=m({name:"Title",inheritAttrs:!1,setup:f((t,{slots:e})=>{var a,n,u;return{title:((u=(n=(a=e.default)==null?void 0:a.call(e))==null?void 0:n[0])==null?void 0:u.children)||null}})}),lt=m({name:"Meta",inheritAttrs:!1,props:{...h,charset:String,content:String,httpEquiv:String,name:String,body:Boolean,renderPriority:[String,Number]},setup:f(t=>{const e={...t};return e.httpEquiv&&(e["http-equiv"]=e.httpEquiv,delete e.httpEquiv),{meta:[e]}})}),_t=m({name:"Style",inheritAttrs:!1,props:{...h,type:String,media:String,nonce:String,title:String,scoped:{type:Boolean,default:void 0},body:Boolean,renderPriority:[String,Number]},setup:f((t,{slots:e})=>{var n,u,l;const o={...t},a=(l=(u=(n=e.default)==null?void 0:n.call(e))==null?void 0:u[0])==null?void 0:l.children;return a&&(o.children=a),{style:[o]}})}),mt=m({name:"Head",inheritAttrs:!1,setup:(t,e)=>()=>{var o,a;return(a=(o=e.slots).default)==null?void 0:a.call(o)}}),dt=m({name:"Html",inheritAttrs:!1,props:{...h,manifest:String,version:String,xmlns:String,renderPriority:[String,Number]},setup:f(t=>({htmlAttrs:t}),!0)}),pt=m({name:"Body",inheritAttrs:!1,props:{...h,renderPriority:[String,Number]},setup:f(t=>({bodyAttrs:t}),!0)}),s=Object.freeze(Object.defineProperty({__proto__:null,Base:at,Body:pt,Head:mt,Html:dt,Link:ot,Meta:lt,NoScript:nt,Style:_t,Title:ut},Symbol.toStringTag,{value:"Module"}));i(()=>r(()=>import("./HighlightJs.5647e672.js"),["./HighlightJs.5647e672.js","./app.f010f54e.js","./entry.bdaf3d92.js","./app.config.84580bd5.js","./entry.159b849e.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./Section.695938fa.js"),["./Section.695938fa.js","./entry.bdaf3d92.js","./app.config.84580bd5.js","./entry.159b849e.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ContentDoc.24376620.js"),["./ContentDoc.24376620.js","./app.config.84580bd5.js","./composables.e311f841.js","./ContentRenderer.e74518c1.js","./ContentRendererMarkdown.dcb9d6b2.js","./_commonjsHelpers.0ee3bad0.js","./ContentQuery.a3b90c1d.js","./query.ebc6f75b.js","./entry.bdaf3d92.js","./entry.159b849e.css","./cookie.76e46440.js","./query.c3f7607a.js","./utils.c66fdb6a.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ContentList.4bb06c6b.js"),["./ContentList.4bb06c6b.js","./ContentQuery.a3b90c1d.js","./app.config.84580bd5.js","./query.ebc6f75b.js","./entry.bdaf3d92.js","./entry.159b849e.css","./cookie.76e46440.js","./query.c3f7607a.js","./utils.c66fdb6a.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>Promise.resolve().then(()=>ft),void 0,import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ContentQuery.a3b90c1d.js"),["./ContentQuery.a3b90c1d.js","./app.config.84580bd5.js","./query.ebc6f75b.js","./entry.bdaf3d92.js","./entry.159b849e.css","./cookie.76e46440.js","./query.c3f7607a.js","./utils.c66fdb6a.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ContentRenderer.e74518c1.js"),["./ContentRenderer.e74518c1.js","./ContentRendererMarkdown.dcb9d6b2.js","./app.config.84580bd5.js","./_commonjsHelpers.0ee3bad0.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ContentRendererMarkdown.dcb9d6b2.js"),["./ContentRendererMarkdown.dcb9d6b2.js","./app.config.84580bd5.js","./_commonjsHelpers.0ee3bad0.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ContentSlot.f74f7861.js"),["./ContentSlot.f74f7861.js","./utils.c66fdb6a.js","./app.config.84580bd5.js","./cookie.76e46440.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./DocumentDrivenEmpty.774772d4.js"),["./DocumentDrivenEmpty.774772d4.js","./app.config.84580bd5.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./DocumentDrivenNotFound.607c42ce.js"),["./DocumentDrivenNotFound.607c42ce.js","./app.config.84580bd5.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./Markdown.1844a210.js"),["./Markdown.1844a210.js","./ContentSlot.f74f7861.js","./utils.c66fdb6a.js","./app.config.84580bd5.js","./cookie.76e46440.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseA.205f067b.js"),["./ProseA.205f067b.js","./app.config.84580bd5.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseBlockquote.752deff5.js"),["./ProseBlockquote.752deff5.js","./entry.bdaf3d92.js","./app.config.84580bd5.js","./entry.159b849e.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseCode.9e51589d.js"),["./ProseCode.9e51589d.js","./entry.bdaf3d92.js","./app.config.84580bd5.js","./entry.159b849e.css","./ProseCode.e63e49c6.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseCodeInline.866caf4f.js"),["./ProseCodeInline.866caf4f.js","./entry.bdaf3d92.js","./app.config.84580bd5.js","./entry.159b849e.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseEm.0407436f.js"),["./ProseEm.0407436f.js","./entry.bdaf3d92.js","./app.config.84580bd5.js","./entry.159b849e.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseH1.b0e123e3.js"),["./ProseH1.b0e123e3.js","./app.config.84580bd5.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseH2.d8d3516d.js"),["./ProseH2.d8d3516d.js","./app.config.84580bd5.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseH3.daba689e.js"),["./ProseH3.daba689e.js","./app.config.84580bd5.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseH4.a3799581.js"),["./ProseH4.a3799581.js","./app.config.84580bd5.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseH5.be5c76d8.js"),["./ProseH5.be5c76d8.js","./app.config.84580bd5.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseH6.7b1aec19.js"),["./ProseH6.7b1aec19.js","./app.config.84580bd5.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseHr.41d879a4.js"),["./ProseHr.41d879a4.js","./entry.bdaf3d92.js","./app.config.84580bd5.js","./entry.159b849e.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseImg.af089a7a.js"),["./ProseImg.af089a7a.js","./app.config.84580bd5.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseLi.362a46ec.js"),["./ProseLi.362a46ec.js","./entry.bdaf3d92.js","./app.config.84580bd5.js","./entry.159b849e.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseOl.b4ea0f9b.js"),["./ProseOl.b4ea0f9b.js","./entry.bdaf3d92.js","./app.config.84580bd5.js","./entry.159b849e.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseP.9c43ed16.js"),["./ProseP.9c43ed16.js","./entry.bdaf3d92.js","./app.config.84580bd5.js","./entry.159b849e.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseStrong.b0af949d.js"),["./ProseStrong.b0af949d.js","./entry.bdaf3d92.js","./app.config.84580bd5.js","./entry.159b849e.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseTable.5ee1236c.js"),["./ProseTable.5ee1236c.js","./entry.bdaf3d92.js","./app.config.84580bd5.js","./entry.159b849e.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseTbody.2546056b.js"),["./ProseTbody.2546056b.js","./entry.bdaf3d92.js","./app.config.84580bd5.js","./entry.159b849e.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseTd.c58c86d5.js"),["./ProseTd.c58c86d5.js","./entry.bdaf3d92.js","./app.config.84580bd5.js","./entry.159b849e.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseTh.e30bd8b2.js"),["./ProseTh.e30bd8b2.js","./entry.bdaf3d92.js","./app.config.84580bd5.js","./entry.159b849e.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseThead.8f995ad1.js"),["./ProseThead.8f995ad1.js","./entry.bdaf3d92.js","./app.config.84580bd5.js","./entry.159b849e.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseTr.bb243456.js"),["./ProseTr.bb243456.js","./entry.bdaf3d92.js","./app.config.84580bd5.js","./entry.159b849e.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseUl.15ad10ab.js"),["./ProseUl.15ad10ab.js","./entry.bdaf3d92.js","./app.config.84580bd5.js","./entry.159b849e.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./welcome.72386f73.js"),["./welcome.72386f73.js","./composables.e311f841.js","./app.config.84580bd5.js","./entry.bdaf3d92.js","./entry.159b849e.css","./query.ebc6f75b.js","./cookie.76e46440.js","./query.c3f7607a.js","./utils.c66fdb6a.js","./app.f010f54e.js","./ContentDoc.24376620.js","./ContentRenderer.e74518c1.js","./ContentRendererMarkdown.dcb9d6b2.js","./_commonjsHelpers.0ee3bad0.js","./ContentQuery.a3b90c1d.js","./ContentList.4bb06c6b.js","./ContentSlot.f74f7861.js","./DocumentDrivenEmpty.774772d4.js","./DocumentDrivenNotFound.607c42ce.js","./Markdown.1844a210.js","./ProseCode.9e51589d.js","./ProseCode.e63e49c6.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./entry.bdaf3d92.js").then(t=>t.l),["./entry.bdaf3d92.js","./app.config.84580bd5.js","./entry.159b849e.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>Promise.resolve().then(()=>G),void 0,import.meta.url).then(t=>t.default||t));i(()=>r(()=>Promise.resolve().then(()=>K),void 0,import.meta.url).then(t=>t.default||t));i(()=>r(()=>Promise.resolve().then(()=>Y),void 0,import.meta.url).then(t=>t.default||t));i(()=>r(()=>Promise.resolve().then(()=>Z),void 0,import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./app.config.84580bd5.js").then(t=>t.aG),[],import.meta.url).then(t=>t.default||t));i(()=>r(()=>Promise.resolve().then(()=>rt),void 0,import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./entry.bdaf3d92.js").then(t=>t.p),["./entry.bdaf3d92.js","./app.config.84580bd5.js","./entry.159b849e.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.NoScript));i(()=>r(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.Link));i(()=>r(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.Base));i(()=>r(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.Title));i(()=>r(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.Meta));i(()=>r(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.Style));i(()=>r(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.Head));i(()=>r(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.Html));i(()=>r(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.Body));const st=m({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(t){const{query:e}=j(t),o=A(()=>{var n;return typeof((n=e.value)==null?void 0:n.params)=="function"?e.value.params():e.value});if(!o.value&&M("dd-navigation").value){const{navigation:n}=H();return{navigation:n}}const{data:a}=await C(`content-navigation-${c(o.value)}`,()=>q(o.value));return{navigation:a}},render(t){const e=N(),{navigation:o}=t,a=l=>p(k,{to:l._path},()=>l.title),n=(l,d)=>p("ul",d?{"data-level":d}:null,l.map(_=>_.children?p("li",null,[a(_),n(_.children,d+1)]):p("li",null,a(_)))),u=l=>n(l,0);return e!=null&&e.default?e.default({navigation:o,...this.$attrs}):u(o)}}),ft=Object.freeze(Object.defineProperty({__proto__:null,default:st},Symbol.toStringTag,{value:"Module"}));export{st as default};