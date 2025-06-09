//creataing a promise function
function datafetch() {
  return new Promise((resolve, reject) => {
    let success = true;
    if (success) {
      resolve("Data succesfully fetched");
    } else {
      reject("Data reach unsuccessful");
    }
  });
}

//checking a promise:
datafetch()
  .then((resolve) => {
    console.log(resolve);
  })
  .catch((reject) => {
    console.log(reject);
  });
