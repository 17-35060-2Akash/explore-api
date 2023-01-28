function loadPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => displayPosts(data))
}

function displayPosts(posts) {
    const postContainer = document.getElementById('posts-container');
    for (const post of posts) {
        const div = document.createElement('div');
        console.log(post);
        div.classList.add('post');
        div.innerHTML = `
    <h4>User-${post.id}</h4>
    <h5>Post: ${post.title}</h5>
    <p>Post Description: ${post.body}</p>
    `;
        postContainer.appendChild(div);
    }
}
loadPost();