console.log(a); // o/p: undefined

var a = 10;

console.log(a); // o/p: 10

/*

1️⃣ 'var' allows access to the variable before initialization but outputs undefined because of hoisting.

2️⃣ 'let' doesn't allow access before the declaration due to the temporal dead zone, resulting in a ReferenceError. This enforces cleaner and safer coding practices.

*/
