/**
 * Created by richardarrigo on 11/26/13.
 */

// Richie Arrigo | 2492145 | 11/26/13 | Goal 1: Duel 1

(function(){

    // variables for player names
    var playerOne=prompt('Enter Player One\'s name: ');
    var playerTwo=prompt('Enter Player Two\'s name: ');
    // variables to store players' health
    var playerOneHealth= 100;
    var playerTwoHealth= 100;
    // variables for player damage
    var playerOneDamage= 25;
    var playerTwoDamage= 25;
    // variable to store the round number;
    var round= 1;


    // fight() function to loop through rounds
    function fight(){


        winnerCheck();
        round++;
    };

    // winnerCheck() function to determine if there is a winner
    function winnerCheck(){

    };

    fight();

})();

