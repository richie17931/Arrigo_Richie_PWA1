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
    var playerOneMaxDamage= 25;
    var playerOneMinDamage= playerOneMaxDamage/2;
    var playerTwoMaxDamage= 25;
    var playerTwoMinDamage= playerTwoMaxDamage/2;
    // variable to store the round number;
    var round= 1;


    // fight() function to loop through rounds
    function fight(){
        alert(playerOne+':'+playerOneHealth+'      Round '+round+'...FIGHT!!!      '+playerTwo+':'+playerTwoHealth);
        for(var i=0;i<10;i++){
            playerOneHealth= playerOneHealth-Math.floor(Math.random()*(playerTwoMaxDamage-playerTwoMinDamage+1))+playerTwoMinDamage;
            playerTwoHealth= playerTwoHealth-Math.floor(Math.random()*(playerOneMaxDamage-playerOneMinDamage+1))+playerOneMinDamage;
            console.log(playerOneHealth);
            console.log(playerTwoHealth);
        }
        winnerCheck();
        round++;
    };

    // winnerCheck() function to determine if there is a winner
    function winnerCheck(){

    };

    fight();

})();

