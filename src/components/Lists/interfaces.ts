export interface IListPropsData {
    data: IListProps;
}

export interface IListProps {
    createdAt: number;
    id: string;
    items: string[];
    modifiedAt: number;
    title: string;
}

export interface IListsProps {
    navigate(path: string): void;
}

export interface IListetteProps {
    data: IListProps;
    onClick(list: IListProps): void;
}
