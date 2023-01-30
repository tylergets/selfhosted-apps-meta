export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){return {data:{tautulli:{_path:"\u002Fapps\u002Ftautulli",_dir:"apps",_draft:a,_partial:a,_locale:"en",id:c,name:c,description:e,icon:f,links:[{type:"docker",url:"https:\u002F\u002Fhub.docker.com\u002Fr\u002Flinuxserver\u002Ftautulli"},{type:"docs",url:"https:\u002F\u002Fdocs.linuxserver.io\u002Fimages\u002Fdocker-tautulli"}],containers:[{name:c,image:"linuxserver\u002Ftautulli",env:[{id:g,key:g,description:"User ID",default:h},{id:i,key:i,description:"Group ID",default:h},{id:j,default:k,description:l}],volumes:[{container:m,description:n,key:"config"}],ports:[{container:d,description:o,protocol:"tcp",web:a}]}],meta:{"readme-vars":{project_name:c,project_url:"http:\u002F\u002Ftautulli.com",project_logo:f,project_blurb:e,project_lsio_github_repo_url:"https:\u002F\u002Fgithub.com\u002Flinuxserver\u002Fdocker-{{ project_name }}",project_blurb_optional_extras_enabled:a,available_architectures:[{arch:"{{ arch_x86_64 }}",tag:"amd64-latest"},{arch:"{{ arch_arm64 }}",tag:"arm64v8-latest"},{arch:"{{ arch_armhf }}",tag:"arm32v7-latest"}],development_versions:b,development_versions_items:[{tag:"latest",desc:"Stable Tautulli releases"},{tag:"develop",desc:"Built at head of Tautulli nightly branch"}],common_param_env_vars_enabled:b,param_container_name:"{{ project_name }}",param_usage_include_net:a,param_usage_include_env:b,param_env_vars:[{env_var:j,env_value:k,desc:l}],param_usage_include_vols:b,param_volumes:[{vol_path:m,vol_host_path:"\u003Cpath to data\u003E",desc:n}],param_usage_include_ports:b,param_ports:[{external_port:d,internal_port:d,port_desc:o}],param_device_map:a,cap_add_param:a,opt_param_usage_include_env:a,opt_param_usage_include_vols:a,opt_param_usage_include_ports:a,opt_param_device_map:a,opt_cap_add_param:a,optional_block_1:a,app_setup_block_enabled:b,app_setup_block:p,changelogs:[{date:"15.12.22:",desc:"Rebase master branch to Alpine 3.17."},{date:"04.10.22:",desc:"Rebase master branch to Alpine 3.16, migrate to s6v3."},{date:"10.01.22:",desc:"Rebase to Alpine 3.15."},{date:"11.07.21:",desc:"Add curl package."},{date:"23.01.21:",desc:"Rebasing to alpine 3.13."},{date:"11.07.20:",desc:"Add py3-openssl."},{date:"05.06.20:",desc:"Rebasing to alpine 3.12. Rework to python3."},{date:"12.04.20:",desc:"Added mock from pip and donate links."},{date:"19.12.19:",desc:"Rebasing to alpine 3.11."},{date:"28.06.19:",desc:"Rebasing to alpine 3.10."},{date:"23.03.19:",desc:"Switching to new Base images, shift to arm32v7 tag."},{date:"22.02.19:",desc:"Rebasing to alpine 3.9."},{date:"26.01.19:",desc:"Add pipeline logic and multi arch."},{date:"23.10.18:",desc:"Update plex logs info in readm."},{date:"16.08.18:",desc:"Rebase to alpine 3.8."},{date:"10.03.18:",desc:"Rebrand to tautulli."},{date:"12.12.17:",desc:"Rebase to alpine 3.7."},{date:"21.07.17:",desc:"Internal git pull instead of at runtime."},{date:"12.07.17:",desc:"Add inspect commands to README, move to jenkins build and push."},{date:"25.05.17:",desc:"Rebase to alpine 3.6."},{date:"20.04.17:",desc:"Add pycryptodomex pip package."},{date:"07.02.17:",desc:"Rebase to alpine 3.5."},{date:"09.09.16:",desc:"Add layer badges to README."},{date:"27.08.16:",desc:"Add badges to README."},{date:"08.08.16:",desc:"Rebase to alpine linux."},{date:"16.07.15:",desc:"Inital Release."}]}},setup:p,_id:"content:apps:tautulli.json",_type:q,title:"Tautulli",_source:"content",_file:"apps\u002Ftautulli.json",_extension:q}},prerenderedAt:1675118190178}}(false,true,"tautulli","8181","[{{ project_name|capitalize }}]({{ project_url }}) is a python based web application for monitoring, analytics and notifications for Plex Media Server.","https:\u002F\u002Fraw.githubusercontent.com\u002Flinuxserver\u002Fdocker-templates\u002Fmaster\u002Flinuxserver.io\u002Fimg\u002Ftautulli-icon.png","PUID","100","PGID","TZ","Europe\u002FLondon","Specify a timezone to use EG Europe\u002FLondon.","\u002Fconfig","Contains tautulli config and database.","WebUI","Access the webui at `\u003Cyour-ip\u003E:8181`, for more information check out [{{ project_name|capitalize }}]({{ project_url }}).\nTo use the build-in Plex LogViewer you have to add a volume, preferably ReadOnly. Then in tautulli gui settings, under `Plex Media Server`, turn on `Show Advanced` and set the `Logs Folder` to the folder you mapped.\n","json"))