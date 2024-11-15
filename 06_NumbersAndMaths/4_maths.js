// To get the random values we use Math.random() method and it always return values b/w 0 and 1.
console.log(Math.random());

// To avoid the values in decimal and 0 we usually first we multipy 10  with Math.random() method and then add 1 into it.

console.log(Math.floor(Math.random() * 10 + 1)); // Now in this case we'll get values b/w 1 to 10
