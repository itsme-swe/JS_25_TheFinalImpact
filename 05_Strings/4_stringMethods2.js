let prgm = "Data Structures";

let lang = "GoLang";

let msg = "He,llo,World";

console.log(lang.includes("an")); // Will return true if value is present in string.

console.log(prgm.includes("code")); // And, return false if value is not present

//💥 Imp. methods of String
console.log(lang.substring(2, 6)); // Will extract characters from specified start indexValue and endIndexValue and substring() method does not support negative indices.

console.log(lang.substring(-2, 2)); // Output: Go (negative index treated as 0)

console.log(prgm.slice(0, 5)); // Will extract characters from specified start indexValue and endIndexValue but this slice() method supports negative indices.

console.log(lang.slice(-6, -4)); // Now the output will be Go. It is calculating from right to left now in reverse order.

console.log(msg.split(",")); // Will split the string into array based on specified seprator. [ 'He', 'llo', 'World' ]
