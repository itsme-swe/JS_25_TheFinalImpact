const p1 = new Promise((res, rej) => {
  setTimeout(() => rej("p1 success"), 3000);
});
const p2 = new Promise((res, rej) => {
  setTimeout(() => rej("p2 fail"), 1000);
});
const p3 = new Promise((res, rej) => {
  setTimeout(() => rej("p3 success"), 2000);
});

Promise.any([p1, p2, p3])
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

/*
Promise.any() will wait for the first setteled success promise. And, it will throw an "AggregateError" if all the promises setteled rejected.

o/p: p3 success
*/
