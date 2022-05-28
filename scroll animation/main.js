const boxes = document.querySelectorAll(".box");
console.log((window.innerHeight / 5) * 4);

const scrollAnimation = () => {
  boxes.forEach((box) => {
    if (
      box.getBoundingClientRect().top <
      window.innerHeight - box.scrollHeight
    ) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
};
scrollAnimation();
window.addEventListener("scroll", scrollAnimation);
