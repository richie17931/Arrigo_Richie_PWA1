/**
 * Created by richardarrigo on 12/14/13.
 */

(function(){

    var count = 0;
    var books = [];
    var bookNames = ["Hello World", "Book Name", "Original Book", "Unique Book Name", "Javascript for Dummies",
                     "The Hobbit", "Marijuana Cultivation", "Sharknado", "Sharktopus"];
    var authors = ["John Doe", "Bill", "Bob", "Alan", "Richie", "Joey", "Carmine", "Mike", "Mary Jane"];
    var dom = {name: document.querySelector("#name"), isbn: document.querySelector("#isbn"),
               author: document.querySelector("#author"), price: document.querySelector("#price"),
               button: document.querySelector("#next")};

    dom.button.addEventListener("click", onClick);
    makeBooks(3);
    console.log(books);
    updateHTML();

    function makeBooks(n){
        for(var i = 0; i < n; i++){
            var bookNum = ~~(Math.random()*bookNames.length);
            var authorNum = ~~(Math.random()*authors.length);
            var book = new Book();
            book.name = bookNames[bookNum];
            bookNames.splice(bookNum,1);
            book.author = authors[authorNum];
            authors.splice(authorNum,1);
            book.isbn = Math.random();
            book.price = ~~(Math.random()*51+50);
            books.push(book);
        }
    }

    function updateHTML(){
        dom.name.innerHTML = books[count].name;
        dom.isbn.innerHTML = books[count].isbn;
        dom.author.innerHTML = books[count].author;
        dom.price.innerHTML = books[count].price;
    }

    function onClick(e){
        count++
        if(count > books.length-1){
            count = 0;
        }
        updateHTML();
    }


})();