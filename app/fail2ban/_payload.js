export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y){return {data:{fail2ban:{_path:"\u002Fapps\u002Ffail2ban",_dir:"apps",_draft:c,_partial:c,_locale:"en",id:b,name:b,description:d,icon:e,links:[{type:"docker",url:"https:\u002F\u002Fhub.docker.com\u002Fr\u002Flinuxserver\u002Ffail2ban"},{type:"docs",url:"https:\u002F\u002Fdocs.linuxserver.io\u002Fimages\u002Fdocker-fail2ban"}],containers:[{name:b,image:"linuxserver\u002Ffail2ban",env:[{id:f,key:f,description:"User ID",default:g},{id:h,key:h,description:"Group ID",default:g},{id:i,default:j,description:k}],volumes:[{container:l,description:m},{container:n,description:o},{container:p,description:q},{container:r,description:s},{container:t,description:u},{container:v,description:w},{container:x,description:y},{container:z,description:A},{container:B,description:C},{container:D,description:E},{container:F,description:G},{container:H,description:I},{container:J,description:K},{container:L,description:M},{container:N,description:O},{container:P,description:Q},{container:R,description:S},{container:T,description:U,key:"config"},{container:V,description:W}]}],meta:{"readme-vars":{project_name:b,project_url:"http:\u002F\u002Fwww.fail2ban.org\u002F",project_logo:e,project_blurb:d,project_lsio_github_repo_url:"https:\u002F\u002Fgithub.com\u002Flinuxserver\u002Fdocker-{{ project_name }}",available_architectures:[{arch:"{{ arch_x86_64 }}",tag:"amd64-latest"},{arch:"{{ arch_arm64 }}",tag:"arm64v8-latest"},{arch:"{{ arch_armhf }}",tag:"arm32v7-latest"}],common_param_env_vars_enabled:a,param_container_name:"{{ project_name }}",param_usage_include_net:a,param_net:"host",param_net_desc:"Shares host networking with container.",param_usage_include_env:a,param_env_vars:[{env_var:i,env_value:j,desc:k}],param_usage_include_vols:a,param_volumes:[{vol_path:T,vol_host_path:"\u002Fpath\u002Fto\u002Fappdata\u002Fconfig",desc:U},{vol_path:V,vol_host_path:"\u002Fvar\u002Flog",desc:W}],cap_add_param:a,cap_add_param_vars:[{cap_add_var:"NET_ADMIN"},{cap_add_var:"NET_RAW"}],opt_param_usage_include_vols:a,opt_param_volumes:[{vol_path:l,vol_host_path:"\u002Fpath\u002Fto\u002Fairsonic\u002Flog",desc:m},{vol_path:n,vol_host_path:"\u002Fpath\u002Fto\u002Fapache2\u002Flog",desc:o},{vol_path:p,vol_host_path:"\u002Fpath\u002Fto\u002Fauthelia\u002Flog",desc:q},{vol_path:r,vol_host_path:"\u002Fpath\u002Fto\u002Femby\u002Flog",desc:s},{vol_path:t,vol_host_path:"\u002Fpath\u002Fto\u002Ffilebrowser\u002Flog",desc:u},{vol_path:v,vol_host_path:"\u002Fpath\u002Fto\u002Fhomeassistant\u002Flog",desc:w},{vol_path:x,vol_host_path:"\u002Fpath\u002Fto\u002Flighttpd\u002Flog",desc:y},{vol_path:z,vol_host_path:"\u002Fpath\u002Fto\u002Fnextcloud\u002Flog",desc:A},{vol_path:B,vol_host_path:"\u002Fpath\u002Fto\u002Fnginx\u002Flog",desc:C},{vol_path:D,vol_host_path:"\u002Fpath\u002Fto\u002Fnzbget\u002Flog",desc:E},{vol_path:F,vol_host_path:"\u002Fpath\u002Fto\u002Foverseerr\u002Flog",desc:G},{vol_path:H,vol_host_path:"\u002Fpath\u002Fto\u002Fprowlarr\u002Flog",desc:I},{vol_path:J,vol_host_path:"\u002Fpath\u002Fto\u002Fradarr\u002Flog",desc:K},{vol_path:L,vol_host_path:"\u002Fpath\u002Fto\u002Fsabnzbd\u002Flog",desc:M},{vol_path:N,vol_host_path:"\u002Fpath\u002Fto\u002Fsonarr\u002Flog",desc:O},{vol_path:P,vol_host_path:"\u002Fpath\u002Fto\u002Funificontroller\u002Flog",desc:Q},{vol_path:R,vol_host_path:"\u002Fpath\u002Fto\u002Fvaultwarden\u002Flog",desc:S}],app_setup_block_enabled:a,app_setup_block:X,changelogs:[{date:"15.12.22:",desc:"Rebase to Alpine 3.17, Add ssmtp and whois packages. Symlink config to allow live reloading."},{date:"25.08.22:",desc:"Update README to clarify remote log information."},{date:"09.08.22:",desc:"Initial Release."}]}},setup:X,_id:"content:apps:fail2ban.json",_type:Y,title:"Fail2ban",_source:"content",_file:"apps\u002Ffail2ban.json",_extension:Y}},prerenderedAt:1675118189392}}(true,"fail2ban",false,"[{{ project_name|capitalize }}]({{ project_url }}) is a daemon to ban hosts that cause multiple authentication errors.\n","https:\u002F\u002Fraw.githubusercontent.com\u002Flinuxserver\u002Fdocker-templates\u002Fmaster\u002Flinuxserver.io\u002Fimg\u002Ffail2ban-logo.png","PUID","100","PGID","TZ","America\u002FNew_York","Specify a timezone to use EG America\u002FNew_York","\u002Fremotelogs\u002Fairsonic:ro","Optional path to airsonic log folder. Mounted as Read Only.","\u002Fremotelogs\u002Fapache2:ro","Optional path to apache2 log folder. Mounted as Read Only.","\u002Fremotelogs\u002Fauthelia:ro","Optional path to authelia log folder. Mounted as Read Only.","\u002Fremotelogs\u002Femby:ro","Optional path to emby log folder. Mounted as Read Only.","\u002Fremotelogs\u002Ffilebrowser:ro","Optional path to filebrowser log folder. Mounted as Read Only.","\u002Fremotelogs\u002Fhomeassistant:ro","Optional path to homeassistant log folder. Mounted as Read Only.","\u002Fremotelogs\u002Flighttpd:ro","Optional path to lighttpd log folder. Mounted as Read Only.","\u002Fremotelogs\u002Fnextcloud:ro","Optional path to nextcloud log folder. Mounted as Read Only.","\u002Fremotelogs\u002Fnginx:ro","Optional path to nginx log folder. Mounted as Read Only.","\u002Fremotelogs\u002Fnzbget:ro","Optional path to nzbget log folder. Mounted as Read Only.","\u002Fremotelogs\u002Foverseerr:ro","Optional path to overseerr log folder. Mounted as Read Only.","\u002Fremotelogs\u002Fprowlarr:ro","Optional path to prowlarr log folder. Mounted as Read Only.","\u002Fremotelogs\u002Fradarr:ro","Optional path to radarr log folder. Mounted as Read Only.","\u002Fremotelogs\u002Fsabnzbd:ro","Optional path to sabnzbd log folder. Mounted as Read Only.","\u002Fremotelogs\u002Fsonarr:ro","Optional path to sonarr log folder. Mounted as Read Only.","\u002Fremotelogs\u002Funificontroller:ro","Optional path to unificontroller log folder. Mounted as Read Only.","\u002Fremotelogs\u002Fvaultwarden:ro","Optional path to vaultwarden log folder. Mounted as Read Only.","\u002Fconfig","Contains all relevant configuration files.","\u002Fvar\u002Flog:ro","Host logs. Mounted as Read Only.","This container is designed to allow fail2ban to function at the host level, as well as at the docker container level.\nIf you are running applications on the host, you will need to set the `chain` to `INPUT` in the jail for that application.\n\n### [Configuration Files](https:\u002F\u002Fgithub.com\u002Flinuxserver\u002Ffail2ban-confs)\n\nOn first run, the container will create a number of folders and files in `\u002Fconfig`. The default configurations for fail2ban are all disabled by default.\n\nPlease refer to the [Configuration README](https:\u002F\u002Fgithub.com\u002Flinuxserver\u002Ffail2ban-confs\u002Fblob\u002Fmaster\u002FREADME.md), which can be viewed in our repository, or in your config folder at `\u002Fconfig\u002Ffail2ban\u002FREADME.md`.\n\n### Remote Logs\n\nAll jails require the ability to read the application log files.\nWe recommend mounting each application's log folder as a volume to the container (illustrated by the optional volumes in our documentation).\nMounting individual log files can cause issues and is not recommended.\n\nThe `\u002Fremotelogs` path is designed to act as a parent for all log files you would like fail2ban to be able to use.\nEach log file should be mounted in a subfolder underneath `\u002Fremotelogs`, ex:\n- `\u002Fremotelogs\u002Fnginx\u002F` would mount a folder containing the nginx logs to the container\n","json"))