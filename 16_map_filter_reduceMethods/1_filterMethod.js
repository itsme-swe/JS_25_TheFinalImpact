// filter methods returns a new array

let nums = [20, 40, 50, 60, 90];

let filterNums = nums.filter((val) => {
  return val > 30;
});

console.log(filterNums); // o/p: [ 40, 50, 60, 90 ]
