const imgs = document.querySelectorAll("img");
const next = document.querySelector(".next");
const pre = document.querySelector(".prev");
imgs.forEach((img, index) => {
  img.style.left = `${index * 100}%`;
});
let i = 0;
setInterval(() => {
  i++;
  nextFunc();
}, 2000);
console.log(imgs.length - 1);
const nextFunc = () => {
  if (i === imgs.length) {
    i = 0;
    imgs.forEach((img, index) => {
      img.style.transform = `translateX(-${i * 100}%)`;
    });
  } else {
    imgs.forEach((img, index) => {
      img.style.transform = `translateX(-${i * 100}%)`;
    });
  }
  setTimeout(nextFunc, 1000);
};
const prevFunc = () => {
  if (i >= 0) {
    imgs.forEach((img, index) => {
      img.style.transform = `translateX(-${i * 100}%)`;
    });
  } else {
    i = imgs.length - 1;
    imgs.forEach((img, index) => {
      img.style.transform = `translateX(-${i * 100}%)`;
    });
  }
};
next.addEventListener("click", (eo) => {
  i++;
  nextFunc();
});
pre.addEventListener("click", (eo) => {
  i--;
  prevFunc();
});
