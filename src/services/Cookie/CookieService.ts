import { ICookie, ICookieService } from "./interfaces";

export default class CookieService implements ICookieService {
    public constructor() {
        this.getCookie = this.getCookie.bind(this);
    }

    public getCookie(key: string): string | undefined {
        const cookies = this.getCookies();
        const keys = cookies.map((cook) => Object.keys(cook)[0]);
        let cookie: ICookie;

        if (keys.includes(key)) {
            for (cookie of cookies) {
                if (key in cookie) {
                    return cookie[key];
                }
            }
        }
    }

    public setCookie(key: string, value: string) {
        if (document.cookie.length) {
            if (document.cookie.includes(key)) {

            }
        }
        else {
            document.cookie = `${key}=${value};`;
        }

        document.cookie = document.cookie.replace(/;$/, '');
    }

    private getCookies(): ICookie[] | [] {
        if (document.cookie.length === 0) {
            return [];
        }

        let obj: { [idx: string]: string} = {};

        return document.cookie.split(';').map((cookie) => {
            obj = {};
            obj[cookie.split('=')[0].trim()] = cookie.split('=')[1];
            return obj;
        }) as ICookie[];
    }
}