/*
🍁 What is block ? 
Ans. Block is combining multiple JS statement into a group. Multiple statement inside curly braces { } is a block.
Example:
{
  let a = 10;
  console.log(a);            
}

*/

{
  var a = 10;
  let b = 20;
  const c = 30;

  console.log("I am 'a' inside block: ", a);
  console.log("I am 'b' inside block: ", b);
  console.log("I am 'c' inside block: ", c);
}

console.log(a);
console.log(b); // We cannot access variable 'b' and 'c' outside the block.
console.log(c);

/*
In this above example 'a' will be allocated in the global execution context and assigned value as undefined. And, 'b' and 'c' will allocated inside block scope and assigned value as undefined.  
*/
