const texts = document.querySelectorAll(".text");
const imgs = document.querySelectorAll(".img");
const arrowUp = document.querySelector(".fa-arrow-up");
const arrowDown = document.querySelector(".fa-arrow-down");
let counter = 0;
texts.forEach((text, index) => {
  text.style.top = `-${index * 100}%`;
});
imgs.forEach((img, index) => {
  img.style.top = `${index * 100}%`;
});
const arrowUpFunc = () => {
  if (counter === texts.length - 1) {
    counter = 0;
  } else {
    counter++;
  }
  texts.forEach((text, index) => {
    text.style.transform = `translateY(${counter * 100}%)`;
  });
  imgs.forEach((img) => {
    img.style.transform = `translateY(-${counter * 100}%)`;
  });
};
const arrowDownFunc = () => {
  if (counter === 0) {
    counter = texts.length - 1;
  } else {
    counter--;
  }
  texts.forEach((text, index) => {
    text.style.transform = `translateY(${counter * 100}%)`;
  });
  imgs.forEach((img) => {
    img.style.transform = `translateY(-${counter * 100}%)`;
  });
};
arrowUp.addEventListener("click", arrowUpFunc);
arrowDown.addEventListener("click", arrowDownFunc);
