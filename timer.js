let displayHours = document.getElementById("displayHours");
let displayMinutes = document.getElementById("displayMinutes");
let displaySeconds = document.getElementById("displaySeconds");

let Hours = 12;
let Minutes = 0;
let Seconds = 0;
function update() {
  if (Hours >= 10) {
    displayHours.innerHTML = Hours;
  } else {
    displayHours.innerHTML = `0${Hours}`;
  }
  if (Minutes >= 10) {
    displayMinutes.innerHTML = Minutes;
  } else {
    displayMinutes.innerHTML = `0${Minutes}`;
  }
  if (Seconds >= 10) {
    displaySeconds.innerHTML = Seconds;
  } else {
    displaySeconds.innerHTML = `0${Seconds}`;
  }
  if (Hours == 0 && Minutes == 0 && Seconds == 0) {
    alert("Timer is Up!");
    clearInterval(myInterval);
  } else {
    if (Minutes == 0 && Seconds == 0) {
      Hours--;
      console.log(Hours);
      Minutes = 59;
      Seconds = 59;
    } else if (Seconds > 0) {
      Seconds--;
    } else if (Seconds == 0) {
      Minutes--;

      Seconds = 59;
    }
  }
}
myInterval = setInterval(update, 1000);

//Web Version
let displayHours2 = document.getElementById("displayHours2");
let displayMinutes2 = document.getElementById("displayMinutes2");
let displaySeconds2 = document.getElementById("displaySeconds2");

let Hours2 = 12;
let Minutes2 = 0;
let Seconds2 = 0;
function update2() {
  if (Hours2 >= 10) {
    displayHours2.innerHTML = Hours2;
  } else {
    displayHours2.innerHTML = `0${Hours2}`;
  }
  if (Minutes2 >= 10) {
    displayMinutes2.innerHTML = Minutes2;
  } else {
    displayMinutes2.innerHTML = `0${Minutes2}`;
  }
  if (Seconds2 >= 10) {
    displaySeconds2.innerHTML = Seconds2;
  } else {
    displaySeconds2.innerHTML = `0${Seconds2}`;
  }
  if (Hours2 == 0 && Minutes2 == 0 && Seconds2 == 0) {
    alert("Timer is Up!");
    clearInterval(myInterval);
  } else {
    if (Minutes2 == 0 && Seconds2 == 0) {
      Hours2--;
      console.log(Hours2);
      Minutes2 = 59;
      Seconds2 = 59;
    } else if (Seconds2 > 0) {
      Seconds2--;
    } else if (Seconds2 == 0) {
      Minutes2--;

      Seconds2 = 59;
    }
  }
}
myInterval2 = setInterval(update2, 1000);
