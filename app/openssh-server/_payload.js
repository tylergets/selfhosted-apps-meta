export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q){return {data:{"openssh-server":{_path:"\u002Fapps\u002Fopenssh-server",_dir:"apps",_draft:b,_partial:b,_locale:"en",id:c,name:c,description:g,icon:h,links:[{type:"docker",url:"https:\u002F\u002Fhub.docker.com\u002Fr\u002Flinuxserver\u002Fopenssh-server"},{type:"docs",url:"https:\u002F\u002Fdocs.linuxserver.io\u002Fimages\u002Fdocker-openssh-server"}],containers:[{name:c,image:"linuxserver\u002Fopenssh-server",env:[{id:i,key:i,description:"User ID",default:j},{id:k,key:k,description:"Group ID",default:j},{id:l,default:m,description:n},{id:o,default:p,description:q},{id:r,default:d,description:s},{id:t,default:u,description:v},{id:w,default:x,description:y},{id:z,default:e,description:A},{id:B,default:e,description:C},{id:D,default:E,description:F},{id:G,default:d,description:H},{id:I,default:J,description:K}],volumes:[{container:L,description:M,key:"config"}],ports:[{container:f,description:N,protocol:"tcp",web:b}]}],meta:{"readme-vars":{project_name:c,project_url:"https:\u002F\u002Fwww.openssh.com\u002F",project_logo:h,project_blurb:g,project_lsio_github_repo_url:"https:\u002F\u002Fgithub.com\u002Flinuxserver\u002Fdocker-{{ project_name }}",available_architectures:[{arch:"{{ arch_x86_64 }}",tag:"amd64-latest"},{arch:"{{ arch_arm64 }}",tag:"arm64v8-latest"},{arch:"{{ arch_armhf }}",tag:"arm32v7-latest"}],development_versions:b,development_versions_items:[{tag:"latest",desc:"Stable releases"}],common_param_env_vars_enabled:a,param_container_name:O,param_usage_include_hostname:"optional",param_hostname:O,param_hostname_desc:"Optionally the hostname can be defined.",param_usage_include_vols:a,param_volumes:[{vol_path:L,vol_host_path:"\u002Fpath\u002Fto\u002Fappdata\u002Fconfig",desc:M}],param_usage_include_ports:a,param_ports:[{external_port:f,internal_port:f,port_desc:N}],param_usage_include_env:a,param_env_vars:[{env_var:l,env_value:m,desc:n}],opt_param_usage_include_env:a,opt_param_env_vars:[{env_var:o,env_value:p,desc:q},{env_var:r,env_value:d,desc:s},{env_var:t,env_value:u,desc:v},{env_var:w,env_value:x,desc:y},{env_var:z,env_value:e,desc:A},{env_var:B,env_value:e,desc:C},{env_var:D,env_value:E,desc:F},{env_var:G,env_value:d,desc:H},{env_var:I,env_value:J,desc:K}],optional_block_1:b,optional_block_1_items:"",app_setup_block_enabled:a,app_setup_block:P,changelogs:[{date:"18.10.22:",desc:"Fix wrong behavior of password\u002Fpasswordless sudo"},{date:"11.10.22:",desc:"Rebase to Alpine 3.16, migrate to s6v3."},{date:"15.09.22:",desc:"add netcat-openbsd with support for proxies."},{date:"18.07.22:",desc:"Fix service perms to comply with upgrade to s6 v3."},{date:"16.04.22:",desc:"Rebase to alpine 3.15."},{date:"16.11.21:",desc:"Add PUBLIC_KEY_URL option"},{date:"28.06.21:",desc:"Rebasing to alpine 3.14. Add support for PAM."},{date:"10.02.21:",desc:"Rebasing to alpine 3.13. Add openssh-client for scp."},{date:"21.10.20:",desc:"Implement s6-log for openssh, which adds local timestamps to logs and can be used with a log parser like fail2ban."},{date:"20.10.20:",desc:"Set umask for sftp."},{date:"01.06.20:",desc:"Rebasing to alpine 3.12."},{date:"18.01.20:",desc:"Add key generation script."},{date:"13.01.20:",desc:"Add openssh-sftp-server."},{date:"19.12.19:",desc:"Rebasing to alpine 3.11."},{date:"17.10.19:",desc:"Initial Release."}]}},setup:P,_id:"content:apps:openssh-server.json",_type:Q,title:"Openssh Server",_source:"content",_file:"apps\u002Fopenssh-server.json",_extension:Q}},prerenderedAt:1675118189848}}(true,false,"openssh-server","\u002Fpath\u002Fto\u002Ffile","false","2222","[{{ project_name|capitalize }}]({{ project_url }}) is a sandboxed environment that allows ssh access without giving keys to the entire server.\nGiving ssh access via private key often means giving full access to the server. This container creates a limited and sandboxed environment that others can ssh into.\nThe users only have access to the folders mapped and the processes running inside this container.","https:\u002F\u002Fupload.wikimedia.org\u002Fwikipedia\u002Fen\u002F6\u002F65\u002FOpenSSH_logo.png","PUID","100","PGID","TZ","Europe\u002FLondon","Specify a timezone to use EG Europe\u002FLondon","PUBLIC_KEY","yourpublickey","Optional ssh public key, which will automatically be added to authorized_keys.","PUBLIC_KEY_FILE","Optionally specify a file containing the public key (works with docker secrets).","PUBLIC_KEY_DIR","\u002Fpath\u002Fto\u002Fdirectory\u002Fcontaining\u002F_only_\u002Fpubkeys","Optionally specify a directory containing the public keys (works with docker secrets).","PUBLIC_KEY_URL","https:\u002F\u002Fgithub.com\u002Fusername.keys","Optionally specify a URL containing the public key.","SUDO_ACCESS","Set to `true` to allow `linuxserver.io`, the ssh user, sudo access. Without `USER_PASSWORD` set, this will allow passwordless sudo access.","PASSWORD_ACCESS","Set to `true` to allow user\u002Fpassword ssh access. You will want to set `USER_PASSWORD` or `USER_PASSWORD_FILE` as well.","USER_PASSWORD","password","Optionally set a sudo password for `linuxserver.io`, the ssh user. If this or `USER_PASSWORD_FILE` are not set but `SUDO_ACCESS` is set to true, the user will have passwordless sudo access.","USER_PASSWORD_FILE","Optionally specify a file that contains the password. This setting supersedes the `USER_PASSWORD` option (works with docker secrets).","USER_NAME","linuxserver.io","Optionally specify a user name (Default:`linuxserver.io`)","\u002Fconfig","Contains all relevant configuration files.","ssh port","{{ project_name }}","If `PUBLIC_KEY` or `PUBLIC_KEY_FILE`, or `PUBLIC_KEY_DIR` variables are set, the specified keys will automatically be added to `authorized_keys`. If not, the keys can manually be added to `\u002Fconfig\u002F.ssh\u002Fauthorized_keys` and the container should be restarted.\nRemoving `PUBLIC_KEY` or `PUBLIC_KEY_FILE` variables from docker run environment variables will not remove the keys from `authorized_keys`. `PUBLIC_KEY_FILE` and `PUBLIC_KEY_DIR` can be used with docker secrets.\n\nWe provide the ability to set and allow password based access via the `PASSWORD_ACCESS` and `USER_PASSWORD` variables, though we as an organization discourage using password auth for public facing ssh endpoints.\n\nConnect to server via `ssh -i \u002Fpath\u002Fto\u002Fprivate\u002Fkey -p PORT USER_NAME@SERVERIP`\n\nSetting `SUDO_ACCESS` to `true` by itself will allow passwordless sudo. `USER_PASSWORD` and `USER_PASSWORD_FILE` allow setting an optional sudo password.\n\nThe users only have access to the folders mapped and the processes running inside this container.\nAdd any volume mappings you like for the users to have access to.\nTo install packages or services for users to access, use the LinuxServer container customization methods described [in this blog article](https:\u002F\u002Fblog.linuxserver.io\u002F2019\u002F09\u002F14\u002Fcustomizing-our-containers\u002F).\n\nSample use case is when a server admin would like to have automated incoming backups from a remote server to the local server, but they might not want all the other admins of the remote server to have full access to the local server.\nThis container can be set up with a mounted folder for incoming backups, and rsync installed via LinuxServer container customization described above, so that the incoming backups can proceed, but remote server and its admins' access would be limited to the backup folder.\n\nIt is also possible to run multiple copies of this container with different ports mapped, different folders mounted and access to different private keys for compartmentalized access.\n\n#### TIPS\nYou can volume map your own text file to `\u002Fetc\u002Fmotd` to override the message displayed upon connection.\nYou can optionally set the docker argument `hostname`\n\n## Key Generation\n\nThis container has a helper script to generate an ssh private\u002Fpublic key. In order to generate a key please run:\n```\ndocker run --rm -it --entrypoint \u002Fkeygen.sh linuxserver\u002Fopenssh-server\n```\n\nThen simply follow the prompts.\nThe keys generated by this script are only displayed on your console output, so make sure to save them somewhere after generation.\n","json"))