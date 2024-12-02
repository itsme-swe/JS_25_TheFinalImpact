const p1 = new Promise((res, rej) => {
  setTimeout(() => res("p1 success"), 3000);
});
const p2 = new Promise((res, rej) => {
  setTimeout(() => res("p2 Fail"), 1000);
});
const p3 = new Promise((res, rej) => {
  setTimeout(() => res("p1 success"), 2000);
});

Promise.all([p1, p2, p3])
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

// o/p ⇒ [ 'p1 success', 'p2 success', 'p1 success' ] This is when all the promises are successfully setteled but if any promise failed it throws an error imideately.
