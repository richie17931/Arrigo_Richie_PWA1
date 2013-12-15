/**
 * Created by the JavaScript Development Team
 * Class: PWA
 * Goal: Goal7
 */
// Richie Arrigo | 2492145 | 12/12/2013 | Goal 7 Objects

(function(){

    var jobs = ["teacher","farmer","student","pilot","doctor","web developer"];
    var actions = ["eat","drink","sleep","work","play","relax"];

    function Person(n, r){
        this.name = n;
        this.action = actions[~~(Math.random()*actions.length)];
        this.job = jobs[~~(Math.random()*jobs.length)];
        this.row = r;
    }

    Person.prototype.update = function(){
        var personOneAction = document.querySelector("#r1c3");
        personOneAction.innerHTML = actions[~~(Math.random()*actions.length)];
        var personTwoAction = document.querySelector("#r2c3");
        personTwoAction.innerHTML = actions[~~(Math.random()*actions.length)];
        var personThreeAction = document.querySelector("#r3c3");
        personThreeAction.innerHTML = actions[~~(Math.random()*actions.length)];
    }

    window.Person = Person;

})();