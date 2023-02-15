export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){return {data:{xbackbone:{_path:"\u002Fapps\u002Fxbackbone",_dir:"apps",_draft:a,_partial:a,_locale:"en",id:b,name:b,description:f,icon:g,links:[{type:"docker",url:"https:\u002F\u002Fhub.docker.com\u002Fr\u002Flinuxserver\u002Fxbackbone"},{type:"docs",url:"https:\u002F\u002Fdocs.linuxserver.io\u002Fimages\u002Fdocker-xbackbone"}],containers:[{name:b,image:"linuxserver\u002Fxbackbone",env:[{id:h,key:h,description:"User ID",default:i},{id:j,key:j,description:"Group ID",default:i},{id:k,default:l,description:m}],volumes:[{container:n,description:o,key:"config"}],ports:[{container:d,description:p,protocol:q,web:a},{container:e,description:r,protocol:q,web:a}]}],meta:{"readme-vars":{project_name:b,project_url:"https:\u002F\u002Fgithub.com\u002FSergiX44\u002FXBackBone",project_logo:g,project_blurb:f,project_lsio_github_repo_url:"https:\u002F\u002Fgithub.com\u002Flinuxserver\u002Fdocker-{{ project_name }}",available_architectures:[{arch:"{{ arch_x86_64 }}",tag:"amd64-latest"},{arch:"{{ arch_arm64 }}",tag:"arm64v8-latest"},{arch:"{{ arch_armhf }}",tag:"arm32v7-latest"}],param_container_name:"{{ project_name }}",param_usage_include_vols:c,param_volumes:[{vol_path:n,vol_host_path:"\u002Fpath\u002Fto\u002Fdata",desc:o}],param_usage_include_env:c,param_env_vars:[{env_var:k,env_value:l,desc:m}],param_usage_include_ports:c,param_ports:[{external_port:d,internal_port:d,port_desc:p},{external_port:e,internal_port:e,port_desc:r}],app_setup_block_enabled:c,app_setup_block:s,changelogs:[{date:"19.01.23:",desc:"Rebase to alpine 3.17 with php8.1."},{date:"04.11.22:",desc:"Rebase to Alpine 3.16, migrate to s6v3."},{date:"01.11.22:",desc:"Move application install to \u002Fapp\u002Fwww\u002Fpublic, add migration notices for existing users. Container updates should now update the application correctly"},{date:"20.08.22:",desc:"Rebasing to alpine 3.15 with php8. Restructure nginx configs ([see changes announcement](https:\u002F\u002Finfo.linuxserver.io\u002Fissues\u002F2022-08-20-nginx-base))."},{date:"02.08.22:",desc:"Added note about updating."},{date:"06.06.21:",desc:"Initial Release."}]}},setup:s,_id:"content:apps:xbackbone.json",_type:t,title:"Xbackbone",_source:"content",_file:"apps\u002Fxbackbone.json",_extension:t}},prerenderedAt:1676483556262}}(false,"xbackbone",true,"80","443","[{{ project_name|capitalize }}]({{ project_url }}) is a simple, self-hosted, lightweight PHP file manager that support the instant sharing tool ShareX and *NIX systems. It supports uploading and displaying images, GIF, video, code, formatted text, and file downloading and uploading. Also have a web UI with multi user management, past uploads history and search support.\n","https:\u002F\u002Fraw.githubusercontent.com\u002FSergiX44\u002FXBackBone\u002Fmaster\u002Fdocs\u002Fimg\u002Fxbackbone.png","PUID","100","PGID","TZ","Europe\u002FOslo","Timezone (i.e., Europe\u002FOslo)","\u002Fconfig","config directory volume mapping","http gui","tcp","https gui","Access the WebUI at \\\u003Cyour-ip\u003E:80\u002F443. Follow the installation wizard. For more information, check out [XBackBone](https:\u002F\u002Fgithub.com\u002FSergiX44\u002FXBackBone).\n\nIf you want to change the PHP max upload size you can override the php.ini file by adding options in `\u002Fconfig\u002Fphp\u002Fphp-local.ini`\n\nExample:\n\n```ini\n  upload_max_filesize = 25M\n  post_max_size = 25M\n```\n\nFor reverse proxying, remember to change the `base_url` in `\u002Fconfig\u002Fwww\u002Fxbackbone\u002Fconfig.php` to your domain if you initially set up the application with a local url. E.g. `'base_url' =\u003E 'https:\u002F\u002Fimages.yourdomain.com',`\n","json"))