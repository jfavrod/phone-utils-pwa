export interface IMenuItemProps {
    path: string;
    onClick(path: string): void;
    value: string;
    varient?: 'full' | 'half';
}
