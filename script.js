const libraryDiv = document.querySelector('library')
let myLibrary = [];

const displayToggle = document.getElementById('form-toggle')

//the add book buttons
const form = document.querySelector('.form-element')// the parent form container
const title = document.getElementById('title')
const author = document.getElementById('author')
const pages = document.getElementById('pages')
const read = document.getElementById('read')
const addBookBtn = document.getElementById('get-book-btn')

const getReadValue = () => {
    if(read.checked == true ) return true;
    else return false;
}


class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
    info() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
    }
}

const addBookToLibrary = () => {
    let titleInput = title.value;
    let authorInput = author.value;
    let pagesInput = pages.value;
    let readInput = getReadValue();
    let newBook = new Book(titleInput, authorInput, pagesInput, readInput);
    myLibrary.push(newBook);
}

// Hiding/Showing the form the form
  
displayToggle.addEventListener('click', () => {
    form.classList.toggle("hidden")
})

//adding a book button function
form.addEventListener('submit', (e) => {
    e.preventDefault();
    addBookToLibrary();
})


// myLibrary.forEach(() => {
//     libraryDiv.add(title, author, pages)
// })


const book1 = new Book('LOTR', 'Tolkien', '100', 'read')

console.log(book1.info())