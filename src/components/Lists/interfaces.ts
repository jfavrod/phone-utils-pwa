import { IListProps } from '../../services/Lists';

export interface IListEditorProps {
    data?: IListProps;
    cancelAction?(): void;
    saveAction?(list: IListProps): void;
}

export interface IListPropsData {
    data: IListProps;
}

export interface IListsProps {
    navigate(path: string): void;
}

export interface IListetteProps {
    data: IListProps;
    onClick(list: IListProps): void;
}
