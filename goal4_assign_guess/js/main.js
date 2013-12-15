/**
 * GUESSING GAME:
 *
 * Created By: Richie Arrigo
 * Date: 12/10/2013
 * 
 * GUESSING GAME
 */

//Game variables
(function(){
    var magicNum = ~~(Math.random()*10+1); // ~~ floors it
    console.log(magicNum);
    var dom = {button: document.querySelector("button"),
               output: document.querySelector("#output"),
               input: document.querySelector("#input")};
    var guesses = 3;

    dom.button.addEventListener("click", onClick);

    function onClick(e){
        validate();
    };

    function validate(){
        var input = dom.input.value // value is a property of input that holds the text or value
        if(input < 1 || input > 10){
            dom.output.innerHTML = "Invalid! Enter a number between 1-10:";
        }
        else if(isNaN(input)){
            dom.output.innerHTML = "Invalid! Enter a number!";
        }
        else if(input == " "){
            dom.output.innerHTML = "Invalid! Enter a value!";
        }
        else{
            playGame(input);
        }
    };

    function playGame(n){
        if(n < magicNum){
            guesses--;
            dom.output.innerHTML = "Your guess is too low! You have "+ guesses+" guesses left!";
        }
        else if(n > magicNum){
            guesses--;
            dom.output.innerHTML = "Your guess is too high! You have "+ guesses+" guesses left!";
        }
        else{
            dom.output.innerHTML = "You guessed right!";
        }
        if(guesses == 0){
            dom.button.removeEventListener("click", onClick);
            dom.output.innerHTML = "Game Over!";
        }
    };

})();