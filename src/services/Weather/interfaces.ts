export interface ICurrentConditions {
    ctemp: number;
    description: string;
    ftemp: number;
    highTemp?: number;
    location?: string;
    lowTemp?: number;
    humidity?: number;
}

export interface IPlace {
    cityName?: string;
    lat?: number;
    lon?: number;
}

export interface IWeatherService {
    getCurrentConditions(place: IPlace): Promise<ICurrentConditions>;
}