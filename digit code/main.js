const inputs = document.querySelectorAll("input");
const regNumbers = /^[0-9]*$/;
inputs[0].focus();
inputs.forEach((item, index) => {
  item.addEventListener("keyup", (eo) => {
    item.value = "";
    if (eo.key >= 0 && eo.key <= 9 && index != inputs.length - 1) {
      item.value = `${eo.key}`;
      item.setAttribute("disabled", "");
      item.nextElementSibling.removeAttribute("disabled", "");
      item.nextElementSibling.focus();
    } else if (eo.key >= 0 && eo.key <= 9 && index === inputs.length - 1) {
      item.value = `${eo.key}`;
    } else if (index != 0 && eo.key === "Backspace") {
      item.setAttribute("disabled", "");
      item.previousElementSibling.removeAttribute("disabled", "");
      item.previousElementSibling.focus();
    }
  });
});
