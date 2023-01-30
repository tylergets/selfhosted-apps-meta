export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z){return {data:{healthchecks:{_path:"\u002Fapps\u002Fhealthchecks",_dir:"apps",_draft:d,_partial:d,_locale:"en",id:c,name:c,description:f,icon:g,links:[{type:"docker",url:"https:\u002F\u002Fhub.docker.com\u002Fr\u002Flinuxserver\u002Fhealthchecks"},{type:"docs",url:"https:\u002F\u002Fdocs.linuxserver.io\u002Fimages\u002Fdocker-healthchecks"}],containers:[{name:c,image:"linuxserver\u002Fhealthchecks",env:[{id:h,key:h,description:"User ID",default:i},{id:j,key:j,description:"Group ID",default:i},{id:k,default:a,description:l},{id:m,default:a,description:n},{id:o,default:a,description:p},{id:q,default:a,description:r},{id:s,default:a,description:t},{id:u,default:a,description:v},{id:w,default:a,description:x},{id:y,default:a,description:z},{id:A,default:a,description:B},{id:C,default:a,description:D},{id:E,default:a,description:F},{id:G,default:a,description:H},{id:I,default:a,description:J},{id:K,default:a,description:L},{id:M,default:a,description:N},{id:O,default:a,description:P},{id:Q,default:a,description:R},{id:S,default:a,description:T}],volumes:[{container:U,description:V,key:"config"}],ports:[{container:e,description:W,protocol:"tcp",web:d}]}],meta:{"readme-vars":{project_name:c,project_url:"https:\u002F\u002Fgithub.com\u002Fhealthchecks\u002Fhealthchecks",project_logo:g,project_blurb:f,project_lsio_github_repo_url:"https:\u002F\u002Fgithub.com\u002Flinuxserver\u002Fdocker-{{ project_name }}",available_architectures:[{arch:"{{ arch_x86_64 }}",tag:"amd64-latest"},{arch:"{{ arch_arm64 }}",tag:"arm64v8-latest"},{arch:"{{ arch_armhf }}",tag:"arm32v7-latest"}],param_container_name:"{{ project_name }}",param_usage_include_vols:b,param_volumes:[{vol_path:U,vol_host_path:"\u002Fpath\u002Fto\u002Fdata",desc:V}],param_usage_include_env:b,param_env_vars:[{env_var:k,env_value:a,desc:l},{env_var:m,env_value:a,desc:n},{env_var:o,env_value:a,desc:p},{env_var:q,env_value:a,desc:r},{env_var:s,env_value:a,desc:t},{env_var:u,env_value:a,desc:v},{env_var:w,env_value:a,desc:x},{env_var:y,env_value:a,desc:z},{env_var:A,env_value:a,desc:B},{env_var:C,env_value:a,desc:D}],opt_param_usage_include_env:b,opt_param_env_vars:[{env_var:E,env_value:a,desc:F},{env_var:G,env_value:a,desc:H},{env_var:I,env_value:a,desc:J},{env_var:K,env_value:a,desc:L},{env_var:M,env_value:a,desc:N},{env_var:O,env_value:a,desc:P},{env_var:Q,env_value:a,desc:R},{env_var:S,env_value:a,desc:T}],param_usage_include_ports:b,param_ports:[{external_port:e,internal_port:e,port_desc:W}],opt_param_usage_include_ports:b,opt_param_ports:[{external_port:X,internal_port:X,port_desc:"Port for inbound SMTP pings"}],app_setup_block_enabled:b,app_setup_block:Y,changelogs:[{date:"22.12.22:",desc:"Rebase to Alpine 3.17. Add extra deps for pycurl. Add INTEGRATIONS_ALLOW_PRIVATE_IPS."},{date:"18.10.22:",desc:"Add curl-dev to fix broken pip builds."},{date:"11.10.22:",desc:"Rebase to Alpine 3.16, migrate to s6v3."},{date:"27.09.22:",desc:"Fix sending of Email Reports"},{date:"08.01.22:",desc:"Fix CSRF setting for Django 4.0 (introduced in v1.25.0)"},{date:"11.11.21:",desc:"Add Apprise to Docker as in v1.24.0"},{date:"10.09.21:",desc:"Fix creation of superuser"},{date:"07.08.21:",desc:"Update custom logo handling to support changes in v1.22.0"},{date:"11.07.21:",desc:"Rebase to Alpine 3.14."},{date:"18.05.21:",desc:"Add linuxserver wheel index."},{date:"11.01.21:",desc:"Add libffi-dev to allow building of python cryptography lib."},{date:"19.07.20:",desc:"Rebasing to alpine 3.12, fixed 'ALLOWED_HOSTS' bug, now defaults to wildcard"},{date:"19.12.19:",desc:"Rebasing to alpine 3.11."},{date:"31.10.19:",desc:"Add postgres client and fix config for CSRF."},{date:"23.10.19:",desc:"Allow to create superuser"},{date:"28.06.19:",desc:"Rebasing to alpine 3.10."},{date:"12.04.19:",desc:"Rebase to Alpine 3.9."},{date:"23.03.19:",desc:"Switching to new Base images, shift to arm32v7 tag."},{date:"14.02.19:",desc:"Adding mysql libs needed for using a database."},{date:"11.10.18:",desc:"adding pipeline logic and multi arching release"},{date:"15.11.17:",desc:"`git pull` is now in Dockerfile so each tagged container contains the same code version"},{date:"17.10.17:",desc:"Fixed `local_settings.py` output"},{date:"27.09.17:",desc:"Initial Release."}]}},setup:Y,_id:"content:apps:healthchecks.json",_type:Z,title:"Healthchecks",_source:"content",_file:"apps\u002Fhealthchecks.json",_extension:Z}},prerenderedAt:1675118189506}}("",true,"healthchecks",false,"8000","[{{ project_name|capitalize }}]({{ project_url }}) is a watchdog for your cron jobs. It's a web server that listens for pings from your cron jobs, plus a web interface.\n","https:\u002F\u002Fraw.githubusercontent.com\u002Fhealthchecks\u002Fhealthchecks\u002Fmaster\u002Fstatic\u002Fimg\u002Fwelcome.png","PUID","100","PGID","SITE_ROOT","The site's top-level URL and the port it listens to if differrent than 80 or 443 (e.g., https:\u002F\u002Fhealthchecks.example.com:8000)","SITE_NAME","The site's name (e.g., \"Example Corp HealthChecks\")","DEFAULT_FROM_EMAIL","From email for alerts","EMAIL_HOST","SMTP host","EMAIL_PORT","SMTP port","EMAIL_HOST_USER","SMTP user","EMAIL_HOST_PASSWORD","SMTP password","EMAIL_USE_TLS","Use TLS for SMTP (`True` or `False`)","SUPERUSER_EMAIL","Superuser email","SUPERUSER_PASSWORD","Superuser password","REGENERATE_SETTINGS","Defaults to False. Set to True to always override the `local_settings.py` file with values from environment variables. Do not set to True if you have made manual modifications to this file.","ALLOWED_HOSTS","Array of valid hostnames for the server `[\"test.com\",\"test2.com\"]` (default: `[\"*\"]`)","APPRISE_ENABLED","Defaults to False. A boolean that turns on\u002Foff the Apprise integration (https:\u002F\u002Fgithub.com\u002Fcaronc\u002Fapprise)","DEBUG","Defaults to True. Debug mode relaxes CSRF protections and increases logging verbosity but should be disabled for production instances as it will impact performance and security.","INTEGRATIONS_ALLOW_PRIVATE_IPS","Defaults to False. Set to True to allow integrations to connect to private IP addresses.","PING_EMAIL_DOMAIN","The domain to use for generating ping email addresses.","SECRET_KEY","A secret key used for cryptographic signing. Will generate a secure value if one is not supplied","SITE_LOGO_URL","Full URL to custom site logo","\u002Fconfig","Database and healthchecks config directory","Healthchecks Web UI","2525","Access the WebUI at \u003Cyour-ip\u003E:8000. For more information, check out [Healthchecks](https:\u002F\u002Fgithub.com\u002Fhealthchecks\u002Fhealthchecks).\n","json"))