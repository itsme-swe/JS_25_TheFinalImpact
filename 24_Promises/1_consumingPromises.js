const cart = ["shoes", "pants", "kurtas", "shirts"];

//1️⃣ Writing code before promises using callback's but we face issues in callbacks to handle async operations and that is "inversion of control"

// Here we are passing callback function
createOrder(cart, function () {
  proceedToPayment(orderId);
});

//2️⃣ Now the same opearation we'll be doing using Promises

const promise = createOrder(cart);

// And,here we are attaching callback function and this is also known as consuming promise
promise.then(function () {
  proceedToPayment(orderId);
});
