import { ICurrentConditions, IPlace, IWeatherService } from "../interfaces";
import { ICurrentWeatherResponse } from './interfaces';

/**
 * https://openweathermap.org
 */
export default class OpenWeatherAPI implements IWeatherService {
    public className = 'OpenWeatherAPI';
    private baseUrl: string;
    private key: string;

    public constructor(key: string, url: string) {
        this.baseUrl = url;
        this.key = key;

        this.getCurrentConditions = this.getCurrentConditions.bind(this);
    }

    public async getCurrentConditions(place: IPlace): Promise<ICurrentConditions> {
        const cc = {} as ICurrentConditions;
        let url = `//${this.baseUrl}/weather?appid=${this.key}&units=metric`;

        try {
            if ('cityName' in place) {
                url += `&q=${place.cityName}`;
            }
            else if ('lat' in place && 'lon' in place) {
                url += `&lat=${place.lat}&lon=${place.lon}`;
            }

            const data = await (
                fetch(url).then((data) => data.json())
            ) as ICurrentWeatherResponse;

            cc.description = data.weather[0].description;
            cc.ctemp = data.main.temp;
            cc.ftemp = Number(( (data.main.temp * 9/5) + 32 ).toFixed(2));
            cc.highTemp = data.main.temp_max;
            cc.lowTemp = data.main.temp_min;
            cc.humidity = data.main.humidity

            console.log('data', data);
        }
        catch (err) {
            console.log(`error, ${this.className}.getCurrentConditions(${place}) ${err.message}`);
        }

        return cc;
    }
}
