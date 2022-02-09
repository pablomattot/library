// Books get stored in myLibrary

let myLibrary = [
    {
        title: "The Hobbit",
        author: "Tolkien",
        pages: 295,
        readStatus: false
    },
    {
        title: "The Book of Longings",
        author: "Sue Monk",
        pages: 228,
        readStatus: false
    }
];

function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
}

// Display the books in the library
// Loop through library to display books
const bookList = document.querySelector(".book-list");
function displayBooks() {
    bookList.textContent = "";
    myLibrary.forEach(book => {
        // Create a card for each book
        createCard(book);
    })
}

function createCard(book) {
    const bookCard = document.createElement("div");
    const bookTitle = document.createElement("h2");
    const bookInfo = document.createElement("div");
    const bookAuthor = document.createElement("p");
    const bookPages = document.createElement("p");
    const bookOptions = document.createElement("div");
    const bookDelete = document.createElement("span");
    const bookEdit = document.createElement("span");

    bookCard.classList.add("book", "card", "grid-container");
    bookInfo.classList.add("book-info", "flex-container");
    bookCard.classList.add("book", "card", "grid-container");
    bookOptions.classList.add("book-options");
    bookDelete.classList.add("material-icons-outlined");
    bookEdit.classList.add("material-icons-outlined");

    bookTitle.textContent = `${book.title}`;
    bookAuthor.textContent = `${book.author}`;
    bookPages.textContent = `${book.pages} pages`;
    bookDelete.textContent = "delete";
    bookEdit.textContent = book.readStatus ? "visibility" : "visibility_off";

    bookCard.appendChild(bookTitle);
    bookCard.appendChild(bookInfo);
    bookInfo.appendChild(bookAuthor);
    bookInfo.appendChild(bookPages);
    bookCard.append(bookOptions);
    bookOptions.appendChild(bookDelete);
    bookOptions.appendChild(bookEdit);

    bookList.appendChild(bookCard);
}

// Adding a new book
// User clicks 'add new book'
const modal = document.querySelector(".modal");
const modalBtn = document.querySelector("#modal-btn");

modalBtn.addEventListener('click', () => {
    modal.style.display = "flex";
})

const cancelBtn = document.querySelector("#cancel");
window.onclick = function (event) {
    if (event.target == modal || event.target == cancelBtn) {
        modal.style.display = "none";
    }
}

// Get the details when user clicks 'store book'
const storeBtn = document.querySelector("#store-button");
storeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    addBookToLibrary();
});

function getDetails() {
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;

    return [title, author, pages];
}

// Create new book with details
function addBookToLibrary() {
    let details = getDetails();
    myLibrary.push(new Book(details[0], details[1], details[2]));
    displayBooks();
}

// Deleting a book or Updating read status
bookList.addEventListener('click', e => {
    const bookCard = e.target.parentNode;
    const cardArray = Array.from(bookList.childNodes)
    // User clicks delete
    if (e.target.textContent === "delete") deleteBook(bookCard, cardArray);
    // User clicks update
    if (e.target.textContent === "visibility" || e.target.textContent === "visibility_off") updateRead(bookCard, cardArray);
    displayBooks();
    modal.style.display = "none";
})

// Book gets deleted from myLibrary
function deleteBook(bookCard, cardArray) {
    myLibrary.splice(cardArray.indexOf(bookCard.parentNode), 1);
}

function updateRead(bookCard, cardArray) {
    const read = myLibrary[cardArray.indexOf(bookCard.parentNode)].readStatus;
    if (read) {
        myLibrary[cardArray.indexOf(bookCard.parentNode)].readStatus = false;
    } else {
        myLibrary[cardArray.indexOf(bookCard.parentNode)].readStatus = true
    }
}

displayBooks();