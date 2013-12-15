/**
 * Created by richardarrigo on 11/26/13.
 */

// Richie Arrigo | 2492145 | 12/07/2013 | Goal 4: Duel 3

(function(){

    // arrays for players
    //var playerOne=[prompt('Enter Player One\'s name: '), 100, 25, 12.5];
    //var playerTwo=[prompt('Enter Player Two\'s name: '), 100, 25, 12.5];
    var players=[{name:"Kabal",health:100,maxDamage:15,minDamage:7.5},
                 {name:"Kratos",health:100,maxDamage:15,minDamage:7.5}];
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
    console.log(players[0]);
    console.log(players[1]);

    // fight() function to loop through rounds
    function fight(){
        //alert(playerOne[0]+':'+playerOne[1]+'      Round '+round+'...FIGHT!!!      '+playerTwo[0]+':'+playerTwo[1]);
        //for(var i=0;i<10;i++){
        var output1= document.querySelector("#output1");
        output1.innerHTML= players[0].name+": "+players[0].health+"   **********VS**********   "+players[1].name+": "+players[1].health;
        var currentRound= document.querySelector("#round");
       // currentRound.innerHTML= "Round "+ round + ".....";
        var btn= document.querySelector("#fight_btn");
        btn.addEventListener("click", onClick);

        function onClick(e){
            currentRound.innerHTML= "Round "+ round + ".....";
            players[0].health= players[0].health-(Math.floor(Math.random()*(players[1].maxDamage-players[1].minDamage+1))+players[1].minDamage);
            players[1].health= players[1].health-(Math.floor(Math.random()*(players[0].maxDamage-players[0].minDamage+1))+players[0].minDamage);
            output1.innerHTML= players[0].name+": "+players[0].health+"   **********VS**********   "+players[1].name+": "+players[1].health;
            console.log(players[0].name+": "+players[0].health);
            console.log(players[1].name+": "+players[1].health);
            var winner= winnerCheck();
            if(winner == 'no winner'){
                round++;
                //alert(playerOne[0]+':'+playerOne[1]+'      Round '+round+'...FIGHT!!!      '+playerTwo[0]+':'+playerTwo[1]);
            }
            else{
                output1.innerHTML=winner;
                btn.removeEventListener("click", onClick);
                //alert(winner);
                //break;
            };
        };
        //};
    };

    // winnerCheck() function to determine if there is a winner
    function winnerCheck(){
        var winner='no winner';
        if(players[0].health <=0 && players[1].health <=0){
            winner= 'Tie!';
        }
        else if(players[0].health <=0){
            winner= players[1].name+' wins!!!';
        }
        else if(players[1].health <=0){
            winner= players[0].name+' wins!!!';
        };
        return winner;
    };

    fight();
})();

