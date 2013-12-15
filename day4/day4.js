/**
 * Created by richardarrigo on 12/7/13.
 */
(function(){
//    console.log("started");
//    var students = [{name:"Richie", age:21, grades:[80,90,100]},
//                    {name:"Manton", age:19, grades:[85,80,100]}];
////    var student3 = {name:"Marie", age:20, grades:[90,90,90]};
////    students.push(student3);
////    console.log(students[1].grades[1]);
////
////    for(var i = 0; i < students.length; i++){
////        console.log(students[i]);
////    }
//
////    var car = {color:"green", price:20000, make:"Toyota"};
////    for(var p in car){
////        console.log(p);
////    }
//
//    displayStudents();
//    addStudent("Billy", 32, [90,90,88]);
//    console.log('\n'+"NEW ROSTER:");
//    displayStudents();
//
//
//    function displayStudents(){
//        for(var i = 0; i < students.length; i++){
//            // for n loop loops through to display every property(p) in an object
//            for(var p in students[i]){
//                console.log(p+":"+students[i][p]);
//            }
//            console.log("--------------------------------------------");
//        }
//    };
//
//    function addStudent(n, a, g){
//        students.push({name:n, age:a, grades:g});
//    };
    var games = [{name:"Skyrim",genre:"RPG",rating:"M"},
                 {name:"Madden '08",genre:"Sports",rating:"E"}];
    var students = [{name:"Tits", age:19},
                    {name:"Ass", age:21},
                    {name:"Pussy", age:25}];

    function display(arr){
        for(var i=0;i<arr.length;i++){
            for(var p in arr[i]){
                console.log(p+":"+arr[i][p]);
            }
            console.log("----------------------------------");
        }
    };
    //display(games);
    //display(students);

    var count = 0;
    //var btn = document.getElementById("button");
    var btn = document.querySelector("#button");
    //console.log(btn);
    var output1 = document.querySelector("#output1");
    output1.innerHTML = games[0].name;
    var output2 = document.querySelector("#output2");
    var output3 = document.querySelector("#output3");

    btn.addEventListener("click", onClick);
    function onClick(e){

        output1.innerHTML = games[count].name;
        output3.innerHTML = "I want beer!";
        console.log("click",e);
        count++;
        if(count == games.length){
            count = 0;
            btn.removeEventListener("click", onClick);
        }
    };


})();