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

Book.prototype.display = function() {
    let bookInfo = `Title : ${this.title} 
    \nAuthor : ${this.author} 
    \nPages : ${this.pages} 
    \nRead Status : ${this.read} 
    \nID : ${this.id}`;
    return bookInfo;
};

addBookToLibrary("The Alchemist", "Paulo Coelho", "208", "read");

addBookToLibrary("ABCD", "DEF", "200", "not read Yet");

console.log(myLibrary);


const main = document.querySelector(".card-container");
for(let i = 0; i < myLibrary.length; i++) {
    let card = document.createElement("div");
    main.appendChild(card);
    card.setAttribute("style","height: 200px; padding: 10px; border: 1px solid black; white-space: pre;");
    card.style.backgroundColor = '#c4d8ddff';
    card.textContent = myLibrary[i].display();
}


