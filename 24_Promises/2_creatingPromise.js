// Creating Promise

const cart = ["Kurta", "Shoes", "Dhoti", "Pajamas"];

//1️⃣ Consuming Promise
const promise = createOrder(cart);

promise.then(function (orderId) {
  console.log(orderId);
});

console.log();

/****************/

/*2️⃣ Creating Promise

Syntax ⇒ const newPromise = new Promise(function (resolve, reject) {});

*/

function createOrder() {
  const newPromise = new Promise((res, rej) => {
    if (!validateCart(cart)) {
      const err = new Error("Cart is not Valid");
      rej(err);
    }

    // logic for create order
    const orderId = "1234";
    if (orderId) {
      setTimeout(() => {
        res(orderId);
      }, 5000);
    }
  });
  return newPromise;
}

function validateCart(cart) {
  return true;
}
