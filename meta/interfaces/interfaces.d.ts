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
    key?: string;
    id: string;
    label?: string;
    description?: string;
    default?: string;
    required?: boolean;
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
    setup?: string;
    categories?: string[];
    icon?: string;
    containers: AppContainer[];
    links?: AppLink[];
    meta?: Record<string, any>;
}