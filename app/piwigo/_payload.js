export default (function(a,b,c,d,e,f,g,h,i){return {data:{piwigo:{_path:"\u002Fapps\u002Fpiwigo",_dir:"apps",_draft:b,_partial:b,_locale:"en",id:a,name:a,icon:"https:\u002F\u002Fraw.githubusercontent.com\u002Fwalkxcode\u002Fdashboard-icons\u002Fmain\u002Fpng\u002Fpiwigo.png",links:[{type:"docker",url:"https:\u002F\u002Fhub.docker.com\u002Fr\u002Flinuxserver\u002Fpiwigo"},{type:"docs",url:"https:\u002F\u002Fdocs.linuxserver.io\u002Fimages\u002Fdocker-piwigo"}],containers:[{name:a,image:"linuxserver\u002Fpiwigo",env:[{id:c,key:c,description:"User ID",default:d},{id:e,key:e,description:"Group ID",default:d},{id:f,key:f,description:"Timezone",default:"America\u002FNew_York"}],volumes:[{container:"\u002Fconfig",description:"Image exposes volume mounted at \u002Fconfig",key:"config"},{container:"\u002Fgallery",description:"Image exposes volume mounted at \u002Fgallery"}],ports:[{container:443,description:"Image exposes port 443 over tcp",protocol:g,web:h},{container:80,description:"Image exposes port 80 over tcp",protocol:g,web:h}]}],_id:"content:apps:piwigo.json",_type:i,title:"Piwigo",_source:"content",_file:"apps\u002Fpiwigo.json",_extension:i}},prerenderedAt:1675086030193}}("piwigo",false,"PUID","100","PGID","TZ","tcp",true,"json"))