/*

To make our propety private in class we just place # infront of variable.

*/

class CreateUser {
  #age;
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.#age = age;
  }

  #hi = "HelloWorld";

  getBirthYear() {
    return new Date().getFullYear() - this.#age;
  }
}

const user1 = new CreateUser("Harsh", "Mehra", 32);

console.log(user1.age);
