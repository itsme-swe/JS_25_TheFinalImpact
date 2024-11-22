let user = {
  name: "Harsh",
  car: "Slavia",

  // Here this is refering to the current context
  welcomeMsg: function () {
    console.log(`${this.name}, welcome to the club`);
  },
};

user.name = "Mukul";

user.welcomeMsg(); // o/p: Mukul, welcome to the club
