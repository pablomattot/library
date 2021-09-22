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


const bookList = document.querySelector(".book-list");
function displayBooks() {
    library.forEach(book => {
        bookList.innerHTML += `
        <div class="book-card"">
            <div class="overflow-wrapper">
                <div class="card-background" style="background-image:url(${book.cover})">
            </div>
            </div>
            <div class="book-img"><img src="${book.cover}" alt=""></div>
            <div class="book-details">
                <p class="book-title">${book.title}</p>
                <ul>
                    <li>${book.author}</li>
                    <li>&#8226;</li>
                    <li>${book.pages} pages</li>
                    <li>&#8226;</li>
                    <li>${book.read}</li>
                </ul>
            </div>
        </div>`;
    })
}

displayBooks();