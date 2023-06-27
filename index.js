/*const form = document.getElementById("form-true");

form.addEventListener("submit", (e) => {
  if (!form.checkValidity()) {
    e.preventDefault();
  }
  form.classList.add("was-validated");
});
*/

function edit() {
  preventDefault();
  let btn = document.querySelector(".form-control");
  alert(val);
  btn.disabled = false;
}
// Change Img on file upload and enables save button on the image container
let img = document.getElementById("profile-pic");
let input = document.getElementById("change-prof");
let saveImg = document.getElementById("save-img-btn");
let mySaveBtn = document.getElementById("save-btn");
input.addEventListener("change", () => {
  img.src = URL.createObjectURL(input.files[0]);
  saveImg.disabled = false;
});

// Disable the text input on the different form control on the form container
function ror(val) {
  document.getElementById(`${val}`).disabled = false;
}

// enable save btn on form cotnainer
function boom() {
  mySaveBtn.disabled = false;
}
