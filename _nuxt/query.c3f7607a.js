const p=(r,t)=>t.split(".").reduce((e,s)=>e&&e[s],r),a=(r,t)=>Object.keys(r).filter(t).reduce((e,s)=>Object.assign(e,{[s]:r[s]}),{}),h=r=>t=>Array.isArray(t)?t.map(e=>r(e)):r(t),l=r=>{const t=[],e=[];for(const s of r)["$","_"].includes(s)?t.push(s):e.push(s);return{prefixes:t,properties:e}},w=(r=[])=>t=>{if(r.length===0||!t)return t;const{prefixes:e,properties:s}=l(r);return a(t,i=>!s.includes(i)&&!e.includes(i[0]))},d=(r=[])=>t=>{if(r.length===0||!t)return t;const{prefixes:e,properties:s}=l(r);return a(t,i=>s.includes(i)||e.includes(i[0]))},g=(r,t)=>{const e=new Intl.Collator(t.$locale,{numeric:t.$numeric,caseFirst:t.$caseFirst,sensitivity:t.$sensitivity}),s=Object.keys(t).filter(i=>!i.startsWith("$"));for(const i of s)r=r.sort((n,u)=>{const o=[p(n,i),p(u,i)].map(y=>{if(y!==null)return y instanceof Date?y.toISOString():y});return t[i]===-1&&o.reverse(),e.compare(o[0],o[1])});return r},A=(r,t="Expected an array")=>{if(!Array.isArray(r))throw new TypeError(t)},c=r=>Array.isArray(r)?r:r?[r]:[],f=["sort","where","only","without"],$=(r,t)=>{const e={...t};for(const n of f)e[n]&&(e[n]=c(e[n]));const s=(n,u=o=>o)=>(...o)=>(e[n]=u(...o),i),i={params:()=>e,only:s("only",c),without:s("without",c),where:s("where",n=>[...c(e.where),n]),sort:s("sort",n=>[...c(e.sort),...c(n)]),limit:s("limit",n=>parseInt(String(n),10)),skip:s("skip",n=>parseInt(String(n),10)),find:()=>r(i),findOne:()=>(e.first=!0,r(i)),findSurround:(n,u)=>(e.surround={query:n,...u},r(i)),locale:n=>i.where({_locale:n})};return i};export{A as a,h as b,$ as c,d,c as e,p as g,g as s,w};
