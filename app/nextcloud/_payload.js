export default (function(a,b,c,d,e,f,g){return {data:{nextcloud:{_path:"\u002Fapps\u002Fnextcloud",_dir:"apps",_draft:b,_partial:b,_locale:"en",id:a,name:a,description:"[{{ project_name|capitalize }}]({{ project_url }}) gives you access to all your files wherever you are.\n\nWhere are your photos and documents? With Nextcloud you pick a server of your choice, at home, in a data center or at a provider. And that is where your files will be. Nextcloud runs on that server, protecting your data and giving you access from your desktop or mobile devices. Through Nextcloud you also access, sync and share your existing data on that FTP drive at the office, a Dropbox or a NAS you have at home.\n",icon:"https:\u002F\u002Fraw.githubusercontent.com\u002Flinuxserver\u002Fdocker-templates\u002Fmaster\u002Flinuxserver.io\u002Fimg\u002Fnextcloud-icon.png",links:[{type:"docker",url:"https:\u002F\u002Fhub.docker.com\u002Fr\u002Flinuxserver\u002Fnextcloud"},{type:"docs",url:"https:\u002F\u002Fdocs.linuxserver.io\u002Fimages\u002Fdocker-nextcloud"}],containers:[{name:a,image:"linuxserver\u002Fnextcloud",env:[{id:c,key:c,description:"User ID",default:d},{id:e,key:e,description:"Group ID",default:d},{id:f,key:f,description:"Timezone",default:"America\u002FNew_York"}],volumes:[{container:"\u002Fconfig",description:"Nextcloud configs.",key:"config"},{container:"\u002Fdata",description:"Your personal data."}],ports:[{container:"443",description:"WebUI"}]}],_id:"content:apps:nextcloud.json",_type:g,title:"Nextcloud",_source:"content",_file:"apps\u002Fnextcloud.json",_extension:g}},prerenderedAt:1675116539379}}("nextcloud",false,"PUID","100","PGID","TZ","json"))