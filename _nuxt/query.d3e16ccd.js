import{x as T,D as x,ao as U,ap as S,F as A,I as L,z as $,K as C,aq as H,u as M,ar as F}from"./app.config.84580bd5.js";import{c as k,_ as N}from"./entry.85c929d5.js";import{u as I}from"./cookie.76e46440.js";import{c as K}from"./query.c3f7607a.js";import{w as D,s as Q}from"./utils.c66fdb6a.js";const W=()=>null;function dt(...n){var f;const s=typeof n[n.length-1]=="string"?n.pop():void 0;typeof n[0]!="string"&&n.unshift(s);let[r,e,t={}]=n;if(typeof r!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof e!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");t.server=t.server??!0,t.default=t.default??W,t.lazy=t.lazy??!1,t.immediate=t.immediate??!0;const a=T(),o=()=>a.isHydrating?a.payload.data[r]:a.static.data[r],u=()=>o()!==void 0;a._asyncData[r]||(a._asyncData[r]={data:x(o()??((f=t.default)==null?void 0:f.call(t))??null),pending:x(!u()),error:x(a.payload._errors[r]?k(a.payload._errors[r]):null)});const i={...a._asyncData[r]};i.refresh=i.execute=(d={})=>{if(a._asyncDataPromises[r]){if(d.dedupe===!1)return a._asyncDataPromises[r];a._asyncDataPromises[r].cancelled=!0}if(d._initial&&u())return o();i.pending.value=!0;const y=new Promise((c,_)=>{try{c(e(a))}catch(B){_(B)}}).then(c=>{if(y.cancelled)return a._asyncDataPromises[r];t.transform&&(c=t.transform(c)),t.pick&&(c=q(c,t.pick)),i.data.value=c,i.error.value=null}).catch(c=>{var _;if(y.cancelled)return a._asyncDataPromises[r];i.error.value=c,i.data.value=L(((_=t.default)==null?void 0:_.call(t))??null)}).finally(()=>{y.cancelled||(i.pending.value=!1,a.payload.data[r]=i.data.value,i.error.value&&(a.payload._errors[r]=k(i.error.value)),delete a._asyncDataPromises[r])});return a._asyncDataPromises[r]=y,a._asyncDataPromises[r]};const l=()=>i.refresh({_initial:!0}),h=t.server!==!1&&a.payload.serverRendered;{const d=$();if(d&&!d._nuxtOnBeforeMountCbs){d._nuxtOnBeforeMountCbs=[];const c=d._nuxtOnBeforeMountCbs;d&&(U(()=>{c.forEach(_=>{_()}),c.splice(0,c.length)}),S(()=>c.splice(0,c.length)))}h&&a.isHydrating&&u()?i.pending.value=!1:d&&(a.payload.serverRendered&&a.isHydrating||t.lazy)&&t.immediate?d._nuxtOnBeforeMountCbs.push(l):t.immediate&&l(),t.watch&&A(t.watch,()=>i.refresh());const y=a.hook("app:data:refresh",c=>{if(!c||c.includes(r))return i.refresh()});d&&S(y)}const p=Promise.resolve(a._asyncDataPromises[r]).then(()=>i);return Object.assign(p,i),p}function q(n,s){const r={};for(const e of s)r[e]=n[e];return r}const G={ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1};function J(n,s={}){s={...G,...s};const r=j(s);return r.dispatch(n),r.toString()}function j(n){const s=[];let r=[];const e=t=>{s.push(t)};return{toString(){return s.join("")},getContext(){return r},dispatch(t){return n.replacer&&(t=n.replacer(t)),this["_"+(t===null?"null":typeof t)](t)},_object(t){const a=/\[object (.*)]/i,o=Object.prototype.toString.call(t),u=a.exec(o),i=u?u[1].toLowerCase():"unknown:["+o.toLowerCase()+"]";let l=null;if((l=r.indexOf(t))>=0)return this.dispatch("[CIRCULAR:"+l+"]");if(r.push(t),typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(t))return e("buffer:"),e(t.toString("utf8"));if(i!=="object"&&i!=="function"&&i!=="asyncfunction")if(this["_"+i])this["_"+i](t);else{if(n.ignoreUnknown)return e("["+i+"]");throw new Error('Unknown object type "'+i+'"')}else{let h=Object.keys(t);n.unorderedObjects&&(h=h.sort()),n.respectType!==!1&&!v(t)&&h.splice(0,0,"prototype","__proto__","letructor"),n.excludeKeys&&(h=h.filter(function(p){return!n.excludeKeys(p)})),e("object:"+h.length+":");for(const p of h)this.dispatch(p),e(":"),n.excludeValues||this.dispatch(t[p]),e(",")}},_array(t,a){if(a=typeof a<"u"?a:n.unorderedArrays!==!1,e("array:"+t.length+":"),!a||t.length<=1){for(const i of t)this.dispatch(i);return}const o=[],u=t.map(i=>{const l=j(n);return l.dispatch(i),o.push(l.getContext()),l.toString()});return r=[...r,...o],u.sort(),this._array(u,!1)},_date(t){return e("date:"+t.toJSON())},_symbol(t){return e("symbol:"+t.toString())},_error(t){return e("error:"+t.toString())},_boolean(t){return e("bool:"+t.toString())},_string(t){e("string:"+t.length+":"),e(t.toString())},_function(t){e("fn:"),v(t)?this.dispatch("[native]"):this.dispatch(t.toString()),n.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(t.name)),n.respectFunctionProperties&&this._object(t)},_number(t){return e("number:"+t.toString())},_xml(t){return e("xml:"+t.toString())},_null(){return e("Null")},_undefined(){return e("Undefined")},_regexp(t){return e("regex:"+t.toString())},_uint8array(t){return e("uint8array:"),this.dispatch(Array.prototype.slice.call(t))},_uint8clampedarray(t){return e("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(t))},_int8array(t){return e("int8array:"),this.dispatch(Array.prototype.slice.call(t))},_uint16array(t){return e("uint16array:"),this.dispatch(Array.prototype.slice.call(t))},_int16array(t){return e("int16array:"),this.dispatch(Array.prototype.slice.call(t))},_uint32array(t){return e("uint32array:"),this.dispatch(Array.prototype.slice.call(t))},_int32array(t){return e("int32array:"),this.dispatch(Array.prototype.slice.call(t))},_float32array(t){return e("float32array:"),this.dispatch(Array.prototype.slice.call(t))},_float64array(t){return e("float64array:"),this.dispatch(Array.prototype.slice.call(t))},_arraybuffer(t){return e("arraybuffer:"),this.dispatch(new Uint8Array(t))},_url(t){return e("url:"+t.toString())},_map(t){e("map:");const a=[...t];return this._array(a,n.unorderedSets!==!1)},_set(t){e("set:");const a=[...t];return this._array(a,n.unorderedSets!==!1)},_file(t){return e("file:"),this.dispatch([t.name,t.size,t.type,t.lastModfied])},_blob(){if(n.ignoreUnknown)return e("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},_domwindow(){return e("domwindow")},_bigint(t){return e("bigint:"+t.toString())},_process(){return e("process")},_timer(){return e("timer")},_pipe(){return e("pipe")},_tcp(){return e("tcp")},_udp(){return e("udp")},_tty(){return e("tty")},_statwatcher(){return e("statwatcher")},_securecontext(){return e("securecontext")},_connection(){return e("connection")},_zlib(){return e("zlib")},_context(){return e("context")},_nodescript(){return e("nodescript")},_httpparser(){return e("httpparser")},_dataview(){return e("dataview")},_signal(){return e("signal")},_fsevent(){return e("fsevent")},_tlswrap(){return e("tlswrap")}}}function v(n){return typeof n!="function"?!1:/^function\s+\w*\s*\(\s*\)\s*{\s+\[native code]\s+}$/i.exec(Function.prototype.toString.call(n))!=null}class m{constructor(s,r){s=this.words=s||[],this.sigBytes=r!==void 0?r:s.length*4}toString(s){return(s||V).stringify(this)}concat(s){if(this.clamp(),this.sigBytes%4)for(let r=0;r<s.sigBytes;r++){const e=s.words[r>>>2]>>>24-r%4*8&255;this.words[this.sigBytes+r>>>2]|=e<<24-(this.sigBytes+r)%4*8}else for(let r=0;r<s.sigBytes;r+=4)this.words[this.sigBytes+r>>>2]=s.words[r>>>2];return this.sigBytes+=s.sigBytes,this}clamp(){this.words[this.sigBytes>>>2]&=4294967295<<32-this.sigBytes%4*8,this.words.length=Math.ceil(this.sigBytes/4)}clone(){return new m([...this.words])}}const V={stringify(n){const s=[];for(let r=0;r<n.sigBytes;r++){const e=n.words[r>>>2]>>>24-r%4*8&255;s.push((e>>>4).toString(16),(e&15).toString(16))}return s.join("")}},X={stringify(n){const s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=[];for(let e=0;e<n.sigBytes;e+=3){const t=n.words[e>>>2]>>>24-e%4*8&255,a=n.words[e+1>>>2]>>>24-(e+1)%4*8&255,o=n.words[e+2>>>2]>>>24-(e+2)%4*8&255,u=t<<16|a<<8|o;for(let i=0;i<4&&e*8+i*6<n.sigBytes*8;i++)r.push(s.charAt(u>>>6*(3-i)&63))}return r.join("")}},Y={parse(n){const s=n.length,r=[];for(let e=0;e<s;e++)r[e>>>2]|=(n.charCodeAt(e)&255)<<24-e%4*8;return new m(r,s)}},Z={parse(n){return Y.parse(unescape(encodeURIComponent(n)))}};class tt{constructor(){this._minBufferSize=0,this.blockSize=512/32,this.reset()}reset(){this._data=new m,this._nDataBytes=0}_append(s){typeof s=="string"&&(s=Z.parse(s)),this._data.concat(s),this._nDataBytes+=s.sigBytes}_doProcessBlock(s,r){}_process(s){let r,e=this._data.sigBytes/(this.blockSize*4);s?e=Math.ceil(e):e=Math.max((e|0)-this._minBufferSize,0);const t=e*this.blockSize,a=Math.min(t*4,this._data.sigBytes);if(t){for(let o=0;o<t;o+=this.blockSize)this._doProcessBlock(this._data.words,o);r=this._data.words.splice(0,t),this._data.sigBytes-=a}return new m(r,a)}}class et extends tt{update(s){return this._append(s),this._process(),this}finalize(s){s&&this._append(s)}}const rt=[1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225],st=[1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998],g=[];class nt extends et{constructor(){super(),this.reset()}reset(){super.reset(),this._hash=new m([...rt])}_doProcessBlock(s,r){const e=this._hash.words;let t=e[0],a=e[1],o=e[2],u=e[3],i=e[4],l=e[5],h=e[6],p=e[7];for(let f=0;f<64;f++){if(f<16)g[f]=s[r+f]|0;else{const w=g[f-15],O=(w<<25|w>>>7)^(w<<14|w>>>18)^w>>>3,b=g[f-2],R=(b<<15|b>>>17)^(b<<13|b>>>19)^b>>>10;g[f]=O+g[f-7]+R+g[f-16]}const d=i&l^~i&h,y=t&a^t&o^a&o,c=(t<<30|t>>>2)^(t<<19|t>>>13)^(t<<10|t>>>22),_=(i<<26|i>>>6)^(i<<21|i>>>11)^(i<<7|i>>>25),B=p+_+d+st[f]+g[f],E=c+y;p=h,h=l,l=i,i=u+B|0,u=o,o=a,a=t,t=B+E|0}e[0]=e[0]+t|0,e[1]=e[1]+a|0,e[2]=e[2]+o|0,e[3]=e[3]+u|0,e[4]=e[4]+i|0,e[5]=e[5]+l|0,e[6]=e[6]+h|0,e[7]=e[7]+p|0}finalize(s){super.finalize(s);const r=this._nDataBytes*8,e=this._data.sigBytes*8;return this._data.words[e>>>5]|=128<<24-e%32,this._data.words[(e+64>>>9<<4)+14]=Math.floor(r/4294967296),this._data.words[(e+64>>>9<<4)+15]=r,this._data.sigBytes=this._data.words.length*4,this._process(),this._hash}}function at(n){return new nt().finalize(n).toString(X)}function P(n,s={}){const r=typeof n=="string"?n:J(n,s);return at(r).slice(0,10)}function z(n){return JSON.stringify(n,it)}function it(n,s){return s instanceof RegExp?`--REGEX ${s.toString()}`:s}const ot=n=>{let s=z(n);return s=typeof Buffer<"u"?Buffer.from(s).toString("base64"):btoa(s),s=s.replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,""),(s.match(/.{1,100}/g)||[]).join("/")},ct=()=>async n=>{const{content:s}=C().public,r=n.params(),e=s.experimental.stripQueryParameters?D(`/query/${`${P(r)}.${s.integrity}`}/${ot(r)}.json`):D(`/query/${P(r)}.${s.integrity}.json`);if(Q())return(await N(()=>import("./client-db.c833819d.js"),["./client-db.c833819d.js","./app.config.84580bd5.js","./cookie.76e46440.js","./query.c3f7607a.js","./_commonjsHelpers.0ee3bad0.js"],import.meta.url).then(o=>o.useContentDatabase())).fetch(n);const t=await $fetch(e,{method:"GET",responseType:"json",params:s.experimental.stripQueryParameters?void 0:{_params:z(r),previewToken:I("previewToken").value}});if(typeof t=="string"&&t.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return t};function yt(n,...s){const{content:r}=C().public,e=K(ct(),typeof n!="string"?n:{});let t;typeof n=="string"&&(t=H(M(n,...s)));const a=e.params;return e.params=()=>{var u,i,l;const o=a();return t&&(o.where=o.where||[],o.first&&(o.where||[]).length===0?o.where.push({_path:F(t)}):o.where.push({_path:new RegExp(`^${t.replace(/[-[\]{}()*+.,^$\s/]/g,"\\$&")}`)})),(u=o.sort)!=null&&u.length||(o.sort=[{_file:1,$numeric:!0}]),r.locales.length&&((l=(i=o.where)==null?void 0:i.find(p=>p._locale))!=null&&l._locale||(o.where=o.where||[],o.where.push({_locale:r.defaultLocale}))),o},e}export{ot as e,P as h,z as j,yt as q,dt as u};
//# sourceMappingURL=query.d3e16ccd.js.map
