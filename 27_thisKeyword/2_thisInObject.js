const obj = {
  a: 10,
  x: function () {
    console.log(this);
  },
};

obj.x(); // o/p: Here the value of 'this' keyword is the object --- { a: 10, x: [Function: x] }
