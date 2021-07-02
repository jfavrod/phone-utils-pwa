export interface ICookie {
    [index: string]: string;
}

export interface ICookieService {
    getCookie(key: string): string | undefined;
    setCookie(key: string, value: string): void;
}
