const show = document.querySelector(".fa-bars");
const closee = document.querySelector(".fa-xmark");
const nav = document.querySelector(".rotating-nav");
const page = document.querySelector(".parent");
const ul = document.querySelector("ul");
show.addEventListener("click", (eo) => {
  nav.classList.add("rotate");
  page.classList.add("show-nav");
  setTimeout(() => {
    ul.classList.add("move");
  }, 300);
});
closee.addEventListener("click", (eo) => {
  nav.classList.remove("rotate");
  page.classList.remove("show-nav");
  ul.classList.remove("move");
});
