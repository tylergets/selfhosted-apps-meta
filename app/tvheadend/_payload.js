export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B){return {data:{tvheadend:{_path:"\u002Fapps\u002Ftvheadend",_dir:"apps",_draft:a,_partial:a,_locale:"en",id:c,name:c,description:f,icon:g,links:[{type:"docker",url:"https:\u002F\u002Fhub.docker.com\u002Fr\u002Flinuxserver\u002Ftvheadend"},{type:"docs",url:"https:\u002F\u002Fdocs.linuxserver.io\u002Fimages\u002Fdocker-tvheadend"}],containers:[{name:c,image:"linuxserver\u002Ftvheadend",env:[{id:h,key:h,description:"User ID",default:i},{id:j,key:j,description:"Group ID",default:i},{id:k,default:l,description:m},{id:n,default:o,description:p}],volumes:[{container:q,description:r,key:"config"},{container:s,description:t}],ports:[{container:d,description:u,protocol:v,web:a},{container:e,description:w,protocol:v,web:a}]}],meta:{"readme-vars":{project_name:c,project_url:"https:\u002F\u002Fwww.tvheadend.org\u002F",project_logo:g,project_blurb:f,project_lsio_github_repo_url:"https:\u002F\u002Fgithub.com\u002Flinuxserver\u002Fdocker-{{ project_name }}",project_blurb_optional_extras_enabled:a,available_architectures:[{arch:"{{ arch_x86_64 }}",tag:"amd64-latest"},{arch:"{{ arch_arm64 }}",tag:"arm64v8-latest"},{arch:"{{ arch_armhf }}",tag:"arm32v7-latest"}],development_versions:a,development_versions_items:[{tag:"latest",desc:"Current latest release."},{tag:"release-4.2",desc:"Latest release from 4.2 branch."}],common_param_env_vars_enabled:b,param_container_name:"{{ project_name }}",param_usage_include_net:a,param_usage_include_env:b,param_env_vars:[{env_var:k,env_value:l,desc:m}],param_usage_include_vols:b,param_volumes:[{vol_path:q,vol_host_path:"\u002Fpath\u002Fto\u002Fdata",desc:r},{vol_path:s,vol_host_path:"\u002Fpath\u002Fto\u002Frecordings",desc:t}],param_usage_include_ports:b,param_ports:[{external_port:d,internal_port:d,port_desc:u},{external_port:e,internal_port:e,port_desc:w}],param_device_map:a,cap_add_param:a,opt_param_usage_include_env:b,opt_param_env_vars:[{env_var:n,env_value:o,desc:p}],opt_param_usage_include_vols:a,opt_param_usage_include_ports:a,opt_param_device_map:b,opt_param_devices:[{device_path:x,device_host_path:x,desc:"Only needed if you want to use your AMD\u002FIntel GPU for hardware accelerated video encoding (vaapi)."},{device_path:y,device_host_path:y,desc:"Only needed if you want to pass through a DVB card to the container. If you use IPTV or HDHomeRun you can leave it out."}],opt_cap_add_param:a,optional_block_1:b,optional_block_1_items:["#### Host vs. Bridge\n\nIf you use IPTV, SAT\u003EIP or HDHomeRun, you need to create the container with --net=host and remove the -p flags. This is because to work with these services Tvheadend requires a multicast address of `239.255.255.250` and a UDP port of `1900` which at this time is not possible with docker bridge mode.\nIf you have other host services which also use multicast such as SSDP\u002FDLNA\u002FEmby you may experience stabilty problems. These can be solved by giving tvheadend its own IP using macvlan.\n"],app_setup_block_enabled:b,app_setup_block:z,changelogs:[{date:"31.08.22:",desc:"Update sample env vars and how RUN_OPTS are handled."},{date:"19.08.22:",desc:"Switch to new picons builder."},{date:"16.04.22:",desc:"Added URL XMLTV grabber."},{date:"05.01.22:",desc:"Rebase to Alpine 3.15. Disable execinfo to fix builds. Update xmltv."},{date:"11.05.21:",desc:"Added Intel iHD driver support."},{date:"02.06.20:",desc:"Update to Alpine 3.12."},{date:A,desc:"Add requests and perl-json-xs package."},{date:A,desc:"Update to Alpine 3.11."},{date:"02.10.19:",desc:"Improve permission fixing on render & dvb devices."},{date:"18.08.19:",desc:"Add AMD drivers."},{date:"02.08.19:",desc:"Attempt to automatically fix permissions on \u002Fdev\u002Fdri and \u002Fdev\u002Fdvb."},{date:"28.06.19:",desc:"Rebasing to alpine 3.10."},{date:"27.03.19:",desc:"Rebase to Alpine 3.9, fix init logic to only chown once."},{date:"23.03.19:",desc:"Switching to new Base images, shift to arm32v7 tag."},{date:"01.03.19:",desc:"Bump xmltv to 0.6.1."},{date:"28.02.19:",desc:"add perl-lwp-useragent-determined."},{date:"17.02.19:",desc:"Bump xmltv to 5.70, ensure version tagging works by cloning tvheadend."},{date:"14.02.19:",desc:"Add picons path to config."},{date:"15.01.19:",desc:"Add pipeline logic and multi arch."},{date:"12.09.18:",desc:"Rebase to alpine 3.8 and use buildstage type build."},{date:"21.04.18:",desc:"Add JSON::XS Perl package for grab_tv_huro."},{date:"24.03.18:",desc:"Add dvbcsa package."},{date:"04.03.18:",desc:"Use sourceforge master rather than mirror for xmltv."},{date:"22.02.18:",desc:"Add lost libva-intel-driver."},{date:"21.02.18:",desc:"Fix wrong version of iconv used."},{date:"18.02.18:",desc:"Add vaapi support, some cleanup and dropping of deprecated options."},{date:"04.01.18:",desc:"Deprecate cpu_core routine lack of scaling."},{date:"11.12.17:",desc:"Rebase to alpine 3.7, linting fixes."},{date:"02.09.17:",desc:"Add codec dependencies."},{date:"13.07.17:",desc:"Increase uniformity across all archs."},{date:"08.07.17:",desc:"Update README with full path for comskip."},{date:"02.07.17:",desc:"Move to one branch for all 4.2 releases."},{date:"27.05.17:",desc:"Rebase to alpine 3.6."},{date:"01.05.17:",desc:"Update to tvheadend 4.2.1 stable."},{date:"18.04.17:",desc:"Use repo version of gnu-libiconv rather than compiling."},{date:"09.04.17:",desc:"Chain cpanm installs in one block and use --installdeps."},{date:"09.02.17:",desc:"Perl changes, add picons file to gitignore and update XMLTV to 0.5.69."},{date:"07.02.17:",desc:"Add variable to add additional runtime paramters."},{date:"05.02.17:",desc:"Update to alpine 3.5 and change dvb-apps to only compile needed libs."},{date:"14.11.16:",desc:"Add picons from picons.xyz to \u002Fpicons folder and add info to README."},{date:"22.09.16:",desc:"Fix broken tv_grab_wg, libs for xmltv and update README."},{date:"18.09.16:",desc:"Update XMLTV to 0.5.68 and update README."},{date:"10.09.16:",desc:"Add layer badges to README."},{date:"05.09.16:",desc:"Initial Release."}]}},setup:z,_id:"content:apps:tvheadend.json",_type:B,title:"Tvheadend",_source:"content",_file:"apps\u002Ftvheadend.json",_extension:B}},prerenderedAt:1676483556171}}(false,true,"tvheadend","9981","9982","[{{ project_name|capitalize }}]({{ project_url }}) works as a proxy server: is a TV streaming server and recorder for Linux, FreeBSD and Android supporting DVB-S, DVB-S2, DVB-C, DVB-T, ATSC, ISDB-T, IPTV, SAT\u003EIP and HDHomeRun as input sources.\nTvheadend offers the HTTP (VLC, MPlayer), HTSP (Kodi, Movian) and SAT\u003EIP streaming.\nMultiple EPG sources are supported (over-the-air DVB and ATSC including OpenTV DVB extensions, XMLTV, PyXML).\n","https:\u002F\u002Fraw.githubusercontent.com\u002Flinuxserver\u002Fdocker-templates\u002Fmaster\u002Flinuxserver.io\u002Fimg\u002Ftvheadend-big.png","PUID","100","PGID","TZ","Europe\u002FLondon","Specify a timezone to use EG Europe\u002FLondon.","RUN_OPTS","","Optionally specify additional arguments to be passed. See Additional runtime parameters.","\u002Fconfig","Where TVHeadend show store it's config files.","\u002Frecordings","Where you want the PVR to store recordings.","WebUI","tcp","HTSP server port.","\u002Fdev\u002Fdri","\u002Fdev\u002Fdvb","The setup depends if you run the one of the stable tags or use latest. Running latest is the easiest as it has a setup wizard.\n\n**Stable**\n\nFirst thing to do is to go to Configuration --\u003E DVB Inputs --\u003E TV adapters and add your LNB\u002Fswitch info. Then create a new network in the Networks tab and set the correct pre-defined muxes and orbital position.\nGo back to the TV adapters tab and add the newly created network under universal LNB. Go back to the Networks tab and mark the network you created earlier and press the Force Scan button. Tvheadend will now scan the muxes for services.\n\nAfter the scan is done, head to the Services tab and find the services you want as channels, mark them, and press map services. They should now appear under Configuration --\u003E Channel\u002FEPG.\n\n**Latest**\n\nThe first thing to do is to run the setup wizard. If it doesn't pop up at first login, you can find it in Configuration --\u003E General --\u003E Base and click Start Wizard. This will guide you to set up the basic parts of tvheadend.\n\n**Configuring XMLTV grabber**\n\nTo configure the XMLTV grabber, first check if your grabber is listed in Configuration --\u003E Channel\u002FEPG --\u003E EPG Grabber Modules. If it's listed, you will have to configure the grabber before enabling.\nFind the path in the path field of your grabber. We will use the last part. It starts with tv_grab_. Add it after \u002Fusr\u002Fbin\u002F in the below command. There should be no space between Usr\u002Fbin\u002F and the part you added.\n\n```\ndocker exec -it -u abc tvheadend \u002Fusr\u002Fbin\u002Ffor_you_to_fill_out --configure\n```\n\nNow follow the onscreen progress. If you get asked about cache, just accept the default. After you have configured your grabber, you can go back and enable your grabber.\n\nIf you allready have a configuration file, you can add it in the .xmltv folder where you mapped the \u002Fconfig volume. If it's not created, create it.\n\n**Comskip**\nThis container comes with Comskip for commercial flagging of recordings. This you have to add in the recording config of tvheadend.\nGo to Configuration --\u003E Recording. Change the view level to advanced in the top right corner, and add the below in the Post-processor command field.\n\n```\n\u002Fusr\u002Fbin\u002Fcomskip --ini=\u002Fconfig\u002Fcomskip\u002Fcomskip.ini \"%f\"\n```\n\nNow comskip will run after each recording is finished. You will find comskip.ini in the comskip folder of your \u002Fconfig volume mapping. See the [Comskip](http:\u002F\u002Fwww.kaashoek.com\u002Fcomskip\u002F) homepage for tuning of the ini file.\n\n\n**FFmpeg**\n\nFFmpeg is installed in \u002Fusr\u002Fbin\u002F in case you need to use it with pipe.\n\n**EPG XML file**\n\nIf you have EPG data in XML format from a supplier, you can drop it in the data folder of your \u002Fconfig volume mapping. If it doesn't exist, create it. Then choose the XML file grabber in Configuration --\u003E Channel\u002FEPG --\u003E EPG Grabber Modules.\nIf you use WebGrab+Plus, choose the WebGrab+Plus XML file grabber. The XML file goes in the same path as above.\nThe xml file has to be named guide.xml.\n\nFor advanced setup of tvheadend, go to [Tvheadend][appurl]\n\n**Picons**\n\nWe have added all the picons from [picons](https:\u002F\u002Fgithub.com\u002Fpicons\u002Fpicons) in the folder \u002Fpicons. To enable the use of these picons, add the path to the Channel icon path in Configuration --\u003E General --\u003E Base.\nYou need to enable minimum advanced view level to see the picons options.\n\n## Additional runtime parameters\n\nIn some cases it might be necessary to start tvheadend with additional parameters, for example to enable debugging or specify webroot for reverse proxy. Be sure to have the right parameters set, as adding the wrong once might lead to the container not starting correctly.\n","27.12.19:","json"))