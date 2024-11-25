let nums = [2, 4, 6, 8, 10];

let newNums = nums.map((val) => {
  return val * 2;
});

console.log(newNums); // o/p: [ 4, 8, 12, 16, 20 ]

console.log();

//🍁 Chaining in map method

let total = nums
  .map((val) => {
    return val + 10;
  })
  .map((val) => {
    return val * 2;
  })
  .filter((ele) => {
    return ele > 30;
  });

console.log(total); // o/p: [ 32, 36, 40 ]
