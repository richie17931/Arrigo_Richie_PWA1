/**
 * Created by richardarrigo on 12/3/13.
 */

//var test = "Hello";
//
//var firstLetter = test.charAt(0); // H
//var partialString = test.substr(1,3); // ell
////test.length //5
//
//function coolDate(){
//    var days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
//    var date = new Date();
//    var month = date.getMonth()+1;
//    var day = date.getDate();
//    var year = date.getFullYear();
//    var dayName = days[date.getDay()];
//    return dayName + ', ' + month + '/' + day + '/' + year;
//}
//
//console.log(coolDate());

var deck = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "K", "Q"];
function deal(){
    var cardNumber = ~~(Math.random()*deck.length);
    var card = deck[cardNumber];
    deck.splice(cardNumber,1);
    return card;
}

function play(){
    for(i=0;i<13;i++){
        console.log(i+1+":", deal(), deck);
    }
}

play();