/*
💥 Optional Chaining ⇒ Optional chaining (?.) is a super handy feature in JavaScript for safely accessing deeply nested object properties without having to manually check if each level exists. If any part of the chain is undefined or null, it will immediately return undefined instead of throwing an error.

*/

let user = {
  id: "101dob05",

  fullName: {
    firstName: "Harsh",
    lastName: "Mehra",
  },

  loginDays: {
    days: ["monday", "wednesday"],
  },

  isAdult: true,
};

console.log(user?.fullName?.firstName); // o/p: Harsh

console.log(user?.loginDays?.month); // o/p: undefined
