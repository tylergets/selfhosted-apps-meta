export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){return {data:{ngircd:{_path:"\u002Fapps\u002Fngircd",_dir:"apps",_draft:c,_partial:c,_locale:"en",id:a,name:a,description:e,icon:f,links:[{type:"docker",url:"https:\u002F\u002Fhub.docker.com\u002Fr\u002Flinuxserver\u002Fngircd"},{type:"docs",url:"https:\u002F\u002Fdocs.linuxserver.io\u002Fimages\u002Fdocker-ngircd"}],containers:[{name:a,image:"linuxserver\u002Fngircd",env:[{id:g,key:g,description:"User ID",default:h},{id:i,key:i,description:"Group ID",default:h},{id:j,default:k,description:l}],volumes:[{container:m,description:n,key:"config"}],ports:[{container:d,description:o,protocol:"tcp",web:c}]}],meta:{"readme-vars":{project_name:a,project_url:"https:\u002F\u002Fngircd.barton.de\u002F",project_logo:f,project_blurb:e,project_lsio_github_repo_url:"https:\u002F\u002Fgithub.com\u002Flinuxserver\u002Fdocker-{{ project_name }}",available_architectures:[{arch:"{{ arch_x86_64 }}",tag:"amd64-latest"},{arch:"{{ arch_arm64 }}",tag:"arm64v8-latest"},{arch:"{{ arch_armhf }}",tag:"arm32v7-latest"}],param_container_name:"{{ project_name }}",param_usage_include_vols:b,param_volumes:[{vol_path:m,vol_host_path:"\u002Fpath\u002Fto\u002Fngircd\u002Fconfig",desc:n}],param_usage_include_ports:b,param_ports:[{external_port:d,internal_port:d,port_desc:o}],param_usage_include_env:b,param_env_vars:[{env_var:j,env_value:k,desc:l}],app_setup_block_enabled:b,app_setup_block:p,changelogs:[{date:"11.10.22:",desc:"Rebasing to alpine 3.16, migrate to s6v3."},{date:"23.01.21:",desc:"Rebasing to alpine 3.13."},{date:"01.06.20:",desc:"Rebasing to alpine 3.12."},{date:"19.12.19:",desc:"Rebasing to alpine 3.11."},{date:"04.07.19:",desc:"Initial release."}]}},setup:p,_id:"content:apps:ngircd.json",_type:q,title:"Ngircd",_source:"content",_file:"apps\u002Fngircd.json",_extension:q}},prerenderedAt:1676483555612}}("ngircd",true,false,"6667","[{{ project_name|capitalize }}]({{ project_url }}) is a free, portable and lightweight Internet Relay Chat server for small or private networks, developed under the GNU General Public License (GPL). It is easy to configure, can cope with dynamic IP addresses, and supports IPv6, SSL-protected connections as well as PAM for authentication. It is written from scratch and not based on the original IRCd.","https:\u002F\u002Fraw.githubusercontent.com\u002Flinuxserver\u002Fdocker-templates\u002Fmaster\u002Flinuxserver.io\u002Fimg\u002Fngircd-logo.png","PUID","100","PGID","TZ","Europe\u002FLondon","Specify a timezone to use e.g. Europe\u002FLondon","\u002Fconfig","Where `ngircd.conf` is stored","ngircd port","- To setup ngircd you will need to edit `\u002Fconfig\u002Fngircd.conf` which is created the first time the container is run, edit the file and restart the container to implement any config changes.  \n- For information see the ngircd site [here.](https:\u002F\u002Fgithub.com\u002Fngircd\u002Fngircd\u002Fblob\u002Fmaster\u002Fdoc\u002Fsample-ngircd.conf.tmpl)\n","json"))