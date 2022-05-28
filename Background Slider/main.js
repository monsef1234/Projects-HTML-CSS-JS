const body = document.body;
const boxes = document.querySelectorAll(".box");
const right = document.querySelector(".angle-right");
const left = document.querySelector(".angle-left");
let counter = 0;
boxes[0].style.backgroundImage = boxes[counter].style.backgroundImage;
boxes[0].classList.add("active");
right.addEventListener("click", (eo) => {
  counter++;
  if (counter === boxes.length) {
    counter = 0;
  }
  changeBg();
});
left.addEventListener("click", (eo) => {
  eo.preventDefault();
  if (counter === 0) {
    counter = boxes.length;
  }
  counter--;
  changeBg();
});
const changeBg = () => {
  boxes.forEach((box) => {
    box.classList.remove("active");
  });
  boxes[counter].classList.add("active");
  body.style.backgroundImage = boxes[counter].style.backgroundImage;
};
