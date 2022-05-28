const container = document.querySelector(".container");
for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 4; j++) {
    const box = document.createElement("div");
    box.classList.add("box");
    container.append(box);
    box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`;
  }
}
container.addEventListener("click", (eo) => {
  container.classList.toggle("big");
});
