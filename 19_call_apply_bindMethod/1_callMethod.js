let name = {
  firstName: "Harsh",
  lastName: "Mehra",

  printFullName: function () {
    console.log(this.firstName + " " + this.lastName);
  },
};

let user2 = {
  firstName: "Sachin",
  lastName: "Gupta",
};

name.printFullName.call(user2);
