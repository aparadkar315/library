let myLibrary = [];
let i = 0;

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

/*function to display a book*/

Book.prototype.display = function() {
    let bookInfo = `Title : ${this.title} 
    \nAuthor : ${this.author} 
    \nPages : ${this.pages} 
    \nRead Status : ${this.read} 
    \nID : ${this.id}`;
    return bookInfo;
};

/*addBookToLibrary("The Alchemist", "Paulo Coelho", "208", "read");
addBookToLibrary("ABCD", "DEF", "200", "not read Yet");*/

function addBookThruForm(event) {
    event.preventDefault();
     addBookToLibrary(tit.value, auth.value, pag.value, readStat.value);
     displayBooks();
}

console.log(myLibrary);

function displayBooks() {
const main = document.querySelector(".card-container")

    let card = document.createElement("div");
    main.appendChild(card);
    card.setAttribute("style","display:flex; flex-direction: column; height: 300px; width: 350px; margin: 20px; color:rgba(129, 72, 72, 1); padding: 20px; border: 1px solid black; border-radius: 10px; white-space: pre;");
    card.setAttribute("data-id", myLibrary[i].id);
    card.style.backgroundColor = 'rgb(209, 207, 207)';
    card.textContent = myLibrary[i].display();
    let remove = document.createElement("button");
    remove.setAttribute("style","align-self:center; margin-top: 25px; width: 100px; border-radius: 5px; height: 35px; background-color: rgb(121, 81, 81); color: white; font-weight: 900;");
    remove.textContent = "Remove";
    card.appendChild(remove);
    
    i++;  
}

/*function removeBooks() {
    myLibrary.findIndex(book => book.id == )
}*/

const tit = document.querySelector("#tit");
const auth = document.querySelector("#auth");
const pag = document.querySelector("#pag");
const readStat = document.querySelector("#readStat");

const addBook = document.querySelector(".addBook");
addBook.addEventListener("click", addBookThruForm);

/*const rem = document.querySelectorAll("remove");*/



