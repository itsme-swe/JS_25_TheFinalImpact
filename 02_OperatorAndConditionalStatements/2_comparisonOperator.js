/*
🔸 Comparison Operator
1️⃣ '==' Equal to only check values holding in the variable
2️⃣ '!=' Not Equal to
3️⃣ '===' Triple equal to check value and the data type of the value need to be the same.
4️⃣ '!==' Not equal to &  data type
5️⃣ '>' Greater than --- '>=' Greater than equal
6️⃣ '<' Smaller than --- '<=' Smaller than equal
*/

let a = 20;
let b = "20";

console.log(a === b); // false bcoz values are same but type are different a is number and b is string

console.log(a == b); // true bcoz values are same

console.log(a !== b); // true bcoz a is not equal to b on the basis of their type.
