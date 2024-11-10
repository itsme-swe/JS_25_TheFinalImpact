let user1 = "Harsh";

console.log("user1: ", user1);

let user2 = user1; // Here assigning copy of user1 in user2 variable.

console.log("user2: ", user2);

console.log();

user2 = "Mukul";

console.log("user2 value changed: ", user2); // Output: user2 value changed:  Mukul

console.log("original value of user1: ", user1); // Output: original value of user1:  Harsh
