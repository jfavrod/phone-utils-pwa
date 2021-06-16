export interface IListProps {
    createdAt?: number;
    id?: string;
    items: string[];
    modifiedAt?: number;
    title: string;
}

export interface IListsService {
    add(list: IListProps): Promise<IListsServiceResponse>;
    getAll(): Promise<IListsServiceResponse>;
    update(list: IListProps): Promise<IListsServiceResponse>;
}

export interface IListsServiceResponse {
    data?: IListProps[];
    error: boolean;
    success: boolean;
    message?: string;
}
