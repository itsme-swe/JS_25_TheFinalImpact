function x() {
  for (var i = 1; i <= 5; i++) {
    function closure(i) {
      setTimeout(() => {
        console.log(i);
      }, i * 1000);
    }
    closure(i);
  }
  console.log("Namaste Learners");
}

x();

/*

Namaste Learners
1
2
3
4
5

*/
