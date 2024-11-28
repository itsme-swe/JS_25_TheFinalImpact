/*

🔸Factory Function ⇒ A factory function in JavaScript is a function that creates and returns a new object. Unlike a constructor function, it does not use the "new" keyword. Factory functions offer a flexible way to generate objects, often with encapsulated private variables or specialized logic.

*/

function createUser(firstName, lastName, age) {
  const user = {
    firstName,
    lastName,
    age,
  };

  return user;
}

const user1 = createUser("Harsh", "Mehra", 32);

console.log(user1); // o/p: { firstName: 'Harsh', lastName: 'Mehra', age: 32 }

const user2 = createUser("Juhu", "Chellani", 30);

console.log(user2); // o/p: { firstName: 'Juhu', lastName: 'Chellani', age: 30 }
