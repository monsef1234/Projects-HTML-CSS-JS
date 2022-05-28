const remaining = document.querySelector(".remaining");
const drankCapasity = document.querySelector(".number");
const miniCups = document.querySelectorAll(".mini-cup");
miniCups.forEach((cup, index) => {
  cup.addEventListener("click", () => cupsiDronk(index));
});
const cupsiDronk = (index) => {
  if (
    index === miniCups.length - 1 &&
    miniCups[index].classList.contains("done")
  ) {
    index--;
  }
  if (
    miniCups[index].classList.contains("done") &&
    !miniCups[index].nextElementSibling.classList.contains("done")
  ) {
    index--;
  }
  miniCups.forEach((cup, index2) => {
    if (index2 <= index) {
      cup.classList.add("done");
    } else {
      cup.classList.remove("done");
    }
  });
  update(index);
};
const update = (index) => {
  let howMuch = 12.5 * (index + 1);
  let still = 0.25 * (index + 1);
  drankCapasity.style.height = `${howMuch}%`;
  drankCapasity.innerHTML = `${howMuch}%`;
  remaining.style.height = `${((2 - still) * 100) / 2}%`;
  remaining.innerHTML = `${2 - still}L <br />Remained`;
};
