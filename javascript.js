let myLibrary = [];


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
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
}


Book.prototype.changeStatus = function(){
    if(this.read.toLowerCase() === "read"){
        this.read = "Not Read Yet";
    }else if(this.read.toLowerCase() === "not read yet"){
        this.read ="Read";
    }
    };


function addBookThruForm(event) {
    event.preventDefault();
     addBookToLibrary(tit.value, auth.value, pag.value, readStat.value);
     displayBooks();
}

console.log(myLibrary);

function displayBooks() {
    const main = document.querySelector(".card-container")
    main.innerHTML = '';
    
    myLibrary.forEach((book) => {
    
/*Book Info*/
    let card = document.createElement("div");
    card.classList.add('book');
    card.style.backgroundColor = 'rgb(209, 207, 207)';
    main.appendChild(card);

    let bookTitle = document.createElement("div");
    bookTitle.classList.add('info');
    bookTitle.textContent = `Title: ${book.title}`;
    card.appendChild(bookTitle);

    let bookAuthor = document.createElement("div");
    bookAuthor.classList.add('info');
    bookAuthor.textContent = `Author: ${book.author}`;
    card.appendChild(bookAuthor);

    let bookPages = document.createElement("div");
    bookPages.classList.add('info');
    bookPages.textContent = `No of Pages: ${book.pages}`;
    card.appendChild(bookPages);

    let bookReadStatus = document.createElement("div");
    bookReadStatus.classList.add('info');
    bookReadStatus.textContent = `Read Status: ${book.read}`;
    card.appendChild(bookReadStatus);

    let bookId = document.createElement("div");
    bookId.classList.add('info');
    bookId.textContent = `Id: ${book.id}`;
    card.appendChild(bookId);

/*Remove Button*/
    let remove = document.createElement("button");
    remove.classList.add('remove');
    remove.textContent = "Remove";
    card.appendChild(remove);
    remove.addEventListener("click", () => {
        main.removeChild(card);
        myLibrary.pop();
        console.log(myLibrary.length);
    });
    
/*Change Status Button*/
    let changeReadStatus = document.createElement("button");
    changeReadStatus.classList.add('read');
    changeReadStatus.textContent = "Read?";  
    card.appendChild(changeReadStatus);
    changeReadStatus.addEventListener("click", () => {
        book.changeStatus();
        bookReadStatus.textContent = `Read Status: ${book.read}`;
        }); 
     }) 
}



const tit = document.querySelector("#tit");
const auth = document.querySelector("#auth");
const pag = document.querySelector("#pag");
const readStat = document.querySelector("#readStat");

const addBook = document.querySelector(".addBook");
addBook.addEventListener("click", addBookThruForm);







