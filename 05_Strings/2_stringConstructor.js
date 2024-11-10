/*
💥 Creating string using constructor

*/

let gameName = new String("Battle Field");

console.log(gameName); // Output: [String: 'Battle Field']
console.log(typeof gameName); // Output: Object

console.log();

/*
🔸 Some most commonly used methods of String 
1️⃣ length

2️⃣ slice(startIndex, endIndex) : extracts a part of the string based on the given stating-index and ending-index and returns a new string. And slice() allows negative indices to count from the end.

3️⃣ substring(startIndex, endIndex) : extracts a part of the string based on the given stating-index and ending-index and negative values treated as 0.

4️⃣ toLowerCase()
5️⃣ toUpperCase()

6️⃣ indexOf(substring) : Returns the index value of the first occurrence of a substring. Returns -1 if not found.

7️⃣ charAt(indexValue) : Returns the character present at index value

8️⃣ concat() : Joins two or more strings 

9️⃣ trim() : Used to remove white spaces from both the side of strings

🔟 includes(substring) : Returns true if the string contains the specified substring

 */

let a = 10;
let b = 20;

console.log(gameName.length); // Output: 12

let slicedPart = gameName.slice(2, 6);
console.log(slicedPart); // ttle
