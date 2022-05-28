const good = document.getElementById("good");
const cheap = document.getElementById("cheap");
const fast = document.getElementById("fast");
const inputs = document.querySelectorAll("input");
inputs.forEach((input) => {
  input.addEventListener("click", (eo) => {
    if (fast === eo.target && good.checked === true && cheap.checked === true) {
      cheap.checked = false;
    } else if (
      cheap === eo.target &&
      good.checked === true &&
      fast.checked === true
    ) {
      fast.checked = false;
    } else if (
      good === eo.target &&
      cheap.checked === true &&
      fast.checked === true
    ) {
      fast.checked = false;
    }
  });
});
