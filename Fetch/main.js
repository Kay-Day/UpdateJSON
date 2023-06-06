var postAPI =
 'https://jsonplaceholder.typicode.com/posts';
// Stream
fetch(postAPI)
    .then(function(response) {
         return response.json();

        // JSON.parse: JSON -> JS;
    })
    .then(function(posts) {
        var htmls = posts.map(function(post) {
            return `<li>
                <h2>${post.title}</h2>
                <p>${post.body}</p>
                </li>`;
        });
        var html = htmls.join('');
        document.getElementById('post-block').innerHTML = html;
       
    })
    .catch(function(err) {
        console.error(err);

    });
