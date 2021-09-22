let library = [];

function Book(title, author, pages) {
    this.title = title
    this.author = author
    this.pages = pages
}

function addBookToLibrary(title, author, pages) {
    library.push(new Book(title, author, pages));
}

function getDetails() {
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;

    return [title, author, pages];
    
}

const btn = document.querySelector("button");
btn.addEventListener('click', () => {
    let details = getDetails();
    addBookToLibrary(details[0], details[1], details[2]);
})

function displayBooks() {
    console.table(library);
}