import { IListProps, IListsService, IListsServiceResponse } from './interfaces';

export default class ListsService implements IListsService {
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
                success: false, 
            });
        })
        .catch(() => ({
            error: true,
            success: false,
        }));
    }
}
