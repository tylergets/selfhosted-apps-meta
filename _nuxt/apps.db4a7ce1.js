import{aw as f,D as v,T as x,I as s,a9 as l,aa as i,at as e,aB as h,y as g,ax as o,ay as y,az as w,aA as C,ab as b,ac as k,aC as B,au as V}from"./app.config.84580bd5.js";import{v as A}from"./entry.b0a8cf22.js";import{u as D,q as N}from"./query.eee5894f.js";import"./cookie.76e46440.js";import"./query.c3f7607a.js";import"./utils.c66fdb6a.js";const T={key:0,class:"flex flex-col gap-2"},L={class:"flex gap-4 mb-2 justify-between"},q={class:"flex items-center gap-4"},E=e("label",{for:"search"},"Search",-1),S={class:"flex items-center gap-2"},j=["src"],z={class:"text-gray-400"},$={__name:"apps",async setup(F){let n,c;const{data:r,pending:p}=([n,c]=f(()=>D(()=>N("/apps").find(),"$dpBXCE1TsH")),n=await n,c(),n),a=v(""),u=x(()=>a.value?r.value.filter(d=>d.name.toLowerCase().includes(a.value.toLowerCase())):r.value);return(d,_)=>{const m=V;return s(p)?C("",!0):(l(),i("div",T,[e("div",null,[e("div",L,[e("div",q,[E,h(e("input",{type:"text",class:"border border-black","onUpdate:modelValue":_[0]||(_[0]=t=>g(a)?a.value=t:null)},null,512),[[A,s(a)]])]),e("div",null,o(s(u).length)+" / "+o(s(r).length),1)])]),(l(!0),i(y,null,w(s(u),t=>(l(),i("div",null,[b(m,{to:"/app/"+t.id},{default:k(()=>[e("div",S,[e("img",{src:t.icon,class:"w-5 h-5"},null,8,j),e("div",null,[B(o(t.name)+" - ",1),e("span",z,o(t.containers[0].image),1)])])]),_:2},1032,["to"])]))),256))]))}}};export{$ as default};