const range = document.querySelector("input");
const label = document.querySelector("label");
label.style.left = `${range.value}%`;
label.innerHTML = `${range.value}`;

range.addEventListener("input", (eo) => {
  label.style.left = `${range.value}%`;
  label.innerHTML = `${range.value}`;
});
