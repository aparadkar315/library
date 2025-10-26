const myLibrary = [];

function Book(title, author, pages, read) {
    if(!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

addBookToLibrary("The Alchemist", "Paulo Coelho", "208", "read");

addBookToLibrary("ABCD", "DEF", "200", "not read Yet");

console.log(myLibrary);


const main = document.querySelector(".container");
for(let i = 0; i < myLibrary.length; i++) {
    let card = document.createElement("div");
    main.appendChild(card);
    card.setAttribute("style","display:grid; grid-auto-flow:row; grid-template-columns:1fr; height:100px;")
    for(let prop in myLibrary[i]){
        let bookInfo = document.createElement("div");
        bookInfo.textContent = `${prop}: ${myLibrary[i].prop}`;
        card.appendChild(bookInfo); 
    }
}


