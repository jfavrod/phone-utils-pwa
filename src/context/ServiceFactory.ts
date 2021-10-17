import { IOpenWeatherAPIConfig } from "../services/Weather/OpenWeatherAPI/interfaces";
import Config from "./Config";

import {
    ICookieService,
    IIAMService,
    IListsService,
    IListsServiceConfig,
    IWeatherService,
    CookieService,
    ListsService,
} from '../services';

import StarkHamlet, { IToken } from '../services/IAMService/StarkHamlet';
import { OpenWeatherAPI } from '../services/Weather/OpenWeatherAPI';
import { WeatherTesting } from '../services/Weather/WeatherTesting';

export default class ServiceFactory {
    private static cookieSvc: ICookieService;
    private static iamSvc: IIAMService<IToken>;
    private static listsSvc: IListsService;
    private static weatherSvc: IWeatherService;

    public static getCookieSvc(): ICookieService {
        if (!ServiceFactory.cookieSvc) {
            ServiceFactory.cookieSvc = new CookieService();
        }

        return ServiceFactory.cookieSvc;
    }

    public static getIAMSvc(): IIAMService<IToken> {
        if (!ServiceFactory.iamSvc) {
            ServiceFactory.iamSvc = new StarkHamlet('//:localhost:5000');
        }
        return ServiceFactory.iamSvc;
    }

    public static getListsSvc(): IListsService {
        if (!ServiceFactory.listsSvc) {
            const conf = Config.getServiceConfig('Lists') as IListsServiceConfig;

            ServiceFactory.listsSvc = new ListsService(
                Config.getEnv() === 'dev' ? conf.urls.dev : conf.urls.prod,
            )
        }

        return ServiceFactory.listsSvc;
    }

    public static getWeatherSvc(): IWeatherService {
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
