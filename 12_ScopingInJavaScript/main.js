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
    Lexical Environment ka matlab hai ek function ka local memory aur uske parent ka reference. Jab koi function create hota hai, uska ek scope chain banta hai jo uske parent ke context se connected hota hai.

🔸 So in the above example the lexical environment of function c() is function a() and the function a() lexical environment is global object and lexical environment of global object is pointing to null.

2️⃣ Scope Chain ⇒ Scope chain is the chain of all lexical environments connected through their parent references.

*/
