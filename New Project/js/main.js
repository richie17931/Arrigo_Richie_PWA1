/**
 * Created by richardarrigo on 12/12/13.
 */

(function(){

    var interval = setInterval(update, 1000/30); //(updateFunction, interval in milliseconds(1000/per second)

    var person = new Student("Eric",[90,100,85]);
    var person2 = new Student("Richie",[100,95,100]);
    //console.log(person.average());
    //console.log(person2.average());

    function update(){
        console.log("Hello!");
    }

})();