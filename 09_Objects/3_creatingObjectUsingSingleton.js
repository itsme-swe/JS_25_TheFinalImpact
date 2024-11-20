// Object creation using Singleton Method (Constructor)

let appUser = Object.create(null); // 🔸 This method of creating Object does not inherit from the prototype chain. This means the object has no default methods or properties like toString, valueOf, etc.

let appUser2 = new Object(); // 🔸 Object that inherits from Object.prototype. This means the object comes with default methods and properties, such as toString, hasOwnProperty, and others. Generally we use this method to create Object.

console.log(appUser); // 🔸 o/p: [Object: null prototype] {}

console.log(appUser2); // 🔸 o/p: {}
