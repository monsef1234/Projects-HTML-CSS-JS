const header = document.querySelectorAll(".header-content");
const closee = () => {
  header.forEach((head) => {
    head.classList.remove("active");
    head.nextElementSibling.style.maxHeight = `0px`;
  });
};
header.forEach((head) => {
  head.addEventListener("click", (eo) => {
    // closee();
    head.classList.toggle("active");
    if (head.classList.contains("active")) {
      const body = head.nextElementSibling;
      body.style.maxHeight = `${body.scrollHeight}px`;
    } else {
      const body = head.nextElementSibling;
      body.style.maxHeight = `0px`;
    }
  });
});
