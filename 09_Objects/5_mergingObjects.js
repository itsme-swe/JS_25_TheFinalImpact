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

console.log(obj3);
