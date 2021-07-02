export interface IIAMService<T> {
    authenticate(username: string, password: string): Promise<T | null>;
}
