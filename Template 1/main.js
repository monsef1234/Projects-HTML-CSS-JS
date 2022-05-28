const btns = document.querySelectorAll("body > header > div > nav > ul > li");
const landing = document.getElementsByClassName("landing")[0];
const help = document.getElementsByClassName("help")[0];
const services = document.getElementsByClassName("services")[0];
const signUp = document.getElementsByClassName("sign-up")[0];
btns.forEach((btn) => {
  btn.addEventListener("click", (eo) => {
    eo.preventDefault();
    const element = btn.firstChild.getAttribute("href").slice(1);
    const find = document.getElementById(element);
    window.scrollTo({
      top: find.offsetTop,
      left: 0,
    });
  });
});
window.addEventListener("scroll", (eo) => {
  if (pageYOffset >= landing.offsetTop) {
    btns.forEach((btn, index) => {
      btn.classList.remove("border");
      btns[0].classList.add("border");
    });
  }
  if (pageYOffset >= help.offsetTop - 200) {
    btns.forEach((btn, index) => {
      btn.classList.remove("border");
      btns[1].classList.add("border");
    });
  }
  if (pageYOffset >= services.offsetTop - 200) {
    btns.forEach((btn, index) => {
      btn.classList.remove("border");
      btns[2].classList.add("border");
    });
  }
  if (pageYOffset >= signUp.offsetTop - 200) {
    btns.forEach((btn, index) => {
      btn.classList.remove("border");
    });
  }
});
