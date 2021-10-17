import { OpenWeatherAPI } from '../services/Weather/OpenWeatherAPI';
import { IWeatherService } from '../services/Weather/interfaces';
import { IOpenWeatherAPIConfig } from "../services/Weather/OpenWeatherAPI/interfaces";
import Config from "./Config";
import ListsService, { IListsService } from '../services/Lists';
import { IListsServiceConfig } from '../services/Lists/interfaces';
import { WeatherTesting } from '../services/Weather/WeatherTesting';

export default class ServiceFactory {
    private static listsSvc: IListsService;
    private static weatherSvc: IWeatherService;

    public static getListsSvc() {
        if (!ServiceFactory.listsSvc) {
            const conf = Config.getServiceConfig('Lists') as IListsServiceConfig;

            ServiceFactory.listsSvc = new ListsService(
                Config.getEnv() === 'dev' ? conf.urls.dev : conf.urls.prod,
            )
        }

        return ServiceFactory.listsSvc;
    }

    public static getWeatherSvc() {
        if (!ServiceFactory.weatherSvc) {
            if (window.location.hostname === 'localhost') {
                ServiceFactory.weatherSvc = new WeatherTesting();
            }
            else {
                const conf = Config.getServiceConfig('OpenWeatherAPI') as IOpenWeatherAPIConfig;

                ServiceFactory.weatherSvc = new OpenWeatherAPI(
                    '2433081da14f153d81ad25fc517485f8',
                    Config.getEnv() === 'dev' ? conf.urls.dev : conf.urls.prod,
                );
            }
        }

        return ServiceFactory.weatherSvc;
    }
}
