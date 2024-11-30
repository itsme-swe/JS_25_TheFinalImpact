function setUsername(username) {
  this.username = username;
}

function createUser(username, email, password) {
  setUsername.call(this, username);

  this.email = email;
  this.password = password;
}

const newUser = new createUser("Harsh", "harsh@gmail.com", "abc123");

console.log(newUser); // o/p: createUser { email: 'harsh@gmail.com', password: 'abc123' }
