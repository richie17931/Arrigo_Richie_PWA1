/**
 * Created by richardarrigo on 12/12/13.
 */

(function(){

    function Student(n, g){
        this.name = n;
        this.grades = g;
        console.log("Student Created");
    }

    Student.prototype.average = function(){
        var total = 0;
        this.grades.forEach(function(e){
            total += e;
        });
        return total/this.grades.length;
    }

    window.Student = Student;

})();