let regex1 = /hello/;

console.log(regex1.test("Hello")); // false bcoz not using i flag modifier

let regex2 = /hello/i;

console.log(regex2.test("Hello")); // true bcoz using i flag modifier

console.log();
