// Getting all data inputs of Registratoin Form 
function userInput() {
    let input_object = {};
// Calling getDataFromIdSelector function
    input_object["firstname"] = getDataFromIdSelector("firstname");
    input_object["lastname"] = getDataFromIdSelector("lastname");
    input_object["mobile_no"] = getDataFromIdSelector("mobile_no");
    input_object["email_id"] = getDataFromIdSelector("email_id");
    input_object["meet_date"] = getDataFromIdSelector("meet_date");
    input_object["text_area"] = getDataFromIdSelector("text_area");
// querySelector and function calling 
    input_object["gender"] = document.querySelector('input[name="gender"]:checked').value;
    input_object["selected_business"] = dropdownInput();
    input_object["businessNeed"] = checkBoxInput();
    insert(input_object);
}

 // To Get the data input for Business Type via Dropdown
 function dropdownInput(){
    var business_type = document.getElementById("business_type");
    return business_type.options[business_type.selectedIndex].value;
}

 // To Get the data input for Business Need via Checkboxes 
function checkBoxInput() {
   let businessNeed = [];
    var inputElements = document.getElementsByClassName('checked_business');
    for (var i = 0; inputElements[i]; ++i) {
        inputElements[i].checked ? businessNeed.push(inputElements[i].value) : null;
    }
    return businessNeed;
}

// Function to reuse the ID sector 
function getDataFromIdSelector(id_string) {
    return document.getElementById(id_string).value;
}

// Function for store data locally 
function insert(input_object) {
    let userData = localStorage.getItem('UserData') ? JSON.parse(localStorage.getItem('UserData')) : [];
    userData.push(input_object);
    localStorage.setItem("UserData", JSON.stringify(userData));
}