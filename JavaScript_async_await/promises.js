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

// createPost({ title: "Post 3", body: "This is post 3" })
//     .then(getPosts)
//     .catch(err => console.log(err));

// Async / Await - the function must be labeled as async in order to use await (wait for an asynchronous process to complete)
async function init() {
  await createPost({ title: "Post 3", body: "This is post 3" });
  getPosts();
}
init();

// Async / Await with fetch
async function fetchUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  const data = await res.json();
  console.log(data);
}
fetchUsers();

// Promises
const promise1 = Promise.resolve("Hello World");
const promise2 = 10;
const promise3 = new Promise((resolve, reject) =>
  setTimeout(resolve, 2000, "Goodbye")
);

// this promise fetches date from a fake API, then converts it to JSON to eliminate unwanted metadata that would otherwise show in the results of Promise.all.then
const promise4 = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json()
);

// Promise.all takes in an array and then returns the results only after all of them have been resolved. In this case it takes 2seconds because that's how long the longest Promise takes to resolve.
Promise.all([promise1, promise2, promise3, promise4]).then((values) =>
  console.log(values)
);
