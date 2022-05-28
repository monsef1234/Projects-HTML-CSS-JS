const numbers = document.querySelectorAll("#number");
const container = document.querySelector(".container");
const hi = () => {
  numbers.forEach((number) => {
    const stopP = setInterval(() => {
      const range = Number(number.getAttribute("data-range"));
      const c = +number.textContent;
      const diffrence = range / 40;
      if (c < range) {
        number.innerHTML = `${c + diffrence}`;
      } else {
        clearInterval(stopP);
      }
    }, 20);
  });
};
window.addEventListener("scroll", (eo) => {
  if (
    container.getBoundingClientRect().top <
    window.innerHeight - container.offsetHeight
  ) {
    container.style.transform = "translateX(0)";
    setTimeout(hi, 500);
  } else {
    container.style.transform = "translateX(-100vw)";
    numbers.forEach((number) => {
      number.textContent = "0";
    });
  }
});
