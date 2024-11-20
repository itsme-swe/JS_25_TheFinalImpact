let tinderUser = {
  id: "ob101",
  name: "Harsh",
  userType: "free",
  accountActive: true,
};

console.log(Object.keys(tinderUser)); //🔸 o/p: [ 'id', 'name', 'userType', 'accountActive' ] ⇒ Object.keys() method return all the keys of an object and its type is an array.

console.log(Object.values(tinderUser)); //🔸 o/p: [ 'ob101', 'Harsh', 'free', true ]

console.log(Object.entries(tinderUser));

/*
🔸 Output: 

[
  [ 'id', 'ob101' ],
  [ 'name', 'Harsh' ],
  [ 'userType', 'free' ],
  [ 'accountActive', true ]
]

*/
