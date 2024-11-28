/*
1️⃣ Class is a template for creating objects. Those objects will have some state(variables) and behaviour(functions) inside it.

Syntax: 
        class className {

            constructor() {...}
            methods() {....}

        };

*/

//💥Creating Class
class ToyotaCar {
  constructor(brand, mileage) {
    console.log("New Object Created");
    this.brand = brand;
    this.mileage = mileage;
  }

  start() {
    console.log("Start");
  }

  stop() {
    console.log("Stop");
  }
}

//💥Now creating object from class template
let camry = new ToyotaCar("Fortuner", 22);

console.log(camry); // o/p: ToyotaCar { brand: 'Fortuner', mileage: 22 }
