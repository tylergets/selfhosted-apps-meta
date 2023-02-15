export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y){return {data:{jackett:{_path:"\u002Fapps\u002Fjackett",_dir:"apps",_draft:a,_partial:a,_locale:"en",id:c,name:c,description:e,icon:f,links:[{type:"docker",url:"https:\u002F\u002Fhub.docker.com\u002Fr\u002Flinuxserver\u002Fjackett"},{type:"docs",url:"https:\u002F\u002Fdocs.linuxserver.io\u002Fimages\u002Fdocker-jackett"}],containers:[{name:c,image:"linuxserver\u002Fjackett",env:[{id:g,key:g,description:"User ID",default:h},{id:i,key:i,description:"Group ID",default:h},{id:j,default:k,description:l},{id:m,default:n,description:o},{id:p,default:q,description:r}],volumes:[{container:s,description:t,key:"config"},{container:u,description:v}],ports:[{container:d,description:w,protocol:"tcp",web:a}]}],meta:{"readme-vars":{project_name:c,project_url:"https:\u002F\u002Fgithub.com\u002FJackett\u002FJackett",project_logo:f,project_blurb:e,project_lsio_github_repo_url:"https:\u002F\u002Fgithub.com\u002Flinuxserver\u002Fdocker-{{ project_name }}",project_blurb_optional_extras_enabled:a,available_architectures:[{arch:"{{ arch_x86_64 }}",tag:"amd64-latest"},{arch:"{{ arch_arm64 }}",tag:"arm64v8-latest"},{arch:"{{ arch_armhf }}",tag:"arm32v7-latest"}],development_versions:b,development_versions_items:[{tag:"latest",desc:"Stable Jackett Releases"},{tag:"development",desc:"Latest Jackett Releases"}],common_param_env_vars_enabled:b,param_container_name:"{{ project_name }}",param_usage_include_net:a,param_usage_include_env:b,param_env_vars:[{env_var:j,env_value:k,desc:l}],param_usage_include_vols:b,param_volumes:[{vol_path:s,vol_host_path:"\u003Cpath to data\u003E",desc:t},{vol_path:u,vol_host_path:"\u003Cpath to blackhole\u003E",desc:v}],param_usage_include_ports:b,param_ports:[{external_port:d,internal_port:d,port_desc:w}],param_device_map:a,cap_add_param:a,opt_param_usage_include_env:b,opt_param_env_vars:[{env_var:m,env_value:n,desc:o},{env_var:p,env_value:q,desc:r}],opt_param_usage_include_vols:a,opt_param_usage_include_ports:a,opt_param_device_map:a,opt_cap_add_param:a,optional_block_1:a,app_setup_block_enabled:b,app_setup_block:x,changelogs:[{date:"10.05.22:",desc:"Rebase to Ubuntu Focal."},{date:"24.05.20:",desc:"Allow user to optionally enable auto updates."},{date:"31.12.19:",desc:"Remove agressive startup chowning."},{date:"23.03.19:",desc:"Switching to new Base images, shift to arm32v7 tag."},{date:"10.03.19:",desc:"Switch to net-core builds of jackett, not dependant on mono and smaller images."},{date:"11.02.19:",desc:"Add pipeline logic and multi arch."},{date:"11.06.18:",desc:"Ensure root ownership of Jackett files."},{date:"13.12.17:",desc:"Fix continuation lines."},{date:"17.04.17:",desc:"Switch to using inhouse mono baseimage, ubuntu xenial based."},{date:"09.02.17:",desc:"Rebase to alpine 3.5."},{date:"29.10.16:",desc:"Call python2 from edge main to satisfy new mono dependency."},{date:"14.10.16:",desc:"Add version layer information."},{date:"22.09.16:",desc:"Remove autoupdate, tidy up Dockerfile."},{date:"10.09.16:",desc:"Add layer badges to README."},{date:"28.08.16:",desc:"Add badges to README."},{date:"06.08.16:",desc:"Rebase to alpine linux for smaller image."},{date:"25.01.16:",desc:"Initial Release."}]}},setup:x,_id:"content:apps:jackett.json",_type:y,title:"Jackett",_source:"content",_file:"apps\u002Fjackett.json",_extension:y}},prerenderedAt:1676483555329}}(false,true,"jackett","9117","[{{ project_name|capitalize }}]({{ project_url }}) works as a proxy server: it translates queries from apps (Sonarr, SickRage, CouchPotato, Mylar, etc) into tracker-site-specific http queries, parses the html response, then sends results back to the requesting software. This allows for getting recent uploads (like RSS) and performing searches. Jackett is a single repository of maintained indexer scraping & translation logic - removing the burden from other apps.","https:\u002F\u002Fraw.githubusercontent.com\u002Flinuxserver\u002Fdocker-templates\u002Fmaster\u002Flinuxserver.io\u002Fimg\u002Fjackett-banner.png","PUID","100","PGID","TZ","Europe\u002FLondon","Specify a timezone to use EG Europe\u002FLondon.","AUTO_UPDATE","true","Allow Jackett to update inside of the container (currently recommended by Jackett and enabled by default)","RUN_OPTS","\u003Crun options here\u003E","Optionally specify additional arguments to be passed.","\u002Fconfig","Where Jackett should store its config file.","\u002Fdownloads","Path to torrent blackhole.","WebUI","The web interface is at `\u003Cyour-ip\u003E:9117` , configure various trackers and connections to other apps there.\nMore info at [{{ project_name|capitalize }}]({{ project_url }}).\n\nDisable autoupdates in the webui to prevent jackett crashing, the image is refreshed when new versions are released.\n","json"))