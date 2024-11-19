let marvelHeros = ["Ironman", "Hulk", "Wanda", "CaptainAmerica"];

let dcHeros = ["Batman", "Superman", "Wonderwoman", "Superman"];

let heros = marvelHeros.concat(dcHeros); // It merge the two arrays

console.log(heros);

console.log();

//🔸 Another method to merge two arrays is using spread(...) operator

let allHeros = [...marvelHeros, ...dcHeros];

console.log(allHeros);

console.log();

//🔸 To flaten the nested array we use flat() method.
let nums = [1, 2, 3, [4, 5, 6], 7, [8, 9, 10]];

let flattenArray = nums.flat();

console.log(flattenArray);
/*
[
  1, 2, 3, 4,  5,
  6, 7, 8, 9, 10
]
*/
