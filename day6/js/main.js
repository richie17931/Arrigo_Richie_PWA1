/**
 * Created by richardarrigo on 12/10/13.
 */


// Regular Expressions

(function(){
    var dom = {output: document.querySelector("#output"),
               input: document.querySelector("#input"),
               button: document.querySelector("button")};

    dom.button.addEventListener("click", onClick);

    function onClick(e){
        console.log(dom.input.value);
        //var pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        var pattern = /^([0-9]( |-)?)?(\(?[0-9]{3}\)?|[0-9]{3})( |-)?([0-9]{3}( |-)?[0-9]{4}|[a-zA-Z0-9]{7})$/;
        var pass = pattern.test(dom.input.value);
        dom.output.innerHTML = pass;
    };

})();