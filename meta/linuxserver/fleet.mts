import fetch from 'node-fetch';

export default class FleetClient {
    static async images() {
        const baseUrl = 'https://fleet.linuxserver.io/api/v1';
        const repos = await fetch(`${baseUrl}/images`)
            .then(res => res.json() as any)
            .then(res => res.data.repositories)

        return [
            ...repos.lsiocommunity,
            ...repos.linuxserver,
        ].filter(({stable, deprecated}) => stable && !deprecated);
    }
}