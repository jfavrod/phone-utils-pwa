export interface IConverionInputProps {
    label: string;
    value: number;
    onValueChange(newValue: number): void;
}

export interface IConversionMenuProps {
    navigate(path: string): void;
}
