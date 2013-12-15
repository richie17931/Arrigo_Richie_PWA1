/*
	* Mid Terms for PWA-1
*/

(function(){
    // counter to keep track of which student to access
    var counter = 0;
    var students = [{Name:"Batman", Address:{street:"3131 Gotham Avenue", City:"Gotham City", State:"New Jersey"}, gpa:[3.5, 4.0, 4.0], Date: displayDate()},
                    {Name:"Superman", Address:{street:"5060 Metro Boulevard", City:"Metropolis", State:"New York"}, gpa:[2.5, 3.0, 3.5], Date: displayDate()}];
    var btn = document.querySelector(".buttonred");
    btn.addEventListener("click", onClick);

    // displays the roster
    function displayRoster(){
        for(var i=0; i<students.length; i++){
            console.log("Name: " + students[i].Name);
            console.log("Address: " + students[i].Address.street + ", " + students[i].Address.City + ", " + students[i].Address.State);
            console.log("GPA: " + students[i].gpa);
            console.log("Date: " + students[i].Date);
            console.log("-----------------------------");
        }
    };

    // formats the display for today's date
    function displayDate(){
        var date= new Date();
        var month = date.getMonth()+1;
        var day= date.getDate();
        var year= date.getFullYear();
        var currDate= month+"/"+day+"/"+year;
        return currDate;
    };

    // displays the roster HTML
    function displayHTML(){
        var output1= document.querySelector("#name");
        output1.innerHTML= "Name: " + students[counter].Name;
        var output2= document.querySelector("#address");
        output2.innerHTML= "Address: " + students[counter].Address.street + ", " + students[counter].Address.City + ", " + students[counter].Address.State;
        var output3= document.querySelector("#gpa");
        output3.innerHTML= "GPA: " + students[counter].gpa;
        var output4= document.querySelector("#gpaavg");
        output4.innerHTML= "Average GPA: " + averageGPA(students[counter].gpa);
        var output5= document.querySelector("#date");
        output5.innerHTML= "Date: " + students[counter].Date;
    };

    // calculate average gpa and round 2 decimal places
    function averageGPA(g){
        var gpaAverage= 0;
        for(var i=0; i< g.length; i++){
            gpaAverage= gpaAverage+g[i];
        }
        gpaAverage= gpaAverage/ g.length;
        return gpaAverage.toFixed(2);
    };

    // add a student to the array of student objects
    function addStudent(name,street,city,state,g, date){
        var newStudent={Name:name, Address:{street:street, City:city, State:state}, gpa:g, Date: date};
        students.push(newStudent);
        console.log("********NEW ROSTER********");
    };

    // mouse event
    function onClick(e){
        displayHTML();
        counter++;
        if(counter==students.length){
            counter=0;
            btn.removeEventListener("click", onClick);
        }
    };

    // display function calls
    displayRoster();
    addStudent("Aquaman", "321 Atlantis Drive", "Atlantis", "Atlantic Ocean", [3.0, 3.3, 3.8], displayDate());
    displayRoster();
})();