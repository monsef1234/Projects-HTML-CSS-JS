const autoText = document.querySelector(".auto");
const speed = document.getElementById("speed");
const text = "We Love Programming!";
let i = 0;
let speedText = speed.value * 100;
const func = () => {
  i++;
  if (i <= text.length) {
    autoText.innerHTML = text.slice(0, i);
  } else {
    i = 0;
  }
  setTimeout(func, speedText);
};
func();
speed.addEventListener("change", (eo) => {
  speedText = speed.value * 100;
});
