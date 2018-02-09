export class NumberGenerator {
    static getNumber(max) {
        return Math.ceil(Math.random()*max);
    }
}