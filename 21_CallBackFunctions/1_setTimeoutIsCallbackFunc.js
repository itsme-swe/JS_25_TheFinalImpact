//1️⃣ setTimeout is also an callback function
setTimeout(function () {
  console.log("Timer");
}, 3000);

function x(y) {
  console.log("I am func x");
  y();
}

x(function y() {
  console.log("I am function y");
});
