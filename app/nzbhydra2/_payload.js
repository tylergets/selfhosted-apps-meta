export default (function(a,b,c,d,e,f,g){return {data:{nzbhydra2:{_path:"\u002Fapps\u002Fnzbhydra2",_dir:"apps",_draft:b,_partial:b,_locale:"en",id:a,name:a,description:"[{{ project_name|capitalize }}]({{ project_url }}) is a meta search application for NZB indexers, the \"spiritual successor\" to NZBmegasearcH, and an evolution of the original application [NZBHydra](https:\u002F\u002Fgithub.com\u002Ftheotherp\u002Fnzbhydra).\n\nIt provides easy access to a number of raw and newznab based indexers. The application NZBHydra 2 is replacing NZBHydra 1 and supports migrating from V1. Be wary that there may be some compatibility issues for those migrating from V1 to V2, so ensure you back up your old configuration before moving over to the new version. **NOTE:** The last version that supports migration is `linuxserver\u002Fnzbhydra2:v2.10.2-ls49`\n",icon:"https:\u002F\u002Fraw.githubusercontent.com\u002Flinuxserver\u002Fdocker-templates\u002Fmaster\u002Flinuxserver.io\u002Fimg\u002Fhydra-icon.png",links:[{type:"docker",url:"https:\u002F\u002Fhub.docker.com\u002Fr\u002Flinuxserver\u002Fnzbhydra2"},{type:"docs",url:"https:\u002F\u002Fdocs.linuxserver.io\u002Fimages\u002Fdocker-nzbhydra2"}],containers:[{name:a,image:"linuxserver\u002Fnzbhydra2",env:[{id:c,key:c,description:"User ID",default:d},{id:e,key:e,description:"Group ID",default:d},{id:f,key:f,description:"Timezone",default:"America\u002FNew_York"}],volumes:[{container:"\u002Fconfig",description:"Where nzbhydra2 should store config files.",key:"config"},{container:"\u002Fdownloads",description:"NZB download folder."}],ports:[{container:"5076",description:"WebUI"}]}],_id:"content:apps:nzbhydra2.json",_type:g,title:"Nzbhydra2",_source:"content",_file:"apps\u002Fnzbhydra2.json",_extension:g}},prerenderedAt:1675116539421}}("nzbhydra2",false,"PUID","100","PGID","TZ","json"))