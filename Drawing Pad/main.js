const number = document.getElementsByClassName("number")[0];
const mines = document.getElementsByClassName("mines")[0];
const plus = document.getElementsByClassName("plus")[0];
const color = document.querySelector("input");
const clear = document.querySelector(".delete");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let size = 20;
let isPressed = false;
let x2;
let y2;
const drawCircle = (xInside, yInside) => {
  ctx.beginPath();
  ctx.arc(xInside, yInside, size, 0, Math.PI * 2);
  ctx.fillStyle = `${color.value}`;
  ctx.fill();
};
const drawLine = (xInside, yInside, x2, y2) => {
  ctx.beginPath();
  ctx.moveTo(xInside, yInside);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = `${color.value}`;
  ctx.lineWidth = size * 2;
  ctx.stroke();
};
canvas.addEventListener("mousedown", (eo) => {
  isPressed = true;
});
canvas.addEventListener("mouseup", (eo) => {
  isPressed = false;
  x2 = undefined;
  y2 = undefined;
});
canvas.addEventListener("mousemove", (eo) => {
  if (isPressed === true) {
    const y = eo.clientY;
    const yTop = canvas.offsetTop;
    const yInside = y - yTop;
    const x = eo.clientX;
    const xLeft = canvas.offsetLeft;
    const xInside = x - xLeft;
    drawCircle(xInside, yInside);
    drawLine(xInside, yInside, x2, y2);
    x2 = xInside;
    y2 = yInside;
  }
});
number.innerHTML = `${size}`;
plus.addEventListener("click", (eo) => {
  size++;
  number.innerHTML = `${size}`;
});
mines.addEventListener("click", (eo) => {
  if (size <= 0) {
    size = 0;
  } else {
    size--;
  }
  number.innerHTML = `${size}`;
});
clear.addEventListener("click", (eo) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});
