export default (function(a,b,c,d,e,f,g){return {data:{ombi:{_path:"\u002Fapps\u002Fombi",_dir:"apps",_draft:b,_partial:b,_locale:"en",id:a,name:a,description:"[{{ project_name|capitalize }}]({{ project_url }}) allows you to host your own Plex Request and user management system.\nIf you are sharing your Plex server with other users, allow them to request new content using an easy to manage interface!\nManage all your requests for Movies and TV with ease, leave notes for the user and get notification when a user requests something.\nAllow your users to post issues against their requests so you know there is a problem with the audio etc.\nEven automatically send them weekly newsletters of new content that has been added to your Plex server!",icon:"https:\u002F\u002Fraw.githubusercontent.com\u002Flinuxserver\u002Fdocker-templates\u002Fmaster\u002Flinuxserver.io\u002Fimg\u002Fombi.png",links:[{type:"docker",url:"https:\u002F\u002Fhub.docker.com\u002Fr\u002Flinuxserver\u002Fombi"},{type:"docs",url:"https:\u002F\u002Fdocs.linuxserver.io\u002Fimages\u002Fdocker-ombi"}],containers:[{name:a,image:"linuxserver\u002Fombi",env:[{id:c,key:c,description:"User ID",default:d},{id:e,key:e,description:"Group ID",default:d},{id:f,key:f,description:"Timezone",default:"America\u002FNew_York"}],volumes:[{container:"\u002Fconfig",description:"Contains all relevant configuration files.",key:"config"}],ports:[{container:"3579",description:"web gui"}]}],_id:"content:apps:ombi.json",_type:g,title:"Ombi",_source:"content",_file:"apps\u002Fombi.json",_extension:g}},prerenderedAt:1675116539430}}("ombi",false,"PUID","100","PGID","TZ","json"))