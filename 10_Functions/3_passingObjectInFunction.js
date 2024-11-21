let car = {
  carName: "Slavia",
  carCompany: "Skoda",
};

function printCarDetails(carObj) {
  return `The car name is ${carObj.carName} and the manufacturer of ${carObj.carName} is ${carObj.carCompany}. `;
}

let sedanCar = printCarDetails(car); //🔸 Passing object as argument while calling function.

console.log(sedanCar); // o/p: The car name is Slavia and the manufacturer of Slavia is Skoda.
