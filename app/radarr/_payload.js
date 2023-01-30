export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){return {data:{radarr:{_path:"\u002Fapps\u002Fradarr",_dir:"apps",_draft:b,_partial:b,_locale:"en",id:c,name:c,description:e,icon:f,links:[{type:"docker",url:"https:\u002F\u002Fhub.docker.com\u002Fr\u002Flinuxserver\u002Fradarr"},{type:"docs",url:"https:\u002F\u002Fdocs.linuxserver.io\u002Fimages\u002Fdocker-radarr"}],containers:[{name:c,image:"linuxserver\u002Fradarr",env:[{id:g,key:g,description:"User ID",default:h},{id:i,key:i,description:"Group ID",default:h},{id:j,default:k,description:l}],volumes:[{container:m,description:n},{container:o,description:p},{container:q,description:r,key:"config"}],ports:[{container:d,description:s,protocol:"tcp",web:b}]}],meta:{"readme-vars":{project_name:c,project_url:"https:\u002F\u002Fgithub.com\u002FRadarr\u002FRadarr",project_logo:f,project_blurb:e,project_lsio_github_repo_url:"https:\u002F\u002Fgithub.com\u002Flinuxserver\u002Fdocker-{{ project_name }}",available_architectures:[{arch:"{{ arch_x86_64 }}",tag:"amd64-latest"},{arch:"{{ arch_arm64 }}",tag:"arm64v8-latest"},{arch:"{{ arch_armhf }}",tag:"arm32v7-latest"}],development_versions:a,development_versions_items:[{tag:"latest",desc:"Stable Radarr releases"},{tag:"develop",desc:"Radarr releases from their develop branch"},{tag:"nightly",desc:"Radarr releases from their nightly branch"}],param_container_name:"{{ project_name }}",param_usage_include_vols:a,param_volumes:[{vol_path:q,vol_host_path:"\u002Fpath\u002Fto\u002Fdata",desc:r}],opt_param_usage_include_vols:a,opt_param_volumes:[{vol_path:m,vol_host_path:"\u002Fpath\u002Fto\u002Fmovies",desc:n},{vol_path:o,vol_host_path:"\u002Fpath\u002Fto\u002Fdownloadclient-downloads",desc:p}],param_usage_include_ports:a,param_ports:[{external_port:d,internal_port:d,port_desc:s}],param_usage_include_env:a,param_env_vars:[{env_var:j,env_value:k,desc:l}],opt_param_usage_include_env:b,app_setup_block_enabled:a,app_setup_block:t,changelogs:[{date:"17.01.23:",desc:"Rebase master branch to Alpine 3.17, migrate to s6v3."},{date:"06.06.22:",desc:"Rebase master branch to Alpine 3.15."},{date:"20.02.22:",desc:"Rebase develop branch to Alpine."},{date:"04.02.22:",desc:"Rebase nightly branch to Alpine and deprecate nightly-alpine branch."},{date:"27.12.21:",desc:"Add nightly-alpine branch."},{date:"17.10.21:",desc:"Remove `UMASK_SET`."},{date:"08.05.21:",desc:"Make the paths clearer to the user"},{date:"17.01.21:",desc:"Deprecate `UMASK_SET` in favor of UMASK in baseimage, see above for more information."},{date:"11.30.20:",desc:"Publish `develop` tag."},{date:"11.28.20:",desc:"Switch to v3 .NET CORE builds (no more mono, `5.14` tag is deprecated). Rebase to Focal (for issues on arm32v7, [see here](https:\u002F\u002Fdocs.linuxserver.io\u002Ffaq#my-host-is-incompatible-with-images-based-on-ubuntu-focal))."},{date:"05.04.20:",desc:"Move app to \u002Fapp."},{date:"01.08.19:",desc:"Rebase to Linuxserver LTS mono version."},{date:"13.06.19:",desc:"Add env variable for setting umask."},{date:"10.05.19:",desc:"Rebase to Bionic."},{date:"23.03.19:",desc:"Switching to new Base images, shift to arm32v7 tag."},{date:"09.09.18:",desc:"Add pipeline build process."},{date:"24.02.18:",desc:"Add nightly branch."},{date:"06.02.18:",desc:"Radarr repo changed owner."},{date:"15.12.17:",desc:"Fix continuation lines."},{date:"17.04.17:",desc:"Switch to using inhouse mono baseimage, adds python also."},{date:"13.04.17:",desc:"Switch to official mono repository."},{date:"10.01.17:",desc:"Initial Release."}]}},setup:t,_id:"content:apps:radarr.json",_type:u,title:"Radarr",_source:"content",_file:"apps\u002Fradarr.json",_extension:u}},prerenderedAt:1675118190015}}(true,false,"radarr","7878","[{{ project_name|capitalize }}]({{ project_url }}) - A fork of Sonarr to work with movies à la Couchpotato.\n","https:\u002F\u002Fraw.githubusercontent.com\u002Flinuxserver\u002Fdocker-templates\u002Fmaster\u002Flinuxserver.io\u002Fimg\u002Fradarr.png","PUID","100","PGID","TZ","Europe\u002FLondon","Specify a timezone to use EG Europe\u002FLondon, this is required for Radarr","\u002Fmovies","Location of Movie library on disk (See note in Application setup)","\u002Fdownloads","Location of download managers output directory (See note in Application setup)","\u002Fconfig","Database and Radarr configs","The port for the Radarr webinterface","Access the webui at `\u003Cyour-ip\u003E:7878`, for more information check out [Radarr](https:\u002F\u002Fgithub.com\u002FRadarr\u002FRadarr).\n\n### Media folders\n\nWe have set `\u002Fmovies` and `\u002Fdownloads` as ***optional paths***, this is because it is the easiest way to get started. While easy to use, it has some drawbacks. Mainly losing the ability to hardlink (TL;DR a way for a file to exist in multiple places on the same file system while only consuming one file worth of space), or atomic move (TL;DR instant file moves, rather than copy+delete) files while processing content.\n\nUse the optional paths if you dont understand, or dont want hardlinks\u002Fatomic moves.\n\nThe folks over at servarr.com wrote a good [write-up](https:\u002F\u002Fwiki.servarr.com\u002Fdocker-guide#consistent-and-well-planned-paths) on how to get started with this.\n","json"))