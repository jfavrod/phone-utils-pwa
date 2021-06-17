import { MouseEvent } from "react";

export interface IMenuItemProps {
    disabled?: boolean;
    hide?: boolean;
    onClick?(event: MouseEvent): void;
    path?: string;
    value: string;
    variant?: 'full' | 'half';
}
