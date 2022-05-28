const down = document.querySelectorAll(".down");
const boat = document.getElementsByClassName("y")[0];
const up = document.getElementsByClassName("up")[0];
const stars = document.getElementsByClassName("stars")[0];

window.addEventListener("scroll", (eo) => {
  down.forEach((item, index) => {
    down[0].style.transform = `translateY(${pageYOffset * 2}px)`;
    down[1].style.transform = `translateY(${pageYOffset / 4}px)`;
    down[2].style.transform = `translateY(${pageYOffset / 2}px)`;
    down[3].style.transform = `translateY(${pageYOffset / 3}px)`;
    boat.style.transform = `translateX(${pageYOffset * 2}px)`;
    if (pageYOffset > 230) {
      stars.style.backgroundColor = "royalblue";
    } else {
      stars.style.backgroundColor = "transparent";
    }
    // up.style.transform = `translateY(-${pageYOffset}px)`;
  });
});
