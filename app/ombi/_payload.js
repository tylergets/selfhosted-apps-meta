export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){return {data:{ombi:{_path:"\u002Fapps\u002Fombi",_dir:"apps",_draft:b,_partial:b,_locale:"en",id:c,name:c,description:e,icon:f,links:[{type:"docker",url:"https:\u002F\u002Fhub.docker.com\u002Fr\u002Flinuxserver\u002Fombi"},{type:"docs",url:"https:\u002F\u002Fdocs.linuxserver.io\u002Fimages\u002Fdocker-ombi"}],containers:[{name:c,image:"linuxserver\u002Fombi",env:[{id:g,key:g,description:"User ID",default:h},{id:i,key:i,description:"Group ID",default:h},{id:j,default:k,description:l},{id:m,default:n,description:o}],volumes:[{container:p,description:q,key:"config"}],ports:[{container:d,description:r,protocol:"tcp",web:b}]}],meta:{"readme-vars":{project_name:c,project_url:"https:\u002F\u002Fombi.io",project_logo:f,project_blurb:e,project_lsio_github_repo_url:"https:\u002F\u002Fgithub.com\u002Flinuxserver\u002Fdocker-{{ project_name }}",available_architectures:[{arch:"{{ arch_x86_64 }}",tag:"amd64-latest"},{arch:"{{ arch_arm64 }}",tag:"arm64v8-latest"},{arch:"{{ arch_armhf }}",tag:"arm32v7-latest"}],development_versions:a,development_versions_items:[{tag:"latest",desc:"Stable Ombi releases"},{tag:"development",desc:"Releases from the `develop` branch of Ombi"}],common_param_env_vars_enabled:a,param_container_name:"{{ project_name }}",param_usage_include_vols:a,param_volumes:[{vol_path:p,vol_host_path:"\u002Fpath\u002Fto\u002Fappdata\u002Fconfig",desc:q}],param_usage_include_ports:a,param_ports:[{external_port:d,internal_port:d,port_desc:r}],param_usage_include_env:a,param_env_vars:[{env_var:j,env_value:k,desc:l}],opt_param_usage_include_env:a,opt_param_env_vars:[{env_var:m,env_value:n,desc:o}],optional_block_1:b,optional_block_1_items:"",app_setup_block_enabled:a,app_setup_block:s,changelogs:[{date:"11.09.22:",desc:"Migrate to s6v3."},{date:"01.05.22:",desc:"Rebase to Jammy."},{date:"26.04.21:",desc:"Update tarball name, allow for v4 builds in stable."},{date:"18.01.21:",desc:"Update upstream repo. Deprecate `v4-preview` tag, which is merged to `development` tag upstream."},{date:"14.04.20:",desc:"Add Ombi donate links."},{date:"10.05.19:",desc:"Added an optional env variable for base url setting."},{date:"23.03.19:",desc:"Switching to new Base images, shift to arm32v7 tag."},{date:"22.02.19:",desc:"Clarify info on tags and development builds."},{date:"25.01.19:",desc:"Add info on tags and development builds."},{date:"09.01.19:",desc:"Switch to multi-arch builds and add aarch64 image."},{date:"11.03.18:",desc:"Add HOME env to Dockerfile."},{date:"05.03.18:",desc:"Switch to Ombi v3 stable based on .net core."},{date:"26.01.18:",desc:"Fix continuation lines."},{date:"16.04.17:",desc:"Switch to using inhouse mono baseimage."},{date:"17.02.17:",desc:"Initial Release."}]}},setup:s,_id:"content:apps:ombi.json",_type:t,title:"Ombi",_source:"content",_file:"apps\u002Fombi.json",_extension:t}},prerenderedAt:1675118189840}}(true,false,"ombi","3579","[{{ project_name|capitalize }}]({{ project_url }}) allows you to host your own Plex Request and user management system.\nIf you are sharing your Plex server with other users, allow them to request new content using an easy to manage interface!\nManage all your requests for Movies and TV with ease, leave notes for the user and get notification when a user requests something.\nAllow your users to post issues against their requests so you know there is a problem with the audio etc.\nEven automatically send them weekly newsletters of new content that has been added to your Plex server!","https:\u002F\u002Fraw.githubusercontent.com\u002Flinuxserver\u002Fdocker-templates\u002Fmaster\u002Flinuxserver.io\u002Fimg\u002Fombi.png","PUID","100","PGID","TZ","Europe\u002FLondon","Specify a timezone to use EG Europe\u002FLondon","BASE_URL","\u002Fombi","Subfolder can optionally be defined as an env variable for reverse proxies. Keep in mind that once this value is defined, the gui setting for base url no longer works. To use the gui setting, remove this env variable.","\u002Fconfig","Contains all relevant configuration files.","web gui","Access the webui at `\u003Cyour-ip\u003E:3579`. Follow the setup wizard on initial install.  Then configure the required services.\n","json"))