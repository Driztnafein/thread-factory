const canvas = document.getElementById('main'); // target the canvas element
const ctx = canvas.getContext('2d');

ctx.fillStyle = "purple"; 
ctx.fillRect(10, 10, 25, 100);

ctx.fillStyle = "blue"; 
ctx.fillRect(50, 30, 25, 100);

ctx.fillStyle = "red";
ctx.fillRect(90 , 50, 25, 100);