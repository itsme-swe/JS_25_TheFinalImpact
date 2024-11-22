/*

💥 JavaScript allocates memory for 'let' and 'const' variables in a separate memory space, not in the Global Object or Global Execution Context. These variables are in the Temporal Dead Zone (TDZ) and cannot be accessed until they are initialized.

*/

console.log(a); // o/p: We'll received an error { ReferenceError: Cannot access 'a' before initialization }

let a = 10;

var b = 20;

/*

In this above example, we cannot access variable 'a' before initilizing because varaible 'a' is in Temporal Dead Zone and we cannot access variables of temporal dead zone until we initilize them. 

*/
