export interface IConfig {
    services: {
        [serviceName: string]: IServiceConfig
    }
}

export interface IServiceConfig {
    [key: string]: string | number | string[] | number[] | object;
}
