/*

*/

const user = {
  name: "web3",
  email: "harsh@gmail.com",
};

const Teacher = {
  makeVideo: true,
};

const supportSystem = {
  isAvailable: false,
};

const TASupport = {
  makeAssignments: "Web3 Assignments",
  fullTime: true,
  __proto__: supportSystem, // here TASupport object is inheriting properties of supportSystem object. But this is the old practice in JavaScript
};

console.log((TASupport.isAvailable = true));

//🔸 The new method for prototypalInheritance is "Object.setPrototypeOf()"

Object.setPrototypeOf(Teacher, user); // Now Teacher can access user properties.

console.log((Teacher.name = "Kalam"));
