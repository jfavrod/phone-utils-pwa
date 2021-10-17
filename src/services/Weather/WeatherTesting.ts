import { ICurrentConditions, IPlace, IWeatherService } from './interfaces'

export class WeatherTesting implements IWeatherService {
    public getCurrentConditions(place: IPlace): Promise<ICurrentConditions> {
        return Promise.resolve({
            ctemp: -23,
            description: 'clear sky',
            highTemp: 0,
            lowTemp: 0,
            humidity: 50
        } as ICurrentConditions);
    }
}
