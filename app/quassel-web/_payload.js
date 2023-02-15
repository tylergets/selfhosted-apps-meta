export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w){return {data:{"quassel-web":{_path:"\u002Fapps\u002Fquassel-web",_dir:"apps",_draft:c,_partial:c,_locale:"en",id:b,name:b,description:e,icon:f,links:[{type:"docker",url:"https:\u002F\u002Fhub.docker.com\u002Fr\u002Flinuxserver\u002Fquassel-web"},{type:"docs",url:"https:\u002F\u002Fdocs.linuxserver.io\u002Fimages\u002Fdocker-quassel-web"}],containers:[{name:b,image:"linuxserver\u002Fquassel-web",env:[{id:g,key:g,description:"User ID",default:h},{id:i,key:i,description:"Group ID",default:h},{id:j,default:k,description:l},{id:m,default:n,description:o},{id:p,default:q,description:r}],volumes:[{container:s,description:t,key:"config"}],ports:[{container:d,description:u,protocol:"tcp",web:c}]}],meta:{"readme-vars":{project_name:b,project_url:"https:\u002F\u002Fgithub.com\u002Fmagne4000\u002Fquassel-webserver",project_logo:f,project_blurb:e,project_lsio_github_repo_url:"https:\u002F\u002Fgithub.com\u002Flinuxserver\u002Fdocker-{{ project_name }}",available_architectures:[{arch:"{{ arch_x86_64 }}",tag:"amd64-latest"},{arch:"{{ arch_arm64 }}",tag:"arm64v8-latest"},{arch:"{{ arch_armhf }}",tag:"arm32v6-latest"}],param_container_name:"{{ project_name }}",param_usage_include_vols:a,param_volumes:[{vol_path:s,vol_host_path:"\u002Fpath\u002Fto\u002Fdata",desc:t}],param_usage_include_env:a,param_env_vars:[{env_var:j,env_value:k,desc:l},{env_var:m,env_value:n,desc:o}],param_usage_include_ports:a,param_ports:[{external_port:d,internal_port:d,port_desc:u}],opt_param_usage_include_env:a,opt_param_env_vars:[{env_var:p,env_value:q,desc:r}],app_setup_block_enabled:a,app_setup_block:v,changelogs:[{date:"12.02.22:",desc:"Rebasing to alpine 3.15."},{date:"01.06.20:",desc:"Rebasing to alpine 3.12."},{date:"19.12.19:",desc:"Rebasing to alpine 3.11."},{date:"28.06.19:",desc:"Rebasing to alpine 3.10."},{date:"18.05.19:",desc:"Reconfigure environmental variable setup."},{date:"28.04.19:",desc:"Initial Release."}]}},setup:v,_id:"content:apps:quassel-web.json",_type:w,title:"Quassel Web",_source:"content",_file:"apps\u002Fquassel-web.json",_extension:w}},prerenderedAt:1676483555843}}(true,"quassel-web",false,"64443","[{{ project_name|capitalize }}]({{ project_url }}) is a web client for Quassel.  Note that a Quassel-Core instance is required, we have a container available [here.](https:\u002F\u002Fhub.docker.com\u002Fr\u002Flinuxserver\u002Fquassel-core\u002F) \n","https:\u002F\u002Fraw.githubusercontent.com\u002Flinuxserver\u002Fdocker-templates\u002Fmaster\u002Flinuxserver.io\u002Fimg\u002Fquassel-web-banner.png","PUID","100","PGID","QUASSEL_CORE","192.168.1.10","specify the URL or IP address of your Quassel Core instance","QUASSEL_PORT","4242","specify the port of your Quassel Core instance","URL_BASE","\u002Fquassel","Specify a url-base in reverse proxy setups ie. `\u002Fquassel`","\u002Fconfig","this will store config on the docker host","Quassel-web https webui","By default this container webui will be available on `https:\u002F\u002F$SERVER_IP:64443`. To setup this container you can either use the envrionment variables we recommend or manually setup the configuration file by leaving out the `QUASSEL_CORE` environment variable among others. \nThe configuration file using this method can be found at:\n```\n\u002Fconfig\u002Fsettings-user.js\n```\n","json"))