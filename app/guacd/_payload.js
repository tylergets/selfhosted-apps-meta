export default (function(a,b,c,d,e,f,g,h,i,j,k,l){return {data:{guacd:{_path:"\u002Fapps\u002Fguacd",_dir:"apps",_draft:a,_partial:a,_locale:"en",id:b,name:b,description:d,icon:e,links:[{type:"docker",url:"https:\u002F\u002Fhub.docker.com\u002Fr\u002Flinuxserver\u002Fguacd"},{type:"docs",url:"https:\u002F\u002Fdocs.linuxserver.io\u002Fimages\u002Fdocker-guacd"}],containers:[{name:b,image:"linuxserver\u002Fguacd",env:[{id:f,key:f,description:"User ID",default:g},{id:h,key:h,description:"Group ID",default:g}],ports:[{container:c,description:i,protocol:"tcp",web:a}]}],meta:{"readme-vars":{project_name:b,project_url:"https:\u002F\u002Fguacamole.apache.org\u002F",project_logo:e,project_blurb:d,project_lsio_github_repo_url:"https:\u002F\u002Fgithub.com\u002Flinuxserver\u002Fdocker-{{ project_name }}",available_architectures:[{arch:"{{ arch_x86_64 }}",tag:"amd64-latest"},{arch:"{{ arch_arm64 }}",tag:"arm64v8-latest"},{arch:"{{ arch_armhf }}",tag:"arm32v7-latest"}],param_container_name:"{{ project_name }}",common_param_env_vars_enabled:a,param_usage_include_vols:a,param_usage_include_ports:j,param_ports:[{external_port:c,internal_port:c,port_desc:i}],param_usage_include_env:a,app_setup_block_enabled:j,app_setup_block:k,changelogs:[{date:"11.03.22:",desc:"Bump to 1.4.0."},{date:"15.05.21:",desc:"Add terminus font for SSH support."},{date:"08.05.21:",desc:"Bump to 1.3.0, rebase to Alpine."},{date:"27.07.20:",desc:"Bump to 1.2.0."},{date:"17.04.20:",desc:"Bump back 1.1.0, rebase to focal"},{date:"08.02.20:",desc:"Bump to 1.1.0."},{date:"25.05.19:",desc:"Initial Release."}]}},setup:k,_id:"content:apps:guacd.json",_type:l,title:"Guacd",_source:"content",_file:"apps\u002Fguacd.json",_extension:l}},prerenderedAt:1676483555231}}(false,"guacd","4822","[{{ project_name|capitalize }}]({{ project_url }}) - Apache Guacamole is a clientless remote desktop gateway. It supports standard protocols like VNC, RDP, and SSH. This container is only the backend server component needed to use The official or 3rd party HTML5 frontends.\n","https:\u002F\u002Fraw.githubusercontent.com\u002Flinuxserver\u002Fdocker-templates\u002Fmaster\u002Flinuxserver.io\u002Fimg\u002Fguacd.png","PUID","100","PGID","Port Guacamole server listens on",true,"This is a backend only service, to leverage Guacd server you need to use either the official Java frontend [guacamole-client](https:\u002F\u002Fgithub.com\u002Fapache\u002Fguacamole-client) or an open source alternative like [guacamole-lite](https:\u002F\u002Fgithub.com\u002Fvadimpronin\u002Fguacamole-lite). \n","json"))