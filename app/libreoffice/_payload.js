export default (function(a,b,c,d,e,f,g){return {data:{libreoffice:{_path:"\u002Fapps\u002Flibreoffice",_dir:"apps",_draft:b,_partial:b,_locale:"en",id:a,name:a,description:"[LibreOffice]({{ project_url }}) is a free and powerful office suite, and a successor to OpenOffice.org (commonly known as OpenOffice). Its clean interface and feature-rich tools help you unleash your creativity and enhance your productivity.",icon:"https:\u002F\u002Fraw.githubusercontent.com\u002Flinuxserver\u002Fdocker-templates\u002Fmaster\u002Flinuxserver.io\u002Fimg\u002Flibreoffice-logo.png",links:[{type:"docker",url:"https:\u002F\u002Fhub.docker.com\u002Fr\u002Flinuxserver\u002Flibreoffice"},{type:"docs",url:"https:\u002F\u002Fdocs.linuxserver.io\u002Fimages\u002Fdocker-libreoffice"}],containers:[{name:a,image:"linuxserver\u002Flibreoffice",env:[{id:c,key:c,description:"User ID",default:d},{id:e,key:e,description:"Group ID",default:d},{id:f,key:f,description:"Timezone",default:"America\u002FNew_York"}],volumes:[{container:"\u002Fconfig",description:"Users home directory in the container, stores program settings and documents",key:"config"}],ports:[{container:"3000",description:"LibreOffice desktop gui."}]}],_id:"content:apps:libreoffice.json",_type:g,title:"Libreoffice",_source:"content",_file:"apps\u002Flibreoffice.json",_extension:g}},prerenderedAt:1675116539183}}("libreoffice",false,"PUID","100","PGID","TZ","json"))