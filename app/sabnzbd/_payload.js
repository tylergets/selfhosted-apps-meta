export default (function(a,b,c,d,e,f,g){return {data:{sabnzbd:{_path:"\u002Fapps\u002Fsabnzbd",_dir:"apps",_draft:b,_partial:b,_locale:"en",id:a,name:a,icon:"https:\u002F\u002Fraw.githubusercontent.com\u002Fwalkxcode\u002Fdashboard-icons\u002Fmain\u002Fpng\u002Fsabnzbd.png",links:[{type:"docker",url:"https:\u002F\u002Fhub.docker.com\u002Fr\u002Flinuxserver\u002Fsabnzbd"},{type:"docs",url:"https:\u002F\u002Fdocs.linuxserver.io\u002Fimages\u002Fdocker-sabnzbd"}],containers:[{name:a,image:"linuxserver\u002Fsabnzbd",env:[{id:c,key:c,description:"User ID",default:d},{id:e,key:e,description:"Group ID",default:d},{id:f,key:f,description:"Timezone",default:"America\u002FNew_York"}],volumes:[{container:"\u002Fconfig",description:"Image exposes volume mounted at \u002Fconfig",key:"config"}],ports:[{container:8080,description:"Image exposes port 8080 over tcp",protocol:"tcp",web:true}]}],_id:"content:apps:sabnzbd.json",_type:g,title:"Sabnzbd",_source:"content",_file:"apps\u002Fsabnzbd.json",_extension:g}},prerenderedAt:1675086441856}}("sabnzbd",false,"PUID","100","PGID","TZ","json"))