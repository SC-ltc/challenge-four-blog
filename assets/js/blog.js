//Access elements on the blog page using querySelector 
const blogPosts = document.querySelector('#blogposts');
const backbttn = document.querySelector('#backbutton');

let blogArray = [];

//This function will render the blogs onto the blog entries page
function renderBlog(){
    
    //Clear blogPosts element
    blogPosts.textContent = '';

    //Loop through each stored blog
    for (let i = 0; i < blogArray.length; i++ ){
        const storedBlog = blogArray[i];

        const blogContainer = document.createElement('div');   //Variable to create a new container for the blog post
        const blogTitle = document.createElement('h2');
        const blogContent = document.createElement('p');
        const blogAuthor = document.createElement('span');

        blogTitle.textContent = storedBlog.title;
        blogContent.textContent = storedBlog.content;
        blogAuthor.textContent = `Posted by ${storedBlog.name}.`;

        blogPosts.appendChild(blogContainer)  //Targets the "id=blogposts" section in blog.html and places the new div there
        blogContainer.appendChild(blogTitle)
        blogContainer.appendChild(blogContent)
        blogContainer.appendChild(blogAuthor)

    }
}

//Function called below will run when the page loads
function init() {
    //Get stored blogs from localstorage
    const storedBlogs = JSON.parse(localStorage.getItem('blogs'));

    //If blogs were retrived from localstorage, update blogArray
    if (storedBlogs !== null) {
        blogArray = storedBlogs;
    }
    renderBlog();
}

//Event listener for the back button to bring user back to the main page
backbttn.addEventListener('click', function (event){
    event.preventDefault();
    location.href='./index.html';
});

//Calls init to retrieve data and render it to the page on load
init()