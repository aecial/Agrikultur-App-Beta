function radioChange(val) {
  const form = document.getElementById("credentials_inp");
  const formText = document.getElementById("credentials-label");
  if (val === "farmer") {
    formText.innerText = `Upload RSBSA: `;
  } else {
    formText.innerText = "Upload Valid ID: ";
  }
}
