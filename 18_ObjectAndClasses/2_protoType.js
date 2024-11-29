/*
1️⃣ Creating our own prototype : JavaScript is a powerful technique for adding reusable properties and methods to objects.

2️⃣ If object and prototype have same methods, object method will be used. Yani ki khud ka method phele call hoga na ki joh humnae dusre method ka function add kiya hai hai "__proto__" ki help sae.
*/

// obj1
const employee = {
  calTax() {
    console.log("Tax rate is 10%");
  },
};

// obj2
const emply1 = {
  salary: 5000,
  calTax() {
    console.log("Tax rate is 20%");
  },
};

emply1.__proto__ = employee; // Here we added resuable function to another object with the help of " __proto__ ".

emply1.calTax(); // o/p: Tax rate is 20%

console.log();

//2️⃣ Adding any method to the top level hierarchy "Object"

const heroPower = {
  name: "Hulk",
  color: "green",
  power: "smash",
};

const heros = ["Hulk", "IronMan", "SpiderMan"];

//🔸 By using 'Object.prototype' we can add any method to the top level. Now this function 'canFly' can be used by any datTypes.
Object.prototype.canFly = (heros) => {
  console.log(`${heros} can fly`);
};

heroPower.canFly("SuperMan"); // Here, object heroPower is using canFly() function

heros.canFly("WonderWoman"); // Here, heros[] array using canFly() Function
