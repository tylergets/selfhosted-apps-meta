import{I as h,K as g,F as C,aa as y,C as w,X as v,am as D,an as S,h as r}from"./_commonjsHelpers.4216f5ac.js";import{u as _}from"./composables.dc68efa6.js";import q from"./ContentRenderer.b7a425ae.js";import x from"./ContentQuery.d766821f.js";import"./ContentRendererMarkdown.64c83532.js";import"./index.a6ef77ff.js";import"./query.27f48e32.js";import"./entry.9c3d475e.js";import"./cookie.c01368a7.js";import"./query.c3f7607a.js";import"./utils.acd428c8.js";const a=(p,e=y())=>{const f=h(p),u=g();C(()=>h(p),(t=f)=>{if(!e.path||!t)return;const n=Object.assign({},(t==null?void 0:t.head)||{});n.meta=[...n.meta||[]],n.link=[...n.link||[]];const m=n.title||(t==null?void 0:t.title);m&&(n.title=m),u.public.content.host;const c=(n==null?void 0:n.description)||(t==null?void 0:t.description);c&&n.meta.filter(i=>i.name==="description").length===0&&n.meta.push({name:"description",content:c}),n!=null&&n.image||(t==null||t.image),w(()=>_(n))},{immediate:!0})},I=v({name:"ContentDoc",props:{tag:{type:String,required:!1,default:"div"},excerpt:{type:Boolean,default:!1},path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0},head:{type:Boolean,required:!1,default:!0}},render(p){const e=D(),{tag:f,excerpt:u,path:s,query:t,head:n}=p,m={...t||{},path:s||(t==null?void 0:t.path)||S(y().path),find:"one"},c=(i,o)=>r("pre",null,JSON.stringify({message:"You should use slots with <ContentDoc>",slot:i,data:o},null,2));return r(x,m,{default:e!=null&&e.default?({data:i,refresh:o,isPartial:d})=>{var l;return n&&a(i),(l=e.default)==null?void 0:l.call(e,{doc:i,refresh:o,isPartial:d,excerpt:u,...this.$attrs})}:({data:i})=>(n&&a(i),r(q,{value:i,excerpt:u,tag:f,...this.$attrs},{empty:o=>e!=null&&e.empty?e.empty(o):c("default",i)})),empty:i=>{var o;return((o=e==null?void 0:e.empty)==null?void 0:o.call(e,i))||r("p",null,"Document is empty, overwrite this content with #empty slot in <ContentDoc>.")},"not-found":i=>{var o;return((o=e==null?void 0:e["not-found"])==null?void 0:o.call(e,i))||r("p",null,"Document not found, overwrite this content with #not-found slot in <ContentDoc>.")}})}});export{I as default};
//# sourceMappingURL=ContentDoc.2f46965f.js.map
