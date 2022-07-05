let age: number;
// inferencja jeżeli do age nie przypisujemy wartości to musimy przynajmniej zadeklarować typ zmiennej

age = 29;
const add = (v1: number, v2: number) => v1 + v2;

const sum = add(2, 2);
console.log(sum);
