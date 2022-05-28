const password = document.getElementById("password");
const img = document.querySelector("img");
password.addEventListener("keypress", (eo) => {
  const passwordLength = password.value.length;
  img.style.filter = `blur(${10 - passwordLength}px)`;
});
