import FleetClient from "./fleet.mjs";
import {App} from "~/meta/interfaces/interfaces";
import enhanceAppWithInspection from "../docker/inspect.mjs";
import fs from "fs";
import findIconForName from "../icon/finder.mjs";

( async () => {
    console.log('Pulling LinuxServer images...')
    const images = await FleetClient.images();

    // Create Apps
    const apps: App[] = [];
    for (const image of images) {
        const app: App = {
            id: image.name,
            name: image.name,
            description: image.description,
            icon: await findIconForName(image.name),
            links: [
                {
                    type: 'docker',
                    url: `https://hub.docker.com/r/linuxserver/${image.name}`,
                },
                {
                    type: 'docs',
                    url: `https://docs.linuxserver.io/images/docker-${image.name}`,
                }
            ],
            containers: [
                {
                    name: image.name,
                    image: `linuxserver/${image.name}`,
                    env: [
                        {
                            id: 'PUID',
                            key: 'PUID',
                            description: 'User ID',
                            default: '100'
                        },
                        {
                            id: 'PGID',
                            key: 'PGID',
                            description: 'Group ID',
                            default: '100'
                        },
                        {
                            id: 'TZ',
                            key: 'TZ',
                            description: 'Timezone',
                            default: "America/New_York"
                        }
                    ]
                }
            ]
        };

        await enhanceAppWithInspection(app);

        for(const container of app.containers) {
            for(const volume of container.volumes ?? []) {
                if (volume.container === '/config') {
                    volume.key = 'config';
                }
            }
        }

        apps.push(app);
    }

    const output = {
        total: apps.length,
        apps,
    };

    fs.writeFileSync('content/all.json', JSON.stringify(output, null, 4));

    for(const app of apps) {
        fs.writeFileSync(`content/apps/${app.id}.json`, JSON.stringify(app, null, 4));
    }

    console.log(`Wrote ${apps.length} apps to file`)
})();