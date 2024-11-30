/*

💥Here, we are creating class and defining some properties and methods into it. And, then we'll create the same user and it's properties and methods with the help of functional based programming.

*/

class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptPassword() {
    return `${this.password}abc`;
  }

  changeUserName() {
    return `${this.username.toUpperCase()}`;
  }
}

//1️⃣ Creating new user object from User class
const user1 = new User("Harsh", "harsh@gmail.com", "123");

console.log(user1.encryptPassword()); //  o/p: 123abc
console.log(user1.changeUserName()); // o/p: HARSH

console.log();

//2️⃣ Now we'll be creating same object using functional based programming... Yae tub ki agar humae class syntax nhi milta toh hum kaise object banate.. Aur yaha pae arrow functions work nhi karte hai.

function fnUser(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

fnUser.prototype.encryptPassword = function () {
  return `${this.password}abc`;
};

fnUser.prototype.changeUserName = () => {
  return `${this.username.toUpperCase()}`;
};

const fncBasedUser = new fnUser("Mukul", "mkl@gmail.com", "singh123");

console.log(fncBasedUser.encryptPassword());
