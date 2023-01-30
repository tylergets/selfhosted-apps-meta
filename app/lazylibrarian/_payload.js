export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y){return {data:{lazylibrarian:{_path:"\u002Fapps\u002Flazylibrarian",_dir:"apps",_draft:c,_partial:c,_locale:"en",id:b,name:b,description:e,icon:f,links:[{type:"docker",url:"https:\u002F\u002Fhub.docker.com\u002Fr\u002Flinuxserver\u002Flazylibrarian"},{type:"docs",url:"https:\u002F\u002Fdocs.linuxserver.io\u002Fimages\u002Fdocker-lazylibrarian"}],containers:[{name:b,image:"linuxserver\u002Flazylibrarian",env:[{id:g,key:g,description:"User ID",default:h},{id:i,key:i,description:"Group ID",default:h},{id:j,default:k,description:l},{id:m,default:n,description:o}],volumes:[{container:p,description:q},{container:r,description:s,key:"config"},{container:t,description:u}],ports:[{container:d,description:v,protocol:"tcp",web:c}]}],meta:{"readme-vars":{project_name:b,project_url:"https:\u002F\u002Flazylibrarian.gitlab.io\u002F",project_logo:f,project_blurb:e,project_lsio_github_repo_url:"https:\u002F\u002Fgithub.com\u002Flinuxserver\u002Fdocker-{{ project_name }}",available_architectures:[{arch:"{{ arch_x86_64 }}",tag:"amd64-latest"},{arch:"{{ arch_arm64 }}",tag:"arm64v8-latest"},{arch:"{{ arch_armhf }}",tag:"arm32v7-latest"}],param_container_name:"{{ project_name }}",param_usage_include_vols:a,param_volumes:[{vol_path:r,vol_host_path:"\u002Fpath\u002Fto\u002Fdata",desc:s},{vol_path:t,vol_host_path:"\u002Fpath\u002Fto\u002Fdownloads\u002F",desc:u}],opt_param_usage_include_vols:a,opt_param_volumes:[{vol_path:p,vol_host_path:"\u002Fpath\u002Fto\u002Fdata\u002F",desc:q}],param_usage_include_ports:a,param_ports:[{external_port:d,internal_port:d,port_desc:v}],param_usage_include_env:a,param_env_vars:[{env_var:j,env_value:k,desc:l}],opt_param_usage_include_env:a,opt_param_env_vars:[{env_var:m,env_value:n,desc:o}],app_setup_block_enabled:a,app_setup_block:w,changelogs:[{date:"07.12.22:",desc:"Rebase to Ubuntu Jammy, migrate to s6v3. Use pyproject.toml for deps. Build unrar from source."},{date:"27.09.22:",desc:"Switch to `Levenshtein`, add cmake as build dep on armhf."},{date:"07.05.22:",desc:"Rebase to Ubuntu Focal."},{date:"22.05.21:",desc:"Make the paths clearer to the user, remove optional volume."},{date:"17.05.21:",desc:"Add linuxserver wheel index."},{date:x,desc:"Changed gitlab download link."},{date:x,desc:"Add python module Pillow."},{date:"31.07.19:",desc:"Add pyopenssl, remove git dependency during build time."},{date:"09.07.19:",desc:"Rebase to Ubuntu Bionic, enables Calibre docker mod."},{date:"28.06.19:",desc:"Rebasing to alpine 3.10."},{date:"23.03.19:",desc:"Switching to new Base images, shift to arm32v7 tag."},{date:"05.03.19:",desc:"Added apprise python package."},{date:"22.02.19:",desc:"Rebasing to alpine 3.9."},{date:"10.12.18:",desc:"Moved to Pipeline Building"},{date:"16.08.18:",desc:"Rebase to alpine 3.8"},{date:"05.01.18:",desc:"Deprecate cpu_core routine lack of scaling"},{date:"12.12.17:",desc:"Rebase to alpine 3.7"},{date:"21.07.17:",desc:"Internal git pull instead of at runtime"},{date:"25.05.17:",desc:"Rebase to alpine 3.6"},{date:"07.02.17:",desc:"Rebase to alpine 3.5"},{date:"30.01.17:",desc:"Compile libunrar.so to allow reading of .cbr format files"},{date:"12.01.17:",desc:"Add ghostscript package, allows magazine covers to be created etc"},{date:"14.10.16:",desc:"Add version layer information"},{date:"03.10.16:",desc:"Fix non-persistent settings and make log folder"},{date:"28.09.16:",desc:"Inital Release"}]}},setup:w,_id:"content:apps:lazylibrarian.json",_type:y,title:"Lazylibrarian",_source:"content",_file:"apps\u002Flazylibrarian.json",_extension:y}},prerenderedAt:1675118189614}}(true,"lazylibrarian",false,"5299","[{{ project_name|capitalize }}]({{ project_url }}) is a program to follow authors and grab metadata for all your digital reading needs. It uses a combination of Goodreads Librarything and optionally GoogleBooks as sources for author info and book info.  This container is based on the DobyTang fork.\n","https:\u002F\u002Fraw.githubusercontent.com\u002Flinuxserver\u002Fdocker-templates\u002Fmaster\u002Flinuxserver.io\u002Fimg\u002Flazylibrarian-icon.png","PUID","100","PGID","TZ","Europe\u002FLondon","Specify a timezone to use e.g. Europe\u002FLondon","DOCKER_MODS","linuxserver\u002Fcalibre-web:calibre|linuxserver\u002Fmods:lazylibrarian-ffmpeg","Allows additional functionality to be added, e.g. the Calibredb import program (optional, more info below)","\u002Fbooks","Books location","\u002Fconfig","LazyLibrarian config","\u002Fdownloads","Download location","The port for the LazyLibrarian webinterface","Access the webui at `http:\u002F\u002F\u003Cyour-ip\u003E:5299\u002Fhome`, for more information check out [{{ project_name|capitalize }}]({{ project_url }}).\n\n### Calibredb import\n\n**64bit only** We have implemented the optional ability to pull in the dependencies to enable the Calibredb import program:, this means if you don't require this feature the container isn't uneccessarily bloated but should you require it, it is easily available.\nThis optional layer will be rebuilt automatically on our CI pipeline upon new Calibre releases so you can stay up to date.\nTo use this option add the optional environmental variable as detailed in the docker-mods section to pull an addition docker layer to enable ebook conversion and then in the LazyLibrarian config page (Processing:Calibredb import program:) set the path to converter tool to `\u002Fusr\u002Fbin\u002Fcalibredb`\n\n### ffmpeg\n\nBy adding `linuxserver\u002Fmods:lazylibrarian-ffmpeg` to your `DOCKER_MODS` environment variable you can install ffmpeg into your container on startup.\nThis allows you to use the audiobook conversion features of LazyLibrarian.\nYou can enable it in the Web UI under Settings \u003E Processing \u003E External Programs by setting the ffmpeg path to `ffmpeg`.\n\n### Media folders\n\nWe have set `\u002Fbooks` as ***optional path***, this is because it is the easiest way to get started. While easy to use, it has some drawbacks. Mainly losing the ability to hardlink (TL;DR a way for a file to exist in multiple places on the same file system while only consuming one file worth of space), or atomic move (TL;DR instant file moves, rather than copy+delete) files while processing content.\n\nUse the optional path if you dont understand, or dont want hardlinks\u002Fatomic moves.\n\nThe folks over at servarr.com wrote a good [write-up](https:\u002F\u002Fwiki.servarr.com\u002Fdocker-guide#consistent-and-well-planned-paths) on how to get started with this.\n","23.10.19:","json"))