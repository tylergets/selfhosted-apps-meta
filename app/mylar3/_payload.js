export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){return {data:{mylar3:{_path:"\u002Fapps\u002Fmylar3",_dir:"apps",_draft:a,_partial:a,_locale:"en",id:b,name:b,description:e,icon:f,links:[{type:"docker",url:"https:\u002F\u002Fhub.docker.com\u002Fr\u002Flinuxserver\u002Fmylar3"},{type:"docs",url:"https:\u002F\u002Fdocs.linuxserver.io\u002Fimages\u002Fdocker-mylar3"}],containers:[{name:b,image:"linuxserver\u002Fmylar3",env:[{id:g,key:g,description:"User ID",default:h},{id:i,key:i,description:"Group ID",default:h}],volumes:[{container:j,description:k,key:"config"},{container:l,description:m},{container:n,description:o}],ports:[{container:d,description:p,protocol:"tcp",web:a}]}],meta:{"readme-vars":{project_name:b,project_url:"https:\u002F\u002Fgithub.com\u002Fmylar3\u002Fmylar3",project_logo:f,project_blurb:e,project_lsio_github_repo_url:"https:\u002F\u002Fgithub.com\u002Flinuxserver\u002Fdocker-{{ project_name }}",available_architectures:[{arch:"{{ arch_x86_64 }}",tag:"amd64-latest"},{arch:"{{ arch_arm64 }}",tag:"arm64v8-latest"},{arch:"{{ arch_armhf }}",tag:"arm32v7-latest"}],development_versions:c,development_versions_items:[{tag:"latest",desc:"Stable Mylar3 releases"},{tag:"nightly",desc:"Commits to Mylar3 `python3-dev` branch"}],param_container_name:"{{ project_name }}",param_usage_include_vols:c,param_volumes:[{vol_path:j,vol_host_path:"\u002Fpath\u002Fto\u002Fdata",desc:k},{vol_path:l,vol_host_path:"\u002Fpath\u002Fto\u002Fcomics",desc:m},{vol_path:n,vol_host_path:"\u002Fpath\u002Fto\u002Fdownloads",desc:o}],param_usage_include_env:a,param_usage_include_ports:c,param_ports:[{external_port:d,internal_port:d,port_desc:p}],app_setup_block_enabled:c,app_setup_block:q,changelogs:[{date:"12.10.22:",desc:"Rebase to alpine 3.16 and upgrade to s6v3."},{date:"01.02.22:",desc:"Rebase to alpine 3.15."},{date:"02.11.21:",desc:"Rebase to alpine 3.14. Remove `pathlib.py`."},{date:"25.05.21:",desc:"Add `libwebp` support."},{date:"17.05.21:",desc:"Add linuxserver wheel index."},{date:"23.01.21:",desc:"Rebasing to alpine 3.13."},{date:"03.01.21:",desc:"Output mylar log to docker log."},{date:"21.12.20:",desc:"Release `nightly` tag based on commits to upstream `python3-dev` branch."},{date:"28.09.20:",desc:"Initial release."}]}},setup:q,_id:"content:apps:mylar3.json",_type:r,title:"Mylar3",_source:"content",_file:"apps\u002Fmylar3.json",_extension:r}},prerenderedAt:1676483555524}}(false,"mylar3",true,"8090","[{{ project_name|capitalize }}]({{ project_url }}) is an automated Comic Book downloader (cbr\u002Fcbz) for use with NZB and torrents written in python. It supports SABnzbd, NZBGET, and many torrent clients in addition to DDL.","https:\u002F\u002Fraw.githubusercontent.com\u002Flinuxserver\u002Fdocker-templates\u002Fmaster\u002Flinuxserver.io\u002Fimg\u002Fmylar-icon.png","PUID","100","PGID","\u002Fconfig","Where mylar should store config files.","\u002Fcomics","Map to your comics folder.","\u002Fdownloads","Map to your downloads folder.","WebUI","The web ui for settings etc, is on `http:\u002F\u002FSERVERIP:8090`\nFor more detailed setup options, refer to [{{ project_name|capitalize }}]({{ project_url }}).\n","json"))