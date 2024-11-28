/*
💥 super Keyword ⇒ It is used to call the constructor of its parent class to access the parents properties and methods.

*/

class Person {
  constructor() {
    this.species = "Homo sapiens";
  }

  eat() {
    console.log("Eat");
  }
}

class Child extends Person {
  constructor(branch) {
    super();
    this.branch = branch;
  }

  work() {
    console.log("Solve problem and build something");
  }
}

let newObj = new Child("CS eng");
