const numbers = document.querySelectorAll(".one");
const lines = document.querySelectorAll(".call");
const pre = document.getElementById("pre");
const next = document.getElementById("next");
let i = 0;
let iLines = 0;
numbers[i].classList.add("border");
pre.setAttribute("disabled", "");
const removeBorder = () => {
  numbers.forEach((number) => {
    number.classList.remove("border");
  });
};
next.addEventListener("click", (eo) => {
  pre.removeAttribute("disabled", "");
  i++;
  numbers[i].classList.add("border");
  lines[iLines].classList.add("width");
  if (i === numbers.length - 1) {
    next.setAttribute("disabled", "");
  }
  iLines++;
  if (iLines === lines.length) {
    iLines = lines.length;
  }
});
pre.addEventListener("click", (eo) => {
  next.removeAttribute("disabled", "");
  i--;
  iLines--;
  lines[iLines].classList.remove("width");
  numbers[i + 1].classList.remove("border");
  if (i === 0) {
    pre.setAttribute("disabled", "");
  }
});
