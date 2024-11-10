/*
💥 String Interpolation ⇒ String interpolation is a great programming language feature that allows injecting variables, function calls, and arithmetic expressions directly into a string.

1️⃣ Template Literals (ES6) ⇒ Template literals are the most modern and preferred method for string interpolation in JavaScript. They use backticks (“ ` “) and ${} syntax to embed expressions.
*/

let naam = "Harsh";

let age = 32;

let emailId = "harsh@gmail";

console.log(
  `My name is ${naam.toUpperCase()}, I am ${age} years old. My mailID is ${emailId}. `
);

// Output: My name is HARSH, I am 32 years old. My mailID is harsh@gmail.
