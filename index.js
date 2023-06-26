/*const form = document.getElementById("form-true");

form.addEventListener("submit", (e) => {
  if (!form.checkValidity()) {
    e.preventDefault();
  }
  form.classList.add("was-validated");
});
*/
function radioChange(val) {
  const form = document.getElementById("credentials_inp");
  const formText = document.getElementById("credentials-label");
  if (val === "farmer") {
    formText.innerText = `Upload RSBSA: `;
  } else {
    formText.innerText = "Upload Valid ID: ";
  }
}

function signup() {
  window.location.assign("SignComplete.html");
  alert("Hello");
}

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

function edit() {
  preventDefault();
  let btn = document.querySelector(".form-control");
  alert(val);
  btn.disabled = false;
}

let img = document.getElementById("profile-pic");
let input = document.getElementById("change-prof");
let saveImg = document.getElementById("save-img-btn");
let mySaveBtn = document.getElementById("save-btn");
input.addEventListener("change", () => {
  img.src = URL.createObjectURL(input.files[0]);
  saveImg.disabled = false;
});

saveImg.addEventListener("onclick", (e) => {
  e.preventDefault();
});

function ror(val) {
  document.getElementById(`${val}`).disabled = false;
}

function boom() {
  mySaveBtn.disabled = false;
}
