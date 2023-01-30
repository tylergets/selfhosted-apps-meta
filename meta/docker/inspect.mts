import Docker from "dockerode";
import {App} from "~/meta/interfaces/interfaces";

const docker = new Docker({socketPath: '/var/run/docker.sock'});

export default async function enhanceAppWithInspection(app: App) {
    for(const container of app.containers) {
        const image = docker.getImage(container.image);

        let inspection;
        try {
            inspection = await image.inspect();
        } catch (e) {
            continue;
        }

        // Add Volumes
        const volumes = Object.keys(inspection.Config.Volumes ?? {}).map(volume => {
            return {
                container: volume,
                description: `Image exposes volume mounted at ${volume}`,
            }
        });

        // Add Ports
        const ports = Object.keys(inspection.Config.ExposedPorts ?? {}).map(port => {
            const [container, protocol] = port.split('/');
            return {
                container: parseInt(container),
                description: `Image exposes port ${container} over ${protocol}`,
                protocol: protocol,
                web: protocol === 'tcp',
            }
        });

        container.volumes = [
            ...container.volumes ?? [],
            ...volumes,
        ];

        container.ports = [
            ...container.ports ?? [],
            ...ports,
        ];
    }
}