// //this fetch data
// function fetchData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject({ name: "chaicode", url: "https://chaicode.com" });
//     }, 3000);
//   });
// }

// async function getuserdata() {
//   try {
//     console.log("fetching user data...");
//     const userData = await fetchData();
//     console.log("User Data: ", userData);
//   } catch (error) {
//     console.log("user data fetch unsuccesful", error);
//   }
// }
// getuserdata();

function fetchPostData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Post Data Fetched");
    }, 2000);
  });
}

function fetchCommentData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("comment data fetched");
    }, 3000);
  });
}

async function getBlogData() {
  try {
    // const blogData = await fetchPostData();
    // const commentdata = await fetchCommentData();
    let [blogData, commentData] = await Promise.all([
      fetchPostData(),
      fetchCommentData(),
    ]);
    console.log(blogData);
    console.log(commentData);

    console.log("fetch complete");
  } catch (error) {
    console.log("Error fetching blog data");
  }
}

getBlogData();
