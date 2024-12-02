async function getData() {
  return "Namaste";
}

const dataPromise = getData();

dataPromise.then((data) => console.log(data)); // o/p: Namaste
