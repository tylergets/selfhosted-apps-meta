export default (function(a,b,c,d,e,f,g,h,i){return {data:{emby:{_path:"\u002Fapps\u002Femby",_dir:"apps",_draft:b,_partial:b,_locale:"en",id:a,name:a,icon:"https:\u002F\u002Fraw.githubusercontent.com\u002Fwalkxcode\u002Fdashboard-icons\u002Fmain\u002Fpng\u002Femby.png",links:[{type:"docker",url:"https:\u002F\u002Fhub.docker.com\u002Fr\u002Flinuxserver\u002Femby"},{type:"docs",url:"https:\u002F\u002Fdocs.linuxserver.io\u002Fimages\u002Fdocker-emby"}],containers:[{name:a,image:"linuxserver\u002Femby",env:[{id:c,key:c,description:"User ID",default:d},{id:e,key:e,description:"Group ID",default:d},{id:f,key:f,description:"Timezone",default:"America\u002FNew_York"}],volumes:[{container:"\u002Fconfig",description:"Image exposes volume mounted at \u002Fconfig",key:"config"}],ports:[{container:8096,description:"Image exposes port 8096 over tcp",protocol:g,web:h},{container:8920,description:"Image exposes port 8920 over tcp",protocol:g,web:h}]}],_id:"content:apps:emby.json",_type:i,title:"Emby",_source:"content",_file:"apps\u002Femby.json",_extension:i}},prerenderedAt:1675086441227}}("emby",false,"PUID","100","PGID","TZ","tcp",true,"json"))