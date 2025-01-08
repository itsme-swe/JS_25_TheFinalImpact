let regex = /^hello/m;

let str = "I am Harsh Mehra\nhello\nworld";

let matches = str.match(regex);

let test = regex.test(str);

console.log(matches);

console.log(test); // true
