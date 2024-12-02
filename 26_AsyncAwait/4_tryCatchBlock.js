const API_URL = "https://api.github.com/users/itsme-swe";

// To handle errors always wrap async await inside try and catch block
async function handlePromise() {
  try {
    const data = await fetch(API_URL);
    const result = await data.json();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

handlePromise();
