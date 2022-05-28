const boxes = document.querySelectorAll(".container .moral .box");
const btn = document.querySelector("button");
const popUp = document.querySelector(".popup");
const container = document.querySelector(".container");
const removeClassActive = () => {
  boxes.forEach((box) => {
    box.classList.remove("active");
  });
};
boxes.forEach((box) => {
  box.addEventListener("click", (eo) => {
    removeClassActive();
    box.classList.add("active");
    const place = document.querySelector(".mood");
    const mood = box.getElementsByTagName("small")[0].textContent;
    place.innerHTML = mood;
  });
});
btn.addEventListener("click", (eo) => {
  if (
    boxes[0].classList.contains("active") ||
    boxes[1].classList.contains("active") ||
    boxes[boxes.length - 1].classList.contains("active")
  ) {
    container.style.display = "none";
    popUp.style.display = "block";
  } else {
    alert("Choose one!");
  }
});
popUp.addEventListener("click", (eo) => {
  container.style.display = "block";
  popUp.style.display = "none";
});
