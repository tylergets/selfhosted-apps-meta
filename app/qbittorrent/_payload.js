export default (function(a,b,c,d,e,f,g,h,i,j){return {data:{qbittorrent:{_path:"\u002Fapps\u002Fqbittorrent",_dir:"apps",_draft:a,_partial:a,_locale:"en",id:b,name:b,icon:"https:\u002F\u002Fraw.githubusercontent.com\u002Fwalkxcode\u002Fdashboard-icons\u002Fmain\u002Fpng\u002Fqbittorrent.png",links:[{type:"docker",url:"https:\u002F\u002Fhub.docker.com\u002Fr\u002Flinuxserver\u002Fqbittorrent"},{type:"docs",url:"https:\u002F\u002Fdocs.linuxserver.io\u002Fimages\u002Fdocker-qbittorrent"}],containers:[{name:b,image:"linuxserver\u002Fqbittorrent",env:[{id:c,key:c,description:"User ID",default:d},{id:e,key:e,description:"Group ID",default:d},{id:f,key:f,description:"Timezone",default:"America\u002FNew_York"}],volumes:[{container:"\u002Fconfig",description:"Image exposes volume mounted at \u002Fconfig",key:"config"}],ports:[{container:g,description:"Image exposes port 6881 over tcp",protocol:h,web:i},{container:g,description:"Image exposes port 6881 over udp",protocol:"udp",web:a},{container:8080,description:"Image exposes port 8080 over tcp",protocol:h,web:i}]}],_id:"content:apps:qbittorrent.json",_type:j,title:"Qbittorrent",_source:"content",_file:"apps\u002Fqbittorrent.json",_extension:j}},prerenderedAt:1675090576981}}(false,"qbittorrent","PUID","100","PGID","TZ",6881,"tcp",true,"json"))