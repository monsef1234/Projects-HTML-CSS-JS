const eventkey = document.querySelector(".eventkey");
const eventkeycode = document.querySelector(".eventkeycode");
const eventcode = document.querySelector(".eventcode");
const press = document.querySelector(".press");
const solution = document.querySelector(".solution");
window.addEventListener("keypress", (eo) => {
  eventkey.innerText = `${eo.key === " " ? "Space" : eo.key}`;
  console.log(eo);
  eventkeycode.innerHTML = `${eo.keyCode}`;
  eventcode.innerHTML = `${eo.code}`;
  press.style.display = "none";
  solution.style.display = "flex";
});
