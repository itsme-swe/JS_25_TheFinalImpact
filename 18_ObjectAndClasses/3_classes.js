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

console.log();

//2️⃣ Here we are creating new Class

class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`username is ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username); // calling parent class constructor with the help of 'super' keyword
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`A new course was added by ${this.username}`);
  }
}

// 💥 Creating object t1 with the reference of Teacher Class
const t1 = new Teacher("Mamata", "mam@school.com", "pap123");

t1.logMe(); // o/p: username is Mamata

t1.addCourse(); // o/p: A new course was added by Mamata

console.log();

//💥 Creating object t2 of User Class ⇒ Here object with the help of parent class cannot use properties or methods of child class.

const t2 = new User("Sonal", "son@gmail.com", "son123");

console.log(t2); // o/p: User { username: 'Sonal' }
