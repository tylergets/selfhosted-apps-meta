// We need to define an interface which can hold a self hosted app
// It may have multiple docker containers

export interface AppLink {
    type: string;
    url: string;
}

export interface AppVolume {
    key?: string;
    description: string;
    container: string;
}

export interface AppPort {
    key?: string;
    description: string;
    container: number;
    protocol: string;
    web: boolean;
}

export interface AppEnv {
    id: string;
    key?: string;
    description: string;
    default?: string;
}

export interface AppContainer {
    image: string;
    name: string;
    ports?: AppPort[];
    volumes?: AppVolume[];
    env?: AppEnv[];
}

export interface App {
    id: string;
    name: string;
    description?: string;
    icon?: string;
    containers: AppContainer[];
    links?: AppLink[];
}