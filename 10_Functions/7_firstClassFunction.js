//1️⃣ Function Statement ⇒
a();
function a() {
  console.log("Function Statement");
}

console.log();

//2️⃣ Function Expression ⇒
let sum = function () {
  console.log("Function Expression");
};

sum();

/*
💥 The major difference b/w function statement and function expression is hoisting we can call function statement before they are initialized and we cannot same with the funbction expression.
*/

console.log();

//3️⃣ Anonymous Function ⇒ A function without the name is anonymous function. A anonymous function is used as value which can be assigned to the variable.
let addTwoNum = function (num1, num2) {
  console.log(num1 + "" + num2);
};

console.log();

//3️⃣ Named Function expression ⇒  Function statement used as value to be assigned to some variable.
let b = function xyz() {
  console.log("B called");
};

console.log();

//4️⃣ First Class Functions ⇒ Ability of passing function as value to other functions or returning functions from other functions.
