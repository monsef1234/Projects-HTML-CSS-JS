const empties = document.querySelectorAll(".empty");
const imgs = document.querySelectorAll("img");
imgs.forEach((img) => {
  img.addEventListener("dragstart", (eo) => {
    img.classList.add("drop");
    // setTimeout(() => {
    //   img.style.display = "none";
    // }, 0);
  });
  img.addEventListener("dragend", (eo) => {
    img.style.display = "block";
    img.classList.remove("drop");
  });
});
empties.forEach((empty) => {
  empty.addEventListener("dragover", (eo) => {
    eo.preventDefault();
  });
  empty.addEventListener("dragenter", (eo) => {
    empty.style.border = "2px solid red";
  });
  empty.addEventListener("dragleave", (eo) => {
    empty.style.border = "1px solid black";
  });
  empty.addEventListener("drop", (eo) => {
    empty.style.border = "1px solid black";
    const img = document.getElementsByClassName("drop")[0];
    empty.append(img);
    console.log(img.className);
    console.log("hi");
  });
});
