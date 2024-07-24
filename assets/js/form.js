//Access elements using querySelector
const nameInput = document.querySelector('#username');
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content');
const submitButton = document.querySelector('#submit');

const blogArray = [];

//Event listener for the Submit button
submitButton.addEventListener('click', function (event){
    event.preventDefault();

    //Object for the inputs to be stored. Trim removes any whitespace.
    const blogObject = {
        name: nameInput.value.trim(),
        title: titleInput.value.trim(),
        content: contentInput.value.trim(),
    }

    //Assisted by Xpert Learning Assistant. Using an if statement to check for any empty fields and warn the user
    if (blogObject.name === '' || blogObject.title === '' || blogObject.content === '' ) {
        alert('Blank fields are not allowed. Please be sure to enter a username, title, and your blog content.');
        return;
    }

    //Push user input into the array
    blogArray.push(blogObject)

    //Stringify and put blogArray into local storage
    localStorage.setItem('blogs', JSON.stringify(blogArray));

    //After clicking on submit, redirect user to the next page
    location.href='./blog.html';
})