/*
     Developed by the JavaScript team at Fullsail
     Date: 1306
*/
// Richie Arrigo | 12/10/2013 | Goal 5 Assignment: Validation

(function(){

    var dom = {username: document.querySelector("#f_username"),
               email: document.querySelector("#f_email"),
               phoneNumber: document.querySelector("#f_phone"),
               SSN: document.querySelector("#f_ssn"),
               password: document.querySelector("#f_password"),
               button: document.querySelector("#f_submit")};

    dom.button.addEventListener("click", onSubmit);

    function onSubmit(e){

        validateField(dom.username);  //id = is the form input field ID
        validateField(dom.email);
        validateField(dom.phoneNumber);
        validateField(dom.SSN);
        validateField(dom.password);

        e.preventDefault();
        return false;
    }


    var validateField = function(inputName){

        var pattern, pass;
        if (inputName === dom.username){
            pattern = /^[a-zA-Z]{2,12}['-]?[a-zA-Z]{1,10}\s?[a-zA-Z]{2,12}['-]?[a-zA-Z]{1,10}$/;
            pass = pattern.test(dom.username.value);
        }
        else if (inputName === dom.email){
            pattern = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
            pass = pattern.test(dom.email.value);
        }
        else if (inputName === dom.phoneNumber){
            pattern = /((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/;
            pass = pattern.test(dom.phoneNumber.value);
        }
        else if (inputName === dom.SSN){
            pattern = /^\d{3}-\d{2}-\d{4}$/;
            pass = pattern.test(dom.SSN.value);
        }
        else if (inputName === dom.password){
            pattern = /^[a-zA-Z]\w{3,14}$/;
            pass = pattern.test(dom.password.value);
        }

        var errorMsg = inputName.nextSibling.nextSibling.nextSibling.nextSibling;

        if (!pass || inputName.value.length < 2){
            errorMsg.style.display='block';
            inputName.style.backgroundColor = 'red';
        } else if (pass && inputName.value.length > 5){
            errorMsg.style.display='none';
            inputName.style.backgroundColor = 'green';
        } else {
            errorMsg.style.display='none';
            inputName.style.backgroundColor = 'white';
        }
    };
})();  // end wrapper



