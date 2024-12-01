// Here we are doubling the values
let nums = [2, 4, 6, 8, 10];

function double(x) {
  return x * 2;
}

let output = nums.map(double);

console.log(output); // o/p: [ 4, 8, 12, 16, 20 ]

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

console.log();

/***************************/
