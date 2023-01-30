export default (function(a,b,c,d,e,f,g){return {data:{minetest:{_path:"\u002Fapps\u002Fminetest",_dir:"apps",_draft:b,_partial:b,_locale:"en",id:a,name:a,description:"[{{ project_name|capitalize }}]({{ project_url }}) (server) is a near-infinite-world block sandbox game and a game engine, inspired by InfiniMiner, Minecraft, and the like.",icon:"https:\u002F\u002Fraw.githubusercontent.com\u002Flinuxserver\u002Fbeta-templates\u002Fmaster\u002Flsiodev\u002Fimg\u002Fminetest-icon.png",links:[{type:"docker",url:"https:\u002F\u002Fhub.docker.com\u002Fr\u002Flinuxserver\u002Fminetest"},{type:"docs",url:"https:\u002F\u002Fdocs.linuxserver.io\u002Fimages\u002Fdocker-minetest"}],containers:[{name:a,image:"linuxserver\u002Fminetest",env:[{id:c,key:c,description:"User ID",default:d},{id:e,key:e,description:"Group ID",default:d},{id:f,key:f,description:"Timezone",default:"America\u002FNew_York"}],volumes:[{container:"\u002Fconfig\u002F.minetest",description:"Where minetest stores config files and maps etc."}],ports:[{container:"30000\u002Fudp",description:"Port Minetest listens on."}]}],_id:"content:apps:minetest.json",_type:g,title:"Minetest",_source:"content",_file:"apps\u002Fminetest.json",_extension:g}},prerenderedAt:1675116539280}}("minetest",false,"PUID","100","PGID","TZ","json"))