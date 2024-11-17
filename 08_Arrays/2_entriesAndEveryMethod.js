/*
1️⃣ entries() method : The entries() method in JavaScript is used to create an iterator that contains the key-value pairs (index-value for arrays).
    It returns the newly created array iterator object. The iterator object represents each element of the array with keys assigned to them.

2️⃣ every() method : The every() method in JavaScript is used to test whether all elements in an array pass a certain condition specified in a callback function. If all elements satisfy the condition, it returns true; otherwise, it returns false.

*/

//1️⃣ entries() method
let arr = ["Harsh", "Mukul", "Sahu", "Anurag"];

let itr = arr.entries();

for (let ele of itr) {
  console.log(ele);
}

/*
🔸 Output: 
[ 0, 'Harsh' ]
[ 1, 'Mukul' ]
[ 2, 'Sahu' ]
[ 3, 'Anurag' ]

*/

console.log();

// 2️⃣ every() method

let numbers = [10, 20, 30, 40];

let checkAllNum = numbers.every((nums) => nums > 10);

console.log(checkAllNum); // Output: false
