export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){return {data:{pwndrop:{_path:"\u002Fapps\u002Fpwndrop",_dir:"apps",_draft:b,_partial:b,_locale:"en",id:c,name:c,description:e,icon:f,links:[{type:"docker",url:"https:\u002F\u002Fhub.docker.com\u002Fr\u002Flinuxserver\u002Fpwndrop"},{type:"docs",url:"https:\u002F\u002Fdocs.linuxserver.io\u002Fimages\u002Fdocker-pwndrop"}],containers:[{name:c,image:"linuxserver\u002Fpwndrop",env:[{id:g,key:g,description:"User ID",default:h},{id:i,key:i,description:"Group ID",default:h},{id:j,default:k,description:l},{id:m,default:n,description:o}],volumes:[{container:p,description:q,key:"config"}],ports:[{container:d,description:r,protocol:"tcp",web:b}]}],meta:{"readme-vars":{project_name:c,project_url:"https:\u002F\u002Fgithub.com\u002Fkgretzky\u002Fpwndrop",project_logo:f,project_blurb:e,project_lsio_github_repo_url:"https:\u002F\u002Fgithub.com\u002Flinuxserver\u002Fdocker-{{ project_name }}",available_architectures:[{arch:"{{ arch_x86_64 }}",tag:"amd64-latest"},{arch:"{{ arch_arm64 }}",tag:"arm64v8-latest"},{arch:"{{ arch_armhf }}",tag:"arm32v7-latest"}],development_versions:b,development_versions_items:[{tag:"latest",desc:"Stable releases"},{tag:"development",desc:"Prereleases from their GitHub"}],common_param_env_vars_enabled:a,param_container_name:"{{ project_name }}",param_usage_include_vols:a,param_volumes:[{vol_path:p,vol_host_path:"\u002Fpath\u002Fto\u002Fappdata",desc:q}],param_usage_include_ports:a,param_ports:[{external_port:d,internal_port:d,port_desc:r}],param_usage_include_env:a,param_env_vars:[{env_var:j,env_value:k,desc:l}],opt_param_usage_include_env:a,opt_param_env_vars:[{env_var:m,env_value:n,desc:o}],optional_block_1:b,optional_block_1_items:"",app_setup_block_enabled:a,app_setup_block:s,changelogs:[{date:"19.09.22:",desc:"Rebasing to alpine 3.15."},{date:"23.01.21:",desc:"Rebasing to alpine 3.13."},{date:"01.06.20:",desc:"Rebasing to alpine 3.12."},{date:"17.04.20:",desc:"Initial Release."}]}},setup:s,_id:"content:apps:pwndrop.json",_type:t,title:"Pwndrop",_source:"content",_file:"apps\u002Fpwndrop.json",_extension:t}},prerenderedAt:1675118189942}}(true,false,"pwndrop","8080","[{{ project_name|capitalize }}]({{ project_url }}) is a self-deployable file hosting service for sending out red teaming payloads or securely sharing your private files over HTTP and WebDAV.","https:\u002F\u002Fraw.githubusercontent.com\u002Fkgretzky\u002Fpwndrop\u002Fmaster\u002Fmedia\u002Fpwndrop-logo-512.png","PUID","100","PGID","TZ","Europe\u002FLondon","Specify a timezone to use EG Europe\u002FLondon","SECRET_PATH","\u002Fpwndrop","Secret path for admin access. Defaults to `\u002Fpwndrop`. This parameter only takes effect during initial install; it can later be changed in the web gui.","\u002Fconfig","Contains all relevant configuration and data.","web gui","Access the web gui at `http:\u002F\u002F\u003Cyour-ip\u003E:8080\u002Fpwndrop` (replace `\u002Fpwndrop` with your SECRET_PATH if you set one).\n","json"))