// Books get stored in myLibrary

let myLibrary = [
    {
        cover: "https://images-na.ssl-images-amazon.com/images/I/91b0C2YNSrL.jpg",
        title: "The Hobbit",
        author: "Tolkien",
        pages: 295,
        readStatus: false,
    },
    {
        cover: "https://images-na.ssl-images-amazon.com/images/I/51MFw+si6RL._SX324_BO1,204,203,200_.jpg",
        title: "The Book of Longings",
        author: "Sue Monk",
        pages: 228,
        readStatus: false,
    }
];

function Book(cover, title, author, pages, readStatus) {
    this.cover = cover
    this.title = title
    this.author = author
    this.pages = pages
    this.readStatus = readStatus
}

// Localstorage


// Display the books in myLibrary
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
    const overflowWrap = document.createElement("div");
    const cardBackground = document.createElement("div");
    const bookCover = document.createElement("img");
    const bookDetails = document.createElement("div");
    const bookTitle = document.createElement("p");
    const ul = document.createElement("ul");
    const controls = document.createElement("div");
    const trash = document.createElement("span");
    const edit = document.createElement("span");

    bookCard.classList.add("book-card");
    overflowWrap.classList.add("overflow-wrapper");
    cardBackground.classList.add("card-background");
    bookDetails.classList.add("book-details");
    bookTitle.classList.add("book-title");
    controls.classList.add("controls");
    trash.classList.add("material-icons-outlined");
    edit.classList.add("material-icons-outlined");

    cardBackground.style.backgroundImage = `url(${book.cover})`;
    bookCover.src = `${book.cover}`;
    bookTitle.textContent = `${book.title}`;
    trash.textContent = "delete";
    edit.textContent = book.readStatus ? "visibility" : "visibility_off";

    bookCard.appendChild(overflowWrap);
    overflowWrap.appendChild(cardBackground);
    bookCard.appendChild(bookCover);
    bookCard.appendChild(bookDetails);
    bookDetails.appendChild(controls);
    controls.appendChild(trash);
    controls.appendChild(edit);
    bookDetails.appendChild(bookTitle);
    bookDetails.appendChild(ul);

    const liArray = [`${book.author}`, "•", `${book.pages} pages`];
    for (let i = 0; i <= liArray.length - 1; i++) {
        const li = document.createElement('li');

        li.textContent = liArray[i];
        ul.appendChild(li);
    }

    bookList.appendChild(bookCard);

}

// Adding a new book
// User clicks 'add new book'
const modal = document.querySelector(".modal");
const modalBtn = document.querySelector("#modal-btn");

modalBtn.addEventListener('click', () => {
    modal.style.display = "block";
})

window.onclick = function (event) {
    if (event.target == modal) {
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
    let cover = document.querySelector("#cover").value;
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let read = document.querySelector("#read-status").checked;

    return [cover, title, author, pages, read];
}

// Create new book with details
function addBookToLibrary() {
    let details = getDetails();
    myLibrary.push(new Book(details[0], details[1], details[2], details[3], details[4]));
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
})

// Book gets deleted from myLibrary
function deleteBook(bookCard, cardArray) {
    myLibrary.splice(cardArray.indexOf((bookCard.parentNode).parentNode), 1);
}

// Book read status gets updated
function updateRead(bookCard, cardArray) {
    const read = myLibrary[cardArray.indexOf((bookCard.parentNode).parentNode)].readStatus;
    if (read) {
        myLibrary[cardArray.indexOf((bookCard.parentNode).parentNode)].readStatus = false;
    } else {
        myLibrary[cardArray.indexOf((bookCard.parentNode).parentNode)].readStatus = true
    }
}

displayBooks();