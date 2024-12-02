"use strict";

function x() {
  console.log(this);
}

x(); // o/p: undefined without any ref.

window.x(); // o/p: window global object with the ref. of Window object
