let library = [
    {
        cover: "https://images-na.ssl-images-amazon.com/images/I/91b0C2YNSrL.jpg",
        title: "The Hobbit",
        author: "Tolkien",
        pages: 295
    },
    {
        cover: "https://images-na.ssl-images-amazon.com/images/I/51MFw+si6RL._SX324_BO1,204,203,200_.jpg",
        title: "The Book of Longings",
        author: "Sue Monk",
        pages: 228
    }
];

function Book(cover, title, author, pages, read) {
    this.cover = cover
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLibrary(cover, title, author, pages) {
    library.push(new Book(cover, title, author, pages));
}

function getDetails() {
    let cover = document.querySelector("#cover").value;
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;

    return [cover, title, author, pages];

}

const storeBtn = document.querySelector("#store-button");
storeBtn.addEventListener("click", () => {
    let details = getDetails();
    addBookToLibrary(details[0], details[1], details[2], details[3]);
    displayBooks();
})


const bookList = document.querySelector(".book-list");
function displayBooks() {
    bookList.innerHTML = "";
    library.forEach(book => {
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

    bookCard.classList.add("book-card");
    overflowWrap.classList.add("overflow-wrapper");
    cardBackground.classList.add("card-background");
    bookDetails.classList.add("book-details");
    bookTitle.classList.add("book-title");

    cardBackground.style.backgroundImage = `url(${book.cover})`;
    bookCover.src = `${book.cover}`;
    bookTitle.textContent = `${book.title}`;

    bookCard.appendChild(overflowWrap);
    overflowWrap.appendChild(cardBackground);
    bookCard.appendChild(bookCover);
    bookCard.appendChild(bookDetails);
    bookDetails.appendChild(bookTitle);
    bookDetails.appendChild(ul);

    const liArray = [`${book.author}`, "•", `${book.pages}`, '•', `${book.read}`];
    for (let i = 0; i <= liArray.length - 1; i++) {
        const li = document.createElement('li');

        li.textContent = liArray[i];
        ul.appendChild(li);
    }

    bookList.appendChild(bookCard);

}

const modal = document.querySelector(".modal");
const modalBtn = document.querySelector("#modal-btn");

modalBtn.addEventListener('click', () => {
    toggleModal();
})

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function toggleModal() {
    if (modal.style.display !== "block") {
        modal.style.display = "block";
    } else {
        modal.style.display = "none";
    }
}

displayBooks();