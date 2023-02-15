export default (function(a,b,c,d,e,f){return {data:{"docker-compose":{_path:"\u002Fapps\u002Fdocker-compose",_dir:"apps",_draft:b,_partial:b,_locale:"en",id:a,name:a,icon:"https:\u002F\u002Fraw.githubusercontent.com\u002Fwalkxcode\u002Fdashboard-icons\u002Fmain\u002Fpng\u002Fdockercompose.png",links:[{type:"docker",url:"https:\u002F\u002Fhub.docker.com\u002Fr\u002Flinuxserver\u002Fdocker-compose"},{type:"docs",url:"https:\u002F\u002Fdocs.linuxserver.io\u002Fimages\u002Fdocker-docker-compose"}],containers:[{name:a,image:"linuxserver\u002Fdocker-compose",env:[{id:c,key:c,description:"User ID",default:d},{id:e,key:e,description:"Group ID",default:d}]}],meta:{"readme-vars":{project_name:a,full_custom_readme:"{% raw -%}\n[![linuxserver.io](https:\u002F\u002Fraw.githubusercontent.com\u002Flinuxserver\u002Fdocker-templates\u002Fmaster\u002Flinuxserver.io\u002Fimg\u002Flinuxserver_medium.png)](https:\u002F\u002Flinuxserver.io)\n\n[![Blog](https:\u002F\u002Fimg.shields.io\u002Fstatic\u002Fv1.svg?color=94398d&labelColor=555555&logoColor=ffffff&style=for-the-badge&label=linuxserver.io&message=Blog)](https:\u002F\u002Fblog.linuxserver.io \"all the things you can do with our containers including How-To guides, opinions and much more!\")\n[![Discord](https:\u002F\u002Fimg.shields.io\u002Fdiscord\u002F354974912613449730.svg?color=94398d&labelColor=555555&logoColor=ffffff&style=for-the-badge&label=Discord&logo=discord)](https:\u002F\u002Fdiscord.gg\u002FYWrKVTn \"realtime support \u002F chat with the community and the team.\")\n[![Discourse](https:\u002F\u002Fimg.shields.io\u002Fdiscourse\u002Fhttps\u002Fdiscourse.linuxserver.io\u002Ftopics.svg?color=94398d&labelColor=555555&logoColor=ffffff&style=for-the-badge&logo=discourse)](https:\u002F\u002Fdiscourse.linuxserver.io \"post on our community forum.\")\n[![Fleet](https:\u002F\u002Fimg.shields.io\u002Fstatic\u002Fv1.svg?color=94398d&labelColor=555555&logoColor=ffffff&style=for-the-badge&label=linuxserver.io&message=Fleet)](https:\u002F\u002Ffleet.linuxserver.io \"an online web interface which displays all of our maintained images.\")\n[![GitHub](https:\u002F\u002Fimg.shields.io\u002Fstatic\u002Fv1.svg?color=94398d&labelColor=555555&logoColor=ffffff&style=for-the-badge&label=linuxserver.io&message=GitHub&logo=github)](https:\u002F\u002Fgithub.com\u002Flinuxserver \"view the source for all of our repositories.\")\n[![Open Collective](https:\u002F\u002Fimg.shields.io\u002Fopencollective\u002Fall\u002Flinuxserver.svg?color=94398d&labelColor=555555&logoColor=ffffff&style=for-the-badge&label=Supporters&logo=open%20collective)](https:\u002F\u002Fopencollective.com\u002Flinuxserver \"please consider helping us by either donating or contributing to our budget\")\n\nThe [LinuxServer.io](https:\u002F\u002Flinuxserver.io) team brings you another container release featuring:\n\n* regular and timely application updates\n* easy user mappings (PGID, PUID)\n* custom base image with s6 overlay\n* weekly base OS updates with common layers across the entire LinuxServer.io ecosystem to minimise space usage, down time and bandwidth\n* regular security updates\n\nFind us at:\n\n* [Blog](https:\u002F\u002Fblog.linuxserver.io) - all the things you can do with our containers including How-To guides, opinions and much more!\n* [Discord](https:\u002F\u002Fdiscord.gg\u002FYWrKVTn) - realtime support \u002F chat with the community and the team.\n* [Discourse](https:\u002F\u002Fdiscourse.linuxserver.io) - post on our community forum.\n* [Fleet](https:\u002F\u002Ffleet.linuxserver.io) - an online web interface which displays all of our maintained images.\n* [GitHub](https:\u002F\u002Fgithub.com\u002Flinuxserver) - view the source for all of our repositories.\n* [Open Collective](https:\u002F\u002Fopencollective.com\u002Flinuxserver) - please consider helping us by either donating or contributing to our budget\n\n# [linuxserver\u002Fdocker-compose](https:\u002F\u002Fgithub.com\u002Flinuxserver\u002Fdocker-docker-compose)\n\n[![Scarf.io pulls](https:\u002F\u002Fscarf.sh\u002Finstalls-badge\u002Flinuxserver-ci\u002Flinuxserver%2Fdocker-compose?color=94398d&label-color=555555&logo-color=ffffff&style=for-the-badge&package-type=docker)](https:\u002F\u002Fscarf.sh\u002Fgateway\u002Flinuxserver-ci\u002Fdocker\u002Flinuxserver%2Fdocker-compose)\n[![GitHub Stars](https:\u002F\u002Fimg.shields.io\u002Fgithub\u002Fstars\u002Flinuxserver\u002Fdocker-docker-compose.svg?color=94398d&labelColor=555555&logoColor=ffffff&style=for-the-badge&logo=github)](https:\u002F\u002Fgithub.com\u002Flinuxserver\u002Fdocker-docker-compose)\n[![GitHub Release](https:\u002F\u002Fimg.shields.io\u002Fgithub\u002Frelease\u002Flinuxserver\u002Fdocker-docker-compose.svg?color=94398d&labelColor=555555&logoColor=ffffff&style=for-the-badge&logo=github&include_prereleases)](https:\u002F\u002Fgithub.com\u002Flinuxserver\u002Fdocker-docker-compose\u002Freleases)\n[![GitHub Package Repository](https:\u002F\u002Fimg.shields.io\u002Fstatic\u002Fv1.svg?color=94398d&labelColor=555555&logoColor=ffffff&style=for-the-badge&label=linuxserver.io&message=GitHub%20Package&logo=github)](https:\u002F\u002Fgithub.com\u002Flinuxserver\u002Fdocker-docker-compose\u002Fpackages)\n[![GitLab Container Registry](https:\u002F\u002Fimg.shields.io\u002Fstatic\u002Fv1.svg?color=94398d&labelColor=555555&logoColor=ffffff&style=for-the-badge&label=linuxserver.io&message=GitLab%20Registry&logo=gitlab)](https:\u002F\u002Fgitlab.com\u002Flinuxserver.io\u002Fdocker-docker-compose\u002Fcontainer_registry)\n[![Quay.io](https:\u002F\u002Fimg.shields.io\u002Fstatic\u002Fv1.svg?color=94398d&labelColor=555555&logoColor=ffffff&style=for-the-badge&label=linuxserver.io&message=Quay.io)](https:\u002F\u002Fquay.io\u002Frepository\u002Flinuxserver.io\u002Fdocker-compose)\n[![Docker Pulls](https:\u002F\u002Fimg.shields.io\u002Fdocker\u002Fpulls\u002Flinuxserver\u002Fdocker-compose.svg?color=94398d&labelColor=555555&logoColor=ffffff&style=for-the-badge&label=pulls&logo=docker)](https:\u002F\u002Fhub.docker.com\u002Fr\u002Flinuxserver\u002Fdocker-compose)\n[![Docker Stars](https:\u002F\u002Fimg.shields.io\u002Fdocker\u002Fstars\u002Flinuxserver\u002Fdocker-compose.svg?color=94398d&labelColor=555555&logoColor=ffffff&style=for-the-badge&label=stars&logo=docker)](https:\u002F\u002Fhub.docker.com\u002Fr\u002Flinuxserver\u002Fdocker-compose)\n[![Jenkins Build](https:\u002F\u002Fimg.shields.io\u002Fjenkins\u002Fbuild?labelColor=555555&logoColor=ffffff&style=for-the-badge&jobUrl=https%3A%2F%2Fci.linuxserver.io%2Fjob%2FDocker-Pipeline-Builders%2Fjob%2Fdocker-docker-compose%2Fjob%2Fmaster%2F&logo=jenkins)](https:\u002F\u002Fci.linuxserver.io\u002Fjob\u002FDocker-Pipeline-Builders\u002Fjob\u002Fdocker-docker-compose\u002Fjob\u002Fmaster\u002F)\n\n[docker-compose](https:\u002F\u002Fgithub.com\u002Fdocker\u002Fcompose) is a tool for defining and running multi-container Docker applications. With Compose, you use a Compose file to configure your application's services. Then, using a single command, you create and start all the services from your configuration.\n\n[![docker-compose](https:\u002F\u002Fgithub.com\u002Fdocker\u002Fcompose\u002Fraw\u002Fmaster\u002Flogo.png)](https:\u002F\u002Fgithub.com\u002Fdocker\u002Fcompose)\n\n## Supported Architectures\n\nWe utilise the docker manifest for multi-platform awareness. More information is available from docker [here](https:\u002F\u002Fgithub.com\u002Fdocker\u002Fdistribution\u002Fblob\u002Fmaster\u002Fdocs\u002Fspec\u002Fmanifest-v2-2.md#manifest-list) and our announcement [here](https:\u002F\u002Fblog.linuxserver.io\u002F2019\u002F02\u002F21\u002Fthe-lsio-pipeline-project\u002F).\n\nSimply pulling `lscr.io\u002Flinuxserver\u002Fdocker-compose:latest` should retrieve the correct image for your arch, but you can also pull specific arch images via tags.\n\nThe architectures supported by this image are:\n\n| Architecture | Available | Tag |\n| :----: | :----: | ---- |\n| x86-64 | ✅ | amd64-\\\u003Cversion tag\\\u003E |\n| arm64 | ✅ | arm64v8-\\\u003Cversion tag\\\u003E |\n| armhf| ✅ | arm32v7-\\\u003Cversion tag\\\u003E |\n\n## Version Tags\n\nThis image provides various versions that are available via tags. Please read the descriptions carefully and exercise caution when using unstable or development tags.\n\n| Tag | Available | Description |\n| :----: | :----: |--- |\n| latest | ✅ | docker-compose v1 releases |\n| alpine | ✅ | docker-compose v1 releases with our alpine baseimage |\n| v2 | ✅ | docker compose v2 releases |\n\n## Usage\n\n### Docker cli\n\n```\ndocker run --rm \\\n  -v \u002Fvar\u002Frun\u002Fdocker.sock:\u002Fvar\u002Frun\u002Fdocker.sock \\\n  -v \"$PWD:$PWD\" \\\n  -w=\"$PWD\" \\\n  lscr.io\u002Flinuxserver\u002Fdocker-compose:latest \\\n  up\n```\nYou can replace the last line with any docker-compose command and argument, which will be passed to docker-compose inside the image.\n\n### Recommended method\n\nWe provide a very convenient script that allows the docker-compose container to run as if it was installed natively:\n\n```\nsudo curl -L --fail https:\u002F\u002Fraw.githubusercontent.com\u002Flinuxserver\u002Fdocker-docker-compose\u002Fmaster\u002Frun.sh -o \u002Fusr\u002Flocal\u002Fbin\u002Fdocker-compose\nsudo chmod +x \u002Fusr\u002Flocal\u002Fbin\u002Fdocker-compose\n```\n\nRunning these two commands on your docker host once will let you issue commands such as `docker-compose up -d` and the docker-compose container will do its job behind the scenes.\n\n## Docker Mods\n\n[![Docker Mods](https:\u002F\u002Fimg.shields.io\u002Fbadge\u002Fdynamic\u002Fyaml?color=94398d&labelColor=555555&logoColor=ffffff&style=for-the-badge&label=docker-compose&query=%24.mods%5B%27docker-compose%27%5D.mod_count&url=https%3A%2F%2Fraw.githubusercontent.com%2Flinuxserver%2Fdocker-mods%2Fmaster%2Fmod-list.yml)](https:\u002F\u002Fmods.linuxserver.io\u002F?mod=docker-compose \"view available mods for this container.\") [![Docker Universal Mods](https:\u002F\u002Fimg.shields.io\u002Fbadge\u002Fdynamic\u002Fyaml?color=94398d&labelColor=555555&logoColor=ffffff&style=for-the-badge&label=universal&query=%24.mods%5B%27universal%27%5D.mod_count&url=https%3A%2F%2Fraw.githubusercontent.com%2Flinuxserver%2Fdocker-mods%2Fmaster%2Fmod-list.yml)](https:\u002F\u002Fmods.linuxserver.io\u002F?mod=universal \"view available universal mods.\")\n\nWe publish various [Docker Mods](https:\u002F\u002Fgithub.com\u002Flinuxserver\u002Fdocker-mods) to enable additional functionality within the containers. The list of Mods available for this image (if any) as well as universal mods that can be applied to any one of our images can be accessed via the dynamic badges above.\n\n## Support Info\n\n* Shell access whilst the container is running: `docker exec -it docker-compose \u002Fbin\u002Fbash`\n* To monitor the logs of the container in realtime: `docker logs -f docker-compose`\n* container version number\n  * `docker inspect -f '{{ index .Config.Labels \"build_version\" }}' docker-compose`\n* image version number\n  * `docker inspect -f '{{ index .Config.Labels \"build_version\" }}' lscr.io\u002Flinuxserver\u002Fdocker-compose:latest`\n\n## Updating Info\n\nMost of our images are static, versioned, and require an image update and container recreation to update the app inside. With some exceptions (ie. nextcloud, plex), we do not recommend or support updating apps inside the container. Please consult the [Application Setup](#application-setup) section above to see if it is recommended for the image.\n\nBelow are the instructions for updating containers:\n\n### Via Docker Run\n\n* Update the image: `docker pull lscr.io\u002Flinuxserver\u002Fdocker-compose:latest`\n* You can also remove the old dangling images: `docker image prune`\n\n## Building locally\n\nIf you want to make local modifications to these images for development purposes or just to customize the logic:\n\n```bash\ngit clone https:\u002F\u002Fgithub.com\u002Flinuxserver\u002Fdocker-docker-compose.git\ncd docker-docker-compose\ndocker build \\\n  --no-cache \\\n  --pull \\\n  -t lscr.io\u002Flinuxserver\u002Fdocker-compose:latest .\n```\n\nThe ARM variants can be built on x86_64 hardware using `multiarch\u002Fqemu-user-static`\n\n```bash\ndocker run --rm --privileged multiarch\u002Fqemu-user-static:register --reset\n```\n\nOnce registered you can define the dockerfile to use with `-f Dockerfile.aarch64`.\n\n## Versions\n\n* **15.03.22:** - Add v2 branch. Change master to only fetch v1 releases. Change alpine to only fetch v1 releases. Rebase master to focal. Rebase alpine to 3.15.\n* **17.12.20:** - Update run.sh with formatting changes.\n* **04.10.20:** - Update run.sh with changes from upstream.\n* **31.08.20:** - Update tox and virtualenv.\n* **31.07.20:** - Add support for global env var `DOCKER_COMPOSE_IMAGE_TAG` in the `run.sh` script.\n* **06.07.20:** - Publish docker-compose and docker-cli binaries in Github releases.\n* **01.07.20:** - Release alpine based images at `alpine` tag.\n* **04.06.20:** - Bump docker-cli to 19.03.8, auto-detect python3 version.\n* **19.05.20:** - Initial Release.\n\n{%- endraw %}\n"}},_id:"content:apps:docker-compose.json",_type:f,title:"Docker Compose",_source:"content",_file:"apps\u002Fdocker-compose.json",_extension:f}},prerenderedAt:1676483555035}}("docker-compose",false,"PUID","100","PGID","json"))