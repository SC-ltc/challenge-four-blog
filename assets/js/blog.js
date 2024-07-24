//Access elements on the blog page using querySelector 
const blogPosts = document.querySelector('#blogposts');

//This function will render the blogs onto the blog entries page
function renderBlog(){
    const storedBlogs = JSON.parse(localStorage.getItem('blogs'));

    for (let i = 0; i < storedBlogs.length; i++ ){
        const storedBlog = storedBlogs[i];

        const blogContainer = document.createElement('div');
        const blogTitle = document.createElement('h2');
        const blogContent = document.createElement('p');
        const blogAuthor = document.createElement('span');

        blogTitle.textContent = storedBlog.title;
        blogContent.textContent = storedBlog.content;
        blogAuthor.textContent = `Posted by ${storedBlog.name}.`;

        blogPosts.appendChild(blogContainer)
        blogContainer.appendChild(blogTitle)
        blogContainer.appendChild(blogContent)
        blogContainer.appendChild(blogAuthor)

    }
}

// remember to use renderBlog() to call the function. We need to do initialization next