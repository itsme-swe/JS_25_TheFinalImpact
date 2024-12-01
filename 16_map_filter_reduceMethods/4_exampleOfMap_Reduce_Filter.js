const users = [
  { firstName: "Harsh", lastName: "Mehra", age: 32 },
  { firstName: "Mukul", lastName: "Singh", age: 32 },
  { firstName: "Harsh", lastName: "Kasliwal", age: 28 },
  { firstName: "Vandana", lastName: "Bhakuni", age: 25 },
];

//1️⃣ Only printing firstName and age
const filOutput = users.map((user) => {
  return user.firstName + " " + user.age;
});

console.log(filOutput); // o/p: [ 'Harsh 32', 'Mukul 32', 'Harsh 28', 'Vandana 25' ]

console.log();

//2️⃣ Here we need to print the count of each age.
const countAge = users.reduce(function (acc, curr) {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age]; // agr phele obj mae age already present hai toh uska count bada do
  } else {
    acc[curr.age] = 1; // agar age ka count 0 hai toh usko 1 kardo
  }
  return acc;
}, {}); // Initial value is empty object

console.log(countAge); // o/p: { '25': 1, '28': 1, '32': 2 }

console.log();

//3️⃣ Now finding the first name who's age is smaller than 30
const output = users.filter((user) => user.age < 30).map((x) => x.firstName);

console.log(output); // o/p: [ 'Harsh', 'Vandana' ]
