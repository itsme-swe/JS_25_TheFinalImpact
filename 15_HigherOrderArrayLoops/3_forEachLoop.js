//1️⃣ Iterating over an array using forEach loop and forEach loop takes an callback function as argument.

let lang = ["js", "go", "rust", "c++", "java"];

lang.forEach(function (ele) {
  console.log(ele);
});

console.log();

// Using arrow function
lang.forEach((val) => console.log("Arrow Function: ", val));

console.log();

//2️⃣ Passing function as parameter inside callback function

function printMe(lang) {
  console.log(lang);
}

lang.forEach(printMe);

console.log();

//3️⃣ forEach loop is not only used to print values inside array, it can take 3 parameters inside it, (val, indexVal, whole Array).

lang.forEach((val, indexVal, arr) => {
  console.log(val, indexVal, arr);
});

/*

  js 0 [ 'js', 'go', 'rust', 'c++', 'java' ]
  go 1 [ 'js', 'go', 'rust', 'c++', 'java' ]
  rust 2 [ 'js', 'go', 'rust', 'c++', 'java' ]
  c++ 3 [ 'js', 'go', 'rust', 'c++', 'java' ]
  java 4 [ 'js', 'go', 'rust', 'c++', 'java' ]
  
*/
