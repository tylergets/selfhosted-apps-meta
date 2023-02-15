export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){return {data:{netbootxyz:{_path:"\u002Fapps\u002Fnetbootxyz",_dir:"apps",_draft:b,_partial:b,_locale:"en",id:c,name:c,description:e,icon:f,links:[{type:"docker",url:"https:\u002F\u002Fhub.docker.com\u002Fr\u002Flinuxserver\u002Fnetbootxyz"},{type:"docs",url:"https:\u002F\u002Fdocs.linuxserver.io\u002Fimages\u002Fdocker-netbootxyz"}],containers:[{name:c,image:"linuxserver\u002Fnetbootxyz",env:[{id:g,key:g,description:"User ID",default:h},{id:i,key:i,description:"Group ID",default:h}],volumes:[{container:j,description:k},{container:l,description:m,key:"config"}],ports:[{container:d,description:n,protocol:o,web:b},{container:p,description:q,protocol:o,web:b}]}],meta:{"readme-vars":{project_name:c,project_url:"https:\u002F\u002Fnetboot.xyz",project_logo:f,project_blurb:e,project_lsio_github_repo_url:"https:\u002F\u002Fgithub.com\u002Flinuxserver\u002Fdocker-{{ project_name }}",available_architectures:[{arch:"{{ arch_x86_64 }}",tag:"amd64-latest"},{arch:"{{ arch_arm64 }}",tag:"arm64v8-latest"},{arch:"{{ arch_armhf }}",tag:"arm32v7-latest"}],development_versions:a,development_versions_items:[{tag:"latest",desc:"Web application for full self hosting"},{tag:"tftp",desc:"TFTP server only with NETBOOT.XYZ boot files"}],common_param_env_vars_enabled:a,param_container_name:"{{ project_name }}",param_usage_include_vols:a,param_volumes:[{vol_path:l,vol_host_path:"\u002Fpath\u002Fto\u002Fconfig",desc:m}],param_usage_include_ports:a,param_ports:[{external_port:d,internal_port:d,port_desc:n},{external_port:"69",internal_port:p,port_desc:q}],param_usage_include_env:b,opt_param_usage_include_env:a,opt_param_env_vars:[{env_var:"MENU_VERSION",env_value:"1.9.9",desc:"Specify a specific version of boot files you want to use from NETBOOT.XYZ (unset pulls latest)"},{env_var:"PORT_RANGE",env_value:"30000:30010",desc:"Specify the port range tftp will use for data transfers [(see Wikipedia)](https:\u002F\u002Fen.wikipedia.org\u002Fwiki\u002FTrivial_File_Transfer_Protocol#Details)"},{env_var:"SUBFOLDER",env_value:"\u002F",desc:"Specify a sobfolder if running this behind a reverse proxy (IE \u002Fproxy\u002F)"}],opt_param_usage_include_ports:a,opt_param_ports:[{external_port:"8080",internal_port:"80",port_desc:"NGINX server for hosting assets."}],opt_param_usage_include_vols:a,opt_param_volumes:[{vol_path:j,vol_host_path:"\u002Fpath\u002Fto\u002Fassets",desc:k}],app_setup_block_enabled:a,app_setup_block:r,changelogs:[{date:"12.10.22:",desc:"Rebasing to Alpine 3.16, migrate to s6v3."},{date:"29.04.21:",desc:"Rebasing to alpine 3.13, add SUBFOLDER env variable."},{date:"01.06.20:",desc:"Rebasing to alpine 3.12."},{date:"19.12.19:",desc:"Rebasing to alpine 3.11."},{date:"13.12.19:",desc:"Swapping latest tag over to webapp stack for management."},{date:"10.12.19:",desc:"Adding tftp branch to provide tftp only option to latest users."},{date:"22.10.19:",desc:"Initial release."}]}},setup:r,_id:"content:apps:netbootxyz.json",_type:s,title:"Netbootxyz",_source:"content",_file:"apps\u002Fnetbootxyz.json",_extension:s}},prerenderedAt:1676483555577}}(true,false,"netbootxyz","3000","[{{ project_name|capitalize }}]({{ project_url }}) is a way to PXE boot various operating system installers or utilities from one place within the BIOS without the need of having to go retrieve the media to run the tool. iPXE is used to provide a user friendly menu from within the BIOS that lets you easily choose the operating system you want along with any specific types of versions or bootable flags.","https:\u002F\u002Fnetboot.xyz\u002Fimages\u002Fnetboot.xyz.gif","PUID","100","PGID","\u002Fassets","Storage for NETBOOT.XYZ bootable assets (live CDs and other files)","\u002Fconfig","Storage for boot menu files and web application config","Web configuration interface.","tcp","69\u002Fudp","TFTP Port.","To use this image you need an existing DHCP server where you can set this TFTP server as your DHCP boot destination. This image does not contain a DHCP server nor do we aim to support one in the future. This is simply a TFTP server hosting the latest IPXE kernel builds from [netboot.xyz]({{ project_url }}). If you are interested in their project and lack the ability to setup a DHCP server to boot this payload they also have USB stick images you can use available on their [downloads page]({{ project_url }}\u002Fdownloads\u002F).\n\n### Router Setup Examples\n\n#### PFSense\nServices -\u003E DHCP Server\n\nSet both the option for \"TFTP Server\" and the options under the Advanced \"Network Booting\" section. \n* check enable\n* Next server- IP used for TFTP Server\n* Default BIOS file name- `netboot.xyz.kpxe`\n* UEFI 32 bit file name- `netboot.xyz.efi`\n* UEFI 64 bit file name- `netboot.xyz.efi`\n\n#### OPNsense\nServices -\u003E DHCP Server\n\nUnder the Advanced \"Network Booting\" section. \n* check enable\n* Next server- IP of docker host\n* Default BIOS file name- `netboot.xyz.kpxe`\n* UEFI 32 bit file name- `netboot.xyz.efi`\n* UEFI 64 bit file name- `netboot.xyz.efi`\n\n#### Unifi Security Gateway (with the controller)\nNetworks -\u003E LAN (or the network you want to boot from) -\u003E ADVANCED DHCP OPTIONS\n* tick Enable network boot\n* Server-  YOURSERVERIP\n* Filename- `netboot.xyz.kpxe`\n\n#### EdgeOS\u002FVyOS\nConnect via SSH\n```\nconfigure\nset service dhcp-server use-dnsmasq enable\nset service dns forwarding options \"dhcp-match=set:bios,60,PXEClient:Arch:00000\"\nset service dns forwarding options \"dhcp-boot=tag:bios,netboot.xyz.kpxe,,SERVERIP\"\nset service dns forwarding options \"dhcp-match=set:efi32,60,PXEClient:Arch:00002\"\nset service dns forwarding options \"dhcp-boot=tag:efi32,netboot.xyz.efi,,SERVERIP\"\nset service dns forwarding options \"dhcp-match=set:efi32-1,60,PXEClient:Arch:00006\"\nset service dns forwarding options \"dhcp-boot=tag:efi32-1,netboot.xyz.efi,,SERVERIP\"\nset service dns forwarding options \"dhcp-match=set:efi64,60,PXEClient:Arch:00007\"\nset service dns forwarding options \"dhcp-boot=tag:efi64,netboot.xyz.efi,,SERVERIP\"\nset service dns forwarding options \"dhcp-match=set:efi64-1,60,PXEClient:Arch:00008\"\nset service dns forwarding options \"dhcp-boot=tag:efi64-1,netboot.xyz.efi,,SERVERIP\"\nset service dns forwarding options \"dhcp-match=set:efi64-2,60,PXEClient:Arch:00009\"\nset service dns forwarding options \"dhcp-boot=tag:efi64-2,netboot.xyz.efi,,SERVERIP\"\ncommit; save\n```\n\n#### DD-WRT\nAdministration -\u003E Services -\u003E Additional DNSMasq Options\nSet the following lines: \n```\ndhcp-match=set:bios,60,PXEClient:Arch:00000\ndhcp-boot=tag:bios,netboot.xyz.kpxe,,YOURSERVERIP\ndhcp-match=set:efi32,60,PXEClient:Arch:00002\ndhcp-boot=tag:efi32,netboot.xyz.efi,,YOURSERVERIP\ndhcp-match=set:efi32-1,60,PXEClient:Arch:00006\ndhcp-boot=tag:efi32-1,netboot.xyz.efi,,YOURSERVERIP\ndhcp-match=set:efi64,60,PXEClient:Arch:00007\ndhcp-boot=tag:efi64,netboot.xyz.efi,,YOURSERVERIP\ndhcp-match=set:efi64-1,60,PXEClient:Arch:00008\ndhcp-boot=tag:efi64-1,netboot.xyz.efi,,YOURSERVERIP\ndhcp-match=set:efi64-2,60,PXEClient:Arch:00009\ndhcp-boot=tag:efi64-2,netboot.xyz.efi,,YOURSERVERIP\n```\n\n#### Tomato\nAdvanced -\u003E DHCP\u002FDNS -\u003E Dnsmasq Custom configuration\nSet the following lines: \n```\ndhcp-match=set:bios,60,PXEClient:Arch:00000\ndhcp-boot=tag:bios,netboot.xyz.kpxe,,YOURSERVERIP\ndhcp-match=set:efi32,60,PXEClient:Arch:00002\ndhcp-boot=tag:efi32,netboot.xyz.efi,,YOURSERVERIP\ndhcp-match=set:efi32-1,60,PXEClient:Arch:00006\ndhcp-boot=tag:efi32-1,netboot.xyz.efi,,YOURSERVERIP\ndhcp-match=set:efi64,60,PXEClient:Arch:00007\ndhcp-boot=tag:efi64,netboot.xyz.efi,,YOURSERVERIP\ndhcp-match=set:efi64-1,60,PXEClient:Arch:00008\ndhcp-boot=tag:efi64-1,netboot.xyz.efi,,YOURSERVERIP\ndhcp-match=set:efi64-2,60,PXEClient:Arch:00009\ndhcp-boot=tag:efi64-2,netboot.xyz.efi,,YOURSERVERIP\n```\n\n#### OpenWRT\n```\nuci set dhcp.@dnsmasq[0].dhcp_match=set:bios,60,PXEClient:Arch:00000\nuci set dhcp.@dnsmasq[0].dhcp_boot=tag:bios,netboot.xyz.kpxe,,YOURSERVERIP\nuci set dhcp.@dnsmasq[0].dhcp_match=set:efi32,60,PXEClient:Arch:00002\nuci set dhcp.@dnsmasq[0].dhcp_boot=tag:efi32,netboot.xyz.efi,,YOURSERVERIP\nuci set dhcp.@dnsmasq[0].dhcp_match=set:efi32-1,60,PXEClient:Arch:00006\nuci set dhcp.@dnsmasq[0].dhcp_boot=tag:efi32-1,netboot.xyz.efi,,YOURSERVERIP\nuci set dhcp.@dnsmasq[0].dhcp_match=set:efi64,60,PXEClient:Arch:00007\nuci set dhcp.@dnsmasq[0].dhcp_boot=tag:efi64,netboot.xyz.efi,,YOURSERVERIP\nuci set dhcp.@dnsmasq[0].dhcp_match=set:efi64-1,60,PXEClient:Arch:00008\nuci set dhcp.@dnsmasq[0].dhcp_boot=tag:efi64-1,netboot.xyz.efi,,YOURSERVERIP\nuci set dhcp.@dnsmasq[0].dhcp_match=set:efi64-2,60,PXEClient:Arch:00009\nuci set dhcp.@dnsmasq[0].dhcp_boot=tag:efi64-2,netboot.xyz.efi,,YOURSERVERIP\nuci commit\n\u002Fetc\u002Finit.d\u002Fdnsmasq restart\n```\n#### Microsoft Server DHCP\n\n* Run the DHCP program\n* Under Scope\u002FScope Options\n* check option 066 and enter the FQDN or IP of your TFTP boot server\n* check option 067 and enter one of the following bootfile names:\n   * Default BIOS file name- netboot.xyz.kpxe\n   * UEFI 32 bit file name- netboot.xyz.efi\n   * UEFI 64 bit file name- netboot.xyz.efi\n\nAnything else from a router standpoint is a crapshoot for supporting Dnsmasq options or proprietary PXE boot options, check Google for support (try your exact router model number with 'pxe boot') or look into setting up your own DHCP server in Linux.\n\nThis image also contains `netboot.xyz.efi` which can be used to boot using UEFI network boot. The UEFI boot and menu will have limited functionality if you choose to use it. \n","json"))