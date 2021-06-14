import { OpenWeatherAPI } from '../services/Weather/OpenWeatherAPI';
import { IWeatherService } from '../services/Weather/interfaces';
import { IOpenWeatherAPIConfig } from "../services/Weather/OpenWeatherAPI/interfaces";
import Config from "./Config";

export default class ServiceFactory {
    private static weatherSvc: IWeatherService;

    public getWeatherSvc() {
        if (!ServiceFactory.weatherSvc) {
            const conf = Config.getServiceConfig('OpenWeatherAPI') as IOpenWeatherAPIConfig;

            ServiceFactory.weatherSvc = new OpenWeatherAPI(
                '2433081da14f153d81ad25fc517485f8',
                Config.getEnv() === 'dev' ? conf.urls.dev : conf.urls.prod,
            );
        }

        return ServiceFactory.weatherSvc;
    }
}
