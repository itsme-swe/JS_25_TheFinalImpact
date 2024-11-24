let myObj = {
  js: "JavaScript",
  cpp: "C++",
  rb: "Ruby",
  go: "GoLang",
};

for (let key in myObj) {
  console.log(`${key} is for ${myObj[key]}`);
}

/*

js is for JavaScript
cpp is for C++
rb is for Ruby
go is for GoLang

*/
