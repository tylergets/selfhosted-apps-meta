export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){return {data:{oscam:{_path:"\u002Fapps\u002Foscam",_dir:"apps",_draft:a,_partial:a,_locale:"en",id:c,name:c,description:e,icon:f,links:[{type:"docker",url:"https:\u002F\u002Fhub.docker.com\u002Fr\u002Flinuxserver\u002Foscam"},{type:"docs",url:"https:\u002F\u002Fdocs.linuxserver.io\u002Fimages\u002Fdocker-oscam"}],containers:[{name:c,image:"linuxserver\u002Foscam",env:[{id:g,key:g,description:"User ID",default:h},{id:i,key:i,description:"Group ID",default:h},{id:j,default:k,description:l}],volumes:[{container:m,description:n,key:"config"}],ports:[{container:d,description:o,protocol:"tcp",web:a}]}],meta:{"readme-vars":{project_name:c,project_url:"http:\u002F\u002Fwww.streamboard.tv\u002Foscam\u002F",project_logo:f,project_blurb:e,project_lsio_github_repo_url:"https:\u002F\u002Fgithub.com\u002Flinuxserver\u002Fdocker-{{ project_name }}",project_blurb_optional_extras_enabled:a,available_architectures:[{arch:"{{ arch_x86_64 }}",tag:"amd64-latest"},{arch:"{{ arch_arm64 }}",tag:"arm64v8-latest"},{arch:"{{ arch_armhf }}",tag:"arm32v7-latest"}],development_versions:a,common_param_env_vars_enabled:b,param_container_name:"{{ project_name }}",param_usage_include_net:a,param_usage_include_env:b,param_env_vars:[{env_var:j,env_value:k,desc:l}],param_usage_include_vols:b,param_volumes:[{vol_path:m,vol_host_path:"\u002Fpath\u002Fto\u002Fdata",desc:n}],param_usage_include_ports:b,param_ports:[{external_port:d,internal_port:d,port_desc:o}],param_device_map:b,param_devices:[{device_path:p,device_host_path:p,desc:"For passing through smart card readers."}],cap_add_param:a,opt_param_usage_include_env:a,opt_param_usage_include_vols:a,opt_param_usage_include_ports:a,opt_param_device_map:a,opt_cap_add_param:a,optional_block_1:b,optional_block_1_items:["### Passing through Smart Card Readers\n\nIf you want to pass through a smart card reader, you need to specify the reader with the `--device=` tag. The method used depends on how the reader is recognized.\nThe first is \u002Fdev\u002FttyUSBX. To find the correct device, connect the reader and run `dmesg | tail` on the host. In the output you will find \u002Fdev\u002FttyUSBX, where X is the number of the device. If this is the first reader you connect to your host, it will be \u002Fdev\u002FttyUSB0. If you add one more it will be \u002Fdev\u002FttyUSB1.\n\nIf there are no \u002Fdev\u002FttyUSBX device in `dmesg | tail`, you have to use the USB bus path. It will look similar to the below.\n\n`\u002Fdev\u002Fbus\u002Fusb\u002F001\u002F001`\n\nThe important parts are the two numbers in the end. The first one is the Bus number, the second is the Device number. To find the Bus and Device number you have to run `lsusb` on the host, then find your USB device in the list and note the Bus and Device numbers.\n\nHere is an example of how to find the Bus and Device. The output of the lsusb command is below.\n\n`Bus 002 Device 005: ID 076b:6622 OmniKey AG CardMan 6121`\n\nThe first number, the Bus, is 002. The second number, the Device, is 005. This will look like below in the `--device=` tag.\n\n`--device=\u002Fdev\u002Fbus\u002Fusb\u002F002\u002F005`\n\nIf you have multiple smart card readers, you add one `--device=` tag for each reader.\n"],app_setup_block_enabled:b,app_setup_block:q,changelogs:[{date:"03.11.22:",desc:"Rebasing to alpine 3.16 and s6v3. Update pcsd driver link."},{date:"13.02.22:",desc:"Rebasing to alpine 3.15."},{date:"19.12.19:",desc:"Rebasing to alpine 3.11."},{date:"28.06.19:",desc:"Rebasing to alpine 3.10."},{date:"29.04.19:",desc:"Add revision check, so pipeline can build new revisions."},{date:"28.04.19:",desc:"Switch back to streamboard svn to fix version not showing in UI."},{date:"23.03.19:",desc:"Switching to new Base images, shift to arm32v7 tag."},{date:"19.02.19:",desc:"Add pipeline logic and multi arch, rebase to Alpine 3.8."},{date:"03.01.18:",desc:"Deprecate cpu_core routine lack of scaling."},{date:"13.12.17:",desc:"Rebase to alpine 3.7."},{date:"19.10.17:",desc:"Add ccid package for usb card readers."},{date:"17.10.17:",desc:"Switch to using bzr for source code, streamboard awol."},{date:"28.05.17:",desc:"Rebase to alpine 3.6."},{date:"09.02.17:",desc:"Rebase to alpine 3.5."},{date:"14.10.16:",desc:"Add version layer information."},{date:"02.10.16:",desc:"Add info on passing through devices to README."},{date:"25.09.16:",desc:"Initial release."}]}},setup:q,_id:"content:apps:oscam.json",_type:r,title:"Oscam",_source:"content",_file:"apps\u002Foscam.json",_extension:r}},prerenderedAt:1676483555680}}(false,true,"oscam","8888","[{{ project_name|capitalize }}]({{ project_url }}) is an Open Source Conditional Access Module software used for descrambling DVB transmissions using smart cards. It's both a server and a client.","https:\u002F\u002Fraw.githubusercontent.com\u002Flinuxserver\u002Fdocker-templates\u002Fmaster\u002Flinuxserver.io\u002Fimg\u002Foscam-logo.png","PUID","100","PGID","TZ","Europe\u002FLondon","Specify a timezone to use EG Europe\u002FLondon.","\u002Fconfig","Where oscam should store config files and logs.","WebUI","\u002Fdev\u002FttyUSB0","To set up oscam there are numerous guides on the internet. There are too many scenarios to make a quick guide.\nThe web interface is at port 8888.\n","json"))