export default (function(a,b,c,d,e,f,g,h,i){return {data:{grocy:{_path:"\u002Fapps\u002Fgrocy",_dir:"apps",_draft:b,_partial:b,_locale:"en",id:a,name:a,icon:"https:\u002F\u002Fraw.githubusercontent.com\u002Fwalkxcode\u002Fdashboard-icons\u002Fmain\u002Fpng\u002Fgrocy.png",links:[{type:"docker",url:"https:\u002F\u002Fhub.docker.com\u002Fr\u002Flinuxserver\u002Fgrocy"},{type:"docs",url:"https:\u002F\u002Fdocs.linuxserver.io\u002Fimages\u002Fdocker-grocy"}],containers:[{name:a,image:"linuxserver\u002Fgrocy",env:[{id:c,key:c,description:"User ID",default:d},{id:e,key:e,description:"Group ID",default:d},{id:f,key:f,description:"Timezone",default:"America\u002FNew_York"}],volumes:[{container:"\u002Fconfig",description:"Image exposes volume mounted at \u002Fconfig",key:"config"}],ports:[{container:443,description:"Image exposes port 443 over tcp",protocol:g,web:h},{container:80,description:"Image exposes port 80 over tcp",protocol:g,web:h}]}],_id:"content:apps:grocy.json",_type:i,title:"Grocy",_source:"content",_file:"apps\u002Fgrocy.json",_extension:i}},prerenderedAt:1675086288800}}("grocy",false,"PUID","100","PGID","TZ","tcp",true,"json"))