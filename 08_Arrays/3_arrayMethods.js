let arr = ["harsh", "mukul", "juhu", "vasu", "poppy"];

console.log(arr.length); // o/p: returns the length of the given array. '5'

arr.push("Anurag"); // used to add values in array from last

arr.push("Mega");

arr.pop(); // used to remove the last value present in array

console.log(arr); // [ 'harsh', 'mukul', 'juhu', 'vasu', 'poppy', 'Anurag' ]

console.log();

arr.unshift(32); // used to add value from starting point in array

arr.shift(); // used to remove value from starting point

console.log(arr);
