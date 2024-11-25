/*
The reduce() method returns a single value: the function's accumulated result.

The reduce() method does not execute the function for empty array elements.

The reduce() method does not change the original array.

*/

const num = [2, 4, 6, 8];

let myTotal = num.reduce((acc, curVal) => {
  console.log(`acc: ${acc} and curVal: ${curVal}`);
  return acc + curVal;
}, 0);

console.log(myTotal);

/*
acc: 0 and curVal: 2
acc: 2 and curVal: 4
acc: 6 and curVal: 6
acc: 12 and curVal: 8
20
*/
