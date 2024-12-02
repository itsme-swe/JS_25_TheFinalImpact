const p1 = new Promise((res, rej) => {
  setTimeout(() => res("p1 success"), 3000);
});
const p2 = new Promise((res, rej) => {
  setTimeout(() => rej("p2 fail"), 1000);
});
const p3 = new Promise((res, rej) => {
  setTimeout(() => res("p1 success"), 2000);
});

Promise.allSettled([p1, p2, p3])
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

/*
  💥If all promises are successfully setteled: 

  [
  { status: 'fulfilled', value: 'p1 success' },
  { status: 'fulfilled', value: 'p2 success' },
  { status: 'fulfilled', value: 'p1 success' } 
] 
  */

/*
💥 If any promise got failed:

[
  { status: 'fulfilled', value: 'p1 success' },
  { status: 'rejected', reason: 'p2 fail' },
  { status: 'fulfilled', value: 'p1 success' }
]
  
*/
