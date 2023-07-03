//Hello Boss Denmark
let tableBody = document.getElementById("tbody");
let bp = document.getElementById("bp").innerText;
let bpPrice = parseInt(bp);
let latestprice = bpPrice;
let btn = document.getElementById("bid-cta");
let lbp = document.getElementById("lbp");

function al() {
  console.log(bpPrice);
  let inputPrice = document.getElementById("inputPrice");
  if (inputPrice.value > latestprice) {
    btn.disabled = false;
  } else if (latestprice < 0) {
    btn.disabled = false;
  } else {
    btn.disabled = true;
  }
}
function lezgo() {
  let inputPrice = document.getElementById("inputPrice");
  let row = document.createElement("tr");
  let imagecol = document.createElement("td");
  imagecol.classList.add("text-center");
  let image = document.createElement("img");
  image.src = "/assets/Teddy.jpg";
  image.classList.add("rounded-circle");
  image.id = "table-img";
  imagecol.appendChild(image);
  row.appendChild(imagecol);

  let name = document.createElement("td");
  name.innerText = "Darren Ventura";
  row.appendChild(name);
  let price = document.createElement("td");
  price.innerText = `${inputPrice.value}`;
  row.appendChild(price);
  const d = new Date();
  let date = document.createElement("td");
  date.innerText = d;
  row.appendChild(date);
  tableBody.prepend(row);
  latestprice = inputPrice.value;
  lbp.innerText = `${latestprice}`;
  inputPrice.value = null;
  btn.disabled = true;
}
//Low boss Teddys
// ulit ulitan ke par
