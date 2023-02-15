export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){return {data:{nzbget:{_path:"\u002Fapps\u002Fnzbget",_dir:"apps",_draft:a,_partial:a,_locale:"en",id:c,name:c,description:e,icon:f,links:[{type:"docker",url:"https:\u002F\u002Fhub.docker.com\u002Fr\u002Flinuxserver\u002Fnzbget"},{type:"docs",url:"https:\u002F\u002Fdocs.linuxserver.io\u002Fimages\u002Fdocker-nzbget"}],containers:[{name:c,image:"linuxserver\u002Fnzbget",env:[{id:g,key:g,description:"User ID",default:h},{id:i,key:i,description:"Group ID",default:h},{id:j,default:k,description:l},{id:m,default:c,description:n},{id:o,default:p,description:q}],volumes:[{container:r,description:s},{container:t,description:u,key:"config"}],ports:[{container:d,description:v,protocol:"tcp",web:a}]}],meta:{"readme-vars":{project_name:c,project_url:"http:\u002F\u002Fnzbget.net\u002F",project_logo:f,project_blurb:e,project_lsio_github_repo_url:"https:\u002F\u002Fgithub.com\u002Flinuxserver\u002Fdocker-{{ project_name }}",project_blurb_optional_extras_enabled:a,project_deprecation_status:b,project_deprecation_message:"nzbget has been deprecated by its developers. Please consider switching to SABnzbd https:\u002F\u002Fgithub.com\u002Flinuxserver\u002Fdocker-sabnzbd",available_architectures:[{arch:"{{ arch_x86_64 }}",tag:"amd64-latest"},{arch:"{{ arch_arm64 }}",tag:"arm64v8-latest"},{arch:"{{ arch_armhf }}",tag:"arm32v7-latest"}],development_versions:b,development_versions_items:[{tag:"latest",desc:"Stable nzbget releases"},{tag:"testing",desc:"nzbget pre-releases"}],common_param_env_vars_enabled:b,param_container_name:"{{ project_name }}",param_usage_include_net:a,param_usage_include_env:b,param_env_vars:[{env_var:j,env_value:k,desc:l}],param_usage_include_vols:b,param_volumes:[{vol_path:t,vol_host_path:"\u002Fpath\u002Fto\u002Fdata",desc:u}],opt_param_usage_include_vols:b,opt_param_volumes:[{vol_path:r,vol_host_path:"\u002Fpath\u002Fto\u002Fdownloads",desc:s}],param_usage_include_ports:b,param_ports:[{external_port:d,internal_port:d,port_desc:v}],param_device_map:a,cap_add_param:a,opt_param_usage_include_env:b,opt_param_env_vars:[{env_var:m,env_value:c,desc:n},{env_var:o,env_value:p,desc:q}],opt_param_usage_include_ports:a,opt_param_device_map:a,opt_cap_add_param:a,optional_block_1:a,app_setup_block_enabled:b,app_setup_block:w,changelogs:[{date:"31.12.22:",desc:"Deprecate image.  Please consider switching to SABnzbd https:\u002F\u002Fgithub.com\u002Flinuxserver\u002Fdocker-sabnzbd"},{date:"27.11.22:",desc:"Advanced notice: This image will be deprecated on 2022-12-31. Please consider switching to SABnzbd https:\u002F\u002Fgithub.com\u002Flinuxserver\u002Fdocker-sabnzbd"},{date:"13.11.22:",desc:"Rebase master to 3.16, migrate to s6v3."},{date:"12.08.22:",desc:"Bump unrar to 6.1.7."},{date:"22.02.22:",desc:"Rebase to alpine 3.15, add six and python 7zip tools, allow env variables for credentials."},{date:"04.07.21:",desc:"Rebase to alpine 3.14."},{date:"28.05.21:",desc:"Add linuxserver wheel index."},{date:"23.01.21:",desc:"Rebasing to alpine 3.13."},{date:"26.10.20:",desc:"Fix python dependencies."},{date:"24.08.20:",desc:"Fix ignored umask environment variable."},{date:"08.06.20:",desc:"Symlink python3 bin to python."},{date:"01.06.20:",desc:"Rebasing to alpine 3.12. Removing python2."},{date:"13.05.20:",desc:"Add rarfile python package (for DeepUnrar)."},{date:"01.01.20:",desc:"Add python3 alongside python2 during transition."},{date:"19.12.19:",desc:"Rebasing to alpine 3.11."},{date:"28.06.19:",desc:"Rebasing to alpine 3.10."},{date:"13.06.19:",desc:"Add apprise, chardet & pynzbget packages."},{date:"23.03.19:",desc:"Switching to new Base images, shift to arm32v7 tag."},{date:"25.02.19:",desc:"Rebasing to alpine 3.9."},{date:"20.01.19:",desc:"Add pipeline logic and multi arch, build from source."},{date:"21.08.18:",desc:"Rebase to alpine 3.8."},{date:"20.02.18:",desc:"Add note about supplemental mount point for intermediate unpacking."},{date:"13.12.17:",desc:"Rebase to alpine 3.7."},{date:"02.09.17:",desc:"Place app in subfolder rather than \u002Fapp."},{date:"12.07.17:",desc:"Add inspect commands to README, move to jenkins build and push."},{date:"28.05.17:",desc:"Rebase to alpine 3.6."},{date:"20.04.17:",desc:"Add testing branch."},{date:"06.02.17:",desc:"Rebase to alpine 3.5."},{date:"30.09.16:",desc:"Fix umask."},{date:"09.09.16:",desc:"Add layer badges to README."},{date:"27.08.16:",desc:"Add badges to README, perms fix on \u002Fapp to allow updates."},{date:"19.08.16:",desc:"Rebase to alpine linux."},{date:"18.08.15:",desc:"Now useing latest version of unrar beta and implements the universal installer method."}]}},setup:w,_id:"content:apps:nzbget.json",_type:x,title:"Nzbget",_source:"content",_file:"apps\u002Fnzbget.json",_extension:x}},prerenderedAt:1676483555633}}(false,true,"nzbget","6789","[{{ project_name|capitalize }}]({{ project_url }}) is a usenet downloader, written in C++ and designed with performance in mind to achieve maximum download speed by using very little system resources.","https:\u002F\u002Fraw.githubusercontent.com\u002Flinuxserver\u002Fdocker-templates\u002Fmaster\u002Flinuxserver.io\u002Fimg\u002Fnzbget-banner.png","PUID","100","PGID","TZ","Europe\u002FLondon","Specify a timezone to use EG Europe\u002FLondon.","NZBGET_USER","Specify the user for web authentication.","NZBGET_PASS","tegbzn6789","Specify the password for web authentication.","\u002Fdownloads","Location of downloads on disk.","\u002Fconfig","NZBGet App data.","WebUI","Webui can be found at  `\u003Cyour-ip\u003E:6789` and the default login details (change ASAP) are\n\n`login:nzbget, password:tegbzn6789`\n\nTo allow scheduling, from the webui set the time correction value in settings\u002Flogging.\n\nTo change umask settings.\n\n![](http:\u002F\u002Fi.imgur.com\u002FA4VMbwE.png)\n\nscroll to bottom, set umask like this (example shown for unraid)\n\n![](http:\u002F\u002Fi.imgur.com\u002FmIqDEJJ.png)\n\nYou can add an additional mount point for intermediate unpacking folder with:-\n\n`-v \u003C\u002Fpath\u002Fto\u002Fintermedia_unpacking_folder\u003E:\u002Fintermediate`\n\nfor example, and changing the setting for InterDir in the PATHS tab of settings to `\u002Fintermediate`\n\n### Media folders\n\nWe have set `\u002Fdownloads` as a ***optional path***, this is because it is the easiest way to get started. While easy to use, it has some drawbacks. Mainly losing the ability to atomic move (TL;DR instant file moves, rather than copy+delete) files while processing content.\n\nUse the optional paths if you dont understand, or dont want hardlinks\u002Fatomic moves.\n\nThe folks over at servarr.com wrote a good [write-up](https:\u002F\u002Fwiki.servarr.com\u002Fdocker-guide#consistent-and-well-planned-paths) on how to get started with this.\n","json"))