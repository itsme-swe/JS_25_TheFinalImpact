let cars = ["Slavia", "Virtus", "Verna", 1500, true];

console.log(Array.isArray(cars)); // returns true if it is an array otherwise returns false

console.log(Array.isArray("Skoda")); // return false bcoz skoda is string

console.log();

console.log(Array.from("Harsh")); // o/p: [ 'H', 'a', 'r', 's', 'h' ] from() method convert array to string

console.log();

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // o/p: [ 100, 200, 300 ] convert all elements into array.
