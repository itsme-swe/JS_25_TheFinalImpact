//1️⃣ Iterating over an object
let myObj = {
  js: "JavaScript",
  cpp: "C++",
  rb: "Ruby",
  go: "GoLang",
};

for (let key in myObj) {
  console.log(key, ":-", myObj[key]); // Here key stands for keys and myObj[key] for values
}

/*

js :- JavaScript
cpp :- C++
rb :- Ruby
go :- GoLang

*/

console.log();

//2️⃣ Iterating over an array
let carCompany = ["Hyundai", "Skoda", "Tata", "Volvo", "BMW"];

for (let key in carCompany) {
  console.log(carCompany[key]);
}

/*
Hyundai
Skoda
Tata
Volvo
BMW
*/
