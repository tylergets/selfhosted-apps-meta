export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y){return {data:{synclounge:{_path:"\u002Fapps\u002Fsynclounge",_dir:"apps",_draft:a,_partial:a,_locale:"en",id:b,name:b,description:e,icon:f,links:[{type:"docker",url:"https:\u002F\u002Fhub.docker.com\u002Fr\u002Flinuxserver\u002Fsynclounge"},{type:"docs",url:"https:\u002F\u002Fdocs.linuxserver.io\u002Fimages\u002Fdocker-synclounge"}],containers:[{name:b,image:"linuxserver\u002Fsynclounge",env:[{id:g,key:g,description:"User ID",default:h},{id:i,key:i,description:"Group ID",default:h},{id:j,default:k,description:l},{id:m,default:n,description:o},{id:p,default:q,description:r},{id:s,default:t,description:u}],ports:[{container:d,description:v,protocol:"tcp",web:a}]}],meta:{"readme-vars":{project_name:b,project_url:"https:\u002F\u002Fgithub.com\u002Fsamcm\u002Fsynclounge",project_logo:f,project_blurb:e,project_lsio_github_repo_url:"https:\u002F\u002Fgithub.com\u002Flinuxserver\u002Fdocker-{{ project_name }}",available_architectures:[{arch:"{{ arch_x86_64 }}",tag:"amd64-latest"},{arch:"{{ arch_arm64 }}",tag:"arm64v8-latest"},{arch:"{{ arch_armhf }}",tag:"arm32v7-latest"}],common_param_env_vars_enabled:a,param_container_name:"{{ project_name }}",param_usage_include_vols:a,param_volumes:null,param_usage_include_ports:c,param_ports:[{external_port:d,internal_port:d,port_desc:v}],param_usage_include_env:c,param_env_vars:[{env_var:j,env_value:k,desc:l}],opt_param_usage_include_env:c,opt_param_env_vars:[{env_var:m,env_value:n,desc:o},{env_var:p,env_value:q,desc:r},{env_var:s,env_value:t,desc:u}],optional_block_1:a,optional_block_1_items:"",app_setup_block_enabled:c,app_setup_block:w,changelogs:[{date:"29.11.22:",desc:"Rebase to alpine 3.17, upgrade to s6v3."},{date:"19.09.22:",desc:"Rebase to alpine 3.15."},{date:x,desc:"Fix optional dependency builds in aarch64 image."},{date:x,desc:"Rebasing to alpine 3.13."},{date:"28.10.20:",desc:"Update to v4. Env vars `EXTERNAL_URL`, `EXTERNAL_SERVER_PORT` and `AUTOJOIN_PASSWORD` are deprecated and no longer have any effect. Env vars `AUTOJOIN_ENABLED` and `AUTOJOIN_ROOM` are still working but will be removed in the future in favor of synclounge's built-in var `autojoin__room`. If you are reverse proxying, do not forget to update your proxy settings ([here](https:\u002F\u002Fgithub.com\u002Flinuxserver\u002Freverse-proxy-confs\u002Fblob\u002Fmaster\u002Fsynclounge.subdomain.conf.sample) and [here](https:\u002F\u002Fgithub.com\u002Flinuxserver\u002Freverse-proxy-confs\u002Fblob\u002Fmaster\u002Fsynclounge.subfolder.conf.sample)) as the server port and addresses are changed."},{date:"11.10.20:",desc:"Pin builds to upstream commit `6aecc9bd` while evaluating the breaking changes upstream."},{date:"27.09.20:",desc:"Updating the external repo endpoint."},{date:"01.06.20:",desc:"Rebasing to alpine 3.12."},{date:"11.05.20:",desc:"Initial Release."}]}},setup:w,_id:"content:apps:synclounge.json",_type:y,title:"Synclounge",_source:"content",_file:"apps\u002Fsynclounge.json",_extension:y}},prerenderedAt:1676483556022}}(false,"synclounge",true,"8088","[{{ project_name|capitalize }}]({{ project_url }}) is a third party tool that allows you to watch Plex in sync with your friends\u002Ffamily, wherever you are.","https:\u002F\u002Fraw.githubusercontent.com\u002Flinuxserver\u002Fdocker-templates\u002Fmaster\u002Flinuxserver.io\u002Fimg\u002Fsynclounge-banner.png","PUID","100","PGID","TZ","Europe\u002FLondon","Specify a timezone to use EG Europe\u002FLondon","AUTH_LIST","plexuser1,plexuser2,email1,machineid1","If set, only the users defined here and the users of the plex servers defined here will be able to access the server. Use e-mails, plex usernames and\u002For plex server machine ids, comma separated, no spaces.","AUTOJOIN_ENABLED","false","DEPRECATED - (Still works but will be removed in the future in favor of the built-in var `autojoin__room`) - Set to `true` to let users autojoin the server and a room (specified by the `AUTOJOIN_ROOM` var).","AUTOJOIN_ROOM","roomname","DEPRECATED - (Still works but will be removed in the future in favor of the built-in var `autojoin__room`) - Set the room name for auto joining (requires `AUTOJOIN_ENABLED` set to `true`).","Web app and server port","The web app and the server are both accessible at `http:\u002F\u002FSERVERIP:8088`.\n\nNote: It is recommended to use `http` as the external proto with a reverse proxy due to `https` not working with external plex clients.\n","12.02.21:","json"))