export default (function(a,b,c,d,e,f,g){return {data:{"calibre-web":{_path:"\u002Fapps\u002Fcalibre-web",_dir:"apps",_draft:b,_partial:b,_locale:"en",id:a,name:a,description:"[{{ project_name|capitalize }}]({{ project_url }}) is a web app providing a clean interface for browsing, reading and downloading eBooks using an existing Calibre database.   It is also possible to integrate google drive and edit metadata and your calibre library through the app itself.\n\nThis software is a fork of library and licensed under the GPL v3 License.\n",icon:"https:\u002F\u002Fraw.githubusercontent.com\u002Flinuxserver\u002Fdocker-templates\u002Fmaster\u002Flinuxserver.io\u002Fimg\u002Fcalibre-web-icon.png",links:[{type:"docker",url:"https:\u002F\u002Fhub.docker.com\u002Fr\u002Flinuxserver\u002Fcalibre-web"},{type:"docs",url:"https:\u002F\u002Fdocs.linuxserver.io\u002Fimages\u002Fdocker-calibre-web"}],containers:[{name:a,image:"linuxserver\u002Fcalibre-web",env:[{id:c,key:c,description:"User ID",default:d},{id:e,key:e,description:"Group ID",default:d},{id:f,key:f,description:"Timezone",default:"America\u002FNew_York"}],volumes:[{container:"\u002Fconfig",description:"Where calibre-web stores the internal database and config.",key:"config"},{container:"\u002Fbooks",description:"Where your preexisting calibre database is located."}],ports:[{container:"8083",description:"WebUI"}]}],_id:"content:apps:calibre-web.json",_type:g,title:"Calibre Web",_source:"content",_file:"apps\u002Fcalibre-web.json",_extension:g}},prerenderedAt:1675116538654}}("calibre-web",false,"PUID","100","PGID","TZ","json"))