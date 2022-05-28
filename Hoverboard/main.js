const container = document.querySelector(".container");
for (let i = 0; i <= 398; i++) {
  container.innerHTML += `<div class="box"></div>`;
}
const boxes = document.querySelectorAll(".box");
const colors = ["green", "bluelight", "orange", "purple", "crimson"];
console.log(colors);
boxes.forEach((box) => {
  box.addEventListener("mouseover", (eo) => {
    let random = Math.trunc(Math.random() * colors.length);
    console.log(random);
    box.style.backgroundColor = `${colors[random]}`;
    box.style.boxShadow = `0 0 2px ${colors[random]}, 0 0 10px ${colors[random]}`;
    setTimeout(() => {
      box.style.backgroundColor = `#1c1a1d`;
      box.style.boxShadow = `0 0 0 #1c1a1d`;
    }, 1000);
  });
});
