export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){return {data:{webgrabplus:{_path:"\u002Fapps\u002Fwebgrabplus",_dir:"apps",_draft:c,_partial:c,_locale:"en",id:b,name:b,description:e,icon:"https:\u002F\u002Fraw.githubusercontent.com\u002Fwalkxcode\u002Fdashboard-icons\u002Fmain\u002Fpng\u002Fwebgrabplus.png",links:[{type:"docker",url:"https:\u002F\u002Fhub.docker.com\u002Fr\u002Flinuxserver\u002Fwebgrabplus"},{type:"docs",url:"https:\u002F\u002Fdocs.linuxserver.io\u002Fimages\u002Fdocker-webgrabplus"}],containers:[{name:b,image:"linuxserver\u002Fwebgrabplus",env:[{id:f,key:f,description:"User ID",default:g},{id:h,key:h,description:"Group ID",default:g},{id:i,default:j,description:k}],volumes:[{container:l,description:m,key:"config"},{container:n,description:o}]}],meta:{"readme-vars":{project_name:b,project_url:"http:\u002F\u002Fwww.webgrabplus.com",project_logo:"http:\u002F\u002Fwww.webgrabplus.com\u002Fsites\u002Fdefault\u002Fthemes\u002FWgTheme\u002Fimages\u002Fslideshows\u002FEPG_fading.jpg",project_blurb:e,project_lsio_github_repo_url:"https:\u002F\u002Fgithub.com\u002Flinuxserver\u002Fdocker-{{ project_name }}",available_architectures:[{arch:"{{ arch_x86_64 }}",tag:"amd64-latest"},{arch:"{{ arch_arm64 }}",tag:"arm64v8-latest"},{arch:"{{ arch_armhf }}",tag:"arm32v7-latest"}],common_param_env_vars_enabled:a,param_container_name:"{{ project_name }}",param_usage_include_hostname:a,param_hostname:b,param_hostname_desc:"Set the hostname for the container for the license check.",param_usage_include_mac_address:a,param_mac_address:"00:00:00:00:00:00",param_mac_address_desc:"Set the mac_address for the container for the license check.",param_usage_include_vols:a,param_volumes:[{vol_path:l,vol_host_path:"\u002Fpath\u002Fto\u002Fconfig",desc:m},{vol_path:n,vol_host_path:"\u002Fpath\u002Fto\u002Fdata",desc:o}],param_usage_include_ports:c,param_usage_include_env:a,param_env_vars:[{env_var:i,env_value:j,desc:k}],optional_block_1:c,optional_block_1_items:"",app_setup_block_enabled:a,app_setup_block:p,changelogs:[{date:d,desc:"Rebase to Alpine 3.16 and s6v3. Update to dotnet 6."},{date:"29.04.22:",desc:"Add `hostname` and `mac_address` arguments that are needed for the license check to compose and cli samples."},{date:d,desc:"Rebase to Alpine 3.15."},{date:d,desc:"Update to use dotnet instead of mono."},{date:"06.01.22:",desc:"Rebase to Ubuntu focal. Enable auto builds on version updates (beta and stable)."},{date:"17.12.21:",desc:"Update to version 3.2.2 beta."},{date:"05.08.21:",desc:"Update to version 3.2.1 beta."},{date:"05.06.21:",desc:"Added mono-devel dependency."},{date:"04.06.21:",desc:"Update to version 3.1.8 beta."},{date:"22.03.21:",desc:"Update to version 3.1.7 beta."},{date:"07.03.21:",desc:"Update to version 3.1.6 beta."},{date:"29.01.21:",desc:"Update external version number to show as 3.1.5."},{date:"24.01.21:",desc:"Update to version 3.1.5 beta."},{date:"22.12.20:",desc:"Update to version 3.1.4 beta."},{date:q,desc:"Fix version number in jenkinsfile."},{date:q,desc:"Update to version 3.1.1 beta."},{date:"22.06.20:",desc:"Add mono webrequest library."},{date:"18.06.20:",desc:"Update to v3.1.0."},{date:"29.03.20:",desc:"Update to v3.0.0. Changed to use wg3-cron file."},{date:"28.05.19:",desc:"Update to v2.1.0 and beta v2.1.9, rebase to bionic."},{date:"23.03.19:",desc:"Switching to new Base images, shift to arm32v7 tag."},{date:"21.03.19:",desc:"Update to beta 2.1.7."},{date:"19.02.19:",desc:"Add pipeline logic and multi arch."},{date:"18.01.18:",desc:"Initial Release."}]}},setup:p,_id:"content:apps:webgrabplus.json",_type:r,title:"Webgrabplus",_source:"content",_file:"apps\u002Fwebgrabplus.json",_extension:r}},prerenderedAt:1675118190241}}(true,"webgrabplus",false,"23.03.22:","[{{ project_name|capitalize }}]({{ project_url }}) is a multi-site incremental xmltv epg grabber. It collects tv-program guide data from selected tvguide sites for your favourite channels.","PUID","100","PGID","TZ","Europe\u002FLondon","Specify a timezone to use EG Europe\u002FLondon","\u002Fconfig","Where webgrabplus should store it's config files.","\u002Fdata","Where webgrabplus should store it's data files.","To configure WebGrab+Plus follow the [documentation](http:\u002F\u002Fwww.webgrabplus.com\u002Fdocumentation\u002Fconfiguration\u002F)\n\n**Please note that depending on your host this container may not work with the `no-new-privileges=true` security-opt.**\n\nNote that there are some things in the guide that does not apply to this container. Below you can find the changes.\n\n**The configuration files are found where your config volume is mounted.**\n**Do not change the filename tag in the configuration file!**\n\nThe \u002Fdata volume mapping is where WebGrab+Plus outputs the xml file. To use the xml file in another program, you have to point it to the host path you mapped the \u002Fdata volume to.\n\nTo adjust the scheduled cron job for grabbing, edit the wg3-cron file found in the `\u002Fconfig` folder. After you have edited the the wg3-cron file, restart the container to apply the new schedule.\nDo not adjust the command!\n\n**Note that due to something in version 3, we had to change the commands for scheduling the grab. If you have a version where there is a wg-cron file in your \u002Fconfig mount, delete it and use wg3-cron instead.**\n\nBelow is the syntax of the cron file.\n\n```\n ┌───────────── minute (0 - 59)\n │ ┌───────────── hour (0 - 23)\n │ │ ┌───────────── day of month (1 - 31)\n │ │ │ ┌───────────── month (1 - 12)\n │ │ │ │ ┌───────────── day of week (0 - 6) (Sunday to Saturday;\n │ │ │ │ │                                       7 is also Sunday on some systems)\n │ │ │ │ │\n │ │ │ │ │\n * * * * *  \u002Fbin\u002Fbash \u002Fdefaults\u002Fupdate.sh\n```\n","12.10.20:","json"))