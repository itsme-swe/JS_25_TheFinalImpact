/*
🔺IFFI ⇒ Immediately Invoked Function Expressions (IIFE) are JavaScript functions that are executed immediately after they are defined. They are typically used to create a local scope for variables to prevent them from polluting the global scope.

IIFEs are commonly used to create private scope in JavaScript, allowing variables and functions to be encapsulated and inaccessible from outside the function.

*/

let counter = (() => {
  let count = 0;

  return {
    increment: () => count++,
    decrement: () => count--,
    getCount: () => count,
  };
})();

counter.increment();
counter.increment();
counter.increment();

console.log(counter.getCount()); // o/p: 3

console.log(counter.count); // undefined (cannot access private variable)
