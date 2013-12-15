/**
 * Created by richardarrigo on 12/14/13.
 */

(function(){
    // 5 members
    function Book(){
        // 4 properties
        this.name = "";
        this.isbn = 0;
        this.author = "";
        this.price = 999;
    }
    // 1 method
    Book.prototype.read = function(){
        console.log("Thanks for reading "+this.name+"!");
    }

    window.Book = Book;
})();