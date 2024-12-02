const p = new Promise((res, rej) => {
  setTimeout(() => {
    res("Promise Resolved");
  }, 5000);
});

//💥 Handling promise before async await
function getData() {
  p.then((res) => console.log(res));
}

getData(); // o/p: Promise Resolved

console.log();

//💥 Now using async await to handle promise
async function handlePromise() {
  const val = await p;
  console.log("handlPromise1: ", val);
}

handlePromise(); // o/p: Promise Resolved

console.log();

//💥Another example for async await -- Here we'll get to know actually function waits to complete
async function handlePromise2() {
  console.log("Hello Dev");
  const val = await p;
  console.log("Val Data yet to come");
  console.log(val);
}

handlePromise2();
