// Object creation using Singleton Method (Constructor)

let appUser = Object.create(null); // 🔸 This method of creating Object does not inherit from the prototype chain. This means the object has no default methods or properties like toString, valueOf, etc.

let appUser2 = new Object(); // 🔸 Object that inherits from Object.prototype. This means the object comes with default methods and properties, such as toString, hasOwnProperty, and others. Generally we use this method to create Object.

console.log(appUser); // 🔸 o/p: [Object: null prototype] {}

console.log(appUser2); // 🔸 o/p: {}

// 1️⃣ Now adding properties to the object.
appUser2.id = 101;
appUser2.name = "Harsh";
appUser2.email = "harsh@gmail.com";
appUser2.lastLogin = ["Monday", "Sunday"];

console.log(appUser2);

/*
{
  id: 101,
  name: 'Harsh',
  email: 'harsh@gmail.com',
  lastLogin: [ 'Monday', 'Sunday' ]
}

*/
