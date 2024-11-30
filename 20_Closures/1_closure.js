/*
🍁 Closuer ⇒ A function along with its lexical scope is known as Closuer.
*/

function x() {
  var a = 7;
  function y() {
    console.log(a);
  }
  y();
}
x(); // o/p: 7
