export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F){return {data:{endlessh:{_path:"\u002Fapps\u002Fendlessh",_dir:"apps",_draft:a,_partial:a,_locale:"en",id:c,name:c,description:e,icon:f,links:[{type:"docker",url:"https:\u002F\u002Fhub.docker.com\u002Fr\u002Flinuxserver\u002Fendlessh"},{type:"docs",url:"https:\u002F\u002Fdocs.linuxserver.io\u002Fimages\u002Fdocker-endlessh"}],containers:[{name:c,image:"linuxserver\u002Fendlessh",env:[{id:g,key:g,description:"User ID",default:h},{id:i,key:i,description:"Group ID",default:h},{id:j,default:k,description:l},{id:m,default:n,description:o},{id:p,default:q,description:r},{id:s,default:t,description:u},{id:v,default:w,description:x},{id:y,default:d,description:z}],ports:[{container:A,description:B,protocol:"tcp",web:a}]}],meta:{"readme-vars":{project_name:c,project_url:"https:\u002F\u002Fgithub.com\u002Fskeeto\u002Fendlessh",project_logo:f,project_blurb:e,project_lsio_github_repo_url:"https:\u002F\u002Fgithub.com\u002Flinuxserver\u002Fdocker-{{ project_name }}",available_architectures:[{arch:"{{ arch_x86_64 }}",tag:"amd64-latest"},{arch:"{{ arch_arm64 }}",tag:"arm64v8-latest"},{arch:"{{ arch_armhf }}",tag:"arm32v7-latest"}],development_versions:a,development_versions_items:[{tag:"latest",desc:"Stable releases"}],common_param_env_vars_enabled:b,param_container_name:"{{ project_name }}",param_usage_include_vols:a,param_volumes:[{vol_path:C,vol_host_path:D,desc:"Contains all relevant configuration and data."}],param_usage_include_ports:b,param_ports:[{external_port:"22",internal_port:A,port_desc:B}],param_usage_include_env:b,param_env_vars:[{env_var:j,env_value:k,desc:l}],opt_param_usage_include_env:b,opt_param_env_vars:[{env_var:m,env_value:n,desc:o},{env_var:p,env_value:q,desc:r},{env_var:s,env_value:t,desc:u},{env_var:v,env_value:w,desc:x},{env_var:y,env_value:d,desc:z}],opt_param_usage_include_vols:b,opt_param_volumes:[{vol_path:C,vol_host_path:D,desc:"Required if `LOGFILE` is set to `true`."}],optional_block_1:a,optional_block_1_items:d,app_setup_block_enabled:b,app_setup_block:E,changelogs:[{date:"23.09.22:",desc:"Migrate to s6v3."},{date:"20.07.22:",desc:"Rebase to Alpine 3.16."},{date:"16.04.22:",desc:"Rebase to Alpine 3.15."},{date:"07.10.21:",desc:"Fix typo on MAXLINES var."},{date:"08.06.21:",desc:"Add BINDFAMILY option."},{date:"16.04.21:",desc:"Initial Release."}]}},setup:E,_id:"content:apps:endlessh.json",_type:F,title:"Endlessh",_source:"content",_file:"apps\u002Fendlessh.json",_extension:F}},prerenderedAt:1675118189384}}(false,true,"endlessh","","[{{ project_name|capitalize }}]({{ project_url }}) is an SSH tarpit that very slowly sends an endless, random SSH banner. It keeps SSH clients locked up for hours or even days at a time. The purpose is to put your real SSH server on another port and then let the script kiddies get stuck in this tarpit instead of bothering a real server.","https:\u002F\u002Fgithub.com\u002Flinuxserver\u002Fdocker-templates\u002Fraw\u002Fmaster\u002Flinuxserver.io\u002Fimg\u002Fopenssh-server-logo.png","PUID","100","PGID","TZ","Europe\u002FLondon","Specify a timezone to use EG Europe\u002FLondon","MSDELAY","10000","The endless banner is sent one line at a time. This is the delay in milliseconds between individual lines.","MAXLINES","32","The length of each line is randomized. This controls the maximum length of each line. Shorter lines may keep clients on for longer if they give up after a certain number of bytes.","MAXCLIENTS","4096","Maximum number of connections to accept at a time. Connections beyond this are not immediately rejected, but will wait in the queue.","LOGFILE","false","By default, the app logs to container log. If this is set to `true`, the log will be output to file under `\u002Fconfig\u002Flogs\u002Fendlessh` (`\u002Fconfig` needs to be mapped).","BINDFAMILY","By default, the app binds to IPv4 and IPv6 addresses. Set it to `4` or `6` to bind to IPv4 only or IPv6 only, respectively. Leave blank to bind to both.","2222","ssh port","\u002Fconfig","\u002Fpath\u002Fto\u002Fappdata","The app listens on the port mapped for ssh connections. To log to file, set the environment variable `LOGFILE` to `true` and map a volume for `\u002Fconfig`. The logs will be under `\u002Fconfig\u002Flogs\u002Fendlessh`.\n","json"))