//this fetch data
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: "chaicode", url: "https://chaicode.com" });
    }, 3000);
  });
}

async function getuserdata() {
  try {
    console.log("fetching user data...");
    const userData = await fetchData();
    console.log("User Data: ", userData);
  } catch (error) {
    console.log("user data fetch unsuccesful", error);
  }
}
getuserdata();
