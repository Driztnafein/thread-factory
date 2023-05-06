// Timer Canvas
const canvas1 = document.getElementById("timer"); // target the canvas element
const ctx1 = canvas1.getContext("2d");

const countdownMinutes = 2;
const countdownSeconds = countdownMinutes * 60;
let timeLeft = countdownSeconds;
let intervalId;

function drawTimer() {
  ctx1.clearRect(0, 0, canvas1.width, canvas1.height);
  ctx1.font = "20px Arial";
  ctx1.fillStyle = "black";
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const timeString = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  ctx1.fillText(`Time: ${timeString}`, 50, 50);
}

function startTimer() {
  intervalId = setInterval(() => {
    timeLeft--;
    drawTimer();
    if (timeLeft === 0) {
      clearInterval(intervalId);
      alert("Time's up!");
    }
  }, 1000);
}

drawTimer();
startTimer();




// Game Canvas
// const canvas3 = document.getElementById("score"); // target the canvas element
// const ctx3 = canvas.getContext("2d");



// Game Canvas
const canvas2 = document.getElementById("main"); // target the canvas element
const ctx2 = canvas2.getContext("2d");

// Define the grid's properties
const cellSize = 50;
const numRows = canvas2.height / cellSize;
const numCols = canvas2.width / cellSize;

// Draw the grid on the canvas
ctx2.strokeStyle = "white";
for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
        ctx2.beginPath();
        ctx2.rect(j * cellSize, i * cellSize, cellSize, cellSize);
        ctx2.stroke();
    }
}

ctx2.fillStyle = "purple"; 
ctx2.fillRect(0, 0, 50, 100);

ctx2.fillStyle = "blue"; 
ctx2.fillRect(100, 50, 50, 100);

ctx2.fillStyle = "red";
ctx2.fillRect(200, 100, 50, 100);



// Game Canvas
const canvas4 = document.getElementById("challenges"); // target the canvas element
const ctx4 = canvas.getContext("2d");