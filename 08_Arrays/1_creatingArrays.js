/* 
💥 Two ways to create array in javascript 

1️⃣ By array literal

2️⃣ By using array constructor (using new keyword)

Defination ⇒ An array in JavaScript is a data structure used to store multiple values in a single variable. It can hold various data types and allows for dynamic resizing. Elements are accessed by their index, starting from 0.
*/

// 1️⃣ Using Literal

let arr = [10, 20, 30, 40];

let details = ["Harsh", 32, 70.5, true];

console.log(typeof details); // The data type of array in JS is Object

// 2️⃣ Using constructor

let products = new Array("jeans", "tshirts", "coats", "jackets");

console.log(products); // o/p: [ 'jeans', 'tshirts', 'coats', 'jackets' ]

console.log();

console.log(details); // o/p: [ 'Harsh', 32, 70.5, true ]
