//1️⃣ Basic Explicit return Arrow Function means we need to write return keyword
const sum = (num1, num2) => {
  return num1 + num2;
};

let total = sum(20, 20);

console.log(total); // o/p: 40

console.log();

//2️⃣ Implicit return Arrow Function we don't want return keyword and curly braces for one line statement
const addTwo = (num1, num2) => num1 + num2;

console.log(addTwo(30, 20)); // o/p: 50

console.log();

let obj = () => {
  return {
    name: "Harsh",
    car: "Slavia",
    age: 32,
  };
};

console.log(obj()); // o/p: { name: 'Harsh', car: 'Slavia', age: 32 }
