const labels = document.querySelectorAll("form label");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const body = document.querySelector("body");
labels.forEach((label) => {
  label.innerHTML = label.textContent
    .split("")
    .map((letter) => `<span class="hi">${letter}</span>`)
    .join("");
});
const addwaveEmail = () => {
  const spans = document.querySelectorAll("form label:first-of-type span");
  spans.forEach((span, index) => {
    span.style.color = "red";
    setTimeout(() => {
      span.classList.add("wave");
    }, index * 80);
  });
};
const removewaveEmail = () => {
  const spans = document.querySelectorAll("form label:first-of-type span");
  spans.forEach((span, index) => {
    span.style.color = "inherit";
    setTimeout(() => {
      span.classList.remove("wave");
    }, index * 80);
  });
};
const addwavePassword = () => {
  const spans = document.querySelectorAll("form label:last-of-type span");
  spans.forEach((span, index) => {
    span.style.color = "red";

    setTimeout(() => {
      span.classList.add("wave");
    }, index * 80);
  });
};
const removewavePassword = () => {
  const spans = document.querySelectorAll("form label:last-of-type span");
  spans.forEach((span, index) => {
    span.style.color = "inherit";

    setTimeout(() => {
      span.classList.remove("wave");
    }, index * 80);
  });
};
body.addEventListener("click", (eo) => {
  if (eo.target.classList.contains("email") && email.value == "") {
    addwaveEmail();
    email.nextElementSibling.classList.add("linefocus");
  }
  if (!eo.target.classList.contains("email") && email.value != "") {
    addwaveEmail();
    email.nextElementSibling.classList.add("linefocus");
  }
  if (!eo.target.classList.contains("email") && email.value == "") {
    removewaveEmail();
    email.nextElementSibling.classList.remove("linefocus");
  }
  if (eo.target.classList.contains("password") && password.value == "") {
    addwavePassword();
    password.nextElementSibling.classList.add("linefocus");
  }
  if (!eo.target.classList.contains("password") && password.value != "") {
    addwavePassword();
    password.nextElementSibling.classList.add("linefocus");
  }
  if (!eo.target.classList.contains("password") && password.value == "") {
    removewavePassword();
    password.nextElementSibling.classList.remove("linefocus");
  }
});
const button = document.querySelector("form button");
button.addEventListener("click", (eo) => {
  eo.preventDefault();
});
