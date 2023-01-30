export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F){return {data:{"unifi-controller":{_path:"\u002Fapps\u002Funifi-controller",_dir:"apps",_draft:a,_partial:a,_locale:"en",id:c,name:c,description:h,icon:i,links:[{type:"docker",url:"https:\u002F\u002Fhub.docker.com\u002Fr\u002Flinuxserver\u002Funifi-controller"},{type:"docs",url:"https:\u002F\u002Fdocs.linuxserver.io\u002Fimages\u002Fdocker-unifi-controller"}],containers:[{name:c,image:"linuxserver\u002Funifi-controller",env:[{id:j,key:j,description:"User ID",default:k},{id:l,key:l,description:"Group ID",default:k},{id:m,default:n,description:o},{id:p,default:d,description:q},{id:r,default:d,description:s}],volumes:[{container:t,description:u,key:"config"}],ports:[{container:f,description:v,protocol:e,web:a},{container:w,description:x,protocol:e,web:a},{container:y,description:z,protocol:e,web:a},{container:g,description:A,protocol:e,web:a}]}],meta:{"readme-vars":{project_name:c,project_url:"https:\u002F\u002Fwww.ubnt.com\u002Fenterprise\u002F#unifi",project_logo:i,project_blurb:h,project_lsio_github_repo_url:"https:\u002F\u002Fgithub.com\u002Flinuxserver\u002Fdocker-{{ project_name }}",available_architectures:[{arch:"{{ arch_x86_64 }}",tag:"amd64-latest"},{arch:"{{ arch_arm64 }}",tag:"arm64v8-latest"}],development_versions:a,param_container_name:"{{ project_name }}",param_usage_include_vols:b,param_volumes:[{vol_path:t,vol_host_path:"\u003Cpath to data\u003E",desc:u}],param_usage_include_ports:b,param_ports:[{external_port:f,internal_port:f,port_desc:v},{external_port:"3478",internal_port:w,port_desc:x},{external_port:"10001",internal_port:y,port_desc:z},{external_port:g,internal_port:g,port_desc:A}],param_usage_include_env:b,param_env_vars:[{env_var:m,env_value:n,desc:o}],opt_param_usage_include_env:b,opt_param_env_vars:[{env_var:p,env_value:d,desc:q},{env_var:r,env_value:d,desc:s}],opt_param_usage_include_ports:b,opt_param_ports:[{external_port:"1900",internal_port:"1900\u002Fudp",port_desc:"Required for `Make controller discoverable on L2 network` option"},{external_port:B,internal_port:B,port_desc:"Unifi guest portal HTTPS redirect port"},{external_port:C,internal_port:C,port_desc:"Unifi guest portal HTTP redirect port"},{external_port:D,internal_port:D,port_desc:"For mobile throughput test"},{external_port:"5514",internal_port:"5514\u002Fudp",port_desc:"Remote syslog port"}],app_setup_block_enabled:b,app_setup_block:E,changelogs:[{date:"23.01.23:",desc:"Exclude `run` from `\u002Fconfig` volume."},{date:"30.11.22:",desc:"Bump JRE to 11."},{date:"01.06.22:",desc:"Deprecate armhf."},{date:"23.12.21:",desc:"Move min\u002Fmax memory config from run to system.properties."},{date:"22.12.21:",desc:"Move deb package install to first init to avoid overlayfs performance issues."},{date:"13.12.21:",desc:"Rebase 64 bit containers to Focal."},{date:"11.12.21:",desc:"Add java opts to mitigate CVE-2021-44228."},{date:"11.06.21:",desc:"Allow for changing Java initial mem via new optional environment variable."},{date:"12.01.21:",desc:"Deprecate the `LTS` tag as Unifi no longer releases LTS stable builds. Existing users can switch to the `latest` tag. Direct upgrade from 5.6.42 (LTS) to 6.0.42 (latest) tested successfully."},{date:"17.07.20:",desc:"Rebase 64 bit containers to Bionic and Mongo 3.6."},{date:"16.06.20:",desc:"Add logrotate."},{date:"02.06.20:",desc:"Updated port list & descriptions. Moved some ports to optional."},{date:"14.11.19:",desc:"Changed url for deb package to match new Ubiquity domain."},{date:"29.07.19:",desc:"Allow for changing Java mem limit via new optional environment variable."},{date:"23.03.19:",desc:"Switching to new Base images, shift to arm32v7 tag."},{date:"10.02.19:",desc:"Initial release of new unifi-controller image with new tags and pipeline logic"}]}},setup:E,_id:"content:apps:unifi-controller.json",_type:F,title:"Unifi Controller",_source:"content",_file:"apps\u002Funifi-controller.json",_extension:F}},prerenderedAt:1675118190224}}(false,true,"unifi-controller","1024","tcp","8443","8080","The [{{ project_name|capitalize }}]({{ project_url }}) software is a powerful, enterprise wireless software engine ideal for high-density client deployments requiring low latency and high uptime performance.","https:\u002F\u002Fraw.githubusercontent.com\u002Flinuxserver\u002Fdocker-templates\u002Fmaster\u002Flinuxserver.io\u002Fimg\u002Funifi-banner.png","PUID","100","PGID","TZ","Europe\u002FLondon","Specify a timezone to use (e.g. Europe\u002FLondon) - [see list](https:\u002F\u002Fen.wikipedia.org\u002Fwiki\u002FList_of_tz_database_time_zones)","MEM_LIMIT","Optionally change the Java memory limit (in Megabytes). Set to `default` to reset to default","MEM_STARTUP","Optionally change the Java initial\u002Fminimum memory (in Megabytes). Set to `default` to reset to default","\u002Fconfig","All Unifi data stored here","Unifi web admin port","3478\u002Fudp","Unifi STUN port","10001\u002Fudp","Required for AP discovery","Required for device communication","8843","8880","6789","The webui is at https:\u002F\u002Fip:8443, setup with the first run wizard.\n\nFor Unifi to adopt other devices, e.g. an Access Point, it is required to change the inform IP address. Because Unifi runs inside Docker by default it uses an IP address not accessible by other devices. To change this go to Settings \u003E System Settings \u003E Controller Configuration and set the Controller Hostname\u002FIP to a hostname or IP address accessible by your devices. Additionally the checkbox \"Override inform host with controller hostname\u002FIP\" has to be checked, so that devices can connect to the controller during adoption (devices use the inform-endpoint during adoption).\n\nIn order to manually adopt a device take these steps:\n\n```\nssh ubnt@$AP-IP\nset-inform http:\u002F\u002F$address:8080\u002Finform\n```\n\nThe default device password is `ubnt`. `$address` is the IP address of the host you are running this container on and `$AP-IP` is the Access Point IP address.\n\nWhen using a Security Gateway (router) it could be that network connected devices are unable to obtain an ip address. This can be fixed by setting \"DHCP Gateway IP\", under Settings \u003E Networks \u003E network_name, to a correct (and accessable) ip address.\n","json"))