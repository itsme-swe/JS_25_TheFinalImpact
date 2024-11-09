/*
💥 Logical Operators ⇒ Logical Operator return boolean value.

1️⃣ Logical AND '&&' ⇒ Return true when both the conditions are true. 

2️⃣ Logical OR  '||' ⇒ Return true when any one conditions get true.

3️⃣ Logical NOT '!' ⇒ Will convert true expression to false and false expression to true.
*/

let a = 10;
let b = 5;

let cond1 = a > b;
let cond2 = a === 10;
let cond3 = a === b;

console.log(cond1 && cond2); // Will return true bcoz both the conditions are true.

console.log(cond1 && cond3); // Will return false bcoz both the conditions are not true.

console.log(cond2 || cond3); // Will return true bcoz condition2 is true and condition3 is false

console.log(!cond1); // Will return false bcoz NOT operator convert true expression to false.
