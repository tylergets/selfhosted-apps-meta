export default (function(a,b,c,d,e,f,g){return {data:{daapd:{_path:"\u002Fapps\u002Fdaapd",_dir:"apps",_draft:b,_partial:b,_locale:"en",id:a,name:a,description:"[{{ project_name|capitalize }}]({{ project_url }}) (iTunes) media server with support for AirPlay devices, Apple Remote (and compatibles), Chromecast, MPD and internet radio.",icon:"https:\u002F\u002Fraw.githubusercontent.com\u002Flinuxserver\u002Fbeta-templates\u002Fmaster\u002Flsiodev\u002Fimg\u002Fdaapd-git.png",links:[{type:"docker",url:"https:\u002F\u002Fhub.docker.com\u002Fr\u002Flinuxserver\u002Fdaapd"},{type:"docs",url:"https:\u002F\u002Fdocs.linuxserver.io\u002Fimages\u002Fdocker-daapd"}],containers:[{name:a,image:"linuxserver\u002Fdaapd",env:[{id:c,key:c,description:"User ID",default:d},{id:e,key:e,description:"Group ID",default:d},{id:f,key:f,description:"Timezone",default:"America\u002FNew_York"}],volumes:[{container:"\u002Fconfig",description:"Where daapd server stores its config and dbase files.",key:"config"},{container:"\u002Fmusic",description:"Map to your music folder."}]}],_id:"content:apps:daapd.json",_type:g,title:"Daapd",_source:"content",_file:"apps\u002Fdaapd.json",_extension:g}},prerenderedAt:1675116538692}}("daapd",false,"PUID","100","PGID","TZ","json"))