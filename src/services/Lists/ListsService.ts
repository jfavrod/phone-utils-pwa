import { 
    IListProps,
    IListsService,
    IListsServiceResponse,
} from './interfaces';

export default class ListsService implements IListsService {
    private url: string;

    public constructor(url: string) {
        this.url = url;

        this.add = this.add.bind(this);
        this.delete = this.delete.bind(this);
        this.getAll = this.getAll.bind(this);
        this.update = this.update.bind(this);
    }

    public add(list: IListProps): Promise<IListsServiceResponse> {
        return fetch(this.url, {
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
        return fetch(`${this.url}/${id}`, {
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
        return fetch(this.url)
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
        return fetch(this.url, {
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
