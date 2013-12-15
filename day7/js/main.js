/**
 * Created by richardarrigo on 12/12/13.
 */

(function(){

////    var dog = {name: "Max",
////               breed: "Doberman",
////               bark: function(){console.log("bark!");}
////               };
////    dog.bark;
//
//    var dogs = [];
//
//    // create a constructor object
//    function Dog(n,c,a){
//        // console.log("Dog Creator");
//        this.name = n;
//        this.color = c;
//        this.age = a;
//    }
//
//    var myDog = new Dog("Max", "black", 5);
////    myDog.name = "Max";
////    myDog.color = "black";
////    myDog.age = 5;
//    var ryansDog = new Dog("Killa", "brown", 7);
//
//    dogs.push(myDog, ryansDog);
//
////    for(var i = 0; i < dogs.length; i++){
////        console.log("Name: "+dogs[i].name);
////    }
//
//    dogs.forEach(function(e){
//        console.log("Name: "+ e.name);
//    });
//
//    // console.log("Name:"+myDog.name+" Color:"+myDog.color+" Age:"+myDog.age);
    var names = ["Scott", "Joey", "Manton", "Eric", "Richie"];
    var people = [];

    function Person(n, j){
        this.name = n;     // this. assigns property to the Person object
        this.job = j;
    }
    // Person.prototype - adds functionality for the Person object
    Person.prototype.greeting = function(){
        console.log("Hello, my name is "+this.name);
    }


    for(var i = 0; i < 1000; i++){
        var num = ~~(Math.random()*names.length);
        var person = new Person(names[num], "Student");
        people.push(person);
    }

//    people.forEach(function(n){
//       console.log("Name: "+ n.name);
//    });
    //console.log(people[4].name+": "+people[4].job);

    people[0].greeting();

})();