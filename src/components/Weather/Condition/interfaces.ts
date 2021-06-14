import { IWeather } from "../../../services/Weather/OpenWeatherAPI/interfaces";

export interface IConditionProps {
    condition?: IWeather["description"];
    label?: string;
    variant?: 'full' | 'half';
}