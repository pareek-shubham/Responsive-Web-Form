// Mobile Number Validation 
function validateno() {
    var regex = /^(((\+){1}91){1})? ?-?[6-9][0-9]{9}$/;
    var mobile = document.getElementById("mobile-no").value;
    var v = document.getElementById("mobile-no");
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
    var mail = document.getElementById("email-add").value;
    var u = document.getElementById("email-add");
    var mail_arr = mail_regex.test(mail);
    if (!mail_arr) {
        u.classList.add("is-invalid");
    }
    else {
        u.classList.remove("is-invalid");
        u.classList.add("is-valid");
    }
}
// Local Data Storage for the Form
function insert() {
    var input_object = {};
    input_object["firstname"] = document.getElementById("firstname").value;
    input_object["lastname"] = document.getElementById("lastname").value;
    input_object["mobile_no"] = document.getElementById("mobile_no").value;
    input_object["email_id"] = document.getElementById("email_id").value;
    input_object["gender"] = document.querySelector('input[name="gender"]:checked').value;
    var business_type = document.getElementById("business_type");
    input_object["elected_business"] = business_type.options[business_type.selectedIndex].value;
    input_object["checkedValue"] = [];
    var inputElements = document.getElementsByClassName('checked_business');
    for (var i = 0; inputElements[i]; ++i) {
        inputElements[i].checked ? input_object["checkedValue"].push(inputElements[i].value) : null;
    }
    console.log(input_object)
    input_object["meet_date"] = document.getElementById("meet_date").value;
    input_object["text_area"] = document.getElementById("text_area").value;
}