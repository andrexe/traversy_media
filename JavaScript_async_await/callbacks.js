const posts = [
    {
        title: 'Post 1',
        body: 'This is post 1'
    },
    {
        title: 'Post 2',
        body: 'This is post 2'
    }
];

// Simulate getting posts data from a server, which takes 1 second(s)
function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.querySelector('.posts').innerHTML = output;
    }, 1000);
}

// Simulate creating a post and sending it to a server, which takes 2 second(s)
function createPost(post) {
    setTimeout(() => {
        posts.push(post);
    }, 2000);
}

getPosts();

createPost({ title: 'Post 3', body: 'This is post 3'});

// The DOM was already painted by the time the third post was created. Since loading the posts took less time than creating the third one, we only see the first two.