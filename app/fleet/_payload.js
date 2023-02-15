export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E){return {data:{fleet:{_path:"\u002Fapps\u002Ffleet",_dir:"apps",_draft:a,_partial:a,_locale:"en",id:d,name:d,description:f,icon:"https:\u002F\u002Fraw.githubusercontent.com\u002Fwalkxcode\u002Fdashboard-icons\u002Fmain\u002Fpng\u002Ffleet.png",links:[{type:"docker",url:"https:\u002F\u002Fhub.docker.com\u002Fr\u002Flinuxserver\u002Ffleet"},{type:"docs",url:"https:\u002F\u002Fdocs.linuxserver.io\u002Fimages\u002Fdocker-fleet"}],containers:[{name:d,image:"linuxserver\u002Ffleet",env:[{id:g,key:g,description:"User ID",default:h},{id:i,key:i,description:"Group ID",default:h},{id:j,default:k,description:l},{id:m,default:n,description:o},{id:p,default:q,description:r},{id:s,default:t,description:u},{id:v,default:w,description:x}],volumes:[{container:y,description:z,key:"config"}],ports:[{container:e,description:A,protocol:"tcp",web:a}]}],meta:{"readme-vars":{project_name:d,project_url:"https:\u002F\u002Fgithub.com\u002Flinuxserver\u002Ffleet",project_logo:B,project_blurb:f,project_lsio_github_repo_url:"https:\u002F\u002Fgithub.com\u002Flinuxserver\u002Fdocker-{{ project_name }}",project_blurb_optional_extras_enabled:a,project_blurb_optional_extras:[],available_architectures:[{arch:"{{ arch_x86_64 }}",tag:"amd64-latest"},{arch:"{{ arch_arm64 }}",tag:"arm64v8-latest"},{arch:"{{ arch_armhf }}",tag:"arm32v7-latest"}],development_versions:a,development_versions_items:c,common_param_env_vars_enabled:b,param_container_name:"{{ project_name }}",param_usage_include_net:a,param_usage_include_env:b,param_env_vars:[{env_var:j,env_value:k,desc:l},{env_var:m,env_value:n,desc:o},{env_var:p,env_value:q,desc:r},{env_var:s,env_value:t,desc:u}],param_usage_include_vols:b,param_volumes:[{vol_path:y,vol_host_path:"\u003C\u002Fpath\u002Fto\u002Fappdata\u002Fconfig\u003E",desc:z}],param_usage_include_ports:b,param_ports:[{external_port:e,internal_port:e,port_desc:A}],opt_param_usage_include_env:b,opt_param_env_vars:[{env_var:v,env_value:w,desc:x}],opt_param_usage_include_vols:a,opt_param_volumes:c,opt_param_usage_include_ports:a,opt_param_ports:c,opt_param_device_map:a,opt_param_devices:c,opt_cap_add_param:a,opt_cap_add_param_vars:c,optional_block_1:a,optional_block_1_items:B,app_setup_block_enabled:b,app_setup_block:C,changelogs:[{date:"02.05.22:",desc:"Rebase to Alpine 3.15."},{date:"13.12.21:",desc:"Add mitigations for CVE-2021-44228"},{date:"26.04.20:",desc:"Updated to keep in line with v2.0.0 branch of Fleet"},{date:"19.12.19:",desc:"Rebasing to alpine 3.11."},{date:D,desc:"Rebasing to alpine 3.10."},{date:D,desc:"Stop container if fleet fails."},{date:"19.05.19:",desc:"Use new base images for arm versions."},{date:"01.04.19:",desc:"Initial Release"}]}},setup:C,_id:"content:apps:fleet.json",_type:E,title:"Fleet",_source:"content",_file:"apps\u002Ffleet.json",_extension:E}},prerenderedAt:1676483555185}}(false,true,null,"fleet","8080","[{{ project_name|capitalize }}]({{ project_url }}) provides an online web interface which displays a set of maintained images from one or more owned repositories.","PUID","100","PGID","fleet_admin_authentication_type","DATABASE","A switch to define how Fleet manages user logins. If set to DATABASE, see the related optional params. Can be set to either DATABASE or PROPERTIES.","fleet_database_url","jdbc:mariadb:\u002F\u002F\u003Curl\u003E:3306\u002Ffleet","The full JDBC connection string to the Fleet database","fleet_database_username","fleet_user","The username with the relevant GRANT permissions for the database","fleet_database_password","dbuserpassword","The database user's password.","fleet_admin_secret","randomstring","A string used as part of the password key derivation process.","\u002Fconfig","The primary config file and rolling log files.","Http port","","Navigate to `http:\u002F\u002Fyour_ip_here:8080` to display the home page. If `DATABASE` is selected as the preferred authentication process, ensure that you set up an\ninitial user via `http:\u002F\u002Fyour_ip_here:8080\u002Fsetup`. Once done, that page will no longer be available. A restart is preferable as it will remove the page altogether.\nOnce complete, you can log into the app via `http:\u002F\u002Fyour_ip_here:8080\u002Flogin` to manage your repositories.\n","02.07.19:","json"))