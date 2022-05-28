const btn = document.querySelector(".btn");
const circle = document.querySelector(".circle");
const remove = () => {
    circle.classList.remove("animation");
}
btn.addEventListener("click", (eo) => {
    eo.preventDefault();
    let x = eo.clientX;
    let y = eo.clientY;
    let yButton = eo.target.offsetTop;
    let xButton = eo.target.offsetLeft;
    let xInside = x - xButton;
    let yInside = y - yButton;
    console.log(yInside, xInside);
    circle.style.top = `${yInside}px`
    circle.style.left = `${xInside}px`
    circle.classList.add("animation");
    setTimeout(remove, 500);
})
