export default (function(a,b,c,d,e,f,g){return {data:{freshrss:{_path:"\u002Fapps\u002Ffreshrss",_dir:"apps",_draft:b,_partial:b,_locale:"en",id:a,name:a,description:"[{{ project_name|capitalize }}]({{ project_url }}) is a free, self-hostable aggregator for rss feeds.",icon:"https:\u002F\u002Fraw.githubusercontent.com\u002Flinuxserver\u002Fdocker-templates\u002Fmaster\u002Flinuxserver.io\u002Fimg\u002Ffreshrss-banner.png",links:[{type:"docker",url:"https:\u002F\u002Fhub.docker.com\u002Fr\u002Flinuxserver\u002Ffreshrss"},{type:"docs",url:"https:\u002F\u002Fdocs.linuxserver.io\u002Fimages\u002Fdocker-freshrss"}],containers:[{name:a,image:"linuxserver\u002Ffreshrss",env:[{id:c,key:c,description:"User ID",default:d},{id:e,key:e,description:"Group ID",default:d},{id:f,key:f,description:"Timezone",default:"America\u002FNew_York"}],volumes:[{container:"\u002Fconfig",description:"Local storage for freshrss site files.",key:"config"}],ports:[{container:"80",description:"WebUI"}]}],_id:"content:apps:freshrss.json",_type:g,title:"Freshrss",_source:"content",_file:"apps\u002Ffreshrss.json",_extension:g}},prerenderedAt:1675116538973}}("freshrss",false,"PUID","100","PGID","TZ","json"))