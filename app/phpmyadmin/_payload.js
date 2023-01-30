export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w){return {data:{phpmyadmin:{_path:"\u002Fapps\u002Fphpmyadmin",_dir:"apps",_draft:c,_partial:c,_locale:"en",id:b,name:b,description:e,icon:f,links:[{type:"docker",url:"https:\u002F\u002Fhub.docker.com\u002Fr\u002Flinuxserver\u002Fphpmyadmin"},{type:"docs",url:"https:\u002F\u002Fdocs.linuxserver.io\u002Fimages\u002Fdocker-phpmyadmin"}],containers:[{name:b,image:"linuxserver\u002Fphpmyadmin",env:[{id:g,key:g,description:"User ID",default:h},{id:i,key:i,description:"Group ID",default:h},{id:j,default:k,description:l},{id:m,default:n,description:o},{id:p,default:q,description:r}],volumes:[{container:s,description:t,key:"config"}],ports:[{container:d,description:u,protocol:"tcp",web:c}]}],meta:{"readme-vars":{project_name:b,project_url:"https:\u002F\u002Fgithub.com\u002Fphpmyadmin\u002Fphpmyadmin\u002F",project_logo:f,project_blurb:e,project_lsio_github_repo_url:"https:\u002F\u002Fgithub.com\u002Flinuxserver\u002Fdocker-{{ project_name }}",available_architectures:[{arch:"{{ arch_x86_64 }}",tag:"amd64-latest"},{arch:"{{ arch_arm64 }}",tag:"arm64v8-latest"},{arch:"{{ arch_armhf }}",tag:"arm32v7-latest"}],common_param_env_vars_enabled:a,param_container_name:"{{ project_name }}",param_usage_include_env:a,param_env_vars:[{env_var:j,env_value:k,desc:l}],opt_param_usage_include_env:a,opt_param_env_vars:[{env_var:m,env_value:n,desc:o},{env_var:p,env_value:q,desc:r}],param_usage_include_ports:a,param_ports:[{external_port:d,internal_port:d,port_desc:u}],param_usage_include_vols:a,param_volumes:[{vol_path:s,vol_host_path:"\u002Fpath\u002Fto\u002Fappdata\u002Fconfig",desc:t}],app_setup_block_enabled:a,app_setup_block:v,changelogs:[{date:"20.01.23:",desc:"Rebase to alpine 3.17 with php8.1."},{date:"18.11.22:",desc:"Rebasing to Alpine 3.16, migrate to s6v3."},{date:"20.08.22:",desc:"Rebasing to Alpine 3.15 with php8. Restructure nginx configs ([see changes announcement](https:\u002F\u002Finfo.linuxserver.io\u002Fissues\u002F2022-08-20-nginx-base))."},{date:"23.01.22:",desc:"Pin versions to 5.x.x."},{date:"14.06.21:",desc:"Initial Release."}]}},setup:v,_id:"content:apps:phpmyadmin.json",_type:w,title:"Phpmyadmin",_source:"content",_file:"apps\u002Fphpmyadmin.json",_extension:w}},prerenderedAt:1675118189887}}(true,"phpmyadmin",false,"80","[{{ project_name|capitalize }}]({{ project_url }}) is a free software tool written in PHP, intended to handle the administration of MySQL over the Web. phpMyAdmin supports a wide range of operations on MySQL and MariaDB.\n","https:\u002F\u002Fraw.githubusercontent.com\u002Flinuxserver\u002Fdocker-templates\u002Fmaster\u002Flinuxserver.io\u002Fimg\u002Fphpmyadmin-logo.png","PUID","100","PGID","TZ","America\u002FNew_York","Specify a timezone to use EG America\u002FNew_York","PMA_ARBITRARY","1","Set to `1` to allow you to connect to any server. Setting to `0` will only allow you to connect to specified hosts (See Application Setup)","PMA_ABSOLUTE_URI","https:\u002F\u002Fphpmyadmin.example.com","Set the URL you will use to access the web frontend","\u002Fconfig","Contains all relevant configuration files.","Port for web frontend","This image uses nginx, in contrast to the official images which offer fpm-only or Apache variants.\n\nWe support all of the official [environment variables](https:\u002F\u002Fdocs.phpmyadmin.net\u002Fen\u002Flatest\u002Fsetup.html#docker-environment-variables) for configuration as well as directly editing the config files.\n\nFor more information check out the [phpmyadmin documentation](https:\u002F\u002Fwww.phpmyadmin.net\u002Fdocs\u002F).\n","json"))