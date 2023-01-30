export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){return {data:{digikam:{_path:"\u002Fapps\u002Fdigikam",_dir:"apps",_draft:b,_partial:b,_locale:"en",id:c,name:c,description:d,icon:e,links:[{type:"docker",url:"https:\u002F\u002Fhub.docker.com\u002Fr\u002Flinuxserver\u002Fdigikam"},{type:"docs",url:"https:\u002F\u002Fdocs.linuxserver.io\u002Fimages\u002Fdocker-digikam"}],containers:[{name:c,image:"linuxserver\u002Fdigikam",env:[{id:f,key:f,description:"User ID",default:g},{id:h,key:h,description:"Group ID",default:g},{id:i,default:j,description:k},{id:l,default:m,description:n},{id:o,default:p,description:q}],volumes:[{container:r,description:s,key:"config"}]}],meta:{"readme-vars":{project_name:c,project_url:"https:\u002F\u002Fwww.digikam.org\u002F",project_logo:e,project_blurb:d,project_lsio_github_repo_url:"https:\u002F\u002Fgithub.com\u002Flinuxserver\u002Fdocker-{{ project_name }}",project_blurb_optional_extras_enabled:b,available_architectures:[{arch:"{{ arch_x86_64 }}",tag:"latest"},{arch:"{{ arch_arm64 }}",tag:"arm64v8-latest"},{arch:"{{ arch_armhf }}",tag:"arm32v7-latest"}],development_versions:b,common_param_env_vars_enabled:a,param_container_name:"{{ project_name }}",param_usage_include_env:a,param_usage_include_ports:b,param_env_vars:[{env_var:i,env_value:j,desc:k}],opt_param_usage_include_env:a,opt_param_env_vars:[{env_var:l,env_value:m,desc:n},{env_var:o,env_value:p,desc:q}],param_usage_include_vols:a,param_volumes:[{vol_path:r,vol_host_path:"\u002Fpath\u002Fto\u002Fconfig",desc:s}],opt_param_usage_include_ports:a,opt_param_ports:[{external_port:t,internal_port:t,port_desc:"digiKam desktop gui"}],app_setup_block_enabled:a,app_setup_block:u,changelogs:[{date:"20.01.23:",desc:"Added breeze-icons package for icon support."},{date:"21.11.22:",desc:"Trigger upon baseimage updates (arch being a rolling distro has too many dependency breaks otherwise). Release version will be the baseimage build date going forward."},{date:"20.10.22:",desc:"Migrate to s6v3."},{date:"07.03.22:",desc:"Add Exiftool and firefox for image exports."},{date:"20.02.22:",desc:"Add MariaDB, expand documentation."},{date:"15.02.22:",desc:"Rebase to Arch."},{date:"27.12.21:",desc:"Rebase to focal to resolve dependency issues."},{date:"27.03.21:",desc:"Download link fixed."},{date:"20.05.20:",desc:"Initial release."}]}},setup:u,_id:"content:apps:digikam.json",_type:v,title:"Digikam",_source:"content",_file:"apps\u002Fdigikam.json",_extension:v}},prerenderedAt:1675118189266}}(true,false,"digikam","[digiKam]({{ project_url }}): Professional Photo Management with the Power of Open Source","https:\u002F\u002Fraw.githubusercontent.com\u002Flinuxserver\u002Fdocker-templates\u002Fmaster\u002Flinuxserver.io\u002Fimg\u002Fdigikam.png","PUID","100","PGID","TZ","America\u002FNew_York","Specify a timezone to use EG America\u002FNew_York.","SUBFOLDER","\u002F","Specify a subfolder to use with reverse proxies, IE `\u002Fsubfolder\u002F`","KEYBOARD","en-us-qwerty","See the keyboard layouts section for more information and options.","\u002Fconfig","Users home directory in the container, stores database.","3000","The application can be accessed at:\n\n* http:\u002F\u002Fyourhost:3000\u002F\n\nBy default the user\u002Fpass is abc\u002Fabc, if you change your password or want to login manually to the GUI session for any reason use the following link:\n\n* http:\u002F\u002Fyourhost:3000\u002F?login=true\n\nYou can also force login on the '\u002F' path without this parameter by passing the environment variable `-e AUTO_LOGIN=false`.\n\n#### Mysql Internal\n\nWhen using mysql internal mode for the database you will need to click on \"Find\" Button for all the required binaries (mysql_install_db,mysqladmin,mysqld). Then select the binary file and press Open.\n\n#### Keyboard Layouts\n\nThis should match the layout on the computer you are accessing the container from.\nThe keyboard layouts available for use are:\n* da-dk-qwerty- Danish keyboard\n* de-ch-qwertz- Swiss German keyboard (qwertz)\n* de-de-qwertz- German keyboard (qwertz) - **OSK available**\n* en-gb-qwerty- English (UK) keyboard\n* en-us-qwerty- English (US) keyboard - **OSK available** **DEFAULT**\n* es-es-qwerty- Spanish keyboard - **OSK available**\n* fr-ch-qwertz- Swiss French keyboard (qwertz)\n* fr-fr-azerty- French keyboard (azerty) - **OSK available**\n* it-it-qwerty- Italian keyboard - **OSK available**\n* ja-jp-qwerty- Japanese keyboard\n* pt-br-qwerty- Portuguese Brazilian keyboard\n* sv-se-qwerty- Swedish keyboard\n* tr-tr-qwerty- Turkish-Q keyboard\n","json"))