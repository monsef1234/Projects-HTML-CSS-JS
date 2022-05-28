const percentage = document.querySelectorAll("#percentage");
const preLoad = document.querySelector(".pre-loader");
let counterOne = 0;
let counterTwo = 0;
let counterThree = 0;
window.addEventListener("load", () => {
  preLoad.classList.add("none");
});
const stopOne = setInterval(() => {
  if (counterOne < 90) {
    counterOne += 1;
    percentage[0].innerHTML = `<span id="percentage">${counterOne}<span id="edit">%</span></span>
        `;
  } else {
    clearInterval(stopOne);
  }
}, 10);
const stopTwo = setInterval(() => {
  if (counterTwo < 85) {
    counterTwo += 1;
    percentage[1].innerHTML = `<span id="percentage">${counterTwo}<span id="edit">%</span></span>
        `;
  } else {
    clearInterval(stopTwo);
  }
}, 10);
const stopThree = setInterval(() => {
  if (counterThree < 60) {
    counterThree += 1;
    percentage[2].innerHTML = `<span id="percentage">${counterThree}<span id="edit">%</span></span>
        `;
  } else {
    clearInterval(stopThree);
  }
}, 10);
