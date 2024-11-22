function a() {
  var b = 10;

  c();

  function c() {
    console.log(b);
  }
}

a();

/*

1️⃣ Lexical Environment ⇒ Lexical(Hierarchy or in-order) environment is the local memory along with the lexical environment of its parent.

🔸 So in the above example the lexical environment of function c() is function a() and the function a() lexical environment is global object and lexical environment of global object is pointing to null.

*/
