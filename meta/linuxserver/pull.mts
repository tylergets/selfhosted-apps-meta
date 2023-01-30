import FleetClient from "./fleet.mjs";
import {App, AppEnv, AppPort, AppVolume} from "~/meta/interfaces/interfaces";
import enhanceAppWithInspection from "../docker/inspect.mjs";
import fs from "fs";
import findIconForName from "../icon/finder.mjs";
import fetch from 'node-fetch';
import YAML from "yaml";

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
                        }
                    ]
                }
            ]
        };

        // TODO Replace with readme-vars.yml from each github repo
        // await enhanceAppWithInspection(app);

        const readmeVars = await fetch(`https://raw.githubusercontent.com/linuxserver/docker-${image.name}/master/readme-vars.yml`).then((r) => r.text()).then((r) => YAML.parse(r)).catch((err) => {
            console.log('Failed to fetch readme-vars.yml for ' + image.name);
            console.error(err);
            return {
                param_usage_include_ports: false,
                param_usage_include_vols: false,
                param_usage_include_env: false,
                param_volumes: [],
                param_ports: [],
                param_env_vars: [],
            };
        });

        if (!app.meta) {
            app.meta = {};
        }
        app.meta['readme-vars'] = readmeVars;

        if (readmeVars.project_logo && readmeVars.project_logo.startsWith('https://')) {
            app.icon = readmeVars.project_logo;
        }

        if (readmeVars.app_setup_block_enabled ?? false) {
            app.setup = readmeVars.app_setup_block;
        }

        app.description = readmeVars.project_blurb;

        if(!app.links) {
            app.links = [];
        }

        if(readmeVars.param_usage_include_vols) {
            const allVolumes = [
                ...readmeVars.opt_param_volumes ?? [],
                ...readmeVars.param_volumes ?? []
            ];
            const readmeVolumes: AppVolume[] = allVolumes.map((volume: any) => {
                return {
                    container: volume.vol_path,
                    description: volume.desc,
                };
            });
            for(const container of app.containers) {
                container.volumes = [
                    ...container.volumes ?? [],
                    ...readmeVolumes ?? [],
                ];
            }
        }

        if(readmeVars.param_usage_include_env) {
            const allEnvVars = [
                ...readmeVars.param_env_vars ?? [],
                ...readmeVars.opt_param_env_vars ?? [],
            ];

            const env: AppEnv[] = allEnvVars?.map((e: any) => {
                return {
                    id: e.env_var,
                    default: e.env_value,
                    description: e.desc,
                } as AppEnv;
            });
            for(const container of app.containers) {
                container.env = [
                    ...container.env ?? [],
                    ...env ?? [],
                ];
            }
        }

        if(readmeVars.param_usage_include_ports) {
            for(const container of app.containers) {
                const readmePorts: AppPort[] = readmeVars.param_ports?.map((port: any) => {
                    return {
                        container: port.internal_port,
                        description: port.port_desc,
                        protocol: 'tcp',
                        web: false,
                    };
                });

                container.ports = [
                    ...container.ports ?? [],
                    ...readmePorts ?? [],
                ];

            }
        }

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