
let startButton = document.getElementById('startButton');
let stoptButton = document.getElementById('stoptButton');
let ResetButton = document.getElementById('ResetButton');
let number = document.getElementById('number');

let Id=null;
let hours = 0, minutes = 0, seconds = 0, millisecond = 0;

function pad(value, length = 2) {
  return String(value).padStart(length, '0');
}

startButton.onclick = function() {

  Id = setInterval(function() {
    millisecond += 10;
    if (millisecond === 1000) {
      seconds++;
      millisecond = 0;
    }
    if (seconds === 60) {
      minutes++;
      seconds = 0;
    }
    if (minutes === 60) {
      hours++;
      minutes = 0;
    }
    
    number.textContent = 
      `${pad(hours)}:${pad(minutes)}:${pad(seconds)}.${pad(millisecond)}`;
  }, 10);
}

stoptButton.onclick = function() {
  clearInterval(Id);
  Id = null;
}

ResetButton.onclick = function() {
  clearInterval(Id);
  Id = null;
  hours = 0;
  minutes = 0;
  seconds = 0;
  millisecond = 0;
  number.textContent = " 00 : 00 : 00 ";
}
// const startBtn = document.getElementById('startButton');
// const stopBtn = document.getElementById('stoptButton');
// const resetBtn = document.getElementById('ResetButton');
// const numberEl = document.getElementById('number');

// let intervalId = null;
// let hours = 0, minutes = 0, seconds = 0, milliseconds = 0;

// function pad(val, len = 2) {
//   return String(val).padStart(len, '0');
// }

// function updateDisplay() {
//   numberEl.textContent = `${pad(hours)} : ${pad(minutes)} : ${pad(seconds)}`;
//   numberEl.classList.add('pulse');
//   setTimeout(() => numberEl.classList.remove('pulse'), 100);
// }

// function tick() {
//   milliseconds += 10;
//   if (milliseconds >= 1000) {
//     seconds++;
//     milliseconds = 0;
//   }
//   if (seconds >= 60) {
//     minutes++;
//     seconds = 0;
//   }
//   if (minutes >= 60) {
//     hours++;
//     minutes = 0;
//   }
//   updateDisplay();
// }

// startBtn.onclick = () => {
//   if (!intervalId) intervalId = setInterval(tick, 10);
// };

// stopBtn.onclick = () => {
//   clearInterval(intervalId);
//   intervalId = null;
// };

// resetBtn.onclick = () => {
//   clearInterval(intervalId);
//   intervalId = null;
//   hours = minutes = seconds = milliseconds = 0;
//   numberEl.textContent = "00 : 00 : 00";
// };
