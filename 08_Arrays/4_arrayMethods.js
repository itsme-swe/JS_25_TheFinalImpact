let details = ["Harsh", 32, 70.5, true];

let rollNo = [20, 30, 40, 50];

console.log(details.includes(32)); // returns ture value if element is present inside an array otherwise false.

console.log(details.indexOf(true)); // return the indexValue of an element

console.log(details.indexOf(50)); // if element is not present returns -1.

let newArr = rollNo.join(); // method is used to combine all elements of an array into a single string.

console.log(newArr); // o/p:20,30,40,50
