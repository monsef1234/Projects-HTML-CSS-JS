const icon = document.querySelector(".icon");
const ul = document.querySelector(".container ul");

icon.addEventListener("click", (eo) => {
  const panel = icon.parentNode;
  panel.classList.toggle("active");
  //   if (panel.classList.contains("active")) {
  //     ul.style.width = "0px";
  //     ul.style.transform = "translateX(60px)";
  //     ul.style.opacity = "0";
  //     setTimeout(() => {
  //       ul.style.display = "none";
  //     }, 500);
  //   } else {
  //     ul.style.display = "flex";
  //     ul.style.transform = "translateX(0px)";
  //     ul.style.width = `${ul.scrollWidth}px`;
  //     ul.style.opacity = "1";
  //   }
});
