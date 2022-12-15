const posts = [
  {
    title: "Post 1",
    body: "This is post 1",
  },
  {
    title: "Post 2",
    body: "This is post 2",
  },
];

// Simulate getting posts data from a server, which takes 1 second(s)
function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.querySelector(".posts").innerHTML = output;
  }, 1000);
}

// Simulate creating a post and sending it to a server, which takes 2 second(s)
function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = false;

      if (!error) {
        resolve();
      } else {
        reject("Error: something went wrong");
      }
    }, 2000);
  });
}

createPost({ title: "Post 3", body: "This is post 3" })
    .then(getPosts)
    .catch(err => console.log(err));
