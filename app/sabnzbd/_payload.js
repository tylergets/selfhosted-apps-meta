export default (function(a,b,c,d,e,f,g){return {data:{sabnzbd:{_path:"\u002Fapps\u002Fsabnzbd",_dir:"apps",_draft:b,_partial:b,_locale:"en",id:a,name:a,description:"[{{ project_name|capitalize }}]({{ project_url }}) makes Usenet as simple and streamlined as possible by automating everything we can. All you have to do is add an .nzb. SABnzbd takes over from there, where it will be automatically downloaded, verified, repaired, extracted and filed away with zero human interaction.",icon:"https:\u002F\u002Fraw.githubusercontent.com\u002Flinuxserver\u002Fdocker-templates\u002Fmaster\u002Flinuxserver.io\u002Fimg\u002Fsabnzbd-banner.png",links:[{type:"docker",url:"https:\u002F\u002Fhub.docker.com\u002Fr\u002Flinuxserver\u002Fsabnzbd"},{type:"docs",url:"https:\u002F\u002Fdocs.linuxserver.io\u002Fimages\u002Fdocker-sabnzbd"}],containers:[{name:a,image:"linuxserver\u002Fsabnzbd",env:[{id:c,key:c,description:"User ID",default:d},{id:e,key:e,description:"Group ID",default:d},{id:f,key:f,description:"Timezone",default:"America\u002FNew_York"}],volumes:[{container:"\u002Fconfig",description:"Local path for sabnzbd config files.",key:"config"}],ports:[{container:"8080",description:"HTTP port for the WebUI."}]}],_id:"content:apps:sabnzbd.json",_type:g,title:"Sabnzbd",_source:"content",_file:"apps\u002Fsabnzbd.json",_extension:g}},prerenderedAt:1675116539715}}("sabnzbd",false,"PUID","100","PGID","TZ","json"))