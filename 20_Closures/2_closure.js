function x() {
  let a = 10;
  function y() {
    console.log(a);
  }
  return y;
}

let z = x(); // Here when we are invoking function x(), it is means z is holding reference of function y(), along with the lexical environment of x() at the time it was called.

console.log(z); // o/p: [Function: y]

z(); // o/p: 10

/*
When we invoke z() (which is essentially calling y()), it prints the value of a as 10. This happens because y() has access to its lexical scope, which includes the variable a from its parent function x().
*/
