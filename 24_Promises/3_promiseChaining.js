const cart = ["Kurta", "Shoes", "Dhoti", "Pajamas"];

//1️⃣ Consuming Promise
createOrder(cart)
  .then(function (orderId) {
    console.log(orderId);
    return orderId;
  })
  .then((orderId) => {
    return proceedToPyament(orderId);
  })
  .then((paymentInfo) => {
    console.log(paymentInfo);
  })
  .catch((err) => {
    console.log(err.message);
  });

//2️⃣ Creating promise
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

function proceedToPyament(orderId) {
  return new Promise((res, rej) => {
    res("payment Successfull");
  });
}
function validateCart(cart) {
  return true;
}
