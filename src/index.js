let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let select = document.getElementById("select");
let formElements = document.querySelectorAll(".form-control");
let register = document.querySelector(".register");
let check=document.querySelector('.radio')

let skills=document.forms['myForm']['skills']

let form = document.querySelector(".form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

   if (
    username.value !== "" &&
    email.value !== "" &&
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email.value
    ) &&
    password.value !== "" &&
    password.value.length > 10 &&
    /.[@,#,$,_,(,)]/.test(password.value) &&
    select.value != "Country" &&
    (skills[0].checked!=false || skills[1].checked!=false || skills[2].checked!=false)
  ) {
    window.location = "./login.html";
  }
  checkInput();
});

const checkInput = () => {
  let usernameValue = username.value.trim();
  let emailValue = email.value.trim();
  let passwordValue = password.value.trim();
  let selectValue = select.value.trim();


  if(skills[0].checked==false && skills[1].checked==false && skills[2].checked==false){
 checkBoxError(check, 'Please check one')
  }
  else{
    checkBoxSuccess(check)
  }

  if (usernameValue == "") {
    setError(username, "Fill the unsername");
  } else {
    setSuccess(username);
  }

  if (emailValue == "") {
    setError(email, "Please enter Email");
  } else if (
    !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      emailValue
    )
  ) {
    setError(email, "Not a correct email");
  } else {
    setSuccess(email);
  }

  if (passwordValue == "") {
    setError(password, "Please enter password");
  } else if (passwordValue.length < 10) {
    setWarning(password, "Your password length less than 10");
  } else if (!/.[@,#,$,_,(,)]/.test(passwordValue)) {
    setWarning(password, "Your password is little secure");
  } else if (!/[A-Z]/g.test(passwordValue)) {
    setWarning(password, "Your password is little secure");
  } else {
    setSuccess(password);
  }

  if (selectValue == "Country") {
    setError(select, "Please select one");
  } else {
    setSuccess(select);
  }
};

const setError = (input, message) => {
  let formElement = input.parentElement.parentElement;

  let iconItem = formElement.querySelectorAll(".icons i");
  let smallItem = formElement.querySelectorAll("small");
  iconItem.forEach((item) => {
    item.classList.add("invisible");
  });

  smallItem.forEach((item) => {
    item.classList.add("hidden");
  });

  let small = formElement.querySelector(".error-msg");
  let icon = formElement.querySelector(".fa-circle-xmark");
  icon.classList.remove("invisible");
  small.classList.remove("hidden");
  small.innerText = message;
};

const setWarning = (input, message) => {
  let formElement = input.parentElement.parentElement;

  let iconItem = formElement.querySelectorAll(" .icons i");
  let smallItem = formElement.querySelectorAll("small");
  iconItem.forEach((item) => {
    item.classList.add("invisible");
  });

  smallItem.forEach((item) => {
    item.classList.add("hidden");
  });

  let small = formElement.querySelector(".warning-msg");
  let icon = formElement.querySelector(".fa-exclamation-circle");

  icon.classList.remove("invisible");
  small.classList.remove("hidden");
  small.innerText = message;
};
const setSuccess = (input) => {
  let formElement = input.parentElement.parentElement;
  let iconItem = formElement.querySelectorAll(".icons i");
  let smallItem = formElement.querySelectorAll("small");
  iconItem.forEach((item) => {
    item.classList.add("invisible");
  });
  smallItem.forEach((item) => {
    item.classList.add("hidden");
  });

  let icon = formElement.querySelector(".fa-check-circle");
  icon.classList.remove("invisible");
};


const checkBoxError=(input,message)=>{
  let small=input.querySelector('.error-msg')
  small.classList.remove('hidden')
  small.innerText=message

}

const checkBoxSuccess=(input)=>{
  let small=input.querySelector('.error-msg')
  small.classList.add('hidden')
}