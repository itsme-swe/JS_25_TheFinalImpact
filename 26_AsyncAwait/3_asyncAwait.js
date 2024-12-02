const p1 = new Promise(function (res, rej) {
  setTimeout(() => {
    res("Promise One");
  }, 5000);
});

const p2 = new Promise(function (res, rej) {
  setTimeout(() => {
    res("Promise Two");
  }, 10000);
});

async function handlePromise() {
  console.log("I am first handler");
  const val = await p1;
  console.log("Val data yet to print");
  console.log(val);

  const val2 = await p2;
  console.log("Val2 data yet to print");
  console.log(val2);
}

handlePromise();

/*

I am first handler
Val data yet to print
Promise One�
Val2 data yet to print
Promise Two


 */
