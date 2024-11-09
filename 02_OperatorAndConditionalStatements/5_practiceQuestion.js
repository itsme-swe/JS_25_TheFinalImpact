/*
💥 Get user to input a number using prompt("Enter the number: "). Check if the number is a multiple of 5 or not.

*/

let num = Number(prompt("Enter the number: "));

if (num % 5 === 0) {
  console.log(`${num} is multiple of 5.`);
} else {
  console.log(`${num} is not multiple of 5.`);
}
