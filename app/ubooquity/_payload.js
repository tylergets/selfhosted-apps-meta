export default (function(a,b,c,d,e,f,g){return {data:{ubooquity:{_path:"\u002Fapps\u002Fubooquity",_dir:"apps",_draft:b,_partial:b,_locale:"en",id:a,name:a,description:"[{{ project_name|capitalize }}]({{ project_url }}) is a free, lightweight and easy-to-use home server for your comics and ebooks. Use it to access your files from anywhere, with a tablet, an e-reader, a phone or a computer.",icon:"https:\u002F\u002Fraw.githubusercontent.com\u002Flinuxserver\u002Fdocker-templates\u002Fmaster\u002Flinuxserver.io\u002Fimg\u002Fubooquity-banner.png",links:[{type:"docker",url:"https:\u002F\u002Fhub.docker.com\u002Fr\u002Flinuxserver\u002Fubooquity"},{type:"docs",url:"https:\u002F\u002Fdocs.linuxserver.io\u002Fimages\u002Fdocker-ubooquity"}],containers:[{name:a,image:"linuxserver\u002Fubooquity",env:[{id:c,key:c,description:"User ID",default:d},{id:e,key:e,description:"Group ID",default:d},{id:f,key:f,description:"Timezone",default:"America\u002FNew_York"}],volumes:[{container:"\u002Fconfig",description:"Config files and database for ubooquity.",key:"config"},{container:"\u002Fbooks",description:"Location of books."},{container:"\u002Fcomics",description:"Location of comics."},{container:"\u002Ffiles",description:"Location of raw files."}],ports:[{container:"2202",description:"The library port."},{container:"2203",description:"The admin port."}]}],_id:"content:apps:ubooquity.json",_type:g,title:"Ubooquity",_source:"content",_file:"apps\u002Fubooquity.json",_extension:g}},prerenderedAt:1675116539880}}("ubooquity",false,"PUID","100","PGID","TZ","json"))