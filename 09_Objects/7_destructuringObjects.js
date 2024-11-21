let obj1 = {
  name: "Slavia",
  manufacturer: "Skoda",
  manfYear: 2024,
  color: ["Blue", "Black", "Red"],
};

const { color, name } = obj1; //🔸 So here we are holding properties inside { } from object1. Now we can directly access these properties instead of doing "obj1.color" or "obj1.name"

console.log(name); // o/p: Slavia

console.log(color); // o/p: [ 'Blue', 'Black', 'Red' ]

//🔸 Even we can name properties of object by our own while destructuring.

const { manfYear: year, manufacturer: companyName } = obj1;

console.log(companyName); // o/p: Skoda
