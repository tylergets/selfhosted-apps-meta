export default (function(a,b,c,d,e,f,g,h,i,j){return {data:{transmission:{_path:"\u002Fapps\u002Ftransmission",_dir:"apps",_draft:a,_partial:a,_locale:"en",id:b,name:b,icon:"https:\u002F\u002Fraw.githubusercontent.com\u002Fwalkxcode\u002Fdashboard-icons\u002Fmain\u002Fpng\u002Ftransmission.png",links:[{type:"docker",url:"https:\u002F\u002Fhub.docker.com\u002Fr\u002Flinuxserver\u002Ftransmission"},{type:"docs",url:"https:\u002F\u002Fdocs.linuxserver.io\u002Fimages\u002Fdocker-transmission"}],containers:[{name:b,image:"linuxserver\u002Ftransmission",env:[{id:c,key:c,description:"User ID",default:d},{id:e,key:e,description:"Group ID",default:d},{id:f,key:f,description:"Timezone",default:"America\u002FNew_York"}],volumes:[{container:"\u002Fconfig",description:"Image exposes volume mounted at \u002Fconfig",key:"config"}],ports:[{container:g,description:"Image exposes port 51413 over tcp",protocol:h,web:i},{container:g,description:"Image exposes port 51413 over udp",protocol:"udp",web:a},{container:9091,description:"Image exposes port 9091 over tcp",protocol:h,web:i}]}],_id:"content:apps:transmission.json",_type:j,title:"Transmission",_source:"content",_file:"apps\u002Ftransmission.json",_extension:j}},prerenderedAt:1675086289420}}(false,"transmission","PUID","100","PGID","TZ",51413,"tcp",true,"json"))