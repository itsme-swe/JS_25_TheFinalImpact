/*
1️⃣ JavaScript object is an entity having state and behaviour(properties and methods).

2️⃣ JavaScript object have a special property called prototype. JavaScript is having prototipal behaviour.
*/

const student = {
  name: "Harsh",
  marks: 95.4,
  printMarks: () => console.log("marks = ", this.marks),
};

console.log(student);
