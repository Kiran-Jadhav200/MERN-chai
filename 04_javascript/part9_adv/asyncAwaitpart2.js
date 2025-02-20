function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Post data Fetched");
    }, 2000);
  });
}

function fetchCommentData() {
  return new Promise((resolve) => {
    setTimeout(() => {
        resolve("Comment data Fetched");
    }, 3000);
  });
}
async function getBlogData() {
  try {
    console.log("Fetching blog data");
    // const postData = await fetchData();
    // const coomentData = await fetchCommentData();

    const [postData, commentData] = await Promise.all([
      fetchData(),
      fetchCommentData(),
    ]);
    console.log(postData);
    console.log(commentData);
     console.log("Fetch Complete");
  } catch (error) {
    console.log("Error fetching blog data", error);
  }
}
getBlogData();
