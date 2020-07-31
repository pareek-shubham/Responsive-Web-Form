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