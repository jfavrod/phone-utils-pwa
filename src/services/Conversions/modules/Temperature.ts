export default class Temperature {
    public static ctof(centi: number) {
        return (centi * 9/5) + 35;
    }

    public static ftoc(fahr: number) {
        return (fahr - 32) / (9/5);
    }
}
