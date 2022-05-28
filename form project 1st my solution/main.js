const translate = document.querySelectorAll("#translate");
const translateP = document.querySelectorAll("#translatepassword");
const containerr = document.querySelector("body");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const add = () => {
  translate.forEach((item, index) => {
    setTimeout(() => {
      item.classList.add("move");
    }, index * 50);
  });
};
const remove = () => {
  translate.forEach((item, index) => {
    setTimeout(() => {
      item.classList.remove("move");
    }, index * 50);
  });
};
const addP = () => {
  translateP.forEach((item, index) => {
    setTimeout(() => {
      item.classList.add("move");
    }, index * 50);
  });
};
const removeP = () => {
  translateP.forEach((item, index) => {
    setTimeout(() => {
      item.classList.remove("move");
    }, index * 50);
  });
};
containerr.addEventListener("click", (eo) => {
  if (eo.target.classList.contains("email") && email.value == "") {
    add();
    eo.target.nextElementSibling.classList.add("linefocus");
  }
  if (!eo.target.classList.contains("email") && email.value != "") {
    add();
    const line = document.querySelector(".line");
    line.classList.add("linefocus");
  }
  if (!eo.target.classList.contains("email") && email.value == "") {
    remove();
    const line = document.querySelector(".line");
    line.classList.remove("linefocus");
  }
  if (eo.target.classList.contains("password") && password.value == "") {
    addP();
  }
  if (!eo.target.classList.contains("password") && password.value != "") {
    addP();
  }
  if (!eo.target.classList.contains("password") && password.value == "") {
    removeP();
  }
});
