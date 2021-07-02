import { IIAMService } from "./interfaces";

export interface IToken {
    createdAt: number;
    expiresAt: number;
    id: string;
    tokenString: string;
    user: string;
}

export default class StarkHamlet implements IIAMService<IToken> {
    public readonly className = 'StarkHamlet';
    private url: string;

    public constructor(url: string) {
        this.url = url;

        this.authenticate = this.authenticate.bind(this);
    }

    public async authenticate(username: string, password: string): Promise<IToken | null> {
        return new Promise((resolve) => {
            fetch(this.url, {
                body: JSON.stringify({ username, password }),
                headers: {
                    'content-type': 'application/json'
                },
                method: 'POST',
            })
            .then((res) => {
                if (res.ok) {
                    res.json().then((json) => resolve(json as IToken));
                }
                resolve(null);
            })
            .catch((err: Error) => {
                // Hide password.
                console.log(`[warn] [${new Date().toISOString()}] ${this.className}.authenticate(${username}, ${password.split('').map(c => '*').join('')}): ${err.message}`);
                resolve(null)
            });
        });
    }
}