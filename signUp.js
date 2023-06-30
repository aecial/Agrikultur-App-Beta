// Change the image of the sign up to the the uploaded pic
let signUpImg = document.getElementById("signUpVect");
let signUpInp = document.getElementById("pic-sign-up");
signUpInp.addEventListener("change", () => {
  signUpImg.src = URL.createObjectURL(signUpInp.files[0]);
  signUpImg.classList.add("rounded-circle");
});

// changes radio label to the specific type of file they need to upload
function radioChange(val) {
  const form = document.getElementById("credentials_inp");
  const formText = document.getElementById("credentials-label");
  if (val === "farmer") {
    formText.innerText = `Upload RSBSA: `;
  } else {
    formText.innerText = "Upload Valid ID: ";
  }
}
// relocate the user to the SignComplete after signing up
function signup() {
  window.location.assign("SignComplete.html");
  alert("Hello");
}

// checks if password are the same for both the inputs
function passCheck() {
  const pass = document.getElementById("password");
  const conf_pass = document.getElementById("conf-password");
  const btn = document.getElementById("form-submit");
  if (pass.value === conf_pass.value) {
    pass.classList.remove("is-invalid");
    conf_pass.classList.remove("is-invalid");
    pass.classList.add("is-valid");
    conf_pass.classList.add("is-valid");
    btn.disabled = false;
  } else {
    pass.classList.remove("is-valid");
    conf_pass.classList.remove("is-valid");
    pass.classList.add("is-invalid");
    conf_pass.classList.add("is-invalid");
    btn.disabled = true;
  }
}

// checks if it is a valid PH phone number
function phoneCheck() {
  const btn = document.getElementById("form-submit");
  const num = document.getElementById("phone-number");
  let start = num.value.slice(0, 2);

  if (num.value.length !== 11 || start !== "09") {
    num.classList.remove("is-valid");
    num.classList.add("is-invalid");
    btn.disabled = true;
  } else {
    num.classList.remove("is-invalid");
    num.classList.add("is-valid");
    btn.disabled = false;
  }
}
