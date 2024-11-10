let user1 = {
  id: 1,
  name: "Harsh",
  email: "harsh@gmail",
};

let user2 = user1;

console.log(user2); // Output: { id: 1, name: 'Harsh', email: 'harsh@gmail' }

console.log();

user2.email = "mukul@gmail"; // changing email of user2

console.log(user1); // Output: { id: 1, name: 'Harsh', email: 'mukul@gmail' } The original email of user1 is also modified when we cahnged the user2 email.

/*
💥  JavaScript mein jo primitive data types hote hain, wo stack memory mein store hote hain, aur jo non-primitive types hote hain (jaise objects aur arrays), wo heap memory mein store hote hain. Stack memory mein original value ka ek copy ban jaata hai, matlab agar aap copy ko change karte ho, to original value pe koi effect nahi hota. Par heap memory mein original value ka reference store hota hai, toh agar aap reference ko change karte ho, to original value bhi change ho jaati hai.

To make it even clearer, remember that primitive types are things like numbers, strings, booleans, etc., which hold the actual value. On the other hand, non-primitive types (like arrays, objects) store references, meaning they point to a location in memory where the actual value is stored.
*/
