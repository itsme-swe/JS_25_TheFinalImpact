//💥 'for of loop' is not designed to iterate over an object.

//1️⃣ Iterating over an array
let carCompany = ["Hyundai", "Skoda", "Tata", "Volvo", "BMW"];

for (const ele of carCompany) {
  console.log(ele);
}

console.log();

//2️⃣ Iterating over String
const msg = "Welcome to Club";

for (let ele of msg) {
  console.log(ele);
}

console.log();

//3️⃣ Iterating over Maps

const mp = new Map();

// Setting elements in map in key : pair
mp.set("IN", "India");
mp.set("US", "United States");
mp.set("PAK", "Pakistan");
mp.set("EU", "Europe");
mp.set("BZ", "Brazil");

for (let [key, value] of mp) {
  console.log(key, ":-", value);
}

/*

IN :- India
US :- United States
PAK :- Pakistan
EU :- Europe
BZ :- Brazil

*/
