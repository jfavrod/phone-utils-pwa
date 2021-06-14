import config from '../config/config.json'
import { IConfig, IServiceConfig } from './interfaces';

export default class Config {
    public static getEnv(): 'dev' | 'prod' {
        if (/localhost/.test(window.location.hostname)) {
            return 'dev';
        }
        return 'prod';
    }

    public static getServiceConfig(serviceName: string): IServiceConfig | null{
        if (config && config.services && serviceName in config.services) {
            return (config as IConfig).services[serviceName];
        }

        return null;
    }
}
