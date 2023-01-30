export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){return {data:{"quassel-core":{_path:"\u002Fapps\u002Fquassel-core",_dir:"apps",_draft:a,_partial:a,_locale:"en",id:c,name:c,description:e,icon:"https:\u002F\u002Fraw.githubusercontent.com\u002Fwalkxcode\u002Fdashboard-icons\u002Fmain\u002Fpng\u002Fquasselcore.png",links:[{type:"docker",url:"https:\u002F\u002Fhub.docker.com\u002Fr\u002Flinuxserver\u002Fquassel-core"},{type:"docs",url:"https:\u002F\u002Fdocs.linuxserver.io\u002Fimages\u002Fdocker-quassel-core"}],containers:[{name:c,image:"linuxserver\u002Fquassel-core",env:[{id:f,key:f,description:"User ID",default:g},{id:h,key:h,description:"Group ID",default:g},{id:i,default:j,description:k},{id:l,default:m,description:n}],volumes:[{container:o,description:p,key:"config"}],ports:[{container:d,description:q,protocol:"tcp",web:a}]}],meta:{"readme-vars":{project_name:c,project_url:"http:\u002F\u002Fquassel-irc.org\u002F",project_logo:"http:\u002F\u002Ficons.iconarchive.com\u002Ficons\u002Foxygen-icons.org\u002Foxygen\u002F256\u002FApps-quassel-icon.png",project_blurb:e,project_lsio_github_repo_url:"https:\u002F\u002Fgithub.com\u002Flinuxserver\u002Fdocker-{{ project_name }}",project_blurb_optional_extras_enabled:a,available_architectures:[{arch:"{{ arch_x86_64 }}",tag:"amd64-latest"},{arch:"{{ arch_arm64 }}",tag:"arm64v8-latest"},{arch:"{{ arch_armhf }}",tag:"arm32v7-latest"}],development_versions:a,common_param_env_vars_enabled:b,param_container_name:"{{ project_name }}",param_usage_include_net:a,param_usage_include_env:b,param_env_vars:[{env_var:i,env_value:j,desc:k}],param_usage_include_vols:b,param_volumes:[{vol_path:o,vol_host_path:"\u003Cpath to data\u003E",desc:p}],param_usage_include_ports:b,param_ports:[{external_port:d,internal_port:d,port_desc:q}],param_device_map:a,cap_add_param:a,opt_param_usage_include_env:b,opt_param_env_vars:[{env_var:l,env_value:m,desc:n}],opt_param_usage_include_vols:a,opt_param_usage_include_ports:b,opt_param_ports:[{external_port:"113",internal_port:"10113",port_desc:"Optional Ident Port"}],opt_param_device_map:a,opt_cap_add_param:a,optional_block_1:a,app_setup_block_enabled:b,app_setup_block:r,changelogs:[{date:"03.01.22:",desc:"Rebase to alpine 3.15. Add new build deps and apply other fixes for 0.14."},{date:"07.08.21:",desc:"Fixing incorrect database password variable operator."},{date:"19.12.19:",desc:"Rebasing to alpine 3.11."},{date:"28.06.19:",desc:"Rebasing to alpine 3.10."},{date:"23.03.19:",desc:"Switching to new Base images, shift to arm32v7 tag."},{date:"20.03.19:",desc:"Make stateless operation an option, with input from one of the quassel team."},{date:"26.01.19:",desc:"Add pipeline logic and multi arch."},{date:"08.01.19:",desc:"Rebase to Ubuntu Bionic and upgrade to Quassel`0.13.0` See [here.](https:\u002F\u002Fquassel-irc.org\u002Fnode\u002F134)."},{date:"30.07.18:",desc:"Rebase to alpine:3.8 and use buildstage."},{date:"03.01.18:",desc:"Deprecate cpu_core routine lack of scaling."},{date:"09.12.17:",desc:"Rebase to alpine:3.7."},{date:"26.11.17:",desc:"Use cpu core counting routine to speed up build time."},{date:"12.07.17:",desc:"Add inspect commands to README, move to jenkins build and push."},{date:"27.05.17:",desc:"Rebase to alpine:3.6."},{date:"13.05.17:",desc:"Switch to git source."},{date:"28.12.16:",desc:"Rebase to alpine:3.5."},{date:"23.11.16:",desc:"Rebase to alpine:edge."},{date:"23.09.16:",desc:"Use QT5 dependencies (thanks bauerj)."},{date:"10.09.16:",desc:"Add layer badges to README."},{date:"28.08.16:",desc:"Add badges to README."},{date:"10.08.16:",desc:"Rebase to xenial."},{date:"14.10.15:",desc:"Removed the webui, turned out to be to unstable for most usecases."},{date:"01.09.15:",desc:"Fixed mistake in README."},{date:"30.07.15:",desc:"Switched to internal baseimage, and fixed a bug with updating the webinterface."},{date:"06.07.15:",desc:"Enabled BLOWFISH encryption and added a (optional) webinterface, for the times you dont have access to your client."}]}},setup:r,_id:"content:apps:quassel-core.json",_type:s,title:"Quassel Core",_source:"content",_file:"apps\u002Fquassel-core.json",_extension:s}},prerenderedAt:1675118189999}}(false,true,"quassel-core","4242","[{{ project_name|capitalize }}]({{ project_url }}) is a modern, cross-platform, distributed IRC client, meaning that one (or multiple) client(s) can attach to and detach from a central core.\n\nThis container handles the IRC connection (quasselcore) and requires a desktop client (quasselclient) to be used and configured. It is designed to be always on and will keep your identity present in IRC even when your clients cannot be online. Backlog (history) is downloaded by your client upon reconnection allowing infinite scrollback through time.\n","PUID","100","PGID","TZ","Europe\u002FLondon","Specify a timezone to use EG Europe\u002FLondon.","RUN_OPTS","--config-from-environment","Custom CLI options for Quassel","\u002Fconfig","Database and quassel-core configuration storage.","The port quassel-core listens for connections on.","Quassel wiki: [quassel](http:\u002F\u002Fbugs.quassel-irc.org\u002Fprojects\u002Fquassel-irc\u002Fwiki)\n\nA great place to host a quassel instance is a VPS, such as [DigitalOcean](https:\u002F\u002Fwww.digitalocean.com\u002F?refcode=501c48b34b8c). For $5 a month you can have a 24\u002F7 IRC connection and be up and running in under 55 seconds (or so they claim).\n\nOnce you have the container running, fire up a quassel desktop client and connect to your new core instance using your droplets public IP address and the port you specified in your `docker run` command *default: 4242*. Create an admin user, select SQLite as your storage backend (Quassel limitation). Setup your real name and nick, then press `Save & Connect`.\n\nYou're now connected to IRC. Let's add you to our [IRC](http:\u002F\u002Fwww.linuxserver.io\u002Findex.php\u002Firc\u002F) `#linuxserver.io` room on Freenode. Click 'File' \u003E 'Networks' \u003E 'Configure Networks' \u003E 'Add' (under Networks section, not Servers) \u003E 'Use preset' \u003E Select 'Freenode' and then configure your identity using the tabs in the 'Network details' section. Once connected to Freenode, click `#join` and enter `#linuxserver.io`. That's it, you're done.\n\n## Stateless usage\n\nTo use Quassel in stateless mode, where it needs to be configured through\nenvironment arguments, run it with the `--config-from-environment` RUN_OPTS environment setting.\n\n| Env | Usage |\n| :----: | --- |\n| DB_BACKEND | `SQLite` or `PostgreSQL` |\n| DB_PGSQL_USERNAME | PostgreSQL User |\n| DB_PGSQL_PASSWORD | PostgreSQL Password |\n| DB_PGSQL_HOSTNAME | PostgreSQL Host |\n| DB_PGSQL_PORT | PostgreSQL Port |\n| AUTH_AUTHENTICATOR | `Database` or `LDAP` |\n| AUTH_LDAP_HOSTNAME | LDAP Host |\n| AUTH_LDAP_PORT | LDAP Port |\n| AUTH_LDAP_BIND_DN | LDAP Bind Domain |\n| AUTH_LDAP_BIND_PASSWORD | LDAP Password |\n| AUTH_LDAP_FILTER | LDAP Authentication Filters |\n| AUTH_LDAP_UID_ATTRIBUTE | LDAP UID |\n\nAdditionally you have RUN_OPTS that can be used to customize pathing and behvior.\n\n| Option | Example |\n| :----: | --- |\n| --strict-ident | strictly bool `--strict-ident` |\n| --ident-daemon | strictly bool `--ident-daemon` |\n| --ident-port | `--ident-port \"10113\"` |\n| --ident-listen | `--ident-listen \"::,0.0.0.0\"` |\n| --ssl-cert | `--ssl-cert \u002Fconfig\u002Fkeys\u002Fcert.crt` |\n| --ssl-key | `--ssl-key \u002Fconfig\u002Fkeys\u002Fcert.key` |\n| --require-ssl | strictly bool `--require-ssl` |\n\nMinimal example with SQLite:\n\n```\ndocker create \\\n  --name=quassel-core \\\n  -e PUID=1000 \\\n  -e PGID=1000 \\\n  -e TZ=Europe\u002FLondon \\\n  -e RUN_OPTS='--config-from-environment' \\\n  -e DB_BACKEND=SQLite \\\n  -e AUTH_AUTHENTICATOR=Database \\\n  -p 4242:4242 \\\n  -v \u003Cpath to data\u003E:\u002Fconfig \\\n  --restart unless-stopped \\\n  linuxserver\u002Fquassel-core\n```\n","json"))