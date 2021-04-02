$(function(){
$("#form").submit(function(event){
  let name = $('#name').val();
  let password = $('#password').val();
  let message = $('#message').val();
  let checkbox = $('#checkbox').is(":checked");// returns boolean (true or false if this is check or not)

validateNameField(name, event);
validatePassword(password, event);
validateMessage(message, event);
validateCheckbox(checkbox, event);

})
});

// code for validating password stored in variable as an annon function. 
let validateNameField = function(name, event){
  if(!isValidName(name)) {
    $("#name-feedback").text("Please enter at least two characters.").css("color", "red");
    event.preventDefault();
  } else {
    $("#name-feedback").text("");
  }
};

let isValidName = function(name){
  return name.length >= 2;

};

//Code for validating Password
let validatePassword = function(password, event){
  if(!isValidPassword(password)) {
    $("#password-feedback").text("Please enter a password with at least 8 characters").css("color", "red");
    event.preventDefault();
  } else {
    $("#password-feedback").text("");
  }
};

let isValidPassword = function(name){
  return name.length >= 8;

};

// code for validating message
let validateMessage = function(message, event){
  if(!isValidName(message)) {
    $("#message-feedback").text("Please share some feedback.").css("color", "red");
    event.preventDefault();
  } else {
    $("#message-feedback").text("");
  }
};

let isValidMessage = function(message){
  return message.length >= 1;

};

// Code for validation if checkbox is checked
let validateCheckbox = function(checkbox, event){
  if(checkbox === false) {
    $("#checkbox-feedback").text("Please check this box before submitting.").css("color", "red");
    event.preventDefault();
  } else {
    $("#checkbox-feedback").text("");
  }
};

let isChecked = function(checkbox){
    return $(checkbox);
};