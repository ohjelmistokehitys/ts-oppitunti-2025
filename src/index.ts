const numbers = [100, 2, -10, 500, 1500, 10, -4, 99];
const cat = {
    name: "Whiskers"
};

const max = Math.max(...numbers);
const min = Math.min(...numbers);

const a: number = Number("100")
const b: string = String(100)

console.log({ min, max, a, b });

console.log(typeof 99);
console.log(typeof "hello");
console.log(typeof false);
console.log(typeof numbers);
console.log(typeof cat);
console.log(typeof numbers === typeof cat);
