export default (function(a,b,c,d,e,f,g,h,i){return {data:{wireshark:{_path:"\u002Fapps\u002Fwireshark",_dir:"apps",_draft:b,_partial:b,_locale:"en",id:a,name:a,icon:"https:\u002F\u002Fraw.githubusercontent.com\u002Fwalkxcode\u002Fdashboard-icons\u002Fmain\u002Fpng\u002Fwireshark.png",links:[{type:"docker",url:"https:\u002F\u002Fhub.docker.com\u002Fr\u002Flinuxserver\u002Fwireshark"},{type:"docs",url:"https:\u002F\u002Fdocs.linuxserver.io\u002Fimages\u002Fdocker-wireshark"}],containers:[{name:a,image:"linuxserver\u002Fwireshark",env:[{id:c,key:c,description:"User ID",default:d},{id:e,key:e,description:"Group ID",default:d},{id:f,key:f,description:"Timezone",default:"America\u002FNew_York"}],volumes:[{container:"\u002Fconfig",description:"Image exposes volume mounted at \u002Fconfig",key:"config"}],ports:[{container:3000,description:"Image exposes port 3000 over tcp",protocol:g,web:h},{container:3389,description:"Image exposes port 3389 over tcp",protocol:g,web:h}]}],_id:"content:apps:wireshark.json",_type:i,title:"Wireshark",_source:"content",_file:"apps\u002Fwireshark.json",_extension:i}},prerenderedAt:1675086030511}}("wireshark",false,"PUID","100","PGID","TZ","tcp",true,"json"))