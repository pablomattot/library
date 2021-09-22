let library = [];

let titleInput = document.querySelector("#title").value;

function Book(name, author, pages) {
    this.name = name
    this.author = author
    this.pages = pages
}

function addBookToLibrary(name, author, pages) {
    library.push(new Book(name, author, pages));
}


function getDetails() {
    let name = prompt("Book title?");
    let author = prompt("Who is the author?");
    let pages = prompt("Total pages?");

    return [name, author, pages];
    
}

// let details = getDetails();

// addBookToLibrary(details[0], details[1], details[2]);

function displayBooks() {
    console.table(library);
}