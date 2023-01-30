export default (function(a,b,c,d,e,f,g){return {data:{jackett:{_path:"\u002Fapps\u002Fjackett",_dir:"apps",_draft:b,_partial:b,_locale:"en",id:a,name:a,description:"[{{ project_name|capitalize }}]({{ project_url }}) works as a proxy server: it translates queries from apps (Sonarr, SickRage, CouchPotato, Mylar, etc) into tracker-site-specific http queries, parses the html response, then sends results back to the requesting software. This allows for getting recent uploads (like RSS) and performing searches. Jackett is a single repository of maintained indexer scraping & translation logic - removing the burden from other apps.",icon:"https:\u002F\u002Fraw.githubusercontent.com\u002Flinuxserver\u002Fdocker-templates\u002Fmaster\u002Flinuxserver.io\u002Fimg\u002Fjackett-banner.png",links:[{type:"docker",url:"https:\u002F\u002Fhub.docker.com\u002Fr\u002Flinuxserver\u002Fjackett"},{type:"docs",url:"https:\u002F\u002Fdocs.linuxserver.io\u002Fimages\u002Fdocker-jackett"}],containers:[{name:a,image:"linuxserver\u002Fjackett",env:[{id:c,key:c,description:"User ID",default:d},{id:e,key:e,description:"Group ID",default:d},{id:f,key:f,description:"Timezone",default:"America\u002FNew_York"}],volumes:[{container:"\u002Fconfig",description:"Where Jackett should store its config file.",key:"config"},{container:"\u002Fdownloads",description:"Path to torrent blackhole."}],ports:[{container:"9117",description:"WebUI"}]}],_id:"content:apps:jackett.json",_type:g,title:"Jackett",_source:"content",_file:"apps\u002Fjackett.json",_extension:g}},prerenderedAt:1675116539102}}("jackett",false,"PUID","100","PGID","TZ","json"))