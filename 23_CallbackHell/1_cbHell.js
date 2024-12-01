//💥 Example of callback hell ... callback hell is also known as "Pyramid of Doom"

const cart = ["shoes", "pants", "kurtas", "shirts"];

/*
1️⃣ Now first we need to create order so we'll be writing create order function and passing an proceedToPaymnent callback function. Now this the responsibilty of createOrder function to call proceedToPayment function.
*/
api.createOrder(cart, function () {
  api.proceedToPayment(function () {
    api.showOrderSummary();
  });
});
