const imgs = document.querySelectorAll(".box img");
const container = document.querySelector(".container");
// console.log(imgs);
alert("Click on one of these images");
const removeWidth = () => {
  imgs.forEach((img) => {
    img.classList.remove("width");
    const nextElement = img.nextElementSibling;
    nextElement.classList.remove("block");
  });
};
imgs.forEach((img, index) => {
  img.addEventListener("click", (eo) => {
    removeWidth();

    img.classList.add("width");
    const nextElement = img.nextElementSibling;
    nextElement.classList.add("block");
  });
});
console.log(imgs[0].width);
