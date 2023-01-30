export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){return {data:{darktable:{_path:"\u002Fapps\u002Fdarktable",_dir:"apps",_draft:b,_partial:b,_locale:"en",id:c,name:c,description:e,icon:f,links:[{type:"docker",url:"https:\u002F\u002Fhub.docker.com\u002Fr\u002Flinuxserver\u002Fdarktable"},{type:"docs",url:"https:\u002F\u002Fdocs.linuxserver.io\u002Fimages\u002Fdocker-darktable"}],containers:[{name:c,image:"linuxserver\u002Fdarktable",env:[{id:g,key:g,description:"User ID",default:h},{id:i,key:i,description:"Group ID",default:h},{id:j,default:k,description:l}],volumes:[{container:m,description:n,key:"config"}],ports:[{container:d,description:o,protocol:"tcp",web:b}]}],meta:{"readme-vars":{project_name:c,project_url:"https:\u002F\u002Fwww.darktable.org\u002F",project_logo:f,project_blurb:e,project_lsio_github_repo_url:"https:\u002F\u002Fgithub.com\u002Flinuxserver\u002Fdocker-{{ project_name }}",project_blurb_optional_extras_enabled:b,available_architectures:[{arch:"{{ arch_x86_64 }}",tag:"latest"},{arch:"{{ arch_arm64 }}",tag:"arm64v8-latest"}],development_versions:b,common_param_env_vars_enabled:a,param_container_name:"{{ project_name }}",param_usage_include_env:a,param_env_vars:[{env_var:j,env_value:k,desc:l}],param_usage_include_vols:a,param_volumes:[{vol_path:m,vol_host_path:"\u002Fpath\u002Fto\u002Fconfig",desc:n}],param_usage_include_ports:a,param_ports:[{external_port:d,internal_port:d,port_desc:o}],opt_security_opt_param:a,opt_security_opt_param_vars:[{run_var:"seccomp=unconfined",compose_var:"seccomp:unconfined",desc:"For Docker Engine only, many modern gui apps need this to function on older hosts as syscalls are unknown to Docker."}],app_setup_block_enabled:a,app_setup_block:p,changelogs:[{date:"23.10.22:",desc:"Rebase to Alpine 3.16, migrate to s6v3."},{date:"31.12.21:",desc:"Rebase to Alpine 3.15."},{date:"01.10.21:",desc:"Rebase to Alpine 3.14."},{date:"07.04.21:",desc:"Initial release."}]}},setup:p,_id:"content:apps:darktable.json",_type:q,title:"Darktable",_source:"content",_file:"apps\u002Fdarktable.json",_extension:q}},prerenderedAt:1675118189230}}(true,false,"darktable","3000","[darktable]({{ project_url }}) is an open source photography workflow application and raw developer. A virtual lighttable and darkroom for photographers. It manages your digital negatives in a database, lets you view them through a zoomable lighttable and enables you to develop raw images and enhance them.","https:\u002F\u002Fraw.githubusercontent.com\u002Flinuxserver\u002Fdocker-templates\u002Fmaster\u002Flinuxserver.io\u002Fimg\u002Fdarktable-logo.png","PUID","100","PGID","TZ","Europe\u002FLondon","Specify a timezone to use EG Europe\u002FLondon.","\u002Fconfig","Users home directory in the container, stores program settings and images","Darktable desktop gui.","The application can be accessed at:\n\n* http:\u002F\u002Fyourhost:3000\u002F\n\nBy default the user\u002Fpass is abc\u002Fabc, if you change your password or want to login manually to the GUI session for any reason use the following link:\n\n* http:\u002F\u002Fyourhost:3000\u002F?login=true\n","json"))