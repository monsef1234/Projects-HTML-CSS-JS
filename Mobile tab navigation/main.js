const tabs = document.querySelectorAll(".tab");
const imgs = document.querySelectorAll("img");
const deleteShowClass = () => {
  imgs.forEach((img) => {
    img.classList.remove("show");
  });
};
const changeImage = (index) => {
  imgs[index].classList.add("show");
};
tabs.forEach((tab, index) => {
  tab.addEventListener("click", (eo) => {
    deleteShowClass();
    changeImage(index);
  });
});
