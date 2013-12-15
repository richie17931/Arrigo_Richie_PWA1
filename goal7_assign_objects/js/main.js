/**
 * Created by the JavaScript Development Team
 * Class: PWA
 * Goal: Goal7
 */
// Richie Arrigo | 2492145 | 12/12/2013 | Goal 7 Objects

(function(){
    // call the setInterval function to run the update at set interval(3 seconds)
    setInterval(runUpdate, 1000*3);
    var names = ["Richie","Joey","Seth","Eric","Ryan","Scott","Jim","Bob"];
    var people = [];

    for(var i = 0; i < 3; i++){
        var num = ~~(Math.random()*names.length);
        var person = new Person(names[num],"row"+(i+1));
        names.splice(num,1);
        people.push(person);
    }

    // sets data
    function populateHTML(){
        var personOneName = document.querySelector("#r1c1");
        personOneName.innerHTML = people[0].name;
        var personOneJob = document.querySelector("#r1c2");
        personOneJob.innerHTML = people[0].job;
        var personOneAction = document.querySelector("#r1c3");
        personOneAction.innerHTML = people[0].action;

        var personTwoName = document.querySelector("#r2c1");
        personTwoName.innerHTML = people[1].name;
        var personTwoJob = document.querySelector("#r2c2");
        personTwoJob.innerHTML = people[1].job;
        var personTwoAction = document.querySelector("#r2c3");
        personTwoAction.innerHTML = people[1].action;

        var personThreeName = document.querySelector("#r3c1");
        personThreeName.innerHTML = people[2].name;
        var personThreeJob = document.querySelector("#r3c2");
        personThreeJob.innerHTML = people[2].job;
        var personThreeAction = document.querySelector("#r3c3");
        personThreeAction.innerHTML = people[2].job;
    }

    function runUpdate(){
        people.forEach(function(e){
            e.update();
        });
    }

populateHTML();
})();