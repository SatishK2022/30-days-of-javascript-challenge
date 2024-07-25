export const PI = 3.14;
export const MAX_VAL = 100;
export const MIN_VAL = 0;

export function add(a, b) {
    return a + b;
}

export const object = {
    name: "Satish Kumar",
    age: "20",
    getSummary: function () {
        return `My name is ${this.name} and I am ${this.age} years old.`
    }
}

export function add3(a, b, c) {
    return a + b + c;
}

export function multiply(a, b) {
    return a * b;
}

export function divide(a, b) {
    return a / b;
}

export default function remainder(a, b) {
    return a % b;
}