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

    function makeBooks(n){
        var bookNum = ~~(Math.random()*bookNames.length);
        var authorNum = ~~(Math.random()*authors.length);
        for(var i = 0; i < n; i++){
            var book = new Book();
            book.name = bookNames[bookNum];
            book.author = authors[authorNum];
            book.isbn = Math.random();
            book.price = ~~(Math.random()*51+50);
        }
    }

    function onClick(e){

        count++
    }


})();