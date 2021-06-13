export interface ICurrentWeatherResponse {
    base: string;
    clouds: {
        all: number;
    },
    cod: number;
    coord: {
        lat: number;
        lon: number;
    },
    dt: number;
    id: number;
    main: IMain;
    name: string;
    sys: {
        country: string;
        id: number;
        message: number;
        sunrise: string;
        sunset: string;
        type: number;
    };
    timezone: number;
    visibility: number;
    weather: IWeather[];
    wind: {
        speed: number;
        deg: number;
    }
}

export interface IMain {
    feels_like: number;
    humidity: number;
    pressure: number;
    temp: number;
    temp_max: number;
    temp_min: number;
}

export interface IOpenWeatherAPIConfig {
    [index: string]: string;
    key: string;
    url: string;
}

export interface IWeather {
    description: 'clear sky'     | 'few clouds'  | 'scattered clouds' |
                 'broken clouds' | 'shower rain' | 'rain' |
                 'thunderstorm'  | 'snow'        | 'mist' |
                 'light rain'    | 'drizzle'     | 'freezing rain';
    icon: string;
    id: number;
    main: string;
}
