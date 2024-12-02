const p1 = new Promise((res, rej) => {
  setTimeout(() => res("p1 success"), 3000);
});
const p2 = new Promise((res, rej) => {
  setTimeout(() => rej("p2 fail"), 1000);
});
const p3 = new Promise((res, rej) => {
  setTimeout(() => res("p1 success"), 2000);
});

Promise.race([p1, p2, p3])
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

// o/p: p2 fail ---- Promise.race() will setteled the first promise wether it is successfull or fail.
