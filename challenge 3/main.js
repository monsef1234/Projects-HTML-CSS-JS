const circle = document.getElementsByClassName("circle")[0];
const upp = document.querySelector("#click-up");
const bottom = document.getElementById("click-bottom");
let i = 0;
upp.addEventListener("click", (eo) => {
    i = i + 90;
    circle.style.transform = `rotate(${i}deg)`;
    console.log(i);
})
bottom.addEventListener("click", (eo) => {
    i = i - 90;
    circle.style.transform = `rotate(${i}deg)`;
    console.log(i);
})