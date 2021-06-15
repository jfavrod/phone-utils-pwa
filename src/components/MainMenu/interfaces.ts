export interface IMenuItemProps {
    path: string;
    onClick(path: string): void;
    value: string;
    variant?: 'full' | 'half';
}
