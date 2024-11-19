//💥 slice() and splice() Method

let sedanCar = ["Virtus", "Slavia", "Verna", "Ciaz", "Altis", "Camry"];

let companyName = ["Volkswagen", "Skoda", "Hyundai", "Maruti", "Toyota", "BMW"];

//1️⃣ slice() method returns a new array containing a portion of the original array, based on the start and end index provided as arguments. But slice() extracts without modifying the original array.

console.log("Before Sliced:", sedanCar); // o/p: Before Sliced: [ 'Virtus', 'Slavia', 'Verna', 'Ciaz', 'Altis', 'Camry' ]

let someCars = sedanCar.slice(1, 4);

console.log("After Sliced:", someCars); // o/p: After Sliced: [ 'Slavia', 'Verna', 'Ciaz' ]

console.log("Original Array:", sedanCar); // o/p: Original Array: [ 'Virtus', 'Slavia', 'Verna', 'Ciaz', 'Altis', 'Camry' ]

console.log();

// 2️⃣ spliced() method is used to add, remove, or replace elements in an array. And returns an array containing the elements that were removed and modify the original array.

console.log("Before Spliced: ", companyName); // o/p: Before Spliced:  [ 'Volkswagen', 'Skoda', 'Hyundai', 'Maruti', 'Toyota', 'BMW' ]

let carCompany = companyName.splice(1, 4);

console.log("After spliced:", carCompany); // o/p: After spliced: [ 'Skoda', 'Hyundai', 'Maruti', 'Toyota' ]

console.log("Original Array: ", companyName); // o/p: Original Array:  [ 'Volkswagen', 'BMW' ]
