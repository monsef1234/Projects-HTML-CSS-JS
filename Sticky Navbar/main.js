const header = document.querySelector("header");
window.addEventListener("scroll", (eo) => {
  if (window.pageYOffset >= header.offsetHeight) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
});
