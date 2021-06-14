export interface IThermometerProps {
    label?: string;
    temp: number;
    units?: 'c' | 'f';
    variant?: 'full' | 'half';
}
