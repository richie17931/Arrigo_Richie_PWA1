/**
 * Created by richardarrigo on 11/26/13.
 */

// Richie Arrigo | 2492145 | 11/26/13 | Goal 1: Duel 1

(function(){

    // arrays for players
    var playerOne=[prompt('Enter Player One\'s name: '), 100, 25, 12.5];
    var playerTwo=[prompt('Enter Player Two\'s name: '), 100, 25, 12.5];
//    // variables to store players' health
//    var playerOneHealth= 100;
//    var playerTwoHealth= 100;
//    // variables for player damage
//    var playerOneMaxDamage= 25;
//    var playerOneMinDamage= playerOneMaxDamage/2;
//    var playerTwoMaxDamage= 25;
//    var playerTwoMinDamage= playerTwoMaxDamage/2;
    // variable to store the round number;
    var round= 1;
    console.log(playerOne);
    console.log(playerTwo);

    // fight() function to loop through rounds
    function fight(){
        alert(playerOne[0]+':'+playerOne[1]+'      Round '+round+'...FIGHT!!!      '+playerTwo[0]+':'+playerTwo[1]);
        for(var i=0;i<10;i++){
            playerOne[1]= playerOne[1]-(Math.floor(Math.random()*(playerTwo[2]-playerTwo[3]+1))+playerTwo[3]);
            playerTwo[1]= playerTwo[1]-(Math.floor(Math.random()*(playerOne[2]-playerOne[3]+1))+playerOne[3]);
            console.log(playerOne[1]);
            console.log(playerTwo[1]);
            var winner= winnerCheck();
            if(winner == 'no winner'){
                round++;
                alert(playerOne[0]+':'+playerOne[1]+'      Round '+round+'...FIGHT!!!      '+playerTwo[0]+':'+playerTwo[1]);
            }
            else{
                alert(winner);
                break;
            };
        };
    };

    // winnerCheck() function to determine if there is a winner
    function winnerCheck(){
        var winner='no winner';
        if(playerOne[1]<=0 && playerTwo[1]<=0){
            winner= 'Tie!';
        }
        else if(playerOne[1]<=0){
            winner= playerTwo+' wins!!!';
        }
        else if(playerTwo[1]<=0){
            winner= playerOne+' wins!!!';
        };
        return winner;
    };

    fight();
})();

