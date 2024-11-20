// We can freeze our objects in JS. If we freeze our object nobody can change our object properties.

let newUser = {
  name: "Goku",
  email: "goku@gmail",
  age: 26,
  color: "yellow",
};

Object.freeze(newUser); // Locking or freezing our object

newUser.name = "Moku";

console.log(newUser);

// o/p: { name: 'Goku', email: 'goku@gmail', age: 26, color: 'yellow' }
