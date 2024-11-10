/*
🔸 Type Coercion ⇒ Type Coercion refers to the process of automatic or implicit conversion of values from one data type to another. This includes conversion from Number to String, String to Number, Boolean to Number, etc. when different types of operators are applied to the values.

In case the behavior of the implicit conversion is not sure, the constructors of a data type can be used to convert any value to that datatype, like the Number(), String() or Boolean() constructor.

1️⃣ Number to String Conversion - When any string or non-string value is added to a string, it always converts the non-string value to a string implicitly.

2️⃣ String to Number Conversion ⇒ When an operation like subtraction (-), multiplication (*), division (/), or modulus (%) is performed, all the values that are not numbers are converted into the number data type, as these operations can be performed between numbers only.

3️⃣ Boolean to Number ⇒ When a Boolean is added to a Number, the Boolean value is converted to a number as it is safer and easier to convert Boolean values to Number values. A Boolean value can be represented as 0 for ‘false’ or 1 for ‘true’.

*/

// Number to String Conversion
let a = 10 + "20";

let b = "30" + 10;

let c = true + "10";

console.log(`a: ${a}`); // 1020
console.log(`b: ${b}`); // 3010
console.log(`c: ${c}`); // true10

console.log();

// String to Number Conversion
let w = 10 - "5";
let x = 20 * "2";
let y = 8 / "4";

console.log(`w: ${w}`); // 5
console.log(`x: ${x}`); // 40
console.log(`y: ${y}`); // 2
