$(function(){

  let form = $("#form");
  enableFastFeedback(form);


$(form).submit(function(event){
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
    $("#password-feedback").text("Please enter a password with a minimum of eight characters, at least one letter and one number").css("color", "red");
    event.preventDefault();
  } else {
    $("#password-feedback").text("");
  }
};

let isValidPassword = function(password){
  return password.length >= 8 && /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]/.test(password);
  //Minimum eight characters, at least one letter and one number.

  // https://gist.github.com/frizbee/5318c77d2084fa75cd00ea131399581a
  //Used validation from regex on Github. 


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


let enableFastFeedback = function(formElement){
  let nameInput = formElement.find("#name");
  let passwordInput = formElement.find("#password");
  let messageInput = formElement.find("#message");
  let checkboxInput = formElement.find("#checkbox");

  nameInput.blur(function(event){
    let name = $(this).val();
    validateNameField(name, event);

    if (!isValidName(name)) {
      $(this).css({
        "box-shadow": "0 0 4px red", 
        "border": "1px solid #600"
      });
    } else {
      $(this).css({
        "box-shadow": "0 0 4px green", 
        "border": "1px solid #060"
      })
    }
  })

  passwordInput.blur(function(event){
    let password = $(this).val();
    validatePassword(password, event);

    if (!isValidName(password)) {
      $(this).css({
        "box-shadow": "0 0 4px red", 
        "border": "1px solid #600"
      });
    } else {
      $(this).css({
        "box-shadow": "0 0 4px green", 
        "border": "1px solid #060"
      })
    }
  })

  messageInput.blur(function(event){
    let message = $(this).val();
    validateMessage(message, event);

    if (!isValidName(message)) {
      $(this).css({
        "box-shadow": "0 0 4px red", 
        "border": "1px solid #600"
      });
    } else {
      $(this).css({
        "box-shadow": "0 0 4px green", 
        "border": "1px solid #060"
      })
    }
  })

  checkboxInput.blur(function(event){
    let isChecked= $('#checkbox').is(":checked");
    console.log(isChecked);
    validateMessage(isChecked, event);

    if (isChecked === false) {
      $(this).css({
        "box-shadow": "0 0 4px red", 
        "border": "1px solid #600"
      });
      $("#checkboxLabel").css({
        "box-shadow": "0 0 4px red", 
        "border": "1px solid #600"
      })
    } else {
      $(this).css({
        "box-shadow": "0 0 4px green", 
        "border": "1px solid #060"
      })
      $("#checkboxLabel").css({
        "box-shadow": "0 0 4px green", 
        "border": "1px solid #060"
      })
    }
  })
}
