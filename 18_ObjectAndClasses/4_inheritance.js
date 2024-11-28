class Parent {
  sayHello() {
    console.log("I am parent");
  }
}

class Child extends Parent {
  sayHello() {
    console.log("I am Child");
  }
}

let obj = new Child();

obj.sayHello(); // o/p: I am child --- If child and parent class have same method, child method wil be used and it is known as Method Overriding
