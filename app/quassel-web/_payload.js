export default (function(a,b,c,d,e,f,g){return {data:{"quassel-web":{_path:"\u002Fapps\u002Fquassel-web",_dir:"apps",_draft:b,_partial:b,_locale:"en",id:a,name:a,icon:"https:\u002F\u002Fraw.githubusercontent.com\u002Fwalkxcode\u002Fdashboard-icons\u002Fmain\u002Fpng\u002Fquasselweb.png",links:[{type:"docker",url:"https:\u002F\u002Fhub.docker.com\u002Fr\u002Flinuxserver\u002Fquassel-web"},{type:"docs",url:"https:\u002F\u002Fdocs.linuxserver.io\u002Fimages\u002Fdocker-quassel-web"}],containers:[{name:a,image:"linuxserver\u002Fquassel-web",env:[{id:c,key:c,description:"User ID",default:d},{id:e,key:e,description:"Group ID",default:d},{id:f,key:f,description:"Timezone",default:"America\u002FNew_York"}],volumes:[{container:"\u002Fconfig",description:"Image exposes volume mounted at \u002Fconfig",key:"config"}],ports:[{container:64443,description:"Image exposes port 64443 over tcp",protocol:"tcp",web:true}]}],_id:"content:apps:quassel-web.json",_type:g,title:"Quassel Web",_source:"content",_file:"apps\u002Fquassel-web.json",_extension:g}},prerenderedAt:1675086525717}}("quassel-web",false,"PUID","100","PGID","TZ","json"))