export default (function(a,b,c,d,e,f,g){return {data:{ngircd:{_path:"\u002Fapps\u002Fngircd",_dir:"apps",_draft:b,_partial:b,_locale:"en",id:a,name:a,description:"[{{ project_name|capitalize }}]({{ project_url }}) is a free, portable and lightweight Internet Relay Chat server for small or private networks, developed under the GNU General Public License (GPL). It is easy to configure, can cope with dynamic IP addresses, and supports IPv6, SSL-protected connections as well as PAM for authentication. It is written from scratch and not based on the original IRCd.",icon:"https:\u002F\u002Fraw.githubusercontent.com\u002Flinuxserver\u002Fdocker-templates\u002Fmaster\u002Flinuxserver.io\u002Fimg\u002Fngircd-logo.png",links:[{type:"docker",url:"https:\u002F\u002Fhub.docker.com\u002Fr\u002Flinuxserver\u002Fngircd"},{type:"docs",url:"https:\u002F\u002Fdocs.linuxserver.io\u002Fimages\u002Fdocker-ngircd"}],containers:[{name:a,image:"linuxserver\u002Fngircd",env:[{id:c,key:c,description:"User ID",default:d},{id:e,key:e,description:"Group ID",default:d},{id:f,key:f,description:"Timezone",default:"America\u002FNew_York"}],volumes:[{container:"\u002Fconfig",description:"Where `ngircd.conf` is stored",key:"config"}],ports:[{container:"6667",description:"ngircd port"}]}],_id:"content:apps:ngircd.json",_type:g,title:"Ngircd",_source:"content",_file:"apps\u002Fngircd.json",_extension:g}},prerenderedAt:1675116539397}}("ngircd",false,"PUID","100","PGID","TZ","json"))