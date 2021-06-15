export default class ListsService {
    public getAll() {
        const data = fetch('http://localhost:5000/lists')
            .then((res) => res.json());

        return data;
    }
}
