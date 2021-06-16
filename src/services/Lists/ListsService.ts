import { IListProps, IListsService, IListsServiceResponse } from './interfaces';

export default class ListsService implements IListsService {
    public add(list: IListProps): Promise<IListsServiceResponse> {
        return fetch('http://localhost:5000/lists', {
            body: JSON.stringify(list),
            headers: {
                'content-type': 'application/json',
            },
            method: 'POST',
        })
        .then((res) => {
            if (res.status === 201) {
                res.json()
                    .then((res) => ({
                        data: [ res.body as IListProps ],
                        error: false,
                        success: true,
                    }));
            }
            return ({
                error: false,
                message: res.statusText,
                success: false,
            });
        })
        .catch((err) => {
            return ({
                error: false,
                message: err.message,
                success: false,
            });
        });
    }

    public delete(id: string): Promise<IListsServiceResponse> {
        return fetch(`http://localhost:5000/lists/${id}`, {
            method: 'DELETE',
        })
        .then((res) => {
            if (res.ok) {
                return {
                    error: false,
                    success: true,
                };
            }
            return ({
                error: false,
                message: res.statusText,
                success: false,
            });
        })
        .catch((err) => {
            return ({
                error: false,
                message: err.message,
                success: false,
            });
        });
    }

    public getAll(): Promise<IListsServiceResponse> {
        return fetch('http://localhost:5000/lists')
            .then((res) => res.json())
            .then((data) => ({
                data,
                error: false,
                success: true
            }))
            .catch((err) => ({
                error: true,
                success: false,
            }));
    }

    public update(list: IListProps): Promise<IListsServiceResponse> {
        return fetch('http://localhost:5000/lists', {
            body: JSON.stringify(list),
            headers: {
                'content-type': 'application/json'
            },
            method: 'PUT',
        })
        .then((res) => {
            if (res.status === 204) {
                return ({
                   error: false,
                   success: true, 
                });
            }
            return ({
                error: false,
                message: '',
                success: false, 
            });
        })
        .catch((err) => ({
            error: true,
            message: err.message,
            success: false,
        }));
    }
}
