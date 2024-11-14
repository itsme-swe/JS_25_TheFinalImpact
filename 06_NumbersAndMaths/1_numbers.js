// Explicit Conversion
const score = new Number(1000);

let newScore = 500;

console.log(typeof score); // Object

console.log(typeof newScore); // number

console.log(typeof score.toString()); // string ⇒ .toString() method is used to convert number to string

console.log(newScore.toFixed(2)); // 500.00 ⇒ toFixed() method is used to reduce the precision value. Value after decimal point

let newNumber = 2025.0506;

console.log(newNumber.toPrecision(5)); // 2025.1

let accountBalance = 450000;

console.log(accountBalance.toLocaleString("en-IN")); // 4,50,000
