let obj1 = {
  1: "a",
  2: "b",
  3: "c",
};

let obj2 = {
  4: "d",
  5: "e",
  6: "f",
};

let obj3 = { ...obj1, ...obj2 }; //🔸 merging objects using (...) spread operator

let obj4 = Object.assign({}, obj1, obj2); //🔸 Another method to merge objects ⇒ method it two parameters (Target{}, Source obj1 & obj2)

console.log(obj3); // o/p: { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

console.log();

console.log(obj4); // o/p: { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }
