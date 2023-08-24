//Hello Boss Denmark
let tableBody = document.getElementById("tbody");
let bp = document.getElementById("bp").innerText;
let bpPrice = parseInt(bp);
let latestprice = bpPrice;
let btn = document.getElementById("bid-btn");
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
  image.src = "../assets/Teddy.jpg";
  image.classList.add("rounded-circle");
  image.id = "table-img";
  imagecol.appendChild(image);
  row.appendChild(imagecol);

  let name = document.createElement("td");
  name.innerText = "Darren Ventura";
  row.appendChild(name);
  let price = document.createElement("td");
  price.innerText = `₱ ${inputPrice.value}`;
  row.appendChild(price);
  const d = new Date();
  let date = document.createElement("td");
  date.innerText = d;
  row.appendChild(date);
  tableBody.prepend(row);
  latestprice = inputPrice.value;
  lbp.innerText = `₱ ${latestprice}`;
  inputPrice.value = null;
  btn.disabled = true;
}
let tableBody2 = document.getElementById("tbody2");
let bp2 = document.getElementById("bp2").innerText;
let bpPrice2 = parseInt(bp);
let latestprice2 = bpPrice;
let btn2 = document.getElementById("bid-btn2");
let lbp2 = document.getElementById("lbp2");
let lbp3 = document.getElementById("lbp3");

function al2() {
  console.log(bpPrice);
  let inputPrice2 = document.getElementById("inputPrice2");
  if (inputPrice2.value > latestprice2) {
    btn2.disabled = false;
  } else if (latestprice < 0) {
    btn2.disabled = false;
  } else {
    btn2.disabled = true;
  }
}
function lezgo2() {
  let inputPrice2 = document.getElementById("inputPrice2");
  let row = document.createElement("tr");
  let imagecol = document.createElement("td");
  imagecol.classList.add("text-center");
  let image = document.createElement("img");
  image.src = "../assets/Teddy.jpg";
  image.classList.add("rounded-circle");
  image.id = "table-img";
  imagecol.appendChild(image);
  row.appendChild(imagecol);

  let name = document.createElement("td");
  name.innerText = "Darren Ventura";
  row.appendChild(name);
  let price = document.createElement("td");
  price.innerText = `₱ ${inputPrice2.value}`;
  row.appendChild(price);
  const d = new Date();
  let date = document.createElement("td");
  date.innerText = d;
  row.appendChild(date);
  tableBody2.prepend(row);
  latestprice2 = inputPrice2.value;
  lbp2.innerText = `${latestprice2}`;
  lbp3.innerText = `${latestprice2}`;
  inputPrice2.value = null;
  btn2.disabled = true;
}
function getAverageRGB(imgEl) {
  var blockSize = 5, // only visit every 5 pixels
    defaultRGB = { r: 0, g: 0, b: 0 }, // for non-supporting envs
    canvas = document.createElement("canvas"),
    context = canvas.getContext && canvas.getContext("2d"),
    data,
    width,
    height,
    i = -4,
    length,
    rgb = { r: 0, g: 0, b: 0 },
    count = 0;

  if (!context) {
    return defaultRGB;
  }

  height = canvas.height =
    imgEl.naturalHeight || imgEl.offsetHeight || imgEl.height;
  width = canvas.width = imgEl.naturalWidth || imgEl.offsetWidth || imgEl.width;

  context.drawImage(imgEl, 0, 0);

  try {
    data = context.getImageData(0, 0, width, height);
  } catch (e) {
    /* security error, img on diff domain */
    return defaultRGB;
  }

  length = data.data.length;

  while ((i += blockSize * 4) < length) {
    ++count;
    rgb.r += data.data[i];
    rgb.g += data.data[i + 1];
    rgb.b += data.data[i + 2];
  }

  // ~~ used to floor values
  rgb.r = ~~(rgb.r / count);
  rgb.g = ~~(rgb.g / count);
  rgb.b = ~~(rgb.b / count);

  return rgb;
}

//Low boss Teddys
// ulit ulitan ke par
