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

  // if (Seconds > 0) {
  //   Seconds--;
  //   if (Seconds < 10) {
  //     displaySeconds.innerHTML = `0${Seconds}`;
  //   } else {
  //     displaySeconds.innerHTML = Seconds;
  //   }
  // }
}
myInterval = setInterval(update, 1000);
