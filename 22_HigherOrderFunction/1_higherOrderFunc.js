function x() {
  console.log("CB function");
}

function y(x) {
  x();
}

/*
💥 In above example function y() is higher order function bcoz it is taking function x() as an argument. And, function x() is an callback function 
*/
