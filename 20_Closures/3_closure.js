function x() {
  let a = 10;
  function y() {
    console.log(a); // Here a is not holding the value in it, it is holding the ref. of variable a
  }
  a = 100;
  return y;
}

let z = x();

console.log(z);

z(); // o/p : 100
