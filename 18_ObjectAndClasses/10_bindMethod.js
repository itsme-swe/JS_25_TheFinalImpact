let nameObj = {
  name: "Tony",
};

let PrintName = {
  name: "steve",
  sayHi: function () {
    // Here "this" points to nameObj
    console.log(this.name);
  },
};

console.log(PrintName.sayHi());
