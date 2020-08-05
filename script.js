// Mobile Number Validation 
function validateno() {
    var regex = /^(((\+){1}91){1})? ?-?[6-9][0-9]{9}$/;
    var mobile = document.getElementById("mobile_no").value;
    var v = document.getElementById("mobile_no");
    var arr = regex.test(mobile);
    if (!arr) {
        v.classList.add("is-invalid");
    }
    else {
        v.classList.remove("is-invalid");
        v.classList.add("is-valid");
    }
}

// E-Mail Validation 
function validatemail() {
    var mail_regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var mail = document.getElementById("email_id").value;
    var u = document.getElementById("email_id");
    var mail_arr = mail_regex.test(mail);
    if (!mail_arr) {
        u.classList.add("is-invalid");
    }
    else {
        u.classList.remove("is-invalid");
        u.classList.add("is-valid");
    }
}

// Getting all data inputs of Registratoin Form 
function insert() {
    var input_object = {};
    input_object["firstname"] = document.getElementById("firstname").value;
    input_object["lastname"] = document.getElementById("lastname").value;
    input_object["mobile_no"] = document.getElementById("mobile_no").value;
    input_object["email_id"] = document.getElementById("email_id").value;
    input_object["gender"] = document.querySelector('input[name="gender"]:checked').value;
    // To Get the data input for Business Type via Dropdown
    var business_type = document.getElementById("business_type");
    input_object["selected_business"] = business_type.options[business_type.selectedIndex].value;
    // To Get the data input for Business Need via Checkboxes 
    input_object["businessNeed"] = [];
    var inputElements = document.getElementsByClassName('checked_business');
    for (var i = 0; inputElements[i]; ++i) {
        inputElements[i].checked ? input_object["businessNeed"].push(inputElements[i].value) : null;
    }
    // Rest data input for Meeting Date & Textarea 
    input_object["meet_date"] = document.getElementById("meet_date").value;
    input_object["text_area"] = document.getElementById("text_area").value;
    let userData = localStorage.getItem('UserData') ? JSON.parse(localStorage.getItem('UserData')) : [];
    userData.push(input_object);
    localStorage.setItem("UserData", JSON.stringify(userData));
}
