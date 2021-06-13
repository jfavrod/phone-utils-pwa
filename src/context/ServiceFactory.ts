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
                process.env.OPEN_WEATHER_API_KEY || '',
                conf.url,
            );
        }

        return ServiceFactory.weatherSvc;
    }
}
