var lightsOn = false;
var timer;
var time = 0;
var input = "";

function startTimer() {
  timer = setInterval(incrementTime, 1000);
  toggleLights(true);
  setStatus("Busy");
}

function stopTimer() {
  clearInterval(timer);
  toggleLights(false);
  setStatus("Done");
}

function incrementTime() {
  time--;
  if (time < 0) {
    stopTimer();
    time = 0;
    document.getElementById("time").innerHTML = "00:00";
  } else {
    displayTime();
  }
}

function displayTime() {
  var minutes = Math.floor(time / 60);
  var seconds = time % 60;
  document.getElementById("time").innerHTML = padZero(minutes) + ":" + padZero(seconds);
}

function padZero(value) {
  return value < 10 ? "0" + value : value;
}

function toggleLights(on) {
  var lights = document.getElementsByClassName("light");
  for (var i = 0; i < lights.length; i++) {
    if (on) {
      lights[i].style.opacity = 1;
    } else {
      lights[i].style.opacity = 0;
    }
  }
}

function handleNumberButtonClick(event) {
  var number = event.target.textContent;
  input += number;
  document.getElementById("time").innerHTML = input;
}

function handleClearButtonClick() {
  stopTimer();
  input = "";
  time = 0;
  document.getElementById("time").innerHTML = "00:00";
  setStatus("");
}

function handleStartButtonClick() {
  if (input !== "") {
    time = parseInt(input);
    startTimer();
    input = "";
  }
}

function setStatus(status) {
  var statusElement = document.getElementById("status");
  statusElement.textContent = status;
}

document.getElementById("start").addEventListener("click", handleStartButtonClick);
document.getElementById("clear").addEventListener("click", handleClearButtonClick);

var numberButtons = document.getElementsByClassName("number");
for (var i = 0; i < numberButtons.length; i++) {
  numberButtons[i].addEventListener("click", handleNumberButtonClick);
}
