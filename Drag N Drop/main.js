const empties = document.querySelectorAll(".empty");
const img = document.querySelector("img");
img.addEventListener("dragstart", (eo) => {
  setTimeout(() => {
    img.style.display = "none";
  }, 0);
});
img.addEventListener("dragend", (eo) => {
  img.style.display = "block";
});
empties.forEach((empty) => {
  empty.addEventListener("dragover", (eo) => {
    eo.preventDefault();
  });
  empty.addEventListener("dragenter", (eo) => {
    empty.classList.add("hold");
  });
  empty.addEventListener("dragleave", (eo) => {
    empty.classList.remove("hold");
  });
  empty.addEventListener("drop", (eo) => {
    empty.classList.remove("hold");
    empty.append(img);
  });
});
