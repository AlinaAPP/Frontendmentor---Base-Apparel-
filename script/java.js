const form = document.querySelector("form.form");
const email = document.querySelector('input[type="email"');
const formItem = document.querySelector("div.form-item");
const errorMsg = document.querySelector("div.form-item + span");

form.addEventListener("submit", (e) => {
  const emailValue = email.value.trim(); // grab the input value without whitespace 

  e.preventDefault(); //the form can not be submitted before email validation
  if (!validEmail(emailValue) || emailValue == "") {
    formItem.classList.add("error");
    formItem.classList.remove("success");
    errorMsg.innerHTML = "Please insert a valid email!";
  } else {
    formItem.classList.remove("error");
    formItem.classList.add("success");
    errorMsg.innerHTML = "Thank you for your email!";

    email.value = "";
  }
});

function validEmail(email) {
  let pattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  return pattern.test(String(email).toLowerCase());
}
