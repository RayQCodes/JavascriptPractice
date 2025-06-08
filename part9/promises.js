function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = false;
      if (success) {
        resolve("data fetched successfully");
      } else {
        reject("Error fetching data");
      }
    }, 3000);
  });
}

//consuming the promise
fetchData()
  .then((resolve) => {
    console.log(resolve);
  })
  .catch((reject) => {
    console.log(reject);
  });
