let regex = /cat/gi;

let str = "cat, Caterpiler, catch, catch a Cat";

let matches = str.match(regex);

let test = regex.test(str);

console.log(matches); // o/p: [ 'cat', 'cat', 'cat', 'cat', 'cat' ]

console.log(test);  // true

